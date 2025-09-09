// app/artikel/page.tsx

import Container from "@/components/layout/container";
import FullContainer from "@/components/layout/full-container";

import Publikasi from "@/components/artikel/publikasi";
import ResepTasty from "@/components/artikel/resep-tasty";

export default function ArtikelPage() {
  return (
    <>
      <Container>
        <Publikasi />
      </Container>
      <FullContainer>
        <ResepTasty />
      </FullContainer>
    </>
  );
}
