import type { Metadata } from "next";
import {
  Clock,
  MapPin,
  Smartphone,
  Cpu,
  Info,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { siteConfig, hasWhatsapp, whatsappLink } from "@/config/site";
import { getContactMessage } from "@/lib/contact";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactLeadForm } from "@/components/contact/ContactLeadForm";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Kontak Teknisi & Konsultasi Android",
  description:
    "Konsultasikan masalah HP Android Anda dengan teknisi spesialis: bootloop, soft brick, root, & flash firmware via WhatsApp. Hubungi TechFix Software sekarang!",
  path: "/contact",
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
        <p className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-3">
          <span className="size-1.5 rounded-full bg-accent" />
          Konsultasi &amp; Triage Teknis
        </p>
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
          <div className="rounded-lg bg-primary p-6 text-primary-foreground shadow-sm">
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
          <div className="rounded-lg border border-border bg-card p-5">
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

          {/* Service Area */}
          <div className="rounded-lg border border-border bg-card p-5 text-xs leading-relaxed text-foreground shadow-xs">
            <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
              <MapPin className="size-4 text-accent" />
              Area Layanan
            </h3>
            <ul className="mt-2.5 space-y-1.5 text-muted-foreground">
              <li>Pengerjaan utama dilakukan secara remote (online) ke seluruh Indonesia.</li>
              <li>Lokasi fisik kami berada di Rangkasbitung, Kabupaten Lebak, Banten.</li>
              <li>Untuk penanganan tatap muka di sekitar Rangkasbitung, konfirmasi ketersediaan jadwal lewat WhatsApp terlebih dahulu.</li>
            </ul>
          </div>

          {/* Security & Official Channels Notice */}
          <div className="rounded-lg border border-border bg-card p-5 text-xs leading-relaxed text-foreground shadow-xs">
            <h3 className="font-bold text-foreground text-xs uppercase tracking-wider">
              Protokol Keamanan &amp; Integritas Akses
            </h3>
            <p className="mt-1.5 text-muted-foreground text-xs leading-relaxed">
              Seluruh konsultasi diproses via kanal resmi terverifikasi di <strong>techfixsoftware.my.id</strong>. Kami berkomitmen menjaga kerahasiaan data pengguna dan menerapkan prinsip zero-knowledge credential tanpa meminta kata sandi akun atau kode otentikasi pribadi Anda.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}