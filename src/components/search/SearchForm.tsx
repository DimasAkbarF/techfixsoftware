"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight } from "lucide-react";
import { searchAll } from "@/lib/search";
import type { SearchResult } from "@/types";
import { cn } from "@/lib/utils";

interface SearchFormProps {
  className?: string;
  placeholder?: string;
  autoFocus?: boolean;
  name?: string;
  defaultValue?: string;
}

export function SearchForm({
  className,
  placeholder = "Cari layanan, masalah, atau panduan...",
  autoFocus = false,
  name = "q",
  defaultValue = "",
}: SearchFormProps) {
  const router = useRouter();
  const [query, setQuery] = useState(defaultValue);
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
        e.preventDefault();
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
        setActiveIndex(-1);
        break;
    }
  }

  return (
    <div className={cn("relative w-full max-w-[600px]", className)}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit(query);
        }}
        className="group relative flex h-12 w-full items-center rounded-lg border border-border bg-white p-1.5 shadow-xs transition-all duration-150 hover:border-border-strong focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/15"
      >
        {/* Search Icon */}
        <span
          className="flex size-9 shrink-0 items-center justify-center text-slate-400 group-focus-within:text-accent transition-colors"
          aria-hidden="true"
        >
          <Search className="size-4" />
        </span>

        {/* Input */}
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
            window.setTimeout(() => setFocused(false), 180);
          }}
          placeholder={placeholder}
          autoComplete="off"
          autoFocus={autoFocus}
          aria-label="Cari layanan, masalah, atau panduan"
          role="combobox"
          aria-expanded={showSuggestions}
          aria-controls="search-suggestions"
          aria-activedescendant={
            activeIndex >= 0 ? `suggestion-${activeIndex}` : undefined
          }
          className="h-full min-w-0 flex-1 bg-transparent px-1 text-sm font-normal text-foreground placeholder:text-muted-foreground/60 focus:outline-none [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden"
        />

        {/* Clear Button (if query is entered) */}
        {query ? (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setActiveIndex(-1);
              setFocused(true);
              inputRef.current?.focus();
            }}
            aria-label="Hapus kata kunci pencarian"
            className="flex size-7 shrink-0 items-center justify-center rounded-md text-muted-foreground/60 hover:bg-muted hover:text-foreground transition-colors cursor-pointer mr-1"
          >
            <X className="size-3.5" aria-hidden="true" />
          </button>
        ) : null}

        {/* Integrated Search Action Button */}
        <button
          type="submit"
          aria-label="Cari"
          className="flex h-9 w-9 sm:w-10 shrink-0 items-center justify-center rounded-md bg-accent text-white hover:bg-accent-hover active:bg-accent-active transition-colors cursor-pointer shadow-xs"
        >
          <ArrowRight className="size-4 stroke-[2.25]" aria-hidden="true" />
        </button>
      </form>

      {/* Autocomplete Dropdown */}
      {showSuggestions ? (
        <ul
          id="search-suggestions"
          ref={listRef}
          role="listbox"
          className="absolute left-0 right-0 top-full z-30 mt-2 overflow-hidden rounded-lg border border-border bg-white shadow-dropdown divide-y divide-border/60"
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
                  "flex w-full items-center justify-between px-3.5 py-2.5 text-left cursor-pointer transition-colors",
                  index === activeIndex ? "bg-muted/70" : "hover:bg-muted/50",
                )}
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-accent">
                      {result.type === "service"
                        ? "Layanan"
                        : result.type === "category"
                          ? "Kategori"
                          : result.type === "guide"
                            ? "Panduan"
                            : "Bantuan"}
                    </span>
                    <span className="truncate text-sm font-medium text-foreground">
                      {result.title}
                    </span>
                  </div>
                  {result.type !== "faq" && result.subtitle ? (
                    <p className="mt-0.5 truncate text-xs text-muted-foreground">
                      {result.subtitle}
                    </p>
                  ) : null}
                </div>
                <ArrowRight
                  className="size-3.5 shrink-0 text-muted-foreground ml-3"
                  aria-hidden="true"
                />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
