"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MessageCircle, X, ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { TelegramIcon } from "@/components/icons/TelegramIcon";
import { hasWhatsapp, hasTelegram, whatsappLink, telegramLink } from "@/config/site";
import { getContactMessage } from "@/lib/contact";
import { cn } from "@/lib/utils";

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
      className="fixed bottom-0 right-0 z-40 flex flex-col items-end pb-[max(1rem,env(safe-area-inset-bottom))] pr-4 sm:pr-6 sm:pb-[max(1.5rem,env(safe-area-inset-bottom))] print:hidden"
    >
      <div className="relative">
        {open ? (
          <div
            ref={panelRef}
            id="floating-contact-panel"
            role="dialog"
            aria-label="Hubungi kami"
            className="absolute bottom-[calc(100%+0.75rem)] right-0 w-[240px] max-w-[calc(100vw-2rem)] rounded-lg border border-border bg-card p-2 shadow-dropdown animate-popover-in"
          >
            <p className="px-2 pb-1.5 pt-1 text-sm font-semibold text-foreground">
              Hubungi kami
            </p>
            <div className="grid gap-0.5">
              {wa ? (
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  onClick={close}
                  className="group flex min-h-11 items-center gap-3 rounded-md px-2 py-1.5 transition-colors duration-150 hover:bg-muted active:bg-muted/80 cursor-pointer"
                >
                  <span
                    className="flex size-8 shrink-0 items-center justify-center rounded-md bg-whatsapp text-whatsapp-foreground transition-transform duration-150 group-hover:scale-[1.05]"
                    aria-hidden="true"
                  >
                    <WhatsAppIcon className="size-4" />
                  </span>
                  <span className="flex-1 text-sm font-medium text-foreground">WhatsApp</span>
                  <ArrowRight
                    className="size-4 shrink-0 text-muted-foreground transition-transform duration-150 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              ) : null}
              {tg ? (
                <a
                  href={tg}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  onClick={close}
                  className="group flex min-h-11 items-center gap-3 rounded-md px-2 py-1.5 transition-colors duration-150 hover:bg-muted active:bg-muted/80 cursor-pointer"
                >
                  <span
                    className="flex size-8 shrink-0 items-center justify-center rounded-md bg-telegram text-telegram-foreground transition-transform duration-150 group-hover:scale-[1.05]"
                    aria-hidden="true"
                  >
                    <TelegramIcon className="size-4" />
                  </span>
                  <span className="flex-1 text-sm font-medium text-foreground">Telegram</span>
                  <ArrowRight
                    className="size-4 shrink-0 text-muted-foreground transition-transform duration-150 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              ) : null}
            </div>
          </div>
        ) : null}

        <div className="group relative">
          {!open ? (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-dropdown opacity-0 transition-opacity duration-150 group-hover:opacity-100 sm:block"
            >
              Hubungi kami
            </span>
          ) : null}
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Hubungi kami"
            aria-expanded={open}
            aria-haspopup="dialog"
            aria-controls="floating-contact-panel"
            className={cn(
              "flex size-12 items-center justify-center rounded-full border border-white/15 bg-primary text-primary-foreground shadow-card-hover transition-[transform,box-shadow,background-color] duration-150 ease-out hover:bg-primary-hover hover:shadow-dropdown active:scale-[0.97] active:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer",
              open ? "hover:scale-100" : "hover:scale-[1.04]",
            )}
          >
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