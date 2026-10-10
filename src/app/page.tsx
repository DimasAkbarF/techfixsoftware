import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ProblemFirstSection } from "@/components/home/ProblemFirstSection";
import { InteractiveServiceFinder } from "@/components/home/InteractiveServiceFinder";
import { GroupedServicesSection } from "@/components/home/GroupedServicesSection";
import { ComparisonSection } from "@/components/home/ComparisonSection";
import { WhyTechFix } from "@/components/home/WhyTechFix";
import { HowItWorksSixSteps } from "@/components/home/HowItWorksSixSteps";
import { RemoteGuidePreview } from "@/components/home/RemoteGuidePreview";
import { RealSocialProof } from "@/components/home/RealSocialProof";
import { GuidesPreview } from "@/components/home/GuidesPreview";
import { FAQPreview } from "@/components/home/FAQPreview";
import { FinalCTA } from "@/components/home/FinalCTA";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { services } from "@/data/services";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = buildMetadata({
  title: "Jasa Service HP Bootloop, Root & Flash Android Remote | TechFix",
  description:
    "Jasa service software Android online via remote AnyDesk & TeamViewer: fix bootloop, root Magisk/KernelSU, flash firmware, unbrick, dan UBL. Garansi No Fix No Fee!",
  path: "/",
  absoluteTitle: true,
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

  const homeFaqItems = faqItems.slice(0, 5);
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Cara Menggunakan Jasa Service & Pemulihan Software Android Remote",
    description:
      "Panduan 6 langkah mudah memperbaiki HP Android yang bootloop, butuh root, atau flash firmware dari rumah melalui bantuan jarak jauh.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Konsultasi & Diagnosa Awal",
        text: "Sampaikan kendala perangkat Anda via WhatsApp untuk diagnosa kemungkinan penyebab dan opsi penanganan.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Estimasi Biaya & Waktu",
        text: "Dapatkan transparansi total terkait biaya, durasi pengerjaan, dan risiko data sebelum pengerjaan dimulai.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Persiapan Perangkat",
        text: "Siapkan PC/laptop Windows, kabel data berkualitas, dan koneksi internet stabil di rumah Anda.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Eksekusi Sistem",
        text: "Teknisi mengeksekusi perbaikan firmware, flashing, atau rooting melalui sesi remote yang Anda pantau langsung.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Testing & Quality Control",
        text: "Pengecekan fungsi penting smartphone (sinyal, kamera, sistem) untuk memastikan perangkat berfungsi normal.",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Serah Terima & Pembayaran",
        text: "Pembayaran dilakukan setelah perangkat terbukti berhasil pulih sesuai kesepakatan (Garansi No Fix, No Fee).",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([itemListJsonLd, faqJsonLd, howToJsonLd]),
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

      {/* 9. Remote Support */}
      <RemoteGuidePreview />

      {/* 10. Verified Social Proof & Screenshots */}
      <RealSocialProof />

      {/* 11. Educational Guides Preview */}
      <GuidesPreview />

      {/* 12. FAQ (Clean Accordion) */}
      <FAQPreview />

      {/* 13. Final CTA Banner */}
      <FinalCTA />
    </>
  );
}