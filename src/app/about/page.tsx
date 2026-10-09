import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Tentang Kami — Teknisi Software Android",
  description:
    "Mengenal TechFix Software: spesialis perbaikan software Android remote di Indonesia sejak 2025 dengan garansi aman, jujur, & transparan. Pelajari profil kami!",
  path: "/about",
});

const values = [
  {
    number: "01",
    title: "Diagnosis Akurat Berbasis Bukti",
    description:
      "Kami memastikan akar masalah partisi teridentifikasi secara presisi sebelum menetapkan opsi penanganan teknis.",
  },
  {
    number: "02",
    title: "Objektivitas & Transparansi Risiko",
    description:
      "Penilaian objektif mengenai rasio keberhasilan, dampak terhadap partisi data, dan batas kemampuan pemulihan software.",
  },
  {
    number: "03",
    title: "Spesialis Rekayasa Android",
    description:
      "Penanganan dikerjakan langsung oleh teknisi spesialis yang menguasai arsitektur bootloader, chipset SoC, dan struktur partisi.",
  },
  {
    number: "04",
    title: "Integritas & Privasi Data",
    description:
      "Prosedur kerja yang ketat tanpa pernah meminta akses data pribadi sensitif. Sesi remote diawasi langsung di monitor Anda.",
  },
];

