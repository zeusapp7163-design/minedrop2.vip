import type { Metadata, Viewport } from "next";
import type { LandingConfig } from "./types";

export function buildMetadata(config: LandingConfig): Metadata {
  const { site, game, path } = config;
  const pageUrl = path === "/" ? site.url : `${site.url}${path}`;

  return {
    metadataBase: new URL(site.url),
    title: site.title,
    description: site.description,
    keywords: site.keywords,
    authors: [{ name: site.domain }],
    alternates: {
      canonical: pageUrl,
      languages: {
        ru: site.url,
        en: `${site.url}/en`,
        "x-default": site.url,
      },
    },
    openGraph: {
      type: "website",
      locale: site.ogLocale,
      url: pageUrl,
      siteName: site.domain,
      title: site.title,
      description: site.description,
    },
    twitter: {
      card: "summary_large_image",
      title: site.title,
      description: site.description,
    },
    robots: { index: true, follow: true },
    icons: {
      icon: [
        { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
        { url: game.cover, type: "image/webp" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
      shortcut: ["/favicon.ico"],
    },
  };
}

export const siteViewport: Viewport = {
  themeColor: "#08090c",
  width: "device-width",
  initialScale: 1,
};
