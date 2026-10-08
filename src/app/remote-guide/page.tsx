import type { Metadata } from "next";
import Link from "next/link";
import {
  Download,
  Monitor,
  ExternalLink,
  ShieldAlert,
  CheckCircle2,
  XCircle,
  Lock,
  PowerOff,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { siteConfig, hasWhatsapp, whatsappLink } from "@/config/site";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildConsultationMessage } from "@/lib/contact";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Panduan Remote Support AnyDesk",
  description:
    "Panduan resmi sesi remote support teknis Android TechFix Software: persyaratan AnyDesk, protokol keamanan data, hak menghentikan sesi, dan tata cara koneksi.",
  path: "/remote-guide",
  keywords: [
    "panduan remote anydesk",
    "remote support android",
    "service hp jarak jauh aman",
    "syarat anydesk service hp",
    "keamanan remote teknisi",
  ],
});

const requirements = [
  "PC atau laptop bersistem operasi Windows (Windows 10/11 direkomendasikan).",
  "Koneksi internet yang stabil untuk mengunduh firmware dan memfasilitasi sesi remote.",
  "Kabel data USB yang baik (kabel original bawaan HP sangat dianjurkan).",
  "Daya baterai perangkat Android terisi minimal 50% atau tersambung pengisi daya.",
  "Aplikasi AnyDesk resmi yang diunduh langsung dari situs anydesk.com.",
];

const safetyRules = [
  {
    title: "Anda Memegang Kontrol Penuh",
    desc: "Layar komputer dapat Anda lihat secara langsung selama proses berlangsung. Anda bisa menggerakkan mouse atau menutup koneksi kapan pun.",
  },
  {
    title: "Tanpa Akses Data Sensitif",
    desc: "Kami tidak pernah meminta kata sandi akun Google, PIN kunci layar, data perbankan, atau kode verifikasi OTP apa pun.",
  },
  {
    title: "Hak Menghentikan Sesi Seketika",
    desc: "Jika Anda merasa ragu atau tidak nyaman di tengah sesi, Anda berhak mencabut kabel USB atau menutup aplikasi AnyDesk secara instan.",
  },
  {
    title: "Hanya Lewat Kanal Resmi",
    desc: "Jangan pernah memberikan ID AnyDesk Anda kepada pihak yang menghubungi di luar kontak WhatsApp resmi yang tercantum di web ini.",
  },
];

const steps = [
  {
    number: "01",
    title: "Download AnyDesk Resmi",
    desc: "Unduh aplikasi AnyDesk gratis langsung dari situs resmi anydesk.com/en/downloads/windows.",
  },
  {
    number: "02",
    title: "Buka Aplikasi",
    desc: "Jalankan file AnyDesk (tanpa perlu install permanen). Catat 9–10 digit nomor 'Alamat Anda' (Session ID).",
  },
  {
    number: "03",
    title: "Kirim ID ke CS Resmi",
    desc: "Kirimkan digit ID tersebut hanya ke nomor WhatsApp resmi TechFix yang sedang melayani Anda.",
  },
  {
    number: "04",
    title: "Beri Izin (Accept)",
    desc: "Klik tombol 'Terima / Accept' saat muncul notifikasi sambungan masuk dari teknisi TechFix.",
  },
];

