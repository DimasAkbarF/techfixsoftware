import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageSquareQuote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function RealSocialProof() {
  return (
    <section aria-labelledby="social-proof-heading" className="border-b border-border bg-white py-14 md:py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-accent-subtle px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            <MessageSquareQuote className="size-3.5" aria-hidden="true" />
            <span>Social Proof Nyata</span>
          </div>
          <h2 id="social-proof-heading" className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Pengalaman Pelanggan Bersama TechFix Software
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
            Testimoni ditampilkan berdasarkan tangkapan layar percakapan pelanggan yang tersedia di kanal resmi kami tanpa ulasan palsu atau karangan.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-xs transition-colors hover:border-accent/40"
            >
              {/* Screenshot Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                <Image
                  src={item.image}
                  alt={`Tangkapan layar testimoni percakapan pelanggan untuk layanan ${item.services.join(", ")}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-200 group-hover:scale-102"
                />
              </div>

              {/* Service tags */}
              <div className="p-4">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Layanan yang ditangani:
                </p>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {item.services.map((svc) => (
                    <span
                      key={svc}
                      className="rounded-md bg-accent-subtle/80 px-2 py-0.5 text-xs font-semibold text-accent"
                    >
                      {svc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-xs sm:text-sm font-semibold text-foreground hover:border-accent hover:text-accent transition-colors cursor-pointer"
          >
            <span>Lihat lebih banyak pengalaman pelanggan</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
