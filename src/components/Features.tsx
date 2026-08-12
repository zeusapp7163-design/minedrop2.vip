import Image from "next/image";
import { Card, Container, Section, SectionHeader } from "@/components/ui";
import type { LandingConfig } from "@/content";
import styles from "./Landing.module.css";

export function Features({ config }: { config: LandingConfig }) {
  const { features } = config.ui;

  return (
    <Section id="features" aria-labelledby="features-title">
      <Container>
        <SectionHeader
          eyebrow={features.eyebrow}
          title={features.title}
          titleId="features-title"
          lead={features.lead}
        />
        <div className={styles.featureGrid}>
          {config.features.map((feature) => (
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
