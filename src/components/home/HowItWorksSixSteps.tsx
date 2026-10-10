import Image from "next/image";

const steps = [
  {
    num: "01",
    title: "Konsultasi & Diagnosa Awal",
    desc: "Ceritakan kendala Anda via WhatsApp. Kami akan mendiagnosa kemungkinan penyebab dan menentukan apakah bisa dikerjakan secara remote atau harus fisik.",
    hasImage: false,
  },
  {
    num: "02",
    title: "Estimasi Biaya & Waktu",
    desc: "Kami berikan transparansi total terkait biaya, estimasi waktu pengerjaan, dan risiko yang mungkin terjadi (seperti hilang data).",
    hasImage: true,
    imageSrc: "/images/home/workflow-step-2.webp",
    imageAlt: "Teknisi melakukan diagnosa dan estimasi perbaikan pada smartphone",
  },
  {
    num: "03",
    title: "Persiapan Perangkat",
    desc: "Jika remote: Anda siapkan PC/Laptop, kabel data, dan internet stabil. Jika fisik: Anda bisa drop-off atau kirim via ekspedisi.",
    hasImage: false,
  },
  {
    num: "04",
    title: "Eksekusi Sistem",
    desc: "Proses flashing, rooting, atau perbaikan sistem dilakukan. Anda bisa memantau prosesnya secara langsung jika via remote.",
    hasImage: true,
    imageSrc: "/images/home/workflow-step-4.webp",
    imageAlt: "Terminal Linux mengeksekusi perintah Android Debug Bridge (ADB) untuk flashing sistem",
  },
  {
    num: "05",
    title: "Testing & Quality Control",
    desc: "Setelah selesai, perangkat akan dites untuk memastikan semua fungsi (sinyal, kamera, sensor) berjalan normal tanpa bug kritis.",
    hasImage: false,
  },
  {
    num: "06",
    title: "Serah Terima & Pembayaran",
    desc: "Pembayaran dilakukan setelah perangkat dipastikan menyala dan berfungsi sesuai kesepakatan awal (No Fix, No Fee).",
    hasImage: false,
  },
];

export function HowItWorksSixSteps() {
  return (
    <section className="py-16 md:py-24 bg-background border-b border-border" id="alur-kerja">
      <div className="container-page max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl text-foreground mb-3">
            Alur Kerja Transparan
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            6 langkah jelas dari awal konsultasi hingga perangkat Anda kembali normal.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-12 sm:space-y-16">
            {steps.map((step) => (
              <div key={step.num} className="relative flex flex-col sm:flex-row gap-6 sm:gap-12 group">
                {/* Number / Indicator */}
                <div className="shrink-0 flex items-start z-10">
                  <div className="w-12 h-12 md:w-24 md:h-24 bg-background border-2 border-muted group-hover:border-accent rounded-xl sm:rounded-2xl flex items-center justify-center transition-colors">
                    <span className="text-2xl md:text-5xl font-bold text-muted-foreground group-hover:text-accent font-mono tracking-tighter transition-colors">
                      {step.num}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2 sm:pt-4">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                    {step.desc}
                  </p>

                  {step.hasImage && step.imageSrc && (
                    <div className="relative w-full max-w-sm aspect-video rounded-[var(--radius-lg)] overflow-hidden border border-border shadow-sm mt-4 group-hover:shadow-md transition-shadow">
                      <Image
                        src={step.imageSrc}
                        alt={step.imageAlt || step.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 384px"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
