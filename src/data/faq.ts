import type { FAQItem } from "@/types";

export const faqCategories = [
  { id: "umum", name: "Umum & Konsultasi" },
  { id: "proses", name: "Proses & Remote Support" },
  { id: "keselamatan", name: "Keamanan, Data & Risiko" },
] as const;

export const faqItems: FAQItem[] = [
  {
    id: "konsultasi-gratis",
    category: "umum",
    question: "Apakah konsultasi awal benar-benar gratis dan tidak mengikat?",
    answer:
      "Ya, 100% gratis. Anda bebas menanyakan kondisi perangkat, berkonsultasi mengenai kelayakan penanganan, dan mengetahui estimasi tanpa kewajiban apapun untuk menggunakan jasa. Kami mengutamakan pemahaman masalah Anda terlebih dahulu sebelum Anda mengambil keputusan.",
  },
  {
    id: "data-terpengaruh",
    category: "keselamatan",
    question: "Apakah data saya aman dan tidak akan terhapus?",
    answer:
      "Tergantung pada jenis penanganan dan kondisi awal perangkat. Tindakan flashing firmware clean atau unlock bootloader standar Android otomatis menghapus memori internal. Namun jika perangkat memungkinkan untuk diselamatkan tanpa format, kami akan mengupayakan opsi tersebut dan selalu menjelaskan konsekuensi data secara jujur sebelum tindakan dimulai.",
  },
  {
    id: "semua-device",
    category: "umum",
    question: "Apakah semua merek dan tipe HP Android bisa ditangani?",
    answer:
      "Tidak semua. Setiap pabrikan memiliki kebijakan keamanan, proteksi chipset (seperti EDL auth Xiaomi baru atau Knox Samsung), dan ketersediaan firmware resmi yang berbeda. Karena itu kami selalu melakukan pengecekan kompatibilitas tipe persis perangkat sebelum memberikan konfirmasi penanganan.",
  },
  {
    id: "proses-remote",
    category: "proses",
    question: "Bagaimana cara kerja remote support dari jarak jauh?",
    answer:
      "Proses dilakukan dengan menghubungkan ponsel Anda ke PC/laptop Anda sendiri via kabel USB. Teknisi kami akan mendampingi Anda melalui sesi AnyDesk resmi yang Anda pantau langsung secara real-time di layar komputer Anda. Anda tetap memegang kendali penuh atas komputer dan perangkat Anda sepanjang sesi.",
  },
  {
    id: "persiapan-remote",
    category: "proses",
    question: "Apa saja yang harus saya siapkan sebelum memulai sesi remote?",
    answer:
      "Anda hanya perlu menyiapkan PC/laptop dengan Windows, koneksi internet stabil, kabel data USB yang terhubung baik dengan ponsel, daya baterai ponsel terisi minimal 50%, dan aplikasi AnyDesk resmi. Panduan lengkap dan aman tersedia di halaman Panduan Remote.",
  },
  {
    id: "lama-proses",
    category: "proses",
    question: "Berapa lama estimasi waktu proses pengerjaan software?",
    answer:
      "Rata-rata proses pengerjaan teknis berkisar antara 30 hingga 60 menit setelah file firmware yang cocok selesai diunduh dan alat pendukung siap. Durasi juga bergantung pada kecepatan internet komputer Anda untuk transfer data.",
  },
  {
    id: "sudah-gagal-sendiri",
    category: "umum",
    question: "Bagaimana jika sebelumnya saya sudah mencoba oprek sendiri dan gagal?",
    answer:
      "Tidak masalah. Ceritakan apa adanya apa file yang terakhir Anda flash atau langkah apa yang sudah dilakukan. Informasi jujur tentang kronologi kegagalan sangat membantu teknisi kami dalam mendiagnosis status partisi perangkat dan menentukan langkah koreksi yang tepat tanpa menebak-nebak.",
  },
  {
    id: "wajib-ubl",
    category: "proses",
    question: "Apakah HP saya wajib unlock bootloader terlebih dahulu?",
    answer:
      "Tidak selalu. Untuk pemulihan bootloop firmware stock resmi pabrik, sebagian besar perangkat tidak membutuhkan unlock bootloader. Namun untuk kebutuhan root dan custom ROM, pembukaan bootloader adalah syarat wajib sistem Android.",
  },
  {
    id: "garansi",
    category: "keselamatan",
    question: "Apakah layanan ini berpengaruh terhadap garansi resmi perangkat?",
    answer:
      "Untuk tindakan modifikasi seperti root, unlock bootloader, atau custom ROM, sebagian besar produsen menetapkan bahwa garansi resmi gugur. Namun untuk pemulihan firmware stock pada bootloop murni, status garansi biasanya tetap terjaga selama bootloader tetap terkunci.",
  },
  {
    id: "data-rahasiakan",
    category: "keselamatan",
    question: "Apakah saya perlu memberikan password, akun, atau info sensitif?",
    answer:
      "SAMA SEKALI TIDAK. TechFix Software tidak pernah meminta PIN layar, password email/Google, akun perbankan, atau kode OTP apapun. Akses remote hanya digunakan untuk menjalankan tool flashing dan command line di komputer Anda di bawah pengawasan Anda.",
  },
  {
    id: "biaya-layanan",
    category: "umum",
    question: "Berapa biaya layanannya dan kapan pembayaran dilakukan?",
    answer:
      "Biaya layanan dikonfirmasi secara transparan di awal setelah model dan tingkat kesulitan teridentifikasi saat konsultasi WhatsApp. Tidak ada biaya tersembunyi. Kesepakatan biaya disetujui bersama sebelum tindakan dimulai.",
  },
];

export function getFaqByCategory(categoryId: string): FAQItem[] {
  return faqItems.filter((f) => f.category === categoryId);
}