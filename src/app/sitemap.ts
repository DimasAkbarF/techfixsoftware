import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { categories } from "@/data/categories";

const baseUrl = siteConfig.url.replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: Array<{ path: string; priority: number; changefreq: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
    { path: "/", priority: 1, changefreq: "weekly" },
    { path: "/services", priority: 0.9, changefreq: "weekly" },
    { path: "/categories", priority: 0.8, changefreq: "weekly" },
    { path: "/how-it-works", priority: 0.7, changefreq: "monthly" },
    { path: "/remote-guide", priority: 0.7, changefreq: "monthly" },
    { path: "/faq", priority: 0.8, changefreq: "monthly" },
    { path: "/about", priority: 0.4, changefreq: "yearly" },
    { path: "/contact", priority: 0.6, changefreq: "yearly" },
    { path: "/terms", priority: 0.2, changefreq: "yearly" },
    { path: "/privacy", priority: 0.2, changefreq: "yearly" },
    { path: "/disclaimer", priority: 0.2, changefreq: "yearly" },
  ];

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const categoryRoutes = categories.map((category) => ({
    url: `${baseUrl}/categories/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route.path === "/" ? "" : route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changefreq,
      priority: route.priority,
    })),
    ...serviceRoutes,
    ...categoryRoutes,
  ];
}