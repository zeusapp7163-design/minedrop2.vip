import { Card, Container, Section, SectionHeader } from "@/components/ui";
import { landingConfig } from "@/content/minedrop2.config";
import styles from "./Landing.module.css";

export function Rtp() {
  const { game } = landingConfig;
  const items = [
    {
      value: game.rtp,
      title: "Теоретический возврат",
      text: "RTP работает на длинной дистанции. Результат одной короткой сессии может сильно отличаться.",
    },
    {
      value: game.volatility,
      title: "Профиль риска",
      text: "Между яркими событиями возможны спокойные отрезки. Размер ставки должен учитывать эту дистанцию.",
    },
    {
      value: game.maxWin,
      title: "Максимальный потенциал",
      text: "Высокий потолок относится к редким исходам. Bonus Buy дополнительно повышает дисперсию.",
    },
  ];

  return (
    <Section id="math" tone="soft" aria-labelledby="math-title">
      <Container>
        <SectionHeader
          eyebrow="Математика"
          title="Цифры без обещаний"
          titleId="math-title"
          lead="RTP, волатильность и max win описывают модель игры, но не гарантируют результат конкретного запуска."
        />
        <div className={styles.riskGrid}>
          {items.map((item) => (
            <Card key={item.title} className={styles.riskCard}>
              <span className={styles.riskValue}>{item.value}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
