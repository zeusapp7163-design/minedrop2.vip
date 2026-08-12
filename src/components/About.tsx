import { GAME } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="section-rule scroll-target">
      <div className="page-shell section-pad">
        <h2 className="font-display text-[1.65rem] font-semibold tracking-tight sm:text-3xl">
          Mine Drop 2
        </h2>
        <div className="prose-clean mt-6 max-w-3xl text-[15px] sm:text-base">
          <p>
            <strong>Mine Drop 2</strong> (Minedrop 2) — сиквел шахтёрского слота
            от <strong>{GAME.provider}</strong> на <strong>{GAME.engine}</strong>.
            Механика dig-burst: дроп 5×3 над шахтой блоков, Blast Ore, Ender Eye
            bonuses и Bonus Buy. Релиз — {GAME.release}.
          </p>
          <p>
            Этот сайт — точка входа: играть онлайн на деньги, открыть демо и
            сверить RTP {GAME.rtp} / max {GAME.maxWin}. Не путайте с{" "}
            <strong>Mine Slot 2</strong> от InOut — это другая игра.
          </p>
          <p>
            <a
              href="#play"
              className="font-semibold text-accent hover:text-accent-hot"
            >
              → Играть в Mine Drop 2 онлайн
            </a>
          </p>
        </div>

        <div className="data-table-wrap mt-10">
          <table className="data-table">
            <tbody>
              {[
                ["Название", "Mine Drop 2 / Minedrop 2"],
                ["Провайдер", GAME.provider],
                ["Движок", GAME.engine],
                ["RTP", GAME.rtp],
                ["Волатильность", GAME.volatility],
                ["Max win", GAME.maxWin],
                ["Механика", GAME.mechanics],
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
    </section>
  );
}
