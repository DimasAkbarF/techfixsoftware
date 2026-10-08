import type { Metadata } from "next";
import Link from "next/link";
import {
  Target,
  ShieldCheck,
  MessageSquareText,
  CalendarClock,
  BadgeCheck,
  ShieldAlert,
  Wrench,
  Users,
  Lock,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Tentang TechFix Software",
  description:
    "TechFix Software: spesialis technical support Android sejak 2025 dengan konsultasi manusia, pengecekan kompatibilitas, dan transparansi risiko.",
  path: "/about",
  keywords: [
    "tentang techfix software",
    "profil teknisi android",
    "jasa teknisi software indonesia",
    "layanan remote android",
  ],
});

const values = [
  {
    icon: Target,
    title: "Pemahaman di Atas Transaksi",
    description:
      "Kami memastikan Anda memahami akar masalah perangkat dan opsi yang tersedia sebelum deal, bukan sekadar mengejar transaksi cepat.",
  },
  {
    icon: ShieldCheck,
    title: "Kejujuran Mutlak Soal Risiko",
    description:
      "Tidak ada janji palsu 100% tanpa risiko. Dampak terhadap data, garansi pabrik, dan batas kemampuan software dijelaskan terbuka.",
  },
  {
    icon: MessageSquareText,
    title: "Konsultasi Manusia Spesialis",
    description:
      "Kondisi perangkat Anda diteliti oleh teknisi manusia yang memahami arsitektur Android — bukan bot penjawab otomatis.",
  },
  {
    icon: Lock,
    title: "Keamanan & Privasi Data",
    description:
      "Kami tidak pernah meminta data pribadi sensitif seperti kata sandi atau kode OTP. Sesi remote dipantau langsung di layar PC Anda.",
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
        <div className="rounded-xl border border-border bg-card p-6 shadow-xs">
          <span className="inline-flex size-10 items-center justify-center rounded-md bg-accent-subtle text-accent" aria-hidden="true">
            <CalendarClock className="size-5" />
          </span>
          <h2 className="mt-3 text-xl font-bold tracking-tight text-foreground">
            Dimulai Sejak 2025
          </h2>
          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
            TechFix Software beroperasi sejak 2025 dengan fokus spesifik: menjadi mitra teknis yang memberikan solusi software Android secara rasional, realistis, dan berorientasi pada keamanan perangkat.
          </p>

          <div className="mt-6 border-t border-border/80 pt-4 space-y-2 text-xs text-foreground/80 font-medium">
            <div className="flex items-center gap-2">
              <Wrench className="size-3.5 text-accent" />
              <span>Spesialis Software: Bootloop, Root, ROM, Firmware</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="size-3.5 text-accent" />
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

      {/* Values Grid */}
      <div className="mt-14">
        <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl text-center">
          Empat Pilar Filosofi Layanan Kami
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.title} className="rounded-xl border border-border bg-card p-5 shadow-xs">
              <span className="flex size-10 items-center justify-center rounded-md bg-accent-subtle text-accent" aria-hidden="true">
                <value.icon className="size-5" />
              </span>
              <h3 className="mt-3.5 text-sm font-bold text-foreground">{value.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Security Advisory & Verification */}
      <section
        aria-labelledby="security-story-heading"
        className="mt-14 rounded-2xl border border-border bg-card p-6 sm:p-8 md:p-10 shadow-xs"
      >
        <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:gap-10">
          <div>
            <span className="inline-flex size-10 items-center justify-center rounded-md bg-accent-subtle text-accent" aria-hidden="true">
              <BadgeCheck className="size-5" />
            </span>
            <h2 id="security-story-heading" className="mt-3 text-xl font-bold tracking-tight text-foreground">
              Transparansi &amp; Keamanan Kanal
            </h2>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
              Bagi kami, kepercayaan dibangun dari keterbukaan. Kami secara konsisten melindungi pengunjung dari risiko penipuan digital yang mengatasnamakan layanan teknis.
            </p>

            {siteConfig.telegramUrl && (
              <div className="mt-5 rounded-lg border border-warning/30 bg-warning/5 p-4">
                <h3 className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                  <ShieldAlert className="size-4 shrink-0 text-warning" aria-hidden="true" />
                  Kanal Resmi Telegram Saat Ini
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  Kanal resmi kami saat ini beralamat di{" "}
                  <a
                    href={siteConfig.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="font-semibold text-accent underline break-all"
                  >
                    {siteConfig.telegramUrl}
                  </a>
                  . Harap selalu memverifikasi tautan kontak sebelum bertransaksi.
                </p>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3 rounded-lg border-l-4 border-accent bg-accent-subtle/50 p-4">
              <BadgeCheck className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <h3 className="text-sm font-bold text-foreground">
                  Domain Tunggal Resmi
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Situs resmi TechFix Software hanya satu, yaitu <strong>techfixsoftware.my.id</strong>. Kami tidak mengoperasikan situs web lain. Transaksi dan koordinasi hanya diproses melalui nomor WhatsApp resmi yang tercantum di web ini.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-accent bg-accent-subtle/50 p-4">
              <BadgeCheck className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <h3 className="text-sm font-bold text-foreground">
                  Privasi &amp; Tanpa Akses Kredensial Pribadi
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Kami tidak pernah meminta PIN layar, kata sandi akun Google/email, maupun kode verifikasi OTP. Pada sesi remote via AnyDesk, Anda memegang kendali penuh untuk menghentikan koneksi kapan pun.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-14 rounded-2xl bg-primary p-8 text-center text-primary-foreground sm:p-12">
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