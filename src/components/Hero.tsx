import Image from "next/image";

export function Hero() {
  return (
    <section className="page-shell pb-8 pt-[calc(var(--header-h)+1.5rem)] sm:pb-10 sm:pt-[calc(var(--header-h)+2rem)]">
      <div className="hero-grid">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Официальный сайт · Paperclip Gaming
          </p>
          <h1 className="mt-3 font-display text-[clamp(2.35rem,8vw,4rem)] font-semibold leading-[0.95] tracking-tight">
            Mine Drop 2
          </h1>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-fg-muted sm:text-base">
            Играть онлайн на деньги и в демо. Dig-burst слот на Stake Engine —
            RTP 96.70%, max ×50000.
          </p>
          <div className="btn-row mt-7">
            <a href="#play" className="btn-yellow">
              Играть онлайн
            </a>
            <a href="#demo" className="btn-ghost">
              Demo Play
            </a>
          </div>
          <p className="mt-4 text-xs text-fg-muted">18+ · Stake Engine</p>
        </div>

        <div className="hero-cover">
          <Image
            src="/media/cover.webp"
            alt="Mine Drop 2 — официальная обложка Paperclip Gaming"
            fill
            priority
            sizes="(max-width: 900px) 320px, 360px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
