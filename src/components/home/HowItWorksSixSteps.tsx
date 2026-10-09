import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Registrasi & Riwayat Gejala",
    description: "Penyampaian informasi merek, tipe model, gejala sistem yang muncul, dan kronologi awal kejadian kepada teknisi.",
  },
  {
    step: "02",
    title: "Verifikasi Kelayakan Sistem",
    description: "Pemeriksaan arsitektur SoC, ketersediaan firmware resmi yang cocok, dan status partisi sistem perangkat.",
  },
  {
    step: "03",
    title: "Evaluasi Opsi & Analisis Risiko",
    description: "Pemaparan metode yang paling rasional, estimasi durasi, biaya, serta potensi dampaknya terhadap partisi data.",
  },
  {
    step: "04",
    title: "Persetujuan Prosedur (Consent)",
    description: "Anda memiliki kendali penuh untuk menyetujui atau menunda tindakan sebelum proses pengerjaan dimulai.",
  },
  {
    step: "05",
    title: "Eksekusi Prosedur Terarah",
    description: "Pelaksanaan penanganan secara sistematis (remote asistensi via AnyDesk terenkripsi jika memenuhi kualifikasi).",
  },
  {
    step: "06",
    title: "Validasi Hasil & Uji Fungsi",
    description: "Pemeriksaan stabilitas pasca-penanganan untuk memastikan sistem perangkat kembali beroperasi secara normal.",
  },
];

export function HowItWorksSixSteps() {
  return (
    <section aria-labelledby="how-it-works-heading" className="border-b border-border bg-background py-16 md:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            <span className="size-1.5 rounded-full bg-accent" />
            Standar Operasional Prosedur (SOP)
          </p>
          <h2 id="how-it-works-heading" className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Alur Penanganan Teknis Terstruktur
          </h2>
          <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground">
            Enam tahapan kerja terstandarisasi untuk menjamin keamanan perangkat, kepastian prosedur, dan transparansi proses dari awal hingga akhir.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((item) => (
            <div
              key={item.step}
              className="relative flex flex-col justify-between rounded-lg border border-border bg-card p-6 transition-all duration-150 hover:border-accent"
            >
              <div>
                <span className="inline-block text-xl font-bold font-mono tracking-tight text-accent">
                  {item.step}
                </span>
                <h3 className="mt-2 text-base font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-lg border border-border bg-card p-5 sm:p-6">
          <div className="border-l-2 border-accent pl-3 sm:pl-4">
            <h3 className="text-sm font-bold text-foreground">
              Ingin tahu persiapan sesi remote AnyDesk?
            </h3>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Pelajari apa saja yang perlu disiapkan pada PC dan HP Anda sebelum proses pengerjaan jarak jauh dimulai.
            </p>
          </div>

          <Link
            href="/remote-guide"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-border bg-muted/40 px-4 py-2 text-xs font-semibold text-foreground hover:border-accent hover:text-accent transition-colors cursor-pointer"
          >
            <span>Buka Panduan Remote</span>
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
