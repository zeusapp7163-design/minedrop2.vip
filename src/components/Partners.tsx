"use client";

import Image from "next/image";
import { useState } from "react";
import { PARTNERS } from "@/lib/site";

function PromoCopy({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="card__promo">
      <div>
        <span style={{ color: "var(--muted)", fontSize: 10 }}>Код </span>
        <code>{code}</code>
      </div>
      <button
        type="button"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1400);
          } catch {
            /* ignore */
          }
        }}
      >
        {copied ? "OK" : "Копировать"}
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
    <section id={id} className="band band--soft anchor">
      <div className={`shell sec ${compact ? "" : ""}`} style={compact ? { paddingBlock: "2.25rem" } : undefined}>
        <p className="eyebrow">Топ казино</p>
        <h2 className="title">
          {compact ? "Готовы играть в Mine Drop 2?" : "Где играть в Mine Drop 2"}
        </h2>
        <p className="lead">
          Три площадки с бонусами — сравни и запускай слот.
        </p>

        <div className="cash">
          {PARTNERS.map((p, i) => (
            <article key={`${id}-${p.id}`} className="card">
              <div className="card__top">
                <span className="card__rank">{String(i + 1).padStart(2, "0")}</span>
                <span
                  className={`card__badge ${p.badge === "Топ" ? "card__badge--top" : ""}`}
                >
                  {p.badge}
                </span>
                <span className="card__rating">
                  <strong>{p.rating}</strong> ★
                </span>
              </div>

              <div className="card__mid">
                <div className="card__logo">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    fill
                    sizes="140px"
                    className="object-contain"
                    priority={p.id === "1win" && id === "play"}
                  />
                </div>
                <p className="card__label">Бонус новичкам</p>
                <div className="card__bonus">
                  <span className="card__bonus-v">{p.bonusValue}</span>
                  <span className="card__bonus-x">{p.bonusExtra}</span>
                </div>
              </div>

              <div className="card__foot">
                {p.promoCode ? (
                  <PromoCopy code={p.promoCode} />
                ) : (
                  <p className="card__nopromo">Бонусы без промокода</p>
                )}
                <a
                  href={p.href}
                  className="card__cta"
                  rel="nofollow sponsored noopener"
                >
                  Играть
                </a>
                <p className="card__legal">18+ · Играйте ответственно</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
