import type { Metadata } from "next";
import {
  Clock,
  Smartphone,
  Cpu,
  Info,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  ShieldAlert,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { siteConfig, hasWhatsapp, whatsappLink } from "@/config/site";
import { getContactMessage } from "@/lib/contact";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactLeadForm } from "@/components/contact/ContactLeadForm";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Konsultasi & Kontak Teknisi",
  description:
    "Jelaskan masalah Android Anda untuk konsultasi gratis dengan teknisi manusia. Pengecekan kompatibilitas di awal via WhatsApp atau form konsultasi terarah.",
  path: "/contact",
  keywords: [
    "kontak techfix software",
    "konsultasi bootloop",
    "jasa root whatsapp",
    "teknisi software android",
    "service hp jarak jauh",
  ],
});

const deviceInfoItems = [
  { icon: Smartphone, label: "Merek & Model HP", hint: "Contoh: Poco F3, Samsung A52" },
  { icon: Cpu, label: "Status Saat Ini", hint: "Stuck logo / restart berulang / normal" },
  { icon: Info, label: "Versi OS / Android", hint: "Sebutkan bila diketahui" },
  { icon: AlertTriangle, label: "Kronologi Awal", hint: "Setelah update / flash mandiri / jatuh" },
];

export default function ContactPage() {
  const wa = hasWhatsapp();
  const message = getContactMessage();
  const waHref = wa ? whatsappLink(message) : null;

  return (
    <div className="container-page py-10 md:py-16">
      <Breadcrumbs items={[{ label: "Konsultasi & Kontak" }]} />

      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-accent-subtle px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
          <ShieldCheck className="size-3.5" />
          <span>Lead &amp; Consultation Entry</span>
        </span>
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
          Jelaskan Masalah Android Anda
        </h1>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
          Konsultasikan kondisi perangkat Anda langsung dengan teknisi manusia. Kami bantu periksa kelayakan penanganan sebelum Anda mengambil keputusan apa pun.
        </p>
      </div>

      {/* Two Columns: Interactive Form (Left) + Direct WhatsApp & Trust Points (Right) */}
      <div className="mx-auto mt-10 max-w-4xl grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        {/* Left: Interactive Lead Form */}
        <div>
          <ContactLeadForm />
        </div>

        {/* Right: Direct WhatsApp Card + Channel info */}
        <div className="space-y-6">
          {/* Direct WhatsApp Card */}
          <div className="rounded-xl bg-primary p-6 text-primary-foreground shadow-sm">
            <div className="flex items-start gap-3.5">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-whatsapp text-whatsapp-foreground">
                <WhatsAppIcon className="size-5" />
              </span>
              <div>
                <h2 className="text-base font-bold text-white">
                  Langsung Chat via WhatsApp
                </h2>
                <p className="mt-1 text-xs leading-relaxed text-white/80">
                  Ingin bertanya langsung tanpa mengisi formulir? Klik tombol di bawah untuk membuka chat dengan CS resmi TechFix.
                </p>
              </div>
            </div>

            {waHref && (
              <div className="mt-5">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-md bg-whatsapp px-4 text-xs sm:text-sm font-semibold text-whatsapp-foreground shadow-sm hover:brightness-95 transition-all cursor-pointer"
                >
                  <span>Mulai Chat WhatsApp Sekarang</span>
                  <ArrowRight className="size-4" />
                </a>
              </div>
            )}

            <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[11px] text-white/60">
              <span className="flex items-center gap-1.5">
                <Clock className="size-3 text-white/40" />
                Respons cepat di jam kerja
              </span>
              {siteConfig.telegramUrl && (
                <a
                  href={siteConfig.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="font-medium text-white/80 hover:underline"
                >
                  Kanal Telegram →
                </a>
              )}
            </div>
          </div>

          {/* Quick Preparation Guidance */}
          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
              <Info className="size-4 text-accent" />
              Info yang Membantu Penilaian Cepat
            </h3>
            <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
              {deviceInfoItems.map((item) => (
                <div key={item.label} className="rounded-lg bg-muted/40 p-2.5">
                  <p className="text-xs font-semibold text-foreground">{item.label}</p>
                  <p className="text-[11px] text-muted-foreground">{item.hint}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Security & Official Channels Notice */}
          <div className="rounded-xl border border-warning/30 bg-warning/5 p-4 text-xs leading-relaxed text-foreground">
            <p className="flex items-center gap-1.5 font-bold text-warning">
              <ShieldAlert className="size-4 shrink-0" />
              Pemberitahuan Keamanan Resmi
            </p>
            <p className="mt-1 text-muted-foreground text-[11px]">
              Situs resmi TechFix Software hanya beralamat di <strong>techfixsoftware.my.id</strong>. Kami tidak pernah meminta kata sandi akun, kunci layar, atau kode OTP apa pun. Seluruh transaksi dan konsultasi hanya diproses melalui nomor WhatsApp resmi yang tertera di situs ini.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}