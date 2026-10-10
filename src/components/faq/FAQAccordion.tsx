import { ChevronDown } from "lucide-react";
import type { FAQItem } from "@/types";

/**
 * Accordion FAQ berbasis elemen native <details>/<summary>.
 *
 * Alasannya: tidak butuh JavaScript sama sekali, jadi jawaban tetap bisa dibuka
 * kalau JS gagal dimuat, dan mesin pencari selalu melihat teksnya di HTML awal.
 * Atribut `name` yang sama membuat perilakunya eksklusif — membuka satu jawaban
 * otomatis menutup yang lain — tanpa state di sisi klien.
 */
export function FAQAccordion({ items }: { items: FAQItem[] }) {
  if (items.length === 0) return null;

  return (
    <div className="divide-y divide-border overflow-hidden rounded-lg border border-border bg-card">
      {items.map((item, index) => (
        <details key={item.id} name="faq-accordion" open={index === 0} className="group">
          <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-muted/50 md:px-6 [&::-webkit-details-marker]:hidden">
            <h3 className="text-sm font-semibold text-foreground md:text-base">{item.question}</h3>
            <ChevronDown
              className="size-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <div className="px-5 pb-4 md:px-6">
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {item.answer}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}