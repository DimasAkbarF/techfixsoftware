import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { guides } from "@/data/guides";
import { ButtonLink } from "@/components/ui/Button";

const guideCoverMap: Record<string, string> = {
  "apa-penyebab-hp-android-stuck-di-logo": "/images/guides/guide-bootloop.webp",
  "apakah-unlock-bootloader-menghapus-data": "/images/guides/guide-ubl.webp",
  "apakah-root-android-aman": "/images/guides/guide-root.webp",
};

const categoryCoverMap: Record<string, string> = {
  bootloop: "/images/guides/guide-bootloop.webp",
  bootloader: "/images/guides/guide-ubl.webp",
  root: "/images/guides/guide-root.webp",
  "custom-rom": "/images/services/custom-rom.webp",
  firmware: "/images/services/flash-firmware.webp",
  troubleshooting: "/images/services/software-repair.webp",
};

export function GuidesPreview() {
  const featuredGuides = guides.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-card border-b border-border" id="panduan">
      <div className="container-page max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl text-foreground mb-3">
              Panduan & Edukasi Teknis
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Pelajari risiko dan cara penanganan pertama sebelum memutuskan untuk servis.
            </p>
          </div>
          <ButtonLink href="/guides" variant="secondary" className="shrink-0 hidden md:inline-flex">
            Lihat Semua Artikel
          </ButtonLink>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredGuides.map((guide) => {
            const coverSrc =
              guideCoverMap[guide.slug] ||
              categoryCoverMap[guide.category] ||
              "/images/guides/guide-bootloop.webp";

            return (
              <Link
                key={guide.id}
                href={`/guides/${guide.slug}`}
                className="group flex flex-col bg-background border border-border rounded-[var(--radius-xl)] overflow-hidden hover:shadow-card-hover hover:border-accent transition-all cursor-pointer"
              >
                {/* Cover Image */}
                <div className="relative w-full aspect-video bg-muted border-b border-border overflow-hidden">
                  <Image
                    src={coverSrc}
                    alt={`Cover panduan ${guide.title}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="bg-background/90 backdrop-blur-sm text-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                    {guide.categoryName}
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium mb-3">
                  <Clock className="w-3.5 h-3.5" />
                  {guide.readTime}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                  {guide.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-6">
                  {guide.excerpt}
                </p>
                <div className="mt-auto inline-flex items-center text-sm font-semibold text-accent group-hover:translate-x-1 transition-transform">
                  Baca Selengkapnya <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>
          );
        })}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <ButtonLink href="/guides" variant="secondary" className="w-full">
            Lihat Semua Artikel
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
