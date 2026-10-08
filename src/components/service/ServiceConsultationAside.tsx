"use client";

import Link from "next/link";
import { AlertTriangle, ShieldCheck, CheckCircle2 } from "lucide-react";
import type { Service } from "@/types";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { hasWhatsapp, whatsappLink } from "@/config/site";
import { buildServiceConsultationMessage } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

export function ServiceConsultationAside({ service }: { service: Service }) {
  const isWa = hasWhatsapp();
  const prefilledMessage = buildServiceConsultationMessage(service.slug, service.name);
  const waHref = isWa ? whatsappLink(prefilledMessage) : null;

  const handleCtaClick = () => {
    trackEvent("whatsapp_click", {
      source_page: `service_${service.slug}`,
      service_name: service.name,
      service_slug: service.slug,
      action: "sidebar_consultation_button",
    });
  };

  return (
    <aside aria-label="Konsultasi Layanan" className="sticky top-20">
      <div className="rounded-xl border border-border bg-card p-5 sm:p-6 shadow-xs">
        <div className="flex items-center gap-2">
          <ShieldCheck className="size-5 text-accent" />
          <h2 className="text-base font-bold tracking-tight text-foreground">
            Konsultasi Layanan Ini
          </h2>
        </div>

        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
          Ceritakan merek, tipe HP, dan kronologi kendala Anda. Kami periksa kompatibilitasnya sebelum Anda mengambil keputusan.
        </p>

        {/* Primary CTA */}
        <div className="mt-5">
          {waHref ? (
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer nofollow"
              onClick={handleCtaClick}
              className="flex h-11 w-full items-center justify-center gap-2 rounded-md bg-whatsapp px-4 text-xs sm:text-sm font-semibold text-whatsapp-foreground shadow-sm hover:brightness-95 active:scale-[0.98] transition-all cursor-pointer"
            >
              <WhatsAppIcon className="size-4 shrink-0" />
              <span>Konsultasi via WhatsApp</span>
            </a>
          ) : (
            <Link
              href="/contact"
              onClick={handleCtaClick}
              className="flex h-11 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary-hover active:scale-[0.98] transition-colors cursor-pointer"
            >
              <span>Hubungi CS Kami</span>
            </Link>
          )}

          <div className="mt-2 text-center">
            <Link
              href="/contact"
              className="text-[11px] font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Atau isi formulir detail di halaman Kontak →
            </Link>
          </div>
        </div>

        {/* Value Points */}
        <ul className="mt-5 space-y-2 border-t border-border/80 pt-4 text-xs text-foreground/80">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-success" />
            <span>Konsultasi 100% gratis &amp; tidak mengikat</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-success" />
            <span>Kompatibilitas dicek sebelum tindakan</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-success" />
            <span>Risiko data dijelaskan secara jujur</span>
          </li>
        </ul>

        {/* Important Warning Notice */}
        <div className="mt-4 rounded-md border border-warning/30 bg-warning/5 p-3 text-[11px] leading-relaxed text-foreground">
          <p className="flex items-start gap-1.5 font-semibold text-warning">
            <AlertTriangle className="mt-0.5 size-3.5 shrink-0" />
            Pemberitahuan Transparansi
          </p>
          <p className="mt-1 text-muted-foreground">
            Hasil tidak dapat dijamin sebelum kondisi fisik dan respon perangkat dinilai secara langsung. Biaya disepakati bersama sebelum proses dimulai.
          </p>
        </div>
      </div>
    </aside>
  );
}
