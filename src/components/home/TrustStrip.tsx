const metrics = [
  {
    value: "1.500+",
    label: "Perangkat Tertangani",
    subtext: "Kasus bootloop, flashing & partisi sukses di berbagai brand",
  },
  {
    value: "99.2%",
    label: "Akurasi Diagnostik",
    subtext: "Analisis log error dan struktur partisi sebelum tindakan",
  },
  {
    value: "100%",
    label: "Official Signed Firmware",
    subtext: "Integritas binary firmware resmi terverifikasi cryptographic hash",
  },
  {
    value: "<30 Min",
    label: "Respons Triage Awal",
    subtext: "Evaluasi kelayakan teknis langsung via WhatsApp & Telegram",
  },
];

const engineeringPillars = [
  {
    number: "01",
    title: "Evaluasi Spesialis Teknis",
    description: "Setiap unit diteliti langsung oleh teknisi spesialis berdasarkan riwayat arsitektur sistem dan log status perangkat.",
  },
  {
    number: "02",
    title: "Validasi Hardware & Partisi",
    description: "Pemeriksaan mendalam varian chipset SoC, build number resmi pabrik, dan status bootloader sebelum eksekusi.",
  },
  {
    number: "03",
    title: "Transparansi Integritas Data",
    description: "Penjelasan objektif mengenai potensi dampak partisi data, status enkripsi, dan kondisi garansi sebelum tindakan.",
  },
  {
    number: "04",
    title: "Remote Engineering Terarah",
    description: "Asistensi teknis jarak jauh via protokol terenkripsi untuk kasus software yang memenuhi kualifikasi.",
  },
];

export function TrustStrip() {
  return (
    <section aria-labelledby="trust-strip-heading" className="border-b border-border bg-background">
      {/* Metric Proof Strip */}
      <div className="border-b border-border/80 bg-white py-8 sm:py-10">
        <div className="container-page">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {metrics.map((metric) => (
              <div key={metric.label} className="border-l-2 border-accent pl-3 sm:pl-4">
                <p className="font-mono text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {metric.value}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent sm:text-[13px]">
                  {metric.label}
                </p>
                <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
                  {metric.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Engineering Principles — split editorial */}
      <div className="container-page py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:gap-14">
          <div>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
              Standar kerja
            </p>
            <h2 id="trust-strip-heading" className="mt-3 font-display text-2xl font-bold leading-[1.15] tracking-[-0.01em] text-foreground sm:text-3xl text-balance">
              Kami cek dulu, jelaskan risikonya, baru kerjakan.
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted-foreground">
              Setiap perangkat diperiksa varian chipset, build firmware, dan status bootloader sebelum ada tindakan ke partisi.
            </p>
          </div>

          <ol className="divide-y divide-border border-y border-border">
            {engineeringPillars.map((item) => (
              <li key={item.number} className="grid grid-cols-[3rem_1fr] gap-4 py-5">
                <span className="font-mono text-sm font-medium text-accent">
                  {item.number}
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 max-w-[60ch] text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

