export function Features() {
  return (
    <section id="features" className="section-rule scroll-target bg-bg-elevated">
      <div className="page-shell section-pad">
        <p className="section-eyebrow">Фичи слота</p>
        <h2 className="section-title">Бонусы Mine Drop 2: Blast Ore, Ender Eye, Bonus Buy</h2>
        <p className="section-lead">
          Сиквел держится на dig-burst цепочках и бонусных режимах — не на
          «просто барабанах».
        </p>

        <div className="feature-grid mt-8">
          {[
            {
              t: "Blast Ore",
              d: "Взрывной слой механики. Часто переводит спокойный прокоп в горячую фазу. На короткой сессии может не прийти — так устроена высокая волатильность.",
            },
            {
              t: "Ender Eye bonuses",
              d: "Отдельные бонусные сценарии с потенциалом к крупным множителям — вплоть до ×50000. Ради этого заходят в Ender Eye.",
            },
            {
              t: "Bonus Buy",
              d: "Покупка входа в бонус ускоряет экшен и повышает цену спина. На официальном сайте сначала лучше демо, потом buy с лимитом на число покупок.",
            },
          ].map((f) => (
            <article key={f.t} className="feature-card">
              <h3 className="feature-card__t">{f.t}</h3>
              <p className="feature-card__d">{f.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
