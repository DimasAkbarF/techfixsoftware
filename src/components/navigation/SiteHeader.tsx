"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  Search,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Shield,
  RefreshCw,
  Cpu,
  Layers,
  Sparkles,
  MapPin,
} from "lucide-react";
import { mainNav } from "@/components/navigation/navItems";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { hasWhatsapp, whatsappLink } from "@/config/site";
import { buildConsultationMessage } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/Button";

const FEATURED_SERVICES = [
  {
    title: "Fix Bootloop & Unbrick",
    href: "/services/fix-bootloop",
    desc: "Pemulihan HP stuck di logo, auto-reboot, & soft brick",
    icon: RefreshCw,
    badge: "Paling Dicari",
  },
  {
    title: "Root Android & Magisk",
    href: "/services/root-android",
    desc: "Systemless root, KernelSU, debloat & optimasi modul",
    icon: Shield,
    badge: "Systemless",
  },
  {
    title: "Pasang Custom ROM",
    href: "/services/custom-rom",
    desc: "LineageOS, PixelOS, crDroid dengan update OS stabil",
    icon: Cpu,
    badge: "AOSP",
  },
  {
    title: "Flash Firmware Stock",
    href: "/services/flash-firmware",
    desc: "Kembalikan ke ROM resmi pabrik & unroot total",
    icon: Layers,
    badge: "Official",
  },
];

