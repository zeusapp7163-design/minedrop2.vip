import { Container } from "@/components/ui";
import type { LandingConfig } from "@/content";
import styles from "./Landing.module.css";

export function Specs({ config }: { config: LandingConfig }) {
  return (
    <section aria-labelledby="specs-title">
      <Container>
        <h2 id="specs-title" className="sr-only">
          {config.ui.specsTitle}
        </h2>
        <dl className={styles.stats}>
          {config.stats.map((item) => (
            <div key={item.label} className={styles.stat}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
