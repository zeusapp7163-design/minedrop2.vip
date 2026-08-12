import Image from "next/image";

const SHOTS = [
  { src: "/media/ui-1.jpg", alt: "Шахта и сундуки" },
  { src: "/media/ui-2.jpg", alt: "Dig-burst раунд" },
  { src: "/media/ui-5.webp", alt: "Bonus Buy" },
] as const;

export function Demo() {
  return (
    <section id="demo" className="band band--tint anchor">
      <div className="shell sec">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            alignItems: "end",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p className="eyebrow">Интерфейс</p>
            <h2 className="title">Demo Play</h2>
            <p className="lead">Кадры слота. Демо — без регистрации.</p>
          </div>
          <a href="#play" className="btn btn--primary">
            Играть
          </a>
        </div>
        <div className="shots">
          {SHOTS.map((s) => (
            <div key={s.src} className="shot">
              <Image
                src={s.src}
                alt={s.alt}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover object-top"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
