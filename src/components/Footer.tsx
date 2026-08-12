import Link from "next/link";
import { ButtonLink, Container } from "@/components/ui";
import { getSeoNavigation, type LandingConfig } from "@/content";
import styles from "./Landing.module.css";

export function Footer({
  config,
  isHome = true,
}: {
  config: LandingConfig;
  isHome?: boolean;
}) {
  const { site, ui } = config;
  const seoNavigation = getSeoNavigation(config.locale);
  const playHref = isHome ? "#play" : `${config.path}#play`;

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerMain}>
          <div>
            <p className={styles.brand}>
              minedrop2<span className={styles.brandAccent}>.vip</span>
            </p>
            <p className={styles.footerText}>{ui.footer.text}</p>
          </div>
          <nav
            className={styles.footerNav}
            aria-label={
              config.locale === "ru"
                ? "Материалы о Mine Drop 2"
                : "Mine Drop 2 guides"
            }
          >
            {seoNavigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <ButtonLink href={playHref}>{ui.footer.cta}</ButtonLink>
        </div>
        <p className={styles.footerLegal}>
          {ui.footer.legal} © {new Date().getFullYear()} {site.domain}
        </p>
      </Container>
    </footer>
  );
}
