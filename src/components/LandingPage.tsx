import { About } from "@/components/About";
import { AiAnswer, TrustBlock } from "@/components/AiAnswer";
import { Compare } from "@/components/Compare";
import { Demo } from "@/components/Demo";
import { Faq } from "@/components/Faq";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowPlay } from "@/components/HowPlay";
import { JsonLd, buildPageSchemas } from "@/components/JsonLd";
import { Partners } from "@/components/Partners";
import { Rtp } from "@/components/Rtp";
import { SeoHubLinks } from "@/components/SeoHubLinks";
import type { LandingConfig, Locale } from "@/content";

export function LandingPage({
  config,
  locale,
}: {
  config: LandingConfig;
  locale: Locale;
}) {
  return (
    <>
      <JsonLd data={buildPageSchemas(config)} />
      <Header config={config} locale={locale} />
      <main id="content">
        <Hero config={config} />
        <AiAnswer config={config} />
        <About config={config} />
        <SeoHubLinks config={config} />
        <HowPlay config={config} />
        <Features config={config} />
        <Rtp config={config} />
        <Compare config={config} />
        <Demo config={config} />
        <Partners config={config} />
        <Faq config={config} />
        <TrustBlock config={config} />
      </main>
      <Footer config={config} />
    </>
  );
}
