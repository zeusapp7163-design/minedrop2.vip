export function HowPlay() {
  return (
    <section id="how" className="band band--tint anchor">
      <div className="shell sec">
        <p className="eyebrow">Как играть</p>
        <h2 className="title">Как играть в Mine Drop 2</h2>
        <p className="lead">
          От кнопки «Играть» до dig-burst раунда — четыре коротких шага.
        </p>
        <ol className="grid-4">
          {[
            ["01", "Выберите казино", "Откройте 1win, JetTon или Stake и создайте аккаунт."],
            ["02", "Найдите слот", "Ищите Mine Drop 2 / Minedrop 2 от Paperclip — не Mine Slot 2."],
            ["03", "Ставка и дроп", "Фиксируете ставку. Над шахтой идёт дроп 5×3."],
            ["04", "Бонусы", "Blast Ore, Ender Eye и опциональный Bonus Buy."],
          ].map(([n, t, d]) => (
            <li key={n} className="panel">
              <div className="panel__n">{n}</div>
              <h3 style={{ marginTop: 8 }}>{t}</h3>
              <p>{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
