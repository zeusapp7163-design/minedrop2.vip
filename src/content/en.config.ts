import type { LandingConfig } from "./types";
import { PARTNER_BASE, SHARED_GAME, SHARED_SITE, SHARED_THEME } from "./shared";

export const enConfig = {
  locale: "en",
  path: "/en",
  language: "en-US",
  site: {
    ...SHARED_SITE,
    ogLocale: "en_US",
    title: "Mine Drop 2 — Play Online & Demo | Official Slot Site",
    description:
      "Play Mine Drop 2 by Paperclip Gaming online or explore the demo. RTP 96.70%, max win ×50000, dig-burst gameplay, Blast Ore, Ender Eye and Bonus Buy.",
    keywords: [
      "mine drop 2",
      "mine drop 2 play online",
      "mine drop 2 demo",
      "mine drop 2 slot",
      "minedrop 2",
      "paperclip gaming mine drop 2",
      "mine drop 2 rtp",
      "mine drop 2 bonus buy",
    ],
  },
  theme: SHARED_THEME,
  game: {
    ...SHARED_GAME,
    alternateNames: ["Minedrop 2", "Mine Drop 2 Slot"],
    volatility: "High",
    grid: "5×3 drop",
    mechanics: "Dig-burst / mining",
    heroLead:
      "A mining-themed dig-burst slot on Stake Engine, built around breakable blocks, explosive ore and bonus events with up to ×50000 potential.",
  },
  nav: [
    { href: "#about", label: "About" },
    { href: "#mechanics", label: "How it works" },
    { href: "#screens", label: "Screenshots" },
    { href: "#play", label: "Play" },
    { href: "#faq", label: "FAQ" },
  ],
  stats: [
    { label: "Provider", value: SHARED_GAME.provider },
    { label: "Engine", value: SHARED_GAME.engine },
    { label: "RTP", value: SHARED_GAME.rtp },
    { label: "Volatility", value: "High" },
    { label: "Max win", value: SHARED_GAME.maxWin },
    { label: "Format", value: "5×3 drop" },
  ],
  steps: [
    {
      title: "Build the drop",
      text: "A 5×3 field appears above the mine. Winning combinations trigger the next stage of the dig.",
    },
    {
      title: "Dig deeper",
      text: "Every successful event pushes the round down and exposes a fresh layer of blocks.",
    },
    {
      title: "Trigger modifiers",
      text: "Blast Ore clears an area, while Ender Eye can change the pace and potential of the current round.",
    },
    {
      title: "Manage the risk",
      text: "High volatility calls for a fixed stake limit. Bonus Buy is a shortcut, not a guaranteed result.",
    },
  ],
  features: [
    {
      title: "Blast Ore",
      text: "Explosive ore clears blocks and can turn a quiet dig into the most active part of the round.",
      image: "/media/ui-2.jpg",
      alt: "Blast Ore event during a Mine Drop 2 round",
    },
    {
      title: "Ender Eye",
      text: "A rarer bonus event that can extend the mine and open a route toward larger multipliers.",
      image: "/media/ui-4.webp",
      alt: "Ender Eye on the Mine Drop 2 game field",
    },
    {
      title: "Bonus Buy",
      text: "A faster route into a bonus mode, with a higher upfront cost and increased variance.",
      image: "/media/ui-5.webp",
      alt: "Mine Drop 2 Bonus Buy menu",
    },
  ],
  gallery: [
    {
      src: "/media/ui-1.jpg",
      alt: "Mine Drop 2 base round with a 5 by 3 field",
      caption: "Base game",
    },
    {
      src: "/media/ui-2.jpg",
      alt: "Mine Drop 2 dig-burst action and multipliers",
      caption: "Dig-burst in action",
    },
    {
      src: "/media/ui-5.webp",
      alt: "Mine Drop 2 bonus purchase screen",
      caption: "Bonus Buy options",
    },
  ],
  partners: PARTNER_BASE.map((partner, index) => ({
    ...partner,
    badge: ["Featured", "Bonus", "Original"][index],
  })),
  faq: [
    {
      question: "Where can I play Mine Drop 2 online?",
      answer:
        "The platforms listed below may offer Mine Drop 2 by Paperclip Gaming. Check game availability, local rules and current bonus terms before you register.",
    },
    {
      question: "Is a Mine Drop 2 demo available?",
      answer:
        "A demo mode may be available without a deposit, depending on the platform and your region. It is the simplest way to learn the dig-burst flow first.",
    },
    {
      question: "What is the Mine Drop 2 RTP?",
      answer:
        "The stated RTP is 96.70%. RTP is a long-term theoretical figure and does not predict the result of an individual session.",
    },
    {
      question: "What is the maximum win?",
      answer:
        "The advertised maximum potential is ×50000 the stake. Outcomes near the top of the range are rare.",
    },
    {
      question: "Are Mine Drop 2 and Mine Slot 2 the same game?",
      answer:
        "No. Mine Drop 2 is developed by Paperclip Gaming for Stake Engine. Mine Slot 2 belongs to the InOut game line.",
    },
    {
      question: "What do Blast Ore and Ender Eye do?",
      answer:
        "Blast Ore clears part of the mine. Ender Eye introduces separate bonus events that can strengthen or extend the round.",
    },
    {
      question: "Do I need to use Bonus Buy?",
      answer:
        "No. Bonus Buy is optional and comes with a higher cost and variance. Standard rounds remain available.",
    },
  ],
  riskCards: [
    {
      value: SHARED_GAME.rtp,
      title: "Theoretical return",
      text: "RTP applies over a very long sample. A short session can finish far above or below that number.",
    },
    {
      value: "High",
      title: "Risk profile",
      text: "Longer quiet stretches are possible between feature events, so stake size matters.",
    },
    {
      value: SHARED_GAME.maxWin,
      title: "Maximum potential",
      text: "The high ceiling sits in the rare tail of outcomes. Bonus Buy increases variance further.",
    },
  ],
  compareRows: [
    { label: "Provider", mineDrop: "Paperclip Gaming", mineSlot: "InOut" },
    { label: "Engine", mineDrop: "Stake Engine", mineSlot: "InOut ecosystem" },
    {
      label: "Series",
      mineDrop: "Mine Drop sequel",
      mineSlot: "Mine Slot sequel",
    },
    {
      label: "Search for",
      mineDrop: "Mine Drop 2 / Minedrop 2",
      mineSlot: "Mine Slot 2",
    },
  ],
  ui: {
    header: {
      skip: "Skip to content",
      navLabel: "Main navigation",
      mobileNavLabel: "Mobile navigation",
      languageLabel: "Site language",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      play: "Play",
    },
    hero: {
      primaryCta: "Play online",
      secondaryCta: "View gameplay",
      factsLabel: "Key game specifications",
      rtpLabel: "RTP",
      maxLabel: "Max",
      riskLabel: "Risk",
      visualLabel: "Mine Drop 2 gameplay preview",
      screenAlt: "Active Mine Drop 2 dig-burst round",
      coverAlt: "Mine Drop 2 cover art",
    },
    specsTitle: "Mine Drop 2 specifications",
    about: {
      eyebrow: "About the game",
      title: "A mine that keeps moving after the drop",
      lead: "Mine Drop 2 turns each winning combination into the start of a deeper chain rather than the end of a spin.",
      figureAlt: "Mine Drop 2 base interface with the mine and progress chests",
      caption:
        "Base round: a 5×3 field, breakable mine blocks and five progress chests.",
      label: "Core idea",
      summaryTitle: "One drop starts a chain of events",
      paragraphs: [
        "Mine Drop 2 is Paperclip Gaming’s mining sequel, built for Stake Engine.",
        "A winning combination keeps the spin moving: the mine drops deeper, new blocks appear, and Blast Ore or Ender Eye can take over.",
      ],
      link: "See how a round works →",
      highlights: [
        {
          label: "01",
          title: "5×3 drop",
          text: "Combinations form above the mine and decide whether the dig continues.",
        },
        {
          label: "02",
          title: "Persistent round",
          text: "Blast Ore and Ender Eye can reshape the field after the first result.",
        },
        {
          label: "03",
          title: "High variance",
          text: "High volatility, 96.70% RTP and advertised potential up to ×50000.",
        },
      ],
    },
    mechanics: {
      eyebrow: "Round logic",
      title: "How dig-burst works",
      lead: "Four steps explain the core loop without promotional promises or unnecessary jargon.",
    },
    features: {
      eyebrow: "Key events",
      title: "Three mechanics that change the pace",
      lead: "Each card shows what the event looks like and why it matters during the dig.",
    },
    math: {
      eyebrow: "Game math",
      title: "Numbers, not promises",
      lead: "RTP, volatility and max win describe the model. They do not guarantee the outcome of a session.",
    },
    compare: {
      eyebrow: "Do not confuse them",
      title: "Mine Drop 2 is not Mine Slot 2",
      lead: "The names are similar, but the games, providers and product lines are different.",
      caption: "Mine Drop 2 and Mine Slot 2 comparison",
      columns: ["Criteria", "Mine Drop 2", "Mine Slot 2"],
      link: "View the Mine Drop 2 interface →",
    },
    gallery: {
      eyebrow: "Interface",
      title: "A closer look at the game",
      lead: "Real gameplay captures show the field, the dig-burst sequence and Bonus Buy screen without decorative mockups.",
      cta: "Choose a platform",
    },
    partners: {
      eyebrow: "Platforms",
      title: "Choose where to play Mine Drop 2",
      lead: "Compare the welcome offer, promo code and rating. Terms can change, so verify them on the platform before registering.",
      ratingLabel: "Rating",
      welcomeBonus: "Welcome offer",
      promoLabel: "Code",
      copy: "Copy",
      copied: "Copied",
      copyAria: "Copy promo code",
      noPromo: "Offers without a promo code",
      play: "Play",
      legal: "18+ · Play responsibly",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Quick answers",
      lead: "Demo access, RTP, features and the difference between Mine Drop 2 and Mine Slot 2.",
    },
    footer: {
      text: "Mine Drop 2 review: game specs, mechanics, screenshots and platforms where the slot may be available.",
      cta: "Choose a platform",
      legal:
        "18+. Play responsibly. Gambling can be addictive. This website uses affiliate links.",
    },
    schemaOffer: "A free demo mode may be available",
    ogTagline: "Play online",
  },
} satisfies LandingConfig;
