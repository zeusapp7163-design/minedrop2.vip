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
  const { site, game, faq, ui, path, language, steps, ai } = config;
  const pageUrl = path === "/" ? site.url : `${site.url}${path}`;
  const websiteId = `${site.url}/#website`;
  const webpageId = `${pageUrl}/#webpage`;
  const gameId = `${site.url}/#game`;
  const orgId = `${site.url}/#publisher`;
  const howToId = `${pageUrl}/#howto`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": orgId,
      name: site.domain,
      url: site.url,
      description: ai.trust,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": websiteId,
      url: site.url,
      name: site.domain,
      inLanguage: ["ru-RU", "en-US"],
      publisher: { "@id": orgId },
      about: { "@id": gameId },
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
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: [".ai-answer", "#page-title"],
      },
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
      description: ai.answer,
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
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "RTP",
          value: game.rtp,
        },
        {
          "@type": "PropertyValue",
          name: "Volatility",
          value: game.volatility,
        },
        {
          "@type": "PropertyValue",
          name: "Max win",
          value: game.maxWin,
        },
        {
          "@type": "PropertyValue",
          name: "Grid",
          value: game.grid,
        },
        {
          "@type": "PropertyValue",
          name: "Engine",
          value: game.engine,
        },
        {
          "@type": "PropertyValue",
          name: "Mechanics",
          value: game.mechanics,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "@id": howToId,
      name: ui.howToName,
      description: ui.howToDescription,
      inLanguage: language,
      totalTime: "PT5M",
      step: steps.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.title,
        text: step.text,
      })),
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
