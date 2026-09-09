import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "root-android",
    slug: "root-android",
    name: "Root Android",
    categoryId: "root-android",
    shortDescription:
      "Bantuan root perangkat Android dengan pendekatan yang aman: pengecekan kompatibilitas, persiapan, dan dukungan Magisk.",
    description:
      "Layanan Root Android membantu Anda mendapatkan akses sistem penuh pada perangkat Android melalui proses yang terkontrol. Sebelum eksekusi, tim kami memeriksa kondisi perangkat, versi Android, status bootloader, dan kebutuhan Anda. Root dapat membuka banyak kemungkinan seperti aplikasi yang butuh akses khusus, adblocker tingkat sistem, backup penuh, dan modifikasi sistem. Namun root juga membawa risiko: garansi bisa terpengaruh, pembaruan OTA bisa terganggu, dan beberapa aplikasi (misalnya aplikasi perbankan) dapat menolak perangkat yang di-root. Seluruh risiko dan kompatibilitas dibahas bersama CS sebelum ada keputusan.",
    problemKeywords: [
      "root",
      "root android",
      "jasa root",
      "magisk",
      "akses root",
      "superuser",
      "aplikasi butuh root",
    ],
    useCases: [
      "Ingin menjalankan aplikasi yang membutuhkan akses root.",
      "Membutuhkan blokir iklan di tingkat sistem.",
      "Ingin melakukan backup penuh atau migrasi data aplikasi.",
      "Ingin memodifikasi sistem dengan cara yang didukung.",
      "Membutuhkan verifikasi apakah perangkat Anda memang bisa di-root dengan aman.",
    ],
    preparation: [
      "PC atau laptop dengan koneksi internet stabil.",
      "Kabel USB berkualitas yang cocok dengan perangkat Anda.",
      "Baterai perangkat terisi dengan cukup.",
      "Backup data penting bila memungkinkan sebelum proses berjalan.",
    ],
    processSteps: [
      "Hubungi CS melalui WhatsApp atau Telegram.",
      "Jelaskan merek, model, versi Android/OS, dan tujuan Anda.",
      "CS melakukan pengecekan awal kompatibilitas perangkat.",
      "Feasibility, proses, dan risiko dibahas bersama.",
      "Anda dan CS menyepakati metode eksekusi.",
      "Anda menyiapkan perangkat dan bahan pendukung sesuai petunjuk.",
      "Remote guidance diikuti bila layanan berjalan secara remote.",
    ],
    importantNotices: [
      "Root membawa risiko dan hasilnya tidak bisa dijamin sebelum perangkat dinilai.",
      "Garansi pabrik berpotensi terpengaruh pada sebagian perangkat.",
      "Data dapat berisiko bergantung pada kondisi dan proses yang dipilih.",
      "Kompatibilitas dan dukungan aplikasi tertentu tidak dapat dijamin.",
      "Suitabilitas layanan dikonfirmasi melalui konsultasi.",
    ],
    remoteAvailable: true,
    featured: true,
    badges: ["Remote support"],
    seo: {
      title: "Jasa Root Android Profesional — Konsultasi Sebelum Eksekusi",
      description:
        "Butuh bantuan root Android? Kami mendampingi dari pengecekan kompatibilitas hingga eksekusi. Baca persyaratan, proses, dan risiko, lalu konsultasi dengan CS.",
      keywords: ["root android", "jasa root", "magisk", "akses root"],
    },
  },
  {
    id: "unlock-bootloader",
    slug: "unlock-bootloader",
    name: "Unlock Bootloader",
    categoryId: "unlock-bootloader",
    shortDescription:
      "Asistensi unlock bootloader pada perangkat yang mendukung, dengan penjelasan risiko dan konsekuensinya.",
    description:
      "Unlock bootloader adalah langkah yang sering menjadi pintu masuk menuju proses teknis Android tingkat lanjut seperti root, custom recovery, atau custom ROM. Tidak semua perangkat dapat di-unlock secara resmi. Kebijakan unlock berbeda-beda antar merek, dan pada sebagian perangkat prosesnya dapat menghapus data atau berdampak pada garansi. Tim kami membantu Anda memahami apakah perangkat Anda mendukung proses ini, apa konsekuensinya, dan bagaimana menjalankannya dengan benar bila Anda memutuskan untuk melanjutkan.",
    problemKeywords: [
      "unlock bootloader",
      "buka bootloader",
      "bootloader terkunci",
      "frdp",
      "oem unlock",
    ],
    useCases: [
      "Ingin mempersiapkan perangkat untuk root atau custom ROM.",
      "Ingin memasang custom recovery.",
      "Membutuhkan penjelasan apakah perangkat bisa di-unlock secara resmi.",
      "Mengalami kendala saat mencoba proses unlock sendiri.",
    ],
    preparation: [
      "Kabel USB berkualitas dan PC/laptop.",
      "Koneksi internet stabil.",
      "Baterai terisi cukup.",
      "Memahami bahwa sebagian proses unlock dapat menghapus data — backup bila memungkinkan.",
    ],
    processSteps: [
      "Hubungi CS dan jelaskan merek serta model perangkat.",
      "CS mengecek kebijakan unlock untuk perangkat Anda.",
      "Proses, konsekuensi, dan langkah dibahas secara terbuka.",
      "Kesepakatan metode dan waktu eksekusi dicapai.",
      "Perangkat disiapkan sesuai panduan CS.",
      "Proses dijalankan dan dipantau (remote bila memungkinkan).",
    ],
    importantNotices: [
      "Unlock bootloader dapat menghapus seluruh data perangkat pada prosedur tertentu.",
      "Garansi berpotensi terpengaruh tergantung kebijakan merek dan perangkat.",
      "Tidak semua perangkat mendukung unlock resmi.",
      "Tidak ada jaminan sebelum kompatibilitas dievaluasi.",
    ],
    remoteAvailable: true,
    featured: false,
    badges: ["Remote support", "Konsultasi diwajibkan"],
    seo: {
      title: "Bantuan Unlock Bootloader Android — Cek Kompatibilitas Dulu",
      description:
        "Cari tahu apakah perangkat Anda mendukung unlock bootloader, apa konsekuensinya, dan bagaimana prosesnya. Konsultasi dengan CS sebelum eksekusi.",
      keywords: ["unlock bootloader", "buka bootloader", "asistensi bootloader"],
    },
  },
  {
    id: "fix-bootloop",
    slug: "fix-bootloop",
    name: "Fix Bootloop",
    categoryId: "fix-bootloop",
    shortDescription:
      "Perangkat stuck di logo, restart berulang, atau gagal boot? Kami bantu menilai penyebab dan mencari solusi.",
    description:
      "Bootloop adalah kondisi ketika perangkat Android gagal menyelesaikan proses booting, entah berhenti di logo, restart berulang, atau kembali ke recovery. Penyebabnya beragam: update sistem yang gagal, modifikasi software yang tidak kompatibel, aplikasi bermasalah, atau kerusakan partisi. Layanan Fix Bootloop membantu Anda mengidentifikasi kemungkinan penyebab pada perangkat tertentu dan menentukan langkah pemulihan yang paling masuk akal. Penting untuk tidak mencoba langkah acak tanpa diagnosis, karena proses yang salah dapat memperburuk kondisi.",
    problemKeywords: [
      "bootloop",
      "hp stuck logo",
      "restart terus",
      "hp restart sendiri",
      "gagal boot",
      "bootloop android",
      "stuck di logo samsung",
      "stuck di logo xiaomi",
    ],
    useCases: [
      "HP berhenti di logo merek dan tidak masuk ke sistem.",
      "Perangkat restart berulang sebelum selesai boot.",
      "Muncul error setelah update sistem.",
      "Masalah boot dimulai setelah mencoba modifikasi atau root.",
      "Butuh penjelasan apakah data masih bisa diselamatkan.",
    ],
    preparation: [
      "Kabel USB dan PC/laptop dengan internet stabil.",
      "Baterai perangkat terisi (gunakan charger bila perlu).",
      "Informasi lengkap: kapan masalah mulai terjadi dan apa yang dilakukan sebelumnya.",
      "Backup yang ada bila memungkinkan; pahami bahwa pemulihan tidak menjamin data.",
    ],
    processSteps: [
      "Hubungi CS dan jelaskan gejala serta kapan masalah dimulai.",
      "CS melakukan penilaian awal atas kemungkinan penyebab.",
      "Diskusi rencana pemulihan dan risiko terhadap data.",
      "Persetujuan atas metode dan langkah berikutnya.",
      "Persiapan perangkat sesuai panduan CS.",
      "Proses pemulihan dijalankan dan dipantau.",
    ],
    importantNotices: [
      "Hasil pemulihan tidak dapat dijamin sebelum perangkat diperiksa.",
      "Data berpotensi hilang bergantung kondisi perangkat dan proses.",
      "Percobaan langkah tanpa diagnosis berisiko memperburuk kondisi.",
      "Kompatibilitas metode bergantung pada model dan versi OS.",
    ],
    remoteAvailable: true,
    featured: true,
    badges: ["Remote support", "Konsultasi diwajibkan"],
    seo: {
      title: "Fix Bootloop Android — HP Stuck Logo & Sering Restart",
      description:
        "HP Android stuck di logo atau restart terus-menerus? Baca cara kami menilai dan memulihkan kondisi boot, serta konsultasikan gejala perangkat Anda.",
      keywords: ["bootloop", "hp stuck logo", "restart terus", "fix bootloop"],
    },
  },
  {
    id: "unbrick",
    slug: "unbrick",
    name: "Unbrick / Pemulihan Soft Brick",
    categoryId: "unbrick",
    shortDescription:
      "Asesmen dan upaya pemulihan untuk perangkat yang tidak bisa digunakan karena kegagalan software.",
    description:
      "Soft brick adalah kondisi ketika perangkat tidak dapat masuk ke sistem yang berfungsi normal karena masalah software, biasanya setelah proses modifikasi yang gagal, flashing yang salah, atau file firmware yang tidak cocok. Layanan Unbrick melakukan asesmen kondisi, menjelaskan kemungkinan pemulihan secara jujur, dan menjalankan proses pemulihan bila kondisinya masuk akal untuk ditangani. Penting untuk memahami bahwa tidak semua kondisi dapat dipulihkan melalui jalur software, dan keputusan untuk melanjutkan selalu dibuat berdasarkan kondisi nyata perangkat setelah konsultasi.",
    problemKeywords: [
      "unbrick",
      "bricked",
      "hp brick",
      "hp mati total",
      "soft brick",
      "firmware salah flashing",
      "gagal flashing",
    ],
    useCases: [
      "Perangkat tidak bisa boot setelah flashing firmware yang salah.",
      "Modifikasi software gagal dan perangkat tidak berfungsi.",
      "Butuh penilaian apakah kondisi dapat dipulihkan secara software.",
      "Ingin memahami opsi pemulihan sebelum memutuskan tindakan.",
    ],
    preparation: [
      "Kabel USB dan PC/laptop dengan internet stabil.",
      "Baterai terisi; beberapa kondisi membutuhkan perangkat tetap terhubung.",
      "Info lengkap riwayat: apa yang dilakukan sebelum brick.",
      "Model dan varian yang tepat bila diketahui.",
    ],
    processSteps: [
      "Hubungi CS dan jelaskan kondisi serta riwayat perangkat.",
      "Asesmen awal untuk memperkirakan kemungkinan pemulihan.",
      "Diskusi jujur tentang peluang, risiko, dan biaya bila relevan.",
      "Persetujuan untuk melanjutkan atau opsi lain.",
      "Proses pemulihan dijalankan dengan pemantauan.",
    ],
    importantNotices: [
      "Tidak semua kondisi brick dapat dipulihkan.",
      "Hasil tidak dapat dijamin sebelum pemeriksaan.",
      "Data pada perangkat berisiko hilang dalam proses pemulihan.",
      "Percobaan tindakan di luar prosedur dapat memperburuk kondisi.",
    ],
    remoteAvailable: false,
    featured: false,
    badges: ["Konsultasi diwajibkan"],
    seo: {
      title: "Jasa Unbrick Android — Asesmen Soft Brick yang Jujur",
      description:
        "Perangkat tidak berfungsi setelah flashing atau modifikasi gagal? Kami menilai kondisi secara jujur sebelum menentukan apakah pemulihan software mungkin dilakukan.",
      keywords: ["unbrick", "soft brick", "hp brick", "pemulihan brick"],
    },
  },
  {
    id: "flash-firmware",
    slug: "flash-firmware",
    name: "Flash Firmware",
    categoryId: "flash-firmware",
    shortDescription:
      "Instalasi firmware stock, restore firmware, dan asistensi upgrade atau downgrade versi yang didukung.",
    description:
      "Layanan Flash Firmware membantu Anda menginstal ulang atau mengembalikan firmware resmi (stock) pada perangkat Android. Ini berguna ketika sistem bermasalah, setelah update gagal, atau saat ingin kembali ke versi firmware tertentu. Tim kami memastikan file dan proses yang digunakan sesuai dengan varian perangkat Anda, karena menggunakan firmware yang salah dapat menyebabkan masalah baru. Selalu ada risiko data dan kompatibilitas, sehingga proses dibahas terlebih dahulu dengan CS.",
    problemKeywords: [
      "flash firmware",
      "install firmware",
      "firmware stock",
      "restore firmware",
      "upgrade android",
      "downgrade android",
      "firmware salah",
      "firmware original",
    ],
    useCases: [
      "Ingin mengembalikan firmware stock setelah masalah sistem.",
      "Update sistem gagal dan ingin memulihkan versi sebelumnya.",
      "Ingin melakukan upgrade atau downgrade versi yang didukung.",
      "Membutuhkan firmware resmi sesuai varian perangkat.",
    ],
    preparation: [
      "Kabel USB dan PC/laptop dengan internet stabil.",
      "Baterai cukup; proses membutuhkan daya yang stabil.",
      "Backup data penting bila memungkinkan.",
      "Mengetahui model dan varian perangkat.",
    ],
    processSteps: [
      "Hubungi CS dengan informasi model dan varian perangkat.",
      "Konfirmasi kebutuhan: restore, upgrade, atau downgrade.",
      "Diskusi kompatibilitas firmware dan risiko data.",
      "Persetujuan metode dan persiapan alat.",
      "Proses flashing dijalankan dan dipantau.",
    ],
    importantNotices: [
      "Penggunaan firmware yang tidak cocok berisiko membuat masalah baru.",
      "Data dapat terhapus dalam proses flashing.",
      "Hasil tidak dijamin sebelum kompatibilitas dievaluasi.",
      "Upgrade/downgrade hanya dilakukan untuk versi yang didukung.",
    ],
    remoteAvailable: true,
    featured: true,
    badges: ["Remote support"],
    seo: {
      title: "Jasa Flash Firmware Android — Stock & Restore",
      description:
        "Instalasi firmware stock, restore setelah update gagal, atau bantuan upgrade/downgrade versi yang didukung. Konsultasikan model perangkat Anda.",
      keywords: ["flash firmware", "firmware stock", "restore firmware", "reinstall android"],
    },
  },
  {
    id: "custom-rom",
    slug: "custom-rom",
    name: "Custom ROM",
    categoryId: "custom-rom",
    shortDescription:
      "Asistensi instalasi, migrasi, dan troubleshooting custom ROM pada perangkat yang kompatibel.",
    description:
      "Custom ROM memberikan pengalaman Android yang berbeda dari firmware bawaan pabrik: versi OS yang lebih baru, tampilan alternatif, atau pengaturan yang lebih ringan. Layanan Custom ROM membantu memilih ROM yang sesuai, memeriksa kompatibilitas, melakukan instalasi atau migrasi dengan cara yang benar, serta menangani troubleshooting pasca-installasi yang didukung. Proses ini memiliki risiko terhadap garansi dan data, dan tidak semua perangkat memiliki dukungan custom ROM yang stabil.",
    problemKeywords: [
      "custom rom",
      "install custom rom",
      "rom custom",
      "lineageos",
      "crDroid",
      "migrasi rom",
      "rom alternatif",
    ],
    useCases: [
      "Ingin memakai versi Android lebih baru di perangkat yang tidak di-update pabrik.",
      "Mencari tampilan atau performa sistem yang lebih ringan.",
      "Ingin migrasi dari satu custom ROM ke ROM lain.",
      "Mengalami masalah setelah instalasi custom ROM dan butuh bantuan.",
    ],
    preparation: [
      "Kabel USB dan PC/laptop dengan internet stabil.",
      "Baterai terisi penuh cukup untuk proses.",
      "Backup data penting; instalasi ROM umumnya menghapus data.",
      "Mengetahui model persis perangkat Anda.",
    ],
    processSteps: [
      "Hubungi CS dan sebutkan model perangkat serta kebutuhan Anda.",
      "Diskusi pilihan custom ROM yang sesuai dan kompatibel.",
      "Penjelasan risiko terhadap garansi dan data.",
      "Persiapan dan persetujuan metode instalasi/migrasi.",
      "Proses dijalankan dengan pemantauan.",
      "Troubleshooting pasca-installasi yang didukung.",
    ],
    importantNotices: [
      "Garansi pabrik berpotensi terpengaruh.",
      "Data umumnya terhapus saat instalasi/migrasi ROM.",
      "Tidak semua perangkat memiliki dukungan custom ROM yang stabil.",
      "Perilaku aplikasi tertentu dapat berubah pada custom ROM.",
    ],
    remoteAvailable: true,
    featured: false,
    badges: ["Remote support", "Konsultasi diwajibkan"],
    seo: {
      title: "Bantuan Instalasi Custom ROM Android",
      description:
        "Cari tahu custom ROM yang cocok, proses instalasi/migrasi, dan troubleshooting pasca-pasang. Konsultasikan model perangkat Anda dengan CS.",
      keywords: ["custom rom", "install custom rom", "jasa custom rom"],
    },
  },
  {
    id: "recovery",
    slug: "recovery",
    name: "Recovery / Custom Recovery",
    categoryId: "recovery",
    shortDescription:
      "Setup recovery yang didukung, penjelasan mode recovery, dan troubleshooting berkaitan recovery.",
    description:
      "Mode recovery adalah lingkungan khusus pada perangkat Android yang digunakan untuk proses pemeliharaan sistem seperti wipe data, flashing, dan backup. Layanan Recovery membantu menyiapkan atau memperbaiki recovery yang didukung, termasuk guidance saat terjebak di mode recovery dan penjelasan cara penggunaannya secara aman. Custom recovery seperti TWRP membuka kemampuan lebih, tetapi hanya dipasang bila perangkat Anda mendukung dan kebutuhan Anda memang sesuai.",
    problemKeywords: [
      "recovery",
      "twrp",
      "custom recovery",
      "masuk recovery",
      "keluar dari recovery",
      "recovery mode",
      "stuck di recovery",
    ],
    useCases: [
      "Terjebak di mode recovery dan butuh bantuan keluar.",
      "Ingin memasang custom recovery yang didukung perangkat.",
      "Membutuhkan penjelasan cara menggunakan recovery dengan aman.",
      "Recovery bermasalah setelah proses lain.",
    ],
    preparation: [
      "Kabel USB dan PC/laptop untuk proses tertentu.",
      "Baterai terisi cukup.",
      "Informasi model dan kondisi saat ini.",
    ],
    processSteps: [
      "Hubungi CS dan jelaskan kondisi perangkat.",
      "Identifikasi keperluan: pertolongan, setup, atau troubleshooting.",
      "Penjelasan langkah dan risiko.",
      "Persetujuan dan pelaksanaan (remote bila memungkinkan).",
    ],
    importantNotices: [
      "Penggunaan recovery yang keliru dapat menghapus data.",
      "Custom recovery hanya dipasang bila perangkat mendukung.",
      "Hasil tidak dijamin sebelum evaluasi kondisi.",
    ],
    remoteAvailable: true,
    featured: false,
    badges: ["Remote support"],
    seo: {
      title: "Bantuan Recovery Android — Setup, Keluar, Troubleshoot",
      description:
        "Butuh bantuan mode recovery Android: terjebak di recovery, ingin setup custom recovery, atau troubleshooting? Konsultasikan kondisinya.",
      keywords: ["recovery", "twrp", "custom recovery", "mode recovery"],
    },
  },
  {
    id: "software-repair",
    slug: "software-repair",
    name: "Software Repair",
    categoryId: "software-repair",
    shortDescription:
      "Layanan untuk error software, update gagal, ketidakstabilan sistem, dan troubleshooting software lain.",
    description:
      "Tidak semua masalah perangkat berasal dari hardware. Banyak gangguan seperti force close berulang, update yang gagal, penyimpanan aneh, atau sistem yang lambat bisa berasal dari kondisi software. Layanan Software Repair membantu menilai dan menangani masalah tingkat software yang didukung. Setiap kondisi berbeda, sehingga diagnosis awal oleh manusia tetap penting sebelum menentukan langkah apa pun.",
    problemKeywords: [
      "software repair",
      "error android",
      "update gagal",
      "force close",
      "sistem lambat",
      "hp error",
      "perbaikan software",
      "android bermasalah",
    ],
    useCases: [
      "Aplikasi atau sistem sering force close.",
      "Update sistem gagal dan berhenti di tengah proses.",
      "Perangkat terasa lambat atau tidak stabil.",
      "Muncul error yang tidak bisa dijelaskan.",
      "Tidak tahu layanan kategori mana yang sesuai dengan masalah Anda.",
    ],
    preparation: [
      "Kabel USB dan PC/laptop bila dibutuhkan.",
      "Baterai terisi cukup.",
      "Backup data penting bila memungkinkan.",
      "Informasi lengkap tentang gejala dan apa yang sudah dicoba.",
    ],
    processSteps: [
      "Hubungi CS dan ceritakan gejalanya.",
      "CS membantu mengarahkan ke kategori atau langkah yang sesuai.",
      "Penilaian dan diskusi opsi solusi.",
      "Persetujuan dan pelaksanaan langkah.",
    ],
    importantNotices: [
      "Suitabilitas layanan bergantung pada kondisi nyata perangkat.",
      "Beberapa perbaikan berisiko terhadap data; ini dibahas sebelum eksekusi.",
      "Tidak ada jaminan hasil sebelum pemeriksaan.",
      "Kami hanya menangani cakupan software yang didukung.",
    ],
    remoteAvailable: true,
    featured: false,
    badges: ["Remote support", "Konsultasi"],
    seo: {
      title: "Perbaikan Software Android — Error, Update Gagal, Cepat Lambat",
      description:
        "Masalah software Android yang tidak kunjung selesai? Ceritakan gejalanya, dan tim kami membantu mengarahkan serta menangani masalah yang didukung.",
      keywords: ["perbaikan software", "error android", "update gagal", "force close"],
    },
  },
  {
    id: "magisk-root",
    slug: "magisk-root",
    name: "Root dengan Magisk",
    categoryId: "root-android",
    shortDescription:
      "Asistensi root berbasis Magisk untuk perangkat yang kompatibel, termasuk setup dan pengecekan modul yang umum.",
    description:
      "Magisk adalah metode root modern yang populer karena kemampuannya menjaga banyak aplikasi tetap berjalan seperti biasa. Layanan ini membantu Anda melakukan root dengan Magisk pada perangkat yang kompatibel, termasuk penjelasan tentang modul, konfigurasi dasar, dan cara meminimalkan dampak terhadap aplikasi. Kompatibilitas perangkat dan kebutuhan Anda selalu diverifikasi sebelum proses.",
    problemKeywords: ["magisk", "root magisk", "magisk root", "safetynet", "play integrity"],
    useCases: [
      "Ingin root dengan metode yang relatif minim gangguan.",
      "Ingin memahami cara kerja Magisk dan modul.",
      "Membutuhkan setup Magisk yang benar pada perangkat tertentu.",
    ],
    preparation: [
      "Kabel USB dan PC/laptop.",
      "Baterai terisi cukup.",
      "Backup penting bila memungkinkan.",
    ],
    processSteps: [
      "Konsultasi kebutuhan dan kondisi perangkat.",
      "Verifikasi kompatibilitas perangkat.",
      "Diskusi risiko dan konsekuensi.",
      "Persetujuan metode dan eksekusi.",
      "Penjelasan penggunaan dasar Magisk.",
    ],
    importantNotices: [
      "Root dengan metode apa pun tetap membawa risiko.",
      "Play Integrity dapat berubah dan tidak dijamin.",
      "Garansi berpotensi terpengaruh.",
      "Hasil tidak dijamin sebelum evaluasi perangkat.",
    ],
    remoteAvailable: true,
    featured: false,
    badges: ["Remote support", "Konsultasi diwajibkan"],
    seo: {
      title: "Root Android dengan Magisk — Setup & Konsultasi",
      description:
        "Asistensi root berbasis Magisk untuk perangkat yang kompatibel. Baca risiko, proses, dan konsultasikan kebutuhan Anda sebelum eksekusi.",
      keywords: ["magisk root", "root magisk", "magisk"],
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(categoryId: string): Service[] {
  return services.filter((s) => s.categoryId === categoryId);
}

export function getFeaturedServices(): Service[] {
  return services.filter((s) => s.featured);
}