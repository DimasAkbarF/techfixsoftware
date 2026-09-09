import Link from "next/link";
import { SearchX, ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";

export default function NotFound() {
  return (
    <div className="container-page py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="mx-auto mb-6 flex size-14 items-center justify-center rounded-full bg-muted text-muted-foreground" aria-hidden="true">
          <SearchX className="size-7" />
        </span>
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Halaman tidak ditemukan
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
          Halaman yang Anda cari tidak ada atau telah dipindahkan. Coba kembali ke beranda
          atau telusuri kategori layanan.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition-colors cursor-pointer"
          >
            Kembali ke Beranda
          </Link>
          <Link
            href="/services"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-border bg-card px-5 text-sm font-semibold text-foreground hover:border-accent hover:text-accent transition-colors cursor-pointer"
          >
            Lihat Semua Layanan
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-3xl">
        <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Atau cari berdasarkan kategori
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-accent hover:text-foreground cursor-pointer"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}