import Image from "next/image";
import { ButtonLink, Container } from "@/components/ui";
import type { LandingConfig } from "@/content";
import styles from "./Landing.module.css";

export function Hero({ config }: { config: LandingConfig }) {
  const { game, ui } = config;

  return (
    <section className={styles.hero} aria-labelledby="page-title">
      <Container className={styles.heroContainer}>
        <div className={styles.heroPanel}>
          <div className={styles.heroCopy}>
            <p className={styles.heroBadge}>
              {game.provider} · {game.engine}
            </p>
            <h1 id="page-title" className={styles.heroTitle}>
              {game.name}
            </h1>
            <p className={styles.heroLead}>{game.heroLead}</p>
            <div className={styles.heroActions}>
              <ButtonLink href="#play">{ui.hero.primaryCta}</ButtonLink>
              <ButtonLink href="#screens" variant="secondary">
                {ui.hero.secondaryCta}
              </ButtonLink>
            </div>
            <ul className={styles.heroFacts} aria-label={ui.hero.factsLabel}>
              <li className={styles.heroFact}>
                {ui.hero.rtpLabel} <strong>{game.rtp}</strong>
              </li>
              <li className={styles.heroFact}>
                {ui.hero.maxLabel} <strong>{game.maxWin}</strong>
              </li>
              <li className={styles.heroFact}>
                {ui.hero.riskLabel} <strong>{game.volatility}</strong>
              </li>
            </ul>
          </div>

          <div className={styles.heroVisual} aria-label={ui.hero.visualLabel}>
            <div className={styles.heroScreen}>
              <Image
                src="/media/ui-3.webp"
                alt={ui.hero.screenAlt}
                fill
                priority
                sizes="(max-width: 799px) 100vw, 46vw"
              />
            </div>
            <figure className={styles.heroCover}>
              <Image
                src={game.cover}
                alt={ui.hero.coverAlt}
                width={408}
                height={546}
                priority
                sizes="(max-width: 799px) 28vw, 184px"
              />
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
}
