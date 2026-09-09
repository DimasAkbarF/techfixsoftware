"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { searchAll } from "@/lib/search";
import type { SearchResult } from "@/types";
import { cn } from "@/lib/utils";

interface SearchFormProps {
  size?: "default" | "large";
  className?: string;
  placeholder?: string;
  autoFocus?: boolean;
  name?: string;
}

export function SearchForm({
  size = "default",
  className,
  placeholder = "Cari layanan atau masalah… mis. bootloop, root, flash firmware",
  autoFocus = false,
  name = "q",
}: SearchFormProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const listRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const trimmed = query.trim();
  const results: SearchResult[] =
    trimmed.length >= 2 ? searchAll(trimmed, 6) : [];
  const showSuggestions = focused && results.length > 0;

  function submit(value: string) {
    const q = value.trim();
    if (!q) return;
    setFocused(false);
    setQuery(q);
    router.push(`/search?q=${encodeURIComponent(q)}`);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (results.length === 0) {
      if (e.key === "Enter") {
        submit(query);
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
        if (activeIndex >= 0 && results[activeIndex]) {
          const r = results[activeIndex];
          setFocused(false);
          router.push(r.href);
        } else {
          submit(query);
        }
        break;
      case "Escape":
        setFocused(false);
        setQuery("");
        setActiveIndex(-1);
        break;
    }
  }

  return (
    <div className={cn("relative w-full", className)}>
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"
          aria-hidden="true"
        />
        <input
          ref={inputRef}
          type="search"
          name={name}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActiveIndex(-1);
          }}
          onFocus={() => setFocused(true)}
          onKeyDown={handleKeyDown}
          onBlur={() => {
            window.setTimeout(() => setFocused(false), 150);
          }}
          placeholder={placeholder}
          autoComplete="off"
          autoFocus={autoFocus}
          aria-label="Cari layanan atau masalah"
          role="combobox"
          aria-expanded={showSuggestions}
          aria-controls="search-suggestions"
          aria-activedescendant={activeIndex >= 0 ? `suggestion-${activeIndex}` : undefined}
          className={cn(
            "w-full rounded-md border border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring/20",
            size === "large" ? "h-11 pr-10 pl-10 text-sm" : "h-10 pr-10 pl-10 text-sm",
          )}
        />
        {query ? (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setActiveIndex(-1);
              setFocused(true);
              inputRef.current?.focus();
            }}
            aria-label="Hapus pencarian"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 flex size-7 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer"
          >
            <X className="size-3.5" aria-hidden="true" />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => submit(query)}
            aria-label="Cari"
            className="absolute right-2 top-1/2 -translate-y-1/2 flex size-8 items-center justify-center rounded-md bg-accent text-white hover:bg-accent-hover cursor-pointer"
          >
            <Search className="size-4" aria-hidden="true" />
          </button>
        )}
      </div>

      {showSuggestions ? (
        <ul
          id="search-suggestions"
          ref={listRef}
          role="listbox"
          className="absolute z-30 mt-1.5 w-full overflow-hidden rounded-lg border border-border bg-card shadow-lg"
        >
          {results.map((result, index) => (
            <li
              key={`${result.type}-${result.title}`}
              data-index={index}
              role="option"
              aria-selected={index === activeIndex}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <button
                type="button"
                onMouseDown={(e) => {
                  e.preventDefault();
                  setFocused(false);
                  router.push(result.href);
                }}
                aria-label={result.title}
                className={cn(
                  "flex w-full flex-col gap-0.5 px-3.5 py-2.5 text-left cursor-pointer transition-colors",
                  index === activeIndex ? "bg-muted" : "hover:bg-muted",
                )}
              >
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
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
