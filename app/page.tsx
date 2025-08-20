// app/page.tsx

import HeroSection from "@/components/landing-page/hero-section";
import KomitmenTasty from "@/components/landing-page/komitmen-tasty";
import TastyUniverse from "@/components/landing-page/tasty-universe";
import WhatToCook from "@/components/landing-page/what-to-cook";
import Container from "@/components/layout/container";

export default function LandingPage() {
  return (
    <>
      <Container>
        <HeroSection />
        <KomitmenTasty />
      </Container>
      <TastyUniverse />
      <WhatToCook />
    </>
  );
}
