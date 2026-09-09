import type { Metadata } from "next";
import { AlertTriangle, ExternalLink } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: "Disclaimer",
  description:
    "Disclaimer penggunaan platform layanan teknis Android: batasan layanan, risiko software, tautan eksternal, dan informasi penting lainnya.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <div className="container-page py-12 md:py-16">
      <Breadcrumbs items={[{ label: "Disclaimer" }]} />
      <SectionHeading as="h1"
        eyebrow="Legal"
        title="Disclaimer"
        description="Informasi penting yang perlu Anda pahami sebelum menggunakan layanan kami."
      />

      <div className="max-w-3xl space-y-8">
        <section>
          <h2 className="flex items-center gap-2 text-lg font-semibold text-warning md:text-xl">
            <AlertTriangle className="size-5" aria-hidden="true" />
            1. Hasil layanan tidak dijamin
          </h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>
              Layanan software (root, unlock bootloader, flashing, unbrick, custom ROM, dan
              sejenisnya) membawa risiko yang bergantung pada kondisi perangkat. Kami tidak
              menjanjikan keberhasilan 100%, perlindungan data penuh, atau kompatibilitas
              universal. Kelayakan ditentukan melalui penilaian terhadap perangkat Anda.
            </p>
          </div>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-foreground md:text-xl">2. Garansi perangkat</h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>
              Proses seperti root atau pemasangan custom ROM dapat memengaruhi garansi
              pabrik. Sesuai kebijakan merek, tanggung jawab atas dampak garansi dibahas
              sebelum proses berjalan.
            </p>
          </div>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-foreground md:text-xl">3. Tautan eksternal</h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>
              Beberapa tautan (misalnya unduhan{" "}
              <a
                href={siteConfig.remoteSoftware.anydeskHome}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-1 font-medium text-accent underline-offset-2 hover:underline"
              >
                AnyDesk <ExternalLink className="size-3.5" aria-hidden="true" />
              </a>
              ) mengarah ke situs pihak ketiga. Kami tidak bertanggung jawab atas konten atau
              kebijakan situs tersebut. Selalu unduh software dari situs resmi.
            </p>
          </div>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-foreground md:text-xl">4. Keamanan remote access</h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>
              Kami tidak pernah meminta password, PIN, data perbankan, atau kode OTP. Berikan
              akses remote hanya kepada CS resmi melalui saluran resmi (WhatsApp/Telegram).
              Hentikan sesi bila ada permintaan yang tidak wajar.
            </p>
          </div>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-foreground md:text-xl">5. Batasan tanggung jawab</h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>
              Pemanfaatan dengan cara yang menyalahi instruksi CS, perangkat yang sudah rusak
              sebelum penilaian, atau tindakan di luar cakupan yang disepakati berada di luar
              tanggung jawab kami sebagaimana diatur dalam Ketentuan Layanan.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}