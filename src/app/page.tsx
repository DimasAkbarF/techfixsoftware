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
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "TechFix Software — Jasa Service & Perbaikan Software Android",
  description:
    "TechFix Software — platform layanan teknis Android profesional: root, unlock bootloader, fix bootloop, unbrick, flash firmware, dan custom ROM. Konsultasikan kondisi perangkat Anda langsung ke CS manusia.",
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
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