import { Container, DataTable, Section, SectionHeader } from "@/components/ui";
import styles from "./Landing.module.css";

const rows = [
  ["Провайдер", "Paperclip Gaming", "InOut"],
  ["Движок", "Stake Engine", "Экосистема InOut"],
  ["Серия", "Продолжение Mine Drop", "Продолжение Mine Slot"],
  ["Правильный запрос", "Mine Drop 2 / Minedrop 2", "Mine Slot 2"],
];

export function Compare() {
  return (
    <Section id="compare" aria-labelledby="compare-title">
      <Container>
        <SectionHeader
          eyebrow="Не перепутайте"
          title="Mine Drop 2 — не Mine Slot 2"
          titleId="compare-title"
          lead="Названия похожи, но это разные игры, провайдеры и продуктовые линейки."
        />
        <div className={styles.compareWrap}>
          <DataTable caption="Сравнение Mine Drop 2 и Mine Slot 2">
            <thead>
              <tr>
                <th scope="col">Критерий</th>
                <th scope="col">Mine Drop 2</th>
                <th scope="col">Mine Slot 2</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, mineDrop, mineSlot]) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  <td>{mineDrop}</td>
                  <td>{mineSlot}</td>
                </tr>
              ))}
            </tbody>
          </DataTable>
          <a href="#screens" className={styles.compareLink}>
            Посмотреть интерфейс Mine Drop 2 →
          </a>
        </div>
      </Container>
    </Section>
  );
}
