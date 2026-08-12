export type Locale = "ru" | "en";

export type NavItem = {
  href: `#${string}`;
  label: string;
};

export type Stat = {
  label: string;
  value: string;
};

export type Feature = {
  title: string;
  text: string;
  image: string;
  alt: string;
};

export type Step = {
  title: string;
  text: string;
};

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

export type Partner = {
  id: string;
  name: string;
  logo: string;
  rating: string;
  badge: string;
  bonusValue: string;
  bonusExtra: string;
  promoCode: string | null;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Highlight = {
  label: string;
  title: string;
  text: string;
};

export type RiskCard = {
  value: string;
  title: string;
  text: string;
};

export type CompareRow = {
  label: string;
  mineDrop: string;
  mineSlot: string;
};

export type AiFact = {
  label: string;
  value: string;
};

export type LandingConfig = {
  locale: Locale;
  path: "/" | "/en";
  language: "ru-RU" | "en-US";
  site: {
    name: string;
    domain: string;
    url: string;
    ogLocale: "ru_RU" | "en_US";
    title: string;
    description: string;
    keywords: string[];
    published: string;
    updated: string;
  };
  ai: {
    answerLabel: string;
    answer: string;
    factsLabel: string;
    facts: AiFact[];
    trustLabel: string;
    trust: string;
  };
  theme: {
    sky: string;
    ore: string;
    sand: string;
    grass: string;
  };
  game: {
    name: string;
    alternateNames: string[];
    provider: string;
    engine: string;
    release: string;
    rtp: string;
    volatility: string;
    maxWin: string;
    grid: string;
    mechanics: string;
    cover: string;
    heroLead: string;
  };
  nav: NavItem[];
  stats: Stat[];
  steps: Step[];
  features: Feature[];
  gallery: GalleryItem[];
  partners: Partner[];
  faq: FaqItem[];
  riskCards: RiskCard[];
  compareRows: CompareRow[];
  ui: {
    header: {
      skip: string;
      navLabel: string;
      mobileNavLabel: string;
      languageLabel: string;
      openMenu: string;
      closeMenu: string;
      play: string;
    };
    hero: {
      primaryCta: string;
      secondaryCta: string;
      factsLabel: string;
      rtpLabel: string;
      maxLabel: string;
      riskLabel: string;
      visualLabel: string;
      screenAlt: string;
      coverAlt: string;
    };
    specsTitle: string;
    about: {
      eyebrow: string;
      title: string;
      lead: string;
      figureAlt: string;
      caption: string;
      label: string;
      summaryTitle: string;
      paragraphs: string[];
      link: string;
      highlights: Highlight[];
    };
    mechanics: {
      eyebrow: string;
      title: string;
      lead: string;
    };
    features: {
      eyebrow: string;
      title: string;
      lead: string;
    };
    math: {
      eyebrow: string;
      title: string;
      lead: string;
    };
    compare: {
      eyebrow: string;
      title: string;
      lead: string;
      caption: string;
      columns: [string, string, string];
      link: string;
    };
    gallery: {
      eyebrow: string;
      title: string;
      lead: string;
      cta: string;
    };
    partners: {
      eyebrow: string;
      title: string;
      lead: string;
      ratingLabel: string;
      welcomeBonus: string;
      promoLabel: string;
      copy: string;
      copied: string;
      copyAria: string;
      noPromo: string;
      play: string;
      legal: string;
    };
    faq: {
      eyebrow: string;
      title: string;
      lead: string;
    };
    footer: {
      text: string;
      cta: string;
      legal: string;
    };
    schemaOffer: string;
    howToName: string;
    howToDescription: string;
    ogTagline: string;
  };
};
