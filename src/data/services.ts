import type { Service, ServiceGroup } from "@/types";

export const services: Service[] = [
  {
    id: "root-android",
    slug: "root-android",
    name: "Root Android",
    h1: "Jasa Root Android & HP Online Remote (Magisk & KernelSU)",
    categoryId: "root-android",
    group: "modification",
    shortDescription:
      "Layanan jasa root Android & HP online via remote AnyDesk untuk Xiaomi, Samsung, Pixel, Infinix, Realme. Rekayasa systemless Magisk & KernelSU untuk debloat, backup, dan modul kustomisasi. Hasil bergantung perangkat.",
    description:
      "Layanan Jasa Root Android & HP Online di TechFix Software hadir sebagai solusi profesional bagi Anda yang membutuhkan hak akses superuser (su) penuh secara aman, terkontrol, dan dengan upaya memperkecil risiko kerusakan sistem permanen. Berbeda dengan konter servis konvensional yang kerap menggunakan tool berbahaya atau mengharuskan Anda meninggalkan HP berhari-hari, seluruh proses di TechFix Software dikerjakan langsung secara online via remote AnyDesk di hadapan Anda.\n\nKami menerapkan rekayasa systemless root modern menggunakan Magisk v27+, KernelSU (GKI Linux kernel-level), atau APatch. Metode ini bekerja murni pada ramdisk boot.img atau init_boot.img tanpa pernah memodifikasi partisi sistem (/system atau /vendor) yang read-only. Hasilnya, integritas firmware bawaan pabrik tetap terjaga utuh, ponsel terhindar dari resiko hard brick, dan perangkat umumnya bisa di-unroot kembali ke standar pabrik kapan saja jika diperlukan.\n\nLayanan ini dirancang untuk menjawab berbagai kebutuhan nyata pengguna Android di Indonesia:\n1. Pengguna dengan kebutuhan kustomisasi sistem yang sah pada perangkat yang kompatibel.\n2. Pengguna yang paham risiko: root dapat membuat sebagian aplikasi perbankan atau e-wallet menolak dibuka. Kami menjelaskan risikonya secara jujur dan menyarankan HP terpisah.\n3. Aplikasi kerja yang sensitif root: kompatibilitas bisa berubah sewaktu-waktu tanpa jaminan dari pengembang aplikasi.\n4. Pembersihan Bloatware & Iklan Bawaan: Hapus tuntas aplikasi sistem yang rakus penyimpanan dan memicu lag (seperti MSA dan GetApps pada MIUI/HyperOS, atau Palm Store pada Transsion Infinix/Tecno).\n5. Backup Menyeluruh Level Partisi: Mengamankan seluruh data game dan aplikasi kerja via Swift Backup atau Neo Backup tanpa kehilangan progres saat ganti perangkat.\n6. Tuning Audio & Performa Gaming: Instalasi modul audiophile Viper4Android FX / Dolby Atmos serta bypass thermal throttling untuk unlock framerate 90Hz/120Hz yang stabil.\n\nBiaya jasa root Android di TechFix Software sangat terjangkau, transparan, dan kompetitif sesuai dengan merek perangkat dan paket modul yang dipilih. Sebelum pengerjaan dimulai, teknisi kami selalu melakukan backup stock boot.img orisinal sebagai jaminan proteksi anti-bootloop. Konsultasi kelayakan dan verifikasi tipe chipset gratis di awal.",
    problemKeywords: [
      "jasa root",
      "jasa root android",
      "jasa root hp",
      "jasa root online",
      "jasa root remote",
      "jasa root magisk",
      "jasa root hp terdekat",
      "biaya jasa root android",
      "root android",
      "root magisk",
      "kernelsu",
      "apatch",
      "jasa root xiaomi poco",
      "jasa root samsung",
      "jasa root infinix",
      "jasa unroot android",
    ],
    symptoms: [
      "Ingin memasang modul kustomisasi sistem yang sah dengan pendampingan teknisi.",
      "Aplikasi tertentu menolak dibuka setelah HP di-root. Ini risiko umum, bukan sesuatu yang dijamin bisa dihindari.",
      "Ingin membersihkan aplikasi bawaan pabrik (bloatware) dan iklan sistem yang membuat HP lambat dan memori penuh.",
      "Membutuhkan backup penuh data aplikasi dan progres game secara offline menggunakan Swift Backup atau Neo Backup.",
      "Ingin meningkatkan kualitas suara dengan modul Viper4Android atau bypass thermal throttling untuk gaming.",
      "Perangkat mengalami bootloop atau stuck logo setelah gagal memasang Magisk atau modul root secara mandiri.",
      "Membutuhkan jasa root remote terpercaya yang dipandu langsung oleh teknisi berpengalaman tanpa harus keluar rumah.",
    ],
    whoIsItFor: [
      "Pengguna yang memahami risiko root dan kompatibilitas aplikasi sensitif root.",
      "Pengguna yang ingin membersihkan bloatware, mengoptimalkan kinerja hardware, atau melakukan backup data menyeluruh.",
      "Pemilik HP Android yang bootloadernya sudah di-unlock (UBL) atau tipe perangkat yang mendukung proses unlock.",
      "Pengguna yang menginginkan root systemless bersih dengan kemampuan unroot kembali ke setelan pabrik sewaktu-waktu.",
    ],
    whoIsItNotFor: [
      "Perangkat dengan bootloader yang dikunci permanen oleh operator luar negeri (misal sebagian varian US Carrier Verizon/AT&T).",
      "Pengguna yang tidak memiliki akses ke PC/laptop dengan kabel USB untuk sesi remote AnyDesk.",
      "Pengguna yang menolak verifikasi kompatibilitas firmware sebelum proses eksekusi.",
    ],
    useCases: [
      "Jasa root Android online remote untuk perangkat yang didukung.",
      "Pemasangan modul kustomisasi yang dipilih bersama pengguna, dengan penjelasan risiko kompatibilitas.",
      "Pembersihan total iklan dan bloatware bawaan pabrik (Xiaomi HyperOS, MIUI, Infinix XOS, Samsung One UI).",
      "Instalasi modul audio tingkat studio (Viper4Android FX, Dolby Atmos, JamesDSP).",
      "Tweak kernel dan pelepasan thermal limit untuk meningkatkan kestabilan FPS gaming Android.",
      "Pencadangan dan migrasi partisi data aplikasi penting via Swift Backup.",
      "Jasa unroot bersih untuk mengembalikan perangkat ke kondisi standar pabrik sebelum klaim garansi atau penjualan unit.",
    ],
    preparation: [
      "PC atau laptop berbasis Windows dengan koneksi internet yang stabil.",
      "Kabel data USB original atau berkualitas tinggi yang mendukung transfer data lancar.",
      "Baterai ponsel terisi minimal 50% untuk keamanan suplai daya selama proses.",
      "Aplikasi AnyDesk terpasang di PC/laptop untuk sesi asistensi remote.",
      "Pencadangan data penting terlebih dahulu jika bootloader perangkat belum dalam status unlock (UBL).",
    ],
    processSteps: [
      "Konsultasi Gratis via WhatsApp: Sampaikan merek, model HP, versi Android, dan tujuan utama Anda melakukan root.",
      "Cek Kompatibilitas & Status Bootloader: Teknisi memverifikasi apakah bootloader sudah terbuka dan ketersediaan boot image yang cocok.",
      "Persiapan Alat & Koneksi Remote: Anda menyambungkan HP ke laptop via USB dan membuka AnyDesk.",
      "Pencadangan Stock Boot Image: Teknisi mencadangkan partisi boot original ke PC Anda sebagai proteksi anti-bootloop.",
      "Patching & Flashing Systemless: Eksekusi patching ramdisk via Magisk atau KernelSU dan flashing via Fastboot interface.",
      "Setup Modul & Verifikasi: Pemasangan modul sesuai kebutuhan dan pengecekan hasil sebelum serah terima.",
    ],
    importantNotices: [
      "Boot image bawaan pabrik dicadangkan terlebih dahulu untuk memperkecil risiko kerusakan permanen. Risiko tidak bisa dihilangkan sepenuhnya dan hasilnya bergantung pada kondisi perangkat.",
      "Jika bootloader belum di-unlock (UBL), prosedur unlock resmi OEM akan memicu factory reset data internal.",
      "Standar Google Play Integrity bersifat dinamis sehingga penyesuaian modul berkala mungkin diperlukan di masa mendatang.",
      "Status garansi software pabrikan berpotensi terpengaruh bergantung pada kebijakan masing-masing produsen.",
      "Kami transparan mengenai setiap tahapan teknis dan tidak pernah meminta akses akun pribadi atau perbankan Anda.",
    ],
    remoteAvailable: true,
    featured: true,
    badges: ["Remote support", "Systemless Root"],
    supportedBrands: [
      "Xiaomi / Poco / Redmi (MIUI & HyperOS)",
      "Samsung Galaxy (One UI, Knox Patching)",
      "Google Pixel (Factory Image Patching)",
      "Infinix & Tecno (Transsion HiOS & XOS)",
      "Realme / Oppo / OnePlus (OxygenOS)",
      "Motorola & Asus ROG / Zenfone",
    ],
    supportedChipsets: [
      "Qualcomm Snapdragon (semua seri)",
      "MediaTek Dimensity & Helio",
      "Google Tensor (Pixel 6 - 9 Pro)",
      "Samsung Exynos (model tertentu)",
    ],
    estimatedTime: "30 – 45 Menit via Remote AnyDesk",
    causes: [
      "Kebutuhan hak akses superuser (su binary) untuk menjalankan modul kustomisasi dan otomatisasi sistem.",
      "Beban penyimpanan internal dan RAM yang terkuras oleh tumpukan aplikasi bloatware dan adware bawaan vendor.",
      "Kegagalan instalasi modul root secara mandiri yang memicu bootloop atau status Play Integrity gagal (FAIL).",
      "Kebutuhan kustomisasi performa CPU/GPU dan profil audio yang tidak difasilitasi oleh firmware standar pabrik.",
    ],
    technicalDeepDive: [
      {
        heading: "Arsitektur Root Modern: Magisk Systemless, KernelSU GKI, & APatch",
        body:
          "Metode root di TechFix Software meninggalkan cara lama yang merusak partisi /system. Kami memanfaatkan teknologi systemless modern yang bekerja di ramdisk boot.img atau kernel level. Dengan pendekatan ini, partisi sistem tetap dalam kondisi read-only asli, proteksi integritas Android Verified Boot (AVB) dikelola dengan benar, dan perangkat dapat di-unroot kembali ke kondisi pabrik tanpa jejak modifikasi kapan pun Anda inginkan.",
        bullets: [
          "Ekstraksi dan verifikasi SHA256 boot.img orisinal yang sesuai dengan nomor build firmware aktif.",
          "Injeksi Magisk v27+ systemless ramdisk atau integrasi KernelSU langsung pada Generic Kernel Image (GKI Linux 5.10+).",
          "Flashing partisi boot atau init_boot melalui protokol Android Fastboot interface dengan cadangan file tersimpan aman di PC Anda.",
        ],
      },
      {
        heading: "Kompatibilitas Aplikasi & Play Integrity",
        body:
          "Sebagian aplikasi (termasuk perbankan dan aplikasi kerja) memeriksa integritas perangkat. Setelah root, perilaku aplikasi tersebut bisa berubah dan dapat berubah kapan saja mengikuti pembaruan aplikasi atau Google Play Integrity. Kami tidak menjamin kompatibilitas aplikasi tertentu, dan kami menjelaskan kondisi ini sebelum pengerjaan.",
        bullets: [
          "Cek status Play Integrity sebelum dan sesudah root sebagai acuan.",
          "Jelaskan kemungkinan aplikasi yang menolak dibuka sebelum eksekusi.",
          "Sarankan HP terpisah untuk aplikasi keuangan yang wajib berjalan normal.",
        ],
      },
      {
        heading: "Standar Keamanan Anti-Bootloop: Protokol Cadangan Stock Image",
        body:
          "Prinsip utama pengerjaan di TechFix Software adalah meminimalkan risiko permanent brick. Sebelum perintah flashing dieksekusi, teknisi kami selalu memverifikasi ketersediaan dan mencadangkan file boot.img stok asli. Jika terjadi ketidaksesuaian kernel yang menyebabkan perangkat gagal booting, teknisi dapat langsung memulihkan partisi stock boot dalam hitungan detik sehingga ponsel kembali menyala normal.",
      },
    ],
    seo: {
      title: "Jasa Root Android & HP Online (Magisk)",
      description:
        "Jasa root Android & HP online via remote AnyDesk untuk Xiaomi, Samsung, Pixel, Infinix. Magisk & KernelSU. Tanya teknisi via WhatsApp.",
      keywords: [
        "jasa root",
        "jasa root android",
        "jasa root hp",
        "jasa root online",
        "jasa root remote",
        "jasa root magisk",
        "jasa root hp terdekat",
        "biaya jasa root android",
        "jasa root xiaomi poco",
        "jasa root samsung",
        "jasa root infinix",
        "jasa unroot android",
      ],
    },
    updatedAt: "2026-10-10",
  },
  {
    id: "unlock-bootloader",
    slug: "unlock-bootloader",
    name: "Unlock Bootloader",
    h1: "Jasa Unlock Bootloader Android",
    categoryId: "unlock-bootloader",
    group: "modification",
    shortDescription:
      "Asistensi unlock bootloader pada perangkat yang mendukung, dengan penjelasan risiko dan konsekuensinya.",
    description:
      "Unlock bootloader adalah langkah awal yang menjadi pintu masuk menuju proses teknis Android tingkat lanjut seperti root, custom recovery, atau custom ROM. Tidak semua perangkat dapat di-unlock secara resmi. Kebijakan unlock berbeda-beda antar merek, dan pada sebagian besar perangkat prosesnya otomatis menghapus data atau berdampak pada garansi. Tim kami membantu Anda memahami apakah perangkat Anda mendukung proses ini, apa konsekuensinya, dan bagaimana menjalankannya dengan benar.",
    problemKeywords: [
      "unlock bootloader",
      "buka bootloader",
      "bootloader terkunci",
      "ubl",
      "oem unlock",
      "fastboot oem unlock",
    ],
    symptoms: [
      "Perangkat masih dalam status bootloader terkunci sehingga menolak custom boot image.",
      "Gagal saat mencoba proses Unlock Bootloader mandiri di fastboot.",
      "Membutuhkan panduan pengikatan akun vendor (misal Mi Account) untuk izin unlock.",
    ],
    whoIsItFor: [
      "Pengguna yang berencana melakukan root, pasang TWRP, atau custom ROM.",
      "Pemilik perangkat yang merek dan chipsetnya mendukung pembukaan bootloader.",
    ],
    whoIsItNotFor: [
      "Pengguna yang tidak bersedia seluruh data memori internalnya terhapus (factory reset).",
      "Perangkat dengan bootloader yang dikunci mati secara hardware oleh pabrikan.",
    ],
    useCases: [
      "Ingin mempersiapkan perangkat untuk root atau custom ROM.",
      "Ingin memasang custom recovery (TWRP/OrangeFox).",
      "Membutuhkan penjelasan apakah perangkat bisa di-unlock secara resmi.",
      "Mengalami kendala saat mencoba proses unlock sendiri.",
    ],
    preparation: [
      "Kabel USB berkualitas dan PC/laptop dengan Windows.",
      "Koneksi internet stabil.",
      "Baterai terisi minimal 50%.",
      "Memahami bahwa proses unlock menghapus data internal (backup terlebih dahulu).",
    ],
    processSteps: [
      "Hubungi CS dan jelaskan merek serta model spesifik perangkat.",
      "CS mengecek kebijakan dan metode unlock untuk varian Anda.",
      "Proses, konsekuensi data, dan langkah dibahas secara terbuka.",
      "Kesepakatan metode dan waktu eksekusi dicapai.",
      "Perangkat disiapkan sesuai panduan CS.",
      "Proses dijalankan dengan panduan remote aman.",
    ],
    importantNotices: [
      "Unlock bootloader menghapus seluruh data perangkat pada prosedur standar Android.",
      "Garansi pabrik berpotensi terpengaruh tergantung kebijakan masing-masing merek.",
      "Sebagian merek mewajibkan periode antrean akun resmi sebelum proses eksekusi.",
      "Tidak ada janji kelulusan sebelum tipe chipset dievaluasi.",
    ],
    remoteAvailable: true,
    featured: false,
    badges: ["Remote support", "Konsultasi diwajibkan"],
    supportedBrands: [
      "Xiaomi / Poco / Redmi (MIUI & HyperOS Global/ID/China)",
      "Google Pixel (Semua varian non-carrier-locked)",
      "OnePlus & Motorola",
      "Transsion (Infinix & Tecno varian tertentu)",
      "Sony Xperia & Asus Zenfone / ROG Phone",
    ],
    supportedChipsets: [
      "Qualcomm Snapdragon",
      "MediaTek Helio & Dimensity",
      "Google Tensor",
    ],
    estimatedTime: "20 – 45 Menit (Asistensi Bind Akun & Eksekusi Fastboot)",
    causes: [
      "Kebijakan keamanan OEM yang mengunci verifikasi tanda tangan partisi (Signature Verification).",
      "Kebutuhan persiapan memasang Custom Recovery (TWRP/OrangeFox), Root Magisk, atau Ganti ROM.",
      "Kendala limit kuota harian atau error perizinan akun resmi Xiaomi Community pada sistem HyperOS.",
      "Perangkat terjebak error 'Device is locked' saat mencoba instalasi pembaruan firmware pihak ketiga.",
    ],
    technicalDeepDive: [
      {
        heading: "Prosedur Unlock Resmi vs Kebijakan Vendor Android",
        body:
          "Unlock Bootloader (UBL) adalah proses membuka kunci cryptographical pada partisi aboot/xbl/abl. Ketika bootloader tidak terkunci, kernel mengizinkan eksekusi boot image pihak ketiga. Setiap vendor memiliki alur resmi yang berbeda: Xiaomi menggunakan Mi Unlock Tool dengan persyaratan pengikatan Mi Account dan kartu SIM aktif; Google Pixel dan OnePlus menggunakan perintah Fastboot murni (fastboot flashing unlock); sementara Motorola membutuhkan kode token resmi.",
        bullets: [
          "Verifikasi status OEM Unlocking di Developer Options dan driver Android Bootloader Interface pada Windows.",
          "Asistensi mengatasi kendala 'Error 20091 / Account not bound' dan antrean akun Xiaomi HyperOS.",
          "Pengecekan device identifier token dan eksekusi unlock via fastboot dengan upaya memperkecil risiko soft brick.",
        ],
      },
      {
        heading: "Protokol Keamanan Data & Factory Reset Otomatis",
        body:
          "Sesuai regulasi keamanan Android (Android Verified Boot / AVB), eksekusi perintah unlock bootloader akan menghapus cryptographic keys pada partisi userdata, yang secara otomatis memicu factory reset penuh. Kami mewajibkan dan memandu backup seluruh file pribadi (foto, chat WhatsApp, dokumen) sebelum tombol konfirmasi dieksekusi.",
      },
    ],
    seo: {
      title: "Jasa Unlock Bootloader UBL Android",
      description:
        "Jasa unlock bootloader (UBL) Android resmi & aman untuk Xiaomi, Poco, HyperOS & merek lain. Pengecekan syarat & panduan remote. Konsultasi gratis sekarang!",
      keywords: [
        "jasa unlock bootloader",
        "jasa ubl xiaomi",
        "jasa ubl poco",
        "jasa ubl hyperos",
        "unlock bootloader android",
        "buka bootloader android",
      ],
    },
    updatedAt: "2026-10-10",
  },
  {
    id: "fix-bootloop",
    slug: "fix-bootloop",
    name: "Fix Bootloop",
    h1: "Jasa Fix Bootloop Android",
    categoryId: "fix-bootloop",
    group: "repair",
    shortDescription:
      "Perangkat stuck di logo, restart berulang, atau gagal boot? Kami bantu menilai penyebab dan mencari solusi.",
    description:
      "Bootloop adalah kondisi ketika perangkat Android gagal menyelesaikan proses booting, entah berhenti di logo, restart berulang tanpa henti, atau mental kembali ke recovery. Penyebabnya beragam: update sistem yang terputus, memori internal penuh, modifikasi software yang bentrok, atau partisi sistem korup. Layanan Fix Bootloop membantu Anda mengidentifikasi kemungkinan penyebab pada perangkat tertentu dan menentukan langkah pemulihan yang paling masuk akal.",
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
    symptoms: [
      "HP berhenti di logo merek dan tidak pernah masuk ke layar kunci.",
      "Perangkat restart terus-menerus setiap beberapa detik atau menit.",
      "Ponsel mendadak mati dan hanya menampilkan logo setelah update sistem.",
      "HP masuk ke menu recovery bawaan dan menampilkan error sistem.",
    ],
    whoIsItFor: [
      "Ponsel yang mengalami kegagalan sistem setelah update, crash, atau modifikasi.",
      "Pengguna yang ingin memulihkan perangkat agar bisa menyala normal kembali.",
    ],
    whoIsItNotFor: [
      "Kerusakan hardware fisik seperti chip eMMC/UFS mati permanen atau IC power short.",
    ],
    useCases: [
      "HP berhenti di logo merek dan tidak masuk ke sistem.",
      "Perangkat restart berulang sebelum selesai boot.",
      "Muncul error setelah update sistem.",
      "Masalah boot dimulai setelah mencoba modifikasi atau root.",
      "Butuh konsultasi apakah kondisi data masih bisa diupayakan selamat.",
    ],
    preparation: [
      "Kabel USB dan PC/laptop dengan internet stabil.",
      "Baterai perangkat terisi (hubungkan ke charger jika perlu).",
      "Informasi kronologi: kapan masalah mulai terjadi dan apa aktivitas terakhir.",
      "Memahami bahwa pemulihan bootloop memprioritaskan pemulihan sistem operasi.",
    ],
    processSteps: [
      "Hubungi CS dan jelaskan gejala serta kronologi awal masalah.",
      "CS melakukan asesmen awal atas kemungkinan penyebab software.",
      "Diskusi opsi pemulihan dan potensi dampaknya terhadap data.",
      "Persetujuan atas metode penanganan yang disepakati bersama.",
      "Persiapan perangkat dan software pendukung sesuai instruksi.",
      "Proses pemulihan dijalankan dan dipantau hingga unit menyala.",
    ],
    importantNotices: [
      "Hasil pemulihan dinilai secara jujur setelah pemeriksaan tipe dan respon unit.",
      "Data berpotensi hilang tergantung tingkat kerusakan partisi userdata.",
      "Percobaan flashing acak tanpa panduan berisiko memperburuk kondisi bootloop.",
      "Metode penanganan disesuaikan dengan status bootloader perangkat.",
    ],
    remoteAvailable: true,
    featured: true,
    badges: ["Remote support", "Prioritas Repair"],
    supportedBrands: [
      "Xiaomi / Poco / Redmi (MIUI & HyperOS)",
      "Samsung Galaxy (One UI, seri A, M, S, Z)",
      "Oppo & Realme (ColorOS & Realme UI)",
      "Vivo & iQOO (Funtouch OS & OriginOS)",
      "Infinix, Tecno, & Itel (Transsion XOS/HiOS)",
      "Google Pixel, Asus ROG/Zenfone, & Motorola",
    ],
    supportedChipsets: [
      "Qualcomm Snapdragon (semua seri)",
      "MediaTek Dimensity & Helio (termasuk BROM repair)",
      "Samsung Exynos (semua generasi)",
      "Unisoc T-Series / Spreadtrum",
      "Google Tensor",
    ],
    estimatedTime: "30 – 60 Menit via Remote AnyDesk",
    causes: [
      "Pembaruan sistem OTA (Over The Air) yang terinterupsi atau korup saat proses instalasi partisi.",
      "Kapasitas penyimpanan memori internal (userdata) yang penuh sehingga sistem gagal membuat cache boot.",
      "Konflik modul Magisk, Xposed/LSPosed, atau patch kernel yang tidak kompatibel dengan versi Android terpasang.",
      "Kerusakan partisi super (system, vendor, product, odm) akibat salah mengeksekusi file update atau flashing mandiri.",
    ],
    technicalDeepDive: [
      {
        heading: "Diagnosis Tingkat Rendah & Penyelamatan Data (Data Preservation)",
        body:
          "Pada kasus bootloop, prinsip utama TechFix Software adalah mengupayakan keselamatan data bila kondisi enkripsi partisi userdata masih memungkinkan. Kami membedakan apakah ponsel mengalami Soft Bootloop (hanya crash Zygote framework) atau Hard Bootloop (partisi kernel/fstab korup). Jika memungkinkan, kami menerapkan metode dirty flash atau flashing firmware stok non-wipe tanpa menghapus direktori pengguna.",
        bullets: [
          "Identifikasi status respon perangkat melalui Fastboot Mode, Samsung Download Mode, atau Recovery.",
          "Verifikasi kode nomor model (product board ID) dan region firmware (misalnya ID, Global, EEA, RU) untuk mencegah salah flashing.",
          "Eksekusi pemulihan partisi sistem secara presisi dipantau langsung di layar komputer Anda.",
        ],
      },
      {
        heading: "Penanganan Khusus Xiaomi HyperOS & Samsung Odin",
        body:
          "Untuk perangkat Xiaomi modern yang terjebak 'The system has been destroyed' atau recovery loop 'NV Data is Corrupted', teknisi kami menggunakan prosedur penulisan partisi fastboot clean. Pada perangkat Samsung yang stuck di logo Knox, kami menggunakan firmware resmi 4-file (BL, AP, CP, CSC/HOME_CSC) melalui jalur Odin resmi untuk memulihkan integritas signature sistem tanpa memicu knox void palsu.",
      },
    ],
    seo: {
      title: "Jasa Fix Bootloop Android Remote",
      description:
        "HP Android mentok di logo atau restart terus? Jasa flash firmware resmi & perbaikan bootloop Android remote online bergaransi. Konsultasi teknisi gratis!",
      keywords: [
        "jasa flash hp",
        "jasa fix bootloop",
        "jasa perbaikan hp bootloop",
        "jasa flash android online",
        "hp mentok logo",
        "jasa unbrick android",
        "jasa flash xiaomi samsung",
      ],
    },
    updatedAt: "2026-10-10",
  },
  {
    id: "unbrick",
    slug: "unbrick",
    name: "Unbrick / Pemulihan Soft Brick",
    h1: "Jasa Unbrick dan Pemulihan Soft Brick",
    categoryId: "unbrick",
    group: "repair",
    shortDescription:
      "Asesmen dan upaya pemulihan untuk perangkat yang tidak bisa digunakan karena kegagalan software.",
    description:
      "Soft brick adalah kondisi ketika perangkat tidak dapat masuk ke sistem operasi normal karena kerusakan software tingkat rendah, biasanya setelah flashing yang salah file, interupsi daya saat penulisan partisi, atau firmware region berbeda. Layanan Unbrick melakukan asesmen kondisi respon perangkat, menjelaskan kemungkinan pemulihan secara jujur, dan menjalankan prosedur pemulihan darurat bila hardware masih merespons.",
    problemKeywords: [
      "unbrick",
      "bricked",
      "hp brick",
      "hp mati total software",
      "soft brick",
      "firmware salah flashing",
      "gagal flashing",
      "edl mode",
    ],
    symptoms: [
      "HP layar hitam pekat atau hanya bergetar sesaat setelah salah flash.",
      "Perangkat terdeteksi di komputer sebagai port darurat (EDL 9008, BROM, VCOM, atau Download Mode).",
      "Lampu notifikasi berkedip tetapi layar tidak menampilkan gambar sama sekali.",
    ],
    whoIsItFor: [
      "Perangkat yang mengalami kegagalan parah pasca oprek, flash gagal, atau pemadaman listrik saat flashing.",
      "Perangkat yang port USB-nya masih merespons saat dicolokkan ke komputer.",
    ],
    whoIsItNotFor: [
      "Perangkat yang motherboard-nya rusak fisik terbakar, konslet kena air, atau chip memori pecah.",
    ],
    useCases: [
      "Perangkat tidak bisa boot setelah flashing firmware yang salah.",
      "Modifikasi software gagal dan perangkat tidak merespons layar.",
      "Butuh penilaian apakah kondisi masih dapat dipulihkan melalui jalur software.",
      "Ingin memahami opsi pemulihan sebelum memutuskan tindakan hardware.",
    ],
    preparation: [
      "Kabel USB original dan PC/laptop dengan Windows.",
      "Koneksi internet stabil untuk pengunduhan file dump/firmware resmi.",
      "Informasi detail riwayat: file apa yang terakhir diflash ke perangkat.",
      "Mengetahui varian model persis (misalnya versi chipset MediaTek atau Snapdragon).",
    ],
    processSteps: [
      "Hubungi CS dan jelaskan riwayat lengkap kejadian sebelum perangkat brick.",
      "CS mengidentifikasi apakah port USB di komputer masih membaca sinyal perangkat.",
      "Diskusi terbuka mengenai peluang keberhasilan, risiko, dan estimasi waktu.",
      "Persetujuan bersama untuk memulai proses flashing darurat.",
      "Proses recovery dijalankan dengan panduan teknis intensif.",
    ],
    importantNotices: [
      "Tidak semua kondisi brick dapat dipulihkan hanya lewat jalur software.",
      "Kondisi soft brick mewajibkan penulisan ulang partisi yang menghapus data.",
      "Hasil dan kelayakan dinilai secara transparan setelah uji respon driver di PC.",
    ],
    remoteAvailable: true,
    featured: false,
    badges: ["Konsultasi diwajibkan", "High Technical"],
    supportedBrands: [
      "Xiaomi / Poco / Redmi",
      "Samsung Galaxy (Download Mode unbrick)",
      "Realme / Oppo / OnePlus",
      "Vivo & iQOO",
      "Infinix & Tecno (MediaTek Transsion)",
      "Asus ROG Phone & Zenfone",
    ],
    supportedChipsets: [
      "Qualcomm Snapdragon (Protokol Emergency Download EDL 9008 Sahara / Firehose)",
      "MediaTek Dimensity & Helio (Mode Boot ROM BROM / Preloader SLA & DAA)",
      "Samsung Exynos (Emergency UART / EUB Mode)",
      "Unisoc Spreadtrum (SPRD Protocol)",
    ],
    estimatedTime: "45 – 90 Menit via Remote AnyDesk",
    causes: [
      "Flashing firmware yang salah model, salah varian SoC, atau salah kode board produk.",
      "Pemadaman listrik atau kabel USB terputus saat proses penulisan partisi bootloader primer (xbl, abl, sbl1).",
      "Downgrade firmware yang melanggar indeks Anti-Rollback (ARB) hardware pabrikan.",
      "Kerusakan Master Boot Record atau GUID Partition Table (GPT) tingkat rendah.",
    ],
    technicalDeepDive: [
      {
        heading: "Protokol Pemulihan Qualcomm EDL 9008 & MediaTek BROM",
        body:
          "Ketika ponsel mengalami Soft Brick parah dan tidak merespons tombol fisik maupun layar (layar hitam pekat), prosesor SoC masuk ke mode darurat pabrik. Pada chipset Qualcomm, SoC masuk ke mode Emergency Download (EDL) dengan ID perangkat 'Qualcomm HS-USB QDLoader 9008'. Pada MediaTek, SoC mengeksekusi Boot ROM (BROM) menunggu komunikasi handshake via USB. Di TechFix Software, kami memiliki alat diagnostik dan file programmer (firehose ELF/MBN dan DA payload) yang tepat untuk menulis ulang partisi vital tanpa membongkar motherboard jika testpoint tidak diwajibkan.",
        bullets: [
          "Verifikasi komunikasi handshake COM Port pada Device Manager komputer Anda.",
          "Injeksi payload programmer sah untuk menginisialisasi controller RAM (LPDDR) dan penyimpanan eMMC/UFS.",
          "Flashing partisi partisi kritis: partition-table (gpt.bin), xbl, abl, boot, dan recovery.",
          "Menghidupkan kembali display dan mengembalikan unit ke status Fastboot normal.",
        ],
      },
      {
        heading: "Transparansi Pembedaan Soft Brick vs Hard Brick Fisik",
        body:
          "Kami menjunjung tinggi etika transparansi. Jika saat pengetesan USB port sama sekali tidak mengeluarkan respon hardware (0 ampere pada USB tester atau tidak ada suara connect di Windows), kami akan menyatakan secara jujur bahwa unit mengalami kerusakan hardware (IC Power short, chip UFS mati, atau kerusakan jalur PCB) sehingga Anda tidak membuang waktu dan biaya untuk tindakan software yang sia-sia.",
      },
    ],
    seo: {
      title: "Jasa Unbrick Android & Soft Brick",
      description:
        "Jasa unbrick Android & perbaikan HP mati total atau soft brick akibat gagal flash. Deteksi port EDL 9008 & BROM remote online. Konsultasi teknisi sekarang!",
      keywords: ["unbrick", "soft brick", "hp brick", "pemulihan brick", "service software hp", "unbrick android"],
    },
    updatedAt: "2026-10-10",
  },
  {
    id: "flash-firmware",
    slug: "flash-firmware",
    name: "Flash Firmware",
    h1: "Jasa Flash Firmware Android",
    categoryId: "flash-firmware",
    group: "firmware",
    shortDescription:
      "Instalasi firmware stock, restore firmware, dan asistensi upgrade atau downgrade versi yang didukung.",
    description:
      "Layanan Flash Firmware membantu Anda menginstal ulang atau mengembalikan firmware resmi (stock ROM) pabrikan pada perangkat Android. Layanan ini sangat berguna ketika sistem operasi rusak, ingin membersihkan bug setelah update, mengatasi malware/adware bandel, atau ingin restore ponsel ke kondisi awal pabrik. Tim kami memastikan file firmware yang digunakan dicocokkan dengan kode model dan region perangkat Anda.",
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
    symptoms: [
      "Sistem Android terasa lambat, lag ekstrem, atau terinfeksi iklan yang tidak bisa di-uninstall.",
      "Ingin kembali ke versi OS resmi setelah mencoba custom ROM.",
      "Pembaruan sistem resmi gagal terinstal atau meninggalkan bug mengganggu.",
      "Ingin melakukan downgrade versi Android yang masih didukung oleh anti-rollback.",
    ],
    whoIsItFor: [
      "Pengguna yang menginginkan sistem Android bersih dan stabil seperti baru keluar dari kardus.",
      "Pengguna yang ingin mengembalikan kondisi ponsel ke standar resmi pabrikan.",
    ],
    whoIsItNotFor: [
      "Permintaan downgrade yang melanggar batasan Anti-Rollback (ARB) hardware pabrikan.",
    ],
    useCases: [
      "Ingin mengembalikan firmware stock setelah masalah sistem.",
      "Update sistem gagal dan ingin memulihkan versi stabil.",
      "Ingin melakukan upgrade atau downgrade versi yang didukung.",
      "Membutuhkan file firmware resmi yang terverifikasi sesuai varian perangkat.",
    ],
    preparation: [
      "Kabel USB dan PC/laptop dengan internet stabil.",
      "Baterai minimal 50% untuk menjaga kestabilan transfer data.",
      "Backup data penting jika perangkat masih bisa diakses.",
      "Mengetahui nomor model lengkap perangkat.",
    ],
    processSteps: [
      "Hubungi CS dengan menyertakan kode model dan varian perangkat.",
      "Konfirmasi tujuan: instal ulang bersih, upgrade, atau downgrade.",
      "Pemeriksaan kompatibilitas firmware dan konfirmasi risiko data.",
      "Persiapan file official dan driver pada komputer Anda.",
      "Proses flashing dijalankan dan dipantau hingga proses selesai.",
    ],
    importantNotices: [
      "Penggunaan file firmware yang salah varian berisiko menimbulkan masalah baru.",
      "Proses clean flash pabrikan akan menghapus seluruh data memori internal.",
      "Downgrade versi hanya dapat dilakukan jika indeks Anti-Rollback (ARB) mengizinkan.",
    ],
    remoteAvailable: true,
    featured: true,
    badges: ["Remote support", "Firmware Stock"],
    supportedBrands: [
      "Samsung Galaxy (Flash Odin 4-File: BL, AP, CP, CSC/HOME_CSC)",
      "Xiaomi / Poco / Redmi (Mi Flash Fastboot TGZ)",
      "Realme & Oppo (OFP / OZIP & Fastboot ROM)",
      "Vivo & iQOO (Fastboot & EDL official package)",
      "Infinix & Tecno (Transsion SP Flash Tool / MDT)",
      "Google Pixel (Factory Image Fastboot Script)",
    ],
    supportedChipsets: [
      "Qualcomm Snapdragon",
      "MediaTek Helio & Dimensity",
      "Samsung Exynos",
      "Unisoc Spreadtrum",
      "Google Tensor",
    ],
    estimatedTime: "30 – 60 Menit via Remote AnyDesk",
    causes: [
      "Penumpukan file residu sistem dan bug sistemik setelah beberapa kali update OS berturut-turut.",
      "Infeksi adware, malware, atau aplikasi pihak ketiga yang menempel pada partisi sistem.",
      "Keinginan kembali ke sistem resmi pabrikan (Stock ROM) setelah mencoba Custom ROM atau Root.",
      "Kebutuhan mengganti wilayah ROM (misal dari ROM China/Telco ke ROM Global Resmi Indonesia).",
    ],
    technicalDeepDive: [
      {
        heading: "Integritas Sumber ROM & Verifikasi Checksum Resmi",
        body:
          "Dalam proses flashing firmware resmi, TechFix Software hanya mengunduh paket firmware langsung dari server CDN resmi pabrikan atau repositori terverifikasi. Kami melakukan pengujian hash SHA-256 / MD5 sebelum file dieksekusi ke perangkat Anda, guna meniadakan risiko file korup yang dapat merusak memori internal.",
        bullets: [
          "Verifikasi kesesuaian Product Model Name dan CSC/Region Code secara ketat.",
          "Analisis Anti-Rollback Protection (ARB Index) untuk memastikan downgrade aman tanpa memicu hardware freeze.",
          "Instalasi driver USB resmi (Samsung Smart Switch Driver, Google Android USB Driver, MediaTek VCOM Driver) yang terverifikasi.",
        ],
      },
      {
        heading: "Pemilihan Opsi Clean Flash vs Non-Wipe Restore",
        body:
          "Jika Anda ingin memulihkan sistem namun masih ingin mempertahankan data, kami dapat memandu prosedur flash dengan CSC HOME (pada Samsung) atau skrip 'flash_all_except_storage.bat' (pada Xiaomi), asalkan partisi data belum mengalami korupsi enkripsi parah. Jika instalasi bersih (Clean Flash) diwajibkan demi stabilitas, kami memastikan Anda telah memahami konsekuensinya terlebih dahulu.",
      },
    ],
    seo: {
      title: "Jasa Flash Firmware Android Resmi",
      description:
        "Jasa flash firmware Android resmi: instal ulang stock ROM, atasi bootloop, downgrade & upgrade sistem semua merek via AnyDesk. Konsultasi gratis sekarang!",
      keywords: ["flash firmware", "firmware stock", "restore firmware", "reinstall android", "jasa flashing android"],
    },
    updatedAt: "2026-10-10",
  },
  {
    id: "custom-rom",
    slug: "custom-rom",
    name: "Custom ROM",
    h1: "Jasa Custom ROM Android",
    categoryId: "custom-rom",
    group: "customization",
    shortDescription:
      "Asistensi instalasi, migrasi, dan troubleshooting custom ROM pada perangkat yang kompatibel.",
    description:
      "Custom ROM memberikan pengalaman baru di perangkat Android Anda: menikmati versi Android yang lebih modern pada HP yang sudah tidak di-update pabrik, performa yang jauh lebih ringan tanpa bloatware, atau kustomisasi tampilan mendalam. Layanan Custom ROM membantu Anda memilih ROM yang stabil, memeriksa kompatibilitas kernel, melakukan instalasi yang benar, hingga troubleshooting modul Play Integrity pasca-pemasangan.",
    problemKeywords: [
      "custom rom",
      "install custom rom",
      "rom custom",
      "lineageos",
      "crDroid",
      "migrasi rom",
      "rom alternatif",
      "pixel experience",
    ],
    symptoms: [
      "HP terasa berat karena antarmuka pabrikan penuh bloatware dan iklan sistem.",
      "Versi Android resmi mentok di versi lama padahal ingin mencoba fitur Android terbaru.",
      "Mengalami bootloop setelah mencoba memasang ROM secara mandiri.",
    ],
    whoIsItFor: [
      "Pengguna yang ingin menyegarkan performa ponsel lamanya agar kencang kembali.",
      "Pecinta tampilan murni Android (AOSP) atau fitur kustomisasi mendalam.",
    ],
    whoIsItNotFor: [
      "Pengguna yang tidak siap jika ada fitur minor pabrikan (misal kamera proprietary) berubah kualitas.",
    ],
    useCases: [
      "Ingin memakai versi Android lebih baru di perangkat yang tidak di-update pabrik.",
      "Mencari tampilan atau performa sistem yang lebih ringan dan irit baterai.",
      "Ingin migrasi dari satu custom ROM ke ROM lain yang lebih stabil.",
      "Mengalami kendala instalasi ROM dan membutuhkan pendampingan teknisi.",
    ],
    preparation: [
      "Kabel USB dan PC/laptop dengan internet stabil.",
      "Baterai terisi penuh.",
      "Pencadangan data penting di luar ponsel (instalasi ROM menghapus data internal).",
      "Perangkat sudah dalam status bootloader terbuka (unlocked).",
    ],
    processSteps: [
      "Konsultasikan model perangkat dan tujuan Anda ke CS.",
      "Diskusi opsi ROM yang stabil dan didukung aktif oleh maintainer resmi.",
      "Penjelasan terbuka mengenai kelebihan, kekurangan, dan risiko.",
      "Persiapan custom recovery (TWRP/OrangeFox) dan paket ROM.",
      "Eksekusi flashing dipandu secara remote.",
      "Pemeriksaan fungsionalitas dan konfigurasi aplikasi pasca-instalasi.",
    ],
    importantNotices: [
      "Garansi pabrik berpotensi terpengaruh saat berpindah ke custom ROM.",
      "Instalasi custom ROM mewajibkan clean flash (penghapusan data internal total).",
      "Tidak semua perangkat memiliki dukungan custom ROM yang stabil.",
    ],
    remoteAvailable: true,
    featured: false,
    badges: ["Remote support", "Konsultasi diwajibkan"],
    supportedBrands: [
      "Xiaomi / Poco / Redmi (dukungan ROM komunitas terluas)",
      "Google Pixel (LineageOS, GrapheneOS, CalyxOS)",
      "OnePlus (OxygenOS alternative / Paranoid Android)",
      "Realme & Asus Zenfone / ROG Phone",
      "Samsung Galaxy (model dengan SoC Exynos/Snapdragon unlockable)",
    ],
    supportedChipsets: [
      "Qualcomm Snapdragon (rekomendasi terbaik untuk custom ROM)",
      "MediaTek Dimensity (pada model dengan source code kernel resmi)",
      "Google Tensor",
    ],
    estimatedTime: "45 – 75 Menit via Remote AnyDesk",
    causes: [
      "Ponsel sudah mencapai End-of-Life (EOL) dan tidak lagi menerima update keamanan Android dari pabrikan.",
      "Antarmuka bawaan pabrik terasa sangat berat, penuh bloatware, dan boros baterai.",
      "Keinginan merasakan pengalaman Android murni ala Google Pixel (PixelOS / Pixel Experience).",
      "Kebutuhan kustomisasi tingkat lanjut tanpa batas (crDroid, Evolution X, LineageOS).",
    ],
    technicalDeepDive: [
      {
        heading: "Pemilihan ROM Resmi (Official Build) & Stabilitas Kernel",
        body:
          "TechFix Software mengutamakan keselamatan harian Anda. Kami hanya merekomendasikan varian Custom ROM yang berstatus 'Official' dengan pohon sumber (device tree) dan kernel yang dirilis oleh maintainer tepercaya. Kami memeriksa kesesuaian firmware vendor base (misalnya MIUI/HyperOS vendor firmware) sebelum paket ROM diflash untuk mencegah kamera mati (camera dead), sensor sidik jari error, atau hilangnya konektivitas sinyal seluler.",
        bullets: [
          "Verifikasi ketersediaan Custom Recovery modern (TWRP / OrangeFox) yang mendukung dekripsi Android 13/14/15.",
          "Prosedur Clean Flash terstandarisasi: Format Data (F2FS/ext4) untuk menghapus residu enkripsi lama.",
          "Flashing paket Google Apps (NikGApps / MindTheGapps) dan modul modem radio yang kompatibel.",
        ],
      },
      {
        heading: "Penyesuaian Play Integrity & Sertifikasi Perangkat",
        body:
          "Banyak pengguna ragu beralih ke Custom ROM karena khawatir aplikasi m-banking atau e-wallet tidak bisa dibuka. Teknisi kami memandu langkah konfigurasi Play Integrity Fix sehingga perangkat Anda lulus pengujian Basic dan Device Integrity, memungkinkan aplikasi perbankan berjalan normal tanpa hambatan.",
      },
    ],
    seo: {
      title: "Jasa Pasang Custom ROM Android",
      description:
        "Jasa pasang custom ROM Android (LineageOS, PixelOS, crDroid, Evolution X) via remote AnyDesk. Performa lebih kencang, bebas bloatware. Chat teknisi sekarang!",
      keywords: [
        "jasa custom rom",
        "jasa pasang custom rom",
        "jasa ganti rom android",
        "jasa custom rom xiaomi",
        "jasa rom lineageos",
        "jasa rom pixelos",
        "jasa oprek hp android",
        "custom rom android indonesia",
      ],
    },
    updatedAt: "2026-10-10",
  },
  {
    id: "recovery",
    slug: "recovery",
    name: "Recovery / Custom Recovery",
    h1: "Jasa Recovery Android",
    categoryId: "recovery",
    group: "customization",
    shortDescription:
      "Setup recovery yang didukung, penjelasan mode recovery, dan troubleshooting berkaitan recovery.",
    description:
      "Mode recovery adalah lingkungan sistem darurat untuk memelihara partisi sistem, flashing file zip, dan backup NANDroid. Layanan Recovery membantu Anda memasang custom recovery populer seperti TWRP, OrangeFox, atau PBRP pada perangkat yang kompatibel, serta membantu Anda yang terjebak di mode recovery loop tanpa bisa kembali ke sistem normal.",
    problemKeywords: [
      "recovery",
      "twrp",
      "custom recovery",
      "masuk recovery",
      "keluar dari recovery",
      "recovery mode",
      "stuck di recovery",
      "orangefox",
    ],
    symptoms: [
      "Setiap kali HP dinyalakan, selalu masuk ke mode recovery secara otomatis.",
      "Ingin memasang TWRP atau OrangeFox untuk persiapan flashing ROM atau Magisk.",
      "Penyimpanan di recovery terbaca terenkripsi (0 MB) dan tidak bisa membaca file zip.",
    ],
    whoIsItFor: [
      "Pengguna yang memerlukan custom recovery untuk modifikasi lanjutan.",
      "Pengguna yang ponselnya terjebak di mode recovery bawaan.",
    ],
    whoIsItNotFor: [
      "Perangkat dengan sistem dinamis tertutup yang belum memiliki porting custom recovery yang valid.",
    ],
    useCases: [
      "Terjebak di mode recovery dan butuh bantuan keluar ke sistem normal.",
      "Ingin memasang custom recovery yang didukung perangkat secara aman.",
      "Membutuhkan penjelasan cara backup dan restore partisi melalui recovery.",
      "Recovery bermasalah setelah proses modifikasi sebelumnya.",
    ],
    preparation: [
      "Kabel USB dan PC/laptop.",
      "Baterai terisi cukup.",
      "Informasi model dan kondisi saat ini.",
    ],
    processSteps: [
      "Hubungi CS dan jelaskan kendala atau kebutuhan recovery Anda.",
      "Identifikasi keperluan: perbaikan boot loop recovery atau pemasangan baru.",
      "Penjelasan langkah, kompatibilitas, dan pencegahan risiko bootloop.",
      "Proses penanganan dipandu langsung via remote.",
    ],
    importantNotices: [
      "Penggunaan perintah wipe atau format di recovery secara keliru dapat menghapus file pribadi.",
      "Custom recovery hanya dipasang pada perangkat yang bootloadernya telah terbuka.",
    ],
    remoteAvailable: true,
    featured: false,
    badges: ["Remote support"],
    supportedBrands: [
      "Xiaomi / Poco / Redmi",
      "Samsung Galaxy (TWRP Odin TAR)",
      "Realme & Oppo",
      "Google Pixel",
      "OnePlus & Motorola",
      "Infinix & Tecno (chipset MTK)",
    ],
    supportedChipsets: [
      "Qualcomm Snapdragon",
      "MediaTek Helio & Dimensity",
      "Samsung Exynos",
    ],
    estimatedTime: "30 – 50 Menit via Remote AnyDesk",
    causes: [
      "Perangkat mengalami recovery boot loop (selalu restart kembali ke menu recovery bawaan).",
      "Memori internal terenkripsi dengan tampilan 0 MB atau nama folder acak di menu recovery.",
      "Kebutuhan memasang TWRP, OrangeFox, atau PBRP untuk mem-flash zip magisk atau rom.",
      "Kegagalan mounting partisi partisi sistem (unable to mount /system, /vendor, atau /data).",
    ],
    technicalDeepDive: [
      {
        heading: "Penanganan Partisi A/B, Virtual A/B (VAB), & Dynamic Partitions",
        body:
          "Pada arsitektur Android modern (Android 10 ke atas), partisi recovery seringkali digabungkan ke dalam boot.img atau vendor_boot.img daripada memiliki partisi khusus /recovery terpisah. Kesalahan mem-flash file recovery ke partisi boot konvensional dapat menyebabkan bootloop total. Teknisi kami memastikan metode instalasi disesuaikan dengan skema partisi perangkat Anda.",
        bullets: [
          "Identifikasi skema partisi: Dedicated Recovery vs A/B Ramdisk Boot vs Vendor Boot Recovery.",
          "Flashing recovery via Fastboot dengan sintaks yang tepat (fastboot flash recovery vs fastboot flash vendor_boot).",
          "Konfigurasi kunci dekripsi FBE (File-Based Encryption) untuk mengembalikan akses penyimpanan internal.",
          "Pencegahan recovery ter-overwrite kembali oleh stock recovery pabrikan melalui patching disable-dm-verity.",
        ],
      },
    ],
    seo: {
      title: "Jasa Pasang Recovery TWRP Android",
      description:
        "Jasa pasang custom recovery TWRP & OrangeFox Android via remote. Atasi stuck recovery loop dan partisi internal terenkripsi. Hubungi teknisi kami sekarang!",
      keywords: ["recovery", "twrp", "custom recovery", "mode recovery", "stuck di recovery", "service hp"],
    },
    updatedAt: "2026-10-10",
  },
  {
    id: "software-repair",
    slug: "software-repair",
    name: "Software Repair",
    h1: "Jasa Perbaikan Software Android",
    categoryId: "software-repair",
    group: "repair",
    shortDescription:
      "Layanan untuk error software, update gagal, ketidakstabilan sistem, dan troubleshooting software lain.",
    description:
      "Tidak semua kerusakan ponsel berasal dari komponen hardware. Sebagian besar masalah seperti aplikasi sering force close mendadak, sistem mendadak tidak responsif, error 'System UI has stopped', atau crash setelah update berasal dari kerusakan tingkat software. Layanan Software Repair membantu mendiagnosis akar masalah dan memulihkan kestabilan sistem perangkat Anda.",
    problemKeywords: [
      "software repair",
      "error android",
      "update gagal",
      "force close",
      "sistem lambat",
      "hp error",
      "perbaikan software",
      "system ui stopped",
    ],
    symptoms: [
      "Aplikasi sistem atau antarmuka terus memunculkan pesan 'Telah Berhenti'.",
      "Perangkat mengalami panas berlebih dan baterai boros karena proses sistem yang crash berulang.",
      "Muncul notifikasi error aneh setelah pembaharuan keamanan berkala.",
    ],
    whoIsItFor: [
      "Pengguna yang mengalami gangguan performa dan error software tanpa tahu penyebab pastinya.",
      "Pengguna yang ingin memastikan apakah masalah HP mereka berasal dari software atau hardware.",
    ],
    whoIsItNotFor: [
      "Kerusakan fisik layar retak, baterai kembung, atau port charger rusak fisik.",
    ],
    useCases: [
      "Aplikasi atau sistem sering force close berulang.",
      "Update sistem gagal dan berhenti di tengah proses.",
      "Perangkat terasa lambat, lag tidak wajar, atau tidak stabil.",
      "Muncul notifikasi error sistem yang tidak bisa dijelaskan.",
      "Bingung menentukan kategori layanan mana yang cocok untuk kondisi HP Anda.",
    ],
    preparation: [
      "Kabel USB dan PC/laptop bila diperlukan tindakan mendalam.",
      "Baterai terisi minimal 40%.",
      "Pencadangan data penting bila perangkat masih dapat dioperasikan.",
      "Catatan kronologi kemunculan error.",
    ],
    processSteps: [
      "Hubungi CS dan ceritakan detail pesan error atau gejala yang timbul.",
      "CS membantu mengidentifikasi apakah masalah berada pada level aplikasi atau partisi sistem.",
      "Diskusi rekomendasi penanganan dan estimasi dampaknya.",
      "Tindakan perbaikan dijalankan dengan panduan teknisi.",
    ],
    importantNotices: [
      "Kelayakan perbaikan bergantung pada kondisi riil respon software perangkat.",
      "Jika terindikasi kerusakan fisik komponen memori (hardware), kami sampaikan secara transparan.",
    ],
    remoteAvailable: true,
    featured: false,
    badges: ["Remote support", "Konsultasi"],
    supportedBrands: [
      "Semua merek Android: Xiaomi, Poco, Redmi",
      "Samsung Galaxy (semua seri)",
      "Oppo, Vivo, Realme, & iQOO",
      "Infinix, Tecno, & Itel",
      "Google Pixel, Asus, Motorola, Huawei, Sony",
    ],
    supportedChipsets: [
      "Qualcomm Snapdragon",
      "MediaTek Helio & Dimensity",
      "Samsung Exynos",
      "Unisoc Spreadtrum",
      "Google Tensor",
    ],
    estimatedTime: "30 – 60 Menit via Remote AnyDesk",
    causes: [
      "Konflik berkas shared library (so file) atau dalvik-cache korup setelah pembaruan sistem tidak sempurna.",
      "Layanan framework 'com.android.systemui' mengalami crash loop yang menyebabkan layar berkedip hitam.",
      "Infeksi adware/malware tersembunyi yang berjalan sebagai Device Administrator.",
      "Fragmentasi partisi memori internal yang memicu freeze ekstrem dan restart berkala.",
    ],
    technicalDeepDive: [
      {
        heading: "Diagnosis Logcat & Triage Kerusakan Sistemik",
        body:
          "Dalam penanganan software repair, teknisi kami tidak sekadar melakukan reset sembarangan. Kami memanfaatkan antarmuka ADB (Android Debug Bridge) untuk membaca stream 'logcat' secara real-time. Dengan menganalisis stack trace dari error Fatal Exception atau NullPointerException, kami dapat mengidentifikasi paket aplikasi atau dependensi sistem mana yang memicu ketidakstabilan perangkat.",
        bullets: [
          "Inspeksi status integritas partisi sistem dan beban proses CPU/RAM di background.",
          "Pembersihan cache dalvik dan reinisialisasi permission paket tanpa menghapus data pribadi.",
          "Penghapusan paksa (debloat) aplikasi berbahaya atau residu malware via adb shell pm uninstall.",
          "Restorasi file konfigurasi sistem dan pengujian kestabilan perangkat.",
        ],
      },
    ],
    seo: {
      title: "Jasa Service Software HP Android",
      description:
        "Jasa perbaikan software Android online: atasi aplikasi force close, gagal update, system UI error & lemot parah secara remote AnyDesk. Chat WhatsApp teknisi!",
      keywords: ["perbaikan software", "error android", "update gagal", "force close", "software repair android"],
    },
    updatedAt: "2026-10-10",
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

export function getServicesByGroup(group: ServiceGroup): Service[] {
  return services.filter((s) => s.group === group);
}
