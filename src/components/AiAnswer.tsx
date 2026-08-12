import { Container, Section } from "@/components/ui";
import type { LandingConfig } from "@/content";
import styles from "./Landing.module.css";

export function AiAnswer({ config }: { config: LandingConfig }) {
  const { ai } = config;

  return (
    <Section compact aria-labelledby="ai-answer-title">
      <Container>
        <div className={`${styles.aiAnswer} ai-answer`}>
          <p className={styles.aiLabel} id="ai-answer-title">
            {ai.answerLabel}
          </p>
          <p className={styles.aiText}>{ai.answer}</p>
          <dl className={styles.aiFacts} aria-label={ai.factsLabel}>
            {ai.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </Section>
  );
}

export function TrustBlock({ config }: { config: LandingConfig }) {
  const { ai } = config;

  return (
    <Section compact aria-labelledby="trust-title">
      <Container>
        <aside className={styles.trustBlock}>
          <p className={styles.aiLabel} id="trust-title">
            {ai.trustLabel}
          </p>
          <p className={styles.trustText}>{ai.trust}</p>
        </aside>
      </Container>
    </Section>
  );
}
