export function Compare() {
  return (
    <section id="compare" className="band anchor" aria-labelledby="compare-title">
      <div className="shell sec">
        <p className="kicker">Развести названия</p>
        <h2 id="compare-title" className="h2">
          Mine Drop 2 ≠ Mine Slot 2
        </h2>
        <p className="lede">
          По запросам «майне дроп 2» и «mine drop 2 играть» часто открывают не
          ту игру. Ниже — короткая развилка.
        </p>
        <div className="table-box" style={{ marginTop: "1.2rem" }}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Критерий</th>
                <th scope="col">Mine Drop 2</th>
                <th scope="col">Mine Slot 2</th>
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
        <p className="prose" style={{ marginTop: "1rem" }}>
          <a href="#play">→ Играть в Mine Drop 2</a>
        </p>
      </div>
    </section>
  );
}
