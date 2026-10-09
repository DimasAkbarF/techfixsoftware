import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, CheckCircle2, ArrowRight, Laptop } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { hasWhatsapp, whatsappLink } from "@/config/site";
import { buildConsultationMessage } from "@/lib/contact";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Cara Kerja Jasa Service HP Android Remote",
  description:
    "Pelajari 6 langkah mudah service HP Android remote via AnyDesk: dari diagnosis gratis, persetujuan risiko, eksekusi aman, hingga beres. Cek alur kerjanya!",
  path: "/how-it-works",
});

const steps = [
  {
    number: "01",
    title: "Registrasi & Riwayat Gejala",
    description:
      "Penyampaian informasi merek, tipe model, gejala sistem yang muncul, dan kronologi awal kejadian kepada teknisi.",
  },
  {
    number: "02",
    title: "Verifikasi Kelayakan Sistem",
    description:
      "Teknisi memverifikasi varian model teknis, arsitektur chipset SoC, status bootloader, dan ketersediaan firmware resmi.",
  },
  {
    number: "03",
    title: "Evaluasi Opsi & Analisis Risiko",
    description:
      "Kami paparkan opsi tindakan terbaik, peluang pemulihan, transparansi risiko terhadap data, estimasi durasi, dan biaya secara terbuka.",
  },
  {
    number: "04",
    title: "Persetujuan Prosedur (Consent)",
    description:
      "Anda memiliki kendali penuh untuk menyetujui atau menunda tindakan sebelum proses pengerjaan teknis dimulai.",
  },
  {
    number: "05",
    title: "Eksekusi Penanganan Terarah",
    description:
      "Penanganan teknis dijalankan secara bertahap dan teratur (remote asistensi via AnyDesk terenkripsi jika memenuhi kualifikasi).",
  },
  {
    number: "06",
    title: "Validasi Hasil & Uji Fungsi",
    description:
      "Kami memverifikasi perangkat kembali berjalan stabil dan memberikan rekomendasi pemeliharaan agar masalah tidak berulang.",
  },
];

const prepareItems = [
  "Merek dan nomor model spesifik perangkat Anda.",
  "Kronologi kejadian (apakah setelah update OTA, gagal flash mandiri, atau crash tiba-tiba).",
  "PC / laptop dengan sistem Windows dan akses internet stabil bila butuh remote.",
  "Kabel USB berkualitas untuk sambungan data ke komputer.",
  "Kesiapan memahami bahwa pemulihan software memprioritaskan fungsi sistem perangkat.",
];

