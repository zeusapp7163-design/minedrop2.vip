import { enConfig } from "./en.config";
import { ruConfig } from "./ru.config";
import {
  AFFILIATE_LINKS_ENABLED,
  PARTNER_DESTINATIONS,
} from "./shared";
import type { LandingConfig, Locale } from "./types";

const configs: Record<Locale, LandingConfig> = {
  ru: ruConfig,
  en: enConfig,
};

export function getLandingConfig(locale: Locale) {
  return configs[locale];
}

export { AFFILIATE_LINKS_ENABLED, PARTNER_DESTINATIONS };
export {
  SEO_PAGE_SLUGS,
  getSeoNavigation,
  getSeoPage,
  getSeoPagePath,
  isSeoPageSlug,
} from "./seoPages";
export type { LandingConfig, Locale };
export type { SeoPageContent, SeoPageSlug } from "./seoPages";
