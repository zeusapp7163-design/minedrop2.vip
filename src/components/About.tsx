import { GAME } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="section-rule scroll-target">
      <div className="page-shell section-pad">
        <p className="section-eyebrow">Об игре</p>
        <h2 className="section-title">Официальный сайт Mine Drop 2</h2>
        <div className="about-layout">
          <div className="prose-clean text-[15px] sm:text-base">
            <p>
              <strong>Mine Drop 2</strong> (в поиске также{" "}
              <strong>Minedrop 2</strong>, <strong>майне дроп 2</strong>) —
              сиквел шахтёрского слота от <strong>{GAME.provider}</strong> на{" "}
              <strong>{GAME.engine}</strong>. Этот сайт — точка входа:{" "}
              <strong>играть онлайн</strong>, открыть демо и быстро сверить
              параметры без огромного каталога.
            </p>
            <p>
              Механика — <strong>dig-burst / mining</strong>:{" "}
              <strong>{GAME.grid}</strong>, <strong>Blast Ore</strong>,{" "}
              <strong>Ender Eye bonuses</strong> и <strong>Bonus Buy</strong>.
              Релиз — {GAME.release}. Часто встречается как «Only on Stake».
            </p>
            <p>
              Если искали «mine drop 2 играть», «mine drop 2 слот» или
              «официальный сайт» — вы по адресу. Ниже: как идёт раунд, чем
              сиквел отличается от Mine Drop и почему это не{" "}
              <strong>Mine Slot 2</strong> (InOut).
            </p>
            <p>
              <a
                href="#play"
                className="font-semibold text-accent hover:text-accent-hot"
              >
                → Играть в Mine Drop 2
              </a>
            </p>
          </div>

          <div className="data-table-wrap about-table">
            <table className="data-table data-table--compact">
              <caption className="sr-only">Характеристики Mine Drop 2</caption>
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
