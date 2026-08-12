import { LandingPage } from "@/components/LandingPage";
import { getLandingConfig } from "@/content";

export default function EnglishHomePage() {
  return <LandingPage config={getLandingConfig("en")} locale="en" />;
}
