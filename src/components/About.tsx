import { GAME } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="band anchor" aria-labelledby="about-title">
      <div className="shell sec">
        <p className="kicker">Об игре</p>
        <h2 id="about-title" className="h2">
          Что такое Mine Drop 2
        </h2>
        <div className="split">
          <div className="prose">
            <p>
              <strong>Mine Drop 2</strong> (также Minedrop 2 и «майне дроп 2») —
              продолжение шахтёрского слота от <strong>{GAME.provider}</strong>.
              Игра собрана под <strong>{GAME.engine}</strong> и часто идёт с
              пометкой Only on Stake.
            </p>
            <p>
              В центре механики — <strong>dig-burst</strong>: над шахтой блоков
              формируется дроп 5×3, дальше раунд живёт за счёт прокопа,{" "}
              <strong>Blast Ore</strong> и бонусов <strong>Ender Eye</strong>.
              Есть <strong>Bonus Buy</strong>, если хотите ускорить вход в
              бонусный режим.
            </p>
            <p>
              Этот сайт собран как точка входа: запуск онлайн, демо и честные
              параметры без каталога на сотни слотов.{" "}
              <a href="#play">Перейти к площадкам →</a>
            </p>
          </div>

          <div className="table-box">
            <table className="table">
              <caption className="sr-only">
                Таблица характеристик Mine Drop 2
              </caption>
              <tbody>
                {[
                  ["Название", "Mine Drop 2 / Minedrop 2"],
                  ["Провайдер", GAME.provider],
                  ["Движок", GAME.engine],
                  ["Релиз", GAME.release],
                  ["RTP", GAME.rtp],
                  ["Волатильность", GAME.volatility],
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