export default function RemoteGuidePage() {
  const isWa = hasWhatsapp();
  const waHref = isWa
    ? whatsappLink(
        buildConsultationMessage(
          undefined,
          "Halo, saya sudah membaca Panduan Remote dan ingin menanyakan apakah perangkat saya bisa ditangani via remote support.",
        ),
      )
    : null;

  return (
    <div className="container-page py-10 md:py-16">
      <Breadcrumbs items={[{ label: "Panduan Remote" }]} />

      <SectionHeading
        as="h1"
        eyebrow="Protokol Keamanan"
        title="Panduan Sesi Remote Support yang Aman &amp; Terarah"
        description="Pelajari persiapan teknis, standar keselamatan, dan hak kendali Anda sebelum sesi pendampingan jarak jauh dimulai."
      />

      {/* When is remote support possible vs not possible */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div className="rounded-xl border border-success/30 bg-success/5 p-5 sm:p-6">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-success">
            <CheckCircle2 className="size-4" />
            Kapan Remote Support Bisa Dilakukan:
          </p>
          <ul className="mt-3 space-y-2 text-xs sm:text-sm text-foreground">
            <li className="flex items-start gap-2">
              <span className="mt-1 size-1.5 rounded-full bg-success shrink-0" />
              <span>HP stuck logo / bootloop tetapi masih terdeteksi kabel di komputer.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 size-1.5 rounded-full bg-success shrink-0" />
              <span>Instalasi root Magisk, unlock bootloader, atau flash firmware stock.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 size-1.5 rounded-full bg-success shrink-0" />
              <span>Troubleshooting custom ROM dan custom recovery (TWRP).</span>
            </li>
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-slate-50 p-5 sm:p-6">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
            <XCircle className="size-4 text-slate-400" />
            Kapan Remote Support TIDAK Bisa Dilakukan:
          </p>
          <ul className="mt-3 space-y-2 text-xs sm:text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="mt-1 size-1.5 rounded-full bg-slate-400 shrink-0" />
              <span>Kerusakan fisik hardware (layar pecah, port charger longgar tidak konek).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 size-1.5 rounded-full bg-slate-400 shrink-0" />
              <span>Motherboard mati total terbakar atau short sirkuit kena air.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 size-1.5 rounded-full bg-slate-400 shrink-0" />
              <span>Pelanggan tidak memiliki PC atau laptop dengan koneksi internet.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Requirements & Download Grid */}
      <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
        {/* Checklist */}
        <section aria-labelledby="req-heading" className="rounded-xl border border-border bg-card p-6 shadow-xs">
          <h2 id="req-heading" className="flex items-center gap-2 text-lg font-bold tracking-tight text-foreground">
            <CheckCircle2 className="size-5 text-accent" aria-hidden="true" />
            Persiapan Alat &amp; Hardware
          </h2>
          <ul className="mt-4 space-y-3">
            {requirements.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* AnyDesk Official Download */}
        <section aria-labelledby="download-heading" className="rounded-xl border border-border bg-card p-6 shadow-xs">
          <h2 id="download-heading" className="flex items-center gap-2 text-lg font-bold tracking-tight text-foreground">
            <Download className="size-5 text-accent" aria-hidden="true" />
            Download Software AnyDesk Resmi
          </h2>
          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
            Gunakan aplikasi resmi langsung dari portal resmi AnyDesk. Hindari mengunduh file installer dari tautan acak di grup chat.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <a
              href={siteConfig.remoteSoftware.anydeskWindows}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="group flex flex-col justify-between rounded-lg border border-border bg-slate-50/50 p-4 hover:border-accent hover:bg-white transition-all cursor-pointer"
            >
              <div>
                <Monitor className="size-6 text-foreground" />
                <p className="mt-2 text-sm font-bold text-foreground">AnyDesk Windows</p>
                <p className="text-xs text-muted-foreground">Untuk Laptop / PC (Wajib)</p>
              </div>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-accent group-hover:underline">
                Unduh Resmi di anydesk.com
                <ExternalLink className="size-3" />
              </span>
            </a>

            <div className="rounded-lg border border-border/80 bg-muted/30 p-4 flex flex-col justify-between">
              <div>
                <Lock className="size-6 text-muted-foreground" />
                <p className="mt-2 text-sm font-bold text-foreground">Aman &amp; Terenkripsi</p>
                <p className="text-xs text-muted-foreground">Menggunakan enkripsi standar TLS 1.2</p>
              </div>
              <span className="mt-3 text-[11px] text-muted-foreground">
                Bisa dijalankan tanpa instalasi permanen
              </span>
            </div>
          </div>
        </section>
      </div>

      {/* 4 Steps Connection Flow */}
      <section aria-labelledby="steps-heading" className="mt-14">
        <h2 id="steps-heading" className="text-xl font-bold tracking-tight text-foreground sm:text-2xl text-center">
          Tata Cara Memulai Sesi Remote dalam 4 Langkah
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.number} className="rounded-xl border border-border bg-card p-5 shadow-xs">
              <span className="font-mono text-lg font-bold text-accent">{s.number}</span>
              <h3 className="mt-2 text-sm font-bold text-foreground">{s.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Security & Customer Rights Callout */}
      <section aria-labelledby="safety-heading" className="mt-14 rounded-2xl border border-destructive/25 bg-destructive/5 p-6 sm:p-8">
        <div className="flex items-center gap-2 text-destructive">
          <ShieldAlert className="size-6" />
          <h2 id="safety-heading" className="text-lg sm:text-xl font-bold tracking-tight">
            Pemberitahuan Keamanan &amp; Hak Pelanggan
          </h2>
        </div>
        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-foreground/90">
          Demi kenyamanan dan ketenangan Anda, perhatikan aturan keselamatan mutlak berikut selama proses pengerjaan:
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {safetyRules.map((rule) => (
            <div key={rule.title} className="rounded-lg bg-white/80 p-4 border border-destructive/15">
              <h3 className="text-xs font-bold text-foreground">{rule.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{rule.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-lg bg-white p-4 border border-border flex items-start gap-3">
          <PowerOff className="size-5 shrink-0 text-destructive mt-0.5" />
          <p className="text-xs text-foreground leading-relaxed">
            <strong>Cara Menghentikan Sesi:</strong> Klik tombol silang merah di pojok atas jendela AnyDesk atau cukup cabut kabel internet/USB Anda. Sesi akan terputus seketika tanpa ada akses yang tertinggal.
          </p>
        </div>
      </section>

      {/* Final Conversion CTA: "Siap untuk remote support?" */}
      <section className="mt-14 rounded-2xl bg-primary p-8 text-center text-primary-foreground sm:p-12">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white mb-3">
          <ShieldCheck className="size-3.5 text-whatsapp" />
          <span>Bimbingan Langsung</span>
        </div>

        <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl">
          Siap untuk remote support?
        </h2>

        <p className="mx-auto mt-2 max-w-lg text-xs sm:text-sm text-white/80 leading-relaxed">
          Hubungi CS kami untuk memverifikasi apakah kendala perangkat Anda dapat diselesaikan melalui pendampingan remote hari ini.
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
              <span>Konsultasi Sesi Remote via WhatsApp</span>
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

        <p className="mt-4 text-[11px] text-white/60">
          Pengecekan awal gratis · Panduan langkah demi langkah diberikan sebelum koneksi
        </p>
      </section>
    </div>
  );
}