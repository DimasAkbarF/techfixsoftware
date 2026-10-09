import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk, Source_Sans_3, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingContact } from "@/components/contact/FloatingContact";
import { defaultMetadata } from "@/lib/seo";

import { siteConfig } from "@/config/site";

const heading = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["600", "700"],
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  ...defaultMetadata,
  metadataBase: new URL(siteConfig.url),
  robots: { index: true, follow: true },
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
  verification: {
    google: "SOxMjvuuVmLZkR3hJ-59pKx9RVm0DiwyrBK_3d01nFk",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0b1220",
};

export const manifest = {
  name: siteConfig.name,
  short_name: siteConfig.shortName,
  description: siteConfig.description,
  start_url: "/",
  display: "standalone",
  background_color: "#f7f6f3",
  theme_color: "#0b1220",
  icons: [
    { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
    { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
  ],
};

function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
          "@id": `${siteConfig.url}#organization`,
          name: siteConfig.name,
          alternateName: siteConfig.alternateName,
          url: siteConfig.url,
          logo: `${siteConfig.url}/icon-512.png`,
          image: `${siteConfig.url}/icon-512.png`,
          description: siteConfig.description,
          priceRange: "$$",
          telephone: siteConfig.whatsappNumber || undefined,
          areaServed: {
            "@type": "Country",
            name: "Indonesia",
          },
          address: {
            "@type": "PostalAddress",
            addressCountry: "ID",
          },
          foundingDate: "2025",
          sameAs: siteConfig.telegramUrl ? [siteConfig.telegramUrl] : undefined,
          knowsAbout: [
            "Android Rooting",
            "Magisk Root",
            "KernelSU",
            "Custom ROM",
            "Bootloop Repair",
            "Android Flashing",
            "Unlock Bootloader",
            "Play Integrity Bypass",
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Layanan Perbaikan & Modifikasi Software Android",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Jasa Root Android & Magisk",
                  url: `${siteConfig.url}/services/root-android`,
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Jasa Fix Bootloop & Flash Firmware",
                  url: `${siteConfig.url}/services/fix-bootloop`,
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Jasa Custom ROM Android",
                  url: `${siteConfig.url}/services/custom-rom`,
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Jasa Unlock Bootloader (UBL)",
                  url: `${siteConfig.url}/services/unlock-bootloader`,
                },
              },
            ],
          },
          contactPoint: siteConfig.supportEmail
            ? [
                {
                  "@type": "ContactPoint",
                  email: siteConfig.supportEmail,
                  contactType: "customer support",
                },
              ]
            : undefined,
        }),
      }}
    />
  );
}

function WebSiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteConfig.name,
          alternateName: siteConfig.alternateName,
          url: siteConfig.url,
          description: siteConfig.description,
          inLanguage: "id-ID",
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${siteConfig.url.replace(/\/$/, "")}/search?q={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
          },
        }),
      }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="id">
      <body className={`${heading.variable} ${body.variable} ${plexMono.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Lewati ke konten utama
        </a>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <FloatingContact />
      </body>
    </html>
  );
}

