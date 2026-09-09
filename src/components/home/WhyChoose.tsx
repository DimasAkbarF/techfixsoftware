import { UserCheck, ShieldCheck, FileSearch, MessageSquareText } from "lucide-react";

const reasons = [
  {
    icon: UserCheck,
    title: "Konsultasi manusia, bukan bot",
    description:
      "Setiap masalah dijelaskan dan ditangani oleh CS manusia. Tidak ada diagnosa otomatis yang keliru.",
  },
  {
    icon: ShieldCheck,
    title: "Jujur soal risiko",
    description:
      "Kami menjelaskan potensi risiko data dan garansi sebelum eksekusi. Tidak ada jaminan keberhasilan palsu.",
  },
  {
    icon: FileSearch,
    title: "Pengecekan kompatibilitas dulu",
    description:
      "Dukungan dicek berdasarkan model, varian, dan kondisi perangkat Anda sebelum ada keputusan.",
  },
  {
    icon: MessageSquareText,
    title: "Saluran resmi yang jelas",
    description:
      "Komunikasi berjalan melalui WhatsApp dan Telegram resmi kami. Aman bagi Anda untuk bertanya.",
  },
];

export function WhyChoose() {
  return (
    <section className="py-18 md:py-28" aria-labelledby="whychoose-heading">
      <div className="container-page">
        <h2 id="whychoose-heading" className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          Pendekatan yang berbeda
        </h2>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">
          Kami mengoptimalkan pemahaman dan kepercayaan, bukan sekadar tombol checkout.
        </p>

        <div className="mt-10 mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex h-full flex-col rounded-lg border border-border bg-background p-4">
              <span className="mb-2 inline-flex size-8 items-center justify-center rounded-md bg-accent/10 text-accent" aria-hidden="true">
                <reason.icon className="size-4" />
              </span>
              <h3 className="text-sm font-semibold text-foreground">{reason.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
