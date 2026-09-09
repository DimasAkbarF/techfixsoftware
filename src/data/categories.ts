import type { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "root-android",
    slug: "root-android",
    name: "Root Android",
    shortName: "Root",
    description:
      "Bantuan root perangkat Android, termasuk dukungan Magisk, penanganan device-specific root, dan konsultasi terkait kebutuhan akses sistem penuh.",
    icon: "shield",
    seo: {
      title: "Jasa Root Android Profesional — Konsultasi Dulu",
      description:
        "Service root Android dengan pendekatan aman: konsultasi terlebih dahulu, pengecekan kompatibilitas device, dan dukungan Magisk. Klik untuk detail.",
    },
  },
  {
    id: "unlock-bootloader",
    slug: "unlock-bootloader",
    name: "Unlock Bootloader",
    shortName: "Unlock BL",
    description:
      "Asistensi unlock bootloader untuk perangkat yang mendukung, termasuk persiapan, risiko, dan langkah yang perlu Anda ketahui sebelum prosedur.",
    icon: "unlock",
    seo: {
      title: "Bantuan Unlock Bootloader Android — Konsultasi",
      description:
        "Perlu bantuan unlock bootloader? Dapatkan penjelasan kompatibilitas, risiko, dan proses sebelum eksekusi. Konsultasi via WhatsApp atau Telegram.",
    },
  },
  {
    id: "fix-bootloop",
    slug: "fix-bootloop",
    name: "Fix Bootloop",
    shortName: "Bootloop",
    description:
      "Solusi untuk perangkat yang stuck di logo, restart-loop berulang, gagal boot sistem, atau gagal boot berulang setelah perubahan software.",
    icon: "refresh",
    seo: {
      title: "Fix Bootloop Android — HP Stuck Logo, Sering Restart",
      description:
        "HP stuck di logo atau restart terus-menerus? Cek layanan fix bootloop, baca persyaratan dan risikonya, lalu konsultasi dengan CS kami.",
    },
  },
  {
    id: "unbrick",
    slug: "unbrick",
    name: "Unbrick",
    shortName: "Unbrick",
    description:
      "Asesmen dan pemulihan software untuk perangkat soft brick, termasuk pemulihan dari modifikasi software yang gagal.",
    icon: "lifebuoy",
    seo: {
      title: "Jasa Unbrick Android — Asesmen Soft Brick",
      description:
        "Perangkat soft brick setelah modifikasi gagal? Layanan unbrick menilai kondisi, menjelaskan kemungkinan pemulihan, dan langkah selanjutnya.",
    },
  },
  {
    id: "flash-firmware",
    slug: "flash-firmware",
    name: "Flash Firmware",
    shortName: "Flash Firmware",
    description:
      "Bantuan instalasi firmware stock, pemulihan firmware, serta asistensi upgrade atau downgrade versi yang didukung perangkat.",
    icon: "download",
    seo: {
      title: "Flash Firmware Android — Instalasi & Pemulihan",
      description:
        "Instalasi firmware stock, restore firmware, atau perlu bantuan upgrade/downgrade? Baca detail layanan flash firmware dan konsultasikan device Anda.",
    },
  },
  {
    id: "custom-rom",
    slug: "custom-rom",
    name: "Custom ROM",
    shortName: "Custom ROM",
    description:
      "Asistensi instalasi dan migrasi custom ROM yang didukung, termasuk troubleshooting pasca-installasi pada perangkat yang kompatibel.",
    icon: "android",
    seo: {
      title: "Bantuan Instalasi Custom ROM Android",
      description:
        "Instalasi custom ROM dengan dukungan pengecekan kompatibilitas, migrasi, dan troubleshooting pasca-install. Konsultasi sebelum eksekusi.",
    },
  },
  {
    id: "recovery",
    slug: "recovery",
    name: "Recovery",
    shortName: "Recovery",
    description:
      "Setup dan troubleshooting recovery yang didukung, termasuk penjelasan mode recovery untuk kebutuhan teknis perangkat.",
    icon: "wrench",
    seo: {
      title: "Bantuan Recovery Android — Setup & Troubleshooting",
      description:
        "Perlu bantuan mode recovery Android? Baca detail layanan, persyaratan, dan proses sebelum berkonsultasi dengan tim kami.",
    },
  },
  {
    id: "software-repair",
    slug: "software-repair",
    name: "Software Repair",
    shortName: "Software",
    description:
      "Layanan umum untuk error software, update gagal, ketidakstabilan sistem, dan troubleshooting software lain yang didukung.",
    icon: "cpu",
    seo: {
      title: "Perbaikan Software Android — Error & Update Gagal",
      description:
        "Error software, update gagal, atau sistem tidak stabil? Jelaskan kondisi perangkat Anda dan konsultasikan dengan CS kami.",
    },
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}