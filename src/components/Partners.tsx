"use client";

import Image from "next/image";
import { useState } from "react";
import { PARTNERS } from "@/lib/site";

function Promo({ code }: { code: string }) {
  const [on, setOn] = useState(false);

  return (
    <div className="promo">
      <span className="promo__lbl">Код</span>
      <span className="promo__val" aria-label={`Промокод ${code}`}>
        {code}
      </span>
      <button
        type="button"
        className={`promo__go ${on ? "is-on" : ""}`}
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(code);
          } catch {
            /* ignore */
          }
          setOn(true);
          window.setTimeout(() => setOn(false), 1600);
        }}
      >
        {on ? "Готово" : "Копировать"}
      </button>
    </div>
  );
}

export function Partners({
  id = "play",
  compact = false,
}: {
  id?: string;
  compact?: boolean;
}) {
  return (
    <section id={id} className="band anchor" aria-labelledby={`${id}-title`}>
      <div className="shell sec" style={compact ? { paddingBlock: "32px" } : undefined}>
        <p className="kicker">Где запустить</p>
        <h2 id={`${id}-title`} className="h2">
          {compact ? "Выберите площадку и играйте" : "Где играть в Mine Drop 2"}
        </h2>
        <p className="lede">
          Три казино с бонусом новичка. Одинаковые карточки — сравните и
          запускайте.
        </p>

        <div className="cash">
          {PARTNERS.map((p, i) => (
            <article key={`${id}-${p.id}`} className="offer">
              <header className="offer__head">
                <span className="offer__rank">{String(i + 1).padStart(2, "0")}</span>
                <span
                  className={`offer__badge ${p.badge === "Топ" ? "offer__badge--hot" : ""}`}
                >
                  {p.badge}
                </span>
                <span className="offer__rate">
                  <strong>{p.rating}</strong> ★
                </span>
              </header>

              <div className="offer__body">
                <div className="offer__logo">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    fill
                    sizes="140px"
                    className="object-contain"
                    priority={p.id === "1win" && id === "play"}
                  />
                </div>
                <p className="offer__cap">Бонус новичкам</p>
                <p className="offer__deal">
                  <span className="offer__deal-main">{p.bonusValue}</span>
                  <span className="offer__deal-extra">{p.bonusExtra}</span>
                </p>
              </div>

              <footer className="offer__foot">
                {p.promoCode ? (
                  <Promo code={p.promoCode} />
                ) : (
                  <p className="promo__none">Бонусы без промокода</p>
                )}
                <a
                  href={p.href}
                  className="offer__cta"
                  rel="nofollow sponsored noopener"
                >
                  Играть
                </a>
                <p className="offer__note">18+ · Играйте ответственно</p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
