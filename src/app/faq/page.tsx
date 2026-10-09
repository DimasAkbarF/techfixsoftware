import type { Metadata } from "next";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { faqCategories, faqItems } from "@/data/faq";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig, hasWhatsapp } from "@/config/site";
import { getContactMessage } from "@/lib/contact";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "FAQ Jasa Service HP Android Remote Online",
  description:
    "Jawaban lengkap seputar jasa perbaikan software Android remote: syarat PC, keamanan data perbankan, garansi pengerjaan, & estimasi waktu. Cek di sini!",
  path: "/faq",
});

function FaqPageJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }),
      }}
    />
  );
}

export default function FaqPage() {
  const wa = hasWhatsapp();
  const waHref = wa
    ? `https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(getContactMessage())}`
    : null;

  return (
    <div className="container-page py-12 md:py-16">
      <FaqPageJsonLd />
      <Breadcrumbs items={[{ label: "FAQ" }]} />
      <SectionHeading as="h1"
        eyebrow="FAQ"
        title="Pertanyaan yang sering diajukan"
        description="Jika pertanyaan Anda tidak ada di sini, hubungi CS melalui WhatsApp atau Telegram."
      />

      <div className="space-y-10">
        {faqCategories.map((cat) => {
          const items = faqItems.filter((f) => f.category === cat.id);
          if (items.length === 0) return null;
          return (
            <section key={cat.id} aria-labelledby={`faq-${cat.id}`}>
              <h2 id={`faq-${cat.id}`} className="mb-4 text-lg font-semibold text-foreground md:text-xl">
                {cat.name}
              </h2>
              <FAQAccordion items={items} />
            </section>
          );
        })}
      </div>

      <section className="mt-14 rounded-lg bg-primary p-8 text-center text-primary-foreground md:p-12" aria-labelledby="faq-cta">
        <h2 id="faq-cta" className="text-xl font-bold tracking-tight md:text-2xl">
          Pertanyaan Anda unik? Tanyakan langsung.
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-base text-white/80">
          Kondisi setiap perangkat berbeda. Ceritakan saja gejalanya ke CS kami.
        </p>
        <div className="mt-6 flex justify-center">
          {waHref ? (
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-whatsapp px-6 text-sm font-semibold text-whatsapp-foreground shadow-lg shadow-black/10 transition-all hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring cursor-pointer"
            >
              <WhatsAppIcon className="size-4" />
              Konsultasi via WhatsApp
            </a>
          ) : (
            <a
              href="/contact"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-white px-6 text-sm font-semibold text-primary shadow-lg shadow-black/10 transition-all hover:bg-white/90 cursor-pointer"
            >
              Konsultasi dengan CS Kami
            </a>
          )}
        </div>

      </section>
    </div>
  );
}