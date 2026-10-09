"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { hasWhatsapp, whatsappLink } from "@/config/site";
import { buildConsultationMessage } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

export function FinalConsultationCTA() {
  const isWa = hasWhatsapp();
  const waHref = isWa ? whatsappLink(buildConsultationMessage()) : null;

  const handleClick = () => {
    trackEvent("whatsapp_click", {
      source_page: "homepage_final_cta",
      action: "final_consultation_button",
    });
  };

  return (
    <section aria-labelledby="final-cta-heading" className="bg-primary py-16 md:py-24 text-primary-foreground">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/90">
            <span className="size-1.5 rounded-full bg-accent" />
            <span>Evaluasi Teknis &amp; Konsultasi</span>
          </p>

          <h2 id="final-cta-heading" className="mt-5 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white text-balance">
            Konsultasikan Kebutuhan Perangkat Anda Bersama Tim Teknis
          </h2>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/80">
            Diskusikan gejala sistem, kompatibilitas firmware, dan opsi pemulihan terbaik bersama spesialis kami sebelum tindakan diputuskan.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            {waHref ? (
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer nofollow"
                onClick={handleClick}
                className="flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-whatsapp px-7 text-sm font-semibold text-whatsapp-foreground shadow-lg shadow-black/20 hover:brightness-95 active:scale-[0.98] transition-[color,background-color,filter,transform] cursor-pointer"
              >
                <WhatsAppIcon className="size-4 shrink-0" />
                <span>Konsultasi Gratis via WhatsApp</span>
              </a>
            ) : (
              <Link
                href="/contact"
                onClick={handleClick}
                className="flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-white px-7 text-sm font-semibold text-primary shadow-lg shadow-black/20 hover:bg-white/90 active:scale-[0.98] transition-colors cursor-pointer"
              >
                <span>Konsultasikan Masalah Saya</span>
                <ArrowRight className="size-4" />
              </Link>
            )}

            <Link
              href="/contact"
              className="flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 text-sm font-medium text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <span>Isi Form Konsultasi</span>
            </Link>
          </div>

          <p className="mt-4 text-xs text-white/60">
            ✓ Evaluasi kelayakan di awal · Transparansi metode, estimasi waktu, dan estimasi biaya sebelum pengerjaan
          </p>
        </div>
      </div>
    </section>
  );
}