export default function HowItWorksPage() {
  const isWa = hasWhatsapp();
  const waHref = isWa ? whatsappLink(buildConsultationMessage()) : null;

  return (
    <div className="container-page py-10 md:py-16">
      <Breadcrumbs items={[{ label: "Cara Kerja" }]} />

      <SectionHeading
        as="h1"
        eyebrow="Standar Operasional Layanan"
        title="Bagaimana Layanan TechFix Software Bekerja"
        description="Pendekatan diagnostik terstruktur untuk memastikan kepastian prosedur, keamanan sistem, dan transparansi penuh bagi setiap pengguna."
      />

      {/* 6 Steps Grid */}
      <section aria-labelledby="steps-heading" className="mt-8 md:mt-10">
        <h2 id="steps-heading" className="sr-only">
          Enam langkah alur kerja
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col justify-between rounded-lg border border-border bg-card p-6 shadow-xs"
            >
              <div>
                <span className="font-mono text-xl font-bold text-accent">
                  {step.number}
                </span>
                <h3 className="mt-2 text-base font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Preparation Checklist */}
      <section aria-labelledby="prepare-heading" className="mt-14 rounded-lg border border-border bg-card p-6 sm:p-8">
        <h2 id="prepare-heading" className="text-lg sm:text-xl font-bold tracking-tight text-foreground">
          Hal yang Perlu Disiapkan Sebelum Berkonsultasi
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
          Menyiapkan poin-poin berikut membantu teknisi menganalisis respon unit lebih cepat:
        </p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {prepareItems.map((item, index) => (
            <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Scope boundaries — honest expectations before the consultation */}
      <section aria-labelledby="scope-heading" className="mt-14">
        <h2 id="scope-heading" className="text-lg sm:text-xl font-bold tracking-tight text-foreground">
          Batas Layanan yang Perlu Anda Ketahui
        </h2>
        <p className="mt-1 max-w-3xl text-xs sm:text-sm text-muted-foreground">
          Teknisi kami menangani sisi software perangkat. Keluhan yang masuk kategori kedua kami
          sampaikan sejak awal agar waktu Anda tidak terbuang.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-5">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-success">
              <CheckCircle2 className="size-4" />
              Yang Bisa Kami Kerjakan
            </p>
            <ul className="mt-3 space-y-2">
              {["Perangkat yang masih menyala, termasuk yang tersangkut di logo boot.", "Gangguan software: update gagal, sistem error, penyimpanan penuh.", "Root, bootloader, recovery, dan custom ROM pada perangkat yang kompatibel.", "Remote support dengan persetujuan Anda di setiap sesi."].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-xs sm:text-sm leading-relaxed text-foreground"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-success" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-card p-5">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              <AlertTriangle className="size-4" />
              Yang Harus Menuju Service Center
            </p>
            <ul className="mt-3 space-y-2">
              {["Kerusakan hardware: layar, baterai, tombol power, port pengisi daya.", "Perangkat mati total tanpa indikasi masalah software.", "Perangkat terkena air atau terjatuh dengan kerusakan fisik.", "Penggantian komponen fisik seperti kamera atau sensor."].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-xs sm:text-sm leading-relaxed text-foreground"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-slate-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Remote Support Callout */}
      <div className="mt-8 rounded-lg border border-accent/20 bg-accent-subtle/40 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-white">
            <Laptop className="size-5" />
          </span>
          <div>
            <h3 className="text-sm font-bold text-foreground">
              Ingin tahu lebih detail cara kerja sesi AnyDesk?
            </h3>
            <p className="text-xs text-muted-foreground">
              Baca panduan keamanan remote, syarat perangkat, dan cara menghentikan sesi kapan saja.
            </p>
          </div>
        </div>

        <Link
          href="/remote-guide"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground hover:border-accent hover:text-accent transition-colors"
        >
          <span>Panduan Remote Lengkap</span>
          <ArrowRight className="size-3.5" />
        </Link>
      </div>

      {/* Final Consultation Action */}
      <section className="mt-14 rounded-lg bg-primary p-8 text-center text-primary-foreground sm:p-12">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/90 mb-3">
          <span className="size-1.5 rounded-full bg-accent" />
          <span>Langkah Pertama Dimulai dari Anda</span>
        </p>

        <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl">
          Siap menjelaskan kondisi perangkat Anda?
        </h2>

        <p className="mx-auto mt-2 max-w-lg text-xs sm:text-sm text-white/80 leading-relaxed">
          Hubungi kami via WhatsApp resmi untuk konsultasi gratis tanpa kewajiban menggunakan jasa perbaikan.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          {waHref ? (
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-whatsapp px-6 text-sm font-semibold text-whatsapp-foreground shadow-sm hover:brightness-95 transition-all cursor-pointer"
            >
              <WhatsAppIcon className="size-4 shrink-0" />
              <span>Konsultasi Gratis via WhatsApp</span>
            </a>
          ) : (
            <Link
              href="/contact"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-white px-6 text-sm font-semibold text-primary hover:bg-white/90 transition-colors cursor-pointer"
            >
              <span>Hubungi CS TechFix</span>
            </Link>
          )}

          <Link
            href="/services"
            className="inline-flex h-11 items-center gap-1.5 rounded-md border border-white/20 bg-white/5 px-5 text-sm font-medium text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <span>Lihat Daftar Layanan</span>
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}