function HeaderConsultationCTA({ mobile = false, onClick }: { mobile?: boolean; onClick?: () => void }) {
  const isWa = hasWhatsapp();
  const waHref = isWa ? whatsappLink(buildConsultationMessage()) : null;

  const handleClick = () => {
    trackEvent("whatsapp_click", {
      source_page: mobile ? "header_mobile_menu" : "header_desktop",
      action: "consultation_button",
    });
    if (onClick) onClick();
  };

  if (waHref) {
    return (
      <ButtonLink
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        variant="whatsapp"
        size={mobile ? "large" : "small"}
        className={cn(
          "font-semibold shadow-xs transition-all duration-200 active:scale-[0.98]",
          mobile && "w-full justify-center py-3.5 text-sm"
        )}
      >
        <span className="relative flex size-2 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-white" />
        </span>
        <WhatsAppIcon className="w-4 h-4 mr-0.5 ml-1" />
        <span>Konsultasi Gratis</span>
      </ButtonLink>
    );
  }

  return (
    <ButtonLink
      href="/contact"
      onClick={handleClick}
      variant="primary"
      size={mobile ? "large" : "small"}
      className={cn(mobile && "w-full justify-center")}
    >
      <span>Konsultasi Gratis</span>
      <ArrowRight className="w-3.5 h-3.5 ml-1" />
    </ButtonLink>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  // Handle escape key to close dropdown & menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300 ease-in-out border-b",
          isScrolled
            ? "bg-background/85 backdrop-blur-xl border-border/80 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)]"
            : "bg-background/60 backdrop-blur-md border-border/40"
        )}
      >
        <div className="container-page flex h-16 items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group cursor-pointer select-none"
            aria-label="Beranda TechFix Software"
            onClick={closeMenu}
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 overflow-hidden rounded-lg transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/techfix-software-logo.png"
                alt="Logo TechFix Software"
                fill
                sizes="(max-width: 640px) 32px, 36px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold tracking-tight text-foreground text-[16px] sm:text-[17px] group-hover:text-accent transition-colors">
                TechFix Software
              </span>
              <span className="hidden xl:inline-flex items-center gap-1 text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                <Sparkles className="size-2.5" /> Pro Support
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5" aria-label="Navigasi Utama">
            {/* Layanan with Enterprise Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                type="button"
                onClick={() => setDropdownOpen((prev) => !prev)}
                className={cn(
                  "flex items-center gap-1 px-3.5 py-2 text-[13px] font-medium rounded-full transition-all duration-200 cursor-pointer",
                  pathname.startsWith("/services")
                    ? "text-accent font-semibold bg-accent/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/70",
                  dropdownOpen && "bg-muted/80 text-foreground"
                )}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                <span>Layanan</span>
                <ChevronDown
                  className={cn(
                    "size-3.5 transition-transform duration-200 opacity-70",
                    dropdownOpen && "rotate-180 opacity-100"
                  )}
                  aria-hidden="true"
                />
              </button>

              {/* Mega/Dropdown Panel */}
              {dropdownOpen && (
                <div
                  className="absolute top-full left-0 pt-2 w-[390px] sm:w-[420px] z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  role="menu"
                >
                  <div className="rounded-2xl border border-border bg-card/95 backdrop-blur-2xl p-3 shadow-dropdown">
                    <div className="px-3 py-2 border-b border-border/60 mb-2 flex items-center justify-between">
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-muted-foreground">
                        Solusi Software Populer
                      </span>
                      <span className="text-[11px] text-accent font-medium">Garansi No Fix No Fee</span>
                    </div>

                    <div className="grid gap-1">
                      {FEATURED_SERVICES.map((srv) => {
                        const Icon = srv.icon;
                        const isSrvActive = pathname === srv.href;
                        return (
                          <Link
                            key={srv.href}
                            href={srv.href}
                            onClick={() => setDropdownOpen(false)}
                            className={cn(
                              "group/item flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 cursor-pointer",
                              isSrvActive
                                ? "bg-accent/10 text-accent"
                                : "hover:bg-muted/70 text-foreground"
                            )}
                            role="menuitem"
                          >
                            <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground group-hover/item:bg-accent group-hover/item:text-accent-foreground transition-colors duration-150">
                              <Icon className="size-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="text-[13px] font-semibold text-foreground group-hover/item:text-accent transition-colors">
                                  {srv.title}
                                </span>
                                <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-muted text-muted-foreground border border-border/50">
                                  {srv.badge}
                                </span>
                              </div>
                              <p className="text-[11px] text-muted-foreground line-clamp-1 mt-0.5">
                                {srv.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    <div className="mt-2.5 pt-2.5 border-t border-border/60 px-2 flex items-center justify-between">
                      <Link
                        href="/services"
                        onClick={() => setDropdownOpen(false)}
                        className="text-xs font-semibold text-accent hover:text-accent-hover transition-colors inline-flex items-center gap-1 cursor-pointer"
                      >
                        Lihat Seluruh 8 Layanan Lengkap
                        <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                      <span className="text-[10px] text-muted-foreground font-mono">AnyDesk &amp; Onsite</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Standard Nav Links */}
            {mainNav
              .filter((item) => item.href !== "/services")
              .map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && item.href !== "/#masalah-android" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-3.5 py-2 text-[13px] font-medium rounded-full transition-all duration-200 cursor-pointer",
                      isActive
                        ? "text-accent font-semibold bg-accent/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/70"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
          </nav>

          {/* Right Action Center */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* SaaS-Style Quick Search Trigger (Desktop) */}
            <Link
              href="/search"
              aria-label="Cari layanan atau panduan"
              className="hidden lg:flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-border/80 bg-muted/40 hover:bg-muted/80 text-xs text-muted-foreground hover:text-foreground transition-all duration-200 cursor-pointer group shadow-2xs"
            >
              <Search className="size-3.5 text-muted-foreground group-hover:text-accent transition-colors" />
              <span>Cari solusi...</span>
              <kbd className="hidden xl:inline-block font-mono text-[10px] bg-background px-1.5 py-0.5 rounded border border-border/70 text-muted-foreground/80">
                ⌘K
              </kbd>
            </Link>

            {/* Compact Search Trigger for Tablets */}
            <Link
              href="/search"
              aria-label="Cari layanan atau panduan"
              className="flex lg:hidden p-2 text-muted-foreground hover:text-foreground hover:bg-muted/70 rounded-full transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </Link>

            {/* Consultation CTA */}
            <div className="hidden sm:block">
              <HeaderConsultationCTA />
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              className="p-2 -mr-1.5 text-muted-foreground hover:text-foreground hover:bg-muted/70 rounded-lg md:hidden transition-colors cursor-pointer"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation (Enterprise Sheet Style) */}
      {menuOpen && (
        <div
          className="fixed inset-0 top-16 z-30 bg-background/95 backdrop-blur-2xl md:hidden animate-in fade-in duration-200 flex flex-col border-b border-border shadow-2xl"
          role="dialog"
          aria-modal="true"
          aria-label="Menu navigasi mobile"
        >
          <nav className="flex-1 overflow-y-auto px-5 py-6">
            {/* Quick Search on Mobile */}
            <Link
              href="/search"
              onClick={closeMenu}
              className="flex items-center justify-between px-4 py-3 rounded-xl border border-border bg-muted/50 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Search className="size-4 text-accent" />
                <span>Cari masalah, HP, atau panduan...</span>
              </div>
              <ArrowRight className="size-4 opacity-50" />
            </Link>

            {/* Featured Services Grid */}
            <div className="mb-6">
              <p className="text-[11px] font-mono font-semibold uppercase tracking-wider text-muted-foreground mb-3 px-1">
                Layanan Spesialis
              </p>
              <div className="grid grid-cols-2 gap-2">
                {FEATURED_SERVICES.map((srv) => {
                  const Icon = srv.icon;
                  return (
                    <Link
                      key={srv.href}
                      href={srv.href}
                      onClick={closeMenu}
                      className="flex flex-col gap-1.5 p-3 rounded-xl border border-border/80 bg-card hover:border-accent hover:bg-muted/30 transition-all"
                    >
                      <div className="flex size-7 items-center justify-center rounded-lg bg-accent/10 text-accent">
                        <Icon className="size-3.5" />
                      </div>
                      <span className="text-xs font-semibold text-foreground line-clamp-1">
                        {srv.title}
                      </span>
                      <span className="text-[10px] text-muted-foreground font-mono">
                        {srv.badge}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* General Links */}
            <div className="space-y-1 border-t border-border/80 pt-4">
              <p className="text-[11px] font-mono font-semibold uppercase tracking-wider text-muted-foreground mb-2 px-1">
                Eksplorasi
              </p>
              {mainNav.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={cn(
                      "flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors",
                      isActive
                        ? "bg-accent/10 text-accent"
                        : "text-foreground hover:bg-muted/70"
                    )}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="size-3.5 opacity-40" />
                  </Link>
                );
              })}
            </div>

            {/* Bottom Actions & Location */}
            <div className="mt-8 border-t border-border pt-6 pb-4 flex flex-col gap-4">
              <HeaderConsultationCTA mobile onClick={closeMenu} />

              <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground font-medium pt-1">
                <MapPin className="size-3.5 text-accent shrink-0" />
                <span>Rangkasbitung, Lebak, Banten • Remote Se-Indonesia</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
