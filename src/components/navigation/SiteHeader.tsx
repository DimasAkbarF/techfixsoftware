"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Search, X } from "lucide-react";
import { mainNav } from "@/components/navigation/navItems";
import { cn } from "@/lib/utils";

function Logo({ compact = false, onClick }: { compact?: boolean; onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="flex shrink-0 items-center gap-2 cursor-pointer"
      aria-label="TechFix Software — beranda"
    >
      <Image
        src="/navbar.png"
        alt="TechFix Software"
        width={44}
        height={33}
        className={compact ? "h-8 w-auto" : "h-9 w-auto sm:h-10"}
        priority
      />
      <span className="text-base font-semibold tracking-tight text-primary">TechFix Software</span>
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    requestAnimationFrame(() => closeRef.current?.focus());
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      closeRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeMenu();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen, closeMenu]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur-sm">
        <div className="container-page flex h-14 items-center justify-between gap-4 sm:h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop nav */}
          <nav aria-label="Navigasi utama" className="hidden lg:flex items-center gap-0.5">
            {mainNav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-md px-3 py-2 text-[13px] font-medium transition-colors cursor-pointer",
                    active
                      ? "bg-accent-subtle text-accent font-semibold"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-1">
            {/* Search trigger */}
            <Link
              href="/search"
              className="flex size-10 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer"
              aria-label="Buka pencarian"
            >
              <Search className="size-[18px]" aria-hidden="true" />
            </Link>

            {/* Mobile menu trigger */}
            <button
              ref={closeRef}
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Tutup menu" : "Buka menu navigasi"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="lg:hidden flex size-10 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer"
            >
              {menuOpen ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
                  <line x1="4" y1="7" x2="20" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="4" y1="17" x2="20" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && <MobileMenuOverlay onClose={closeMenu} pathname={pathname} />}
    </>
  );
}

function MobileMenuOverlay({
  onClose,
  pathname,
}: {
  onClose: () => void;
  pathname: string;
}) {
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    firstLinkRef.current?.focus();
  }, []);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu navigasi"
      className="fixed inset-0 z-50 lg:hidden"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu panel */}
      <div className="absolute inset-x-0 top-0 bottom-0 bg-card shadow-lg flex flex-col animate-slide-in">
        {/* Menu header */}
        <div className="flex h-14 items-center justify-between border-b border-border px-4 sm:h-16">
          <Logo compact onClick={onClose} />
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup menu"
            className="flex size-10 items-center justify-center rounded-md text-muted-foreground hover:bg-muted transition-colors cursor-pointer"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        {/* Nav links */}
        <nav aria-label="Navigasi mobile" className="flex-1 overflow-y-auto px-4 py-4">
          <div className="flex flex-col gap-0.5">
            {mainNav.map((item, index) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  onClick={onClose}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex items-center rounded-md px-4 py-3 text-[15px] font-medium transition-colors cursor-pointer",
                    active
                      ? "bg-accent-subtle text-accent font-semibold"
                      : "text-foreground hover:bg-muted",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Menu footer — consultation CTAs */}
        <div className="border-t border-border px-4 py-4">
          <div className="flex flex-col gap-2">
            <Link
              href="/search"
              onClick={onClose}
              className="flex h-11 items-center justify-center gap-2 rounded-md border border-border bg-background px-4 text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-colors cursor-pointer"
            >
              <Search className="size-4" aria-hidden="true" />
              Cari Layanan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
