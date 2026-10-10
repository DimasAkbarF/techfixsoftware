import type { GuideArticle } from "@/types";
import { newGuides } from "./newGuides";

const baseGuides: GuideArticle[] = [
  {
    id: "guide-stuck-logo",
    slug: "apa-penyebab-hp-android-stuck-di-logo",
    title: "Apa Penyebab HP Android Stuck di Logo & Cara Menanganinya?",
    excerpt:
      "Perangkat berhenti di animasi boot atau logo merek tanpa masuk ke menu utama? Pahami penyebab paling umum, langkah aman yang bisa dicoba mandiri, dan kapan harus berkonsultasi.",
    category: "bootloop",
    categoryName: "Bootloop & Pemulihan",
    readTime: "4 menit baca",
    publishedAt: "2025-01-15",
    updatedAt: "2025-02-10",
    keyTakeaways: [
      "Stuck di logo biasanya terjadi karena partisi sistem (system/vendor) gagal memuat proses inisialisasi Android.",
      "Jangan langsung melakukan factory reset jika data penting belum sempat dicadangkan dan belum dikonsultasikan.",
      "Kombinasi tombol paksa restart (Force Reboot) adalah langkah aman pertama sebelum intervensi lebih dalam.",
      "Jika disebabkan kegagalan update OTA atau modifikasi sistem, flashing firmware yang tepat seringkali menjadi solusi.",
    ],
    symptoms: [
      "HP menyala, menampilkan logo produsen, tetapi tidak pernah masuk ke layar kunci",
      "Layar mati sejenak lalu kembali ke logo secara berulang",
      "Lampu indikator atau getar menyala normal saat ditekan tombol power",
    ],
    whatUserCanCheck: [
      "Pastikan baterai tidak dalam kondisi habis total — hubungkan pengisi daya minimal 20 menit.",
      "Lakukan force reboot: tahan tombol Power + Volume Bawah selama 10–15 detik hingga layar mati sejenak.",
      "Lepaskan kartu SIM dan kartu MicroSD eksternal untuk mengecualikan masalah mounting penyimpanan luar.",
    ],
    whenToConsult: [
      "Perangkat tetap berhenti di logo setelah force restart dan pengisian daya stabil.",
      "Masalah terjadi sesaat setelah instalasi file firmware, update sistem terhenti, atau modifikasi root.",
      "Anda ingin menyelamatkan data sebelum tindakan format atau wiping.",
    ],
    relatedServiceSlugs: ["fix-bootloop", "flash-firmware", "software-repair"],
    sections: [
      {
        heading: "Mengapa Perangkat Android Berhenti di Logo?",
        body:
          "Saat perangkat Android dinyalakan, sistem melalui beberapa tahapan booting: memuat bootloader, inisialisasi kernel Linux, hingga menjalankan runtime Android dan layanan sistem dasar. Jika salah satu berkas sistem korup, partisi penyimpanan penuh secara ekstrem, atau ada modul sistem yang tidak kompatibel, proses inisialisasi akan macet di tahap awal. Kondisi inilah yang lazim disebut stuck logo atau bootloop.",
      },
      {
        heading: "Pemicu Umum yang Sering Terjadi",
        body:
          "Berdasarkan pengalaman penanganan perangkat Android, ada beberapa pemicu utama yang kerap melatarbelakangi masalah ini:",
        bullets: [
          "Pembaruan sistem (OTA) yang terputus di tengah jalan atau kehabisan daya saat menginstal.",
          "Memori internal (ROM) yang penuh 100% sehingga sistem tidak dapat membuat file cache booting sementara.",
          "Instalasi modul Magisk, font sistem, atau tweak kernel yang tidak cocok dengan versi OS.",
          "Kerusakan software pada partisi userdata atau vendor setelah kegagalan flashing.",
        ],
      },
      {
        heading: "Langkah Awal yang Aman untuk Dilakukan Sendiri",
        body:
          "Sebelum melakukan tindakan berisiko, lakukan pengecekan sederhana: cabut kartu memori eksternal, sambungkan ke charger orisinal selama 20 menit, kemudian tahan tombol Power bersama Volume Bawah selama 15 detik. Hindari langsung memilih 'Wipe Data/Factory Reset' di mode recovery bawaan jika Anda masih berharap data dapat diselamatkan.",
      },
      {
        heading: "Kapan Anda Memerlukan Bantuan Teknisi?",
        body:
          "Jika force restart tidak membuahkan hasil dan perangkat tetap gagal melewati logo, penanganan teknis diperlukan untuk membaca status bootloader, partisi partisi yang bermasalah, atau melakukan flashing firmware stock yang tepat sasaran tanpa coba-coba.",
      },
    ],
    seo: {
      title: "Penyebab HP Android Stuck di Logo",
      description:
        "Panduan teknis penyebab HP Android berhenti di logo atau bootloop. Pelajari langkah aman mandiri dan kapan perlu konsultasi perbaikan software.",
      keywords: ["hp stuck logo", "bootloop android", "hp restart terus", "cara atasi bootloop", "fix bootloop"],
    },
  },
  {
    id: "guide-ubl-data",
    slug: "apakah-unlock-bootloader-menghapus-data",
    title: "Apakah Unlock Bootloader Menghapus Data? Ini Hal yang Perlu Diketahui",
    excerpt:
      "Pertanyaan paling sering sebelum memodifikasi Android. Ketahui bagaimana proses Unlock Bootloader (UBL) memperlakukan data internal dan standar keamanan OEM Android.",
    category: "bootloader",
    categoryName: "Bootloader & Root",
    readTime: "3 menit baca",
    publishedAt: "2025-01-20",
    updatedAt: "2025-02-12",
    keyTakeaways: [
      "Hampir pada semua merek modern (Xiaomi, Pixel, Motorola, OnePlus), membuka bootloader otomatis memicu factory reset penuh.",
      "Penghapusan data ini merupakan protokol keamanan Android dari Google untuk mencegah akses tidak sah ke data terenkripsi.",
      "Selalu lakukan backup ke komputer, harddisk eksternal, atau cloud sebelum mengeksekusi UBL.",
      "Beberapa merek memerlukan periode tunggu (waiting period) resmi seperti 7 hari.",
    ],
    whatUserCanCheck: [
      "Cek apakah data penting (foto, chat WhatsApp, dokumen) sudah tersimpan di luar memori internal.",
      "Periksa status OEM Unlocking di Developer Options (Opsi Pengembang) perangkat Anda.",
      "Ketahui merek dan tipe spesifik perangkat karena regulasi UBL bervariasi secara ketat.",
    ],
    whenToConsult: [
      "Perangkat Anda tidak memunculkan toggle OEM Unlocking atau akun tertolak saat proses pengikatan akun.",
      "Anda ragu apakah perangkat Anda menggunakan chipset yang mendukung pembukaan bootloader resmi.",
      "Anda membutuhkan verifikasi prosedur sebelum menjalankan perintah fastboot.",
    ],
    relatedServiceSlugs: ["unlock-bootloader", "root-android", "custom-rom"],
    sections: [
      {
        heading: "Aturan Dasar: Keamanan OEM Android",
        body:
          "Jawabannya singkat: Ya, pada hampir semua perangkat modern, Unlock Bootloader (UBL) akan menghapus seluruh data di memori internal perangkat. Ini bukan kesalahan sistem, melainkan mekanisme keamanan bawaan Android untuk melindungi kunci enkripsi (FBE - File Based Encryption).",
      },
      {
        heading: "Mengapa Android Menghapus Data Saat UBL?",
        body:
          "Saat bootloader masih terkunci (locked), perangkat memverifikasi bahwa kernel dan sistem belum diubah oleh pihak luar. Ketika bootloader dibuka, sistem tidak bisa lagi menjamin integritas tersebut. Untuk mencegah seseorang mencuri ponsel lalu membongkar datanya melalui custom recovery, sistem secara otomatis menghapus partisi userdata.",
      },
      {
        heading: "Daftar Persiapan Wajib Sebelum UBL",
        body:
          "Sebelum melanjutkan proses pembukaan bootloader, pastikan hal-hal berikut sudah terpenuhi:",
        bullets: [
          "Cadangkan chat WhatsApp dan media ke Google Drive atau salin folder WhatsApp ke komputer.",
          "Pindahkan foto, video, dan dokumen pribadi ke perangkat penyimpanan eksternal.",
          "Pastikan akun Google dan akun vendor (misalnya Mi Account) sudah dicatat kredensialnya agar tidak terkena FRP lock.",
          "Pastikan daya baterai minimal 60% sebelum menghubungkan perangkat ke komputer.",
        ],
      },
      {
        heading: "Kebijakan Khusus Berdasarkan Merek",
        body:
          "Setiap produsen memiliki aturan berbeda: ada yang mewajibkan kode token khusus, ada yang membutuhkan antrean akun selama 168 jam (7 hari), dan ada pula merek yang sama sekali tidak menyediakan pembukaan bootloader resmi. Diskusikan tipe perangkat Anda bersama teknisi kami untuk memastikan kemungkinannya.",
      },
    ],
    seo: {
      title: "Apakah Unlock Bootloader Menghapus Data?",
      description:
        "Penjelasan lengkap apakah proses Unlock Bootloader (UBL) menghapus foto dan file di Android, alasan keamanannya, dan cara persiapan yang benar.",
      keywords: ["unlock bootloader hapus data", "ubl xiaomi hapus data", "efek unlock bootloader", "unlock bootloader android"],
    },
  },
  {
    id: "guide-root-safety",
    slug: "apakah-root-android-aman",
    title: "Apakah Root Android Aman? Panduan Risiko, Manfaat, dan Magisk",
    excerpt:
      "Penjelasan teknis objektif mengenai keuntungan, konsekuensi keamanan, dan mitigasi risiko sebelum memutuskan melakukan root pada perangkat Android.",
    category: "root",
    categoryName: "Root & Modifikasi",
    readTime: "5 menit baca",
    publishedAt: "2025-01-28",
    updatedAt: "2025-02-15",
    keyTakeaways: [
      "Root memberi hak akses superuser (administrator tertinggi) ke seluruh partisi sistem Android.",
      "Manfaat: otomatisasi tingkat lanjut, backup komprehensif, penghapusan bloatware, kustomisasi kernel.",
      "Risiko: garansi resmi dapat gugur, dan aplikasi dengan perlindungan perbankan/keuangan mendeteksi modifikasi.",
      "Metode modern menggunakan Magisk (systemless root) yang jauh lebih aman dan bersih dibandingkan metode lama.",
    ],
    whatUserCanCheck: [
      "Periksa apakah aplikasi perbankan atau pekerjaan harian Anda mewajibkan sertifikasi Play Integrity bawaan.",
      "Cek ketersediaan boot image stock untuk perangkat Anda sebagai jaminan pemulihan jika terjadi masalah.",
      "Pertimbangkan apakah kebutuhan Anda benar-benar membutuhkan akses superuser atau cukup dengan izin ADB.",
    ],
    whenToConsult: [
      "Anda ingin mengetahui apakah perangkat Anda kompatibel dengan Magisk versi terbaru.",
      "Anda membutuhkan pendampingan agar proses patching boot image berjalan dengan risiko bootloop yang diperkecil melalui cadangan stock image.",
      "Anda ingin memahami cara kerja modul keselamatan dan mitigasi Play Integrity.",
    ],
    relatedServiceSlugs: ["root-android", "unlock-bootloader"],
    sections: [
      {
        heading: "Memahami Filosofi Root Android",
        body:
          "Secara teknis, root adalah proses membuka hak akses istimewa (superuser/root user) pada sistem operasi berbasis Linux yang menjadi dasar Android. Secara bawaan, produsen membatasi pengguna biasa agar tidak bisa memodifikasi atau menghapus file sistem inti demi stabilitas dan keamanan.",
      },
      {
        heading: "Manfaat Riil Melakukan Root",
        body:
          "Bagi pengguna yang membutuhkan kontrol penuh, root memberikan kapabilitas yang tidak bisa didapatkan pada kondisi standar:",
        bullets: [
          "Menghapus aplikasi bawaan (bloatware) yang menghabiskan memori dan ruang penyimpanan internal.",
          "Melakukan pencadangan (backup) seluruh data aplikasi secara penuh hingga level partisi data.",
          "Menjalankan alat otomasi teknis dan modul adblocker tingkat host/sistem.",
          "Meningkatkan atau mengatur alokasi performa hardware untuk kebutuhan komputasi spesifik.",
        ],
      },
      {
        heading: "Risiko dan Konsekuensi yang Wajib Diketahui",
        body:
          "Sebagai platform teknis yang transparan, TechFix selalu menjelaskan konsekuensi sebelum proses dilakukan:",
        bullets: [
          "Status Garansi: Sebagian besar produsen menyatakan garansi software tidak berlaku setelah perangkat di-root.",
          "Aplikasi Perbankan: Google menerapkan Play Integrity API yang mendeteksi modifikasi bootloader dan root, sehingga aplikasi tertentu memerlukan konfigurasi modul khusus.",
          "Pembaruan Otomatis (OTA): Pembaruan sistem pabrik tidak dapat dipasang sembarangan dan membutuhkan prosedur unroot atau flash ulang.",
        ],
      },
      {
        heading: "Pendekatan Modern: Magisk Systemless",
        body:
          "Berbeda dengan metode root bertahun-tahun lalu yang memodifikasi langsung partisi sistem, saat ini root dilakukan secara 'systemless' melalui Magisk dengan memodifikasi ramdisk boot image. Ini membuat proses jauh lebih bersih, stabil, dan dapat dikembalikan (revert) ke kondisi semula jika diperlukan.",
      },
      {
        heading: "Jasa Root Android Profesional & Aman TechFix Software",
        body:
          "Bagi Anda yang membutuhkan hak akses superuser untuk kustomisasi atau otomasi sistem, TechFix Software menyediakan pendampingan teknis dengan penjelasan risiko yang jujur.",
      },
    ],
    seo: {
      title: "Apakah Root Android Aman?",
      description:
        "Ketahui fakta nyata tentang root Android: manfaat, risiko garansi, aplikasi perbankan, dan implementasi aman menggunakan Magisk systemless.",
      keywords: ["apakah root android aman", "keuntungan root android", "risiko root", "magisk root", "jasa root android"],
    },
  },
  {
    id: "guide-flash-firmware-checklist",
    slug: "hal-yang-harus-dicek-sebelum-flash-firmware",
    title: "Hal yang Harus Dicek Sebelum Melakukan Flash Firmware",
    excerpt:
      "Flashing firmware stock adalah solusi ampuh memulihkan Android, tetapi kesalahan versi kecil sekalipun bisa berakibat fatal. Ini daftar periksa yang wajib Anda ketahui.",
    category: "firmware",
    categoryName: "Firmware & ROM",
    readTime: "4 menit baca",
    publishedAt: "2025-02-01",
    updatedAt: "2025-02-18",
    keyTakeaways: [
      "Periksa nomor model spesifik (bukan hanya nama pemasaran) — misal SM-S918B vs SM-S918U.",
      "Ketahui regional code (CSC / region) dan versi anti-rollback (ARB) perangkat Anda.",
      "Gunakan kabel USB original yang mentransfer data secara stabil, hindari kabel pengisian daya tipis.",
      "Pastikan baterai ponsel terisi minimal 50% untuk mencegah mati mendadak saat penulisan partisi.",
    ],
    whatUserCanCheck: [
      "Lihat nomor model di Pengaturan > Tentang Ponsel atau pada stiker kemasan perangkat.",
      "Pastikan driver USB produsen sudah terpasang rapi di PC Anda tanpa tanda seru di Device Manager.",
      "Verifikasi checksum (MD5/SHA256) file firmware yang telah diunduh untuk memastikan file tidak rusak.",
    ],
    whenToConsult: [
      "Anda tidak yakin file firmware yang Anda miliki sesuai dengan varian chipset perangkat Anda.",
      "Proses flashing gagal di tengah jalan dan perangkat meminta 'Emergency Recovery'.",
      "Anda memerlukan bantuan flashing remote dari teknisi yang terbiasa menangani tool resmi.",
    ],
    relatedServiceSlugs: ["flash-firmware", "fix-bootloop", "unbrick"],
    sections: [
      {
        heading: "Mengapa Flashing Firmware Memerlukan Kehati-hatian?",
        body:
          "Flashing firmware adalah proses menulis ulang seluruh berkas sistem operasi ke memori flash (eMMC / UFS) ponsel. Jika file yang ditulis tidak sesuai dengan arsitektur hardware atau partisi modem perangkat, ponsel bisa kehilangan sinyal jaringan atau bahkan gagal menyala sama sekali.",
      },
      {
        heading: "1. Nomor Model Spesifik (Bukan Nama Pasaran)",
        body:
          "Satu nama ponsel (misalnya Redmi Note 12) bisa memiliki varian 4G, 5G, versi global, India, atau China dengan chipset yang berbeda drastis. Selalu gunakan nomor model teknis (seperti 23021RAAEG) saat mencocokkan firmware resmi.",
      },
      {
        heading: "2. Tingkat Anti-Rollback (ARB)",
        body:
          "Banyak produsen modern menerapkan fitur proteksi keamanan Anti-Rollback (ARB). Jika Anda mencoba melakukan downgrade ke versi firmware lama dengan indeks ARB yang lebih rendah dari versi yang terpasang saat ini, perangkat dapat mengalami soft-brick proteksi bootloader.",
      },
      {
        heading: "3. Kestabilan Kabel dan Port USB",
        body:
          "Proses flashing mentransfer data sebesar 3–8 Gigabyte dalam waktu beberapa menit. Port USB longgar di laptop atau kabel kualitas buruk yang terputus sekejap saja dapat memicu penulisan partisi korup di tengah proses.",
      },
    ],
    seo: {
      title: "Checklist Sebelum Flash Firmware Android",
      description:
        "Checklist penting sebelum instalasi ulang firmware Android: varian model, kode region, anti-rollback, dan persiapan hardware untuk menghindari brick.",
      keywords: ["sebelum flash firmware", "cara flash android", "firmware stock", "risiko flash hp", "jasa flash firmware"],
    },
  },
  {
    id: "guide-custom-rom",
    slug: "custom-rom-manfaat-risiko-panduan",
    title: "Custom ROM Android: Manfaat, Risiko, dan Kapan Sebaiknya Dipasang",
    excerpt:
      "Ingin memperpanjang usia ponsel lama atau menikmati tampilan Android bersih (AOSP)? Pelajari pertimbangan realistis seputar stabilitas dan keamanan custom ROM.",
    category: "custom-rom",
    categoryName: "Firmware & ROM",
    readTime: "4 menit baca",
    publishedAt: "2025-02-05",
    updatedAt: "2025-02-20",
    keyTakeaways: [
      "Custom ROM adalah sistem operasi alternatif berbasis Android (seperti LineageOS, Pixel Experience, crDroid).",
      "Sangat cocok untuk perangkat yang sudah tidak menerima pembaruan versi Android resmi dari pabrikan.",
      "Kualitas custom ROM bergantung pada stabilitas kernel dan device tree yang dikembangkan maintainer.",
      "Fitur perangkat keras tertentu (seperti kamera khusus atau VoLTE) mungkin membutuhkan optimasi tambahan.",
    ],
    whatUserCanCheck: [
      "Periksa apakah perangkat Anda memiliki komunitas pengembang aktif di forum terpercaya (seperti XDA Developers).",
      "Ketahui apakah bootloader perangkat Anda sudah berhasil dibuka (unlocked).",
      "Siapkan pencadangan penuh karena pergantian ROM mewajibkan clean flash (penghapusan data total).",
    ],
    whenToConsult: [
      "Anda bingung memilih antara ROM berbasis AOSP atau ROM modifikasi OEM.",
      "Mengalami bootloop setelah mencoba memasang custom ROM atau custom recovery (TWRP/OrangeFox).",
      "Membutuhkan panduan konfigurasi Play Integrity dan sertifikasi Google pasca-instalasi.",
    ],
    relatedServiceSlugs: ["custom-rom", "recovery", "unlock-bootloader"],
    sections: [
      {
        heading: "Apa Itu Sebenarnya Custom ROM?",
        body:
          "Sebagian besar ponsel Android hadir dengan antarmuka pabrikan (seperti One UI, MIUI/HyperOS, ColorOS) yang sarat dengan fitur tambahan dan aplikasi bawaan. Custom ROM adalah distribusi Android alternatif—biasanya dibangun dari Android Open Source Project (AOSP)—yang menawarkan pengalaman murni, performa lebih ringan, dan opsi personalisasi mendalam.",
      },
      {
        heading: "Kapan Sebaiknya Memasang Custom ROM?",
        body:
          "Custom ROM adalah pilihan paling masuk akal ketika:",
        bullets: [
          "Ponsel Anda sudah tidak mendapatkan pembaruan versi Android dari pabrikan, padahal spesifikasi hardware masih sangat mumpuni.",
          "Antarmuka bawaan terasa berat, banyak iklan sistem, atau boros konsumsi daya.",
          "Anda menginginkan pengalaman software seperti Google Pixel pada perangkat merek lain.",
        ],
      },
      {
        heading: "Hal yang Perlu Diperhatikan Soal Stabilitas",
        body:
          "Tidak semua custom ROM memiliki kualitas setara rilis pabrik. Selalu pilih build berstatus 'Official' dengan maintainer aktif untuk memastikan fungsi krusial seperti panggilan darurat, sensor sidik jari, audio Bluetooth, dan enkripsi memori berjalan dengan sempurna.",
      },
    ],
    seo: {
      title: "Custom ROM: Risiko & Kapan Perlu",
      description:
        "Penjelasan lengkap custom ROM Android: kelebihan, kekurangan, aspek keamanan, dan cara memilih ROM yang stabil untuk perangkat Anda.",
      keywords: ["custom rom android", "lineageos indonesia", "cara pasang custom rom", "kelebihan custom rom", "jasa custom rom"],
    },
  },
  {
    id: "guide-restart-after-update",
    slug: "kenapa-hp-restart-sendiri-setelah-update",
    title: "Kenapa HP Android Sering Restart Sendiri Setelah Update?",
    excerpt:
      "Perangkat tiba-tiba restart berulang kali setelah mengunduh update sistem baru? Cari tahu sumber kegagalannya dan opsi pemulihan software yang tepat.",
    category: "troubleshooting",
    categoryName: "Troubleshooting",
    readTime: "3 menit baca",
    publishedAt: "2025-02-08",
    updatedAt: "2025-02-22",
    keyTakeaways: [
      "Restart berulang pasca update sering kali dipicu oleh konflik cache sistem atau partisi data yang tidak sinkron.",
      "Jangan mematikan paksa perangkat jika proses pembaruan masih di bawah 100% di layar instalasi.",
      "Metode booting ke Safe Mode dapat membantu mendiagnosis apakah masalah berasal dari aplikasi pihak ketiga.",
      "Jika disebabkan kegagalan penulisan OTA, perbaikan software melalui instalasi paket full ROM dapat memulihkan kondisi.",
    ],
    whatUserCanCheck: [
      "Periksa apakah tombol power tidak dalam kondisi tersangkut atau tertekan kotoran fisik.",
      "Coba masuk ke Safe Mode (Mode Aman) untuk melihat apakah sistem stabil saat aplikasi pihak ketiga dimatikan.",
      "Periksa apakah suhu perangkat terasa sangat panas saat proses restart terjadi.",
    ],
    whenToConsult: [
      "Perangkat terus menerus restart sebelum mencapai layar login pengguna.",
      "Pembaruan berasal dari file OTA manual yang gagal terverifikasi.",
      "Anda membutuhkan bantuan flash ulang paket firmware lengkap tanpa menghilangkan file dokumen.",
    ],
    relatedServiceSlugs: ["software-repair", "fix-bootloop", "flash-firmware"],
    sections: [
      {
        heading: "Mengapa Pembaruan Resmi Bisa Memicu Restart Berulang?",
        body:
          "Pembaruan software Android modern menggunakan sistem seamless update (partisi A/B) atau patching partisi. Meskipun proses ini dirancang otomatis, terkadang database konfigurasi sistem versi lama bertabrakan dengan struktur sistem baru, menyebabkan sistem crash dan me-reboot perangkat secara berulang.",
      },
      {
        heading: "Langkah Penanganan Pertama",
        body:
          "Coba diamkan perangkat terhubung ke charger selama 30 menit. Terkadang Android memerlukan proses kompilasi awal (ART optimization) di latar belakang. Jika setelah itu perangkat masih terus restart, masuklah ke mode recovery bawaan dan pilih opsi 'Wipe Cache Partition' (jika masih didukung) tanpa menghapus data pengguna.",
      },
      {
        heading: "Solusi Tingkat Lanjut: Flash Full ROM",
        body:
          "Jika OTA meninggalkan partisi yang korup, solusi terbersih adalah memasang paket full firmware (Stock ROM lengkap) melalui mode fastboot atau download mode. Ini menggantikan file sistem yang rusak dengan file murni dari server pabrikan.",
      },
    ],
    seo: {
      title: "HP Restart Sendiri Setelah Update",
      description:
        "Solusi teknis HP Android restart terus setelah update sistem. Pelajari penyebab konflik partisi, safe mode, dan pemulihan software tanpa panik.",
      keywords: ["hp restart sendiri setelah update", "android restart terus", "gagal update ota", "perbaikan software hp"],
    },
  },
];

