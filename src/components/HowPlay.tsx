export function HowPlay() {
  return (
    <section id="how" className="band band--glass anchor" aria-labelledby="how-title">
      <div className="shell sec">
        <p className="kicker">Геймплей</p>
        <h2 id="how-title" className="h2">
          Как проходит раунд
        </h2>
        <p className="lede">
          Короткий маршрут от кнопки «Играть» до dig-burst цикла — без воды.
        </p>
        <ol className="steps">
          {[
            [
              "Выберите площадку",
              "Откройте 1win, JetTon или Stake, создайте аккаунт и перейдите в каталог слотов.",
            ],
            [
              "Найдите нужный тайтл",
              "Ищите Mine Drop 2 / Minedrop 2 от Paperclip Gaming. Не путайте с Mine Slot 2.",
            ],
            [
              "Поставьте ставку",
              "Над шахтой появляется дроп 5×3 — от него зависит, как пойдёт прокоп раунда.",
            ],
            [
              "Ловите события",
              "Blast Ore и Ender Eye дают импульс. Bonus Buy — опция, не обязанность.",
            ],
          ].map(([t, d]) => (
            <li key={t} className="tile step">
              <h3>{t}</h3>
              <p>{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
