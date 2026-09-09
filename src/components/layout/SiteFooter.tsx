import Link from "next/link";
import Image from "next/image";
import { Send } from "lucide-react";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  const guideLinks = [
    { label: "Cara Kerja", href: "/how-it-works" },
    { label: "Panduan Remote", href: "/remote-guide" },
    { label: "FAQ", href: "/faq" },
  ];

  const serviceLinks = [
    { label: "Root Android", href: "/services/root-android" },
    { label: "Unlock Bootloader", href: "/services/unlock-bootloader" },
    { label: "Fix Bootloop", href: "/services/fix-bootloop" },
    { label: "Flash Firmware", href: "/services/flash-firmware" },
    { label: "Custom ROM", href: "/services/custom-rom" },
  ];

  const companyLinks = [
    { label: "Tentang Kami", href: "/about" },
    { label: "Kontak", href: "/contact" },
    { label: "Ketentuan Layanan", href: "/terms" },
    { label: "Kebijakan Privasi", href: "/privacy" },
    { label: "Disclaimer", href: "/disclaimer" },
  ];

  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container-page py-24 md:py-32">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-12">
          {/* Brand block */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center cursor-pointer">
              <Image
                src="/logo1.png"
                alt="techfixsoftware"
                width={48}
                height={48}
                className="h-10 w-auto"
                priority
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Teknisi software Android untuk membantu Anda memahami dan menyelesaikan masalah perangkat.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {siteConfig.telegramUrl ? (
                <Link
                  href={siteConfig.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-1.5 rounded-md bg-white/10 px-3 py-1.5 text-xs font-medium text-white/80 hover:bg-white/15 hover:text-white transition-colors cursor-pointer"
                >
                  <Send className="size-3.5" aria-hidden="true" />
                  Telegram
                </Link>
              ) : null}
            </div>
          </div>

          {/* Layanan */}
          <nav aria-label="Navigasi footer — layanan">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-white/40">Layanan</p>
            <ul className="space-y-2.5">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/60 hover:text-white transition-colors cursor-pointer">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Panduan */}
          <nav aria-label="Navigasi footer — panduan">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-white/40">Panduan</p>
            <ul className="space-y-2.5">
              {guideLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/60 hover:text-white transition-colors cursor-pointer">
                    {item.label}
                  </Link>
                </li>
              ))}
              {siteConfig.supportEmail ? (
                <li>
                  <Link href="/contact" className="text-sm text-white/60 hover:text-white transition-colors cursor-pointer">
                    Hubungi Kami
                  </Link>
                </li>
              ) : null}
            </ul>
          </nav>

          {/* Perusahaan */}
          <nav aria-label="Navigasi footer — perusahaan">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-white/40">Perusahaan</p>
            <ul className="space-y-2.5">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/60 hover:text-white transition-colors cursor-pointer">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} {siteConfig.name}. Seluruh hak dilindungi.</p>
          <p>Remote support untuk perangkat Android di seluruh Indonesia.</p>
        </div>
      </div>
    </footer>
  );
}
