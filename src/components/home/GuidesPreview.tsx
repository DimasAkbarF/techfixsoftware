import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { guides } from "@/data/guides";

export function GuidesPreview() {
  const featuredGuides = guides.slice(0, 4);

  return (
    <section aria-labelledby="guides-preview-heading" className="border-b border-border bg-background py-16 md:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            <span className="size-1.5 rounded-full bg-accent" />
            Pusat Edukasi &amp; Panduan Teknis
          </p>
          <h2 id="guides-preview-heading" className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Pelajari Dulu Sebelum Modifikasi Android
          </h2>
          <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground">
            Artikel teknis mendalam yang ditulis untuk membantu Anda memahami risiko, penyebab kerusakan, dan tindakan pencegahan yang tepat.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredGuides.map((guide) => (
            <Link
              key={guide.id}
              href={`/guides/${guide.slug}`}
              className="group flex flex-col justify-between rounded-lg border border-border bg-card p-5 transition-all duration-150 hover:border-accent cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-semibold text-accent">{guide.categoryName}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="size-3" />
                    {guide.readTime}
                  </span>
                </div>

                <h3 className="mt-2.5 text-sm sm:text-base font-bold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                  {guide.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                  {guide.excerpt}
                </p>
              </div>

              <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-accent border-t border-border/60 pt-3">
                <span>Baca panduan</span>
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-xs sm:text-sm font-semibold text-foreground hover:border-accent hover:text-accent transition-colors cursor-pointer"
          >
            <span>Buka Semua Panduan Teknis &amp; Troubleshooting</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
