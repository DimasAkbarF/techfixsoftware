import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: "Ketentuan Layanan",
  description:
    "Ketentuan layanan penggunaan platform layanan teknis Android: cakupan layanan, proses konsultasi, risiko, dan tanggung jawab.",
  path: "/terms",
});

const sections: Array<{ title: string; body: string[] }> = [
  {
    title: "1. Sifat platform",
    body: [
      `Website ${siteConfig.name} adalah platform discovery dan konversi layanan teknis Android. Seluruh layanan dijalankan oleh tim kami dan dikoordinasikan melalui konsultasi manusia sebelum eksekusi.`,
      "Website ini tidak menyediakan pembayaran online, sistem order otomatis, atau jaminan otomatis atas hasil layanan.",
    ],
  },
  {
    title: "2. Konsultasi dan kesepakatan",
    body: [
      "Kelayakan, metode, dan biaya layanan dibahas melalui konsultasi dengan CS sebelum eksekusi.",
      "Eksekusi hanya dilakukan setelah Anda memahami dan menyepakati proses yang diajukan.",
      "Kami berhak menolak layanan bila kondisi perangkat berada di luar cakupan atau risiko yang dapat dikelola.",
    ],
  },
  {
    title: "3. Risiko dan tanggung jawab",
    body: [
      "Proses software seperti root, unbrick, flashing, atau pemasangan custom ROM dapat membawa risiko, termasuk potensi kehilangan data.",
      "Kami tidak menjamin keberhasilan 100% atau kondisi tanpa risiko untuk semua perangkat.",
      "Sebaiknya Anda melakukan backup data penting bila memungkinkan. Lindungi informasi sensitif dan jangan mengungkapkannya di luar konteks layanan.",
    ],
  },
  {
    title: "4. Remote support",
    body: [
      "Remote support menggunakan aplikasi resmi yang ditentukan (misalnya AnyDesk) dan hanya dijalankan setelah kesepakatan dengan CS.",
      "Berikan akses remote hanya kepada CS resmi kami. Hentikan sesi jika ada permintaan yang mencurigakan.",
      "Kami tidak akan pernah meminta password, data perbankan, PIN, atau kode OTP.",
    ],
  },
  {
    title: "5. Perubahan ketentuan",
    body: [
      "Ketentuan ini dapat diperbarui sewaktu-waktu. Dengan terus menggunakan website ini, Anda dianggap menyetujui ketentuan terbaru yang tampil di halaman ini.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="container-page py-12 md:py-16">
      <Breadcrumbs items={[{ label: "Ketentuan Layanan" }]} />
      <SectionHeading as="h1"
        eyebrow="Legal"
        title="Ketentuan Layanan"
        description="Dokumen ini menjelaskan ketentuan penggunaan dan proses layanan kami. Dibaca sebelum melanjutkan layanan disarankan."
      />
      <div className="max-w-3xl space-y-8">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-lg font-semibold text-foreground md:text-xl">{section.title}</h2>
            <div className="mt-3 space-y-3">
              {section.body.map((paragraph, index) => (
                <p key={index} className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
        <p className="rounded-md bg-muted p-4 text-sm leading-relaxed text-muted-foreground">
          Terakhir diperbarui: {new Date().toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })}.
          Untuk pertanyaan tentang ketentuan ini, hubungi kami melalui halaman{" "}
          <a href="/contact" className="font-medium text-accent underline-offset-2 hover:underline">Kontak</a>.
        </p>
      </div>
    </div>
  );
}