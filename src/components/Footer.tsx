import { ButtonLink, Container } from "@/components/ui";
import { landingConfig } from "@/content/minedrop2.config";
import styles from "./Landing.module.css";

export function Footer() {
  const { site, game } = landingConfig;

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerMain}>
          <div>
            <p className={styles.brand}>
              minedrop2<span className={styles.brandAccent}>.vip</span>
            </p>
            <p className={styles.footerText}>
              Обзор {game.name}: параметры, механика, интерфейс и площадки для
              запуска.
            </p>
          </div>
          <ButtonLink href="#play">Выбрать площадку</ButtonLink>
        </div>
        <p className={styles.footerLegal}>
          <strong>18+</strong>. Играйте ответственно. Азартные игры могут
          вызывать зависимость. На сайте используются партнёрские ссылки. ©{" "}
          {new Date().getFullYear()} {site.domain}
        </p>
      </Container>
    </footer>
  );
}
