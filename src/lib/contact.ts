import { siteConfig, whatsappLink, telegramLink } from "@/config/site";

export function buildConsultationMessage(
  serviceName?: string,
  extra?: string,
): string {
  const lines: string[] = [
    "Halo CS, saya ingin konsultasi.",
    "",
    serviceName ? `Layanan: ${serviceName}` : "Layanan: (belum ditentukan)",
    "",
    "Device Brand:",
    "Device Model:",
    "Android / OS Version (jika diketahui):",
    "Masalah yang Dialami:",
  ];
  if (extra) {
    lines.push("", extra);
  }
  lines.push("", "Terima kasih.");
  return lines.join("\n");
}

export function getWhatsappUrl(message: string): string | null {
  return whatsappLink(message);
}

export function getTelegramUrl(message: string): string | null {
  return telegramLink(message);
}

export function getContactMessage(serviceName?: string): string {
  return buildConsultationMessage(serviceName);
}

export { siteConfig };

export type ContactLink = { type: "whatsapp" | "telegram" | "email"; href: string };

export function getAvailableContactLinks(message: string): ContactLink[] {
  const links: ContactLink[] = [];
  const wa = whatsappLink(message);
  if (wa) {
    links.push({ type: "whatsapp", href: wa });
  }
  const tg = telegramLink(message);
  if (tg) {
    links.push({ type: "telegram", href: tg });
  }
  if (siteConfig.supportEmail) {
    links.push({ type: "email", href: `mailto:${siteConfig.supportEmail}` });
  }
  return links;
}