import type { Metadata } from "next";
import Link from "next/link";
import { Target, ShieldCheck, MessageSquareText, GitBranch, CalendarClock, BadgeCheck, ShieldAlert } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Tentang Kami",
  description:
    "TechFix Software — layanan teknis Android yang dimulai sejak 2025 dengan pendekatan konsultasi manusia, kejujuran soal risiko, dan keamanan komunikasi.",
  path: "/about",
});

const values = [
  {
    icon: Target,
    title: "Pemahaman di atas transaksi",
    description:
      "Kami mengoptimalkan pemahaman masalah Anda sebelum deal, bukan sekadar mengejar checkout.",
  },
  {
    icon: ShieldCheck,
    title: "Kejujuran soal risiko",
    description:
      "Tidak ada jaminan palsu. Semua risiko dan keterbatasan dibahas secara terbuka.",
  },
  {
    icon: MessageSquareText,
    title: "Konsultasi manusia",
    description:
      "Setiap kondisi perangkat dinilai oleh CS manusia — bukan algoritma yang menebak.",
  },
  {
    icon: GitBranch,
    title: "Siap berkembang",
    description:
      "Arsitektur data dirancang agar bisa bertumbuh menjadi pasar multi-teknisi tanpa rombak total.",
  },
];

export default function AboutPage() {
  return (
    <div className="container-page py-12 md:py-16">
      <Breadcrumbs items={[{ label: "Tentang Kami" }]} />
      <SectionHeading as="h1"
        eyebrow="Tentang Kami"
        title="Layanan teknis Android yang jujur dan terarah"
        description="Kami hadir sejak 2025 untuk membantu pemilik perangkat Android memahami masalahnya sebelum mengambil keputusan."
      />

      {/* Cerita kami */}
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div>
          <span className="inline-flex size-10 items-center justify-center rounded-md bg-accent/10 text-accent" aria-hidden="true">
            <CalendarClock className="size-5" />
          </span>
          <h2 className="mt-3 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            Mulai tahun 2025
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Kami memulai layanan teknis Android pada tahun 2025 dan terus
            berfokus pada satu hal: membantu Anda memahami kondisi perangkat
            sebelum melanjutkan.
          </p>
        </div>

        <div className="space-y-6 text-base leading-relaxed text-foreground md:text-lg">
          <p>
            Banyak pemilik perangkat Android kesulitan karena tidak tahu layanan apa
            yang mereka butuhkan, tidak mengerti istilah teknis, dan tidak yakin apakah
            perangkat mereka bisa ditangani. Kami hadir untuk menjawab tiga masalah itu:
            dengan informasi yang jelas, persyaratan yang terbuka, dan konsultasi langsung
            bersama CS manusia sebelum ada keputusan.
          </p>
          <p>
            Anda bisa menjelajahi kategori, mencari berdasarkan gejala, membaca detail
            setiap layanan beserta persyaratan dan risikonya, lalu berbicara langsung
            dengan tim kami. Proses eksekusi disepakati setelah konsultasi — bukan
            dipaksakan melalui keranjang belanja.
          </p>
          <p>
            Saat ini seluruh layanan ditangani oleh tim kami secara langsung. Struktur
            platform dirancang agar kelak dapat berkembang menjadi pasar multi-teknisi
            tanpa mengubah pengalaman pelanggan secara mendasar.
          </p>
        </div>
      </div>

      {/* Nilai */}
      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {values.map((value) => (
          <div key={value.title} className="rounded-lg border border-border bg-card p-6">
            <span className="mb-4 flex size-10 items-center justify-center rounded-md bg-accent/10 text-accent" aria-hidden="true">
              <value.icon className="size-5" />
            </span>
            <h2 className="text-lg font-semibold text-foreground">{value.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
          </div>
        ))}
      </div>

      {/* Testimoni & transparansi */}
      <section
        aria-labelledby="testimonial-heading"
        className="mt-14 rounded-xl border border-border bg-card p-6 md:p-10"
      >
        <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:gap-10">
          <div>
            <span className="inline-flex size-10 items-center justify-center rounded-md bg-accent/10 text-accent" aria-hidden="true">
              <BadgeCheck className="size-5" />
            </span>
            <h2 id="testimonial-heading" className="mt-3 text-xl font-bold tracking-tight text-foreground">
              Testimoni &amp; transparansi
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Sejak mulai beroperasi pada 2025, kami mengumpulkan testimoni dari pelanggan
              sebagai bentuk transparansi layanan.
            </p>

            {siteConfig.telegramUrl ? (
              <div className="mt-6 rounded-lg border border-warning/30 bg-warning/5 p-4">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <ShieldAlert className="size-4 shrink-0 text-warning" aria-hidden="true" />
                  Catatan keamanan — kanal Telegram
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  Kanal Telegram kami sebelumnya pernah disusupi oleh pihak yang tidak
                  bertanggung jawab. Anda tetap bisa membuka kanal tersebut di{" "}
                  <a
                    href={siteConfig.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="font-medium text-accent underline underline-offset-2 transition-colors hover:text-accent-hover cursor-pointer"
                  >
                    t.me/TechFixSoftware
                  </a>{" "}
                  untuk melihat, tetapi mohon berhati-hati dan hanya mempercayai informasi
                  dari saluran resmi yang tertera di situs ini.
                </p>
              </div>
            ) : null}
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3 rounded-lg border-l-4 border-warning bg-warning/5 p-5">
              <ShieldAlert className="mt-0.5 size-5 shrink-0 text-warning" aria-hidden="true" />
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  Saluran testimoni sebelumnya pernah diretas
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  Sayangnya, saluran testimoni kami sebelumnya pernah disusupi oleh pihak
                  yang tidak bertanggung jawab. Demi melindungi Anda dari informasi yang
                  tidak valid, saat ini kami sementara tidak menautkan saluran tersebut
                  dan sedang menyiapkan kanal yang lebih aman untuk menampilkannya kembali.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-accent bg-accent-subtle/60 p-5">
              <BadgeCheck className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  Saluran resmi tetap satu-satunya yang sah
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  Selalu pastikan Anda berkomunikasi hanya melalui kanal resmi kami:
                  WhatsApp dan Telegram yang tertera di situs ini. Kami tidak pernah
                  meminta data perbankan, OTP, atau mengarahkan transaksi di luar kanal
                  resmi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-14">
        <div className="rounded-xl bg-primary p-8 text-center text-primary-foreground md:p-12">
          <h2 className="text-xl font-bold tracking-tight text-white md:text-2xl">
            Ada pertanyaan tentang layanan kami?
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-base text-white/80">
            Hubungi tim kami melalui kanal resmi. Konsultasi gratis tanpa tekanan untuk melanjutkan.
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-md bg-white px-6 text-sm font-semibold text-primary shadow-lg shadow-black/10 transition-all hover:bg-white/90 cursor-pointer"
            >
              Hubungi Tim Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}