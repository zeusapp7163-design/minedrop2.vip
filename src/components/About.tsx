import { GAME } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="band anchor">
      <div className="shell sec">
        <p className="eyebrow">Об игре</p>
        <h2 className="title">Официальный сайт Mine Drop 2</h2>
        <div className="grid-2">
          <div className="prose">
            <p>
              <strong>Mine Drop 2</strong> (Minedrop 2 / майне дроп 2) — сиквел
              от <strong>{GAME.provider}</strong> на{" "}
              <strong>{GAME.engine}</strong>. Здесь можно{" "}
              <strong>играть онлайн</strong>, открыть демо и сверить параметры
              без каталога на сотни слотов.
            </p>
            <p>
              Механика dig-burst: {GAME.grid}, Blast Ore, Ender Eye bonuses и
              Bonus Buy. Релиз — {GAME.release}. Часто «Only on Stake».
            </p>
            <p>
              Не путайте с <strong>Mine Slot 2</strong> (InOut) — другой
              провайдер и другая игра.{" "}
              <a href="#play">→ Играть в Mine Drop 2</a>
            </p>
          </div>
          <div className="table-wrap">
            <table className="table">
              <tbody>
                {[
                  ["Название", "Mine Drop 2 / Minedrop 2"],
                  ["Провайдер", GAME.provider],
                  ["Движок", GAME.engine],
                  ["RTP", GAME.rtp],
                  ["Вола", GAME.volatility],
                  ["Max win", GAME.maxWin],
                  ["Фичи", GAME.features.join(", ")],
                ].map(([k, v]) => (
                  <tr key={k}>
                    <th scope="row">{k}</th>
                    <td>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
