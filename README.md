# techfixsoftware

Platform layanan teknis Android profesional dengan pendekatan konsultasi manusia. Dibangun dengan Next.js 15 (App Router), TypeScript, dan Tailwind CSS v4.

## Teknologi

- **Framework**: Next.js 15 (App Router, Server Components default)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 (CSS-first config, design tokens via `@theme`)
- **Icons**: lucide-react (tree-shakable SVG)
- **Font**: Inter (self-hosted via `next/font/google`, preload enabled)
- **Image Optimization**: `next/image` dengan AVIF/WebP, priority loading untuk LCP
- **SEO**: Metadata API, JSON-LD (Organization, WebSite, Service, BreadcrumbList), sitemap.xml, robots.txt, Open Graph, PWA manifest
- **Code Quality**: ESLint 9 (flat config), `tsc --noEmit` untuk type-check
- **Deployment**: Vercel (auto-deploy on push), custom domain

## Fitur Utama

- **Katalog Layanan**: 9 layanan teknis (Root, Unlock Bootloader, Fix Bootloop, Unbrick, Flash Firmware, Custom ROM, Recovery, Software Repair, Magisk Root) dengan detail risiko, persiapan, dan alur proses
- **Pencarian Real-time**: Client-side search dengan debounce, highlight kata kunci
- **Konsultasi Langsung**: CTA ke WhatsApp/Telegram dengan template pesan otomatis (brand, model, gejala)
- **Panduan Remote**: Persiapan AnyDesk, keamanan sesi remote
- **FAQ Terstruktur**: Accordion aksesibel + FAQPage schema
- **Halaman Legal**: Terms, Privacy, Disclaimer
- **Performance**: Logo 10KB (dari 345KB+), gzip, CSS optimization, PWA manifest

## Struktur Proyek

```
src/
├── app/                    # Next.js App Router pages
│   ├── (routes)/           # Semua route: /, /services, /categories, /about, /contact, /faq, /how-it-works, /remote-guide, /search, /terms, /privacy, /disclaimer
│   ├── layout.tsx          # Root layout + metadata, PWA manifest, JSON-LD
│   ├── globals.css         # Tailwind v4 + design tokens (@theme)
│   ├── sitemap.ts          # Auto-generate sitemap.xml
│   ├── robots.ts           # Auto-generate robots.txt
│   ├── opengraph-image.tsx # Dynamic OG image (Edge runtime)
│   └── icon.png            # Favicon (512px)
├── components/
│   ├── contact/            # ConsultationCTA (WhatsApp/Telegram/Email cards)
│   ├── faq/                # FAQAccordion
│   ├── home/               # Hero, CategoryGrid, FeaturedServices, QuickHelp, HowItWorksPreview, RemoteGuidePreview, WhyChoose, FAQPreview, FinalCTA
│   ├── icons/              # WhatsAppIcon, TelegramIcon, CategoryIcon
│   ├── layout/             # SiteHeader, SiteFooter, Breadcrumbs
│   ├── navigation/         # SiteHeader, MobileCTABar, navItems
│   ├── search/             # SearchForm, SearchDialog
│   ├── service/            # ServiceHero, ServiceCard, ServiceGrid, ProcessTimeline, PreparationChecklist, ImportantNotice
│   └── ui/                 # SectionHeading, SectionShell
├── config/
│   └── site.ts             # Site config (env-driven), link helpers
├── data/
│   ├── categories.ts       # 8 kategori layanan
│   ├── faq.ts              # FAQ items per kategori
│   └── services.ts         # 9 service definitions (type-safe)
├── lib/
│   ├── contact.ts          # Message builder, link generators
│   ├── search.ts           # Client-side search index + ranking
│   ├── seo.ts              # buildMetadata, absoluteUrl
│   └── utils.ts            # cn() className merger
└── types/
    └── index.ts            # Shared TypeScript interfaces
```

## Konfigurasi Environment

Salin `.env.example` ke `.env.local` dan isi:

```bash
# URL produksi (canonical, sitemap, OG image)
NEXT_PUBLIC_SITE_URL=https://techfixsoftware.my.id

# WhatsApp: format internasional angka saja (628xxxxxxxxxx)
NEXT_PUBLIC_WHATSAPP_NUMBER=6289515001716

# Telegram: URL channel/username (https://t.me/TechFixSoftware)
NEXT_PUBLIC_TELEGRAM_URL=https://t.me/TechFixSoftware

# Email support (opsional)
NEXT_PUBLIC_SUPPORT_EMAIL=
```

> **Catatan**: `.env.local` di-ignore oleh git. Jangan commit secret.

## Development

```bash
# Install dependencies
npm install

# Development server (http://localhost:3000)
npm run dev

# Type-check (strict)
npm run typecheck

# Lint
npm run lint

# Production build
npm run build

# Start production server
npm start
```

## Build Output

- **Static pages**: `/`, `/about`, `/contact`, `/faq`, `/how-it-works`, `/remote-guide`, `/services`, `/categories`, `/terms`, `/privacy`, `/disclaimer`
- **SSG (generateStaticParams)**: `/services/[slug]` (9 services), `/categories/[slug]` (8 categories)
- **Dynamic**: `/search` (client-side search)

## Deployment (Vercel)

1. Connect repo GitHub ke Vercel
2. Set environment variables di Vercel dashboard (Project → Settings → Environment Variables)
3. Custom domain: `techfixsoftware.my.id` (sudah dikonfigurasi)
4. Push ke `main` → auto-deploy

## SEO Checklist (Done)

- [x] Unique titles & descriptions per page
- [x] Semantic heading hierarchy
- [x] JSON-LD: Organization, WebSite, Service, BreadcrumbList
- [x] Canonical URLs + `metadataBase`
- [x] `sitemap.xml` + `robots.txt` (auto-generated)
- [x] Open Graph + Twitter Card ready
- [x] PWA manifest + icons (192/512)
- [x] Google Search Console verification meta tag
- [x] Core Web Vitals: optimized images (AVIF/WebP), font preload, CSS optimization, gzip

## Code Conventions

- **Server Components by default** — client components hanya saat butuh interaktivitas (`"use client"`)
- **Type-safe**: strict TypeScript, no `any`, shared types di `src/types`
- **Design tokens**: CSS variables via `@theme` di `globals.css` (warna, radius, shadow, spacing, font)
- **Accessibility**: ARIA labels, focus-visible, skip link, reduced motion
- **Naming**: kebab-case file/folder, PascalCase component, camelCase util

## License

Proprietary — techfixsoftware. All rights reserved.