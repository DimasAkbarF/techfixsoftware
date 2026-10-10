export const siteKeywords: string[] = [
  "jasa perbaikan software android",
  "jasa root android",
  "jasa root hp",
  "jasa root magisk",
  "jasa flash hp",
  "jasa fix bootloop",
  "jasa custom rom",
  "jasa unlock bootloader",
  "service software hp online",
  "jasa teknisi software hp",
  "flashing firmware resmi",
  "unbrick android remote",
  "root magisk zygisk",
  "techfix software",
];

export const siteConfig = {
  name: "TechFix Software",
  shortName: "TechFix",
  alternateName: ["TechFix", "Tech Fix", "Tech Fix Software"],
  tagline: "Jasa Service & Perbaikan Software Android Profesional",
  description:
    "TechFix Software adalah platform layanan technical support & perbaikan software Android: root, unlock bootloader, fix bootloop, unbrick, flash firmware, custom ROM, recovery, dan software repair. Konsultasi langsung bersama spesialis teknis via WhatsApp atau Telegram.",
  // Canonical production domain. Keep this fallback in sync with the real
  // domain — if NEXT_PUBLIC_SITE_URL is unset on a build, canonicals,
  // sitemap.xml and OG URLs would otherwise point at a placeholder host.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://techfixsoftware.my.id",
  locale: "id_ID",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  telegramUrl: process.env.NEXT_PUBLIC_TELEGRAM_URL ?? "",
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "",
  remoteSoftware: {
    anydeskWindows: "https://anydesk.com/en/downloads/windows",
    anydeskAndroid: "https://anydesk.com/en/downloads/android",
    anydeskHome: "https://anydesk.com",
  },
} as const;

export const hasWhatsapp = () => siteConfig.whatsappNumber.replace(/\D/g, "").length > 0;

const phone = siteConfig.whatsappNumber.replace(/\D/g, "");

export function whatsappLink(message: string): string | null {
  if (!phone) return null;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function telegramLink(message?: string): string | null {
  if (!siteConfig.telegramUrl) return null;
  const url = message ? siteConfig.telegramUrl : siteConfig.telegramUrl;
  if (!message) return url;
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}text=${encodeURIComponent(message)}`;
}

export const hasTelegram = () => siteConfig.telegramUrl.length > 0;
export const hasEmail = () => siteConfig.supportEmail.length > 0;