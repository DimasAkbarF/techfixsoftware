import type { NavItem } from "@/types";

export const mainNav: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Layanan", href: "/services" },
  { label: "Kategori", href: "/categories" },
  { label: "Cara Kerja", href: "/how-it-works" },
  { label: "FAQ", href: "/faq" },
  { label: "Tentang Kami", href: "/about" },
  { label: "Kontak", href: "/contact" },
];

export const footerNav: NavItem[] = [
  { label: "Layanan", href: "/services" },
  { label: "Kategori", href: "/categories" },
  { label: "Cara Kerja", href: "/how-it-works" },
  { label: "Panduan Remote", href: "/remote-guide" },
  { label: "FAQ", href: "/faq" },
  { label: "Kontak", href: "/contact" },
];

export const infoNav: NavItem[] = [
  { label: "Tentang Kami", href: "/about" },
  { label: "Hubungi Kami", href: "/contact" },
  { label: "Ketentuan Layanan", href: "/terms" },
  { label: "Kebijakan Privasi", href: "/privacy" },
  { label: "Disclaimer", href: "/disclaimer" },
];