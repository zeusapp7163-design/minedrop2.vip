import { LandingPage } from "@/components/LandingPage";
import { getLandingConfig } from "@/content";

export default function RussianHomePage() {
  return <LandingPage config={getLandingConfig("ru")} locale="ru" />;
}
