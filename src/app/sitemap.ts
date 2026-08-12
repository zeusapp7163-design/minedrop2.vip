import type { MetadataRoute } from "next";
import { landingConfig } from "@/content/minedrop2.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const { site } = landingConfig;

  return [
    {
      url: site.url,
      lastModified: new Date(site.updated),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
