import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: "Kebijakan Privasi",
  description:
    "Kebijakan privasi platform layanan teknis Android: data yang dikumpulkan, cara penggunaannya, dan komitmen kami terhadap keamanan informasi Anda.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="container-page py-12 md:py-16">
      <Breadcrumbs items={[{ label: "Kebijakan Privasi" }]} />
      <SectionHeading as="h1"
        eyebrow="Legal"
        title="Kebijakan Privasi"
        description="Komitmen kami terhadap data Anda sederhana: minimalkan pengumpulan, perjelas penggunaan, dan lindungi informasi pribadi."
      />
      <div className="max-w-3xl space-y-8">
        <section>
          <h2 className="text-lg font-semibold text-foreground md:text-xl">1. Data yang kami yakini perlu</h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>
              Website ini tidak memerlukan akun. Kami tidak meminta informasi pribadi Anda
              untuk sekadar menjelajah halaman.
            </p>
            <p>
              Saat konsultasi, melalui WhatsApp/Telegram/email, Anda dapat membagikan
              informasi perangkat (merek, model, versi OS) dan deskripsi masalah. Informasi
              ini digunakan untuk menilai kelayakan layanan.
            </p>
            <p>
              Kami tidak meminta password, PIN, data perbankan, atau kode OTP. Bila ada
              permintaan seperti itu melalui saluran yang mengatasnamakan kami, jangan
              melanjutkan.
            </p>
          </div>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-foreground md:text-xl">2. Bagaimana data digunakan</h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>Informasi yang Anda berikan saat konsultasi digunakan untuk:</p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Menilai kelayakan layanan atas perangkat Anda.</li>
              <li>Menjelaskan proses, risiko, dan langkah berikutnya.</li>
              <li>Memberikan dukungan pasca-konsultasi bila diperlukan.</li>
            </ul>
          </div>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-foreground md:text-xl">3. Penyimpanan dan pembagian</h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>
              Data dipertahankan seperlunya untuk menyelesaikan layanan dan diproses oleh tim
              kami semata. Kami tidak menjual data Anda kepada pihak ketiga.
            </p>
          </div>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-foreground md:text-xl">4. Kenyamanan Anda</h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>
              Jangan membagikan data sensitif yang tidak relevan. Kami berkomitmen memberikan
              sesi remote yang aman dan mengingatkan Anda untuk tidak memberi akses ke pihak
              tak dikenal.
            </p>
          </div>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-foreground md:text-xl">5. Kontak</h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>
              Pertanyaan tentang kebijakan privasi dapat diajukan
              {siteConfig.supportEmail ? (
                <> melalui {siteConfig.supportEmail}</>
              ) : (
                <> melalui halaman <a href="/contact" className="text-accent underline-offset-2 hover:underline">Kontak</a></>
              )}
              .
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}