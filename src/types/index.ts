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
  };
}

export interface ServiceSEO {
  title: string;
  description: string;
  keywords?: string[];
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  categoryId: string;
  shortDescription: string;
  description: string;
  problemKeywords: string[];
  useCases: string[];
  preparation: string[];
  processSteps: string[];
  importantNotices: string[];
  remoteAvailable: boolean;
  featured: boolean;
  badges?: string[];
  seo: ServiceSEO;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface SearchResult {
  type: "service" | "category" | "faq";
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