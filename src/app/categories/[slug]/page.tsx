import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { categories, getCategoryBySlug } from "@/data/categories";
import { getServicesByCategory } from "@/data/services";
import { CategoryIcon } from "@/components/icons/CategoryIcon";
import { ServiceGrid } from "@/components/service/ServiceGrid";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buildMetadata, absoluteUrl } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return buildMetadata({
    title: category.seo.title,
    description: category.seo.description,
    path: `/categories/${category.slug}`,
    keywords: category.seo.keywords,
  });
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const categoryServices = getServicesByCategory(category.id);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Kategori", item: absoluteUrl("/categories") },
      { "@type": "ListItem", position: 3, name: category.name, item: absoluteUrl(`/categories/${category.slug}`) },
    ],
  };

  return (
    <div className="container-page py-10 md:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Breadcrumbs
        items={[
          { label: "Kategori", href: "/categories" },
          { label: category.name },
        ]}
      />

      <header className="rounded-xl bg-primary p-8 text-primary-foreground md:p-10">
        <div className="flex items-center gap-3">
          <span className="flex size-12 items-center justify-center rounded-lg bg-white/10 text-white" aria-hidden="true">
            <CategoryIcon name={category.icon} className="size-6" />
          </span>
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">{category.name}</h1>
        </div>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85">
          {category.description}
        </p>
      </header>

      <div className="mt-10">
        <p className="mb-6 text-sm text-muted-foreground">
          {categoryServices.length} layanan dalam kategori ini.
        </p>
        {categoryServices.length > 0 ? (
          <ServiceGrid services={categoryServices} />
        ) : (
          <div className="rounded-lg border border-border bg-card p-8 text-center">
            <p className="text-base font-medium text-foreground">Belum ada layanan dalam kategori ini.</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Hubungi CS untuk bertanya tentang ketersediaan layanan pada perangkat Anda.
            </p>
          </div>
        )}
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium text-muted-foreground">Kategori lain:</span>
        {categories
          .filter((c) => c.id !== category.id)
          .map((c) => (
            <Link
              key={c.id}
              href={`/categories/${c.slug}`}
              className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground cursor-pointer"
            >
              {c.name}
            </Link>
          ))}
      </div>
    </div>
  );
}