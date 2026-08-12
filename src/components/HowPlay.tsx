export function HowPlay() {
  return (
    <section id="how" className="section-rule scroll-target">
      <div className="page-shell section-pad">
        <p className="section-eyebrow">Как играть</p>
        <h2 className="section-title">Как играть в Mine Drop 2 онлайн</h2>
        <p className="section-lead">
          Короткий маршрут от официального сайта до спина — и что происходит
          внутри dig-burst раунда.
        </p>

        <ol className="steps-grid mt-8">
          {[
            {
              n: "01",
              t: "Выберите казино",
              d: "Нажмите «Играть онлайн» и откройте 1win, JetTon или Stake. Создайте аккаунт и депозит.",
            },
            {
              n: "02",
              t: "Найдите Mine Drop 2",
              d: "В каталоге ищите Mine Drop 2 / Minedrop 2 от Paperclip Gaming. Не путайте с Mine Slot 2 (InOut).",
            },
            {
              n: "03",
              t: "Ставка и дроп 5×3",
              d: "Фиксируете ставку. Над шахтой блоков формируется дроп 5×3 — от него зависит прокоп раунда.",
            },
            {
              n: "04",
              t: "Blast Ore и бонусы",
              d: "Dig-burst открывает Blast Ore и путь к Ender Eye. Bonus Buy — если хотите ускорить вход в бонус.",
            },
          ].map((s) => (
            <li key={s.n} className="step-card">
              <span className="step-card__n">{s.n}</span>
              <h3 className="step-card__t">{s.t}</h3>
              <p className="step-card__d">{s.d}</p>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-[15px] leading-relaxed text-fg-muted">
          High volatility + max ×50000 = редкие пики. Начните с небольшой ставки
          или демо.{" "}
          <a href="#play" className="font-semibold text-accent hover:text-accent-hot">
            Играть в Mine Drop 2 →
          </a>
        </p>
      </div>
    </section>
  );
}
