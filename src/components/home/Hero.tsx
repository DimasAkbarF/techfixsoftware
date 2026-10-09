"use client";

import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { hasWhatsapp, whatsappLink } from "@/config/site";
import { buildConsultationMessage } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";
import { PhoneMockup } from "@/components/home/PhoneMockup";

const trustPoints = [
  "Validasi kompatibilitas firmware resmi di awal",
  "Evaluasi langsung oleh spesialis teknis",
  "Transparansi risiko partisi sebelum tindakan",
  "Remote support terarah via koneksi terenkripsi",
];

export function Hero() {
  const isWa = hasWhatsapp();
  const waHref = isWa ? whatsappLink(buildConsultationMessage()) : null;

  const handleConsultationClick = () => {
    trackEvent("whatsapp_click", {
      source_page: "homepage_hero",
      action: "primary_hero_cta",
    });
  };

  return (
    <section className="border-b border-border bg-white">
      <div className="container-page py-16 md:py-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Top Left on Desktop / Step 1 on Mobile: Eyebrow, H1, Copy, CTAs */}
          <div className="order-1">
            {/* Eyebrow — mono editorial label */}
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
              Layanan software Android — remote &amp; onsite
            </p>

            {/* H1 Headline */}
            <h1 className="mt-4 font-display text-[clamp(2.5rem,1.6rem+3.2vw,4.25rem)] font-bold leading-[1.04] tracking-[-0.02em] text-foreground text-balance">
              Jasa perbaikan software Android: fix bootloop, unbrick &amp; flashing remote.
            </h1>

            {/* Supporting Copy */}
            <p className="mt-5 max-w-xl text-[17px] sm:text-lg leading-relaxed text-muted-foreground">
              Flashing firmware resmi, unbrick, unlock bootloader, dan root. Teknisi cek model, varian chipset, dan status bootloader Anda dulu — lalu jelaskan risikonya sebelum kami kerjakan.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {waHref ? (
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  onClick={handleConsultationClick}
                  className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-whatsapp px-6 text-sm font-semibold text-whatsapp-foreground shadow-sm hover:brightness-95 active:scale-[0.98] transition-all cursor-pointer"
                >
                  <WhatsAppIcon className="size-4 shrink-0" />
                  <span>Konsultasi Gratis via WhatsApp</span>
                </a>
              ) : (
                <Link
                  href="/contact"
                  onClick={handleConsultationClick}
                  className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary-hover active:scale-[0.98] transition-colors cursor-pointer"
                >
                  <span>Konsultasikan Masalah Saya</span>
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              )}

              <div className="flex items-center gap-2.5 sm:gap-3">
                <Link
                  href="/services"
                  className="inline-flex h-12 flex-1 sm:flex-initial items-center justify-center gap-2 rounded-md border border-border bg-card px-5 text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-colors cursor-pointer"
                >
                  <span>Lihat Katalog Layanan</span>
                </Link>

                <Link
                  href="/search"
                  className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-md border border-border bg-card sm:border-transparent sm:bg-transparent px-4 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-accent transition-colors cursor-pointer"
                  aria-label="Cari Masalah atau Panduan"
                >
                  <Search className="size-4" aria-hidden="true" />
                  <span className="text-xs sm:text-sm">Cari Solusi</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column on Desktop / Step 2 on Mobile: Phone Mockup Visual Proof */}
          <div className="order-2 my-2 lg:my-0 flex justify-center">
            <PhoneMockup />
          </div>

          {/* Bottom Left on Desktop / Step 3 on Mobile: Trust Checks */}
          <div className="order-3 border-t border-border pt-5 lg:col-span-2">
            <p className="sr-only">Keunggulan layanan TechFix Software</p>
            <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-2 text-xs sm:text-[13px] text-foreground/80 font-medium">
                  <span className="size-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
