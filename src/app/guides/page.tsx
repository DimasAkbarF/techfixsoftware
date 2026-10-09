import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { guides } from "@/data/guides";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Panduan Troubleshooting Software Android",
  description:
    "Kumpulan panduan teknis Android terlengkap: cara atasi bootloop, tips flash firmware, tutorial root Magisk, ubl, & unbrick aman. Baca panduan gratisnya!",
  path: "/guides",
});

export default function GuidesIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Panduan & Edukasi Teknis Android TechFix Software",
    url: absoluteUrl("/guides"),
    numberOfItems: guides.length,
    itemListElement: guides.map((guide, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: absoluteUrl(`/guides/${guide.slug}`),
      name: guide.title,
    })),
  };

  return (
    <div className="container-page py-10 md:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs items={[{ label: "Panduan & Edukasi" }]} />

      <SectionHeading
        as="h1"
        eyebrow="Knowledge Base"
        title="Panduan Teknis &amp; Troubleshooting Android"
        description="Pelajari fakta objektif seputar risiko, persiapan, dan diagnosis kerusakan sistem sebelum Anda melakukan modifikasi atau tindakan berisiko pada perangkat Anda."
      />

      {/* Guide Cards Grid */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => (
          <article
            key={guide.id}
            className="group flex flex-col justify-between rounded-lg border border-border bg-card p-6 shadow-xs transition-all duration-150 hover:border-accent hover:shadow-card-hover"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-semibold text-accent">{guide.categoryName}</span>
                <span className="flex items-center gap-1">
                  <Clock className="size-3" />
                  {guide.readTime}
                </span>
              </div>

              <h2 className="mt-3 text-base font-bold text-foreground group-hover:text-accent transition-colors">
                <Link href={`/guides/${guide.slug}`} className="focus:outline-none">
                  {guide.title}
                </Link>
              </h2>

              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-3">
                {guide.excerpt}
              </p>

              {/* Key Takeaways preview */}
              <div className="mt-4 rounded-md bg-muted/40 p-3">
                <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  Poin Kunci:
                </p>
                <p className="mt-1 text-xs text-foreground/80 line-clamp-2">
                  {guide.keyTakeaways[0]}
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-border/70 pt-4 text-xs font-semibold text-accent">
              <Link
                href={`/guides/${guide.slug}`}
                className="inline-flex items-center gap-1 hover:text-accent-hover transition-colors"
              >
                <span>Baca panduan lengkap</span>
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom Consultation Banner */}
      <div className="mt-14 rounded-lg border border-border bg-slate-50 p-6 sm:p-8 md:p-10 text-center">
        <div className="mx-auto max-w-xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            <span className="size-1.5 rounded-full bg-accent" />
            Pendampingan Teknis Langsung
          </p>
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            Sudah membaca panduan tetapi HP tetap bermasalah?
          </h2>
          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
            Jangan paksakan tindakan mandiri yang berisiko jika Anda tidak yakin. Teknisi kami siap membantu memeriksa status perangkat Anda secara langsung.
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition-colors cursor-pointer"
            >
              <span>Konsultasikan dengan Teknisi</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
