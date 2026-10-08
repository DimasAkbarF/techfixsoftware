import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Ceritakan Masalah",
    description: "Jelaskan merek, tipe HP, gejala yang muncul, dan kronologi awal kejadian melalui WhatsApp atau form kami.",
  },
  {
    step: "02",
    title: "Pengecekan Kondisi",
    description: "Teknisi memeriksa status perangkat, kebijakan pabrikan, dan ketersediaan firmware resmi yang cocok.",
  },
  {
    step: "03",
    title: "Penjelasan Opsi & Risiko",
    description: "Kami paparkan metode yang paling masuk akal, estimasi waktu, biaya, serta potensi dampaknya terhadap data.",
  },
  {
    step: "04",
    title: "Anda Memutuskan",
    description: "Anda bebas menentukan apakah ingin melanjutkan atau tidak. Tidak ada paksaan atau komitmen terikat.",
  },
  {
    step: "05",
    title: "Eksekusi Sesuai Kesepakatan",
    description: "Proses penanganan dijalankan secara terarah (remote support via AnyDesk bila didukung) di bawah pengawasan Anda.",
  },
  {
    step: "06",
    title: "Verifikasi & Follow-Up",
    description: "Memastikan perangkat kembali berfungsi normal dan memberikan saran pemeliharaan sistem pasca-penanganan.",
  },
];

export function HowItWorksSixSteps() {
  return (
    <section aria-labelledby="how-it-works-heading" className="border-b border-border bg-slate-50/50 py-14 md:py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-accent">
            Alur Konsultasi &amp; Eksekusi
          </p>
          <h2 id="how-it-works-heading" className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Alur Kerja Sederhana &amp; Transparan
          </h2>
          <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground">
            Enam langkah yang jelas dari awal Anda berkonsultasi hingga perangkat selesai ditangani.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((item) => (
            <div
              key={item.step}
              className="relative flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-xs"
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

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-border bg-card p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent-subtle text-accent">
              <HelpCircle className="size-5" />
            </span>
            <div>
              <h3 className="text-sm font-bold text-foreground">
                Ingin tahu persiapan sesi remote AnyDesk?
              </h3>
              <p className="text-xs text-muted-foreground">
                Pelajari apa saja yang perlu disiapkan pada PC dan HP Anda sebelum proses dimulai.
              </p>
            </div>
          </div>

          <Link
            href="/remote-guide"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-border px-4 py-2 text-xs font-semibold text-foreground hover:border-accent hover:text-accent transition-colors cursor-pointer"
          >
            <span>Buka Panduan Remote</span>
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
