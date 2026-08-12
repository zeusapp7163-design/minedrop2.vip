import type { FaqItem, Locale } from "./types";

export const SEO_PAGE_SLUGS = [
  "demo",
  "rtp",
  "bonuses",
  "how-to-play",
] as const;

export type SeoPageSlug = (typeof SEO_PAGE_SLUGS)[number];

export type SeoPageContent = {
  slug: SeoPageSlug;
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  intro: string;
  quickAnswer: string;
  updatedLabel: string;
  highlights: Array<{ label: string; value: string }>;
  sections: Array<{
    title: string;
    paragraphs: string[];
    points?: string[];
  }>;
  faq: FaqItem[];
  relatedLabel: string;
  homeLabel: string;
  playLabel: string;
};

const ruPages: Record<SeoPageSlug, SeoPageContent> = {
  demo: {
    slug: "demo",
    title: "Mine Drop 2 демо — интерфейс и игровой процесс",
    description:
      "Обзор демо Mine Drop 2: поле 5×3, dig-burst, Blast Ore, Ender Eye и Bonus Buy. Что проверить перед игрой без депозита.",
    eyebrow: "Демо и интерфейс",
    heading: "Демо Mine Drop 2: изучите раунд до ставки",
    intro:
      "Демо-режим нужен не для прогноза выигрыша, а для знакомства с темпом игры. На этой странице разобраны элементы интерфейса, последовательность dig-burst и функции, которые стоит проверить до запуска на реальные деньги.",
    quickAnswer:
      "Демо Mine Drop 2 показывает поле 5×3, dig-burst, Blast Ore, Ender Eye и Bonus Buy без депозита. Доступность зависит от площадки и региона; короткий демо-результат не доказывает RTP 96.70% и не равен игре на деньги.",
    updatedLabel: "Проверено 12 августа 2026",
    highlights: [
      { label: "Формат", value: "Поле 5×3" },
      { label: "Механика", value: "Dig-burst" },
      { label: "Доступ", value: "Зависит от региона" },
    ],
    sections: [
      {
        title: "Что показывает демо-режим",
        paragraphs: [
          "В базовом раунде символы формируются над шахтой. Результативный дроп может продолжить прокоп: поле обновляется, открываются новые блоки, а темп раунда меняют специальные события.",
          "Демо помогает увидеть этот цикл без депозита. Доступность бесплатного режима определяется площадкой и правилами региона; сам minedrop2.vip не запускает игру внутри страницы.",
        ],
        points: [
          "расположение ставки, баланса и настроек звука;",
          "поведение поля после результативного дропа;",
          "анимации Blast Ore и Ender Eye;",
          "стоимость и предупреждения в меню Bonus Buy.",
        ],
      },
      {
        title: "Чего демо не доказывает",
        paragraphs: [
          "Короткая тестовая серия не показывает фактический RTP и не позволяет оценить вероятность максимального выигрыша. RTP 96.70% относится к большой статистической дистанции, а отдельная сессия может заметно отклоняться от этого значения.",
          "Результат в демо также не является обещанием аналогичного результата в денежном режиме. Используйте бесплатный запуск только для изучения правил и выбора комфортного размера ставки.",
        ],
      },
      {
        title: "Проверка перед запуском",
        paragraphs: [
          "Убедитесь, что открыта именно Mine Drop 2 от Paperclip Gaming, а не похожая по названию Mine Slot 2. Проверьте таблицу выплат, текущую версию RTP и доступность функций непосредственно в интерфейсе площадки.",
        ],
        points: [
          "название провайдера — Paperclip Gaming;",
          "указанный RTP — 96.70%;",
          "высокая волатильность и лимиты ставки;",
          "региональные ограничения и условия площадки.",
        ],
      },
    ],
    faq: [
      {
        question: "Можно ли открыть Mine Drop 2 демо без регистрации?",
        answer:
          "Это зависит от выбранной площадки и региона. Некоторые операторы дают гостевой демо-доступ, другие требуют вход в аккаунт.",
      },
      {
        question: "Совпадает ли механика демо и игры на деньги?",
        answer:
          "Правила и интерфейс обычно совпадают, но демонстрационный баланс не имеет денежной ценности. Перед запуском проверьте таблицу выплат и версию RTP.",
      },
    ],
    relatedLabel: "Продолжить изучение",
    homeLabel: "Вернуться к обзору",
    playLabel: "Выбрать площадку",
  },
  rtp: {
    slug: "rtp",
    title: "RTP Mine Drop 2 96.70% — волатильность и max win",
    description:
      "Разбор математики Mine Drop 2: RTP 96.70%, высокая волатильность, максимальный выигрыш ×50000 и влияние Bonus Buy на риск.",
    eyebrow: "Математика игры",
    heading: "RTP Mine Drop 2: что означает показатель 96.70%",
    intro:
      "RTP описывает теоретическую долю возврата на очень длинной дистанции. Он полезен для сравнения моделей игры, но не прогнозирует итог одного спина, бонуса или короткой сессии.",
    quickAnswer:
      "Заявленный RTP Mine Drop 2 — 96.70% на длинной дистанции. Волатильность высокая, max win ×50000 относится к редким исходам. Bonus Buy повышает стоимость и дисперсию, но не гарантирует лучший результат сессии.",
    updatedLabel: "Проверено 12 августа 2026",
    highlights: [
      { label: "RTP", value: "96.70%" },
      { label: "Волатильность", value: "Высокая" },
      { label: "Max win", value: "×50000" },
    ],
    sections: [
      {
        title: "Как читать RTP 96.70%",
        paragraphs: [
          "Теоретически модель распределяет около 96.70 единицы из каждых 100 поставленных единиц на большой выборке раундов. Остальные 3.30% образуют математическое преимущество игры. Это расчёт модели, а не гарантированный возврат конкретному игроку.",
          "На короткой дистанции возможны результаты как выше, так и значительно ниже заявленного RTP. Чем меньше выборка, тем слабее фактический результат связан с теоретическим процентом.",
        ],
      },
      {
        title: "Высокая волатильность",
        paragraphs: [
          "Высокая волатильность означает не высокий шанс выиграть, а более неравномерное распределение выплат. Между редкими сильными событиями могут встречаться продолжительные спокойные отрезки.",
          "Практический вывод — заранее определить бюджет, размер ставки и точку остановки. Увеличение ставки после проигрыша не меняет математику следующего раунда.",
        ],
        points: [
          "не путайте RTP с частотой выигрышей;",
          "не оценивайте игру по нескольким спинам;",
          "используйте одинаковый небольшой размер ставки;",
          "не рассматривайте max win как ожидаемый результат.",
        ],
      },
      {
        title: "Max win и Bonus Buy",
        paragraphs: [
          "Заявленный максимальный потенциал Mine Drop 2 составляет ×50000 от ставки и относится к редкой части распределения. Высокий потолок ничего не говорит о вероятности его достижения.",
          "Bonus Buy сокращает путь к особому режиму, но требует более крупной разовой стоимости и повышает дисперсию бюджета. Перед использованием сравните цену покупки с установленным лимитом сессии.",
        ],
      },
    ],
    faq: [
      {
        question: "Гарантирует ли RTP 96.70% возврат 96.70 рублей из 100?",
        answer:
          "Нет. Показатель рассчитывается на очень большой выборке. Результат отдельной сессии может сильно отличаться.",
      },
      {
        question: "Bonus Buy повышает RTP?",
        answer:
          "Не следует считать покупку бонуса способом повысить ожидаемый результат. Проверяйте отдельные правила и RTP режима в таблице выплат конкретной версии игры.",
      },
    ],
    relatedLabel: "Связанные материалы",
    homeLabel: "Вернуться к обзору",
    playLabel: "Выбрать площадку",
  },
  bonuses: {
    slug: "bonuses",
    title: "Бонусы Mine Drop 2 — Bonus Buy и предложения площадок",
    description:
      "Как устроен Bonus Buy в Mine Drop 2 и чем игровые функции отличаются от приветственных бонусов казино. Условия, риски и проверка промокода.",
    eyebrow: "Бонусы и условия",
    heading: "Бонусы Mine Drop 2: отделяем механику от промо",
    intro:
      "В контексте Mine Drop 2 словом «бонус» называют две разные вещи: платную игровую функцию Bonus Buy и промо-предложения площадок. У них разные правила, стоимость и ограничения.",
    quickAnswer:
      "Bonus Buy — платная функция внутри Mine Drop 2. Приветственный бонус казино — отдельное промо оператора с вейджером и лимитами. Перед регистрацией сверяйте полные правила на стороне площадки; сайт не принимает ставки.",
    updatedLabel: "Обновлено 12 августа 2026",
    highlights: [
      { label: "Игровая функция", value: "Bonus Buy" },
      { label: "Промо", value: "Условия оператора" },
      { label: "Возраст", value: "Только 18+" },
    ],
    sections: [
      {
        title: "Что такое Bonus Buy",
        paragraphs: [
          "Bonus Buy позволяет оплатить прямой вход в особый режим вместо ожидания естественного события в базовой игре. Цена отображается в интерфейсе относительно текущей ставки.",
          "Покупка не гарантирует прибыль и может быстро расходовать бюджет из-за высокой разовой стоимости. Перед подтверждением проверьте цену, описание режима и доступный остаток лимита.",
        ],
      },
      {
        title: "Приветственный бонус площадки",
        paragraphs: [
          "Приветственный пакет относится не к самой игре, а к правилам оператора. Размер предложения без условий отыгрыша ничего не говорит о его реальной ценности.",
          "Проверяйте минимальный депозит, вейджер, максимальную ставку при отыгрыше, срок действия, список исключённых игр и лимит вывода. Условия на стороне площадки имеют приоритет перед кратким описанием на этой странице.",
        ],
        points: [
          "актуальность промокода и срок действия;",
          "доступность предложения в вашей стране;",
          "участие Mine Drop 2 в отыгрыше;",
          "требования к подтверждению аккаунта.",
        ],
      },
      {
        title: "Безопасный порядок проверки",
        paragraphs: [
          "Сначала выберите лицензированную в вашей юрисдикции площадку, затем откройте полные правила акции и только после этого принимайте решение о регистрации. Не вносите депозит ради бонуса, условия которого не удалось найти или понять.",
          "Партнёрские ссылки на minedrop2.vip помечены как рекламные. Их наличие не меняет математические параметры Mine Drop 2 и не означает гарантии выплаты со стороны площадки.",
        ],
      },
    ],
    faq: [
      {
        question: "Bonus Buy и бонус казино — это одно и то же?",
        answer:
          "Нет. Bonus Buy — платная функция внутри игры. Бонус казино — маркетинговое предложение оператора с отдельными условиями.",
      },
      {
        question: "Нужен ли промокод?",
        answer:
          "Зависит от предложения. Иногда бонус активируется автоматически, иногда требуется код. Проверяйте правила до регистрации.",
      },
    ],
    relatedLabel: "Перед запуском",
    homeLabel: "Вернуться к обзору",
    playLabel: "Сравнить площадки",
  },
  "how-to-play": {
    slug: "how-to-play",
    title: "Как играть в Mine Drop 2 — правила и механика",
    description:
      "Пошаговые правила Mine Drop 2: дроп 5×3, прокоп шахты, Blast Ore, Ender Eye, Bonus Buy, RTP и контроль ставки.",
    eyebrow: "Правила игры",
    heading: "Как играть в Mine Drop 2",
    intro:
      "Mine Drop 2 строит раунд вокруг дропа над шахтой. Результативные комбинации продолжают движение вглубь, а специальные элементы меняют поле и потенциальный множитель.",
    quickAnswer:
      "В Mine Drop 2 символы формируют дроп 5×3 над шахтой; успешный результат может продолжить dig-burst. Blast Ore расчищает блоки, Ender Eye запускает отдельные события. RTP 96.70% и max ×50000 описывают модель, а не исход одной сессии.",
    updatedLabel: "Проверено 12 августа 2026",
    highlights: [
      { label: "Поле", value: "5×3" },
      { label: "Цикл", value: "Drop → dig" },
      { label: "Риск", value: "Высокий" },
    ],
    sections: [
      {
        title: "Базовая последовательность раунда",
        paragraphs: [
          "Перед запуском задайте размер ставки и проверьте таблицу выплат. После старта символы формируют дроп на поле 5×3. Если результат запускает продолжение, шахта опускается ниже и открывает новый слой.",
        ],
        points: [
          "выберите ставку в рамках заранее заданного бюджета;",
          "запустите дроп и дождитесь завершения всей цепочки;",
          "следите за прогрессом шахты и специальными блоками;",
          "не меняйте ставку, пока активный раунд не завершён.",
        ],
      },
      {
        title: "Blast Ore и Ender Eye",
        paragraphs: [
          "Blast Ore расчищает область блоков и может ускорить текущую цепочку. Ender Eye связано с отдельными бонусными событиями и способно изменить развитие раунда.",
          "Эти элементы активируются по правилам игры, а не по действию игрока. Частота их появления не определяется результатами предыдущих спинов.",
        ],
      },
      {
        title: "Настройки риска",
        paragraphs: [
          "RTP 96.70%, высокая волатильность и максимальный потенциал ×50000 описывают математический профиль. Для контроля риска важнее размер обычной ставки, лимит всей сессии и отказ от попыток отыграться.",
          "Bonus Buy используйте только после знакомства с базовым режимом. Его высокая стоимость сокращает число попыток в рамках того же бюджета и не гарантирует положительный результат.",
        ],
      },
    ],
    faq: [
      {
        question: "Нужно ли собирать линии выплат?",
        answer:
          "Mine Drop 2 использует дроп-механику над шахтой. Точный порядок формирования комбинаций всегда проверяйте в таблице выплат активной версии игры.",
      },
      {
        question: "Можно ли повлиять на появление Blast Ore?",
        answer:
          "Нет. Специальные события определяются механикой игры. Предыдущие результаты не позволяют предсказать следующий раунд.",
      },
    ],
    relatedLabel: "Разобрать подробнее",
    homeLabel: "Вернуться к обзору",
    playLabel: "Выбрать площадку",
  },
};

