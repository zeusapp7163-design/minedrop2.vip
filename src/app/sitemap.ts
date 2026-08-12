import type { MetadataRoute } from "next";
import {
  getLandingConfig,
  getSeoPagePath,
  SEO_PAGE_SLUGS,
} from "@/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const { site } = getLandingConfig("ru");
  const languages = {
    ru: site.url,
    en: `${site.url}/en`,
    "x-default": site.url,
  };

  const homePages: MetadataRoute.Sitemap = [
    {
      url: site.url,
      lastModified: new Date(site.updated),
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages },
    },
    {
      url: `${site.url}/en`,
      lastModified: new Date(site.updated),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: { languages },
    },
  ];

  const guidePages: MetadataRoute.Sitemap = SEO_PAGE_SLUGS.flatMap((slug) => {
    const ru = `${site.url}${getSeoPagePath("ru", slug)}`;
    const en = `${site.url}${getSeoPagePath("en", slug)}`;
    const alternates = {
      languages: {
        ru,
        en,
        "x-default": ru,
      },
    };

    return [
      {
        url: ru,
        lastModified: new Date(site.updated),
        changeFrequency: "monthly" as const,
        priority: 0.8,
        alternates,
      },
      {
        url: en,
        lastModified: new Date(site.updated),
        changeFrequency: "monthly" as const,
        priority: 0.7,
        alternates,
      },
    ];
  });

  return [...homePages, ...guidePages];
}
