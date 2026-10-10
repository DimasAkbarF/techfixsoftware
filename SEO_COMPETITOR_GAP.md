# SEO Competitor Gap: TechFix Software

Status: DRAFT rencana. Belum ada perubahan kode dari dokumen ini.
Tanggal audit: 10 Oktober 2026.

## Keterbatasan data (baca dulu)

- SERP diambil lewat web_search, bukan Google Search langsung. Urutan bisa beda dengan hasil Google di browser pengguna.
- Lokasi, personalisasi, dan waktu pencarian tidak dikontrol.
- Search volume, keyword difficulty, backlink, dan trafik kompetitor: BELUM DIKETAHUI. Tidak ada tool keyword atau akses GSC di sesi ini.
- Posisi TechFix di SERP hanya dari satu kueri. Belum diverifikasi ulang.
- Halaman kompetitor yang belum dibuka penuh ditandai "belum diperiksa".

## Posisi TechFix di SERP (satu kueri)

| Keyword | Posisi TechFix | Catatan |
|---|---|---|
| jasa root android | 6 | Homepage yang muncul, bukan /services/root-android |
| jasa custom rom | tidak masuk top 10 | Sumber: web_search, belum diverifikasi |
| jasa unlock bootloader | tidak masuk top 10 | Sumber: web_search, belum diverifikasi |

## Pesaing yang terlihat di SERP

Kueri "jasa root android" (web_search):
1. jasaroot.my.id (halaman utama, bertema Pamulang/Cinere/Depok, banyak keyword absensi/presensi)
2. tukangroot.com (jasa root HP Depok, layanan ojol)
3. oprekmania.com/jasa-root-hp-android/ (halaman layanan + blog)
4. buanaservice.id/root/ (halaman layanan multi-merek)
5. ombob.eu.org (jasa root online, banyak artikel teknis)
6. techfixsoftware.my.id (TechFix, homepage)
7. adhieweb.com/jasa-root-hp-android-depok/
8. oprekmania.com/jasa-root-android-terdekat/
9. exa.ai listing (Akhyar_GoRoot)
10. exa.ai listing (Jasa Oprek/Root All Device)

Kueri "jasa custom rom" dan "jasa unlock bootloader" (web_search): marketplace (Shopee, Tokopedia), grup Facebook, Instagram, YouTube, blog, dan forum XDA. Halaman layanan murni dari situs kompetitor belum cukup terlihat di hasil ini.

## Audit kompetitor utama

### blog.tukangroot.com
- Jenis: blog dengan banyak artikel bertema bypass mock location, Smali Patcher, Fake GPS systemless, dan war kuota unlock Xiaomi.
- Intent yang dilayani: informasional yang mengarah ke bypass deteksi lokasi.
- Gap bagi TechFix: TIDAK DIIKUTI. Konten bypass mock location dan deteksi aplikasi ojol/absensi/m-banking melanggar aturan TechFix dan tidak sejalan dengan kebijakan kita.
- Yang bisa dipelajari secara sah: struktur artikel bertanggal, penjelasan kuota unlock Xiaomi sebagai informasi layanan (harus dicek akurasinya dulu).

### jasaroot.my.id
- Jenis: halaman utama satu blog, berbasis Pamulang dan Depok.
- Lokasi: klaim melayani area Pamulang/Cinere/Depok. TechFix TIDAK melayani area itu. Jangan meniru.
- Area layanan TechFix yang sah: remote seluruh Indonesia, dengan lokasi fisik hanya di Rangkasbitung (dikonfirmasi pemilik, 10 Okt 2026).
- Konten: daftar layanan (root, TWRP, custom ROM, flash, bootloop, imei null) dalam satu halaman.
- Yang bernilai: daftar layanan jelas dan CTA japri.
- Hal yang TIDAK diikuti: keyword absensi/presensi kantor dan "driver online" yang menyasar bypass.
- Gap bagi TechFix: TechFix perlu halaman layanan yang lebih rinci dan transparan, tanpa menjanjikan hasil.

### oprekmania.com
- Jenis: blog tutorial dengan banyak artikel (root Android 16, Magisk vs KernelSU, HyperOS root, UBL Xiaomi via Mi Account) dan halaman layanan jasa root.
- Kekuatan: volume artikel tinggi, banyak artikel informasional yang cocok untuk cluster TechFix.
- Gap bagi TechFix: artikel informasional TechFix belum banyak. Ada 28 guide di newGuides.ts/guides.ts, tapi 25 belum tertaut dari halaman lain (orphan).
- Hal yang dihindari: klaim "UBL 3 hari tanpa tunggu" yang belum tentu benar untuk semua model. TechFix tidak boleh membuat klaim seperti ini tanpa sumber resmi.

