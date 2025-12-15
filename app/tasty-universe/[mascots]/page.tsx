import { notFound } from "next/navigation";
import { characterData } from "@/lib/character-data";
import Container from "@/components/layout/container";
import MascotDetail from "@/components/tasty-universe/mascot-detail";

export function generateStaticParams() {
  return characterData.map((c) => ({ mascots: c.slug }));
}

export default async function Mascots({
  params,
}: {
  params: Promise<{ mascots: string }>;
}) {
  const { mascots } = await params;
  const character = characterData.find((c) => c.slug === mascots);

  if (!character) return notFound();

  const currentIndex = characterData.findIndex((c) => c.slug === mascots);
  const prevCharacter =
    currentIndex > 0 ? characterData[currentIndex - 1] : null;
  const nextCharacter =
    currentIndex < characterData.length - 1
      ? characterData[currentIndex + 1]
      : null;

  return (
    <Container>
      <MascotDetail
        character={character}
        prevCharacter={prevCharacter}
        nextCharacter={nextCharacter}
      />
    </Container>
  );
}
