import type { LandingConfig } from "./types";
import { PARTNER_BASE, SHARED_GAME, SHARED_SITE, SHARED_THEME } from "./shared";

export const ruConfig = {
  locale: "ru",
  path: "/",
  language: "ru-RU",
  site: {
    ...SHARED_SITE,
    ogLocale: "ru_RU",
    title: "Mine Drop 2 — Играть онлайн | Официальный сайт слота",
    description:
      "Mine Drop 2 от Paperclip Gaming: обзор, демо и запуск онлайн. RTP 96.70%, max ×50000, dig-burst, Blast Ore, Ender Eye и Bonus Buy.",
    keywords: [
      "mine drop 2",
      "minedrop 2",
      "mine drop 2 играть",
      "mine drop 2 играть онлайн",
      "mine drop 2 официальный сайт",
      "mine drop 2 демо",
      "mine drop 2 слот",
      "майне дроп 2",
    ],
  },
  theme: SHARED_THEME,
  game: {
    ...SHARED_GAME,
    alternateNames: ["Minedrop 2", "Майне Дроп 2"],
    volatility: "Высокая",
    grid: "Дроп 5×3",
    mechanics: "Dig-burst / mining",
    heroLead:
      "Шахтёрский dig-burst слот на Stake Engine: блоки, взрывы руды и бонусные события с потенциалом до ×50000.",
  },
  nav: [
    { href: "#about", label: "Об игре" },
    { href: "#mechanics", label: "Механика" },
    { href: "#screens", label: "Скриншоты" },
    { href: "#play", label: "Играть" },
    { href: "#faq", label: "FAQ" },
  ],
  stats: [
    { label: "Провайдер", value: SHARED_GAME.provider },
    { label: "Движок", value: SHARED_GAME.engine },
    { label: "RTP", value: SHARED_GAME.rtp },
    { label: "Волатильность", value: "Высокая" },
    { label: "Max win", value: SHARED_GAME.maxWin },
    { label: "Формат", value: "Дроп 5×3" },
  ],
  steps: [
    {
      title: "Сформируйте дроп",
      text: "Над шахтой появляется поле 5×3. Комбинации запускают дальнейший прокоп блоков.",
    },
    {
      title: "Углубляйте шахту",
      text: "Каждое результативное событие двигает раунд ниже и открывает новые слои.",
    },
    {
      title: "Ловите усилители",
      text: "Blast Ore взрывает область, а Ender Eye меняет темп и потенциал текущего раунда.",
    },
    {
      title: "Контролируйте риск",
      text: "Высокая волатильность требует лимита ставки. Bonus Buy — ускорение, а не гарантия выигрыша.",
    },
  ],
  features: [
    {
      title: "Blast Ore",
      text: "Взрывная руда расчищает блоки и переводит спокойный прокоп в активную фазу.",
      image: "/media/ui-2.jpg",
      alt: "Blast Ore во время раунда Mine Drop 2",
    },
    {
      title: "Ender Eye",
      text: "Редкое бонусное событие усиливает развитие шахты и открывает путь к крупным множителям.",
      image: "/media/ui-4.webp",
      alt: "Ender Eye на игровом поле Mine Drop 2",
    },
    {
      title: "Bonus Buy",
      text: "Покупка бонуса ускоряет вход в особый режим, но заметно повышает стоимость и дисперсию.",
      image: "/media/ui-5.webp",
      alt: "Меню Bonus Buy в Mine Drop 2",
    },
  ],
  gallery: [
    {
      src: "/media/ui-1.jpg",
      alt: "Базовый раунд Mine Drop 2 с полем 5 на 3",
      caption: "Базовый раунд",
    },
    {
      src: "/media/ui-2.jpg",
      alt: "Прокоп шахты и множители в Mine Drop 2",
      caption: "Dig-burst в действии",
    },
    {
      src: "/media/ui-5.webp",
      alt: "Экран покупки бонуса Mine Drop 2",
      caption: "Режим Bonus Buy",
    },
  ],
  partners: PARTNER_BASE.map((partner, index) => ({
    ...partner,
    badge: ["Выбор", "Бонус", "Original"][index],
    bonusExtra: index === 2 ? "рейкбек" : partner.bonusExtra,
  })),
  faq: [
    {
      question: "Где играть в Mine Drop 2 онлайн?",
      answer:
        "Ниже на странице собраны площадки, где можно найти Mine Drop 2 от Paperclip Gaming. Перед регистрацией проверьте доступность игры и условия бонуса в вашем регионе.",
    },
    {
      question: "Есть ли демо без регистрации?",
      answer:
        "Демо позволяет изучить интерфейс и механику без депозита. Доступность демо зависит от площадки и региона.",
    },
    {
      question: "Какой RTP у Mine Drop 2?",
      answer:
        "Заявленный RTP — 96.70%. Это теоретический показатель на длинной дистанции, а не прогноз результата отдельной сессии.",
    },
    {
      question: "Какой максимальный выигрыш?",
      answer:
        "Максимальный потенциал заявлен на уровне ×50000 от ставки. Такой результат относится к редкой части распределения.",
    },
    {
      question: "Mine Drop 2 и Mine Slot 2 — одна игра?",
      answer:
        "Нет. Mine Drop 2 разработана Paperclip Gaming на Stake Engine. Mine Slot 2 относится к линейке InOut.",
    },
    {
      question: "Что делают Blast Ore и Ender Eye?",
      answer:
        "Blast Ore расчищает область шахты, а Ender Eye запускает отдельные бонусные события и может усилить развитие раунда.",
    },
    {
      question: "Обязательно ли использовать Bonus Buy?",
      answer:
        "Нет. Это дополнительная функция с повышенной стоимостью и дисперсией. Играть можно обычными раундами.",
    },
  ],
  riskCards: [
    {
      value: SHARED_GAME.rtp,
      title: "Теоретический возврат",
      text: "RTP работает на длинной дистанции. Результат одной короткой сессии может сильно отличаться.",
    },
    {
      value: "Высокая",
      title: "Профиль риска",
      text: "Между яркими событиями возможны спокойные отрезки. Размер ставки должен учитывать эту дистанцию.",
    },
    {
      value: SHARED_GAME.maxWin,
      title: "Максимальный потенциал",
      text: "Высокий потолок относится к редким исходам. Bonus Buy дополнительно повышает дисперсию.",
    },
  ],
  compareRows: [
    { label: "Провайдер", mineDrop: "Paperclip Gaming", mineSlot: "InOut" },
    { label: "Движок", mineDrop: "Stake Engine", mineSlot: "Экосистема InOut" },
    {
      label: "Серия",
      mineDrop: "Продолжение Mine Drop",
      mineSlot: "Продолжение Mine Slot",
    },
    {
      label: "Правильный запрос",
      mineDrop: "Mine Drop 2 / Minedrop 2",
      mineSlot: "Mine Slot 2",
    },
  ],
  ui: {
    header: {
      skip: "К содержанию",
      navLabel: "Основная навигация",
      mobileNavLabel: "Мобильная навигация",
      languageLabel: "Язык сайта",
      openMenu: "Открыть меню",
      closeMenu: "Закрыть меню",
      play: "Играть",
    },
    hero: {
      primaryCta: "Играть",
      secondaryCta: "Смотреть игру",
      factsLabel: "Ключевые параметры игры",
      rtpLabel: "RTP",
      maxLabel: "Max",
      riskLabel: "Риск",
      visualLabel: "Визуал Mine Drop 2",
      screenAlt: "Активный dig-burst раунд Mine Drop 2",
      coverAlt: "Обложка Mine Drop 2",
    },
    specsTitle: "Характеристики Mine Drop 2",
    about: {
      eyebrow: "Об игре",
      title: "Шахта, которая живёт после каждого дропа",
      lead: "Mine Drop 2 развивает идею оригинала: комбинация — это не финал спина, а начало движения вглубь шахты.",
      figureAlt: "Базовый интерфейс Mine Drop 2 с шахтой и сундуками",
      caption:
        "Базовый раунд: поле 5×3, шахта блоков и пять сундуков прогресса.",
      label: "Суть игры",
      summaryTitle: "Один дроп запускает цепочку событий",
      paragraphs: [
        "Mine Drop 2 — продолжение шахтёрского слота Paperclip Gaming на движке Stake Engine.",
        "Выигрышная комбинация не завершает спин: она двигает шахту глубже, открывает новые блоки и даёт пространство для Blast Ore и Ender Eye.",
      ],
      link: "Как устроен раунд →",
      highlights: [
        {
          label: "01",
          title: "Дроп 5×3",
          text: "Комбинации формируются над шахтой и определяют, продолжится ли прокоп.",
        },
        {
          label: "02",
          title: "Живой раунд",
          text: "Blast Ore и Ender Eye меняют поле уже после первого результата.",
        },
        {
          label: "03",
          title: "Высокий риск",
          text: "Волатильность высокая, RTP 96.70%, максимальный потенциал ×50000.",
        },
      ],
    },
    mechanics: {
      eyebrow: "Логика раунда",
      title: "Как работает dig-burst",
      lead: "Четыре шага объясняют механику без рекламных обещаний и лишнего жаргона.",
    },
    features: {
      eyebrow: "Ключевые события",
      title: "Три механики, которые меняют темп",
      lead: "Каждый блок показывает, как выглядит событие и зачем оно нужно в раунде.",
    },
    math: {
      eyebrow: "Математика",
      title: "Цифры без обещаний",
      lead: "RTP, волатильность и max win описывают модель игры, но не гарантируют результат конкретного запуска.",
    },
    compare: {
      eyebrow: "Не перепутайте",
      title: "Mine Drop 2 — не Mine Slot 2",
      lead: "Названия похожи, но это разные игры, провайдеры и продуктовые линейки.",
      caption: "Сравнение Mine Drop 2 и Mine Slot 2",
      columns: ["Критерий", "Mine Drop 2", "Mine Slot 2"],
      link: "Посмотреть интерфейс Mine Drop 2 →",
    },
    gallery: {
      eyebrow: "Интерфейс",
      title: "Игра крупным планом",
      lead: "Реальные кадры показывают структуру поля, прокоп и экран Bonus Buy без декоративных мокапов.",
      cta: "Выбрать площадку",
    },
    partners: {
      eyebrow: "Площадки",
      title: "Выберите, где запустить Mine Drop 2",
      lead: "Сравните бонус, промокод и рейтинг. Условия могут меняться — проверяйте их на стороне площадки перед регистрацией.",
      ratingLabel: "Рейтинг",
      welcomeBonus: "Бонус новичкам",
      promoLabel: "Код",
      copy: "Копировать",
      copied: "Готово",
      copyAria: "Скопировать промокод",
      noPromo: "Бонусы без промокода",
      play: "Играть в",
      legal: "18+ · Играйте ответственно",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Коротко о главном",
      lead: "Ответы про демо, RTP, механику и отличие от Mine Slot 2.",
    },
    footer: {
      text: "Обзор Mine Drop 2: параметры, механика, интерфейс и площадки для запуска.",
      cta: "Выбрать площадку",
      legal:
        "18+. Играйте ответственно. Азартные игры могут вызывать зависимость. На сайте используются партнёрские ссылки.",
    },
    schemaOffer: "Демо-режим может быть доступен бесплатно",
    ogTagline: "Играть онлайн",
  },
} satisfies LandingConfig;
