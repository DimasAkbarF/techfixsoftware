import type { Metadata } from "next";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { TestimonialScreenshotCard } from "@/components/testimonial/TestimonialCard";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Testimoni Pelanggan",
  description:
    "Pengalaman pelanggan menggunakan layanan TechFix Software.",
  path: "/testimonials",
  keywords: [
    "testimoni techfix software",
    "review layanan android",
    "pengalaman pelanggan",
  ],
});

export default function TestimonialsPage() {
  return (
    <div className="container-page py-12 md:py-16">
      <Breadcrumbs items={[{ label: "Testimoni" }]} />
      <SectionHeading
        as="h1"
        eyebrow="Testimoni"
        title="Pengalaman pelanggan bersama TechFix Software"
        description="Beberapa pengalaman setelah menggunakan layanan kami."
      />

      <p className="mb-6 text-sm text-muted-foreground md:mb-8">
        Dikutip dari percakapan pelanggan di kanal resmi kami.
      </p>

      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((item) => (
          <TestimonialScreenshotCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}