import { SITE } from "@/lib/site";

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

export function buildPageSchemas(faq: { question: string; answer: string }[]) {
  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE.url}/#webpage`,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    inLanguage: "ru-RU",
    isPartOf: {
      "@type": "WebSite",
      name: SITE.domain,
      url: SITE.url,
    },
    about: { "@id": `${SITE.url}/#game` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${SITE.url}/media/cover.webp`,
    },
  };

  const game = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${SITE.url}/#game`,
    name: "Mine Drop 2",
    alternateName: ["Minedrop 2", "Mine Drop 2 слот"],
    applicationCategory: "GameApplication",
    operatingSystem: "Web",
    description: SITE.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Демо доступно бесплатно; игра на деньги — через лицензированные казино",
    },
    author: {
      "@type": "Organization",
      name: "Paperclip Gaming",
    },
    datePublished: "2026-07-27",
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE.url}/#faq`,
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return [webpage, game, faqPage];
}
