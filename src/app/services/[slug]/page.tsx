import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  CheckCircle2,
  ListChecks,
  ClipboardList,
  AlertCircle,
  XCircle,
  BookOpen,
  ArrowRight,
  Wrench,
  Smartphone,
} from "lucide-react";
import { services, getServiceBySlug, getServicesByCategory } from "@/data/services";
import { getCategoryById } from "@/data/categories";
import { getRelatedGuides } from "@/data/guides";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ProcessTimeline } from "@/components/service/ProcessTimeline";
import { ImportantNotice } from "@/components/service/ImportantNotice";
import { PreparationChecklist } from "@/components/service/PreparationChecklist";
import { ServiceFaq } from "@/components/service/ServiceFaq";
import { ServiceConsultationAside } from "@/components/service/ServiceConsultationAside";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ServiceGrid } from "@/components/service/ServiceGrid";
import { getServiceFaqItems } from "@/data/serviceFaq";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/config/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const category = getCategoryById(service.categoryId);
  const related = service.categoryId
    ? getServicesByCategory(service.categoryId).filter((s) => s.id !== service.id).slice(0, 3)
    : [];
  const relatedGuides = getRelatedGuides(service.slug);

  const breadcrumbItems = [
    { "@type": "ListItem", position: 1, name: "Beranda", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "Layanan", item: absoluteUrl("/services") },
    {
      "@type": "ListItem",
      position: 3,
      name: service.name,
      item: absoluteUrl(`/services/${service.slug}`),
    },
  ];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems,
  };

  const serviceFaqItems = getServiceFaqItems(service);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: serviceFaqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(`/services/${service.slug}`)}#service`,
    name: service.h1 || service.name,
    description: service.shortDescription,
    serviceType: service.name,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.whatsappNumber || undefined,
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
      url: absoluteUrl(`/services/${service.slug}`),
    },
    url: absoluteUrl(`/services/${service.slug}`),
    audience: { "@type": "Audience", audienceType: "Pemilik Smartphone Android di Indonesia" },
  };

  return (
    <div className="container-page py-10 md:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbJsonLd, serviceJsonLd, faqJsonLd]) }}
      />
      <Breadcrumbs
        items={[
          { label: "Layanan", href: "/services" },
          { label: service.name },
        ]}
      />

      {/* Hero with Search Intent & Primary Action */}
      <ServiceHero service={service} />

      {/* Main Grid: Content (Left) + High-Converting Consultation Sidebar (Right) */}
      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start">
        <div className="space-y-12">
          {/* Symptoms Checklist */}
          {service.symptoms && service.symptoms.length > 0 && (
            <section id="symptoms-heading" aria-labelledby="symptoms-title" className="max-w-3xl">
              <h2 id="symptoms-title" className="flex items-center gap-2 text-lg font-bold tracking-tight text-foreground md:text-xl">
                <AlertCircle className="size-5 text-accent" aria-hidden="true" />
                Apakah Kondisi Seperti Ini Terjadi pada HP Anda?
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                Jika Anda mengalami salah satu gejala berikut, layanan ini dirancang untuk menanganinya:
              </p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {service.symptoms.map((symptom, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 rounded-lg border border-border bg-card p-3.5">
                    <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-accent-subtle text-accent font-bold text-xs">
                      !
                    </span>
                    <span className="text-xs sm:text-sm leading-relaxed text-foreground">{symptom}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Root Causes Section */}
          {service.causes && service.causes.length > 0 && (
            <section aria-labelledby="causes-heading" className="max-w-3xl">
              <h2 id="causes-heading" className="flex items-center gap-2 text-lg font-bold tracking-tight text-foreground md:text-xl">
                <Wrench className="size-5 text-accent" aria-hidden="true" />
                Akar Masalah &amp; Penyebab Teknis
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                Kerusakan software pada kategori ini umumnya dipicu oleh faktor-faktor teknis berikut:
              </p>
              <ul className="mt-4 space-y-2.5">
                {service.causes.map((cause, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 rounded-lg border border-border bg-card p-3.5">
                    <span className="mt-1 size-1.5 rounded-full bg-accent shrink-0" />
                    <span className="text-xs sm:text-sm leading-relaxed text-foreground">{cause}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Service Overview */}
          <section aria-labelledby="overview-heading" className="max-w-3xl">
            <h2 id="overview-heading" className="text-lg font-bold tracking-tight text-foreground md:text-xl">
              Tentang Penanganan {service.name}
            </h2>
            <div className="mt-3 space-y-4 text-sm sm:text-base leading-relaxed text-foreground">
              {service.description.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* Supported Brands & Chipsets */}
          {(service.supportedBrands || service.supportedChipsets) && (
            <section aria-labelledby="compatibility-heading" className="max-w-3xl rounded-lg border border-border bg-card p-5 sm:p-6 shadow-xs">
              <h2 id="compatibility-heading" className="flex items-center gap-2 text-lg font-bold tracking-tight text-foreground md:text-xl">
                <Smartphone className="size-5 text-accent" aria-hidden="true" />
                Dukungan Merek HP &amp; Platform Chipset
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                Penanganan teknis disesuaikan dengan arsitektur vendor dan protokol flashing resmi:
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {service.supportedBrands && (
                  <div className="rounded-md border border-border/80 bg-muted/30 p-4">
                    <p className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground">
                      Merek yang Didukung
                    </p>
                    <ul className="mt-2.5 space-y-1.5 text-xs sm:text-sm text-foreground">
                      {service.supportedBrands.map((b, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="size-1.5 rounded-full bg-accent shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {service.supportedChipsets && (
                  <div className="rounded-md border border-border/80 bg-muted/30 p-4">
                    <p className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground">
                      Chipset &amp; Protokol Flash
                    </p>
                    <ul className="mt-2.5 space-y-1.5 text-xs sm:text-sm text-foreground">
                      {service.supportedChipsets.map((c, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="size-1.5 rounded-full bg-accent shrink-0" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Who It's For & Who It's Not For */}
          {(service.whoIsItFor || service.whoIsItNotFor) && (
            <section aria-labelledby="audience-heading" className="max-w-3xl">
              <h2 id="audience-heading" className="text-lg font-bold tracking-tight text-foreground md:text-xl">
                Kesesuaian Layanan
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {service.whoIsItFor && (
                  <div className="rounded-lg border border-success/30 bg-success/5 p-4 sm:p-5">
                    <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-success">
                      <CheckCircle2 className="size-4" />
                      Cocok untuk Anda Jika:
                    </p>
                    <ul className="mt-3 space-y-2">
                      {service.whoIsItFor.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-foreground leading-relaxed">
                          <span className="mt-1 size-1.5 rounded-full bg-success shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.whoIsItNotFor && (
                  <div className="rounded-lg border border-border bg-slate-50 p-4 sm:p-5">
                    <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                      <XCircle className="size-4 text-slate-400" />
                      Tidak Cocok untuk:
                    </p>
                    <ul className="mt-3 space-y-2">
                      {service.whoIsItNotFor.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                          <span className="mt-1 size-1.5 rounded-full bg-slate-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Use Cases / What TechFix Can Help With */}
          <section aria-labelledby="usecases-heading" className="max-w-3xl">
            <h2 id="usecases-heading" className="flex items-center gap-2 text-lg font-bold tracking-tight text-foreground md:text-xl">
              <ListChecks className="size-5 text-accent" aria-hidden="true" />
              Apa Saja yang Bisa Dibantu
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {service.useCases.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5 rounded-lg border border-border bg-card p-4">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
                  <span className="text-xs sm:text-sm leading-relaxed text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Preparation Checklist */}
          <section aria-labelledby="preparation-heading" className="max-w-3xl">
            <div className="flex items-center gap-2">
              <ClipboardList className="size-5 text-accent" aria-hidden="true" />
              <h2 id="preparation-heading" className="text-lg font-bold tracking-tight text-foreground md:text-xl">
                Hal yang Perlu Anda Siapkan
              </h2>
            </div>
            <div className="mt-3 rounded-lg border border-border bg-card p-5">
              <PreparationChecklist items={service.preparation} />
            </div>
          </section>

          {/* Process Timeline */}
          <section aria-labelledby="process-heading" className="max-w-3xl">
            <h2 id="process-heading" className="text-lg font-bold tracking-tight text-foreground md:text-xl">
              Alur Proses Penanganan
            </h2>
            <div className="mt-3 rounded-lg border border-border bg-card p-5">
              <ProcessTimeline steps={service.processSteps} />
            </div>
          </section>

          {/* Technical Deep Dive */}
          {service.technicalDeepDive && service.technicalDeepDive.length > 0 && (
            <section aria-labelledby="deepdive-heading" className="max-w-3xl space-y-6">
              <div className="border-t border-border pt-6">
                <h2 id="deepdive-heading" className="text-lg font-bold tracking-tight text-foreground md:text-xl">
                  Prosedur Teknis &amp; Rekayasa Partisi
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                  Penjelasan mendalam mengenai arsitektur sistem dan tahapan rekayasa software yang kami terapkan:
                </p>
              </div>
              {service.technicalDeepDive.map((section, idx) => (
                <div key={idx} className="space-y-3 rounded-lg border border-border bg-card p-5 sm:p-6 shadow-xs">
                  <h3 className="text-base font-bold text-foreground">
                    {section.heading}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {section.body}
                  </p>
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="mt-2.5 space-y-1.5 border-t border-border/60 pt-3 text-xs text-foreground/80">
                      {section.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="mt-1 size-1.5 rounded-full bg-accent shrink-0" />
                          <span className="leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          )}

          {/* Risk Transparency Notice */}
          <section aria-labelledby="notice-heading" className="max-w-3xl">
            <h2 id="notice-heading" className="sr-only">
              Pemberitahuan Penting &amp; Risiko
            </h2>
            <ImportantNotice title="Risiko dan Hal yang Perlu Diketahui Sebelum Memulai" items={service.importantNotices} />
          </section>

          {/* Related Educational Guides */}
          {relatedGuides.length > 0 && (
            <section aria-labelledby="guides-related-heading" className="max-w-3xl border-t border-border pt-8">
              <div className="flex items-center gap-2">
                <BookOpen className="size-5 text-accent" />
                <h2 id="guides-related-heading" className="text-lg font-bold tracking-tight text-foreground md:text-xl">
                  Panduan Edukasi Terkait
                </h2>
              </div>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                Pelajari rincian teknis sebelum menentukan langkah penanganan:
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {relatedGuides.map((guide) => (
                  <Link
                    key={guide.id}
                    href={`/guides/${guide.slug}`}
                    className="group rounded-lg border border-border bg-card p-4 transition-colors hover:border-accent"
                  >
                    <span className="text-[11px] font-semibold text-accent">{guide.categoryName}</span>
                    <h3 className="mt-1 text-sm font-bold text-foreground group-hover:text-accent transition-colors line-clamp-1">
                      {guide.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                      {guide.excerpt}
                    </p>
                    <div className="mt-2 flex items-center gap-1 text-xs font-semibold text-accent">
                      <span>Baca selengkapnya</span>
                      <ArrowRight className="size-3" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Service FAQ */}
          <ServiceFaq items={serviceFaqItems} />
        </div>

        {/* Right Sticky Column: High-Converting Consultation Aside */}
        <ServiceConsultationAside service={service} />
      </div>

      {/* Related Services */}
      {related.length > 0 ? (
        <section className="mt-16 border-t border-border pt-10" aria-labelledby="related-heading">
          <h2 id="related-heading" className="mb-5 text-lg font-bold tracking-tight text-foreground md:text-xl">
            Layanan Lain di Kategori {category?.name}
          </h2>
          <ServiceGrid services={related} />
          <p className="mt-5">
            <Link href="/services" className="text-sm font-semibold text-accent hover:text-accent-hover transition-colors cursor-pointer">
              Lihat seluruh katalog layanan lengkap →
            </Link>
          </p>
        </section>
      ) : null}
    </div>
  );
}