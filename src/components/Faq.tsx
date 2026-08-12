import { Container, Section, SectionHeader } from "@/components/ui";
import { landingConfig } from "@/content/minedrop2.config";
import styles from "./Landing.module.css";

export function Faq() {
  return (
    <Section id="faq" aria-labelledby="faq-title">
      <Container>
        <div className={styles.faqLayout}>
          <SectionHeader
            eyebrow="FAQ"
            title="Коротко о главном"
            titleId="faq-title"
            lead="Ответы про демо, RTP, механику и отличие от Mine Slot 2."
          />
          <div className={styles.faqList}>
            {landingConfig.faq.map((item) => (
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
