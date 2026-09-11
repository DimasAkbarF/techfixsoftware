import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SearchForm } from "@/components/search/SearchForm";

const problems = [
  { label: "HP stuck di logo?", href: "/services/fix-bootloop" },
  { label: "Sering restart sendiri?", href: "/services/fix-bootloop" },
  { label: "Error setelah update?", href: "/services/software-repair" },
  { label: "Ingin root atau ganti ROM?", href: "/services/root-android" },
];

export function Hero() {
  return (
    <section className="border-b border-border bg-white">
      <div className="container-page grid gap-12 py-14 md:py-24 lg:grid-cols-[1.15fr_1fr] lg:items-start lg:gap-14 lg:py-28">
        {/* Left — heading, search, CTA */}
        <div>
          <h1 className="max-w-xl text-[clamp(1.75rem,1.5rem+1.2vw,2.75rem)] font-bold leading-[1.15] tracking-tight text-balance text-foreground">
            Butuh bantuan untuk software Android?
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            Solusi teknis Android dari para profesional yang berpengalaman — mencakup
            root, bootloader, bootloop, firmware, custom ROM, hingga perbaikan software.
            Konsultasikan kebutuhan Anda dan ambil keputusan dengan informasi yang lengkap.
          </p>

          {/* Search — primary discovery */}
          <div className="mt-7 max-w-lg">
            <SearchForm size="large" />
            <p className="mt-2.5 text-xs text-muted-foreground">
              bootloop · root android · flash firmware · unlock bootloader
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <Link
              href="/services"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover cursor-pointer"
            >
              Lihat layanan
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-border px-5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent cursor-pointer"
            >
              Cara kerja
            </Link>
          </div>
        </div>

        {/* Right — problem panel */}
        <aside aria-labelledby="problems-heading" className="lg:mt-2">
          <div className="rounded-xl border border-border bg-background p-5 sm:p-6">
            <h2 id="problems-heading" className="text-sm font-semibold text-foreground">
              Mulai dari masalah Anda
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Pilih gejala untuk menemukan layanan yang tepat.
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {problems.map((problem) => (
                <Link
                  key={problem.label}
                  href={problem.href}
                  className="group flex min-h-12 items-center justify-between gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:bg-accent-subtle/30 active:bg-accent-subtle/50 cursor-pointer"
                >
                  <span>{problem.label}</span>
                  <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-accent group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
