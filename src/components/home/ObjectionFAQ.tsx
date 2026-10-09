import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { faqItems } from "@/data/faq";
import { FAQAccordion } from "@/components/faq/FAQAccordion";

export function ObjectionFAQ() {
  // Show key objection questions
  const featuredFaq = faqItems.slice(0, 6);

  return (
    <section aria-labelledby="faq-section-heading" className="border-b border-border bg-white py-16 md:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            <span className="size-1.5 rounded-full bg-accent" />
            Transparansi Prosedur &amp; FAQ
          </p>
          <h2 id="faq-section-heading" className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Pertanyaan Umum Seputar Keamanan &amp; Prosedur
          </h2>
          <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground">
            Penjelasan transparan seputar integritas partisi data, validitas remote support via AnyDesk, dan kebijakan garansi sebelum penanganan dimulai.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <FAQAccordion items={featuredFaq} />
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
          >
            <span>Lihat Semua Pertanyaan &amp; Jawaban Lengkap di FAQ</span>
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
