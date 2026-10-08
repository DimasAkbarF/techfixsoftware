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

      {/* Uniform service grid — same rhythm as the rest of the site */}
      <ServiceGrid services={services} />

      {/* Category reference — one tidy row per category, each linking to its service */}
      <section aria-labelledby="category-heading" className="mt-16 border-t border-border pt-10">
        <h2
          id="category-heading"
          className="text-lg font-bold tracking-tight text-foreground md:text-xl"
        >
          Kelompok Layanan
        </h2>
        <p className="mt-1 max-w-3xl text-sm text-muted-foreground">
          Layanan dikelompokkan berdasarkan jenis penanganan agar mudah dicocokkan dengan gejala yang
          Anda alami.
        </p>
        <div className="mt-6 grid gap-x-10 gap-y-5 sm:grid-cols-2">
          {categories.map((category) => {
            const primary = getServicesByCategory(category.id)[0];
            return (
              <div key={category.id} className="border-t border-border pt-3">
                <div className="flex items-center gap-2">
                  <CategoryIcon name={category.icon} className="size-4 shrink-0 text-accent" />
                  <h3 className="text-sm font-bold text-foreground">{category.name}</h3>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {category.description}
                </p>
                {primary && (
                  <Link
                    href={`/services/${primary.slug}`}
                    className="mt-2.5 inline-flex items-center gap-1 text-xs font-semibold text-accent transition-colors hover:text-accent-hover"
                  >
                    <span>{primary.name}</span>
                    <ArrowRight className="size-3" aria-hidden="true" />
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </section>

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
