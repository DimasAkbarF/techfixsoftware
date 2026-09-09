export const siteConfig = {
  name: "techfixsoftware",
  shortName: "techfixsoftware",
  tagline: "Layanan Teknis Android Profesional",
  description:
    "Platform layanan teknis Android: root, unlock bootloader, fix bootloop, unbrick, flash firmware, custom ROM, recovery, dan perbaikan software. Konsultasi langsung dengan CS manusia via WhatsApp atau Telegram.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://techfixsoftware.example.com",
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