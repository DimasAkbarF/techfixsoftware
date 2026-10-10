import type { NextConfig } from "next";

/* Canonical production host. Any other host (e.g. an old *.vercel.app
   deployment) is permanently redirected here so search signals consolidate
   on a single URL. localhost/127.0.0.1 are excluded so local preview and
   the headless audit server keep working. */
const CANONICAL_HOST = "techfixsoftware\\.my\\.id";
const NON_CANONICAL_HOST = `^(?!.*(${CANONICAL_HOST}|localhost|127\\.0\\.0\\.1|\\[::1\\])).*$`;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [64, 75, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [],
  },
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  poweredByHeader: false,
  compress: true,
  async redirects() {
    return [
      // Root and Magisk root were one service split across two URLs; they are
      // consolidated into a single page so search signals are not split.
      {
        source: "/services/magisk-root",
        destination: "/services/root-android",
        permanent: true,
      },
      // Ojol/absensi article rewritten as a risk article with a new slug.
      {
        source: "/guides/panduan-root-hp-untuk-ojol-dan-aplikasi-kerja",
        destination: "/guides/risiko-root-hp-untuk-aplikasi-kerja-dan-ojol",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "header", key: "host", value: NON_CANONICAL_HOST }],
        destination: "https://techfixsoftware.my.id/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;