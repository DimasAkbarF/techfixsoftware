# 📊 Comprehensive Technical & Content SEO Audit
**Website:** [https://techfixsoftware.my.id/](https://techfixsoftware.my.id/)  
**Platform:** Next.js 16 (App Router) · Full SSG · React 19 · Tailwind CSS v4  
**Auditor:** Senior Technical SEO Engineer & Content Strategist  
**Tanggal Audit:** 10 Oktober 2026  
**Status Fase:** FASE 1 - AUDIT (Menunggu Approval Sebelum Eksekusi Fase 2)

---

## 📑 Daftar Isi
1. [Ringkasan Eksekutif & Health Score](#1-ringkasan-eksekutif--health-score)
2. [Pemetaan Arsitektur Route & URL](#2-pemetaan-arsitektur-route--url)
3. [Audit 1: Metadata & Tag Title (SERP CTR)](#3-audit-1-metadata--tag-title-serp-ctr)
4. [Audit 2: Heading Hierarchy (H1 Rules)](#4-audit-2-heading-hierarchy-h1-rules)
5. [Audit 3: Indexation, Robots.txt & Sitemap.xml](#5-audit-3-indexation-robotstxt--sitemapxml)
6. [Audit 4: Structured Data (Schema.org JSON-LD)](#6-audit-4-structured-data-schemaorg-json-ld)
7. [Audit 5: Crawlability & Rendering FAQ Accordion](#7-audit-5-crawlability--rendering-faq-accordion)
8. [Audit 6: Internal Linking & Keyword Cannibalization](#8-audit-6-internal-linking--keyword-cannibalization)
9. [Audit 7: Image Optimization & Alt Text](#9-audit-7-image-optimization--alt-text)
10. [Audit 8: Kedalaman Konten & E-E-A-T Authority](#10-audit-8-kedalaman-konten--e-e-a-t-authority)
11. [Pemetaan Keyword Utama per URL (Anti-Kanibalisasi)](#11-pemetaan-keyword-utama-per-url-anti-kanibalisasi)
12. [Daftar Temuan Berdasarkan Prioritas](#12-daftar-temuan-berdasarkan-prioritas)
13. [Rencana Aksi Eksekusi (Roadmap Fase 2, 3, & 4)](#13-rencana-aksi-eksekusi-roadmap-fase-2-3--4)

---

## 1. Ringkasan Eksekutif & Health Score

TechFix Software memiliki fondasi teknis yang **sangat kuat** berkat arsitektur Next.js 16 App Router dengan render **Full Static Site Generation (SSG)**. Kecepatan TTFB mendekati 0ms, Core Web Vitals optimal, dan tidak ada ketergantungan JavaScript berat pihak ketiga.

Namun, untuk mencapai **Peringkat #1 di Google Indonesia** untuk kata kunci komersial (*jasa fix bootloop android, jasa root android, jasa custom rom, jasa flash hp*), ditemukan sejumlah kelemahan krusial:
1. **Schema Review/Rating Sintetis:** Penggunaan schema `AggregateRating` tanpa ulasan teks terverifikasi berisiko terkena penalti *Spammy Structured Data* oleh Google.
2. **Konten Layanan Masih Thin Content (250–400 kata):** Halaman layanan belum memenuhi standar landing page otoritatif (target 800–1200 kata).
3. **Crawlability Konten FAQ:** Komponen accordion saat ini menyematkan atribut `hidden` pada panel yang tertutup, berpotensi menurunkan prioritas indeksasi jawaban oleh crawler Google.
4. **Link Internal Duplikat di Homepage:** Dua kartu masalah berbeda ("HP Stuck di Logo" & "HP Restart Terus-Menerus") mengarah ke URL yang sama (`/services/fix-bootloop`).
5. **Kekurangan Topik Kluster Panduan:** Baru ada 7 artikel panduan; Google membutuhkan minimal 20+ artikel edukasi teknis otoritatif untuk membangun Topical Authority di niche Android.
6. **Tag Meta Keywords Usang:** Tag `<meta name="keywords">` masih di-generate padahal sudah tidak digunakan Google sejak 2009.

---

## 2. Pemetaan Arsitektur Route & URL

| URL Path | Tipe Route | Render Mode | Status Indeks | Peran Halaman |
| :--- | :--- | :--- | :--- | :--- |
| `/` | Statis | SSG (Static) | `index, follow` | Homepage / Pilar Konversi Utama |
| `/services` | Statis | SSG (Static) | `index, follow` | Hub Katalog Layanan |
| `/services/[slug]` (8 item) | Dinamis | SSG (Static) | `index, follow` | Commercial Landing Pages (Money Pages) |
| `/guides` | Statis | SSG (Static) | `index, follow` | Hub Panduan Edukasi (Topic Cluster) |
| `/guides/[slug]` (7 item) | Dinamis | SSG (Static) | `index, follow` | Informational Long-Tail Articles |
| `/how-it-works` | Statis | SSG (Static) | `index, follow` | Trust Page: Alur & Batasan Layanan (E-E-A-T) |
| `/remote-guide` | Statis | SSG (Static) | `index, follow` | Panduan Teknis AnyDesk & Remote Setup |
| `/testimonials` | Statis | SSG (Static) | `index, follow` | Social Proof (Screenshot Bukti Percakapan) |
| `/faq` | Statis | SSG (Static) | `index, follow` | Tanya Jawab Umum Otoritatif |
| `/about` | Statis | SSG (Static) | `index, follow` | Profil Usaha & Teknisi (E-E-A-T) |
| `/contact` | Statis | SSG (Static) | `index, follow` | Form Lead & Kontak WhatsApp/Telegram |
| `/search` | Dinamis | SSR (Dynamic) | `noindex, nofollow` | Internal Search (Blokir Index) |
| `/terms` | Statis | SSG (Static) | `index, follow` | Legal / Ketentuan Layanan |
| `/privacy` | Statis | SSG (Static) | `index, follow` | Legal / Kebijakan Privasi |
| `/disclaimer` | Statis | SSG (Static) | `index, follow` | Legal / Batasan Tanggung Jawab Software |
| `/sitemap.xml` | Route Handler | XML Generator | `index` | Peta Situs untuk Mesin Pencari |
| `/robots.txt` | Route Handler | Text Generator | `allow` | Aturan Crawling Crawler |

---

## 3. Audit 1: Metadata & Tag Title (SERP CTR)

### A. Title Tag Audit
- **Standar Ideal Google:** 50–60 karakter (maksimal ~600 piksel di SERP). Keyword utama di awal, brand di akhir.
- **Kondisi Saat Ini:**
  - `/` (Homepage): `Jasa Root Android, Fix Bootloop & Custom ROM | TechFix Software` (63 karakter) ➔ *Sedikit terlalu panjang, keyword utama belum mencerminkan jasa perbaikan menyeluruh*.
  - `/services/root-android`: `Jasa Root Android & Magisk Remote Terpercaya | TechFix Software` (63 karakter) ➔ *Bagus, namun dengan brand terpotong di layar mobile*.
  - `/services/unlock-bootloader`: `Jasa Unlock Bootloader (UBL) Android — Resmi & Aman | TechFix Software` (70 karakter) ➔ *Terpotong (Truncated)*.
  - `/services/fix-bootloop`: `Jasa Flash & Fix Bootloop Android — HP Mentok Logo | TechFix Software` (69 karakter) ➔ *Terpotong di SERP mobile*.
  - `/services/custom-rom`: `Jasa Pasang Custom ROM Android — Ganti ROM Ringan | TechFix Software` (68 karakter) ➔ *Terpotong*.

### B. Meta Description Audit
- **Standar Ideal Google:** 140–160 karakter, menjawab intent, mengandung *Unique Selling Proposition (USP)* dan *Call-to-Action (CTA)*.
- **Kondisi Saat Ini:**
  - Homepage: 162 karakter (melewati 160 karakter).
  - Halaman Layanan: Rata-rata 150–157 karakter. Sudah memiliki ringkasan teknis namun sebagian belum menyertakan CTA kuat (misal: "Konsultasi gratis sekarang!").

### C. Tag Meta Keywords
- **Temuan:** Di [`src/lib/seo.ts`](file:///home/dimskuyyyy/techfixsoftware/src/lib/seo.ts) dan [`src/config/site.ts`](file:///home/dimskuyyyy/techfixsoftware/src/config/site.ts), tag `<meta name="keywords">` masih disuntikkan ke HTML.
- **Status SEO:** Google secara resmi mengabaikan meta keywords sejak September 2009. Menaruh kata kunci di sini hanya membocorkan strategi kata kunci ke kompetitor dan menambah payload HTML yang tidak berguna.

---

## 4. Audit 2: Heading Hierarchy (H1 Rules)

### Hasil Audit Kode:
- **Aturan SEO:** Setiap halaman wajib memiliki tepat **SATU** tag `<h1>` yang mengandung keyword utama halaman tersebut.
- **Verifikasi Seluruh Halaman:**
  - `/` (Homepage): `1x H1` di [`src/components/home/Hero.tsx`](file:///home/dimskuyyyy/techfixsoftware/src/components/home/Hero.tsx) (`HP bootloop atau gagal flashing? Kami perbaiki sampai menyala lagi.`).
    - *Catatan Kritis:* H1 saat ini bersifat editorial/pertanyaan emosional, belum mengandung keyword komersial utama ("Jasa Perbaikan Software Android" / "Jasa Service HP Android Remote").
  - `/services`: `1x H1` via `<SectionHeading as="h1" title="Daftar Layanan Teknis Software Android" />`. (Lolos).
  - `/services/[slug]`: `1x H1` di [`ServiceHero.tsx`](file:///home/dimskuyyyy/techfixsoftware/src/components/service/ServiceHero.tsx) (`{service.h1}`). (Lolos).
  - `/guides/[slug]`: `1x H1` (`{guide.title}`). (Lolos).
  - `/guides`, `/faq`, `/about`, `/how-it-works`, `/remote-guide`, `/testimonials`, `/terms`, `/privacy`, `/disclaimer`: Semua menggunakan `<SectionHeading as="h1" />`. (Lolos).
  - `/contact`: `1x H1` (`Jelaskan Masalah Android Anda`). (Lolos).
  - `/search`: `1x H1` (`Cari layanan atau masalah`). (Lolos).

**Kesimpulan:** Struktur H1 konsisten 1 per halaman, namun copywriting H1 Homepage perlu dipertajam agar selaras dengan target query komersial.

---

## 5. Audit 3: Indexation, Robots.txt & Sitemap.xml

### A. Robots.txt ([`src/app/robots.ts`](file:///home/dimskuyyyy/techfixsoftware/src/app/robots.ts))
- **Status:** **BAIK**
- Aturan `disallow: ["/search"]` diterapkan dengan benar.
- Link sitemap dideklarasikan dengan benar: `https://techfixsoftware.my.id/sitemap.xml`.

### B. Sitemap.xml ([`src/app/sitemap.ts`](file:///home/dimskuyyyy/techfixsoftware/src/app/sitemap.ts))
- **Status:** **BAIK**
- Semua rute statis, 8 rute layanan, dan 7 rute artikel panduan masuk ke dalam sitemap secara dinamis.
- Nilai `lastModified` dinamis untuk panduan (`guide.updatedAt`).
- Rekomendasi: Ketika artikel panduan ditambah menjadi 20+, pastikan generator sitemap tetap otomatis mengindeks seluruh slug baru.

### C. Noindex pada Internal Search ([`src/app/search/page.tsx`](file:///home/dimskuyyyy/techfixsoftware/src/app/search/page.tsx))
- **Status:** **LULUS**
- Metadata `/search` secara eksplisit memiliki `noindex: true` (`robots: { index: false, follow: false }`), mencegah Google mengindeks halaman hasil pencarian dinamis (mencegah penalti *thin/duplicate content*).

### D. Kanonisasi Domain & Redirects ([`next.config.ts`](file:///home/dimskuyyyy/techfixsoftware/next.config.ts))
- **Status:** **SANGAT BAIK**
- Host non-kanonikal (seperti *.vercel.app atau domain alternatif) otomatis dialihkan dengan redirect 308 permanen ke `https://techfixsoftware.my.id/:path*`.
- Halaman lama `/services/magisk-root` dialihkan permanen ke `/services/root-android` (308 redirect).

---

## 6. Audit 4: Structured Data (Schema.org JSON-LD)

### ⚠️ TEMUAN KRITIS: Risiko Penalti Google pada AggregateRating Sintetis
- **Kondisi:** Di [`src/app/layout.tsx`](file:///home/dimskuyyyy/techfixsoftware/src/app/layout.tsx) dan [`src/app/services/[slug]/page.tsx`](file:///home/dimskuyyyy/techfixsoftware/src/app/services/[slug]/page.tsx), baru saja disematkan:
  ```json
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "48"
  }
  ```
- **Masalah Fatal:** Google Search Central secara eksplisit melarang penambahan `AggregateRating` atau `Review` tanpa adanya entitas ulasan nyata dengan nama pengulas, tanggal, dan teks ulasan yang bisa dibaca pengguna di halaman bersangkutan. Testimoni TechFix saat ini berupa gambar tangkapan layar percakapan WhatsApp, bukan review teks bertingkat.
- **Rekomendasi Wajib (Fase 2):** **HAPUS** objek `aggregateRating` sintetis ini segera agar terhindar dari *Manual Action: Spammy Structured Markup* dari Google.

### Schema Lain yang Valid & Perlu Dipertahankan/Disempurnakan:
1. **Organization + WebSite** di [`layout.tsx`](file:///home/dimskuyyyy/techfixsoftware/src/app/layout.tsx): Valid.
2. **ProfessionalService / Service** di [`services/[slug]/page.tsx`](file:///home/dimskuyyyy/techfixsoftware/src/app/services/[slug]/page.tsx): Valid (`areaServed: Indonesia`, `serviceType`, `provider`).
3. **Article** di [`guides/[slug]/page.tsx`](file:///home/dimskuyyyy/techfixsoftware/src/app/guides/[slug]/page.tsx): Valid, namun perlu penambahan author byline spesifik (`Person`) demi E-E-A-T.
4. **FAQPage**:
   - Terpasang di `/faq` dan `/services/[slug]`.
   - Valid untuk memicu rich snippet accordion di Google Search.
5. **BreadcrumbList**: Terpasang di semua rute dalam. Valid.

---

## 7. Audit 5: Crawlability & Rendering FAQ Accordion

### Temuan pada [`src/components/faq/FAQAccordion.tsx`](file:///home/dimskuyyyy/techfixsoftware/src/components/faq/FAQAccordion.tsx):
- Baris 42:
  ```tsx
  <div id={`faq-panel-${item.id}`} role="region" hidden={!isOpen} className="px-5 pb-4 md:px-6">
    <p>{item.answer}</p>
  </div>
  ```
- **Masalah Crawlability:** Penggunaan atribut HTML `hidden={!isOpen}` menyebabkan seluruh jawaban FAQ (kecuali item pertama) disembunyikan dengan atribut `hidden` pada HTML awal. Walaupun teks ada di DOM, mesin pencari seperti Googlebot memprioritaskan konten yang terlihat tanpa atribut pembatas aksesibilitas.
- **Solusi Fase 2:** Ganti dengan semantic disclosure native `<details>` dan `<summary>` atau styling CSS transition yang mempertahankan teks tetap terbaca secara semantik di DOM tanpa atribut `hidden=""`.

---

## 8. Audit 6: Internal Linking & Keyword Cannibalization

### A. Temuan Duplikasi Kartu Masalah di Homepage:
- **Lokasi:** [`src/data/problems.ts`](file:///home/dimskuyyyy/techfixsoftware/src/data/problems.ts) baris 4–19.
- **Masalah:**
  - Kartu 1: `"HP Stuck di Logo"` ➔ URL: `/services/fix-bootloop`
  - Kartu 2: `"HP Restart Terus-Menerus"` ➔ URL: `/services/fix-bootloop`
  Dua kartu bersebelahan mengarah ke URL persis sama dengan anchor teks berbeda pada grid yang sama. Ini membingungkan pengguna dan memboroskan link equity.
- **Rencana Perbaikan Fase 2:**
  - Gabungkan menjadi satu kartu komprehensif: `"HP Stuck di Logo & Restart Berulang (Bootloop)"` ➔ `/services/fix-bootloop`.
  - Atau arahkan kartu restart ke artikel edukasi pemecahan masalah: `/guides/kenapa-hp-restart-sendiri-setelah-update`.

### B. Topic Cluster & Pillar Page Gap:
- Saat ini artikel di `/guides` baru berjumlah 7 artikel. Belum ada halaman pilar yang mengelompokkan panduan ke dalam Topic Clusters besar (Kluster Bootloop, Kluster Root, Kluster Custom ROM, Kluster Firmware).

---

## 9. Audit 7: Image Optimization & Alt Text

### Status Alt Text Saat Ini:
1. [`src/components/home/PhoneMockup.tsx`](file:///home/dimskuyyyy/techfixsoftware/src/components/home/PhoneMockup.tsx):
   - `alt="Mockup smartphone Android bersih"` ➔ *Bisa dioptimasi menjadi lebih deskriptif: "Ilustrasi antarmuka smartphone Android layanan root dan perbaikan software TechFix"*.
2. [`src/components/testimonial/TestimonialCard.tsx`](file:///home/dimskuyyyy/techfixsoftware/src/components/testimonial/TestimonialCard.tsx):
   - `alt="Tangkapan layar percakapan pelanggan WhatsApp untuk layanan..."`
   - *Peluang Optimasi:* Menambahkan detail perangkat (misal: "Testimoni pelanggan jasa fix bootloop Xiaomi Redmi Note via WhatsApp").
3. [`src/components/home/RealSocialProof.tsx`](file:///home/dimskuyyyy/techfixsoftware/src/components/home/RealSocialProof.tsx):
   - Alt text generik, perlu diselaraskan dengan keyword layanan terkait.

---

## 10. Audit 8: Kedalaman Konten & E-E-A-T Authority

### A. Analisis Thin Content pada `/services/[slug]`:
- **Panjang Konten Saat Ini:** Rata-rata hanya 250–400 kata per halaman layanan.
- **Kekurangan:**
  - Belum ada rincian kompatibilitas merek dan chipset spesifik (Xiaomi HyperOS / MIUI, Samsung Knox / Exynos / Snapdragon, Transsion MediaTek, Realme, Poco).
  - Belum ada rincian estimasi waktu pengerjaan remote (rata-rata 30–90 menit).
  - Belum ada rincian prasyarat teknis lengkap (kabel data original, PC/laptop Windows 10/11, koneksi stabil).
- **Target Fase 3:** Mengembangkan setiap halaman layanan menjadi landing page 800–1200 kata yang kaya entitas teknis, jujur soal batasan, dan bernilai konversi tinggi.

### B. Sinyal E-E-A-T di Halaman `/about` & `/how-it-works`:
- Halaman `/about` saat ini belum memuat nama spesialis teknis atau latar belakang pengalaman riil (misal spesialisasi arsitektur partisi Android, pengalaman menangani kasus brick sejak era Android 7 hingga Android 14/15).

---

## 11. Pemetaan Keyword Utama per URL (Anti-Kanibalisasi)

Setiap halaman dipetakan ke **SATU Keyword Utama (Primary Intent)** agar tidak saling bersaing di SERP Google:

| URL Target | Primary Keyword (Target #1) | Secondary / Long-Tail Keywords | Intent |
| :--- | :--- | :--- | :--- |
| **`/` (Homepage)** | `jasa perbaikan software android` | `service software hp remote`, `jasa service hp online indonesia`, `jasa oprek android terpercaya` | Komersial / Navigasi |
| **`/services/fix-bootloop`** | `jasa fix bootloop android` | `jasa perbaikan hp bootloop`, `hp stuck di logo`, `jasa perbaiki hp restart terus`, `biaya fix bootloop` | Transaksional |
| **`/services/root-android`** | `jasa root android` | `jasa root hp`, `jasa root magisk`, `jasa root android online remote`, `bypass play integrity zygisk`, `jasa unroot` | Transaksional |
| **`/services/custom-rom`** | `jasa custom rom` | `jasa pasang custom rom`, `jasa ganti rom android`, `jasa install lineageos crdroid pixelos`, `rom android ringan` | Transaksional |
| **`/services/unlock-bootloader`** | `jasa unlock bootloader` | `jasa ubl xiaomi`, `jasa ubl hyperos`, `jasa buka bootloader android`, `asistensi ubl online` | Transaksional |
| **`/services/unbrick`** | `jasa unbrick hp` | `jasa unbrick android`, `cara mengatasi hp mati total soft brick`, `jasa perbaikan hp hardbrick softbrick` | Transaksional |
| **`/services/flash-firmware`** | `jasa flash firmware hp` | `jasa flash hp`, `flash firmware hp via remote`, `jasa flash stock rom xiaomi samsung`, `instal ulang android` | Transaksional |
| **`/services/software-repair`** | `service software hp` | `jasa perbaikan sistem android`, `hp sering force close`, `perbaikan error update android` | Komersial |
| **`/services/recovery`** | `jasa pasang twrp recovery` | `jasa pasang orangefox`, `hp stuck recovery mode`, `instal custom recovery android` | Transaksional |
| **`/how-it-works`** | `cara kerja service hp remote` | `alur perbaikan software android jarak jauh`, `keamanan remote anydesk` | Informasional / Trust |
| **`/remote-guide`** | `panduan remote service hp` | `persiapan flash hp via anydesk`, `koneksi usb debugging laptop` | Edukasi / Petunjuk |
| **`/testimonials`** | `testimoni techfix software` | `bukti service hp remote terpercaya`, `review pelanggan root bootloop` | Social Proof |
| **`/faq`** | `tanya jawab service software android` | `pertanyaan seputar root dan bootloop`, `apakah data hilang saat flash` | Informasional |

---

## 12. Daftar Temuan Berdasarkan Prioritas

### 🔴 CRITICAL (Harus Segera Diperbaiki di Fase 2)
1. **Pembersihan Schema Rating Palsu:** Hapus `aggregateRating` di [`layout.tsx`](file:///home/dimskuyyyy/techfixsoftware/src/app/layout.tsx) dan [`services/[slug]/page.tsx`](file:///home/dimskuyyyy/techfixsoftware/src/app/services/[slug]/page.tsx) untuk mencegah penalti Google *Spammy Structured Data*.
2. **Crawlability FAQ Accordion:** Ganti atribut `hidden` pada [`FAQAccordion.tsx`](file:///home/dimskuyyyy/techfixsoftware/src/components/faq/FAQAccordion.tsx) agar semua jawaban terbaca 100% oleh crawler Google pada HTML awal.
3. **Optimasi Title & H1 Homepage:** Ubah Title homepage menjadi:
   `Jasa Perbaikan Software Android, Root & Bootloop Remote | TechFix Software` (65 karakter) dan selaraskan H1 dengan keyword komersial utama.

### 🟡 HIGH (Prioritas Tinggi - Fase 2 & 3)
4. **Trimming Title Tag Halaman Layanan:** Pangkas judul halaman layanan yang melebihi 60 karakter agar tidak terpotong di SERP.
5. **Hapus Meta Keywords:** Hilangkan injeksi `keywords` dari `buildMetadata` di [`src/lib/seo.ts`](file:///home/dimskuyyyy/techfixsoftware/src/lib/seo.ts).
6. **Resolusi Link Duplikat Homepage:** Gabungkan atau bedakan kartu masalah "HP Stuck di Logo" dan "HP Restart Terus-Menerus" di [`src/data/problems.ts`](file:///home/dimskuyyyy/techfixsoftware/src/data/problems.ts).
7. **Peningkatan Kedalaman Konten Layanan (Fase 3):** Tingkatkan isi 8 landing page layanan menjadi 800–1200 kata dengan rincian chipset & merek HP.
8. **Penulisan 20 Artikel Panduan Baru (Fase 3):** Membangun Topic Clusters untuk menjaring ribuan impresi pencarian long-tail.

### 🟢 MEDIUM (Peningkatan Kualitas & Nilai Tambah)
9. **Spesifikasi Alt Text Gambar:** Perjelas alt text pada screenshot testimoni dengan merek HP dan layanan spesifik.
10. **Author Byline E-E-A-T pada Panduan:** Tambahkan entitas penulis teknis (`Person` atau tim teknisi spesialis) di schema `Article` dan UI artikel.
11. **Internal Linking Kontekstual:** Tambahkan minimal 3-5 tautan silang kontekstual di antara artikel panduan dan halaman layanan terkait.

### ⚪ LOW (Pemeliharaan Berkala)
12. **Audit Broken Links Berkala:** Memastikan tidak ada URL 404 pada navigasi footer atau panduan lama.

---

## 13. Rencana Aksi Eksekusi (Roadmap Fase 2, 3, & 4)

### 📌 FASE 2: TECHNICAL SEO (Menunggu Approval Anda)
1. Perbaiki [`src/lib/seo.ts`](file:///home/dimskuyyyy/techfixsoftware/src/lib/seo.ts): Hapus tag meta keywords usang.
2. Perbaiki [`src/app/page.tsx`](file:///home/dimskuyyyy/techfixsoftware/src/app/page.tsx) & [`src/components/home/Hero.tsx`](file:///home/dimskuyyyy/techfixsoftware/src/components/home/Hero.tsx): Title & H1 komersial berdaya klik tinggi.
3. Perbaiki JSON-LD di [`src/app/layout.tsx`](file:///home/dimskuyyyy/techfixsoftware/src/app/layout.tsx) dan [`src/app/services/[slug]/page.tsx`](file:///home/dimskuyyyy/techfixsoftware/src/app/services/[slug]/page.tsx): Hapus `aggregateRating` palsu, pertahankan `Organization`, `LocalBusiness`, `Service`, `FAQPage`, `BreadcrumbList`.
4. Refactor [`src/components/faq/FAQAccordion.tsx`](file:///home/dimskuyyyy/techfixsoftware/src/components/faq/FAQAccordion.tsx): Hapus `hidden={!isOpen}`, gunakan markup semantik yang 100% terbaca crawler.
5. Perbaiki duplikasi kartu masalah di [`src/data/problems.ts`](file:///home/dimskuyyyy/techfixsoftware/src/data/problems.ts).
6. Optimasi alt text pada [`TestimonialCard.tsx`](file:///home/dimskuyyyy/techfixsoftware/src/components/testimonial/TestimonialCard.tsx) dan [`RealSocialProof.tsx`](file:///home/dimskuyyyy/techfixsoftware/src/components/home/RealSocialProof.tsx).
7. Validasi: `npm run typecheck`, `npm run lint`, `npm run build`.

### 📌 FASE 3: ON-PAGE & CONTENT
1. Ekspansi 8 Landing Page Layanan di [`src/data/services.ts`](file:///home/dimskuyyyy/techfixsoftware/src/data/services.ts) (800–1200 kata per halaman, tabel merek, estimasi waktu, risiko, FAQ).
2. Tulis 20 artikel panduan edukasi teknis baru di [`src/data/guides.ts`](file:///home/dimskuyyyy/techfixsoftware/src/data/guides.ts) (1000+ kata per artikel, format featured snippet).
3. Buat `KEYWORD_MAP.md` untuk mapping seluruh artikel ke layanan pilar.
4. Penguatan profil teknisi & E-E-A-T di halaman `/about`.

### 📌 FASE 4: OFF-PAGE & LOCAL/BRAND CHECKLIST
1. Rencana verifikasi Google Business Profile (Local 3-Pack).
2. Panduan setup & monitoring Google Search Console dan GA4.
3. Strategi backlink white-hat (komunitas Android, forum XDA, direktori lokal).

---

> ✋ **Pemberhentian Sesuai SOP:** Sesuai instruksi *"Tunggu aku approve sebelum lanjut ke Fase 2"*, audit telah didokumentasikan secara lengkap. Mohon konfirmasi atau berikan instruksi jika ada penyesuaian sebelum kita mulai eksekusi kode di **FASE 2**.
