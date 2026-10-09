import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Clock,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Check,
} from "lucide-react";
import { guides, getGuideBySlug } from "@/data/guides";
import { services } from "@/data/services";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { hasWhatsapp, whatsappLink, siteConfig } from "@/config/site";
import { buildConsultationMessage } from "@/lib/contact";
import { buildMetadata, absoluteUrl } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};

  return buildMetadata({
    title: guide.seo.title,
    description: guide.seo.description,
    path: `/guides/${guide.slug}`,
    keywords: guide.seo.keywords,
  });
}

export default async function GuideDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const relatedServices = services.filter((s) => guide.relatedServiceSlugs.includes(s.slug));
  const otherGuides = guides.filter((g) => g.id !== guide.id).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.excerpt,
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/guides/${guide.slug}`),
    },
    author: {
      "@type": "Organization",
      name: "Tim Teknisi Spesialis TechFix Software",
      url: absoluteUrl("/about"),
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/icon-192.png"),
      },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Panduan", item: absoluteUrl("/guides") },
      { "@type": "ListItem", position: 3, name: guide.title, item: absoluteUrl(`/guides/${guide.slug}`) },
    ],
  };

  const isWa = hasWhatsapp();
  const waConsultMessage = buildConsultationMessage(
    undefined,
    `Saya baru saja membaca panduan "${guide.title}" dan ingin konsultasi mengenai kondisi HP saya.`,
  );
  const waHref = isWa ? whatsappLink(waConsultMessage) : null;

  return (
    <article className="container-page py-10 md:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbJsonLd, articleJsonLd]),
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Panduan", href: "/guides" },
          { label: guide.title },
        ]}
      />

      {/* Article Header */}
      <header className="mx-auto max-w-3xl border-b border-border pb-8">
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="rounded-md bg-accent-subtle px-2.5 py-1 font-semibold text-accent">
            {guide.categoryName}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="size-3.5" />
            {guide.readTime}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="size-3.5" />
            Diperbarui: {guide.updatedAt}
          </span>
        </div>

        <h1 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl leading-tight">
          {guide.title}
        </h1>

        {/* E-E-A-T Author Byline */}
        <div className="mt-3.5 flex items-center gap-2 text-xs text-muted-foreground">
          <span>Ditulis &amp; Ditinjau oleh:</span>
          <Link
            href="/about"
            className="inline-flex items-center gap-1 font-semibold text-foreground hover:text-accent transition-colors"
          >
            <span>Tim Teknisi Spesialis TechFix Software</span>
            <span className="text-[10px] text-accent font-mono bg-accent-subtle px-1.5 py-0.5 rounded">
              Spesialis Android
            </span>
          </Link>
        </div>

        <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
          {guide.excerpt}
        </p>
      </header>

      {/* Main Layout: Article Body + Consultation Aside */}
      <div className="mx-auto mt-8 grid max-w-3xl gap-8">
        {/* Key Takeaways Box */}
        <section aria-labelledby="takeaways-heading" className="rounded-lg border border-accent/25 bg-accent-subtle/40 p-5 sm:p-6">
          <h2 id="takeaways-heading" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
            <span className="size-1.5 rounded-full bg-accent" />
            Poin Kunci yang Perlu Diketahui
          </h2>
          <ul className="mt-3 space-y-2.5 text-xs sm:text-sm text-foreground">
            {guide.keyTakeaways.map((point, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <Check className="mt-0.5 size-4 shrink-0 text-accent font-bold" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Symptoms Checklist (if applicable) */}
        {guide.symptoms && guide.symptoms.length > 0 && (
          <section aria-labelledby="symptoms-heading" className="rounded-lg border border-border bg-card p-5 sm:p-6 shadow-xs">
            <h2 id="symptoms-heading" className="text-base font-bold text-foreground">
              Gejala Khas yang Umum Muncul:
            </h2>
            <ul className="mt-3 space-y-2 text-xs sm:text-sm text-muted-foreground">
              {guide.symptoms.map((symp, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 size-1.5 rounded-full bg-accent shrink-0" />
                  <span className="text-foreground leading-relaxed">{symp}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Content Sections */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-foreground">
          {guide.sections.map((section, idx) => (
            <section key={idx} className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight text-foreground">
                {section.heading}
              </h2>
              <p className="leading-relaxed text-slate-700">{section.body}</p>
              {section.bullets && section.bullets.length > 0 && (
                <ul className="mt-3 space-y-2 rounded-lg bg-muted/40 p-4 text-xs sm:text-sm">
                  {section.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-foreground leading-relaxed">
                      <span className="mt-1 size-1.5 rounded-full bg-slate-500 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Practical Checklist: What to check & When to consult */}
        <div className="grid gap-5 sm:grid-cols-2 pt-4 border-t border-border">
          {/* Self check */}
          <div className="rounded-lg border border-border bg-card p-5">
            <h3 className="flex items-center gap-2 text-sm font-bold text-foreground">
              <CheckCircle2 className="size-4 text-success" />
              Bisa Dicek Mandiri:
            </h3>
            <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
              {guide.whatUserCanCheck.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 size-1.5 rounded-full bg-success shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* When to consult */}
          <div className="rounded-lg border border-warning/30 bg-warning/5 p-5">
            <h3 className="flex items-center gap-2 text-sm font-bold text-foreground">
              <AlertTriangle className="size-4 text-warning" />
              Saatnya Konsultasi Teknisi:
            </h3>
            <ul className="mt-3 space-y-2 text-xs text-foreground/80">
              {guide.whenToConsult.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 size-1.5 rounded-full bg-warning shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Relevant Service CTA Banner */}
        {relatedServices.length > 0 && (
          <section aria-labelledby="related-service-cta" className="rounded-lg border border-border bg-primary p-6 sm:p-8 text-primary-foreground">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/90">
              <span className="size-1.5 rounded-full bg-accent" />
              <span>Layanan Terkait untuk Kondisi Ini</span>
            </div>

            <h2 id="related-service-cta" className="mt-2 text-xl font-bold text-white">
              Butuh bantuan penanganan teknis untuk masalah ini?
            </h2>

            <p className="mt-2 text-xs sm:text-sm text-white/80 leading-relaxed">
              Teknisi kami siap membantu menangani layanan{" "}
              {relatedServices.map((s) => s.name).join(" atau ")} dengan pengecekan kompatibilitas di awal dan transparansi risiko.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {waHref ? (
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex h-11 items-center gap-2 rounded-md bg-whatsapp px-5 text-xs sm:text-sm font-semibold text-whatsapp-foreground shadow-md hover:brightness-95 transition-all cursor-pointer"
                >
                  <WhatsAppIcon className="size-4" />
                  <span>Konsultasi Gratis via WhatsApp</span>
                </a>
              ) : (
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center gap-2 rounded-md bg-white px-5 text-sm font-semibold text-primary hover:bg-white/90 transition-colors cursor-pointer"
                >
                  <span>Hubungi Tim Kami</span>
                </Link>
              )}

              {relatedServices[0] && (
                <Link
                  href={`/services/${relatedServices[0].slug}`}
                  className="inline-flex h-11 items-center gap-1.5 rounded-md border border-white/20 px-4 text-xs sm:text-sm font-medium text-white hover:bg-white/10 transition-colors"
                >
                  <span>
                    Lihat {relatedServices[0].id === "root-android" ? "Jasa Root Android" : `Layanan ${relatedServices[0].name}`}
                  </span>
                  <ArrowRight className="size-3.5" />
                </Link>
              )}
            </div>

            <p className="mt-3 text-[11px] text-white/60">
              Konsultasi awal gratis tanpa kewajiban menggunakan jasa perbaikan.
            </p>
          </section>
        )}

        {/* Other Guides Cross-links */}
        {otherGuides.length > 0 && (
          <section aria-labelledby="other-guides-heading" className="border-t border-border pt-8">
            <h2 id="other-guides-heading" className="text-base font-bold text-foreground">
              Panduan Menarik Lainnya
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {otherGuides.map((g) => (
                <Link
                  key={g.id}
                  href={`/guides/${g.slug}`}
                  className="group rounded-lg border border-border bg-card p-3.5 transition-colors hover:border-accent"
                >
                  <span className="text-[10px] font-semibold text-accent">{g.categoryName}</span>
                  <h3 className="mt-1 text-xs font-bold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                    {g.title}
                  </h3>
                  <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-accent">
                    Baca →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
