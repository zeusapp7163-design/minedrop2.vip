import type { MetadataRoute } from "next";
import { getLandingConfig } from "@/content";

export default function robots(): MetadataRoute.Robots {
  const { site } = getLandingConfig("ru");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/go/", "/1win", "/jetton", "/stake"],
    },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
