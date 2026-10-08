import { UserCheck, ShieldCheck, Cpu, Laptop } from "lucide-react";

const trustItems = [
  {
    icon: UserCheck,
    title: "Konsultasi Manusia",
    description: "Langsung direspons oleh teknisi spesialis. Tanpa chatbot AI atau balasan template otomatis.",
  },
  {
    icon: Cpu,
    title: "Compatibility First",
    description: "Merek, varian chipset, dan status partisi dievaluasi di awal sebelum menentukan tindakan.",
  },
  {
    icon: ShieldCheck,
    title: "Transparan Soal Risiko",
    description: "Potensi pengaruh pada data dan garansi dijelaskan secara terbuka sebelum eksekusi.",
  },
  {
    icon: Laptop,
    title: "Remote Support Terarah",
    description: "Pendampingan jarak jauh dari PC Anda untuk kondisi software yang memang memungkinkan.",
  },
];

export function TrustStrip() {
  return (
    <section aria-labelledby="trust-strip-heading" className="border-b border-border bg-muted/30">
      <div className="container-page py-10 md:py-14">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-accent">
            Prinsip Layanan Kami
          </p>
          <h2 id="trust-strip-heading" className="mt-1 text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Kenapa customer mempercayakan penanganan ke TechFix?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
            Kami memprioritaskan keamanan perangkat dan kejelasan informasi di atas sekadar transaksi cepat.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-border bg-card p-5 shadow-xs transition-colors hover:border-accent/40"
            >
              <span className="flex size-10 items-center justify-center rounded-md bg-accent-subtle text-accent" aria-hidden="true">
                <item.icon className="size-5" />
              </span>
              <h3 className="mt-3.5 text-sm font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
