import Image from "next/image";
import { ButtonLink, Container } from "@/components/ui";
import type { LandingConfig } from "@/content";
import styles from "./Landing.module.css";

export function Hero({ config }: { config: LandingConfig }) {
  const { game, ui } = config;
  const heroStats = [
    config.stats[0],
    config.stats[2],
    config.stats[4],
    config.stats[3],
  ];

  return (
    <section className={styles.hero} aria-labelledby="page-title">
      <Container className={styles.heroContainer}>
        <div className={styles.heroPanel}>
          <div className={styles.heroMain}>
            <figure className={styles.heroPoster}>
              <Image
                src={game.cover}
                alt={ui.hero.coverAlt}
                fill
                priority
                sizes="(max-width: 639px) 100vw, 240px"
              />
            </figure>

            <div className={styles.heroCopy}>
              <p className={styles.heroBadge}>
                {game.provider}
              </p>
              <h1 id="page-title" className={styles.heroTitle}>
                {game.name}
              </h1>
              <p className={styles.heroLead}>{game.heroLead}</p>
            </div>
          </div>

          <div className={styles.heroMeta}>
            <dl className={styles.heroFacts} aria-label={ui.hero.factsLabel}>
              {heroStats.map((stat) => (
                <div key={stat.label} className={styles.heroFact}>
                  <dt>{stat.label}</dt>
                  <dd>{stat.value}</dd>
                </div>
              ))}
            </dl>
            <div className={styles.heroActions}>
              <ButtonLink href="#play">{ui.hero.primaryCta}</ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
