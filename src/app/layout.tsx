import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { defaultMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
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
  verification: {
    google: "SOxMjvuuVmLZkR3hJ-59pKx9RVm0DiwyrBK_3d01nFk",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export const manifest = {
  name: siteConfig.name,
  short_name: siteConfig.shortName,
  description: siteConfig.description,
  start_url: "/",
  display: "standalone",
  background_color: "#f8fafc",
  theme_color: "#0f172a",
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
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.description,
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
      <body className={`${inter.variable} font-sans antialiased`}>
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
      </body>
    </html>
  );
}
