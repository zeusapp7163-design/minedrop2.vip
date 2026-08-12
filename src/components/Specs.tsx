import { SPECS } from "@/lib/site";

export function Specs() {
  return (
    <section className="shell" aria-labelledby="specs-title" style={{ paddingBottom: "0.5rem" }}>
      <h2 id="specs-title" className="sr-only">
        Характеристики Mine Drop 2
      </h2>
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
