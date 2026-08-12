import Image from "next/image";

export function Hero() {
  return (
    <header className="hero">
      <div className="hero__glow" aria-hidden />
      <div className="shell hero__grid">
        <figure className="hero__cover">
          <Image
            src="/media/cover.webp"
            alt="Обложка слота Mine Drop 2 от Paperclip Gaming"
            width={184}
            height={245}
            priority
            sizes="(max-width: 899px) 116px, 184px"
          />
        </figure>

        <div className="hero__copy">
          <p className="kicker">Официальный сайт · Paperclip Gaming</p>
          <h1 className="hero__h1">Mine Drop 2</h1>
          <p className="hero__text">
            Сиквел шахтёрского dig-burst слота на Stake Engine. Запуск онлайн
            или демо — RTP 96.70%, потолок ×50000.
          </p>
          <div className="row-btns">
            <a href="#play" className="btn btn-gold">
              Играть
            </a>
            <a href="#demo" className="btn btn-line">
              Демо
            </a>
          </div>
          <ul className="hero__stats" aria-label="Ключевые параметры">
            <li className="pill">
              RTP <b>96.70%</b>
            </li>
            <li className="pill">
              Max <b>×50000</b>
            </li>
            <li className="pill">
              Вола <b>High</b>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
