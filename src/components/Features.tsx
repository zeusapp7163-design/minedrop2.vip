import Image from "next/image";
import { Card, Container, Section, SectionHeader } from "@/components/ui";
import { landingConfig } from "@/content/minedrop2.config";
import styles from "./Landing.module.css";

export function Features() {
  return (
    <Section id="features" aria-labelledby="features-title">
      <Container>
        <SectionHeader
          eyebrow="Ключевые события"
          title="Три механики, которые меняют темп"
          titleId="features-title"
          lead="Не просто список функций: каждый блок показывает, как выглядит событие и зачем оно нужно в раунде."
        />
        <div className={styles.featureGrid}>
          {landingConfig.features.map((feature) => (
            <Card key={feature.title} className={styles.featureCard}>
              <div className={styles.featureImage}>
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  fill
                  sizes="(max-width: 639px) 100vw, 33vw"
                />
              </div>
              <div className={styles.featureBody}>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
