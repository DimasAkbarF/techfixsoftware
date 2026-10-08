import Link from "next/link";
import { ArrowRight, AlertCircle } from "lucide-react";
import { problemsList } from "@/data/problems";

export function ProblemFirstSection() {
  return (
    <section id="masalah-android" aria-labelledby="problem-section-heading" className="border-b border-border bg-white py-14 md:py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-accent-subtle px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            <AlertCircle className="size-3.5" aria-hidden="true" />
            <span>Problem Discovery</span>
          </div>
          <h2 id="problem-section-heading" className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Masalah Android Anda yang mana?
          </h2>
          <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground">
            Pilih gejala yang paling menggambarkan situasi ponsel Anda saat ini. Kami arahkan langsung ke langkah pemulihan yang tepat.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problemsList.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group flex flex-col justify-between rounded-xl border border-border bg-card p-5 transition-all duration-150 hover:border-accent hover:shadow-card-hover cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-md bg-muted px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {item.tag}
                  </span>
                  <span className="text-[11px] font-semibold text-accent group-hover:underline">
                    Solusi: {item.serviceName}
                  </span>
                </div>

                <h3 className="mt-3 text-base font-bold text-foreground group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {item.symptom}
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-3 text-xs font-semibold text-foreground group-hover:text-accent">
                <span>Pelajari Solusi &amp; Konsultasi</span>
                <ArrowRight className="size-3.5 transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 rounded-lg border border-accent/20 bg-accent-subtle/50 p-4 text-center text-xs sm:text-sm text-foreground">
          <span className="font-semibold text-accent">Gejala Anda tidak tercantum di atas?</span>{" "}
          Gunakan fitur <a href="#interactive-finder" className="underline font-medium hover:text-accent-hover">Ceritakan Masalah Anda</a> di bawah untuk merangkum riwayat HP Anda.
        </div>
      </div>
    </section>
  );
}
