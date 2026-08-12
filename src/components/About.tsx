import Image from "next/image";
import { Container, Section, SectionHeader } from "@/components/ui";
import { landingConfig } from "@/content/minedrop2.config";
import styles from "./Landing.module.css";

export function About() {
  const { game } = landingConfig;
  const highlights = [
    {
      label: "01",
      title: "Дроп 5×3",
      text: "Комбинации формируются над шахтой и определяют, продолжится ли прокоп.",
    },
    {
      label: "02",
      title: "Живой раунд",
      text: "Blast Ore и Ender Eye меняют поле уже после первого результата.",
    },
    {
      label: "03",
      title: "Высокий риск",
      text: `Волатильность высокая, RTP ${game.rtp}, максимальный потенциал ${game.maxWin}.`,
    },
  ];

  return (
    <Section id="about" aria-labelledby="about-title">
      <Container>
        <SectionHeader
          eyebrow="Об игре"
          title="Шахта, которая живёт после каждого дропа"
          titleId="about-title"
          lead="Mine Drop 2 развивает идею оригинала: комбинация — это не финал спина, а начало движения вглубь шахты."
        />

        <div className={styles.aboutGrid}>
          <figure className={styles.aboutFigure}>
            <div className={styles.aboutImage}>
              <Image
                src="/media/ui-1.jpg"
                alt="Базовый интерфейс Mine Drop 2 с шахтой и сундуками"
                fill
                sizes="(max-width: 899px) 100vw, 58vw"
              />
            </div>
            <figcaption>
              Базовый раунд: поле 5×3, шахта блоков и пять сундуков прогресса.
            </figcaption>
          </figure>

          <article className={styles.aboutSummary}>
            <p className={styles.aboutLabel}>Суть игры</p>
            <h3>Один дроп запускает цепочку событий</h3>
            <div className={styles.prose}>
              <p>
                <strong>{game.name}</strong> — продолжение шахтёрского слота от{" "}
                <strong>{game.provider}</strong> на движке{" "}
                <strong>{game.engine}</strong>.
              </p>
              <p>
                Здесь выигрышная комбинация не завершает спин: она двигает
                шахту глубже, открывает новые блоки и даёт пространство для
                Blast Ore и Ender Eye.
              </p>
            </div>
            <a href="#mechanics" className={styles.aboutLink}>
              Как устроен раунд →
            </a>
          </article>
        </div>

        <div className={styles.aboutHighlights}>
          {highlights.map((item) => (
            <article key={item.label} className={styles.aboutHighlight}>
              <span>{item.label}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
