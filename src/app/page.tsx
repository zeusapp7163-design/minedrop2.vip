import { About } from "@/components/About";
import { Demo } from "@/components/Demo";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
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
        <Demo />
        <Partners id="play-again" compact />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