const enPages: Record<SeoPageSlug, SeoPageContent> = {
  demo: {
    slug: "demo",
    title: "Mine Drop 2 Demo — Interface and Gameplay Guide",
    description:
      "Explore the Mine Drop 2 demo interface, 5×3 drop, dig-burst flow, Blast Ore, Ender Eye and Bonus Buy before playing.",
    eyebrow: "Demo and interface",
    heading: "Mine Drop 2 demo: learn the round before staking",
    intro:
      "Demo mode is useful for learning the pace and controls, not predicting a payout. This guide explains the interface, the dig-burst sequence and the checks to make before using real funds.",
    quickAnswer:
      "The Mine Drop 2 demo shows the 5×3 field, dig-burst flow, Blast Ore, Ender Eye and Bonus Buy without a deposit. Availability depends on the platform and region; a short demo sample does not prove the 96.70% RTP or match real-money results.",
    updatedLabel: "Reviewed August 12, 2026",
    highlights: [
      { label: "Format", value: "5×3 field" },
      { label: "Mechanic", value: "Dig-burst" },
      { label: "Access", value: "Region dependent" },
    ],
    sections: [
      {
        title: "What the demo can show",
        paragraphs: [
          "Symbols form above the mine during the base round. A successful drop may continue the dig, expose another block layer and introduce feature events that change the pace.",
          "A free version lets you inspect that loop without a deposit. Availability depends on the platform and region; minedrop2.vip does not embed or operate the game itself.",
        ],
        points: [
          "stake, balance and sound controls;",
          "field behaviour after a successful drop;",
          "Blast Ore and Ender Eye animations;",
          "the price and warnings shown by Bonus Buy.",
        ],
      },
      {
        title: "What a demo cannot prove",
        paragraphs: [
          "A short sample cannot measure RTP or estimate the likelihood of the maximum win. The stated 96.70% RTP applies across a very large statistical sample, not one session.",
          "A demo result is not a promise of the same real-money outcome. Use free play to understand the rules and select a comfortable stake only.",
        ],
      },
      {
        title: "Checks before you start",
        paragraphs: [
          "Confirm that the title is Mine Drop 2 by Paperclip Gaming rather than the similarly named Mine Slot 2. Open the paytable and verify the RTP version and available features on the platform.",
        ],
        points: [
          "Paperclip Gaming is named as the provider;",
          "the displayed RTP is 96.70%;",
          "stake limits fit a high-volatility game;",
          "the platform is available in your jurisdiction.",
        ],
      },
    ],
    faq: [
      {
        question: "Can I try the Mine Drop 2 demo without registering?",
        answer:
          "It depends on the platform and region. Some operators provide guest access, while others require an account.",
      },
      {
        question: "Does demo mode use the same mechanics?",
        answer:
          "The interface and rules usually match, but demo credits have no cash value. Verify the paytable and RTP version before playing.",
      },
    ],
    relatedLabel: "Continue exploring",
    homeLabel: "Back to the review",
    playLabel: "Choose a platform",
  },
  rtp: {
    slug: "rtp",
    title: "Mine Drop 2 RTP 96.70% — Volatility and Max Win",
    description:
      "Mine Drop 2 math explained: 96.70% RTP, high volatility, ×50000 maximum win and the risk profile of Bonus Buy.",
    eyebrow: "Game mathematics",
    heading: "Mine Drop 2 RTP: what 96.70% means",
    intro:
      "RTP describes a theoretical long-run return. It helps compare game models, but it cannot predict one spin, one feature or one short session.",
    quickAnswer:
      "Mine Drop 2 states a 96.70% RTP over a long sample. Volatility is high and the ×50000 max win sits in the rare tail. Bonus Buy raises cost and variance; it does not guarantee a better session result.",
    updatedLabel: "Reviewed August 12, 2026",
    highlights: [
      { label: "RTP", value: "96.70%" },
      { label: "Volatility", value: "High" },
      { label: "Max win", value: "×50000" },
    ],
    sections: [
      {
        title: "Reading a 96.70% RTP",
        paragraphs: [
          "In theory, the model returns about 96.70 units for every 100 units staked across a very large sample. The remaining 3.30% is the mathematical house edge. It is not a guaranteed refund to one player.",
          "A short session can finish well above or below the stated percentage. The smaller the sample, the less closely its result is expected to track theoretical RTP.",
        ],
      },
      {
        title: "High volatility",
        paragraphs: [
          "High volatility does not mean a high chance of winning. It means payouts are distributed less evenly, with potentially long quiet stretches between stronger feature events.",
          "Set a session budget, fixed stake and stopping point before starting. Raising the stake after a loss does not change the mathematics of the next round.",
        ],
        points: [
          "do not confuse RTP with hit frequency;",
          "do not judge the model from a few spins;",
          "keep a consistent, affordable stake;",
          "treat max win as a rare ceiling, not a target.",
        ],
      },
      {
        title: "Maximum win and Bonus Buy",
        paragraphs: [
          "The advertised maximum potential is ×50000 the stake and belongs to the rare tail of possible outcomes. A high ceiling does not reveal its probability.",
          "Bonus Buy provides faster access to a feature at a larger upfront cost, increasing budget variance. Compare its price with your full session limit before confirming.",
        ],
      },
    ],
    faq: [
      {
        question: "Does 96.70% RTP return 96.70 out of every 100?",
        answer:
          "No. RTP is calculated across a very large sample. One session can differ substantially.",
      },
      {
        question: "Does Bonus Buy increase RTP?",
        answer:
          "Do not assume it improves the expected result. Check the specific feature rules and RTP shown in the active game version.",
      },
    ],
    relatedLabel: "Related guides",
    homeLabel: "Back to the review",
    playLabel: "Choose a platform",
  },
  bonuses: {
    slug: "bonuses",
    title: "Mine Drop 2 Bonuses — Bonus Buy and Platform Offers",
    description:
      "Understand Mine Drop 2 Bonus Buy and how it differs from casino welcome offers. Check wagering terms, promo codes and risk.",
    eyebrow: "Bonuses and terms",
    heading: "Mine Drop 2 bonuses: game feature versus promotion",
    intro:
      "The word “bonus” can mean two different things here: the paid Bonus Buy feature inside Mine Drop 2 and a promotional offer from a platform. Their rules, costs and restrictions are separate.",
    quickAnswer:
      "Bonus Buy is a paid in-game feature in Mine Drop 2. A casino welcome offer is a separate operator promotion with wagering and limits. Read the full platform terms before registering; this site does not accept wagers.",
    updatedLabel: "Updated August 12, 2026",
    highlights: [
      { label: "Game feature", value: "Bonus Buy" },
      { label: "Promotion", value: "Operator terms" },
      { label: "Age", value: "18+ only" },
    ],
    sections: [
      {
        title: "How Bonus Buy works",
        paragraphs: [
          "Bonus Buy charges a displayed price for direct access to a feature instead of waiting for it during the base game. The cost is tied to the selected stake.",
          "A purchase does not guarantee a profit and can consume a budget quickly because of its larger upfront cost. Review the price and feature description before confirming.",
        ],
      },
      {
        title: "Platform welcome offers",
        paragraphs: [
          "A welcome package belongs to the operator, not the game. Its headline amount says little without the full wagering conditions.",
          "Check the minimum deposit, wagering multiplier, maximum qualifying stake, expiry date, excluded games and withdrawal cap. The operator’s current terms take priority over any short summary here.",
        ],
        points: [
          "promo-code validity and expiry;",
          "availability in your country;",
          "whether Mine Drop 2 contributes to wagering;",
          "identity-verification requirements.",
        ],
      },
      {
        title: "A safer verification order",
        paragraphs: [
          "First select a platform licensed for your jurisdiction, then read the complete promotion rules before registering. Do not deposit for an offer whose conditions are missing or unclear.",
          "Partner links on minedrop2.vip are labelled as advertising. They do not change Mine Drop 2 mathematics or guarantee payment by an operator.",
        ],
      },
    ],
    faq: [
      {
        question: "Are Bonus Buy and a casino bonus the same?",
        answer:
          "No. Bonus Buy is a paid in-game feature. A casino bonus is an operator promotion with separate terms.",
      },
      {
        question: "Do I need a promo code?",
        answer:
          "It depends on the offer. Some activate automatically and others require a code. Check the terms before registration.",
      },
    ],
    relatedLabel: "Before you play",
    homeLabel: "Back to the review",
    playLabel: "Compare platforms",
  },
  "how-to-play": {
    slug: "how-to-play",
    title: "How to Play Mine Drop 2 — Rules and Mechanics",
    description:
      "Learn Mine Drop 2 rules step by step: the 5×3 drop, mine progression, Blast Ore, Ender Eye, Bonus Buy, RTP and stake control.",
    eyebrow: "Game rules",
    heading: "How to play Mine Drop 2",
    intro:
      "Mine Drop 2 builds each round around a drop above the mine. Successful combinations can move the field deeper, while special elements reshape the board and potential multiplier.",
    quickAnswer:
      "In Mine Drop 2, symbols form a 5×3 drop above the mine and a successful result can continue the dig-burst. Blast Ore clears blocks and Ender Eye triggers separate events. The 96.70% RTP and ×50000 max win describe the model, not one session.",
    updatedLabel: "Reviewed August 12, 2026",
    highlights: [
      { label: "Field", value: "5×3" },
      { label: "Loop", value: "Drop → dig" },
      { label: "Risk", value: "High" },
    ],
    sections: [
      {
        title: "Basic round sequence",
        paragraphs: [
          "Set the stake and check the paytable before starting. Symbols form a drop on the 5×3 field. If the result triggers a continuation, the mine moves down and exposes another layer.",
        ],
        points: [
          "choose a stake within a fixed budget;",
          "start the drop and let the full chain complete;",
          "watch mine progress and special blocks;",
          "do not change the stake during an active round.",
        ],
      },
      {
        title: "Blast Ore and Ender Eye",
        paragraphs: [
          "Blast Ore clears an area of blocks and can accelerate the current chain. Ender Eye is tied to separate feature events that may change how the round develops.",
          "These elements trigger according to the game rules, not a player action. Their appearance cannot be predicted from previous spins.",
        ],
      },
      {
        title: "Managing the risk",
        paragraphs: [
          "A 96.70% RTP, high volatility and ×50000 maximum potential describe the mathematical profile. Practical risk control comes from an affordable base stake, a full-session limit and no attempts to chase losses.",
          "Use Bonus Buy only after learning the base game. Its higher cost reduces the number of attempts available within the same budget and does not guarantee a positive result.",
        ],
      },
    ],
    faq: [
      {
        question: "Does Mine Drop 2 use paylines?",
        answer:
          "Mine Drop 2 uses a drop mechanic above the mine. Always check the active version’s paytable for the exact combination rules.",
      },
      {
        question: "Can I influence when Blast Ore appears?",
        answer:
          "No. Feature events are controlled by the game mechanics, and previous results do not predict the next round.",
      },
    ],
    relatedLabel: "Explore the details",
    homeLabel: "Back to the review",
    playLabel: "Choose a platform",
  },
};

const pagesByLocale: Record<
  Locale,
  Record<SeoPageSlug, SeoPageContent>
> = {
  ru: ruPages,
  en: enPages,
};

export function getSeoPage(locale: Locale, slug: SeoPageSlug) {
  return pagesByLocale[locale][slug];
}

export function isSeoPageSlug(value: string): value is SeoPageSlug {
  return SEO_PAGE_SLUGS.some((slug) => slug === value);
}

export function getSeoPagePath(locale: Locale, slug: SeoPageSlug) {
  return locale === "ru" ? `/${slug}` : `/en/${slug}`;
}

export function getSeoNavigation(locale: Locale) {
  return SEO_PAGE_SLUGS.map((slug) => {
    const page = getSeoPage(locale, slug);
    return {
      href: getSeoPagePath(locale, slug),
      label:
        locale === "ru"
          ? {
              demo: "Демо",
              rtp: "RTP и математика",
              bonuses: "Бонусы",
              "how-to-play": "Как играть",
            }[slug]
          : {
              demo: "Demo",
              rtp: "RTP and math",
              bonuses: "Bonuses",
              "how-to-play": "How to play",
            }[slug],
      title: page.heading,
    };
  });
}
