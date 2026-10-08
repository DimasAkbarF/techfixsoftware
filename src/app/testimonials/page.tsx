import type { Metadata } from "next";
import Link from "next/link";
import { MessageSquareQuote, ShieldCheck, ArrowRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { TestimonialScreenshotCard } from "@/components/testimonial/TestimonialCard";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { hasWhatsapp, whatsappLink } from "@/config/site";
import { getContactMessage } from "@/lib/contact";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Testimoni Pelanggan",
  description:
    "Bukti percakapan dan pengalaman pelanggan layanan perbaikan software Android bersama TechFix Software: fix bootloop, custom ROM, dan software repair.",
  path: "/testimonials",
  keywords: [
    "testimoni techfix software",
    "review layanan android",
    "pengalaman pelanggan bootloop",
    "bukti jasa root android",
  ],
});

export default function TestimonialsPage() {
  const isWa = hasWhatsapp();
  const waHref = isWa ? whatsappLink(getContactMessage()) : null;

  return (
    <div className="container-page py-10 md:py-16">
      <Breadcrumbs items={[{ label: "Testimoni" }]} />

      <SectionHeading
        as="h1"
        eyebrow="Bukti Sosial Asli"
        title="Pengalaman pelanggan bersama TechFix"
        description="Dihadirkan secara transparan dari tangkapan layar percakapan pelanggan kami di kanal komunikasi resmi."
      />

      {/* Context Notice Banner */}
      <div className="mt-4 mb-8 rounded-xl border border-accent/20 bg-accent-subtle/50 p-4 text-xs sm:text-sm text-foreground flex items-start gap-3">
        <MessageSquareQuote className="size-5 shrink-0 text-accent mt-0.5" />
        <div>
          <p className="font-semibold text-accent">
            Prinsip Bukti Sosial TechFix Software:
          </p>
          <p className="mt-0.5 text-muted-foreground text-xs leading-relaxed">
            Testimoni ditampilkan berdasarkan percakapan pelanggan yang tersedia. Kami tidak menggunakan review palsu, nama rekaan, maupun angka rating buatan.
          </p>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item) => (
          <TestimonialScreenshotCard key={item.id} item={item} />
        ))}
      </div>

      {/* Consultation Conversion CTA */}
      <section className="mt-14 rounded-2xl bg-primary p-8 text-center text-primary-foreground sm:p-12">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white mb-3">
          <ShieldCheck className="size-3.5 text-whatsapp" />
          <span>Solusi Nyata Tanpa Spekulasi</span>
        </div>

        <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl">
          Ingin HP Android Anda kembali normal seperti mereka?
        </h2>

        <p className="mx-auto mt-2 max-w-lg text-xs sm:text-sm text-white/80 leading-relaxed">
          Konsultasikan gejala yang dialami ponsel Anda ke teknisi kami sekarang. Kami bantu periksa kemungkinan penanganannya.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          {waHref ? (
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-whatsapp px-6 text-sm font-semibold text-whatsapp-foreground shadow-sm hover:brightness-95 transition-all cursor-pointer"
            >
              <WhatsAppIcon className="size-4 shrink-0" />
              <span>Konsultasi Gratis via WhatsApp</span>
            </a>
          ) : (
            <Link
              href="/contact"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-white px-6 text-sm font-semibold text-primary hover:bg-white/90 transition-colors cursor-pointer"
            >
              <span>Hubungi Kami</span>
            </Link>
          )}

          <Link
            href="/services"
            className="inline-flex h-11 items-center gap-1.5 rounded-md border border-white/20 bg-white/5 px-5 text-sm font-medium text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <span>Jelajahi Katalog Layanan</span>
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}