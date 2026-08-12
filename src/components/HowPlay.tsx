import { Container, Section, SectionHeader } from "@/components/ui";
import { landingConfig } from "@/content/minedrop2.config";
import styles from "./Landing.module.css";

export function HowPlay() {
  return (
    <Section id="mechanics" tone="soft" aria-labelledby="mechanics-title">
      <Container>
        <SectionHeader
          eyebrow="Логика раунда"
          title="Как работает dig-burst"
          titleId="mechanics-title"
          lead="Четыре шага объясняют механику без рекламных обещаний и лишнего жаргона."
        />
        <ol className={styles.steps}>
          {landingConfig.steps.map((step) => (
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
