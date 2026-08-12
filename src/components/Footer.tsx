import { ButtonLink, Container } from "@/components/ui";
import type { LandingConfig } from "@/content";
import styles from "./Landing.module.css";

export function Footer({ config }: { config: LandingConfig }) {
  const { site, ui } = config;

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
          <ButtonLink href="#play">{ui.footer.cta}</ButtonLink>
        </div>
        <p className={styles.footerLegal}>
          {ui.footer.legal} © {new Date().getFullYear()} {site.domain}
        </p>
      </Container>
    </footer>
  );
}
