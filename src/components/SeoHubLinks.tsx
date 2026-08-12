import Link from "next/link";
import { Container, Section, SectionHeader } from "@/components/ui";
import { getSeoNavigation, type LandingConfig } from "@/content";
import styles from "./Landing.module.css";

export function SeoHubLinks({ config }: { config: LandingConfig }) {
  const navigation = getSeoNavigation(config.locale);
  const copy =
    config.locale === "ru"
      ? {
          eyebrow: "Гайды",
          title: "Разберите Mine Drop 2 по темам",
          lead: "Отдельные материалы без повторов: демо и интерфейс, математика, бонусы и пошаговые правила.",
          action: "Открыть",
        }
      : {
          eyebrow: "Guides",
          title: "Explore Mine Drop 2 by topic",
          lead: "Focused guides without filler: demo and interface, game math, bonuses and step-by-step rules.",
          action: "Open guide",
        };

  return (
    <Section tone="soft" aria-labelledby="seo-guides-title">
      <Container>
        <SectionHeader
          eyebrow={copy.eyebrow}
          title={copy.title}
          lead={copy.lead}
          titleId="seo-guides-title"
        />
        <nav className={styles.guideGrid} aria-label={copy.title}>
          {navigation.map((item, index) => (
            <Link key={item.href} href={item.href} className={styles.guideCard}>
              <span className={styles.guideIndex}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <strong>{item.label}</strong>
              <p>{item.title}</p>
              <span className={styles.guideAction}>{copy.action} →</span>
            </Link>
          ))}
        </nav>
      </Container>
    </Section>
  );
}
