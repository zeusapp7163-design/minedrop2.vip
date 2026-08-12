import type { Metadata, Viewport } from "next";
import {
  getSeoPagePath,
  type SeoPageContent,
} from "./seoPages";
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

export function buildSeoPageMetadata(
  config: LandingConfig,
  page: SeoPageContent,
): Metadata {
  const base = buildMetadata(config);
  const canonical = `${config.site.url}${getSeoPagePath(config.locale, page.slug)}`;
  const ruPath = `${config.site.url}${getSeoPagePath("ru", page.slug)}`;
  const enPath = `${config.site.url}${getSeoPagePath("en", page.slug)}`;

  return {
    ...base,
    title: page.title,
    description: page.description,
    keywords: [
      ...config.site.keywords,
      page.title,
      `${config.game.name} ${page.slug}`,
    ],
    alternates: {
      canonical,
      languages: {
        ru: ruPath,
        en: enPath,
        "x-default": ruPath,
      },
    },
    openGraph: {
      ...base.openGraph,
      type: "article",
      url: canonical,
      title: page.title,
      description: page.description,
      publishedTime: config.site.published,
      modifiedTime: config.site.updated,
    },
    twitter: {
      ...base.twitter,
      title: page.title,
      description: page.description,
    },
  };
}

export const siteViewport: Viewport = {
  themeColor: "#08090c",
  width: "device-width",
  initialScale: 1,
};
