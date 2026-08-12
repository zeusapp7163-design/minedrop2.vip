import { Container, Section, SectionHeader } from "@/components/ui";
import type { LandingConfig } from "@/content";
import styles from "./Landing.module.css";

export function Faq({ config }: { config: LandingConfig }) {
  const { faq } = config.ui;

  return (
    <Section id="faq" aria-labelledby="faq-title">
      <Container>
        <div className={styles.faqLayout}>
          <SectionHeader
            eyebrow={faq.eyebrow}
            title={faq.title}
            titleId="faq-title"
            lead={faq.lead}
          />
          <div className={styles.faqList}>
            {config.faq.map((item) => (
              <details key={item.question} className={styles.faqItem}>
                <summary>
                  <span>{item.question}</span>
                  <span className={styles.faqIcon} aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
