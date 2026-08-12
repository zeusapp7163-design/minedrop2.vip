export const SHARED_SITE = {
  name: "Mine Drop 2",
  domain: "minedrop2.vip",
  url: "https://minedrop2.vip",
  published: "2026-07-27",
  updated: "2026-08-12",
} as const;

export const SHARED_THEME = {
  sky: "#79c8ee",
  ore: "#8757d9",
  sand: "#c8ab70",
  grass: "#67ad36",
} as const;

export const SHARED_GAME = {
  name: "Mine Drop 2",
  provider: "Paperclip Gaming",
  engine: "Stake Engine",
  release: "27.07.2026",
  rtp: "96.70%",
  maxWin: "×50000",
  cover: "/media/cover.webp",
} as const;

export const PARTNER_BASE = [
  {
    id: "1win",
    name: "1win",
    logo: "/images/affiliates/1win.png",
    rating: "4.90",
    bonusValue: "500%",
    bonusExtra: "+70 FS",
    promoCode: "ADBLOCK",
  },
  {
    id: "jetton",
    name: "JetTon",
    logo: "/images/affiliates/jetton.png",
    rating: "4.88",
    bonusValue: "425%",
    bonusExtra: "+250 FS",
    promoCode: "ADBLOCK",
  },
  {
    id: "stake",
    name: "Stake",
    logo: "/images/affiliates/stake.png",
    rating: "4.85",
    bonusValue: "VIP",
    bonusExtra: "rakeback",
    promoCode: null,
  },
] as const;

export const PARTNER_DESTINATIONS: Record<string, string> = {
  "1win": "https://one-vv6649.com/casino/list?open=register&sub1=black",
  jetton:
    "https://jtbetlab.click/ch7v2YRRqma?click_id=md2&target_id=/&target_type=registration",
  stake: "https://stake3098.com/?c=blackDemo",
};
