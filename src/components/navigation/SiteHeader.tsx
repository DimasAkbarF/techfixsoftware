"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Search, Menu, X, ArrowRight } from "lucide-react";
import { mainNav } from "@/components/navigation/navItems";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { hasWhatsapp, whatsappLink } from "@/config/site";
import { buildConsultationMessage } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/Button";

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
        className={cn(mobile && "w-full")}
      >
        <WhatsAppIcon className="w-4 h-4 mr-1.5" />
        Konsultasi Gratis
      </ButtonLink>
    );
  }

  return (
    <ButtonLink
      href="/contact"
      onClick={handleClick}
      variant="primary"
      size={mobile ? "large" : "small"}
      className={cn(mobile && "w-full")}
    >
      Konsultasi Gratis <ArrowRight className="w-3.5 h-3.5 ml-1" />
    </ButtonLink>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-200 border-b",
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-border shadow-sm"
            : "bg-background border-transparent"
        )}
      >
        <div className="container-page flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group cursor-pointer" aria-label="Beranda" onClick={closeMenu}>
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 overflow-hidden">
              <Image src="/techfix-software-logo.png" alt="Logo" fill className="object-contain" priority />
            </div>
            <span className="font-bold tracking-tight text-foreground sm:text-lg group-hover:text-accent transition-colors">
              TechFix Software
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {mainNav.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-semibold transition-colors cursor-pointer",
                    isActive ? "text-accent" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/search"
              aria-label="Cari layanan atau panduan"
              className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors hidden sm:block"
            >
              <Search className="w-5 h-5" />
            </Link>
            
            <div className="hidden sm:block">
              <HeaderConsultationCTA />
            </div>

            <button
              type="button"
              className="p-2 -mr-2 text-muted-foreground hover:text-foreground md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 top-16 z-30 bg-background md:hidden animate-fade-in flex flex-col">
          <nav className="flex-1 overflow-y-auto py-6 px-4">
            <div className="flex flex-col gap-4">
              {mainNav.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={cn(
                      "px-4 py-3 rounded-lg text-lg font-semibold transition-colors",
                      isActive ? "bg-accent/10 text-accent" : "text-foreground hover:bg-muted"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
            
            <div className="mt-8 border-t border-border pt-8 px-4">
              <Link
                href="/search"
                onClick={closeMenu}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground py-3 mb-6 font-medium"
              >
                <Search className="w-5 h-5" /> Cari layanan / panduan
              </Link>
              <HeaderConsultationCTA mobile onClick={closeMenu} />
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
