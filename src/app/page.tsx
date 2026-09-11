import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FeaturedServices } from "@/components/home/FeaturedServices";
import { QuickHelp } from "@/components/home/QuickHelp";
import { HowItWorksPreview } from "@/components/home/HowItWorksPreview";
import { RemoteGuidePreview } from "@/components/home/RemoteGuidePreview";
import { WhyChoose } from "@/components/home/WhyChoose";
import { FAQPreview } from "@/components/home/FAQPreview";
import { FinalCTA } from "@/components/home/FinalCTA";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { getFeaturedServices } from "@/data/services";

export const metadata: Metadata = buildMetadata({
  title: "TechFix Software — Jasa Service & Perbaikan Software Android",
  description:
    "TechFix Software — jasa service & perbaikan software Android profesional: root, unlock bootloader, fix bootloop, unbrick, flash firmware, custom ROM, recovery, dan software repair. Konsultasikan kondisi perangkat Anda langsung ke CS manusia via WhatsApp atau Telegram.",
  path: "/",
  absoluteTitle: true,
  keywords: [
    "jasa perbaikan software android",
    "tech service android",
    "service software hp",
    "jasa teknisi software",
    "fix bootloop",
    "flash firmware",
    "unbrick android",
    "root android",
  ],
});

export default function HomePage() {
  const featured = getFeaturedServices();
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Layanan Unggulan TechFix Software",
    url: absoluteUrl("/"),
    numberOfItems: featured.length,
    itemListElement: featured.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/services/${service.slug}`),
      name: service.name,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            itemListJsonLd,
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: siteConfig.name,
              alternateName: siteConfig.alternateName,
              url: absoluteUrl("/"),
            },
          ]),
        }}
      />
      <Hero />
      <CategoryGrid />
      <FeaturedServices />
      <QuickHelp />
      <HowItWorksPreview />
      <RemoteGuidePreview />
      <WhyChoose />
      <FAQPreview />
      <FinalCTA />
    </>
  );
}