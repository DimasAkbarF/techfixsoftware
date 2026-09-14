import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { buildMetadata } from "@/lib/seo";
import { getContactMessage, getWhatsappUrl, getTelegramUrl } from "@/lib/contact";

export const metadata: Metadata = buildMetadata({
  title: "Cara Kerja Layanan",
  description:
    "Pahami alur layanan kami: cari layanan, baca informasi, konsultasi dengan CS, sepakati proses, siapkan perangkat, dan lanjutkan eksekusi.",
  path: "/how-it-works",
});

const steps = [
  {
    number: "01",
    title: "Temukan layanan",
    description: "Temukan layanan yang paling sesuai dengan kondisi perangkat Anda.",
  },
  {
    number: "02",
    title: "Konsultasi",
    description: "Jelaskan merek, model, gejala, dan riwayat masalah kepada Customer Service.",
  },
  {
    number: "03",
    title: "Pemeriksaan",
    description: "Kondisi perangkat dan kompatibilitas diperiksa sebelum tindakan ditentukan.",
  },
  {
    number: "04",
    title: "Tindakan",
    description: "Solusi dilakukan berdasarkan hasil pemeriksaan dan kesepakatan.",
  },
  {
    number: "05",
    title: "Selesai",
    description: "Anda mendapatkan informasi mengenai hasil penanganan dan langkah selanjutnya.",
  },
];

const prepareItems = [
  "Merek dan model perangkat",
  "Kondisi atau gejala yang terjadi",
  "Riwayat update, flashing, atau root jika ada",
  "Kabel USB dan PC/laptop jika diperlukan",
  "Backup data jika perangkat masih dapat diakses",
];

export default function HowItWorksPage() {
  const wa = getWhatsappUrl(getContactMessage());
  const tg = getTelegramUrl(getContactMessage());

  return (
    <div className="container-page py-12 md:py-16">
      <Breadcrumbs items={[{ label: "Cara Kerja" }]} />

      <SectionHeading
        as="h1"
        eyebrow="Cara Kerja"
        title="Bagaimana layanan kami bekerja"
        description="Kami mulai dari memahami kondisi perangkat Anda, lalu menentukan langkah yang paling sesuai sebelum tindakan dilakukan."
        className="max-w-2xl"
      />

      {/* Alur proses dalam 5 langkah */}
      <section aria-labelledby="process-heading" className="mt-8 md:mt-10">
        <h2 id="process-heading" className="sr-only">
          Alur layanan dalam lima langkah
        </h2>
        <ol className="grid list-none gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <li
              key={step.number}
              className="border-t border-border pt-4 transition-colors duration-150 hover:border-accent/50"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-accent tabular-nums">
                {step.number}
              </p>
              <h3 className="mt-3 text-base font-bold tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Disclaimer */}
      <div className="mt-10 max-w-3xl rounded-lg border border-warning/30 bg-warning/5 p-4 md:p-5">
        <p className="text-sm leading-relaxed text-foreground">
          <strong className="font-semibold">Penting:</strong> kelayakan layanan selalu bergantung
          pada kondisi spesifik perangkat Anda. Kami tidak menjamin keberhasilan 100% atau kondisi
          tanpa risiko. Keputusan akhir dibuat setelah konsultasi dan penilaian oleh Customer Service.
        </p>
      </div>

      {/* Persiapan */}
      <section aria-labelledby="prepare-heading" className="mt-14 border-t border-border pt-10">
        <h2 id="prepare-heading" className="text-lg font-bold tracking-tight text-foreground md:text-xl">
          Sebelum menghubungi kami
        </h2>
        <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Siapkan informasi berikut agar konsultasi dapat berjalan lebih cepat.
        </p>
        <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {prepareItems.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section aria-labelledby="cta-heading" className="mt-14">
        <div className="mx-auto max-w-xl rounded-xl border border-border bg-card px-6 py-8 text-center md:px-10 md:py-10">
          <h2 id="cta-heading" className="text-lg font-bold tracking-tight text-foreground md:text-xl">
            Sudah tahu masalahnya?
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            Kirim detail kondisi perangkat Anda. Kami akan membantu menentukan langkah yang paling
            sesuai sebelum tindakan dilakukan.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {wa ? (
              <ButtonLink
                variant="whatsapp"
                size="large"
                href={wa}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <WhatsAppIcon className="size-4" />
                Konsultasi via WhatsApp
              </ButtonLink>
            ) : null}
            {tg ? (
              <ButtonLink
                variant="telegram"
                size="large"
                href={tg}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Konsultasi via Telegram
              </ButtonLink>
            ) : null}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            Konsultasi gratis dan tanpa kewajiban untuk melanjutkan.
          </p>
        </div>
      </section>
    </div>
  );
}