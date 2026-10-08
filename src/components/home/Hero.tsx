"use client";

import Link from "next/link";
import { ArrowRight, Check, Search, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { hasWhatsapp, whatsappLink } from "@/config/site";
import { buildConsultationMessage } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";
import { PhoneMockup } from "@/components/home/PhoneMockup";

const trustPoints = [
  "Pengecekan kompatibilitas di awal",
  "Konsultasi manusia, bukan chatbot",
  "Risiko dijelaskan sebelum proses",
  "Remote support untuk kondisi yang memungkinkan",
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
    <section className="relative overflow-hidden border-b border-border bg-white">
      <div className="container-page py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] lg:gap-x-14 xl:gap-x-18 lg:items-center">
          {/* Top Left on Desktop / Step 1 on Mobile: Eyebrow, H1, Copy, CTAs */}
          <div className="order-1 lg:col-start-1 lg:row-start-1">
            {/* Eyebrow */}
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
              <ShieldCheck className="size-3.5" aria-hidden="true" />
              <span>Technical Android Support</span>
            </p>

            {/* H1 Headline */}
            <h1 className="mt-5 text-[clamp(1.85rem,1.45rem+1.8vw,2.85rem)] font-bold leading-[1.14] tracking-tight text-foreground text-balance">
              Android bermasalah?
              <span className="block text-accent">Cari solusinya bersama teknisi yang paham.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-4 max-w-xl text-[15px] sm:text-base leading-relaxed text-muted-foreground">
              Mulai dari bootloop, firmware, root, bootloader, sampai custom ROM. Ceritakan kondisi perangkat Anda dan kami bantu menentukan langkah yang paling masuk akal.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {waHref ? (
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  onClick={handleConsultationClick}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-whatsapp px-6 text-sm font-semibold text-whatsapp-foreground shadow-sm hover:brightness-95 active:scale-[0.98] transition-[color,background-color,filter,transform] cursor-pointer"
                >
                  <WhatsAppIcon className="size-4 shrink-0" />
                  <span>Konsultasikan Masalah Saya</span>
                </a>
              ) : (
                <Link
                  href="/contact"
                  onClick={handleConsultationClick}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary-hover active:scale-[0.98] transition-colors cursor-pointer"
                >
                  <span>Konsultasikan Masalah Saya</span>
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              )}

              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-border bg-card px-5 text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-colors cursor-pointer"
              >
                <span>Lihat Layanan</span>
              </Link>

              <Link
                href="/search"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md px-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                aria-label="Cari Masalah atau Panduan"
              >
                <Search className="size-4" aria-hidden="true" />
                <span className="hidden sm:inline">Cari Solusi</span>
              </Link>
            </div>
          </div>

          {/* Right Column on Desktop / Step 2 on Mobile: Phone Mockup Visual Proof */}
          <div className="order-2 my-8 lg:my-0 flex justify-center lg:col-start-2 lg:row-start-1 lg:row-span-2">
            <PhoneMockup />
          </div>

          {/* Bottom Left on Desktop / Step 3 on Mobile: Trust Checks */}
          <div className="order-3 mt-6 sm:mt-8 border-t border-border/80 pt-5 lg:col-start-1 lg:row-start-2 lg:mt-6">
            <p className="sr-only">Keunggulan layanan TechFix Software</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-2 text-xs sm:text-[13px] text-foreground/80 font-medium">
                  <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-success/10 text-success" aria-hidden="true">
                    <Check className="size-3 stroke-[2.5]" />
                  </span>
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
