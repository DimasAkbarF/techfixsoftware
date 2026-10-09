import type { FAQItem, Service } from "@/types";

function numbered(items: string[]): string {
  return items.map((item, index) => `${index + 1}. ${item}`).join(" ");
}

const customServiceFaqs: Record<string, FAQItem[]> = {
  "root-android": [
    {
      id: "faq-biaya-root",
      category: "root-android",
      question: "Berapa biaya jasa root Android di TechFix Software?",
      answer:
        "Biaya jasa root Android di TechFix Software sangat terjangkau mulai dari puluhan ribu rupiah, disesuaikan dengan merek HP, versi Android, dan paket kebutuhan Anda (Root Standar vs Paket Lengkap Ojol / M-Banking / Bypass Absensi). Konsultasi awal, verifikasi status bootloader, dan pengecekan kelayakan perangkat 100% GRATIS tanpa biaya di muka.",
    },
    {
      id: "faq-data-hilang-root",
      category: "root-android",
      question: "Apakah data foto dan chat WhatsApp akan hilang saat HP di-root?",
      answer:
        "Jika bootloader HP Anda sudah dalam status unlock (UBL), proses root systemless menggunakan Magisk atau KernelSU TIDAK menghapus data pribadi Anda sama sekali. Namun jika bootloader masih terkunci dan harus di-unlock terlebih dahulu, prosedur resmi OEM akan menghapus memori internal sehingga teknisi kami akan memandu Anda melakukan backup data menyeluruh sebelum eksekusi.",
    },
    {
      id: "faq-mbanking-root",
      category: "root-android",
      question: "Apakah HP yang di-root masih bisa memakai aplikasi M-Banking (BCA, Livin, BRImo)?",
      answer:
        "Ya, bisa. Teknisi kami memandu konfigurasi Zygisk, modul Shamiko, dan Play Integrity Fix / TrickyStore agar lingkungan root disembunyikan secara sempurna dari deteksi aplikasi perbankan (BCA Mobile, Livin by Mandiri, BRImo, DANA, GoPay) sehingga transaksi harian tetap berjalan normal.",
    },
    {
      id: "faq-ojol-root",
      category: "root-android",
      question: "Apakah melayani jasa root untuk driver ojek online (Gojek, Grab, Maxim) & aplikasi kerja?",
      answer:
        "Ya, kami sangat berpengalaman menangani kebutuhan driver ojol dan kurir online. Kami menyediakan setup root stabil untuk modul mock location / fake GPS berbasis LSPosed dengan proteksi anti-deteksi fraud yang aman, tidak menyebabkan lag, dan akurat.",
    },
    {
      id: "faq-unroot-kembali",
      category: "root-android",
      question: "Apakah HP yang sudah di-root bisa di-unroot kembali ke kondisi standar pabrik?",
      answer:
        "Sangat bisa. Karena kami menggunakan metode systemless root modern (Magisk atau KernelSU) tanpa merusak partisi sistem asli, perangkat dapat dikembalikan ke kondisi unroot 100% orisinal pabrik kapan saja cukup dengan me-restore file boot image asli atau melalui menu unroot di aplikasi manajer.",
    },
    {
      id: "faq-alur-remote-root",
      category: "root-android",
      question: "Bagaimana proses pengerjaan jasa root online via remote AnyDesk?",
      answer:
        "Proses sangat praktis: Anda cukup menyiapkan laptop/PC dengan koneksi internet dan kabel data USB. Teknisi kami akan terhubung via AnyDesk untuk memandu dan mengeksekusi patching boot image serta instalasi modul di hadapan Anda secara transparan dalam waktu 30-45 menit. Anda tidak perlu repot keluar rumah atau meninggalkan HP di konter.",
    },
  ],
};

export function getServiceFaqItems(service: Service): FAQItem[] {
  const remoteAnswer = service.remoteAvailable
    ? "Ya, layanan ini dapat dilakukan secara remote dengan pendampingan dari PC atau laptop, tergantung kondisi perangkat Anda. Ketersediaan remote dikonfirmasi saat konsultasi dengan CS."
    : "Tidak otomatis. Layanan ini umumnya tidak berjalan secara remote; metode penanganan dan kemungkinan prosesnya dievaluasi oleh CS saat konsultasi berdasarkan kondisi perangkat Anda.";

  const baseItems: FAQItem[] = [
    {
      id: `remote-${service.id}`,
      category: service.categoryId,
      question: `Apakah layanan ${service.name} bisa dilakukan secara remote?`,
      answer: remoteAnswer,
    },
    {
      id: `prep-${service.id}`,
      category: service.categoryId,
      question: `Apa yang perlu saya siapkan untuk layanan ${service.name}?`,
      answer: `Siapkan hal-hal berikut sebelum memulai: ${numbered(service.preparation)}`,
    },
    {
      id: `risiko-${service.id}`,
      category: service.categoryId,
      question: `Apa risiko atau hal yang perlu saya ketahui sebelum lanjut dengan ${service.name}?`,
      answer: `Beberapa hal penting yang perlu Anda ketahui: ${numbered(service.importantNotices)}`,
    },
    {
      id: `mulai-${service.id}`,
      category: service.categoryId,
      question: `Bagaimana cara memulai layanan ${service.name}?`,
      answer:
        "Hubungi CS kami melalui WhatsApp atau Telegram, lalu jelaskan merek, model, versi OS, dan gejala yang Anda alami. CS akan membantu menilai kelayakan dan membahas prosesnya sebelum ada keputusan untuk melanjutkan.",
    },
  ];

  const custom = customServiceFaqs[service.slug] || customServiceFaqs[service.id];
  if (custom && custom.length > 0) {
    return [...custom, ...baseItems.slice(0, 2)];
  }

  return baseItems;
}