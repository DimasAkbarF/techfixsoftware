"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight } from "lucide-react";
import { searchAll, getSuggestedQueries } from "@/lib/search";
import type { SearchResult } from "@/types";
import { cn } from "@/lib/utils";

export function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const openDialog = useCallback(() => {
    setOpen(true);
    setQuery("");
    setActiveIndex(-1);
  }, []);

  const closeDialog = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActiveIndex(-1);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openDialog();
      }
      if (e.key === "Escape" && open) closeDialog();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openDialog, closeDialog, open]);

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => inputRef.current?.focus());
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const trimmed = query.trim();
  const results: SearchResult[] = trimmed.length >= 2 ? searchAll(trimmed, 8) : [];
  const suggested = getSuggestedQueries().slice(0, 4);
  const isEmpty = trimmed.length >= 2 && results.length === 0;

  function go(href: string) {
    closeDialog();
    router.push(href);
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (results.length === 0) {
      if (e.key === "Enter") {
        e.preventDefault();
        const q = query.trim();
        if (q) go(`/search?q=${encodeURIComponent(q)}`);
      }
      return;
    }
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveIndex((i) => (i + 1) % results.length);
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveIndex((i) => (i - 1 + results.length) % results.length);
        break;
      case "Enter":
        e.preventDefault();
        if (activeIndex >= 0) {
          go(results[activeIndex].href);
        } else {
          const q = query.trim();
          if (q) go(`/search?q=${encodeURIComponent(q)}`);
        }
        break;
    }
  }

  if (!open) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Pencarian layanan"
      className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-20 sm:pt-28"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={closeDialog}
        aria-hidden="true"
      />

      {/* Dialog */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-lg border border-border bg-card shadow-xl">
        {/* Search input */}
        <div className="flex items-center gap-3 border-b border-border px-4">
          <Search className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIndex(-1);
            }}
            onKeyDown={onKeyDown}
            placeholder="Cari layanan, masalah, atau kata kunci…"
            aria-label="Cari layanan"
            role="combobox"
            aria-expanded={results.length > 0}
            aria-controls="search-dialog-results"
            className="h-12 flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          <button
            type="button"
            onClick={closeDialog}
            aria-label="Tutup pencarian"
            className="flex size-8 shrink-0 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[50vh] overflow-y-auto p-2">
          {results.length > 0 ? (
            <ul id="search-dialog-results" role="listbox">
              {results.map((result, index) => (
                <li key={`${result.type}-${result.title}`} role="option" aria-selected={index === activeIndex}>
                  <button
                    type="button"
                    onClick={() => go(result.href)}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={cn(
                      "flex w-full items-center justify-between gap-3 rounded-md px-3 py-2.5 text-left cursor-pointer transition-colors",
                      index === activeIndex ? "bg-muted" : "hover:bg-muted",
                    )}
                  >
                    <span className="flex min-w-0 flex-col gap-0.5">
                      <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                        <span className="text-[11px] font-semibold uppercase tracking-wide text-accent">
                          {result.type === "service"
                            ? "Layanan"
                            : result.type === "category"
                              ? "Kategori"
                              : "Bantuan"}
                        </span>
                        <span className="truncate">{result.title}</span>
                      </span>
                      {result.type !== "faq" ? (
                        <span className="truncate text-xs text-muted-foreground">
                          {result.subtitle}
                        </span>
                      ) : null}
                    </span>
                    <ArrowRight className="size-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
                  </button>
                </li>
              ))}
            </ul>
          ) : isEmpty ? (
            <p className="py-6 text-center text-sm text-muted-foreground">
              Tidak menemukan hasil untuk &ldquo;{query}&rdquo;. Coba kata kunci lain atau
              hubungi CS untuk konsultasi.
            </p>
          ) : (
            <div className="px-3 py-2">
              <p className="px-1 pb-2 pt-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                Pencarian populer
              </p>
              <div className="flex flex-wrap gap-1.5 pb-2">
                {suggested.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => go(`/search?q=${encodeURIComponent(s)}`)}
                    className="rounded-md border border-border bg-background px-2.5 py-1.5 text-xs font-medium text-foreground hover:border-accent hover:text-accent transition-colors cursor-pointer"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
