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
  RotateCcw,
  ShieldCheck,
  Unlock,
  Cpu,
  HardDrive,
  LifeBuoy,
  Layers,
  Wrench,
} from "lucide-react";
import { mainNav } from "@/components/navigation/navItems";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { hasWhatsapp, whatsappLink } from "@/config/site";
import { buildConsultationMessage } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/Button";

const SERVICE_ITEMS = [
  {
    label: "Fix Bootloop & Soft Brick",
    desc: "Solusi HP restart terus & stuck logo",
    href: "/services/fix-bootloop",
    icon: RotateCcw,
  },
  {
    label: "Root Android & Magisk",
    desc: "Akses root bersih via Magisk / KernelSU",
    href: "/services/root-android",
    icon: ShieldCheck,
  },
  {
    label: "Unlock Bootloader (UBL)",
    desc: "Buka bootloader resmi & aman",
    href: "/services/unlock-bootloader",
    icon: Unlock,
  },
  {
    label: "Pasang Custom ROM",
    desc: "Upgrade OS & tingkatkan performa",
    href: "/services/custom-rom",
    icon: Cpu,
  },
  {
    label: "Flash Firmware Stock",
    desc: "Kembalikan OS resmi pabrik orisinal",
    href: "/services/flash-firmware",
    icon: HardDrive,
  },
  {
    label: "Unbrick & Pemulihan Sistem",
    desc: "Pemulihan mati total & mode darurat",
    href: "/services/unbrick",
    icon: LifeBuoy,
  },
  {
    label: "Recovery TWRP / OrangeFox",
    desc: "Instalasi custom recovery touch",
    href: "/services/recovery",
    icon: Layers,
  },
  {
    label: "Software Repair & Troubleshooting",
    desc: "Diagnosa & penanganan error software",
    href: "/services/software-repair",
    icon: Wrench,
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
          "font-medium tracking-tight rounded-full transition-all duration-150",
          mobile ? "w-full justify-center py-3 text-sm" : "text-xs h-9 px-4"
        )}
      >
        <WhatsAppIcon className="w-3.5 h-3.5 mr-1.5" />
        <span>Konsultasi</span>
      </ButtonLink>
    );
  }

  return (
    <ButtonLink
      href="/contact"
      onClick={handleClick}
      variant="primary"
      size={mobile ? "large" : "small"}
      className={cn(
        "font-medium tracking-tight rounded-full transition-all duration-150",
        mobile ? "w-full justify-center py-3 text-sm" : "text-xs h-9 px-4"
      )}
    >
      <span>Konsultasi</span>
      <ArrowRight className="w-3 h-3 ml-1" />
    </ButtonLink>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setServicesDropdownOpen(false);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setServicesDropdownOpen(false);
    setMenuOpen(false);
  }

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setServicesDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (!servicesDropdownOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [servicesDropdownOpen]);

  const handleDropdownEnter = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setServicesDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  const isServicesActive = pathname.startsWith("/services");

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-200",
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border shadow-xs"
            : "bg-background/50 backdrop-blur-xs border-b border-border/40"
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
            <div className="relative w-8 h-8 overflow-hidden rounded-md transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/techfix-software-logo.png"
                alt="Logo TechFix Software"
                fill
                sizes="32px"
                className="object-contain"
                priority
              />
            </div>
            <span className="font-bold tracking-tight text-foreground text-base sm:text-lg group-hover:text-accent transition-colors">
              TechFix Software
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-7" aria-label="Navigasi Utama">
            {/* Layanan Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                type="button"
                onClick={() => setServicesDropdownOpen((prev) => !prev)}
                className={cn(
                  "relative flex items-center gap-1 text-[13px] font-medium transition-colors duration-150 py-1 cursor-pointer",
                  isServicesActive
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground",
                  servicesDropdownOpen && "text-foreground"
                )}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
              >
                <span>Layanan</span>
                <ChevronDown
                  className={cn(
                    "w-3.5 h-3.5 transition-transform duration-200 opacity-60",
                    servicesDropdownOpen && "rotate-180 opacity-100"
                  )}
                  aria-hidden="true"
                />
                {isServicesActive && (
                  <span
                    className="absolute -bottom-1 inset-x-0 h-0.5 bg-accent rounded-full"
                    aria-hidden="true"
                  />
                )}
              </button>

              {/* Refined & UI-Friendly Service Dropdown Menu */}
              {servicesDropdownOpen && (
                <div
                  className="absolute top-full left-0 pt-2 w-[540px] z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  role="menu"
                  aria-label="Katalog Layanan TechFix"
                >
                  <div className="rounded-xl border border-border bg-card/98 backdrop-blur-xl shadow-dropdown overflow-hidden">
                    <div className="grid grid-cols-2 gap-1 p-2">
                      {SERVICE_ITEMS.map((item) => {
                        const isItemActive = pathname === item.href;
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setServicesDropdownOpen(false)}
                            className={cn(
                              "group flex items-start gap-2.5 p-2 rounded-lg transition-colors cursor-pointer",
                              isItemActive
                                ? "bg-accent/10"
                                : "hover:bg-muted/70"
                            )}
                            role="menuitem"
                          >
                            <div
                              className={cn(
                                "size-7 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-colors",
                                isItemActive
                                  ? "bg-accent text-white"
                                  : "bg-muted text-muted-foreground group-hover:bg-accent/15 group-hover:text-accent"
                              )}
                            >
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div
                                className={cn(
                                  "text-xs font-medium leading-snug transition-colors",
                                  isItemActive
                                    ? "text-accent font-semibold"
                                    : "text-foreground group-hover:text-accent"
                                )}
                              >
                                {item.label}
                              </div>
                              <p className="text-[11px] text-muted-foreground leading-snug mt-0.5 truncate">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                    <div className="border-t border-border/60 bg-muted/30 px-3.5 py-2 flex items-center justify-between text-xs">
                      <span className="text-[11px] text-muted-foreground">
                        Layanan remote via AnyDesk &amp; TeamViewer
                      </span>
                      <Link
                        href="/services"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="flex items-center gap-1 font-semibold text-accent hover:text-accent-hover transition-colors text-[11px] cursor-pointer"
                      >
                        <span>Semua Layanan</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Other Nav Items */}
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
                      "relative text-[13px] font-medium transition-colors duration-150 py-1 cursor-pointer",
                      isActive
                        ? "text-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <span
                        className="absolute -bottom-1 inset-x-0 h-0.5 bg-accent rounded-full"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                );
              })}
          </nav>

          {/* Right Action Center */}
          <div className="flex items-center gap-3">
            {/* Clean Search Button */}
            <Link
              href="/search"
              aria-label="Cari layanan atau panduan"
              className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted/60 rounded-full transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </Link>

            {/* Consultation CTA */}
            <div className="hidden sm:block">
              <HeaderConsultationCTA />
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="p-2 -mr-1.5 text-muted-foreground hover:text-foreground hover:bg-muted/60 rounded-lg md:hidden transition-colors cursor-pointer"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Clean Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 top-16 z-30 bg-background/95 backdrop-blur-xl md:hidden animate-fade-in flex flex-col border-b border-border shadow-lg"
          role="dialog"
          aria-modal="true"
          aria-label="Menu navigasi mobile"
        >
          <nav className="flex-1 overflow-y-auto px-6 py-6 flex flex-col justify-between">
            <div className="flex flex-col gap-1">
              {/* Mobile Layanan Accordion */}
              <div className="border-b border-border/40 py-2">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((prev) => !prev)}
                  className="flex w-full items-center justify-between py-2 text-base font-semibold text-foreground"
                >
                  <span>Layanan</span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-200 text-muted-foreground",
                      mobileServicesOpen && "rotate-180 text-accent"
                    )}
                  />
                </button>
                {mobileServicesOpen && (
                  <div className="flex flex-col gap-1 pl-1 pt-2 pb-1 animate-in fade-in duration-150">
                    {SERVICE_ITEMS.map((item) => {
                      const isItemActive = pathname === item.href;
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={closeMenu}
                          className={cn(
                            "flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm transition-colors cursor-pointer",
                            isItemActive
                              ? "bg-accent/10 text-accent font-semibold"
                              : "text-foreground hover:bg-muted/70 hover:text-accent"
                          )}
                        >
                          <div
                            className={cn(
                              "size-6 rounded-md flex items-center justify-center shrink-0 transition-colors",
                              isItemActive
                                ? "bg-accent text-white"
                                : "bg-muted text-muted-foreground"
                            )}
                          >
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs font-medium truncate">{item.label}</span>
                        </Link>
                      );
                    })}
                    <Link
                      href="/services"
                      onClick={closeMenu}
                      className="flex items-center justify-between px-2.5 py-2 mt-1 text-xs font-semibold text-accent hover:underline cursor-pointer"
                    >
                      <span>Semua Katalog Layanan</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                )}
              </div>

              {/* Remaining Mobile Links */}
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
                      onClick={closeMenu}
                      className={cn(
                        "py-3 text-base font-medium transition-colors border-b border-border/40 last:border-0",
                        isActive ? "text-accent font-semibold" : "text-foreground hover:text-accent"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
            </div>

            <div className="pt-8 flex flex-col gap-4">
              <Link
                href="/search"
                onClick={closeMenu}
                className="flex items-center gap-2.5 text-sm font-medium text-muted-foreground hover:text-foreground py-2"
              >
                <Search className="size-4" />
                <span>Cari Layanan &amp; Panduan</span>
              </Link>

              <HeaderConsultationCTA mobile onClick={closeMenu} />
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
