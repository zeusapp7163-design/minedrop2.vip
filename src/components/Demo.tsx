import Image from "next/image";
import { ButtonLink, Container, Section, SectionHeader } from "@/components/ui";
import { landingConfig } from "@/content/minedrop2.config";
import styles from "./Landing.module.css";

export function Demo() {
  return (
    <Section id="screens" tone="soft" aria-labelledby="screens-title">
      <Container>
        <SectionHeader
          eyebrow="Интерфейс"
          title="Игра крупным планом"
          titleId="screens-title"
          lead="Реальные кадры показывают структуру поля, прокоп и экран Bonus Buy без декоративных мокапов."
          action={<ButtonLink href="#play">Выбрать площадку</ButtonLink>}
        />
        <div className={styles.gallery}>
          {landingConfig.gallery.map((shot) => (
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
