import type { MetadataRoute } from "next";
import { landingConfig } from "@/content/minedrop2.config";

export default function robots(): MetadataRoute.Robots {
  const { site } = landingConfig;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/go/"],
    },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
