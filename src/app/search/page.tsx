import type { Metadata } from "next";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import { searchAll, getSuggestedQueries } from "@/lib/search";
import { SearchForm } from "@/components/search/SearchForm";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import type { SearchResult } from "@/types";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Cari Layanan Android",
  description:
    "Cari layanan teknis Android berdasarkan nama, masalah, atau kata kunci: bootloop, root, flash firmware, unbrick, custom ROM, dan lainnya.",
  path: "/search",
  noindex: true,
});

interface PageProps {
  searchParams: Promise<{ q?: string }>;
}

function groupByType(
  results: SearchResult[],
): Record<string, SearchResult[]> {
  return results.reduce<Record<string, SearchResult[]>>((acc, result) => {
    (acc[result.type] ??= []).push(result);
    return acc;
  }, {});
}

const typeLabels: Record<string, string> = {
  service: "Layanan",
  category: "Kategori",
  faq: "Bantuan",
};

export default async function SearchPage({ searchParams }: PageProps) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";
  const results = query.length >= 2 ? searchAll(query, 24) : [];
  const grouped = groupByType(results);
  const hasResults = results.length > 0;
  const suggestions = getSuggestedQueries();

  return (
    <div className="container-page py-10 md:py-14">
      <Breadcrumbs items={[{ label: "Cari" }]} />
      <header className="max-w-2xl">
        <h1 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Cari layanan atau masalah
        </h1>
        <p className="mt-2 text-base text-muted-foreground">
          Temukan layanan berdasarkan nama, gejala, atau kata kunci teknis.
        </p>
      </header>

      <div className="mt-6 max-w-2xl">
        <SearchForm autoFocus name="q2" />
      </div>

      <div className="mt-10">
        {query.length < 2 ? (
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Coba pencarian berikut
            </p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <Link
                  key={s}
                  href={`/search?q=${encodeURIComponent(s)}`}
                  className="rounded-md border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent cursor-pointer"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>
        ) : !hasResults ? (
          <div className="max-w-2xl rounded-lg border border-border bg-card p-8 text-center">
            <span className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-muted text-muted-foreground" aria-hidden="true">
              <Search className="size-6" />
            </span>
            <h2 className="text-lg font-semibold text-foreground">
              Tidak menemukan layanan yang sesuai
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
              Coba gunakan kata kunci lain seperti &ldquo;bootloop&rdquo;, &ldquo;root&rdquo;, atau
              &ldquo;flash firmware&rdquo;. Anda juga bisa menghubungi CS untuk konsultasi langsung.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-5 text-sm font-semibold text-white hover:bg-accent-hover transition-colors cursor-pointer"
              >
                Konsultasi dengan CS
              </Link>
              <div className="flex flex-wrap gap-2">
                {suggestions.slice(0, 3).map((s) => (
                  <Link
                    key={s}
                    href={`/search?q=${encodeURIComponent(s)}`}
                    className="inline-flex h-11 items-center gap-1.5 rounded-md border border-border bg-card px-4 text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-colors cursor-pointer"
                  >
                    {s}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-10">
            <p className="text-sm text-muted-foreground">
              Menampilkan {results.length} hasil untuk &ldquo;{query}&rdquo;
            </p>
            {Object.entries(grouped).map(([type, items]) => (
              <section key={type} aria-labelledby={`result-${type}`}>
                <h2 id={`result-${type}`} className="mb-4 text-lg font-semibold text-foreground">
                  {typeLabels[type] ?? type}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((result) => (
                    <Link
                      key={`${result.type}-${result.title}`}
                      href={result.href}
                      className="group flex flex-col rounded-lg border border-border bg-card p-5 transition-all duration-200 hover:border-accent/40 cursor-pointer"
                    >
                      <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                        {typeLabels[result.type]}
                      </p>
                      <h3 className="mt-1.5 text-base font-semibold text-foreground">
                        {result.title}
                      </h3>
                      {result.type !== "faq" ? (
                        <p className="mt-1.5 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                          {result.subtitle}
                        </p>
                      ) : null}
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                        Buka
                        <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}