export default function AboutPage() {
  return (
    <div className="container-page py-10 md:py-16">
      <Breadcrumbs items={[{ label: "Tentang Kami" }]} />

      <SectionHeading
        as="h1"
        eyebrow="Tentang TechFix Software"
        title="Layanan Teknis Android yang Jujur, Transparan, dan Terarah"
        description="Beroperasi sejak 2025 untuk membantu pengguna Android di Indonesia memahami dan memulihkan masalah perangkat dengan bimbingan teknisi spesialis."
      />

      {/* Brand Story Grid */}
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-start">
        <div className="rounded-lg border border-border bg-card p-6 shadow-xs">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            <span className="size-1.5 rounded-full bg-accent" />
            Operasional Resmi
          </p>
          <h2 className="mt-3 text-xl font-bold tracking-tight text-foreground">
            Rekam Jejak Sejak 2025
          </h2>
          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
            TechFix Software beroperasi sejak 2025 dengan fokus spesifik: menjadi mitra teknis yang memberikan solusi software Android secara rasional, realistis, dan berorientasi pada keamanan perangkat.
          </p>

          <div className="mt-6 border-t border-border/80 pt-4 space-y-2 text-xs text-foreground/80 font-medium">
            <div className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-accent shrink-0" />
              <span>Spesialis Software: Bootloop, Root, ROM, Firmware</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-accent shrink-0" />
              <span>Melayani Pengguna Android di Seluruh Indonesia</span>
            </div>
          </div>
        </div>

        {/* Narrative & Philosophy */}
        <div className="space-y-5 text-sm sm:text-base leading-relaxed text-foreground">
          <p>
            Banyak pemilik perangkat Android menghadapi situasi rumit saat ponsel mereka tiba-tiba berhenti di logo (bootloop), mati setelah update, atau saat ingin melakukan modifikasi seperti root dan custom ROM. Di internet, informasi yang beredar kerap membingungkan, tautan file berisiko malware, atau banyak teknisi yang memberikan janji manis tanpa menjelaskan potensi data terhapus.
          </p>
          <p>
            <strong>TechFix Software hadir untuk mengubah pengalaman itu.</strong> Filosofi kami sederhana: <em>Diagnosis yang benar harus mendahului tindakan apa pun</em>. Kami tidak pernah menyuruh pelanggan langsung melakukan flashing sebelum varian nomor model, versi chipset, dan status bootloader diperiksa secara teliti.
          </p>
          <p>
            Jika ponsel Anda masih bisa diselamatkan tanpa menghapus data, kami akan mengupayakan opsi tersebut. Namun jika kerusakan software mengharuskan clean flash pabrik, kami akan menyampaikannya secara jujur di depan agar Anda dapat mengambil keputusan dengan tenang.
          </p>
        </div>
      </div>

      {/* Profil Tim Teknisi Spesialis (E-E-A-T Sinyal Teknis) */}
      <section
        aria-labelledby="technician-profile-heading"
        className="mt-14 rounded-lg border border-border bg-card p-6 sm:p-8 md:p-10 shadow-xs"
      >
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            <span className="size-1.5 rounded-full bg-accent" />
            Profil Teknis &amp; Otoritas Keahlian
          </p>
          <h2 id="technician-profile-heading" className="mt-3 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            Tim Teknisi Spesialis TechFix Software
          </h2>
          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
            Penanganan teknis di TechFix Software dikelola langsung oleh tim teknisi spesialis rekayasa software Android yang beroperasi sejak 2025 dengan fokus kompetensi tingkat rendah (low-level systems):
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-border bg-muted/30 p-5">
            <h3 className="text-sm font-bold text-foreground">
              Arsitektur Partisi Android
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
              Penguasaan mendalam atas skema partisi modern: Seamless Updates A/B, Virtual A/B (VAB), dan logical dynamic partitions (super.img) pada Android 10 hingga Android 15.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-muted/30 p-5">
            <h3 className="text-sm font-bold text-foreground">
              Protokol Darurat Hardware SoC
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
              Keahlian penanganan komunikasi darurat chipset: Qualcomm Emergency Download (EDL 9008 via Sahara/Firehose), MediaTek Boot ROM (BROM &amp; SLA/DAA bypass), dan Samsung Odin Protocol.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-muted/30 p-5">
            <h3 className="text-sm font-bold text-foreground">
              Kernel Patching &amp; Modifikasi Aman
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
              Implementasi root modern systemless: Magisk, KernelSU berbasis kernel GKI, dan APatch, disertai penyetelan modul Zygisk, Shamiko, dan Play Integrity API.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-accent/25 bg-accent-subtle/30 p-4 sm:p-5">
          <p className="text-xs sm:text-sm font-semibold text-foreground">
            Komitmen Integritas: Tanpa Akses Kredensial Pribadi (Zero Credential Policy)
          </p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            Kami tidak pernah meminta PIN layar kunci, kata sandi email, akun Google, maupun kode OTP perbankan. Seluruh proses triage teknis berjalan secara remote transparan via AnyDesk di mana Anda dapat memantau setiap baris perintah di layar monitor Anda sendiri.
          </p>
        </div>
      </section>

      {/* Values Grid */}
      <div className="mt-14">
        <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl text-center">
          Empat Pilar Filosofi Layanan Kami
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.title} className="rounded-lg border border-border bg-card p-5 shadow-xs transition-colors hover:border-accent">
              <span className="font-mono text-xs font-bold tracking-wider text-accent">
                [{value.number}]
              </span>
              <h3 className="mt-3 text-sm font-bold text-foreground">{value.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Security Advisory & Verification */}
      <section
        aria-labelledby="security-story-heading"
        className="mt-14 rounded-lg border border-border bg-card p-6 sm:p-8 md:p-10 shadow-xs"
      >
        <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:gap-10">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              <span className="size-1.5 rounded-full bg-accent" />
              Integritas &amp; Verifikasi Kanal
            </p>
            <h2 id="security-story-heading" className="mt-3 text-xl font-bold tracking-tight text-foreground">
              Transparansi &amp; Keamanan Kanal
            </h2>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
              Bagi kami, kepercayaan dibangun dari keterbukaan. Kami secara konsisten melindungi pengguna dengan mempublikasikan kanal resmi terverifikasi.
            </p>

            {siteConfig.telegramUrl && (
              <div className="mt-5 rounded-lg border border-border bg-muted/40 p-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                  Kanal Resmi Telegram
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  Akses informasi dan update teknis kami beralamat resmi di{" "}
                  <a
                    href={siteConfig.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="font-semibold text-telegram hover:underline break-all"
                  >
                    {siteConfig.telegramUrl}
                  </a>
                  .
                </p>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border-l-4 border-accent bg-accent-subtle/50 p-4">
              <h3 className="text-sm font-bold text-foreground">
                Domain Tunggal Resmi
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Situs resmi TechFix Software hanya beralamat di <strong>techfixsoftware.my.id</strong>. Seluruh proses triage teknis dan koordinasi hanya diproses melalui kontak resmi yang tercantum di web ini.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-accent bg-accent-subtle/50 p-4">
              <h3 className="text-sm font-bold text-foreground">
                Privasi &amp; Zero Credential Access
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Kami tidak pernah meminta PIN layar, kata sandi akun Google/email, maupun kode verifikasi OTP. Pada sesi remote via AnyDesk, Anda memegang kendali penuh untuk menghentikan koneksi kapan pun.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-14 rounded-lg bg-primary p-8 text-center text-primary-foreground sm:p-12">
        <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl">
          Ingin mendiskusikan kondisi perangkat Anda?
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-xs sm:text-sm text-white/80 leading-relaxed">
          Hubungi teknisi kami melalui WhatsApp resmi. Konsultasi gratis tanpa keharusan atau paksaan untuk langsung melakukan perbaikan.
        </p>
        <div className="mt-6 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-md bg-white px-6 text-sm font-semibold text-primary shadow-md hover:bg-white/90 transition-colors cursor-pointer"
          >
            Konsultasikan Masalah Anda Sekarang
          </Link>
        </div>
      </section>
    </div>
  );
}