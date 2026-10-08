"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
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
          <p className="flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
            <ShieldCheck className="size-3.5 text-whatsapp" aria-hidden="true" />
            <span>Konsultasi Tanpa Tekanan</span>
          </p>

          <h2 id="final-cta-heading" className="mt-5 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white text-balance">
            Masih belum yakin masalahnya apa?
          </h2>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/80">
            Jelaskan kondisi HP Anda. Kami bantu arahkan langkah yang paling masuk akal sebelum Anda mengambil keputusan apa pun.
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
            ✓ Tidak harus langsung melakukan service · Bebas bertanya terlebih dahulu
          </p>
        </div>
      </div>
    </section>
  );
}
