import Image from "next/image";

const SHOTS = [
  { src: "/media/ui-1.jpg", alt: "Mine Drop 2 — шахта блоков и сундуки" },
  { src: "/media/ui-2.jpg", alt: "Mine Drop 2 — dig-burst раунд с множителями" },
  { src: "/media/ui-3.webp", alt: "Mine Drop 2 — выигрышный момент" },
  { src: "/media/ui-4.webp", alt: "Mine Drop 2 — дроп и баланс" },
  { src: "/media/ui-5.webp", alt: "Mine Drop 2 — Extra Chance и Block Bonus" },
] as const;

export function Demo() {
  return (
    <section id="demo" className="section-rule scroll-target bg-bg-elevated">
      <div className="page-shell section-pad">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="section-eyebrow">Интерфейс</p>
            <h2 className="section-title">Demo Play — как выглядит Mine Drop 2</h2>
            <p className="section-lead">
              Реальные кадры: дроп, сундуки, Bonus Buy. Демо — без регистрации;
              играть — через казино на странице.
            </p>
          </div>
          <a
            href="#play"
            className="btn-yellow shrink-0 self-stretch sm:self-auto"
          >
            Играть
          </a>
        </div>

        <div className="shot-grid mt-8">
          {SHOTS.slice(0, 3).map((shot) => (
            <div key={shot.src} className="shot-card">
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover object-top"
              />
            </div>
          ))}
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-2">
          {SHOTS.slice(3).map((shot) => (
            <div key={shot.src} className="shot-card">
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 640px) 50vw, 50vw"
                className="object-cover object-top"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
