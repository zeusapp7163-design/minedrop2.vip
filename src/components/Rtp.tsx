import { Card, Container, Section, SectionHeader } from "@/components/ui";
import type { LandingConfig } from "@/content";
import styles from "./Landing.module.css";

export function Rtp({ config }: { config: LandingConfig }) {
  const { math } = config.ui;

  return (
    <Section id="math" tone="soft" aria-labelledby="math-title">
      <Container>
        <SectionHeader
          eyebrow={math.eyebrow}
          title={math.title}
          titleId="math-title"
          lead={math.lead}
        />
        <div className={styles.riskGrid}>
          {config.riskCards.map((item) => (
            <Card key={item.title} className={styles.riskCard}>
              <span className={styles.riskValue}>{item.value}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
