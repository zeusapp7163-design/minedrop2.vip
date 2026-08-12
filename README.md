# minedrop2.vip

Одностраничный SEO-лендинг под домен **minedrop2.vip**: обзор слота **Mine Drop 2** (Paperclip Gaming / Stake Engine) на русском. Money-intent: где играть на деньги, RTP, механика, FAQ. Демо — вторичный CTA.

## Стек

- Next.js (App Router) + TypeScript + Tailwind CSS v4
- Один route: `/` (ru)
- Metadata + Open Graph (`opengraph-image.tsx`)
- JSON-LD: WebPage + FAQPage + SoftwareApplication
- `sitemap.xml`, `robots.txt`
- Партнёрские редиректы: `/go/1win`, `/go/jetton`, `/go/stake`

## Локальный запуск

```bash
npm install
npm run dev
```

Открой [http://localhost:3000](http://localhost:3000).

Прод-сборка:

```bash
npm run build
npm start
```

## Деплой на Vercel → minedrop2.vip

1. Запушь репозиторий в GitHub/GitLab.
2. В [Vercel](https://vercel.com) → **Add New Project** → импортируй репо.
3. Framework Preset: **Next.js** (определится сам). Build: `next build`, Output: по умолчанию.
4. Domains → добавь `minedrop2.vip` и `www.minedrop2.vip` (редирект www→apex по желанию).
5. В DNS домена укажи записи, которые покажет Vercel (обычно A/CNAME).
6. Перед продом замени URL в `src/app/go/[partner]/route.ts` на свои партнёрские ссылки.
7. При необходимости поправь `SITE.url` в `src/lib/site.ts` (сейчас `https://minedrop2.vip`).

## Партнёрки

Файлы:

- `src/lib/site.ts` — тексты карточек
- `src/app/go/[partner]/route.ts` — 302 на внешние URL

Сейчас стоят моки. Подставь боевые affiliate URL и не индексируй `/go/` (уже в `robots.ts`).

## Ассеты

В hero и блоке демо — CSS/SVG-плейсхолдеры шахты (без внешних картинок). Когда будет портрет/обложка — можно положить в `public/` и заменить плейсхолдер в `Demo.tsx` / фон в `Hero.tsx`.

## SEO-чеклист

| Элемент | Статус | Где |
|---|---|---|
| Title | ✅ | `Mine Drop 2 — играть онлайн \| Официальный сайт слота` |
| Description | ✅ | играть онлайн / официальный сайт / демо / RTP |
| H1 = Mine Drop 2 | ✅ | `Hero.tsx` |
| Подзаголовок | ✅ | «Играйте онлайн на деньги…» (не дубль title) |
| Блок «Играть» сразу после спеков | ✅ | money-intent выше обзора |
| H2/H3 структура | ✅ | секции обзора, раунда, RTP, сравнений, FAQ |
| Таблица характеристик | ✅ | `About.tsx` + риск-таблица |
| FAQ 8 вопросов | ✅ | `Faq.tsx` + `FAQ` в `site.ts` |
| FAQPage JSON-LD | ✅ | `JsonLd.tsx` |
| WebPage + SoftwareApplication | ✅ | `JsonLd.tsx` |
| Open Graph / Twitter | ✅ | `layout.tsx` + `opengraph-image.tsx` |
| sitemap.xml | ✅ | `src/app/sitemap.ts` → `/sitemap.xml` |
| robots.txt | ✅ | `src/app/robots.ts` → `/robots.txt` |
| 18+ / ответственная игра | ✅ | footer + блок «где играть» |
| Mobile-first / без мусора в hero | ✅ | full-bleed композиция, карточки только у казино |
| Без EN-локали | ✅ | `lang="ru"` only |

Целевые ключи (естественные вхождения): mine drop 2, minedrop 2, mine drop 2 демо, mine drop 2 играть, mine drop 2 слот, майне дроп 2.

## Структура страницы

1. Hero (InOut-style): H1, жёлтый CTA «Играть онлайн», Demo Play, обложка
2. Спеки-карточки
3. Топ казино — карточки как demo.black (бонус / промокод / CTA)
4. Об игре + таблица характеристик
5. Demo — скрины интерфейса
6. Повтор партнёров
7. FAQ + JSON-LD
8. Footer 18+

Партнёрские hops: `/go/1win`, `/go/jetton`, `/go/stake` (URL как на demo.black).

## Важно

- Не обещаем «гарантированный топ-1» в UI.
- Mine Drop 2 ≠ Mine Slot 2 (InOut) — явно разведено в контенте и FAQ.
- Не коммитим секреты партнёрок в публичные чаты; URL правятся в `route.ts`.
