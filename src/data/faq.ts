import type { FAQItem } from "@/types";

export const faqCategories = [
  { id: "umum", name: "Umum" },
  { id: "proses", name: "Proses & Remote" },
  { id: "keselamatan", name: "Keselamatan & Data" },
] as const;

export const faqItems: FAQItem[] = [
  {
    id: "pilih-layanan",
    category: "umum",
    question: "Bagaimana cara memilih layanan yang tepat untuk perangkat saya?",
    answer:
      "Mulailah dari gejala yang Anda alami. Jika perangkat stuck di logo atau restart berulang, kategorinya adalah Fix Bootloop. Jika ingin akses sistem penuh, lihat Root Android. Bila ragu, gunakan pencarian atau langsung hubungi CS — kami akan membantu mengarahkan Anda ke layanan yang sesuai dengan kondisi perangkat.",
  },
  {
    id: "semua-device",
    category: "umum",
    question: "Apakah semua perangkat Android dapat dilayani?",
    answer:
      "Tidak semua. Dukungan bergantung pada model, varian, versi OS, dan kondisi perangkat. Karena itu setiap proses diawali konsultasi dan pengecekan kompatibilitas oleh CS sebelum eksekusi. Kami tidak memberikan jaminan universal.",
  },
  {
    id: "proses-remote",
    category: "proses",
    question: "Apakah proses dilakukan secara remote?",
    answer:
      "Sebagian layanan dapat dilakukan secara remote dengan pendampingan, terutama yang dapat ditangani melalui sambungan dari PC/laptop. Namun tidak semua kondisi bisa ditangani remote. Ketersediaan remote akan dikonfirmasi saat konsultasi, berdasarkan jenis layanan dan kondisi perangkat Anda.",
  },
  {
    id: "persiapan-remote",
    category: "proses",
    question: "Apa yang harus disiapkan sebelum remote support?",
    answer:
      "PC atau laptop dengan koneksi internet stabil, kabel USB yang sesuai bila dibutuhkan, baterai perangkat terisi cukup, dan aplikasi AnyDesk resmi bila diminta CS. Panduan lengkap ada di halaman Remote Guide. Selalu ikuti instruksi CS dan jangan berikan akses ke pihak yang tidak dikenal.",
  },
  {
    id: "data-terpengaruh",
    category: "keselamatan",
    question: "Apakah data saya bisa terpengaruh?",
    answer:
      "Bisa. Beberapa proses, seperti flashing firmware, instalasi ROM, atau unlock bootloader pada prosedur tertentu, berpotensi menghapus data. Kami selalu menyarankan backup data penting bila memungkinkan dan menjelaskan risiko spesifik sebelum proses berjalan. Tidak ada layanan yang menjamin data aman tanpa pengecekan kondisi perangkat.",
  },
  {
    id: "hubungi-cs",
    category: "umum",
    question: "Bagaimana cara menghubungi CS?",
    answer:
      "Anda dapat menghubungi kami melalui WhatsApp atau Telegram. Tombol konsultasi tersedia di setiap halaman layanan dan menyertakan konteks layanan yang sedang Anda buka. Sertakan merek, model, versi Android, dan gejala yang Anda alami agar CS dapat merespons lebih cepat.",
  },
  {
    id: "kapan-anydesk",
    category: "proses",
    question: "Kapan AnyDesk diperlukan?",
    answer:
      "AnyDesk biasanya diminta pada layanan yang membutuhkan pendampingan remote dari PC/laptop Anda. CS akan memberi tahu jika layanan Anda memerlukannya. Gunakan hanya aplikasi AnyDesk resmi dan berikan akses hanya setelah Anda memastikan sedang berkomunikasi dengan CS resmi kami.",
  },
  {
    id: "setelah-konsultasi",
    category: "proses",
    question: "Apa yang terjadi setelah konsultasi?",
    answer:
      "Setelah Anda menjelaskan kondisi perangkat, CS akan melakukan penilaian awal, membahas kelayakan dan prosesnya, lalu bersama Anda menyepakati langkah berikutnya. Bila membutuhkan remote support, Anda akan diarahkan ke Remote Guide untuk persiapan, lalu proses dilanjutkan di luar website.",
  },
  {
    id: "garansi",
    category: "umum",
    question: "Apakah layanan ini memengaruhi garansi?",
    answer:
      "Pada sebagian besar perangkat, proses seperti root, unlock bootloader, atau pemasangan custom ROM dapat memengaruhi garansi pabrik. Besar pengaruhnya tergantung kebijakan merek. Hal ini dibahas secara terbuka sebelum Anda memutuskan melanjutkan.",
  },
  {
    id: "risiko",
    category: "keselamatan",
    question: "Apa risiko utama yang perlu saya ketahui?",
    answer:
      "Risiko utama adalah kehilangan data, perangkat tidak berfungsi seperti sebelumnya, dan dampak pada garansi untuk proses modifikasi tertentu. Kami tidak pernah menjanjikan keberhasilan 100% atau risiko nol. Seluruh risiko dijelaskan sebelum eksekusi, dan Anda bebas memutuskan tanpa tekanan.",
  },
  {
    id: "data-rahasiakan",
    category: "keselamatan",
    question: "Apakah saya perlu memberikan informasi sensitif?",
    answer:
      "Tidak. Kami tidak pernah meminta password, data perbankan, atau informasi sensitif lain melalui website. Gunakan saluran resmi yang digunakan saat konsultasi, dan jangan bagikan kode verifikasi atau akses remote ke siapapun yang tidak Anda kenal.",
  },
];

export function getFaqByCategory(categoryId: string): FAQItem[] {
  return faqItems.filter((f) => f.category === categoryId);
}