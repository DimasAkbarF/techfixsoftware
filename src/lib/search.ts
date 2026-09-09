import { services } from "@/data/services";
import { categories } from "@/data/categories";
import { faqItems } from "@/data/faq";
import type { SearchResult } from "@/types";

function normalize(input: string): string {
  return input.toLowerCase().trim();
}

function tokenize(input: string): string[] {
  return normalize(input).split(/\s+/).filter(Boolean);
}

function score(texts: string[], queryTokens: string[]): number {
  let total = 0;
  const haystack = texts.join(" ").toLowerCase();
  for (const token of queryTokens) {
    if (haystack.includes(token)) total += 1;
  }
  return total;
}

export function searchAll(query: string, limit = 8): SearchResult[] {
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];

  const results: SearchResult[] = [];

  for (const service of services) {
    const searchable = [
      service.name,
      service.shortDescription,
      service.description,
      service.categoryId,
      ...service.problemKeywords,
      ...(service.seo.keywords ?? []),
      ...service.useCases,
    ];
    const s = score(searchable, tokens);
    if (s > 0) {
      results.push({
        type: "service",
        title: service.name,
        subtitle: service.shortDescription,
        href: `/services/${service.slug}`,
      });
    }
  }

  for (const category of categories) {
    const searchable = [
      category.name,
      category.shortName,
      category.description,
    ];
    const s = score(searchable, tokens);
    if (s > 0) {
      results.push({
        type: "category",
        title: category.name,
        subtitle: category.description,
        href: `/categories/${category.slug}`,
      });
    }
  }

  for (const faq of faqItems) {
    const searchable = [faq.question, faq.answer];
    const s = score(searchable, tokens);
    if (s > 0) {
      results.push({
        type: "faq",
        title: faq.question,
        subtitle: "Bantuan",
        href: "/faq",
      });
    }
  }

  return results.slice(0, limit);
}

export function searchServiceNames(query: string, limit = 6): SearchResult[] {
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];

  const results: SearchResult[] = services
    .filter((s) => score([s.name, ...s.problemKeywords], tokens) > 0)
    .map((s) => ({
      type: "service" as const,
      title: s.name,
      subtitle: s.shortDescription,
      href: `/services/${s.slug}`,
    }));

  return results.slice(0, limit);
}

export function getSuggestedQueries(): string[] {
  return [
    "bootloop",
    "root android",
    "flash firmware",
    "unlock bootloader",
    "custom rom",
    "stuck logo",
  ];
}