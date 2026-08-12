export function Rtp() {
  return (
    <section id="rtp" className="section-rule scroll-target">
      <div className="page-shell section-pad">
        <p className="section-eyebrow">Математика</p>
        <h2 className="section-title">RTP 96.70%, волатильность и риск</h2>
        <p className="section-lead">
          Что означают цифры Mine Drop 2 на практике — без маркетинговых
          обещаний.
        </p>

        <div className="content-split mt-8">
          <div className="prose-clean text-[15px] sm:text-base">
            <h3 className="mb-3 font-display text-lg font-semibold text-fg">
              RTP 96.70%
            </h3>
            <p>
              Теоретический возврат на длинной дистанции. Это не прогноз на
              вечер: на 100–500 спинах отклонение от теории — норма. Dig-burst с
              max ×50000 даёт «рваный» банкролл: тихие серии и резкие пики.
            </p>
          </div>
          <div className="prose-clean text-[15px] sm:text-base">
            <h3 className="mb-3 font-display text-lg font-semibold text-fg">
              Высокая волатильность
            </h3>
            <p>
              Банкролл должен переживать сухие проходы. Рабочий ориентир для
              знакомства: ставка, при которой 150–250 спинов не выглядят
              катастрофой. Bonus Buy — отдельный лимит, не весь депозит.
            </p>
          </div>
        </div>

        <div className="data-table-wrap mt-8">
          <table className="data-table">
            <caption className="border-b border-line px-4 py-3 text-left font-display text-base font-semibold text-fg">
              Риск-профиль Mine Drop 2
            </caption>
            <thead>
              <tr>
                <th>Параметр</th>
                <th>Значение</th>
                <th className="hidden sm:table-cell">Практика</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["RTP", "96.70%", "Не ждать «возврата» за вечер"],
                ["Волатильность", "Высокая", "Меньше ставка, длиннее сессия"],
                ["Max win", "×50000", "Понимать редкость хвоста"],
                ["Bonus Buy", "Ускоряет вход", "Лимит на число покупок"],
              ].map(([a, b, c]) => (
                <tr key={a}>
                  <th scope="row">{a}</th>
                  <td>{b}</td>
                  <td className="hidden sm:table-cell">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
