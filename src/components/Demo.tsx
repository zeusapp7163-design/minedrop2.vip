import Image from "next/image";
import { ButtonLink, Container, Section, SectionHeader } from "@/components/ui";
import type { LandingConfig } from "@/content";
import styles from "./Landing.module.css";

export function Demo({ config }: { config: LandingConfig }) {
  const { gallery } = config.ui;

  return (
    <Section id="screens" tone="soft" aria-labelledby="screens-title">
      <Container>
        <SectionHeader
          eyebrow={gallery.eyebrow}
          title={gallery.title}
          titleId="screens-title"
          lead={gallery.lead}
          action={<ButtonLink href="#play">{gallery.cta}</ButtonLink>}
        />
        <div className={styles.gallery}>
          {config.gallery.map((shot) => (
            <figure key={shot.src} className={styles.shot}>
              <div className={styles.shotImage}>
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 699px) 100vw, 33vw"
                />
              </div>
              <figcaption>{shot.caption}</figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
