import { enConfig } from "./en.config";
import { ruConfig } from "./ru.config";
import { PARTNER_DESTINATIONS } from "./shared";
import type { LandingConfig, Locale } from "./types";

const configs: Record<Locale, LandingConfig> = {
  ru: ruConfig,
  en: enConfig,
};

export function getLandingConfig(locale: Locale) {
  return configs[locale];
}

export { PARTNER_DESTINATIONS };
export type { LandingConfig, Locale };
