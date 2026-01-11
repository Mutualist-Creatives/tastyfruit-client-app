import Container from "@/components/layout/container";
import FullContainer from "@/components/layout/full-container";
import {
  HeroSkeleton,
  KomitmenSkeleton,
  TastyUniverseSkeleton,
  WhatToCookSkeleton,
  MedsosSkeleton,
} from "@/components/landing-page/skeletons";

export default function Loading() {
  return (
    <>
      <Container>
        <HeroSkeleton />
        <KomitmenSkeleton />
      </Container>
      <TastyUniverseSkeleton />
      <FullContainer>
        <WhatToCookSkeleton />
      </FullContainer>
      <MedsosSkeleton />
    </>
  );
}
