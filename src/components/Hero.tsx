import Image from "next/image";

export function Hero() {
  return (
    <section className="hero">
      <div className="shell hero__stage">
        <div className="hero__art">
          <Image
            src="/media/cover.webp"
            alt="Mine Drop 2"
            width={180}
            height={240}
            priority
            sizes="(max-width: 899px) 112px, 180px"
          />
        </div>

        <div className="hero__copy">
          <p className="eyebrow">Официальный сайт · Paperclip Gaming</p>
          <h1 className="hero__h1">Mine Drop 2</h1>
          <p className="hero__lead">
            Играть онлайн и в демо. Dig-burst слот на Stake Engine — RTP 96.70%,
            max ×50000.
          </p>
          <div className="actions">
            <a href="#play" className="btn btn--primary">
              Играть
            </a>
            <a href="#demo" className="btn btn--ghost">
              Демо
            </a>
          </div>
          <div className="hero__meta">
            <span className="chip">
              RTP <strong>96.70%</strong>
            </span>
            <span className="chip">
              Max <strong>×50000</strong>
            </span>
            <span className="chip">
              Вола <strong>High</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
