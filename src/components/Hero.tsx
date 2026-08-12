import Image from "next/image";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow" aria-hidden />
      <div className="page-shell hero__inner">
        <div className="hero__media">
          <Image
            src="/media/cover.webp"
            alt="Mine Drop 2 — обложка Paperclip Gaming"
            width={200}
            height={267}
            priority
            sizes="(max-width: 640px) 112px, 160px"
            className="hero__cover-img"
          />
        </div>

        <div className="hero__copy">
          <p className="section-eyebrow">Официальный сайт · Paperclip Gaming</p>
          <h1 className="hero__title">Mine Drop 2</h1>
          <p className="hero__lead">
            Играть онлайн и в демо. Dig-burst слот на Stake Engine — RTP 96.70%,
            max ×50000, Blast Ore и Bonus Buy.
          </p>
          <div className="btn-row hero__actions">
            <a href="#play" className="btn-yellow">
              Играть
            </a>
            <a href="#demo" className="btn-ghost">
              Демо
            </a>
          </div>
          <p className="hero__meta">18+ · Stake Engine · Minedrop 2</p>
        </div>
      </div>
    </section>
  );
}
