import { ArrowRight, MessageCircleQuestion } from "lucide-react";
import { faqItems } from "@/data/faq";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { ButtonLink } from "@/components/ui/Button";

export function FAQPreview() {
  const preview = faqItems.slice(0, 5);
  
  return (
    <section className="py-16 md:py-24 bg-background" id="faq" aria-labelledby="faq-preview-heading">
      <div className="container-page max-w-4xl">
        <div className="text-center mb-12">
          <h2 id="faq-preview-heading" className="text-xl font-bold tracking-tight sm:text-2xl text-foreground mb-3">
            Pertanyaan Umum (FAQ)
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            Jawaban cepat untuk kekhawatiran yang paling sering ditanyakan pelanggan.
          </p>
        </div>

        <div className="mb-8">
          <FAQAccordion items={preview} />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-muted/30 border border-border rounded-[var(--radius-lg)] p-5 sm:p-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
              <MessageCircleQuestion className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">Masih ada pertanyaan?</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Jangan ragu untuk bertanya langsung ke tim kami.
              </p>
            </div>
          </div>
          
          <ButtonLink href="/faq" variant="secondary" className="w-full sm:w-auto shrink-0">
            Lihat Semua FAQ <ArrowRight className="w-4 h-4 ml-1" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
