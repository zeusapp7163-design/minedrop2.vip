import type { MetadataRoute } from "next";
import { getLandingConfig } from "@/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const { site } = getLandingConfig("ru");
  const languages = {
    ru: site.url,
    en: `${site.url}/en`,
    "x-default": site.url,
  };

  return [
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
}
