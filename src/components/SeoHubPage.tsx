import Image from "next/image";
import Link from "next/link";
import { ButtonLink, Container } from "@/components/ui";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import {
  getSeoNavigation,
  getSeoPagePath,
  type LandingConfig,
  type SeoPageContent,
} from "@/content";
import styles from "./SeoHub.module.css";

export function SeoHubPage({
  config,
  page,
}: {
  config: LandingConfig;
  page: SeoPageContent;
}) {
  const canonical = `${config.site.url}${getSeoPagePath(
    config.locale,
    page.slug,
  )}`;
  const homeUrl = config.path === "/" ? config.site.url : `${config.site.url}/en`;
  const navigation = getSeoNavigation(config.locale);
  const related = navigation.filter((item) => !item.href.endsWith(`/${page.slug}`));
  const languagePaths = {
    ru: getSeoPagePath("ru", page.slug),
    en: getSeoPagePath("en", page.slug),
  };
  const playHref = `${config.path}#play`;
  const schemas = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${canonical}#article`,
        headline: page.heading,
        description: page.description,
        url: canonical,
        inLanguage: config.language,
        datePublished: config.site.published,
        dateModified: config.site.updated,
        image: `${config.site.url}${config.game.cover}`,
        author: {
          "@type": "Organization",
          name: config.site.domain,
          url: config.site.url,
        },
        isPartOf: {
          "@type": "WebSite",
          "@id": `${config.site.url}/#website`,
          name: config.site.domain,
          url: config.site.url,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: config.locale === "ru" ? "Обзор" : "Review",
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: page.heading,
            item: canonical,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <JsonLd data={schemas} />
      <Header
        config={config}
        locale={config.locale}
        isHome={false}
        languagePaths={languagePaths}
      />
      <main id="content" className={styles.page}>
        <section className={styles.hero} aria-labelledby="seo-page-title">
          <Container>
            <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
              <Link href={config.path}>{page.homeLabel}</Link>
              <span aria-hidden="true">/</span>
              <span>{navigation.find((item) => item.href.endsWith(page.slug))?.label}</span>
            </nav>

            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <p className={styles.eyebrow}>{page.eyebrow}</p>
                <h1 id="seo-page-title">{page.heading}</h1>
                <p className={styles.intro}>{page.intro}</p>
                <p className={styles.updated}>{page.updatedLabel}</p>
                <div className={styles.actions}>
                  <ButtonLink href={playHref}>{page.playLabel}</ButtonLink>
                  <ButtonLink href={config.path} variant="secondary">
                    {page.homeLabel}
                  </ButtonLink>
                </div>
              </div>

              <figure className={styles.visual}>
                <Image
                  src={config.game.cover}
                  alt={config.ui.hero.coverAlt}
                  fill
                  priority
                  sizes="(max-width: 760px) 180px, 240px"
                />
              </figure>
            </div>

            <dl className={styles.highlights}>
              {page.highlights.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>

        <Container className={styles.contentLayout}>
          <article className={styles.article}>
            {page.sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.points ? (
                  <ul>
                    {section.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <section className={styles.faq} aria-labelledby="hub-faq-title">
              <p className={styles.eyebrow}>FAQ</p>
              <h2 id="hub-faq-title">
                {config.locale === "ru" ? "Вопросы по теме" : "Questions on this topic"}
              </h2>
              {page.faq.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </section>
          </article>

          <aside className={styles.related} aria-labelledby="related-title">
            <p id="related-title" className={styles.relatedTitle}>
              {page.relatedLabel}
            </p>
            <nav>
              {related.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span>{item.label}</span>
                  <small>{item.title}</small>
                </Link>
              ))}
            </nav>
          </aside>
        </Container>
      </main>
      <Footer config={config} isHome={false} />
    </>
  );
}
