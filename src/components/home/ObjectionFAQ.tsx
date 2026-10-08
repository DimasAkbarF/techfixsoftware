import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import { faqItems } from "@/data/faq";
import { FAQAccordion } from "@/components/faq/FAQAccordion";

export function ObjectionFAQ() {
  // Show key objection questions
  const featuredFaq = faqItems.slice(0, 6);

  return (
    <section aria-labelledby="faq-section-heading" className="border-b border-border bg-white py-14 md:py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-accent-subtle px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            <HelpCircle className="size-3.5" aria-hidden="true" />
            <span>Transparansi Tanya Jawab</span>
          </div>
          <h2 id="faq-section-heading" className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Jawaban Langsung untuk Keraguan Anda
          </h2>
          <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground">
            Kami menjawab pertanyaan paling krusial seputar keamanan data, keabsahan proses remote, dan biaya sebelum Anda menghubungi kami.
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
