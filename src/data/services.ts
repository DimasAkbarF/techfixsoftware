import type { Service, ServiceGroup } from "@/types";

export const services: Service[] = [
  {
    id: "root-android",
    slug: "root-android",
    name: "Root Android",
    h1: "Jasa Root Android",
    categoryId: "root-android",
    group: "modification",
    shortDescription:
      "Bantuan root Android dengan metode Magisk systemless: pengecekan kompatibilitas, patching boot image, dan konfigurasi Zygisk.",
    description:
      "Layanan Root Android membantu Anda mendapatkan akses sistem penuh (superuser) pada perangkat Android melalui proses yang aman dan terkontrol. Sebelum eksekusi, teknisi kami memeriksa kondisi perangkat, versi Android, status bootloader, dan tujuan modifikasi Anda.\n\nRoot modern dilakukan secara systemless menggunakan Magisk, KernelSU, atau APatch yang tidak merusak partisi sistem asli, sehingga proses unroot bisa dilakukan kapan saja. Kami mendukung berbagai merek populer seperti Xiaomi/Poco/Redmi (MIUI & HyperOS), Samsung Galaxy, Google Pixel, Transsion (Infinix & Tecno), hingga Realme.\n\nCakupan pengerjaan kami meliputi analisis kompatibilitas firmware, ekstraksi & patching boot.img secara presisi, konfigurasi Zygisk & Shamiko, hingga setup modul Play Integrity agar aplikasi harian dan kebutuhan kerja tetap dapat berjalan normal. Seluruh proses dipandu secara remote via AnyDesk dengan transparansi risiko di awal.",
    problemKeywords: [
      "root",
      "root android",
      "jasa root",
      "jasa root android",
      "jasa root hp",
      "jasa root online",
      "jasa root remote",
      "jasa root magisk",
      "jasa root xiaomi",
      "jasa root poco",
      "jasa root samsung",
      "jasa root infinix",
      "bypass play integrity",
      "root magisk",
      "magisk",
      "modul magisk",
      "zygisk",
      "akses root",
      "superuser",
      "aplikasi butuh root",
      "jasa unroot",
    ],
    symptoms: [
      "Membutuhkan hak akses superuser untuk aplikasi kerja atau otomasi khusus.",
      "Ingin menghapus bloatware bawaan pabrik yang menguras penyimpanan.",
      "Memerlukan backup menyeluruh partisi data aplikasi via root tool.",
      "Ingin memasang modul kustomisasi sistem tingkat rendah.",
      "Ingin melakukan root modern yang bisa di-unroot kembali dengan mudah.",
      "Gagal saat mencoba patch boot image sendiri atau HP bootloop setelah memasang Magisk.",
      "Membutuhkan panduan konfigurasi Zygisk dan modul perlindungan integritas.",
    ],
    whoIsItFor: [
      "Pengguna yang paham tujuan spesifik membutuhkan akses root.",
      "Pemilik perangkat yang bootloadernya sudah di-unlock atau mendukung unlock.",
      "Pengguna yang bersedia menerima konsekuensi terhadap update OTA pabrik.",
      "Pengguna yang menginginkan root systemless dengan proses unroot yang praktis.",
    ],
    whoIsItNotFor: [
      "Pengguna yang sangat bergantung pada aplikasi perbankan ketat tanpa toleransi penyesuaian modul.",
      "Perangkat dengan bootloader terkunci permanen oleh operator/pabrik (misal beberapa varian US carrier).",
      "Pengguna yang mengharapkan status Play Integrity tertentu tanpa penyesuaian berkala.",
    ],
    useCases: [
      "Ingin menjalankan aplikasi yang membutuhkan akses root.",
      "Membutuhkan blokir iklan di tingkat sistem.",
      "Ingin melakukan backup penuh atau migrasi data aplikasi.",
      "Ingin memodifikasi sistem dengan cara yang didukung.",
      "Membutuhkan verifikasi apakah perangkat Anda memang bisa di-root dengan aman.",
      "Ingin memahami cara kerja Magisk dan mengelola modul pendukungnya.",
      "Membutuhkan setup Magisk yang benar pada varian firmware tertentu.",
    ],
    preparation: [
      "PC atau laptop dengan koneksi internet stabil.",
      "Kabel USB berkualitas yang cocok dengan perangkat Anda.",
      "Baterai perangkat terisi minimal 50%.",
      "Backup data penting bila memungkinkan sebelum proses berjalan.",
      "File boot.img sesuai versi firmware yang terpasang (bisa dibantu cari dan verifikasi).",
    ],
    processSteps: [
      "Hubungi CS melalui WhatsApp.",
      "Jelaskan merek, model, versi Android/OS, dan tujuan Anda.",
      "CS melakukan pengecekan awal kompatibilitas perangkat.",
      "Kelayakan, proses teknis, dan risiko dibahas bersama.",
      "Anda dan CS menyepakati metode eksekusi.",
      "Anda menyiapkan perangkat dan bahan pendukung sesuai petunjuk.",
      "Remote support dipandu langsung langkah demi langkah.",
      "Verifikasi ketersediaan stock boot image yang cocok dengan firmware terpasang.",
      "Eksekusi patching dan flashing boot image dipandu langkah demi langkah.",
      "Verifikasi status superuser, konfigurasi Zygisk, dan modul yang dibutuhkan.",
    ],
    importantNotices: [
      "Root membawa risiko dan hasilnya tidak bisa dijamin sebelum perangkat dinilai.",
      "Garansi pabrik berpotensi terpengaruh pada sebagian perangkat.",
      "Data dapat berisiko bergantung pada kondisi dan proses yang dipilih.",
      "Kompatibilitas aplikasi tertentu memerlukan konfigurasi modul lanjutan.",
      "Kesesuaian layanan dikonfirmasi melalui konsultasi transparan.",
      "Standar Play Integrity bersifat dinamis dari waktu ke waktu dan tidak kami janjikan.",
      "Patching boot image yang keliru dapat menyebabkan bootloop, karena itu proses hanya dijalankan dengan verifikasi dan cadangan.",
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
      "Kebutuhan otomasi kerja atau pengujian aplikasi yang mewajibkan hak superuser (su binary).",
      "Penumpukan bloatware bawaan pabrik yang tidak bisa di-uninstall tanpa akses root.",
      "Kebutuhan backup partisi data penuh secara offline (misal via Swift Backup atau Neo Backup).",
      "Kebutuhan tweak kernel, peningkatan refresh rate layar, atau modul audio kustom (Viper4Android).",
    ],
    technicalDeepDive: [
      {
        heading: "Arsitektur Root Modern: Systemless Magisk, KernelSU, & APatch",
        body:
          "Berbeda dengan metode root konvensional era lama seperti KingRoot yang merusak partisi /system dan memicu bootloop permanen, rekayasa root modern di TechFix Software dilakukan secara 100% systemless. Kami memodifikasi ramdisk di dalam boot.img atau init_boot.img tanpa menyentuh integritas partisi sistem baca-saja (read-only system/vendor). Hal ini menjamin ponsel dapat dikembalikan ke kondisi unroot pabrik kapan saja.",
        bullets: [
          "Ekstraksi boot.img orisinal yang 100% identik dengan versi firmware aktif (mencegah bootloop akibat mismatch kernel).",
          "Patching boot image menggunakan Magisk Manager resmi atau injeksi modul KernelSU langsung di level kernel GKI (Generic Kernel Image).",
          "Flashing partisi boot via Fastboot interface dengan cadangan partisi stok disimpan aman di PC Anda.",
        ],
      },
      {
        heading: "Konfigurasi Zygisk, Shamiko, & Play Integrity",
        body:
          "Setelah hak root aktif, tantangan terbesar pengguna adalah deteksi keamanan Google Play Integrity API dan aplikasi perbankan. Teknisi kami memandu konfigurasi Zygisk modern dengan modul penyembunyi lingkungan (Shamiko / Zygisk Next) serta setup fingerprint keystore agar perangkat tetap dapat menjalankan aktivitas perbankan harian dan verifikasi transaksi digital secara wajar.",
      },
    ],
    seo: {
      title: "Jasa Root Android & Magisk Remote",
      description:
        "Jasa root Android & Magisk systemless remote terpercaya: Xiaomi, Samsung, Pixel, Infinix. Modul Zygisk & Play Integrity aman. Konsultasi teknisi sekarang!",
      keywords: [
        "jasa root android",
        "jasa root hp",
        "jasa root magisk",
        "jasa root online remote",
        "jasa root xiaomi poco",
        "jasa root samsung",
        "jasa root infinix",
        "bypass play integrity zygisk",
        "jasa unroot android",
        "biaya jasa root android",
        "root android terdekat",
      ],
    },
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
          "Pengecekan device identifier token dan eksekusi unlock aman via fastboot tanpa risiko soft brick.",
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
        "jasa bypass ubl",
        "buka bootloader android",
      ],
    },
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
      "Kapasitas penyimpanan memori internal (userdata) yang terisi penuh 100% sehingga sistem gagal membuat cache boot.",
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
      "Layanan Flash Firmware membantu Anda menginstal ulang atau mengembalikan firmware resmi (stock ROM) pabrikan pada perangkat Android. Layanan ini sangat berguna ketika sistem operasi rusak, ingin membersihkan bug setelah update, mengatasi malware/adware bandel, atau ingin restore ponsel ke kondisi awal pabrik. Tim kami memastikan file firmware yang digunakan 100% cocok dengan kode model dan region perangkat Anda.",
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
      "Proses flashing dijalankan dan dipantau hingga selesai 100%.",
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
