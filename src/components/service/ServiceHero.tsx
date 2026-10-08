"use client";

import Link from "next/link";
import { Wifi, ArrowRight, ShieldCheck, Check } from "lucide-react";
import type { Service } from "@/types";
import { getCategoryById } from "@/data/categories";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { hasWhatsapp, whatsappLink } from "@/config/site";
import { buildServiceConsultationMessage } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

export function ServiceHero({ service }: { service: Service }) {
  const category = getCategoryById(service.categoryId);
  const isWa = hasWhatsapp();
  const prefilledMessage = buildServiceConsultationMessage(service.slug, service.name);
  const waHref = isWa ? whatsappLink(prefilledMessage) : null;

  const handleCtaClick = () => {
    trackEvent("whatsapp_click", {
      source_page: `service_${service.slug}`,
      service_name: service.name,
      service_slug: service.slug,
      action: "hero_consultation_cta",
    });
  };

  return (
    <div className="rounded-2xl bg-primary p-7 text-primary-foreground sm:p-10 md:p-12 shadow-sm">
      <div className="max-w-3xl">
        {/* Badges */}
        <div className="mb-4 flex flex-wrap items-center gap-2">
          {category ? (
            <span className="inline-flex items-center gap-1.5 rounded-md bg-white/15 px-2.5 py-1 text-xs font-semibold text-white">
              {category.name}
            </span>
          ) : null}
          {service.remoteAvailable ? (
            <span className="inline-flex items-center gap-1.5 rounded-md bg-white/15 px-2.5 py-1 text-xs font-medium text-white">
              <Wifi className="size-3.5" aria-hidden="true" />
              Remote Support Didukung
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-md bg-white/10 px-2.5 py-1 text-xs font-medium text-white/80">
              Evaluasi Khusus
            </span>
          )}
          {service.badges?.map((badge) => (
            <span key={badge} className="rounded-md bg-white/10 px-2.5 py-1 text-xs font-medium text-white/80">
              {badge}
            </span>
          ))}
        </div>

        {/* H1 Search Intent Title */}
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-white">
          {service.h1}
        </h1>

        {/* Supporting description */}
        <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/85">
          {service.shortDescription}
        </p>

        {/* CTAs */}
        <div className="mt-7 flex flex-wrap items-center gap-3">
          {waHref ? (
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer nofollow"
              onClick={handleCtaClick}
              className="inline-flex h-11 items-center gap-2 rounded-md bg-whatsapp px-5 text-sm font-semibold text-whatsapp-foreground shadow-md hover:brightness-95 active:scale-[0.98] transition-all cursor-pointer"
            >
              <WhatsAppIcon className="size-4 shrink-0" />
              <span>Konsultasikan Masalah via WhatsApp</span>
            </a>
          ) : (
            <Link
              href="/contact"
              onClick={handleCtaClick}
              className="inline-flex h-11 items-center gap-2 rounded-md bg-white px-5 text-sm font-semibold text-primary shadow-md hover:bg-white/90 active:scale-[0.98] transition-colors cursor-pointer"
            >
              <span>Konsultasi Sekarang</span>
              <ArrowRight className="size-4" />
            </Link>
          )}

          <a
            href="#symptoms-heading"
            className="inline-flex h-11 items-center gap-2 rounded-md border border-white/20 bg-white/5 px-4 text-sm font-medium text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <span>Cek Gejala Perangkat</span>
          </a>
        </div>

        {/* Microcopy */}
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/15 pt-4 text-xs text-white/70">
          <span className="flex items-center gap-1.5">
            <Check className="size-3.5 text-whatsapp" />
            Pengecekan kompatibilitas di awal
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="size-3.5 text-whatsapp" />
            Konsultasi manusia, bukan chatbot
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="size-3.5 text-accent" />
            Risiko dijelaskan sebelum eksekusi
          </span>
        </div>
      </div>
    </div>
  );
}
