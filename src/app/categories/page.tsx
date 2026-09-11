import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/data/categories";
import { services } from "@/data/services";
import { CategoryIcon } from "@/components/icons/CategoryIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Kategori Layanan Android",
  description:
    "Jelajahi kategori layanan teknis Android: root, unlock bootloader, fix bootloop, unbrick, flash firmware, custom ROM, recovery, dan software repair.",
  path: "/categories",
  keywords: [
    "kategori service android",
    "perbaikan software",
    "tech service android",
    "jasa service hp",
  ],
});

export default function CategoriesPage() {
  return (
    <div className="container-page py-12 md:py-16">
      <Breadcrumbs items={[{ label: "Kategori" }]} />
      <SectionHeading as="h1"
        eyebrow="Kategori"
        title="Jelajahi Kategori Layanan"
        description="Pilih kategori yang paling sesuai dengan kebutuhan atau kendala perangkat Anda."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const count = services.filter((s) => s.categoryId === category.id).length;
          return (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group flex flex-col rounded-lg border border-border bg-card p-6 shadow-card transition-all duration-200 hover:border-accent/40 hover:shadow-card-hover cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <span className="flex size-11 items-center justify-center rounded-md bg-muted text-foreground transition-colors group-hover:bg-accent group-hover:text-white" aria-hidden="true">
                  <CategoryIcon name={category.icon} className="size-5" />
                </span>
                <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                  {count} layanan
                </span>
              </div>
              <h2 className="mt-4 text-lg font-semibold text-foreground">{category.name}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {category.description}
              </p>
              <p className="mt-4 text-sm font-semibold text-accent">Lihat layanan →</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}