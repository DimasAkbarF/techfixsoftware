import Link from "next/link";
import { categories } from "@/data/categories";
import { CategoryIcon } from "@/components/icons/CategoryIcon";

export function CategoryGrid() {
  return (
    <section className="container-page py-20 md:py-32" aria-labelledby="categories-heading">
      <h2 id="categories-heading" className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
        Kategori layanan
      </h2>
      <p className="mt-3 text-sm text-muted-foreground">
        Jelajahi berdasarkan jenis masalah atau kebutuhan perangkat Anda.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.slug}`}
            className="group flex flex-col rounded-lg border border-border bg-card p-4 transition-all duration-200 hover:border-accent/40 cursor-pointer"
          >
            <span className="flex size-8 items-center justify-center rounded-md bg-muted text-muted-foreground transition-colors group-hover:bg-accent group-hover:text-white" aria-hidden="true">
              <CategoryIcon name={category.icon} className="size-4" />
            </span>
            <span className="mt-3 text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
              {category.name}
            </span>
            <span className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
              {category.description}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
