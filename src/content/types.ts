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
  destination: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type LandingConfig = {
  site: {
    name: string;
    domain: string;
    url: string;
    locale: string;
    title: string;
    description: string;
    published: string;
    updated: string;
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
};