### ombob.eu.org (Ombob Opreker)
- Jenis: halaman layanan root online dengan daftar merek yang didukung.
- Kekuatan: penjelasan UBL Xiaomi dan Infinix (dengan catatan MediaTek vs Unisoc, dan 3/7 hari tunggu). Ini informasi teknis yang berguna.
- Gap bagi TechFix: TechFix bisa menyusun tabel kompatibilitas per merek yang lebih jelas. Harus diverifikasi dulu dengan sumber resmi atau pengujian nyata.
- Hal yang dihindari: menyebut "almost all models supported" tanpa daftar model.

### buanaservice.id/root/ dan adhieweb.com (Depok)
- Jenis: halaman layanan root multi-merek, berbasis lokasi.
- Gap bagi TechFix: struktur halaman layanan per merek. TechFix sudah punya ruang untuk ini di /services/root-android.
- Lokasi: TechFix tidak punya layanan Depok. Jangan meniru keyword lokasi. Hanya Rangkasbitung yang sah.

### Marketplace (Shopee, Tokopedia)
- Jenis: listing produk jasa, rating dari pembeli.
- Gap bagi TechFix: TIDAK DIIKUTI. TechFix tidak memakai schema rating buatan. Listing marketplace menang di intent transaksional cepat, dan TechFix bisa menang di kejelasan proses dan transparansi.

## Gap matrix

Kolom: Keyword | URL TechFix | URL pesaing | Intent | Gap | Tindakan | Prioritas

| Keyword | URL TechFix | URL pesaing | Intent | Gap yang ditemukan | Tindakan | Prioritas |
|---|---|---|---|---|---|---|
| jasa root android | /services/root-android (belum diverifikasi di SERP; homepage yang muncul di posisi 6) | jasaroot.my.id, oprekmania.com/jasa-root-hp-android/, buanaservice.id/root/ | Transaksional | Homepage TechFix yang muncul, bukan halaman layanan. Keyword bercampur dengan merek lain di title/H1 | Fokuskan /services/root-android sebagai halaman utama; homepage tidak menargetkan keyword ini | Tinggi |
| jasa custom rom | /services/custom-rom | Marketplace, oprekmania.com/jasa-custom-rom-android/ | Transaksional | Halaman layanan ada, belum diverifikasi di SERP | Audit title, H1, dan isi halaman layanan | Tinggi |
| jasa unlock bootloader | /services/unlock-bootloader | ombob.eu.org, ncunlock.com (referensi, bukan lokal) | Transaksional | Informasi UBL per merek belum jelas di halaman; Xiaomi menunggu 3/7 hari dan batasan kuota | Tulis penjelasan proses dan syarat per merek, tanpa klaim waktu pasti | Tinggi |
| jasa flash HP | /services/flash-firmware | oprekmania.com (artikel flash), marketplace | Transaksional | Belum diverifikasi | Audit halaman, tambah syarat firmware dan risiko data | Sedang |
| jasa unbrick Android | /services/unbrick | Marketplace, jasaroot.my.id | Transaksional | Belum diverifikasi | Audit halaman | Sedang |
| jasa memperbaiki bootloop | /services/fix-bootloop | jasaroot.my.id (bootlop) | Transaksional | Artikel bootloop ada (`cara-mengatasi-bootloop-tanpa-pc-apakah-bisa`, `perbedaan-bootloop-dan-soft-brick`); tautan dari halaman layanan belum dicek | Tautkan artikel bootloop ke /services/fix-bootloop | Sedang |
| jasa recovery Android | /services/recovery | Marketplace | Transaksional | Halaman ada, orphan dari footer sebelum fase FASE 1 | Pastikan masuk footer dan internal link | Sedang |
| jasa root Xiaomi / Redmi / POCO | /services/root-android (sebagai bagian merek) | ombob.eu.org, buanaservice.id | Transaksional merek | Belum ada informasi per merek yang terverifikasi | Tabel kompatibilitas per merek di /services/root-android; halaman model hanya jika data unik ada | Sedang |
| jasa root Samsung / Realme / OPPO / Infinix | /services/root-android | oprekmania, ombob.eu.org | Transaksional merek | Sama dengan di atas. Samsung Knox, Realme/OPPO, Infinix MTK vs Unisoc belum terverifikasi | Sama dengan di atas | Sedang |
| cara root Android | artikel root terkait | oprekmania.com (Panduan Root Android 16) | Informasional | Artikel root dan risiko ada, perlu audit isi | Audit artikel, pastikan jawaban langsung di paragraf awal | Sedang |
| perbedaan Magisk KernelSU APatch | /guides/magisk-vs-kernelsu-vs-apatch-perbandingan-root-modern | oprekmania.com/magisk-vs-kernelsu-mana-yang-lebih-baik-untuk-modding-android/ | Informasional | Artikel TechFix sudah ada, tapi tautannya belum dicek. Shamiko disebut di artikel terkait | Audit isi; hapus bagian yang membantu bypass deteksi | Sedang |
| risiko root Android | /guides/apakah-root-android-aman | Artikel oprekmania | Informasional | Artikel ada | Audit klaim absolut | Sedang |
| HP bootloop setelah root | /guides/apa-penyebab-hp-android-stuck-di-logo | jasaroot.my.id | Informasional | Belum terverifikasi | Hubungkan ke /services/fix-bootloop | Sedang |
| risiko custom ROM | /guides/custom-rom-manfaat-risiko-panduan | Tidak ada pesaing jelas di SERP | Informasional | Gap konten: belum diperiksa | Tulis ulang jika perlu | Rendah |
| kenapa aplikasi m-banking terdeteksi root | /guides/kenapa-aplikasi-m-banking-terdeteksi-root-dan-cara-atasinya | tukangroot.com (bypass deteksi) | Informasional | Konten lama berisi resep Shamiko/DenyList. Harus dihapus dari versi terbaru | Tulis penjelasan jujur (sudah ada di WIP, perlu verifikasi) | Tinggi (kepatuhan) |
| biaya jasa root Android | /services/root-android | Marketplace, jasaroot.my.id | Komersial | Tidak ada harga nyata | Tambah placeholder [ISI_DATA_NYATA: harga per merek/paket]. Jangan mengarang | Tinggi |

