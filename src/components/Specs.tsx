import { SPECS } from "@/lib/site";

export function Specs() {
  return (
    <section className="page-shell pb-8 sm:pb-10">
      <h2 className="sr-only">Характеристики Mine Drop 2</h2>
      <dl className="spec-grid">
        {SPECS.map((item) => (
          <div key={item.label} className="spec-card">
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
