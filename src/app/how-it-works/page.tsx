import type { Metadata } from "next";
import { Search, FileText, MessageCircle, ClipboardPen, Lightbulb, HandshakeIcon, MonitorSmartphone, PlayCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Cara Kerja Layanan",
  description:
    "Pahami alur layanan kami: cari layanan, baca informasi, konsultasi dengan CS, sepakati proses, siapkan perangkat, dan lanjutkan eksekusi.",
  path: "/how-it-works",
});

const steps = [
  {
    icon: Search,
    title: "Temukan layanan yang Anda butuhkan",
    description:
      "Gunakan pencarian atau telusuri kategori untuk menemukan layanan yang paling relevan dengan kondisi perangkat Anda.",
  },
  {
    icon: FileText,
    title: "Baca informasi layanan dengan teliti",
    description:
      "Setiap halaman layanan memuat deskripsi, persyaratan persiapan, alur proses, dan risiko yang perlu Anda ketahui.",
  },
  {
    icon: MessageCircle,
    title: "Hubungi Customer Service",
    description:
      "Konsultasikan kondisi perangkat Anda melalui WhatsApp atau Telegram dengan menyertakan merek, model, dan gejalanya.",
  },
  {
    icon: ClipboardPen,
    title: "Jelaskan kondisi perangkat",
    description:
      "Ceritakan yang Anda alami: kapan mulai, apa yang sudah dicoba, dan gejala spesifik yang muncul.",
  },
  {
    icon: Lightbulb,
    title: "Terima panduan awal",
    description:
      "CS memberikan penilaian awal dan mengarahkan ke langkah yang paling masuk akal — tanpa memaksakan keputusan.",
  },
  {
    icon: HandshakeIcon,
    title: "Sepakati proses selanjutnya",
    description:
      "Feasibility, metode, dan risiko dibahas bersama sebelum ada kesepakatan untuk melanjutkan.",
  },
  {
    icon: MonitorSmartphone,
    title: "Siapkan remote support bila diperlukan",
    description:
      "Siapkan PC/laptop, internet stabil, kabel USB, dan aplikasi AnyDesk resmi sesuai Panduan Remote kami.",
  },
  {
    icon: PlayCircle,
    title: "Lanjutkan proses eksekusi",
    description:
      "Proses berjalan sesuai kesepakatan di luar website, dengan koordinasi bersama tim kami.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="container-page py-12 md:py-16">
      <Breadcrumbs items={[{ label: "Cara Kerja" }]} />
      <SectionHeading as="h1"
        eyebrow="Cara Kerja"
        title="Bagaimana layanan kami bekerja"
        description="Kami mengutamakan pemahaman dan konsultasi manusia sebelum eksekusi. Berikut alur lengkapnya."
        className="max-w-2xl"
      />

      <div className="mx-auto max-w-3xl">
        <ol className="space-y-4">
          {steps.map((step, index) => (
            <li key={step.title} className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-white" aria-hidden="true">
                  <step.icon className="size-5" />
                </span>
                {index < steps.length - 1 ? (
                  <span className="mt-2 w-px flex-1 bg-border" aria-hidden="true" />
                ) : null}
              </div>
              <div className="flex-1 pb-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                  Langkah {index + 1}
                </p>
                <h2 className="mt-1 text-lg font-semibold text-foreground md:text-xl">
                  {step.title}
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="mx-auto mt-4 max-w-3xl rounded-lg border border-warning/30 bg-warning/5 p-6">
        <p className="text-sm leading-relaxed text-foreground md:text-base">
          <strong>Penting:</strong> kelayakan layanan selalu bergantung pada kondisi spesifik
          perangkat Anda. Kami tidak menjamin keberhasilan 100% atau kondisi tanpa risiko
          untuk semua perangkat. Keputusan akhir dibuat setelah konsultasi dan penilaian
          oleh CS.
        </p>
      </div>

      <section className="mt-14 text-center" aria-labelledby="howitworks-cta">
        <h2 id="howitworks-cta" className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
          Siap untuk memulai?
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-base text-muted-foreground">
          Bicarakan kondisi perangkat Anda dengan CS kami — tanpa biaya konsultasi dan tanpa
          tekanan.
        </p>
      </section>
    </div>
  );
}