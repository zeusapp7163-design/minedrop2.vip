import { Container, Section, SectionHeader } from "@/components/ui";
import type { LandingConfig } from "@/content";
import styles from "./Landing.module.css";

export function HowPlay({ config }: { config: LandingConfig }) {
  const { mechanics } = config.ui;

  return (
    <Section id="mechanics" tone="soft" aria-labelledby="mechanics-title">
      <Container>
        <SectionHeader
          eyebrow={mechanics.eyebrow}
          title={mechanics.title}
          titleId="mechanics-title"
          lead={mechanics.lead}
        />
        <ol className={styles.steps}>
          {config.steps.map((step) => (
            <li key={step.title} className={styles.step}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
