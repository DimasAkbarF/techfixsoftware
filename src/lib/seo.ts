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
  keywords?: string[]; // Kept for backwards-compatibility; not emitted to HTML
  noindex?: boolean;
  absoluteTitle?: boolean;
}

export function buildMetadata({
  title,
  description,
  path,
  noindex = false,
  absoluteTitle = false,
}: PageMetadataOptions): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;
  const url = absoluteUrl(path);
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "id_ID",
      type: "website",
      images: [
        {
          url: `${siteConfig.url}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${siteConfig.url}/opengraph-image`],
    },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url || "https://techfixsoftware.my.id"),
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
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};