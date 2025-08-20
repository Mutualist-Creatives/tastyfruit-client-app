// app/page.tsx

import HeroSection from "@/components/landing-page/hero-section";
import KomitmenTasty from "@/components/landing-page/komitmen-tasty";
import TastyUniverse from "@/components/landing-page/tasty-universe";

export default function LandingPage() {
  return (
    <main className="flex-1 w-full min-h-screen bg-white">
      <div className="w-full h-auto mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-20 font-nunito py-12">
        <HeroSection />
        <KomitmenTasty />
      </div>
      <TastyUniverse />
    </main>
  );
}
