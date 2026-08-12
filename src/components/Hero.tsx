import Image from "next/image";
import { landingConfig } from "@/content/minedrop2.config";
import { ButtonLink, Container } from "@/components/ui";
import styles from "./Landing.module.css";

export function Hero() {
  const { game } = landingConfig;

  return (
    <section className={styles.hero} aria-labelledby="page-title">
      <Container>
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
              <ButtonLink href="#play">Играть</ButtonLink>
              <ButtonLink href="#screens" variant="secondary">
                Смотреть игру
              </ButtonLink>
            </div>
            <ul className={styles.heroFacts} aria-label="Ключевые параметры игры">
              <li className={styles.heroFact}>
                RTP <strong>{game.rtp}</strong>
              </li>
              <li className={styles.heroFact}>
                Max <strong>{game.maxWin}</strong>
              </li>
              <li className={styles.heroFact}>
                Риск <strong>{game.volatility}</strong>
              </li>
            </ul>
          </div>

          <div className={styles.heroVisual} aria-label="Визуал Mine Drop 2">
            <div className={styles.heroScreen}>
              <Image
                src="/media/ui-3.webp"
                alt="Активный dig-burst раунд Mine Drop 2"
                fill
                priority
                sizes="(max-width: 799px) 100vw, 46vw"
              />
            </div>
            <figure className={styles.heroCover}>
              <Image
                src={game.cover}
                alt={`Обложка ${game.name}`}
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
