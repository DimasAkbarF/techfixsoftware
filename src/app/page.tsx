import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ProblemFirstSection } from "@/components/home/ProblemFirstSection";
import { InteractiveServiceFinder } from "@/components/home/InteractiveServiceFinder";
import { GroupedServicesSection } from "@/components/home/GroupedServicesSection";
import { ComparisonSection } from "@/components/home/ComparisonSection";
import { WhyTechFix } from "@/components/home/WhyTechFix";
import { HowItWorksSixSteps } from "@/components/home/HowItWorksSixSteps";
import { RealSocialProof } from "@/components/home/RealSocialProof";
import { GuidesPreview } from "@/components/home/GuidesPreview";
import { ObjectionFAQ } from "@/components/home/ObjectionFAQ";
import { FinalConsultationCTA } from "@/components/home/FinalConsultationCTA";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { services } from "@/data/services";

export const metadata: Metadata = buildMetadata({
  title: "Jasa Android & Technical Support | TechFix Software",
  description:
    "TechFix Software bantu atasi masalah Android: bootloop, flashing, firmware, bootloader, recovery, root, custom ROM, dan optimasi. Konsultasi teknisi.",
  path: "/",
  absoluteTitle: true,
  keywords: [
    "jasa perbaikan software android",
    "tech service android",
    "service software hp",
    "jasa teknisi software hp",
    "fix bootloop",
    "flash firmware",
    "unbrick android",
    "root android magisk",
    "unlock bootloader",
    "custom rom android",
  ],
});

export default function HomePage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Layanan Software Android TechFix Software",
    url: absoluteUrl("/"),
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
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
          __html: JSON.stringify(itemListJsonLd),
        }}
      />
      {/* 1. Hero */}
      <Hero />

      {/* 2. Trust Strip */}
      <TrustStrip />

      {/* 3. Problem-First Section */}
      <ProblemFirstSection />

      {/* 4. Interactive Guided Service Finder */}
      <InteractiveServiceFinder />

      {/* 5. Grouped Technical Services */}
      <GroupedServicesSection />

      {/* 6. Comparison / Decision Content */}
      <ComparisonSection />

      {/* 7. Why TechFix */}
      <WhyTechFix />

      {/* 8. How It Works (6 Steps) */}
      <HowItWorksSixSteps />

      {/* 9. Verified Social Proof & Screenshots */}
      <RealSocialProof />

      {/* 10. Educational Guides Preview */}
      <GuidesPreview />

      {/* 11. Objection Handling FAQ */}
      <ObjectionFAQ />

      {/* 12. Final Consultation CTA */}
      <FinalConsultationCTA />
    </>
  );
}