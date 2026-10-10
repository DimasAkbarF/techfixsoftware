import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { guides } from "@/data/guides";

const baseUrl = siteConfig.url.replace(/\/$/, "");

/**
 * Static last modified timestamps based on actual git commit history.
 * Deterministic: Strictly no new Date() runtime calls.
 */
const staticPageDates: Record<string, string> = {
  "/faq": "2026-10-10T01:32:17.000Z",
  "/about": "2026-10-10T01:44:49.000Z",
  "/contact": "2026-10-10T01:32:17.000Z",
  "/how-it-works": "2026-10-10T01:32:17.000Z",
  "/remote-guide": "2026-10-10T01:32:17.000Z",
  "/testimonials": "2026-10-10T01:32:17.000Z",
  "/terms": "2026-09-10T01:07:31.000Z",
  "/privacy": "2026-09-10T01:07:31.000Z",
  "/disclaimer": "2026-09-10T01:07:31.000Z",
};

function getLatestDate(dates: string[]): string {
  const timestamps = dates
    .map((d) => new Date(d).getTime())
    .filter((t) => !Number.isNaN(t));
  if (timestamps.length === 0) return "2026-10-10T00:00:00.000Z";
  return new Date(Math.max(...timestamps)).toISOString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Service routes (with deterministic static updatedAt per service)
  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(service.updatedAt || "2026-10-10"),
  }));

  // Guide routes (exclude placeholders)
  const validGuides = guides.filter((g) => {
    const raw = JSON.stringify(g);
    return !raw.includes("[VERIFIKASI_PERANGKAT]") && !raw.includes("[ISI_DATA_NYATA");
  });
  const guideRoutes: MetadataRoute.Sitemap = validGuides.map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: new Date(guide.updatedAt || guide.publishedAt),
  }));

  // Deterministic latest dates for hub index pages
  const latestServicesDate = getLatestDate(
    services.map((s) => s.updatedAt || "2026-10-10")
  );
  const latestGuidesDate = getLatestDate(
    guides.map((g) => g.updatedAt || g.publishedAt)
  );
  const latestSiteDate = getLatestDate([
    latestServicesDate,
    latestGuidesDate,
    ...Object.values(staticPageDates),
  ]);

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl, // Homepage without trailing slash, matching canonical
      lastModified: new Date(latestSiteDate),
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(latestServicesDate),
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date(latestGuidesDate),
    },
    ...Object.entries(staticPageDates).map(([path, date]) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(date),
    })),
  ];

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...guideRoutes,
  ];
}