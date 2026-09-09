import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import { categories } from "@/data/categories";
import { ServiceGrid } from "@/components/service/ServiceGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Semua Layanan Android",
  description:
    "Jelajahi semua layanan teknis Android kami: root, unlock bootloader, fix bootloop, unbrick, flash firmware, custom ROM, recovery, dan software repair.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="container-page py-10 md:py-14">
      <Breadcrumbs items={[{ label: "Layanan" }]} />
      <SectionHeading as="h1"
        eyebrow="Katalog Layanan"
        title="Semua Layanan Android"
        description={`${services.length} layanan tersedia. Baca detail, persyaratan, dan risikonya, lalu konsultasikan perangkat Anda dengan CS.`}
      />

      <div className="mb-8 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.slug}`}
            className="rounded-md border border-border bg-card px-3 py-2 text-center text-xs font-medium text-muted-foreground transition-all hover:border-accent/40 hover:text-foreground cursor-pointer"
          >
            {category.shortName}
          </Link>
        ))}
      </div>

      <ServiceGrid services={services} />
    </div>
  );
}
