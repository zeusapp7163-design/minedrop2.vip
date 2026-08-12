import type { LandingConfig } from "@/content";

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function buildPageSchemas(config: LandingConfig) {
  const { site, game, faq, ui, path, language } = config;
  const pageUrl = path === "/" ? site.url : `${site.url}${path}`;
  const websiteId = `${site.url}/#website`;
  const webpageId = `${pageUrl}/#webpage`;
  const gameId = `${site.url}/#game`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": websiteId,
      url: site.url,
      name: site.domain,
      inLanguage: ["ru-RU", "en-US"],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": webpageId,
      url: pageUrl,
      name: site.title,
      description: site.description,
      inLanguage: language,
      datePublished: site.published,
      dateModified: site.updated,
      isPartOf: { "@id": websiteId },
      about: { "@id": gameId },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${site.url}${game.cover}`,
        width: 408,
        height: 546,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "@id": gameId,
      url: pageUrl,
      name: game.name,
      alternateName: game.alternateNames,
      image: `${site.url}${game.cover}`,
      applicationCategory: "GameApplication",
      operatingSystem: "Web",
      description: site.description,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: ui.schemaOffer,
      },
      author: {
        "@type": "Organization",
        name: game.provider,
      },
      datePublished: site.published,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${pageUrl}/#faq`,
      inLanguage: language,
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];
}
