import type { ComparisonItem } from "@/types";

export const comparisonsList: ComparisonItem[] = [
  {
    id: "bootloop-vs-softbrick",
    title: "Bootloop vs Soft Brick",
    subtitle: "Pahami perbedaan kondisi fisik perangkat Anda agar tidak salah mengambil langkah penanganan.",
    leftLabel: "Bootloop",
    rightLabel: "Soft Brick",
    rows: [
      {
        feature: "Tampilan Layar",
        left: "Logo merek atau animasi booting muncul berulang",
        right: "Layar hitam pekat, berkedip, atau hanya getar sesaat",
      },
      {
        feature: "Akses Mode Fastboot / Recovery",
        left: "Biasanya masih bisa masuk via kombinasi tombol",
        right: "Sering kali tidak bisa, butuh koneksi EDL / Port PC",
      },
      {
        feature: "Penyebab Umum",
        left: "Update gagal, partisi cache penuh, modul sistem salah",
        right: "Salah flash partisi boot/aboot, firmware beda tipe chipset",
      },
      {
        feature: "Peluang Pemulihan Software",
        left: "Sangat tinggi melalui flash stock atau clear cache",
        right: "Bisa dipulihkan selama PC masih mendeteksi chipset",
      },
    ],
    verdict:
      "Jika HP Anda masih menampilkan logo, fokuslah pada pemulihan bootloop tanpa panik. Jika layar gelap tetapi terdeteksi di komputer, perangkat Anda mengalami soft brick.",
    recommendedServiceHref: "/services/fix-bootloop",
    recommendedServiceLabel: "Lihat Layanan Fix Bootloop",
  },
  {
    id: "stock-vs-custom-rom",
    title: "Stock ROM vs Custom ROM",
    subtitle: "Tentukan apakah Anda lebih membutuhkan kestabilan pabrik atau keleluasaan sistem kustom.",
    leftLabel: "Stock ROM (Resmi)",
    rightLabel: "Custom ROM (Alternatif)",
    rows: [
      {
        feature: "Kestabilan & Garansi",
        left: "Sesuai standar pabrikan resmi, garansi aman",
        right: "Dikelola komunitas, garansi software gugur",
      },
      {
        feature: "Fitur & Beban Sistem",
        left: "Lengkap dengan aplikasi bawaan merek (bloatware)",
        right: "Sangat bersih, ringan, performa murni AOSP",
      },
      {
        feature: "Dukungan Versi Android",
        left: "Berhenti saat masa update resmi habis",
        right: "Bisa menikmati Android terbaru di HP lawas",
      },
      {
        feature: "Aplikasi Perbankan",
        left: "Langsung lolos sertifikasi bawaan Google",
        right: "Memerlukan konfigurasi Play Integrity tambahan",
      },
    ],
    verdict:
      "Pilih Stock ROM jika Anda mengutamakan kestabilan tanpa repot. Pilih Custom ROM jika ponsel Anda sudah habis masa update dan ingin performa yang lebih kencang.",
    recommendedServiceHref: "/services/custom-rom",
    recommendedServiceLabel: "Konsultasi Custom ROM",
  },
  {
    id: "root-vs-nonroot",
    title: "Root vs Non-Root",
    subtitle: "Apakah Anda benar-benar membutuhkan akses superuser atau cukup fitur Android standar?",
    leftLabel: "Kondisi Root (Magisk)",
    rightLabel: "Kondisi Standar (Non-Root)",
    rows: [
      {
        feature: "Hak Akses Sistem",
        left: "Penuh (Superuser administrator)",
        right: "Terbatas sesuai izin standar Android",
      },
      {
        feature: "Modifikasi Khusus",
        left: "Bisa pasang modul Magisk, tweak kernel, adblock sistem",
        right: "Hanya pengaturan resmi dan izin via ADB",
      },
      {
        feature: "Backup Data Menyeluruh",
        left: "Mendukung backup partisi data aplikasi utuh",
        right: "Hanya backup cloud standar atau transfer file",
      },
      {
        feature: "Pemeliharaan & Update",
        left: "Perlu perhatian saat update OS agar tidak bootloop",
        right: "Update OTA otomatis tinggal klik satu tombol",
      },
    ],
    verdict:
      "Root sangat bermanfaat bagi pengguna teknis yang butuh kontrol penuh. Jika kebutuhan Anda hanya penggunaan harian standar, pertahankan kondisi non-root.",
    recommendedServiceHref: "/services/root-android",
    recommendedServiceLabel: "Pelajari Root Android",
  },
  {
    id: "remote-vs-offline",
    title: "Remote Support vs Datang Langsung",
    subtitle: "Bagaimana layanan software jarak jauh TechFix bekerja dibandingkan servis konvensional?",
    leftLabel: "Remote Support TechFix",
    rightLabel: "Servis Konvensional",
    rows: [
      {
        feature: "Lokasi & Fleksibilitas",
        left: "Bisa dilakukan dari rumah di mana pun di Indonesia",
        right: "Harus datang ke toko fisik atau mengirimkan unit",
      },
      {
        feature: "Transparansi Proses",
        left: "Anda memantau langsung layar PC secara real-time",
        right: "Ponsel ditinggal berhari-hari tanpa tahu prosesnya",
      },
      {
        feature: "Keamanan Privasi",
        left: "Tidak ada akses ke data pribadi/kredensial Anda",
        right: "Unit fisik dipegang pihak lain",
      },
      {
        feature: "Kebutuhan Alat",
        left: "Memerlukan PC/laptop dan koneksi internet stabil",
        right: "Cukup membawa fisik ponsel saja",
      },
    ],
    verdict:
      "Selama Anda memiliki PC/laptop dan koneksi internet, remote support adalah cara tercepat, paling transparan, dan tidak mengharuskan Anda meninggalkan rumah.",
    recommendedServiceHref: "/remote-guide",
    recommendedServiceLabel: "Lihat Panduan Remote",
  },
];
