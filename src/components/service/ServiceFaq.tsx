import Link from "next/link";
import type { FAQItem } from "@/types";
import { FAQAccordion } from "@/components/faq/FAQAccordion";

export function ServiceFaq({ items }: { items: FAQItem[] }) {
  return (
    <section aria-labelledby="service-faq-heading" className="max-w-3xl">
      <h2 id="service-faq-heading" className="text-lg font-bold tracking-tight text-foreground md:text-xl">
        Pertanyaan umum seputar layanan ini
      </h2>
      <div className="mt-3">
        <FAQAccordion items={items} />
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-accent">
        <Link href="/faq" className="transition-colors hover:text-accent-hover cursor-pointer">
          Semua pertanyaan umum (FAQ) →
        </Link>
        <Link href="/remote-guide" className="transition-colors hover:text-accent-hover cursor-pointer">
          Panduan persiapan remote →
        </Link>
      </div>
    </section>
  );
}