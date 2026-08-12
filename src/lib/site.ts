export const SITE = {
  name: "Mine Drop 2",
  domain: "minedrop2.vip",
  url: "https://minedrop2.vip",
  locale: "ru_RU",
  title: "Mine Drop 2 — играть онлайн | Официальный сайт слота",
  description:
    "Mine Drop 2 (Minedrop 2) — официальный сайт: играть онлайн на деньги и в демо. Paperclip Gaming, RTP 96.70%, max ×50000. Быстрый старт без лишних каталогов.",
} as const;

export const GAME = {
  name: "Mine Drop 2",
  altName: "Minedrop 2",
  provider: "Paperclip Gaming",
  engine: "Stake Engine",
  release: "27.07.2026",
  rtp: "96.70%",
  volatility: "Высокая",
  maxWin: "×50000",
  grid: "Дроп 5×3",
  mechanics: "dig-burst / mining",
  features: ["Blast Ore", "Ender Eye", "Bonus Buy"],
} as const;

export const PROMO_CODE = "ADBLOCK";

export const PARTNERS = [
  {
    id: "1win",
    name: "1win",
    logo: "/images/affiliates/1win.png",
    href: "/go/1win",
    rating: "4.9",
    badge: "Топ",
    promoCode: PROMO_CODE,
    bonusValue: "500%",
    bonusExtra: "+70 FS",
    cta: "Играть в 1win",
  },
  {
    id: "jetton",
    name: "JetTon",
    logo: "/images/affiliates/jetton.png",
    href: "/go/jetton",
    rating: "4.88",
    badge: "Новинка",
    promoCode: PROMO_CODE,
    bonusValue: "425%",
    bonusExtra: "+250 FS",
    cta: "Играть в JetTon",
  },
  {
    id: "stake",
    name: "Stake",
    logo: "/images/affiliates/stake.png",
    href: "/go/stake",
    rating: "4.85",
    badge: "Классика",
    promoCode: null as string | null,
    bonusValue: "VIP",
    bonusExtra: "рейкбек",
    cta: "Играть в Stake",
  },
] as const;

export const SPECS = [
  { label: "Провайдер", value: GAME.provider },
  { label: "Релиз", value: GAME.release },
  { label: "RTP", value: GAME.rtp },
  { label: "Max win", value: GAME.maxWin },
] as const;

export const FAQ = [
  {
    question: "Где играть в Mine Drop 2 онлайн?",
    answer:
      "На официальном сайте minedrop2.vip — прямые запуски на 1win, JetTon и Stake. Выберите казино, зарегистрируйтесь и откройте Mine Drop 2 / Minedrop 2 от Paperclip Gaming.",
  },
  {
    question: "Это официальный сайт Mine Drop 2?",
    answer:
      "minedrop2.vip — официальная витрина слота для игроков: запуск онлайн, демо, характеристики и FAQ. Игра разработана Paperclip Gaming на Stake Engine.",
  },
  {
    question: "Есть ли демо Mine Drop 2 без регистрации?",
    answer:
      "Да. Демо доступно бесплатно без депозита. Для игры на деньги используйте кнопки казино на странице.",
  },
  {
    question: "Какой RTP и max win у Mine Drop 2?",
    answer:
      "RTP 96.70%, волатильность высокая, максимальный выигрыш ×50000 от ставки.",
  },
  {
    question: "Mine Drop 2 и Mine Slot 2 — одна игра?",
    answer:
      "Нет. Mine Drop 2 — Paperclip Gaming (Stake Engine). Mine Slot 2 — InOut. Названия похожи, провайдеры и механика разные.",
  },
  {
    question: "Чем Mine Drop 2 отличается от Mine Drop?",
    answer:
      "Это сиквел: dig-burst, Blast Ore, Ender Eye bonuses и Bonus Buy, RTP 96.70%, max ×50000. Релиз ~27 июля 2026.",
  },
  {
    question: "Как начать играть на деньги?",
    answer:
      "Нажмите «Играть онлайн», выберите казино (1win / JetTon / Stake), создайте аккаунт, внесите депозит и найдите Mine Drop 2 в каталоге.",
  },
  {
    question: "Есть ли Bonus Buy?",
    answer:
      "Да. Bonus Buy ускоряет вход в бонусный режим. Учитывайте высокую волатильность и цену покупки относительно банкролла.",
  },
] as const;
