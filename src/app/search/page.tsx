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
  service: "Layanan Teknis",
  guide: "Panduan & Edukasi",
  category: "Kategori Layanan",
  faq: "Bantuan & Tanya Jawab",
};

export default async function SearchPage({ searchParams }: PageProps) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";
  const results = query.length >= 2 ? searchAll(query, 24) : [];
  const grouped = groupByType(results);
  const hasResults = results.length > 0;
  const suggestions = getSuggestedQueries();

  return (
    <div className="container-page py-10 md:py-16">
      <Breadcrumbs items={[{ label: "Cari" }]} />

      {/* Editorial Header */}
      <header className="mt-4 max-w-[600px]">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Cari layanan atau masalah
        </h1>
        <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
          Temukan solusi teknis berdasarkan nama masalah, gejala fisik HP, atau panduan troubleshooting.
        </p>
      </header>

      {/* Primary Interactive Element: Search Form */}
      <div className="mt-6 max-w-[600px]">
        <SearchForm key={query} autoFocus defaultValue={query} />

        {/* Microcopy Helper */}
        <p className="mt-2.5 text-xs text-muted-foreground">
          Contoh:{" "}
          <span className="font-medium text-foreground/80">bootloop</span>,{" "}
          <span className="font-medium text-foreground/80">root Android</span>,{" "}
          <span className="font-medium text-foreground/80">flash firmware</span>,{" "}
          <span className="font-medium text-foreground/80">unbrick</span>
        </p>
      </div>

      {/* Secondary Utility: Suggested Keywords or Search Results */}
      <div className="mt-8 sm:mt-10">
        {query.length < 2 ? (
          <div className="max-w-[600px]">
            <h2 className="mb-3 text-[11px] font-mono font-semibold uppercase tracking-wider text-muted-foreground">
              Coba Pencarian Berikut
            </h2>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <Link
                  key={s}
                  href={`/search?q=${encodeURIComponent(s)}`}
                  className="rounded-md border border-border bg-white px-3 py-1.5 text-xs sm:text-[13px] font-medium text-foreground transition-all duration-150 hover:border-accent/40 hover:bg-accent-subtle/30 hover:text-accent cursor-pointer shadow-xs"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>
        ) : !hasResults ? (
          <div className="max-w-[600px] rounded-lg border border-border bg-white p-7 sm:p-8 text-center shadow-xs">
            <span
              className="mx-auto mb-3.5 flex size-11 items-center justify-center rounded-full bg-muted text-muted-foreground"
              aria-hidden="true"
            >
              <Search className="size-5" />
            </span>
            <h2 className="text-base sm:text-lg font-bold text-foreground">
              Tidak menemukan hasil untuk &ldquo;{query}&rdquo;
            </h2>
            <p className="mx-auto mt-2 max-w-md text-xs sm:text-sm leading-relaxed text-muted-foreground">
              Coba gunakan istilah umum seperti &ldquo;bootloop&rdquo;, &ldquo;root&rdquo;, atau
              &ldquo;flash firmware&rdquo;. Anda juga bisa konsultasi langsung dengan teknisi kami via WhatsApp.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center gap-2 rounded-md bg-accent px-4 text-xs sm:text-sm font-semibold text-white hover:bg-accent-hover transition-colors cursor-pointer shadow-xs"
              >
                Konsultasikan Masalah
              </Link>
              <div className="flex flex-wrap gap-2">
                {suggestions.slice(0, 3).map((s) => (
                  <Link
                    key={s}
                    href={`/search?q=${encodeURIComponent(s)}`}
                    className="inline-flex h-10 items-center rounded-md border border-border bg-white px-3 text-xs sm:text-[13px] font-medium text-foreground hover:border-accent/40 hover:text-accent hover:bg-accent-subtle/20 transition-colors cursor-pointer shadow-xs"
                  >
                    {s}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-8 max-w-4xl">
            <div className="border-b border-border/80 pb-3">
              <p className="text-xs sm:text-sm text-muted-foreground">
                Menampilkan <span className="font-semibold text-foreground">{results.length}</span> hasil pencarian untuk{" "}
                <span className="font-semibold text-foreground">&ldquo;{query}&rdquo;</span>
              </p>
            </div>

            {Object.entries(grouped).map(([type, items]) => (
              <section key={type} aria-labelledby={`result-${type}`}>
                <div className="mb-3 flex items-center gap-2">
                  <h2
                    id={`result-${type}`}
                    className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    {typeLabels[type] ?? type}
                  </h2>
                  <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-mono font-semibold text-muted-foreground">
                    {items.length}
                  </span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((result) => (
                    <Link
                      key={`${result.type}-${result.title}`}
                      href={result.href}
                      className="group flex flex-col justify-between rounded-lg border border-border bg-white p-4.5 transition-all duration-150 hover:border-accent/50 hover:shadow-card-hover cursor-pointer shadow-xs"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-accent">
                            {typeLabels[result.type] ?? result.type}
                          </span>
                        </div>
                        <h3 className="mt-1.5 text-sm sm:text-base font-bold text-foreground group-hover:text-accent transition-colors">
                          {result.title}
                        </h3>
                        {result.type !== "faq" && result.subtitle ? (
                          <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                            {result.subtitle}
                          </p>
                        ) : null}
                      </div>

                      <div className="mt-4 flex items-center gap-1 border-t border-border/50 pt-2.5 text-xs font-semibold text-accent">
                        <span>Buka Solusi</span>
                        <ArrowRight
                          className="size-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </div>
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