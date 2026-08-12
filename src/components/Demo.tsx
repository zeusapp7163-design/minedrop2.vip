import Image from "next/image";

const SHOTS = [
  {
    src: "/media/ui-1.jpg",
    alt: "Интерфейс Mine Drop 2: шахта блоков и сундуки",
  },
  {
    src: "/media/ui-2.jpg",
    alt: "Dig-burst раунд Mine Drop 2 с множителями",
  },
  {
    src: "/media/ui-5.webp",
    alt: "Экран Bonus Buy в Mine Drop 2",
  },
] as const;

export function Demo() {
  return (
    <section id="demo" className="band anchor" aria-labelledby="demo-title">
      <div className="shell sec">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p className="kicker">Интерфейс</p>
            <h2 id="demo-title" className="h2">
              Как выглядит слот
            </h2>
            <p className="lede">
              Кадры dig-burst интерфейса. Демо — без регистрации; запуск —
              через площадки выше.
            </p>
          </div>
          <a href="#play" className="btn btn-gold">
            Играть
          </a>
        </div>

        <div className="shots">
          {SHOTS.map((shot) => (
            <figure key={shot.src} className="shot">
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover object-top"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
