import Image from "next/image";
import { Card, Container, Section, SectionHeader } from "@/components/ui";
import { landingConfig } from "@/content/minedrop2.config";
import { PromoCopyButton } from "@/components/PromoCopyButton";
import styles from "./Landing.module.css";

export function Partners() {
  return (
    <Section
      id="play"
      className={styles.partnerSection}
      aria-labelledby="play-title"
    >
      <Container>
        <SectionHeader
          className={styles.partnerIntro}
          eyebrow="Площадки"
          title="Выберите, где запустить Mine Drop 2"
          titleId="play-title"
          lead="Сравните бонус, промокод и рейтинг. Условия могут меняться — проверяйте их на стороне площадки перед регистрацией."
        />

        <div className={styles.partnerGrid}>
          {landingConfig.partners.map((partner, index) => (
            <Card
              key={partner.id}
              className={`${styles.offer} ${index === 0 ? styles.offerFeatured : ""}`}
            >
              <header className={styles.offerMeta}>
                <span className={styles.offerRank}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={styles.offerBadge}>{partner.badge}</span>
                <span
                  className={styles.offerRating}
                  aria-label={`Рейтинг ${partner.rating}`}
                >
                  <strong>{partner.rating}</strong> ★
                </span>
              </header>

              <div className={styles.offerBrand}>
                <div className={styles.logoSlot}>
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    sizes="176px"
                    priority={index === 0}
                  />
                </div>
                <p className={styles.offerLabel}>Бонус новичкам</p>
                <p className={styles.offerDeal}>
                  <span className={styles.offerValue}>{partner.bonusValue}</span>
                  <span className={styles.offerExtra}>{partner.bonusExtra}</span>
                </p>
              </div>

              <footer className={styles.offerFoot}>
                {partner.promoCode ? (
                  <div className={styles.promo}>
                    <span className={styles.promoLabel}>Код</span>
                    <span className={styles.promoCode}>{partner.promoCode}</span>
                    <PromoCopyButton code={partner.promoCode} />
                  </div>
                ) : (
                  <p className={styles.noPromo}>Бонусы без промокода</p>
                )}
                <a
                  href={`/go/${partner.id}`}
                  className={styles.offerCta}
                  rel="nofollow sponsored noopener"
                >
                  Играть
                </a>
                <p className={styles.offerLegal}>
                  18+ · Играйте ответственно
                </p>
              </footer>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