## Pengelompokan peluang

**Quick wins** (halaman sudah relevan, perbaikan kecil):
- /services/root-android: pastikan jadi halaman utama keyword root; homepage tidak bersaing dengannya.
- /services/unlock-bootloader: tambah penjelasan proses dan syarat per merek.
- Tautkan artikel bootloop ke /services/fix-bootloop.

**Content gaps** (pertanyaan belum dijawab dengan baik):
- Kompatibilitas per merek yang jujur, dengan tanggal verifikasi.
- Perbedaan UBL Xiaomi (menunggu, kuota) dan Infinix MTK vs Unisoc. Harus diverifikasi sebelum ditulis.
- Biaya dan faktor penentu biaya, tanpa angka karangan.

**Technical gaps:**
- Homepage title dan description masih panjang (72 dan 160 karakter, per audit FASE 0).
- 25 guide orphan.
- Meta keywords masih ada (perlu hapus).

**Commercial gaps:**
- Tidak ada harga nyata. Harus diisi pemilik.
- CTA WhatsApp perlu dicek di tiap halaman layanan.
- Tidak ada seksi proses kerja di halaman layanan utama (perlu audit).

**Authority gaps:**
- Tidak ada nama teknisi, pengalaman, atau dokumentasi kerja nyata di repo. Harus disediakan pemilik.
- Testimoni belum ada. Hanya boleh pakai testimoni asli dengan izin.
- Kompetitor oprekmania dan ombob punya volume artikel dan nama brand yang lebih dikenal.

**Device-specific opportunities:**
- Halaman model hanya dibuat jika data unik ada (chipset, status root, syarat UBL, firmware dasar, tanggal verifikasi). Sampai data itu ada, tidak ada halaman model baru.

## Yang sengaja TIDAK diikuti

- Konten bypass mock location, Smali Patcher, Fake GPS systemless, dan bypass deteksi aplikasi ojol, absensi, atau m-banking (tukangroot, jasaroot).
- Keyword lokasi yang layanannya tidak nyata: Pamulang, Cinere, Depok, Lebak, Banten luas, kota lain. Rangkasbitung DIIZINKAN karena lokasi fisik memang di sana. Tetap satu halaman, tanpa halaman per kota.
- Klaim "UBL 3 hari" tanpa sumber resmi (oprekmania).
- Schema rating buatan dan review marketplace.

## Yang masih dibutuhkan

- Akses Google Search Console (posisi, impresi, CTR 3 bulan).
- Tool keyword yang bisa diakses untuk volume dan difficulty (saat ini tidak ada).
- Harga, nama teknisi, pengalaman, dan dokumentasi kerja nyata.
- Verifikasi kompatibilitas per merek dari sumber resmi atau pengujian nyata.
- Area layanan sudah dikonfirmasi: remote seluruh Indonesia + lokasi fisik Rangkasbitung. Sisa yang dibutuhkan: bentuk layanan lokal (tatap muka/kunjungan/ambil-unit) dan [ISI_DATA_NYATA: alamat] kalau mau ditampilkan.
