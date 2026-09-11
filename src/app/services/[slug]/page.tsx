import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { AlertTriangle, CheckCircle2, ListChecks, ClipboardList } from "lucide-react";
import { services, getServiceBySlug, getServicesByCategory } from "@/data/services";
import { getCategoryById } from "@/data/categories";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ProcessTimeline } from "@/components/service/ProcessTimeline";
import { ImportantNotice } from "@/components/service/ImportantNotice";
import { PreparationChecklist } from "@/components/service/PreparationChecklist";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ServiceGrid } from "@/components/service/ServiceGrid";

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
    keywords: service.seo.keywords,
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

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Layanan", item: absoluteUrl("/services") },
      { "@type": "ListItem", position: 3, name: service.name, item: absoluteUrl(`/services/${service.slug}`) },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.shortDescription,
    serviceType: service.name,
    provider: { "@type": "Organization", name: siteConfig.name, url: absoluteUrl("/") },
    url: absoluteUrl(`/services/${service.slug}`),
    audience: { "@type": "Audience", audienceType: "Android device users" },
  };

  return (
    <div className="container-page py-10 md:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbJsonLd, serviceJsonLd]) }}
      />
      <Breadcrumbs
        items={[
          { label: "Layanan", href: "/services" },
          ...(category ? [{ label: category.name, href: `/categories/${category.slug}` }] : []),
          { label: service.name },
        ]}
      />

      <ServiceHero service={service} />

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_300px] lg:items-start">
        <div className="space-y-12">
          <section aria-labelledby="overview-heading" className="max-w-3xl">
            <h2 id="overview-heading" className="text-lg font-bold tracking-tight text-foreground md:text-xl">
              Tentang Layanan Ini
            </h2>
            <div className="mt-3 space-y-4 leading-relaxed text-foreground">
              {service.description.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section aria-labelledby="usecases-heading" className="max-w-3xl">
            <h2 id="usecases-heading" className="flex items-center gap-2 text-lg font-bold tracking-tight text-foreground md:text-xl">
              <ListChecks className="size-5 text-accent" aria-hidden="true" />
              Kapan Layanan Ini Dibutuhkan
            </h2>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              {service.useCases.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5 rounded-lg border border-border bg-card p-4">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="preparation-heading" className="max-w-3xl">
            <div className="flex items-center gap-2">
              <ClipboardList className="size-5 text-accent" aria-hidden="true" />
              <h2 id="preparation-heading" className="text-lg font-bold tracking-tight text-foreground md:text-xl">
                Persiapan yang Perlu Anda Siapkan
              </h2>
            </div>
            <div className="mt-3 rounded-lg border border-border bg-card p-5">
              <PreparationChecklist items={service.preparation} />
            </div>
          </section>

          <section aria-labelledby="process-heading" className="max-w-3xl">
            <h2 id="process-heading" className="text-lg font-bold tracking-tight text-foreground md:text-xl">
              Alur Proses
            </h2>
            <div className="mt-3 rounded-lg border border-border bg-card p-5">
              <ProcessTimeline steps={service.processSteps} />
            </div>
          </section>

          <section aria-labelledby="notice-heading" className="max-w-3xl">
            <h2 id="notice-heading" className="sr-only">
              Pemberitahuan Penting
            </h2>
            <ImportantNotice title="Hal yang perlu Anda ketahui sebelumnya" items={service.importantNotices} />
          </section>
        </div>

        <aside aria-label="Konsultasi">
          <div className="rounded-lg border border-border bg-card p-5">
            <h2 className="text-base font-bold tracking-tight text-foreground">
              Bicara dengan CS kami
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              Jelaskan kondisi perangkat Anda. CS akan menilai kelayakan dan menjelaskan
              langkah selanjutnya.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition-colors cursor-pointer"
            >
              Konsultasi Sekarang
            </Link>
            <p className="mt-3 flex items-start gap-2 rounded-md bg-muted p-2.5 text-xs leading-relaxed text-muted-foreground">
              <AlertTriangle className="mt-0.5 size-3.5 shrink-0 text-warning" aria-hidden="true" />
              Hasil tidak dijamin sebelum kondisi perangkat Anda diperiksa oleh CS.
            </p>
            <p className="mt-3 rounded-md border border-warning/30 bg-warning/5 p-2.5 text-xs leading-relaxed text-foreground">
              Konsultasi gratis. Biaya layanan dikonfirmasi setelah pengecekan perangkat Anda.
            </p>
          </div>
        </aside>
      </div>

      {related.length > 0 ? (
        <section className="mt-12" aria-labelledby="related-heading">
          <h2 id="related-heading" className="mb-5 text-lg font-bold tracking-tight text-foreground md:text-xl">
            Layanan lain di kategori {category?.name}
          </h2>
          <ServiceGrid services={related} />
          <p className="mt-5">
            <Link href="/services" className="text-sm font-semibold text-accent hover:text-accent-hover transition-colors cursor-pointer">
              Lihat semua layanan →
            </Link>
          </p>
        </section>
      ) : null}
    </div>
  );
}