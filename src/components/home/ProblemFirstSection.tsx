import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { problemsList } from "@/data/problems";

export function ProblemFirstSection() {
  return (
    <section id="masalah-android" aria-labelledby="problem-section-heading" className="border-b border-border bg-white py-16 md:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            <span className="size-1.5 rounded-full bg-accent" />
            Diagnostik Gejala Sistem
          </p>
          <h2 id="problem-section-heading" className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Identifikasi Gejala Masalah Perangkat Anda
          </h2>
          <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground">
            Pilih pola kerusakan atau kondisi partisi yang sesuai dengan perangkat Anda saat ini untuk melihat jalur penanganan teknis yang tepat.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problemsList.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group flex flex-col justify-between rounded-lg border border-border bg-card p-5 transition-all duration-150 hover:border-accent cursor-pointer"
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
          <span className="font-semibold text-accent">Gejala sistem Anda membutuhkan analisis khusus?</span>{" "}
          Gunakan fitur <a href="#interactive-finder" className="underline font-medium hover:text-accent-hover">Formulir Diagnostik Terstruktur</a> di bawah untuk merangkum spesifikasi dan riwayat unit Anda.
        </div>
      </div>
    </section>
  );
}
