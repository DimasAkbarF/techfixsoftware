import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { TestimonialScreenshotCard } from "@/components/testimonial/TestimonialCard";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { hasWhatsapp, whatsappLink } from "@/config/site";
import { getContactMessage } from "@/lib/contact";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Testimoni Service Software HP Android",
  description:
    "Bukti chat WhatsApp pengerjaan remote service Android: fix bootloop Xiaomi, flashing Samsung, hingga root Poco. Simak ulasan pelanggan TechFix Software!",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  const isWa = hasWhatsapp();
  const waHref = isWa ? whatsappLink(getContactMessage()) : null;

  return (
    <div className="container-page py-10 md:py-16">
      <Breadcrumbs items={[{ label: "Testimoni" }]} />

      <SectionHeading
        as="h1"
        eyebrow="Dokumentasi Kasus &amp; Reputasi"
        title="Dokumentasi Pengalaman Pelanggan &amp; Kasus Riil"
        description="Arsip tangkapan layar percakapan dan evaluasi penyelesaian teknis dari pelanggan di kanal resmi TechFix Software."
      />

      {/* Context Notice Banner */}
      <div className="mt-4 mb-8 rounded-lg border border-accent/20 bg-accent-subtle/50 p-4 border-l-4 border-l-accent text-xs sm:text-sm text-foreground">
        <p className="font-semibold text-accent">
          Standar Dokumentasi Kasus Pelanggan:
        </p>
        <p className="mt-0.5 text-muted-foreground text-xs leading-relaxed">
          Seluruh rekaman testimoni merupakan arsip tangkapan layar percakapan riil dari sesi konsultasi dan penyelesaian teknis perangkat bersama pelanggan resmi kami.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item) => (
          <TestimonialScreenshotCard key={item.id} item={item} />
        ))}
      </div>

      {/* Consultation Conversion CTA */}
      <section className="mt-14 rounded-lg bg-primary p-8 text-center text-primary-foreground sm:p-12">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/90 mb-3">
          <span className="size-1.5 rounded-full bg-accent" />
          <span>Solusi Nyata Tanpa Spekulasi</span>
        </p>

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