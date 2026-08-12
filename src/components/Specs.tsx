import { SPECS } from "@/lib/site";

export function Specs() {
  return (
    <section className="shell" style={{ paddingBottom: "8px" }}>
      <h2 className="sr-only">Характеристики Mine Drop 2</h2>
      <dl className="specs">
        {SPECS.map((item) => (
          <div key={item.label} className="spec">
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
