import { About } from "@/components/About";
import { Compare } from "@/components/Compare";
import { Demo } from "@/components/Demo";
import { Faq } from "@/components/Faq";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowPlay } from "@/components/HowPlay";
import { Partners } from "@/components/Partners";
import { Rtp } from "@/components/Rtp";
import { Specs } from "@/components/Specs";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Specs />
        <Partners />
        <About />
        <HowPlay />
        <Features />
        <Rtp />
        <Compare />
        <Demo />
        <Partners id="play-again" compact />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
