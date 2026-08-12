"use client";

import Image from "next/image";
import { useState } from "react";
import { PARTNERS } from "@/lib/site";

function PromoCopy({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="cash-card__promo">
      <div className="min-w-0">
        <span className="text-[10px] uppercase tracking-wider text-fg-muted">
          Код{" "}
        </span>
        <code>{code}</code>
      </div>
      <button
        type="button"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1500);
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
    <section
      id={id}
      className="section-rule scroll-target bg-bg-elevated"
    >
      <div className={`page-shell ${compact ? "py-12" : "section-pad"}`}>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          Топ казино
        </p>
        <h2 className="mt-2 font-display text-[1.65rem] font-semibold tracking-tight sm:text-3xl">
          {compact
            ? "Готовы играть в Mine Drop 2?"
            : "Где сыграть в Mine Drop 2 на деньги"}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-fg-muted sm:text-base">
          Отобрали 3 лицензированных казино с бонусами — сравни и запускай слот
          онлайн.
        </p>

        <div className="cash-grid mt-8">
          {PARTNERS.map((partner, index) => (
            <article key={`${id}-${partner.id}`} className="cash-card">
              <div className="cash-card__meta">
                <span className="cash-card__rank">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={`cash-card__badge ${partner.badge === "Топ" ? "cash-card__badge--top" : ""}`}
                >
                  {partner.badge}
                </span>
                <span className="cash-card__rating">
                  <strong>{partner.rating}</strong>
                  <span aria-hidden>★</span>
                </span>
              </div>

              <div className="cash-card__brand">
                <div className="cash-card__logo">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    sizes="150px"
                    className="object-contain"
                    priority={partner.id === "1win" && id === "play"}
                  />
                </div>
                <p className="cash-card__label">Бонус новичкам</p>
                <div className="cash-card__bonus">
                  <span className="cash-card__bonus-value">
                    {partner.bonusValue}
                  </span>
                  <span className="cash-card__bonus-extra">
                    {partner.bonusExtra}
                  </span>
                </div>
              </div>

              <div className="cash-card__foot">
                {partner.promoCode ? (
                  <PromoCopy code={partner.promoCode} />
                ) : (
                  <p className="cash-card__no-promo">Бонусы без промокода</p>
                )}

                <a
                  href={partner.href}
                  className="cash-card__cta"
                  rel="nofollow sponsored noopener"
                >
                  {partner.cta}
                </a>
                <p className="cash-card__legal">18+ · Играйте ответственно</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
