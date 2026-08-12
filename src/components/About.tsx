import Image from "next/image";
import { Container, DataTable, Section, SectionHeader } from "@/components/ui";
import { landingConfig } from "@/content/minedrop2.config";
import styles from "./Landing.module.css";

export function About() {
  const { game } = landingConfig;
  const rows = [
    ["Название", `${game.name} / ${game.alternateNames[0]}`],
    ["Провайдер", game.provider],
    ["Движок", game.engine],
    ["Релиз", game.release],
    ["Механика", game.mechanics],
    ["Сетка", game.grid],
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
          <div className={styles.prose}>
            <p>
              <strong>{game.name}</strong> — продолжение шахтёрского слота от{" "}
              <strong>{game.provider}</strong>. Игра работает на{" "}
              <strong>{game.engine}</strong> и соединяет поле 5×3 с
              последовательным прокопом блоков.
            </p>
            <p>
              Центральная логика — <strong>dig-burst</strong>. Выигрышные
              события двигают шахту, Blast Ore расчищает область, а Ender Eye
              добавляет отдельные бонусные сценарии. Bonus Buy доступен как
              ускоренный, но более рискованный вход.
            </p>
            <p>
              Здесь собраны параметры, кадры интерфейса и площадки для запуска —
              без смешивания с <strong>Mine Slot 2</strong> от InOut.{" "}
              <a href="#mechanics">Разобрать механику ниже</a>.
            </p>
          </div>

          <div className={styles.aboutMedia}>
            <figure className={styles.editorialFigure}>
              <div className={styles.editorialImage}>
                <Image
                  src="/media/ui-1.jpg"
                  alt="Базовый интерфейс Mine Drop 2 с шахтой и сундуками"
                  fill
                  sizes="(max-width: 899px) 100vw, 52vw"
                />
              </div>
              <figcaption className={styles.caption}>
                Поле 5×3 расположено над шахтой: результат дропа определяет
                дальнейший прокоп.
              </figcaption>
            </figure>

            <DataTable caption="Основные сведения о Mine Drop 2">
              <tbody>
                {rows.map(([label, value]) => (
                  <tr key={label}>
                    <th scope="row">{label}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </DataTable>
          </div>
        </div>
      </Container>
    </Section>
  );
}
