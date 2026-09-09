import type { Metadata } from "next";
import {
  Clock,
  Smartphone,
  Cpu,
  Info,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { siteConfig, hasWhatsapp } from "@/config/site";
import { getContactMessage } from "@/lib/contact";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Hubungi Kami",
  description:
    "Hubungi CS layanan teknis Android melalui WhatsApp, Telegram, atau email. Jelaskan merek, model, dan gejala perangkat untuk respons yang lebih cepat.",
  path: "/contact",
});

const deviceInfoItems = [
  { icon: Smartphone, label: "Device Brand", hint: "Merek perangkat" },
  { icon: Cpu, label: "Device Model", hint: "Model / varian" },
  { icon: Info, label: "Android / OS Version", hint: "Bila diketahui" },
  { icon: AlertTriangle, label: "Masalah yang Dialami", hint: "Gejala & kronologi" },
];

export default function ContactPage() {
  const wa = hasWhatsapp();
  const message = getContactMessage();
  const waHref = wa
    ? `https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`
    : null;

  return (
    <div className="container-page py-12 md:py-16">
      <Breadcrumbs items={[{ label: "Hubungi Kami" }]} />

      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <span className="mb-3 inline-block rounded-full bg-accent-subtle px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
          Hubungi Kami
        </span>
        <h1 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl md:text-4xl">
          Bicara dengan CS kami
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
          Gunakan saluran berikut untuk konsultasi. Menyertakan informasi perangkat membantu kami merespons lebih cepat.
        </p>
      </div>

      {/* WhatsApp card — single modern card */}
      <div className="mx-auto mt-10 max-w-3xl">
        <div className="overflow-hidden rounded-xl bg-primary text-primary-foreground">
          <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
            <div className="flex items-start gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-whatsapp text-whatsapp-foreground">
                <WhatsAppIcon className="size-6" />
              </span>
              <div>
                <h2 className="text-lg font-semibold text-white">
                  Konsultasi via WhatsApp
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-white/80">
                  Saluran utama untuk respons cepat. Sertakan kondisi perangkat Anda agar CS bisa menilai lebih akurat.
                </p>
              </div>
            </div>
            {waHref ? (
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-whatsapp px-5 text-sm font-semibold text-whatsapp-foreground shadow-lg shadow-black/10 transition-all hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring cursor-pointer md:justify-start"
              >
                Konsultasi Sekarang
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            ) : null}
          </div>

          <div className="flex flex-col gap-2 border-t border-white/10 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p className="flex items-center gap-2 text-xs text-white/70">
              <Clock className="size-3.5 text-white/50" aria-hidden="true" />
              Respon CS sesuai jam operasional.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/70">
              {siteConfig.telegramUrl ? (
                <a
                  href={siteConfig.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="font-medium text-white/80 transition-colors hover:text-white cursor-pointer"
                >
                  Telegram
                </a>
              ) : null}
              {siteConfig.supportEmail ? (
                <a
                  href={`mailto:${siteConfig.supportEmail}`}
                  className="font-medium text-white/80 transition-colors hover:text-white cursor-pointer"
                >
                  {siteConfig.supportEmail}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {/* Callout — info panel sebelum hubungi CS */}
      <div className="mx-auto mt-8 max-w-3xl rounded-r-lg border-l-4 border-blue-500 bg-blue-50 p-6 sm:p-8">
        <div className="flex items-center gap-2.5">
          <Clock className="size-5 text-blue-600" aria-hidden="true" />
          <h2 className="text-base font-semibold text-slate-800">
            Sebelum menghubungi CS
          </h2>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Siapkan informasi berikut agar konsultasi lebih cepat dan membantu.
        </p>
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
          {deviceInfoItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-lg border border-blue-100 bg-white/70 p-3.5"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-white text-blue-600 shadow-sm">
                <item.icon className="size-4" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-800">{item.label}</p>
                <p className="text-xs text-slate-500">{item.hint}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}