import { Check, X } from "lucide-react";

const points = [
  {
    feature: "Transparansi Risiko",
    techfix: "Risiko data hilang & probabilitas gagal dijelaskan di awal",
    others: "Sering diabaikan atau ditutupi demi closing",
  },
  {
    feature: "Keamanan Data Pribadi",
    techfix: "Tidak meminta password/PIN kecuali sangat terpaksa, data diproteksi",
    others: "Meminta PIN sebagai syarat wajib tanpa alasan jelas",
  },
  {
    feature: "File Firmware / Custom ROM",
    techfix: "Menggunakan file bersih, bebas malware, sumber official/XDA",
    others: "Asal comot dari Google, rawan malware / iklan menyusup",
  },
  {
    feature: "Bantuan Jarak Jauh (Remote)",
    techfix: "Tersedia via TeamViewer/AnyDesk untuk hemat waktu & ongkos",
    others: "Wajib datang ke lokasi / konter fisik",
  },
  {
    feature: "Edukasi Pengguna",
    techfix: "Diberi panduan cara merawat dan menghindari masalah serupa",
    others: "Selesai servis langsung putus kontak",
  },
];

export function WhyTechFix() {
  return (
    <section className="py-16 md:py-24 bg-card" id="kenapa-kami">
      <div className="container-page max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl text-foreground mb-3">
            Kenapa Bukan Jasa Servis Biasa?
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto text-balance">
            Modifikasi dan perbaikan software membutuhkan ketelitian ekstra. Kami mengutamakan keamanan data dan keandalan sistem Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {/* TechFix Column */}
          <div className="bg-accent/5 border border-accent/20 rounded-[var(--radius-xl)] p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Check className="w-32 h-32" />
            </div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Di TechFix Software</h3>
            </div>
            <ul className="space-y-6">
              {points.map((p, i) => (
                <li key={i} className="relative z-10">
                  <span className="block text-xs font-bold text-accent uppercase tracking-wider mb-1">{p.feature}</span>
                  <p className="text-sm text-foreground font-medium flex items-start gap-2">
                    <Check className="w-4 h-4 text-whatsapp mt-0.5 shrink-0" />
                    {p.techfix}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Others Column */}
          <div className="bg-muted/30 border border-border rounded-[var(--radius-xl)] p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <X className="w-32 h-32" />
            </div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-muted-foreground/20 text-muted-foreground flex items-center justify-center">
                <X className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-muted-foreground">Servis Sembarangan</h3>
            </div>
            <ul className="space-y-6">
              {points.map((p, i) => (
                <li key={i} className="relative z-10">
                  <span className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">{p.feature}</span>
                  <p className="text-sm text-muted-foreground flex items-start gap-2">
                    <X className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                    {p.others}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
