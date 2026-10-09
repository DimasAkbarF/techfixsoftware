import { CheckCircle2, XCircle } from "lucide-react";

const differentiators = [
  {
    principle: "Diagnosis Awal Sebelum Eksekusi",
    us: "Kami mengidentifikasi penyebab masalah sistemik dan memastikan kondisi unit masuk akal untuk ditangani sebelum meminta persetujuan.",
    others: "Flashing langsung tanpa memeriksa riwayat status partisi atau log kegagalan sistem sebelumnya.",
  },
  {
    principle: "Validasi Integritas Firmware & Anti-Rollback",
    us: "Varian chipset (Snapdragon/MediaTek), regional SKU, dan proteksi anti-rollback diverifikasi presisi dengan checksum resmi pabrik.",
    others: "Penggunaan package firmware beda region atau varian tidak resmi yang berisiko memicu kerusakan permanen (hard brick).",
  },
  {
    principle: "Transparansi Partisi & Keamanan Data",
    us: "Penilaian dampak terhadap partisi internal, status enkripsi, dan garansi dijelaskan secara terbuka sebelum tindakan diambil.",
    others: "Klaim tanpa dasar teknis yang mengabaikan proteksi partisi dan risiko kehilangan data penting.",
  },
  {
    principle: "Komunikasi Teknis & Dokumentasi Runtut",
    us: "Setiap langkah dijelaskan secara terstruktur dengan terminologi yang jelas dan transparan kepada pemilik perangkat.",
    others: "Minimnya transparansi alur kerja atau komunikasi sepihak tanpa penjelasan prosedur teknis.",
  },
];

export function WhyTechFix() {
  return (
    <section aria-labelledby="why-heading" className="border-b border-border bg-white py-16 md:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            <span className="size-1.5 rounded-full bg-accent" />
            Metodologi &amp; Kualitas Rekayasa
          </p>
          <h2 id="why-heading" className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Standar Penanganan Terstruktur vs. Penanganan Konvensional
          </h2>
          <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground">
            Pemulihan sistem operasi Android menuntut verifikasi arsitektur partisi dan validasi checksum resmi pabrikan, bukan sekadar flashing tanpa verifikasi sistematis.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {differentiators.map((item) => (
            <div
              key={item.principle}
              className="rounded-lg border border-border bg-card p-6"
            >
              <h3 className="text-base font-bold text-foreground">
                {item.principle}
              </h3>

              <div className="mt-4 space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-2.5 rounded-lg bg-success/5 border border-success/20 p-3">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
                  <div>
                    <span className="font-semibold text-success block text-[11px] uppercase tracking-wider">
                      Standar Prosedur TechFix
                    </span>
                    <span className="text-foreground leading-relaxed">{item.us}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 rounded-lg bg-slate-50 border border-slate-200 p-3">
                  <XCircle className="mt-0.5 size-4 shrink-0 text-slate-400" aria-hidden="true" />
                  <div>
                    <span className="font-semibold text-slate-500 block text-[11px] uppercase tracking-wider">
                      Penanganan Tanpa Standarisasi
                    </span>
                    <span className="text-muted-foreground leading-relaxed">{item.others}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
