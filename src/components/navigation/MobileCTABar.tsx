"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { hasWhatsapp, whatsappLink } from "@/config/site";
import { buildConsultationMessage } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

export function MobileCTABar() {
  const isWa = hasWhatsapp();
  const waHref = isWa ? whatsappLink(buildConsultationMessage()) : null;

  const handleClick = () => {
    trackEvent("whatsapp_click", {
      source_page: "mobile_sticky_bottom_bar",
      action: "sticky_consultation_button",
    });
  };

  return (
    <div
      role="region"
      aria-label="Konsultasi Cepat"
      className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-white/95 backdrop-blur-md px-3 pt-2 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-lg md:hidden print:hidden"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-semibold text-foreground">
            Android Bermasalah?
          </p>
          <p className="truncate text-[11px] text-muted-foreground">
            Konsultasi gratis bersama teknisi
          </p>
        </div>

        {waHref ? (
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer nofollow"
            onClick={handleClick}
            className="flex h-9 shrink-0 items-center gap-1.5 rounded-md bg-whatsapp px-3.5 text-xs font-semibold text-whatsapp-foreground shadow-sm hover:brightness-95 active:scale-[0.98] transition-all cursor-pointer"
          >
            <WhatsAppIcon className="size-3.5 shrink-0" />
            <span>Konsultasi Gratis</span>
          </a>
        ) : (
          <Link
            href="/contact"
            onClick={handleClick}
            className="flex h-9 shrink-0 items-center gap-1.5 rounded-md bg-primary px-3.5 text-xs font-semibold text-primary-foreground hover:bg-primary-hover active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>Konsultasi Gratis</span>
            <ArrowRight className="size-3" aria-hidden="true" />
          </Link>
        )}
      </div>
    </div>
  );
}
