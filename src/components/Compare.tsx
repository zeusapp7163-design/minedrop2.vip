export function Compare() {
  return (
    <section id="compare" className="section-rule scroll-target bg-bg-elevated">
      <div className="page-shell section-pad">
        <p className="section-eyebrow">Не перепутайте</p>
        <h2 className="section-title">
          Mine Drop 2 vs Mine Drop / Mine Slot 2
        </h2>
        <p className="section-lead">
          По запросам «майне дроп 2» и «mine drop 2 играть» часто открывают не
          ту игру. Здесь — короткая развилка.
        </p>

        <div className="prose-clean mt-6 max-w-3xl text-[15px] sm:text-base">
          <h3 className="mb-3 font-display text-lg font-semibold text-fg">
            Сиквел Mine Drop
          </h3>
          <p>
            <strong>Mine Drop 2</strong> — продолжение Mine Drop от Paperclip:
            тот же mining-вайб, но с Blast Ore, Ender Eye, Bonus Buy, RTP 96.70%
            и max ×50000. Играть онлайн имеет смысл именно во вторую часть, если
            ищете актуальный релиз.
          </p>
        </div>

        <h3 className="mt-10 font-display text-lg font-semibold text-fg">
          Mine Drop 2 ≠ Mine Slot 2
        </h3>
        <div className="data-table-wrap mt-4">
          <table className="data-table">
            <thead>
              <tr>
                <th>Критерий</th>
                <th>Mine Drop 2</th>
                <th>Mine Slot 2</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Провайдер", "Paperclip Gaming", "InOut"],
                ["Движок", "Stake Engine", "Контур InOut"],
                ["Линия", "Сиквел Mine Drop", "Линейка Mine Slot"],
                ["Как искать", "Mine Drop 2 / Minedrop 2", "Mine Slot 2"],
              ].map(([a, b, c]) => (
                <tr key={a}>
                  <th scope="row">{a}</th>
                  <td>{b}</td>
                  <td>{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-[15px] text-fg-muted">
          <a href="#play" className="font-semibold text-accent hover:text-accent-hot">
            → Играть в Mine Drop 2 онлайн
          </a>
        </p>
      </div>
    </section>
  );
}
