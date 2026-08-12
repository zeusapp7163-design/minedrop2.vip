export function Compare() {
  return (
    <section id="compare" className="band anchor">
      <div className="shell sec">
        <p className="eyebrow">Не перепутайте</p>
        <h2 className="title">Mine Drop 2 vs Mine Slot 2</h2>
        <p className="lead">
          Похожие названия — разные игры. Нужен Paperclip / Stake Engine.
        </p>
        <div className="table-wrap" style={{ marginTop: 20 }}>
          <table className="table">
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
                ["Движок", "Stake Engine", "InOut"],
                ["Линия", "Сиквел Mine Drop", "Mine Slot"],
                ["Поиск", "Mine Drop 2 / Minedrop 2", "Mine Slot 2"],
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
        <p className="prose" style={{ marginTop: 16 }}>
          <a href="#play">→ Играть в Mine Drop 2</a>
        </p>
      </div>
    </section>
  );
}
