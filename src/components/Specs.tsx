import { Container } from "@/components/ui";
import { landingConfig } from "@/content/minedrop2.config";
import styles from "./Landing.module.css";

export function Specs() {
  return (
    <section aria-labelledby="specs-title">
      <Container>
        <h2 id="specs-title" className="sr-only">
          Характеристики Mine Drop 2
        </h2>
        <dl className={styles.stats}>
          {landingConfig.stats.map((item) => (
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
