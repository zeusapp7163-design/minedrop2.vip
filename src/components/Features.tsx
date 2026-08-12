export function Features() {
  return (
    <section id="features" className="band anchor" aria-labelledby="features-title">
      <div className="shell sec">
        <p className="kicker">Фичи</p>
        <h2 id="features-title" className="h2">
          Blast Ore, Ender Eye и Bonus Buy
        </h2>
        <p className="lede">
          Три опоры сиквела — ради них обычно и заходят в Mine Drop 2.
        </p>
        <div className="cards-3">
          {[
            [
              "Blast Ore",
              "Взрывной слой механики. Именно он чаще всего переводит спокойный прокоп в горячую фазу раунда.",
            ],
            [
              "Ender Eye",
              "Отдельные бонусные сценарии с потенциалом к крупным множителям — вплоть до заявленного ×50000.",
            ],
            [
              "Bonus Buy",
              "Покупка ускоряет вход в бонус, но дороже спин. Имеет смысл только с заранее заданным лимитом.",
            ],
          ].map(([t, d]) => (
            <article key={t} className="tile">
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
