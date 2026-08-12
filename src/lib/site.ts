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
      "На официальном сайте minedrop2.vip собраны прямые запуски Mine Drop 2 (Minedrop 2): 1win, JetTon и Stake. Выберите казино, зарегистрируйтесь и откройте слот Paperclip Gaming в каталоге.",
  },
  {
    question: "Это официальный сайт Mine Drop 2?",
    answer:
      "minedrop2.vip — официальная витрина слота для игроков: играть онлайн на деньги, демо, характеристики, сравнения и FAQ. Сама игра — Paperclip Gaming на Stake Engine.",
  },
  {
    question: "Есть ли демо Mine Drop 2 без регистрации?",
    answer:
      "Да. Демо Mine Drop 2 можно смотреть без депозита и регистрации — чтобы понять dig-burst, Blast Ore и Bonus Buy. Для денег используйте кнопки «Играть онлайн».",
  },
  {
    question: "Какой RTP и max win у Mine Drop 2?",
    answer:
      "Заявленный RTP — 96.70%, волатильность высокая, максимальный выигрыш — ×50000 от ставки. На короткой сессии результат может сильно отличаться от теории.",
  },
  {
    question: "Mine Drop 2 и Mine Slot 2 — одна игра?",
    answer:
      "Нет. Mine Drop 2 / Minedrop 2 — Paperclip Gaming (Stake Engine). Mine Slot 2 — продукт InOut. Если ищете «майне дроп 2» или «mine drop 2 слот», нужен именно Mine Drop 2.",
  },
  {
    question: "Чем Mine Drop 2 отличается от первой части Mine Drop?",
    answer:
      "Это сиквел: обновлённый dig-burst цикл, Blast Ore, Ender Eye bonuses, Bonus Buy, RTP 96.70% и потолок ×50000. Релиз в Stake listing — около 27 июля 2026.",
  },
  {
    question: "Как начать играть в Mine Drop 2 на деньги?",
    answer:
      "Нажмите «Играть онлайн», выберите 1win, JetTon или Stake, создайте аккаунт, внесите депозит и найдите Mine Drop 2 / Minedrop 2 от Paperclip — не перепутайте с Mine Slot 2.",
  },
  {
    question: "Стоит ли покупать Bonus Buy?",
    answer:
      "Bonus Buy ускоряет вход в бонус, но повышает стоимость спина и дисперсию. Имеет смысл при заранее заданном лимите покупок. Для знакомства сначала обычные спины или демо.",
  },
] as const;
