import { CheckCircle2, XCircle } from "lucide-react";

const differentiators = [
  {
    principle: "Konsultasi Sebelum Eksekusi",
    us: "Kami mengidentifikasi penyebab masalah dan memastikan kondisi unit masuk akal untuk ditangani sebelum meminta persetujuan.",
    others: "Langsung flash file acak tanpa memeriksa riwayat perangkat atau status partisi terlebih dahulu.",
  },
  {
    principle: "Pengecekan Kompatibilitas Ketat",
    us: "Varian chipset (Snapdragon/MediaTek), versi OS, dan anti-rollback dicocokkan presisi dengan file firmware resmi.",
    others: "Sering salah menggunakan file beda region atau varian yang justru berisiko menyebabkan soft brick permanen.",
  },
  {
    principle: "Transparansi Risiko Terbuka",
    us: "Jika suatu proses berisiko menghapus data atau membatalkan garansi, kami jelaskan di awal tanpa ada yang ditutupi.",
    others: "Memberikan janji 100% aman atau 100% berhasil tanpa mengecek kondisi nyata perangkat.",
  },
  {
    principle: "Komunikasi Manusia yang Jelas",
    us: "Dijelaskan dengan bahasa sehari-hari yang mudah dipahami tanpa jargon yang membingungkan pemilik perangkat.",
    others: "Jawaban robot otomatis yang kaku atau komunikasi yang membingungkan tanpa arahan langkah demi langkah.",
  },
];

export function WhyTechFix() {
  return (
    <section aria-labelledby="why-heading" className="border-b border-border bg-white py-14 md:py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-accent">
            Prinsip &amp; Nilai Layanan
          </p>
          <h2 id="why-heading" className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Kenapa bukan sekadar jasa flash sembarangan?
          </h2>
          <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground">
            Memperbaiki software Android membutuhkan ketelitian dan diagnosis yang benar, bukan sekadar klik tombol di software sembarang.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {differentiators.map((item) => (
            <div
              key={item.principle}
              className="rounded-xl border border-border bg-card p-6 shadow-xs"
            >
              <h3 className="text-base font-bold text-foreground">
                {item.principle}
              </h3>

              <div className="mt-4 space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-2.5 rounded-lg bg-success/5 border border-success/20 p-3">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
                  <div>
                    <span className="font-semibold text-success block text-[11px] uppercase tracking-wider">
                      Pendekatan TechFix
                    </span>
                    <span className="text-foreground leading-relaxed">{item.us}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 rounded-lg bg-slate-50 border border-slate-200 p-3">
                  <XCircle className="mt-0.5 size-4 shrink-0 text-slate-400" aria-hidden="true" />
                  <div>
                    <span className="font-semibold text-slate-500 block text-[11px] uppercase tracking-wider">
                      Servis Tanpa Prosedur Jelas
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
