export interface Category {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  seo: {
    title: string;
    description: string;
    keywords?: string[];
  };
}

export interface ServiceSEO {
  title: string;
  description: string;
  keywords?: string[];
}

export type ServiceGroup = "repair" | "modification" | "customization" | "firmware";

export interface Service {
  id: string;
  slug: string;
  name: string;
  /** Natural H1 for the service page. Avoids auto-built keyword strings. */
  h1: string;
  categoryId: string;
  group?: ServiceGroup;
  shortDescription: string;
  description: string;
  problemKeywords: string[];
  useCases: string[];
  symptoms?: string[];
  whoIsItFor?: string[];
  whoIsItNotFor?: string[];
  preparation: string[];
  processSteps: string[];
  importantNotices: string[];
  remoteAvailable: boolean;
  featured: boolean;
  badges?: string[];
  supportedBrands?: string[];
  supportedChipsets?: string[];
  estimatedTime?: string;
  causes?: string[];
  technicalDeepDive?: Array<{
    heading: string;
    body: string;
    bullets?: string[];
  }>;
  seo: ServiceSEO;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface SearchResult {
  type: "service" | "category" | "faq" | "guide";
  title: string;
  subtitle: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface Testimonial {
  id: string;
  image: string;
  rating: number;
  services: string[];
  device?: string;
  altText?: string;
}

export type GuideCategory =
  | "bootloop"
  | "root"
  | "bootloader"
  | "firmware"
  | "custom-rom"
  | "troubleshooting";

export interface GuideArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: GuideCategory;
  categoryName: string;
  readTime: string;
  publishedAt: string;
  updatedAt: string;
  keyTakeaways: string[];
  symptoms?: string[];
  whatUserCanCheck: string[];
  whenToConsult: string[];
  relatedServiceSlugs: string[];
  sections: Array<{
    heading: string;
    body: string;
    bullets?: string[];
  }>;
  seo: {
    title: string;
    description: string;
    keywords?: string[];
  };
}

export interface ProblemItem {
  id: string;
  title: string;
  symptom: string;
  href: string;
  serviceName: string;
  tag: string;
}

export interface ComparisonItem {
  id: string;
  title: string;
  subtitle: string;
  leftLabel: string;
  rightLabel: string;
  rows: Array<{
    feature: string;
    left: string;
    right: string;
  }>;
  verdict: string;
  recommendedServiceHref: string;
  recommendedServiceLabel: string;
}