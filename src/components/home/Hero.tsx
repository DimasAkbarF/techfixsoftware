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
      <div className="container-page grid gap-8 py-24 md:py-36 lg:grid-cols-[1.15fr_1fr] lg:items-start lg:gap-12">
        {/* Left — heading, search, CTA */}
        <div>
          <h1 className="text-[28px] font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl md:text-[40px]">
            Butuh bantuan untuk
            <br />
            software Android?
          </h1>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            Solusi teknis Android dari para profesional yang berpengalaman — mencakup
            root, bootloader, bootloop, firmware, custom ROM, hingga perbaikan software.
            Konsultasikan kebutuhan Anda dan ambil keputusan dengan informasi yang lengkap.
          </p>

          {/* Search — primary discovery */}
          <div className="mt-6 max-w-lg">
            <SearchForm size="large" />
            <p className="mt-2 text-xs text-muted-foreground">
              bootloop · root android · flash firmware · unlock bootloader
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <Link
              href="/services"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition-colors cursor-pointer"
            >
              Lihat layanan
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-border px-5 text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-colors cursor-pointer"
            >
              Cara kerja
            </Link>
          </div>
        </div>

        {/* Right — problem panel (desktop only) */}
        <div className="hidden lg:block" aria-label="Masalah umum perangkat">
          <div className="rounded-xl border border-border bg-background p-6">
            <h2 className="text-sm font-semibold text-foreground">
              Mulai dari masalah Anda
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Pilih gejala untuk menemukan layanan yang tepat.
            </p>
            <div className="mt-4 space-y-2">
              {problems.map((problem) => (
                <Link
                  key={problem.label}
                  href={problem.href}
                  className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground hover:border-accent/50 hover:bg-accent-subtle/30 transition-colors cursor-pointer group"
                >
                  <span>{problem.label}</span>
                  <ArrowRight className="size-3.5 text-muted-foreground group-hover:text-accent transition-colors" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
