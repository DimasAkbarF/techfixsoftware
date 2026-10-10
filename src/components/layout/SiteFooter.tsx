import Link from "next/link";
import Image from "next/image";
import { ShieldAlert, MapPin, Clock } from "lucide-react";
import { author } from "@/data/author";

const serviceLinks = [
  { label: "Fix Bootloop & Soft Brick", href: "/services/fix-bootloop" },
  { label: "Root Android & Magisk", href: "/services/root-android" },
  { label: "Pasang Custom ROM", href: "/services/custom-rom" },
  { label: "Flash Firmware Stock", href: "/services/flash-firmware" },
];

const resourceLinks = [
  { label: "Panduan Teknis", href: "/guides" },
  { label: "Tanya Jawab (FAQ)", href: "/faq" },
  { label: "Kontak & Konsultasi", href: "/contact" },
  { label: "Persiapan Remote", href: "/guides/persiapan-remote-support" },
];

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container-page max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
          {/* Brand Col */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6 group inline-flex">
              <div className="relative w-8 h-8 overflow-hidden">
                <Image src="/techfix-software-logo.png" alt="Logo" fill className="object-contain" />
              </div>
              <span className="font-bold text-foreground text-lg group-hover:text-accent transition-colors">
                TechFix Software
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Layanan perbaikan software Android spesialis bootloop, root, custom ROM, dan pemulihan sistem. Profesional, transparan, dan aman.
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" /> Jawa Timur, Indonesia
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 shrink-0" /> Senin - Sabtu (09:00 - 20:00)
              </span>
            </div>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="font-bold text-foreground mb-5 uppercase tracking-wider text-xs">Layanan Utama</h4>
            <ul className="space-y-3 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Col */}
          <div>
            <h4 className="font-bold text-foreground mb-5 uppercase tracking-wider text-xs">Informasi</h4>
            <ul className="space-y-3 text-sm">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Security Alert Col */}
          <div>
            <h4 className="font-bold text-foreground mb-5 uppercase tracking-wider text-xs">Peringatan Keamanan</h4>
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-destructive text-sm mb-1 font-bold">
                    Kami TIDAK PERNAH meminta:
                  </strong>
                  <ul className="text-xs text-destructive/80 space-y-1 list-disc list-inside">
                    <li>Kode OTP / Verifikasi</li>
                    <li>Password M-Banking</li>
                    <li>Login Sosial Media</li>
                  </ul>
                  <p className="text-xs text-destructive/80 mt-2 font-medium">
                    Jaga kerahasiaan data pribadi Anda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            &copy; {currentYear} TechFix Software. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
            Dikembangkan oleh {author.name}
          </div>
        </div>
      </div>
    </footer>
  );
}
