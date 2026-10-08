import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ShieldAlert, ShieldCheck } from "lucide-react";

export function SiteFooter() {
  const year = new Date().getFullYear();

  const serviceLinks = [
    { label: "Fix Bootloop", href: "/services/fix-bootloop" },
    { label: "Unbrick / Soft Brick", href: "/services/unbrick" },
    { label: "Root Android & Magisk", href: "/services/root-android" },
    { label: "Unlock Bootloader", href: "/services/unlock-bootloader" },
    { label: "Flash Firmware Stock", href: "/services/flash-firmware" },
    { label: "Custom ROM", href: "/services/custom-rom" },
    { label: "Software Repair", href: "/services/software-repair" },
  ];

  const guideLinks = [
    { label: "Semua Panduan & Edukasi", href: "/guides" },
    { label: "Penyebab HP Stuck Logo", href: "/guides/apa-penyebab-hp-android-stuck-di-logo" },
    { label: "Bootloop vs Soft Brick", href: "/guides/perbedaan-bootloop-dan-soft-brick" },
    { label: "Apakah UBL Hapus Data?", href: "/guides/apakah-unlock-bootloader-menghapus-data" },
    { label: "Panduan Remote AnyDesk", href: "/remote-guide" },
    { label: "Cara Kerja Layanan", href: "/how-it-works" },
    { label: "FAQ & Tanya Jawab", href: "/faq" },
  ];

  const trustLinks = [
    { label: "Testimoni Percakapan", href: "/testimonials" },
    { label: "Tentang TechFix", href: "/about" },
    { label: "Konsultasi & Kontak", href: "/contact" },
    { label: "Ketentuan Layanan", href: "/terms" },
    { label: "Kebijakan Privasi", href: "/privacy" },
    { label: "Disclaimer Teknis", href: "/disclaimer" },
  ];

  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container-page py-12 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Col 1: Brand & Positioning */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2 cursor-pointer"
              aria-label="TechFix Software — Beranda"
            >
              <span className="text-lg font-bold tracking-tight text-white">
                TechFix Software
              </span>
            </Link>
            <p className="mt-3 text-xs leading-relaxed text-white/70">
              Technical Android software support spesialis dengan pendekatan konsultasi manusia, pengecekan kompatibilitas di awal, dan transparansi risiko tanpa janji palsu.
            </p>

            <div className="mt-4 flex items-center gap-2 rounded-md bg-white/5 p-2.5 text-xs text-white/80 border border-white/10">
              <ShieldCheck className="size-4 shrink-0 text-accent" aria-hidden="true" />
              <span>Remote support terarah untuk pengguna Android di seluruh Indonesia.</span>
            </div>
          </div>

          {/* Col 2: Layanan */}
          <nav aria-label="Navigasi footer — Layanan">
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-white/50">Layanan Teknis</p>
            <ul className="space-y-2">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs text-white/70 hover:text-white transition-colors cursor-pointer"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 3: Panduan & Edukasi */}
          <nav aria-label="Navigasi footer — Panduan">
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-white/50">Panduan & Solusi</p>
            <ul className="space-y-2">
              {guideLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs text-white/70 hover:text-white transition-colors cursor-pointer"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 4: Trust, Saluran Resmi & Legal */}
          <nav aria-label="Navigasi footer — Informasi & Legal">
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-white/50">Keamanan & Legal</p>
            <ul className="space-y-2">
              {trustLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs text-white/70 hover:text-white transition-colors cursor-pointer"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 rounded-md border border-warning/20 bg-warning/5 p-2.5 text-[11px] leading-relaxed text-white/75">
              <span className="font-semibold text-warning flex items-center gap-1">
                <ShieldAlert className="size-3" aria-hidden="true" />
                Keamanan Saluran
              </span>
              Komunikasi resmi hanya melalui WhatsApp &amp; Telegram yang tertera di situs ini. Kami tidak pernah meminta kata sandi akun atau kode OTP.
            </div>
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="container-page flex flex-col gap-2 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} {siteConfig.name}. Beroperasi sejak 2025.</p>
          <p>Domain resmi: <span className="text-white/80 font-mono">techfixsoftware.my.id</span></p>
        </div>
      </div>
    </footer>
  );
}
