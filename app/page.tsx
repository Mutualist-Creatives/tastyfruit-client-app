// app/page.tsx

import HeroSection from "@/components/landing-page/hero-section";
import KomitmenTasty from "@/components/landing-page/komitmen-tasty";
import TastyUniverse from "@/components/landing-page/tasty-universe";

export default function LandingPage() {
  return (
    <main>
      <HeroSection />
      <KomitmenTasty />
      <TastyUniverse />
    </main>
  );
}
