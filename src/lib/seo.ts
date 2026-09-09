import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function absoluteUrl(path: string): string {
  const url = siteConfig.url.replace(/\/$/, "");
  if (path === "/") return url;
  return `${url}${path.startsWith("/") ? path : `/${path}`}`;
}

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path,
  noindex = false,
}: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(path),
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      locale: "id_ID",
      type: "website",
    },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url || "http://localhost:3000"),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    siteName: siteConfig.name,
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};