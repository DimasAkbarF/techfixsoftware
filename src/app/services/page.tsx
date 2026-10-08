import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HelpCircle, ShieldCheck } from "lucide-react";
import { services, getServicesByCategory } from "@/data/services";
import { categories } from "@/data/categories";
import { CategoryIcon } from "@/components/icons/CategoryIcon";
import { ServiceGrid } from "@/components/service/ServiceGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { hasWhatsapp, whatsappLink } from "@/config/site";
import { getContactMessage } from "@/lib/contact";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Katalog Layanan Software Android Lengkap",
  description:
    "Katalog layanan teknis Android TechFix: fix bootloop, unbrick, flash firmware, root Magisk, custom ROM, dan unlock bootloader. Konsultasi.",
  path: "/services",
  keywords: [
    "jasa service android",
    "perbaikan software android",
    "katalog layanan techfix",
    "jasa teknisi software hp",
    "fix bootloop xiaomi samsung poco",
  ],
});

export default function ServicesPage() {
  const isWa = hasWhatsapp();
  const waHref = isWa ? whatsappLink(getContactMessage()) : null;

  return (
    <div className="container-page py-10 md:py-16">
      <Breadcrumbs items={[{ label: "Layanan" }]} />

      <SectionHeading
        as="h1"
        eyebrow="Katalog Spesialis"
        title="Daftar Layanan Teknis Software Android"
        description={`${services.length} layanan terarah tersedia. Baca persyaratan teknis dan risikonya secara transparan sebelum memulai konsultasi.`}
      />

      {/* Problem Discovery Shortcut */}
      <div className="mt-4 mb-6 rounded-xl border border-accent/20 bg-accent-subtle/50 p-4 text-xs sm:text-sm text-foreground flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <HelpCircle className="size-4.5 text-accent shrink-0" />
          <span>
            <strong>Bingung memilih nama teknis?</strong> Kenali masalah berdasarkan gejala ponsel Anda.
          </span>
        </div>
        <Link
          href="/#masalah-android"
          className="inline-flex items-center gap-1 font-semibold text-accent hover:underline shrink-0"
        >
          <span>Buka Problem Finder Gejala</span>
          <ArrowRight className="size-3.5" />
        </Link>
      </div>

      {/* Category quick nav — in-page anchors to the grouped sections below */}
      <nav
        aria-label="Kategori layanan"
        className="mb-10 flex flex-wrap gap-2 border-y border-border py-4"
      >
        {categories.map((category) => (
          <a
            key={category.id}
            href={`#${category.slug}`}
            className="rounded-md px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:bg-accent-subtle hover:text-accent"
          >
            {category.shortName}
          </a>
        ))}
      </nav>

      {/* Services grouped by category — each group carries its own explanation
          so the hub page has unique, useful text instead of a bare grid. */}
      <div className="space-y-12">
        {categories.map((category) => {
          const categoryServices = getServicesByCategory(category.id);
          if (categoryServices.length === 0) return null;
          return (
            <section key={category.id} id={category.slug} className="scroll-mt-24">
              <div className="flex items-center gap-2.5">
                <CategoryIcon name={category.icon} className="size-5 shrink-0 text-accent" />
                <h2 className="text-lg font-bold tracking-tight text-foreground md:text-xl">
                  {category.name}
                </h2>
              </div>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                {category.description}
              </p>
              <div className="mt-5">
                <ServiceGrid services={categoryServices} />
              </div>
            </section>
          );
        })}
      </div>

      {/* Bottom Conversion Section */}
      <section className="mt-14 rounded-2xl bg-primary p-8 text-center text-primary-foreground sm:p-12">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white mb-3">
          <ShieldCheck className="size-3.5 text-whatsapp" />
          <span>Konsultasi Bebas Tekanan</span>
        </div>

        <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl">
          Belum yakin layanan mana yang tepat untuk HP Anda?
        </h2>

        <p className="mx-auto mt-2 max-w-lg text-xs sm:text-sm text-white/80 leading-relaxed">
          Cukup ceritakan apa yang terjadi ke teknisi kami. Kami bantu periksa varian perangkat dan merekomendasikan solusi yang paling hemat risiko.
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
              <span>Konsultasikan via WhatsApp</span>
            </a>
          ) : (
            <Link
              href="/contact"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-white px-6 text-sm font-semibold text-primary hover:bg-white/90 transition-colors cursor-pointer"
            >
              <span>Hubungi CS Kami</span>
            </Link>
          )}

          <Link
            href="/contact"
            className="inline-flex h-11 items-center gap-1.5 rounded-md border border-white/20 bg-white/5 px-5 text-sm font-medium text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <span>Buka Formulir Kontak</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