export const guides: GuideArticle[] = [...baseGuides, ...newGuides];

export function getGuideBySlug(slug: string): GuideArticle | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getGuidesByCategory(category: string): GuideArticle[] {
  return guides.filter((g) => g.category === category);
}

export function getRelatedGuides(serviceSlug: string): GuideArticle[] {
  return guides.filter((g) => g.relatedServiceSlugs.includes(serviceSlug));
}

/** Hash deterministik untuk tie-break stabil antar build. */
function stableHash(a: string, b: string): number {
  const key = `${a}|${b}`;
  let x = 0;
  for (let i = 0; i < key.length; i++) {
    x = (x * 31 + key.charCodeAt(i)) % 100003;
  }
  return x;
}

/**
 * Artikel saudara dipilih berdasarkan kedekatan topik (kategori dan layanan yang
 * sama), lalu memprioritaskan artikel yang paling jarang mendapat link masuk.
 * Hasilnya deterministik, sehingga setiap artikel punya jalur internal link dan
 * tidak ada halaman yatim.
 */
export function getRelatedGuidesForArticle(current: GuideArticle, limit = 3): GuideArticle[] {
  const relevance = new Map<string, number>();
  for (const g of guides) {
    if (g.id === current.id) continue;
    const sameCategory = g.category === current.category ? 2 : 0;
    const sharedServices = g.relatedServiceSlugs.filter((s) =>
      current.relatedServiceSlugs.includes(s),
    ).length;
    relevance.set(g.id, sameCategory + sharedServices);
  }

  const inbound = new Map<string, number>();
  for (const g of guides) inbound.set(g.id, 0);

  const chosen = new Map<string, string[]>();
  for (const source of guides) {
    const candidates = guides
      .filter((g) => g.id !== source.id)
      .sort((a, b) => {
        const diff = (relevance.get(b.id) ?? 0) - (relevance.get(a.id) ?? 0);
        if (diff !== 0) return diff;
        const inboundDiff = (inbound.get(a.id) ?? 0) - (inbound.get(b.id) ?? 0);
        if (inboundDiff !== 0) return inboundDiff;
        return stableHash(source.id, a.id) - stableHash(source.id, b.id);
      })
      .slice(0, limit)
      .map((g) => g.id);

    chosen.set(source.id, candidates);
    for (const id of candidates) inbound.set(id, (inbound.get(id) ?? 0) + 1);
  }

  const ids = chosen.get(current.id) ?? [];
  const byId = new Map(guides.map((g) => [g.id, g]));
  return ids.map((id) => byId.get(id)).filter((g): g is GuideArticle => Boolean(g));
}
