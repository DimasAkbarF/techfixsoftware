import Link from "next/link";
import { ArrowRight, Search, FileText, MessageCircle, Wrench } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Cari layanan",
    description: "Temukan layanan atau masalah Anda melalui pencarian dan kategori.",
  },
  {
    icon: FileText,
    title: "Baca informasinya",
    description: "Pahami persyaratan, proses, dan risikonya sebelum memutuskan.",
  },
  {
    icon: MessageCircle,
    title: "Hubungi CS",
    description: "Konsultasikan kondisi perangkat Anda via WhatsApp atau Telegram.",
  },
  {
    icon: Wrench,
    title: "Siapkan & eksekusi",
    description: "Ikuti panduan remote bila diperlukan, lalu lanjutkan prosesnya.",
  },
];

export function HowItWorksPreview() {
  return (
    <section className="border-y border-border bg-white py-18 md:py-28" aria-labelledby="howitworks-heading">
      <div className="container-page">
        <h2 id="howitworks-heading" className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          Cara kerja
        </h2>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">
          Alur kami agar Anda memahami pilihan terlebih dahulu sebelum memutuskan.
        </p>

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="flex flex-col rounded-lg border border-border bg-background p-4">
              <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-accent">
                <step.icon className="size-3.5" aria-hidden="true" />
                Langkah {index + 1}
              </span>
              <h3 className="mt-2 text-[15px] font-semibold text-foreground">{step.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-6 flex flex-wrap items-center gap-2.5">
          <Link
            href="/how-it-works"
            className="inline-flex h-10 items-center gap-2 rounded-md border border-border bg-white px-4 text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-colors cursor-pointer"
          >
            Lihat alur lengkap
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}