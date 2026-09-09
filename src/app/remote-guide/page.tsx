import type { Metadata } from "next";
import { Download, Monitor, Smartphone, ExternalLink, ShieldAlert, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Panduan Remote — Persiapan Sesi Remote Support",
  description:
    "Panduan persiapan sebelum sesi remote support: siapkan PC/laptop, internet, kabel USB, download AnyDesk resmi, dan baca peringatan keamanan.",
  path: "/remote-guide",
});

const checklist = [
  "PC atau laptop dengan koneksi internet yang stabil.",
  "Kabel USB yang sesuai bila proses memerlukan sambungan ke perangkat.",
  "Baterai perangkat Android terisi cukup.",
  "Buka dan ikuti instruksi langsung dari CS resmi kami.",
];

const steps = [
  { title: "Download aplikasi resmi", description: "Unduh AnyDesk hanya dari situs resmi anydesk.com. Jangan gunakan tautan dari sumber lain." },
  { title: "Buka aplikasinya", description: "Jalankan AnyDesk dan pastikan tampil nomor ID sesi Anda." },
  { title: "Ikuti instruksi CS", description: "Kirimkan nomor ID hanya ke CS resmi kami melalui saluran yang disepakati." },
  { title: "Jangan berikan akses ke pihak lain", description: "Hentikan sesi bila ada permintaan akses dari pihak yang tidak Anda kenali." },
];

const securityPoints = [
  "Berikan akses remote HANYA setelah memastikan Anda berkomunikasi dengan CS resmi kami di saluran resmi (WhatsApp/Telegram).",
  "Hentikan koneksi bila ada yang meminta data tidak berkaitan dengan perbaikan.",
  "Kami tidak akan pernah meminta password akun, PIN, data perbankan, atau kode OTP melalui website atau sesi remote.",
  "Jangan membagikan akses Anda ke pihak mana pun yang tidak Anda kenal.",
];

export default function RemoteGuidePage() {
  return (
    <div className="container-page py-12 md:py-16">
      <Breadcrumbs items={[{ label: "Panduan Remote" }]} />

      <SectionHeading as="h1"
        eyebrow="Panduan Remote"
        title="Persiapan sebelum sesi remote support"
        description="Halaman ini membantu Anda menyiapkan perangkat sebelum sesi remote dimulai. Halaman ini tetap berguna bahkan saat dibuka dari WhatsApp atau Telegram."
      />

      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
        <section aria-labelledby="before-heading" className="rounded-lg border border-border bg-card p-6 md:p-8">
          <h2 id="before-heading" className="flex items-center gap-2 text-xl font-bold tracking-tight text-foreground">
            <CheckCircle2 className="size-6 text-accent" aria-hidden="true" />
            Sebelum memulai
          </h2>
          <ul className="mt-5 space-y-3.5">
            {checklist.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-success" aria-hidden="true" />
                <span className="text-sm leading-relaxed text-foreground md:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="download-heading" className="rounded-lg border border-border bg-card p-6 md:p-8">
          <h2 id="download-heading" className="flex items-center gap-2 text-xl font-bold tracking-tight text-foreground">
            <Download className="size-6 text-accent" aria-hidden="true" />
            Download software remote
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Gunakan aplikasi <strong>AnyDesk resmi</strong> dari situs resminya. Jangan
            mengunduh dari sumber lain untuk menghindari modifikasi berbahaya.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <a
              href={siteConfig.remoteSoftware.anydeskWindows}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="group flex flex-col rounded-lg border border-border bg-background p-4 hover:border-accent/40 transition-colors cursor-pointer"
            >
              <Monitor className="size-6 text-foreground" aria-hidden="true" />
              <span className="mt-2 text-sm font-semibold text-foreground">Windows</span>
              <span className="text-xs text-muted-foreground">PC / Laptop</span>
              <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-accent">
                Visit anydesk.com
                <ExternalLink className="size-3.5" aria-hidden="true" />
              </span>
            </a>
            <a
              href={siteConfig.remoteSoftware.anydeskAndroid}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="group flex flex-col rounded-lg border border-border bg-background p-4 hover:border-accent/40 transition-colors cursor-pointer"
            >
              <Smartphone className="size-6 text-foreground" aria-hidden="true" />
              <span className="mt-2 text-sm font-semibold text-foreground">Android</span>
              <span className="text-xs text-muted-foreground">Perangkat bergerak</span>
              <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-accent">
                Visit anydesk.com
                <ExternalLink className="size-3.5" aria-hidden="true" />
              </span>
            </a>
          </div>
        </section>
      </div>

      <section aria-labelledby="install-heading" className="mt-8">
        <h2 id="install-heading" className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
          Cara menginstal dan memulai
        </h2>
        <ol className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="flex flex-col rounded-lg border border-border bg-card p-5">
              <span className="mb-3 flex size-8 items-center justify-center rounded-full bg-accent text-xs font-bold text-white" aria-hidden="true">
                {index + 1}
              </span>
              <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section
        aria-labelledby="security-heading"
        className="mt-8 rounded-lg border border-destructive/30 bg-destructive/5 p-6 md:p-8"
      >
        <h2 id="security-heading" className="flex items-center gap-2 text-xl font-bold tracking-tight text-destructive">
          <ShieldAlert className="size-6" aria-hidden="true" />
          Peringatan keamanan — baca sebelum sesi
        </h2>
        <ul className="mt-4 space-y-3">
          {securityPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-destructive" aria-hidden="true" />
              <span className="text-sm leading-relaxed text-foreground md:text-base">{point}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 rounded-md bg-white/70 p-4 text-sm leading-relaxed text-foreground">
          Pastikan Anda berkomunikasi melalui saluran resmi kami (WhatsApp / Telegram yang
          tertera di website ini). Tim kami tidak akan pernah meminta informasi yang tidak
          berkaitan dengan perbaikan perangkat Anda.
        </p>
      </section>
    </div>
  );
}