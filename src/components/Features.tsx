export function Features() {
  return (
    <section id="features" className="band anchor">
      <div className="shell sec">
        <p className="eyebrow">Фичи</p>
        <h2 className="title">Blast Ore, Ender Eye, Bonus Buy</h2>
        <p className="lead">Три опоры dig-burst сиквела — коротко и по делу.</p>
        <div className="grid-3">
          {[
            ["Blast Ore", "Взрывной слой механики. Переводит спокойный прокоп в горячую фазу раунда."],
            ["Ender Eye", "Бонусные сценарии с потенциалом к крупным множителям — вплоть до ×50000."],
            ["Bonus Buy", "Ускоряет вход в бонус. Считайте цену покупки и лимит сессии."],
          ].map(([t, d]) => (
            <article key={t} className="panel">
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
