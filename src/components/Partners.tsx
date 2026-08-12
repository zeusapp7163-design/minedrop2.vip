import Image from "next/image";
import { Card, Container, Section, SectionHeader } from "@/components/ui";
import {
  AFFILIATE_LINKS_ENABLED,
  type LandingConfig,
} from "@/content";
import { PromoCopyButton } from "@/components/PromoCopyButton";
import styles from "./Landing.module.css";

export function Partners({ config }: { config: LandingConfig }) {
  const { partners } = config.ui;

  return (
    <Section
      id="play"
      className={styles.partnerSection}
      aria-labelledby="play-title"
    >
      <Container className={styles.partnerContainer}>
        <SectionHeader
          className={styles.partnerIntro}
          eyebrow={partners.eyebrow}
          title={partners.title}
          titleId="play-title"
          lead={partners.lead}
        />

        <div className={styles.partnerGrid}>
          {config.partners.map((partner, index) => (
            <Card
              key={partner.id}
              className={`${styles.offer} ${index === 0 ? styles.offerFeatured : ""}`}
            >
              <span className={styles.offerShine} aria-hidden="true" />
              <header className={styles.offerMeta}>
                <span className={styles.offerRank}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={styles.offerBadge}>{partner.badge}</span>
                <span
                  className={styles.offerRating}
                  aria-label={`${partners.ratingLabel} ${partner.rating}`}
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
                <p className={styles.offerLabel}>{partners.welcomeBonus}</p>
                <p className={styles.offerDeal}>
                  <span className={styles.offerValue}>{partner.bonusValue}</span>
                  <span className={styles.offerExtra}>{partner.bonusExtra}</span>
                </p>
              </div>

              <footer className={styles.offerFoot}>
                {partner.promoCode ? (
                  <div className={styles.promo}>
                    <span className={styles.promoLabel}>
                      {partners.promoLabel}
                    </span>
                    <span className={styles.promoCode}>{partner.promoCode}</span>
                    <PromoCopyButton
                      code={partner.promoCode}
                      copyLabel={partners.copy}
                      copiedLabel={partners.copied}
                      ariaLabel={partners.copyAria}
                    />
                  </div>
                ) : (
                  <p className={styles.noPromo}>{partners.noPromo}</p>
                )}
                {AFFILIATE_LINKS_ENABLED ? (
                  <a
                    href={`/${partner.id}`}
                    className={styles.offerCta}
                    rel="nofollow sponsored noopener"
                  >
                    {partners.play} {partner.name}
                  </a>
                ) : (
                  <span
                    className={`${styles.offerCta} ${styles.offerCtaDisabled}`}
                    aria-disabled="true"
                  >
                    {config.locale === "ru"
                      ? "Ссылка временно отключена"
                      : "Link temporarily disabled"}
                  </span>
                )}
                <p className={styles.offerLegal}>{partners.legal}</p>
              </footer>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
