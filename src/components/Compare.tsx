import { Container, DataTable, Section, SectionHeader } from "@/components/ui";
import type { LandingConfig } from "@/content";
import styles from "./Landing.module.css";

export function Compare({ config }: { config: LandingConfig }) {
  const { compare } = config.ui;

  return (
    <Section id="compare" aria-labelledby="compare-title">
      <Container>
        <SectionHeader
          eyebrow={compare.eyebrow}
          title={compare.title}
          titleId="compare-title"
          lead={compare.lead}
        />
        <div className={styles.compareWrap}>
          <DataTable caption={compare.caption}>
            <thead>
              <tr>
                {compare.columns.map((column) => (
                  <th key={column} scope="col">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {config.compareRows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  <td>{row.mineDrop}</td>
                  <td>{row.mineSlot}</td>
                </tr>
              ))}
            </tbody>
          </DataTable>
          <a href="#screens" className={styles.compareLink}>
            {compare.link}
          </a>
        </div>
      </Container>
    </Section>
  );
}
