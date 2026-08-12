export const SITE = {
  name: "Mine Drop 2",
  domain: "minedrop2.vip",
  url: "https://minedrop2.vip",
  locale: "ru_RU",
  title: "Mine Drop 2 — играть онлайн | Официальный сайт слота",
  description:
    "Mine Drop 2 от Paperclip Gaming: играть онлайн и в демо. RTP 96.70%, max ×50000, dig-burst, Blast Ore, Ender Eye. Официальный сайт слота.",
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
  grid: "Дроп 5×3 над шахтой блоков",
  mechanics: "dig-burst / mining",
  features: ["Blast Ore", "Ender Eye bonuses", "Bonus Buy"],
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
  },
] as const;

export const SPECS = [
  { label: "Провайдер", value: GAME.provider },
  { label: "Движок", value: GAME.engine },
  { label: "Релиз", value: GAME.release },
  { label: "RTP", value: GAME.rtp },
  { label: "Волатильность", value: GAME.volatility },
  { label: "Max win", value: GAME.maxWin },
] as const;

export const FAQ = [
  {
    question: "Где играть в Mine Drop 2 онлайн?",
    answer:
      "На minedrop2.vip — прямые запуски на 1win, JetTon и Stake. После регистрации найдите в каталоге Mine Drop 2 / Minedrop 2 от Paperclip Gaming.",
  },
  {
    question: "Это официальный сайт Mine Drop 2?",
    answer:
      "Да. Здесь собраны запуск, демо, характеристики и FAQ по слоту Paperclip Gaming на Stake Engine — без каталога на сотни игр.",
  },
  {
    question: "Есть ли демо без регистрации?",
    answer:
      "Да. Демо показывает dig-burst, Blast Ore и Bonus Buy без депозита. Когда готовы — жмите «Играть» у выбранного казино.",
  },
  {
    question: "Какой RTP и максимальный выигрыш?",
    answer:
      "RTP 96.70%, волатильность высокая, max win ×50000. На короткой сессии результат легко уходит от теории — это норма для high volatility.",
  },
  {
    question: "Mine Drop 2 и Mine Slot 2 — это одно и то же?",
    answer:
      "Нет. Mine Drop 2 — Paperclip Gaming (Stake Engine). Mine Slot 2 — InOut. Названия похожи, провайдеры и механика разные.",
  },
  {
    question: "Чем сиквел отличается от Mine Drop?",
    answer:
      "В Mine Drop 2 сильнее выражены Blast Ore, Ender Eye и Bonus Buy. RTP 96.70%, потолок ×50000, релиз около 27 июля 2026.",
  },
  {
    question: "Как начать играть?",
    answer:
      "Нажмите «Играть», выберите 1win, JetTon или Stake, создайте аккаунт и откройте Mine Drop 2 от Paperclip — не путайте с Mine Slot 2.",
  },
  {
    question: "Нужен ли Bonus Buy?",
    answer:
      "Bonus Buy ускоряет вход в бонус, но спин дороже и дисперсия выше. Сначала обычные раунды или демо, потом — лимит на число покупок.",
  },
] as const;
