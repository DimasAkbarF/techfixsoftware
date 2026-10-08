import { siteConfig, whatsappLink, telegramLink } from "@/config/site";

export function buildConsultationMessage(
  serviceName?: string,
  extra?: string,
): string {
  const lines: string[] = [
    "Halo TechFix Software,",
    "Saya ingin konsultasi teknis Android.",
    "",
    serviceName ? `Layanan: ${serviceName}` : "Layanan: (Belum ditentukan)",
    "",
    "Merk HP:",
    "Model / Tipe HP:",
    "Kondisi / Masalah:",
    "Yang sudah saya coba:",
  ];
  if (extra) {
    lines.push("", extra);
  }
  lines.push("", "Mohon bantu cek apakah perangkat saya bisa ditangani.");
  return lines.join("\n");
}

export function buildServiceConsultationMessage(slug: string, name: string): string {
  if (slug === "root-android") {
    return [
      "Halo TechFix Software,",
      `Saya ingin konsultasi ${name}.`,
      "",
      "Merk HP:",
      "Model / Tipe:",
      "Versi Android (bila tahu):",
      "Tujuan Root:",
      "Status Bootloader (Locked / Unlocked / Belum tahu):",
      "Kondisi Saat Ini:",
      "",
      "Mohon bantu cek kompatibilitas dan langkah amannya.",
    ].join("\n");
  }

  if (slug === "fix-bootloop" || slug === "unbrick") {
    return [
      "Halo TechFix Software,",
      `Saya ingin konsultasi penanganan ${name}.`,
      "",
      "Merk HP:",
      "Model / Tipe:",
      "Gejala (Stuck logo / Restart terus / Mati total):",
      "Penyebab awal (Setelah update / Gagal flash / Tiba-tiba):",
      "Yang sudah saya coba:",
      "",
      "Mohon bantu cek apakah perangkat saya bisa dipulihkan.",
    ].join("\n");
  }

  return [
    "Halo TechFix Software,",
    `Saya ingin konsultasi layanan ${name}.`,
    "",
    "Merk HP:",
    "Model / Tipe:",
    "Kondisi perangkat saat ini:",
    "Yang sudah dicoba:",
    "Kebutuhan utama:",
    "",
    "Mohon bantu cek apakah perangkat saya bisa ditangani.",
  ].join("\n");
}

export function buildProblemFinderMessage(data: {
  problem: string;
  brand: string;
  model: string;
  tried: string;
  goal: string;
}): string {
  return [
    "Halo TechFix Software,",
    "",
    "Saya ingin konsultasi masalah Android saya.",
    "",
    `Perangkat: ${data.brand || "-"} ${data.model || ""}`.trim(),
    `Masalah: ${data.problem || "-"}`,
    `Yang sudah saya lakukan: ${data.tried || "-"}`,
    `Tujuan saya: ${data.goal || "-"}`,
    "",
    "Mohon bantu cek apakah perangkat saya bisa ditangani.",
  ].join("\n");
}

export function buildContactFormMessage(data: {
  name: string;
  brand: string;
  model: string;
  problem: string;
  tried: string;
}): string {
  return [
    "Halo TechFix Software,",
    "",
    "Saya ingin konsultasi teknis Android.",
    "",
    `Nama: ${data.name || "-"}`,
    `Perangkat: ${data.brand || "-"} ${data.model || ""}`.trim(),
    `Masalah: ${data.problem || "-"}`,
    `Yang sudah dilakukan: ${data.tried || "-"}`,
    "",
    "Mohon bantu cek kondisi perangkat saya.",
  ].join("\n");
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