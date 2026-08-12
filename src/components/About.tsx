import Image from "next/image";
import { Container, Section, SectionHeader } from "@/components/ui";
import type { LandingConfig } from "@/content";
import styles from "./Landing.module.css";

export function About({ config }: { config: LandingConfig }) {
  const { about } = config.ui;

  return (
    <Section id="about" aria-labelledby="about-title">
      <Container>
        <SectionHeader
          eyebrow={about.eyebrow}
          title={about.title}
          titleId="about-title"
          lead={about.lead}
        />

        <div className={styles.aboutGrid}>
          <figure className={styles.aboutFigure}>
            <div className={styles.aboutImage}>
              <Image
                src="/media/ui-1.jpg"
                alt={about.figureAlt}
                fill
                sizes="(max-width: 899px) 100vw, 58vw"
              />
            </div>
            <figcaption>
              {about.caption}
            </figcaption>
          </figure>

          <article className={styles.aboutSummary}>
            <p className={styles.aboutLabel}>{about.label}</p>
            <h3>{about.summaryTitle}</h3>
            <div className={styles.prose}>
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <a href="#mechanics" className={styles.aboutLink}>
              {about.link}
            </a>
          </article>
        </div>

        <div className={styles.aboutHighlights}>
          {about.highlights.map((item) => (
            <article key={item.label} className={styles.aboutHighlight}>
              <span>{item.label}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
