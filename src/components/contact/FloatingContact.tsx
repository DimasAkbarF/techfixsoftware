"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MessageCircle, X, ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { TelegramIcon } from "@/components/icons/TelegramIcon";
import { hasWhatsapp, hasTelegram, whatsappLink, telegramLink } from "@/config/site";
import { getContactMessage } from "@/lib/contact";
import { cn } from "@/lib/utils";

import { trackEvent } from "@/lib/analytics";

export function FloatingContact() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const wa = hasWhatsapp() ? whatsappLink(getContactMessage()) : null;
  const tg = hasTelegram() ? telegramLink() : null;

  const close = useCallback(() => {
    setOpen(false);
    requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  const handleWaClick = () => {
    trackEvent("whatsapp_click", { source_page: "floating_contact_fab" });
    close();
  };

  const handleTgClick = () => {
    trackEvent("consultation_started", { source_page: "floating_contact_fab", channel: "telegram" });
    close();
  };

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: PointerEvent) {
      if (!rootRef.current?.contains(e.target as Node)) close();
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open, close]);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    if (!panel) return;
    const first = panel.querySelector<HTMLElement>("a[href], button:not([disabled])");
    first?.focus();
  }, [open]);

  if (!wa && !tg) return null;

  return (
    <div
      ref={rootRef}
      className="fixed bottom-0 right-0 z-40 flex flex-col items-end pb-[max(1.25rem,env(safe-area-inset-bottom))] pr-3 sm:pr-6 md:pb-[max(1.5rem,env(safe-area-inset-bottom))] print:hidden"
    >
      <div className="relative">
        {open ? (
          <div
            ref={panelRef}
            id="floating-contact-panel"
            role="dialog"
            aria-label="Konsultasi cepat bersama teknisi"
            className="absolute bottom-[calc(100%+0.75rem)] right-0 w-[270px] max-w-[calc(100vw-2rem)] rounded-lg border border-border bg-card p-3 shadow-dropdown animate-popover-in"
          >
            <div className="flex items-center justify-between border-b border-border/80 px-1 pb-2 pt-0.5">
              <div>
                <p className="text-xs font-bold text-foreground">
                  Konsultasi Spesialis
                </p>
                <p className="text-[10px] text-muted-foreground">
                  Dukungan teknis langsung
                </p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-success/10 px-2 py-0.5 text-[9.5px] font-semibold text-success">
                <span className="size-1.5 rounded-full bg-success animate-pulse" aria-hidden="true" />
                Online
              </span>
            </div>

            <div className="mt-2 grid gap-1">
              {wa ? (
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  onClick={handleWaClick}
                  className="group flex min-h-12 items-center gap-2.5 rounded-lg border border-transparent p-2 transition-colors hover:border-whatsapp/30 hover:bg-whatsapp/5 active:bg-whatsapp/10 cursor-pointer"
                >
                  <span
                    className="flex size-8 shrink-0 items-center justify-center rounded-md bg-whatsapp text-whatsapp-foreground shadow-xs transition-transform duration-150 group-hover:scale-105"
                    aria-hidden="true"
                  >
                    <WhatsAppIcon className="size-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-foreground">WhatsApp</span>
                      <span className="rounded bg-whatsapp/15 px-1 py-0.2 text-[9px] font-semibold text-whatsapp-foreground">Utama</span>
                    </div>
                    <p className="text-[10.5px] text-muted-foreground truncate">Paling cepat direspons</p>
                  </div>
                  <ArrowRight
                    className="size-3.5 shrink-0 text-muted-foreground transition-transform duration-150 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              ) : null}

              {tg ? (
                <a
                  href={tg}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  onClick={handleTgClick}
                  className="group flex min-h-12 items-center gap-2.5 rounded-lg border border-transparent p-2 transition-colors hover:border-telegram/30 hover:bg-telegram/5 active:bg-telegram/10 cursor-pointer"
                >
                  <span
                    className="flex size-8 shrink-0 items-center justify-center rounded-md bg-telegram text-telegram-foreground shadow-xs transition-transform duration-150 group-hover:scale-105"
                    aria-hidden="true"
                  >
                    <TelegramIcon className="size-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-bold text-foreground">Telegram</span>
                    <p className="text-[10.5px] text-muted-foreground truncate">Kanal chat alternatif</p>
                  </div>
                  <ArrowRight
                    className="size-3.5 shrink-0 text-muted-foreground transition-transform duration-150 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              ) : null}
            </div>

            <div className="mt-2 border-t border-border/70 pt-2 text-center">
              <Link
                href="/contact"
                onClick={close}
                className="text-[10.5px] font-semibold text-accent hover:underline cursor-pointer"
              >
                Kirim detail via formulir kontak →
              </Link>
            </div>
          </div>
        ) : null}

        <div className="group relative">
          {!open ? (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-dropdown opacity-0 transition-opacity duration-150 group-hover:opacity-100 sm:block"
            >
              Konsultasi Teknisi
            </span>
          ) : null}
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Konsultasi cepat bersama teknisi"
            aria-expanded={open}
            aria-haspopup="dialog"
            aria-controls="floating-contact-panel"
            className={cn(
              "relative flex size-12 items-center justify-center rounded-full border border-white/15 bg-primary text-primary-foreground shadow-card-hover transition-[transform,box-shadow,background-color] duration-150 ease-out hover:bg-primary-hover hover:shadow-dropdown active:scale-[0.97] active:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer",
              open ? "hover:scale-100" : "hover:scale-[1.04]",
            )}
          >
            {/* Live presence indicator badge */}
            {!open && (
              <span className="absolute -top-0.5 -right-0.5 flex size-3" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp opacity-75" />
                <span className="relative inline-flex size-3 rounded-full bg-whatsapp border-2 border-primary" />
              </span>
            )}
            {open ? (
              <X className="size-5 transition-transform duration-150" aria-hidden="true" />
            ) : (
              <MessageCircle
                className="size-5 transition-transform duration-200 ease-out group-hover:rotate-6"
                aria-hidden="true"
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}