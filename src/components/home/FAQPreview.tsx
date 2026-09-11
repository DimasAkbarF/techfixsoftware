import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { faqItems } from "@/data/faq";
import { FAQAccordion } from "@/components/faq/FAQAccordion";

export function FAQPreview() {
  const preview = faqItems.slice(0, 5);
  return (
    <section className="container-page py-16 md:py-24" aria-labelledby="faq-preview-heading">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 id="faq-preview-heading" className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            Pertanyaan umum
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Jawaban singkat untuk pertanyaan yang sering diajukan.
          </p>
        </div>
        <Link
          href="/faq"
          className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:text-accent-hover transition-colors cursor-pointer"
        >
          Semua FAQ
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </Link>
      </div>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_260px]">
        <FAQAccordion items={preview} />
        <div className="lg:pt-2">
          <div className="rounded-lg border border-border bg-background p-5">
            <p className="text-sm font-semibold text-foreground">Masih ada pertanyaan?</p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              Bila kondisi perangkat Anda tidak terwakili di sini, langsung tanyakan ke CS.
            </p>
            <Link
              href="/contact"
              className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-accent hover:text-accent-hover transition-colors cursor-pointer"
            >
              Hubungi kami
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
