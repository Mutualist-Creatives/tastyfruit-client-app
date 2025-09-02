import Image from "next/image";
import { notFound } from "next/navigation";
import { characterData } from "@/lib/character-data";
import FlipCard from "@/components/tasty-universe/flip-card";
import Container from "@/components/layout/container";
import { CtaButton } from "@/components/ui/cta-button";

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

  // Get the first fun fact entry for cleaner access
  const funFact = character.funFact?.[0];

  return (
    <Container>
      <section className="w-full h-auto">
        <div className="max-w-7xl relative">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            {/* Left column: texts */}
            <div className="w-full lg:w-[40%] space-y-6">
              <div className="flex justify-start">
                <CtaButton px="2" py="0" href="/" color="blue">
                  MEET THE PACK!
                </CtaButton>
              </div>
              <h1 className="font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-5xl lg:text-6xl bg-[#B5FE28] px-4 py-2 inline-block">
                {character.name}
              </h1>
              <div className="w-full lg:w-[70%]">
                {character.introduction && (
                  <p className="text-blue-700 text-lg md:text-lg leading-relaxed max-w-xl mb-5">
                    {(() => {
                      const nameRegex = new RegExp(character.name, "gi");
                      const parts = character.introduction.split(nameRegex);
                      const matches =
                        character.introduction.match(nameRegex) || [];

                      return parts.map((part, index) => (
                        <span key={index}>
                          {part}
                          {index < parts.length - 1 && matches[index] && (
                            <span className="font-bold">{matches[index]}</span>
                          )}
                        </span>
                      ));
                    })()}
                  </p>
                )}

                {character.description && (
                  <p className="text-blue-700 text-lg md:text-lg leading-relaxed max-w-xl">
                    {character.description}
                  </p>
                )}
              </div>
              <div className="w-[40%] lg:w-full grid grid-cols-2 lg:grid-cols-2 gap-2 lg:gap-2 xl:gap-4 pt-4">
                <div>
                  <p className="text-sm text-blue-700 font-bold pb-2">
                    Tempat Tumbuh
                  </p>
                  <div className="inline-block bg-[#B5FE28] px-3 py-1 text-[#003CE9] font-bricolage-grotesque-condensed font-extrabold md:text-2xl lg:text-2xl xl:text-3xl">
                    {character.growingPlace.toUpperCase() || "-"}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-blue-700 font-bold pb-2">
                    Karakteristik
                  </p>
                  <div className="inline-block bg-[#B5FE28] px-3 py-1 text-[#003CE9] font-bricolage-grotesque-condensed font-extrabold md:text-2xl lg:text-2xl xl:text-3xl">
                    {character.characteristic.toUpperCase() || "-"}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-blue-700 font-bold pb-2">
                    Waktu Panen
                  </p>
                  <div className="inline-block bg-[#B5FE28] px-3 py-1 text-[#003CE9] font-bricolage-grotesque-condensed font-extrabold md:text-2xl lg:text-2xl xl:text-3xl">
                    {character.harvestTime.toUpperCase() || "-"}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-blue-700 font-bold pb-2">
                    Spesies
                  </p>
                  <div className="inline-block bg-[#B5FE28] px-3 py-1 text-[#003CE9] font-bricolage-grotesque-condensed font-extrabold md:text-2xl lg:text-2xl xl:text-3xl">
                    {character.species.toUpperCase()}
                  </div>
                </div>
              </div>
            </div>

            {/* Middle column: character image only (no holder/bg) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={character.image}
                alt={character.name}
                width={560}
                height={560}
                className="object-contain drop-shadow-xl w-[auto] h-[30em] lg:h-[35em] -z-50"
                priority
              />
            </div>

            {/* Right column: Fun section */}
            <div className="absolute top-0 right-0 w-[30%] h-full flex flex-col gap-6">
              {/* Flip Card redesigned */}
              <div className="w-[180px] h-[250px] lg:w-[210px] lg:h-[290px] ml-auto">
                {(() => {
                  const entry = character.flipCard?.[0];
                  return (
                    <FlipCard
                      frontBg="transparent"
                      backBg="#003BE2"
                      front={
                        <div className="relative w-full h-full rounded-2xl overflow-hidden">
                          <img
                            src={entry?.image || character.image}
                            alt={character.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      }
                      back={
                        <div
                          className="w-full h-full flex items-center justify-center"
                          style={{ backgroundColor: "#003BE2" }}
                        >
                          <p className="text-4xl md:text-3xl lg:text-4xl font-extrabold text-white">
                            ?
                          </p>
                        </div>
                      }
                      className="h-full"
                    />
                  );
                })()}
              </div>

              {/* Fun facts section */}
              {funFact && (
                <div className="rounded-4xl bg-[#003CE9] text-white p-6 relative mt-auto">
                  {/* Heart decoration in top right corner */}
                  <Image
                    src="/assets/decorations/heart.svg"
                    alt=""
                    aria-hidden="true"
                    width={24}
                    height={24}
                    className="absolute lg:-top-10 xl:-top-12 right-10 w-[6em] h-[6em] xl:w-[7em] xl:h-[7em] pointer-events-none select-none"
                  />
                  <div className="inline-flex font-bricolage-grotesque-condensed items-center gap-2 bg-[#9CFF00] text-[#003CE9] px-1 py-0.5 font-extrabold text-3xl">
                    FUN FACT
                  </div>
                  <p className="mt-2 text-sm md:text-base leading-relaxed font-bold">
                    {funFact.introduction}
                  </p>
                  <p className="text-sm md:text-md leading-relaxed opacity-90">
                    {funFact.description}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Mobile & Tablet Layout */}
          <div className="block lg:hidden space-y-6">
            {/* Character Image, Button, Title Section - Combined */}
            <div className="relative">
              {/* Character Image */}
              <div className="flex justify-center">
                <Image
                  src={character.image}
                  alt={character.name}
                  width={400}
                  height={400}
                  className="object-contain drop-shadow-xl w-auto h-[30em] md:h-[35em]"
                  priority
                />
              </div>

              {/* Flip Card positioned on image */}
              <div className="absolute top-0 right-0 w-auto flex items-start justify-end">
                <div className="w-[7em] h-[9.7em] md:w-[10em] md:h-[14em]">
                  {(() => {
                    const entry = character.flipCard?.[0];
                    return (
                      <FlipCard
                        frontBg="transparent"
                        backBg="#003BE2"
                        front={
                          <div className="relative w-full h-full overflow-hidden">
                            <img
                              src={entry?.image || character.image}
                              alt={character.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        }
                        back={
                          <div
                            className="w-full h-full flex items-center justify-center"
                            style={{ backgroundColor: "#003BE2" }}
                          >
                            <p className="text-4xl md:text-5xl font-extrabold text-white">
                              ?
                            </p>
                          </div>
                        }
                        className="h-full"
                      />
                    );
                  })()}
                </div>
              </div>

              {/* Content positioned at bottom */}
              <div className="relative bottom-0 left-0 right-0 space-y-4">
                {/* Header Section */}
                <div className="flex justify-start">
                  <CtaButton px="2" py="0" href="/tasty-universe" color="blue">
                    MEET THE PACK!
                  </CtaButton>
                </div>

                {/* Title Section */}
                <div className="text-left">
                  <h1 className="w-full md:w-auto text-center md:text-left font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-6xl md:text-5xl bg-[#B5FE28] px-4 py-2 inline-block">
                    {character.name}
                  </h1>
                </div>
              </div>
            </div>

            {/* Description Section - Full Width */}
            <div className="w-full space-y-4">
              {character.introduction && (
                <p className="text-blue-700 text-base md:text-xl leading-relaxed">
                  {(() => {
                    const nameRegex = new RegExp(character.name, "gi");
                    const parts = character.introduction.split(nameRegex);
                    const matches =
                      character.introduction.match(nameRegex) || [];

                    return parts.map((part, index) => (
                      <span key={index}>
                        {part}
                        {index < parts.length - 1 && matches[index] && (
                          <span className="font-bold">{matches[index]}</span>
                        )}
                      </span>
                    ));
                  })()}
                </p>
              )}

              {character.description && (
                <p className="text-blue-700 text-base md:text-xl leading-relaxed">
                  {character.description}
                </p>
              )}
            </div>

            {/* Grid and Fun Fact Section */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Grid Section - Full width on mobile, half on tablet */}
              <div className="w-full md:w-1/2 md:flex md:flex-col mb-4 md:mb-0">
                <div className="grid grid-cols-2 gap-3 md:gap-x-3 md:gap-y-11 h-full">
                  <div>
                    <p className="text-xs md:text-sm text-blue-700 font-bold pb-2">
                      Tempat Tumbuh
                    </p>
                    <div className="w-full md:w-auto text-center md:text-left inline-block bg-[#B5FE28] px-2 md:px-3 py-1 text-[#003CE9] font-bricolage-grotesque-condensed font-extrabold text-xl md:text-2xl">
                      {character.growingPlace.toUpperCase() || "-"}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-blue-700 font-bold pb-2">
                      Karakteristik
                    </p>
                    <div className="w-full md:w-auto text-center md:text-left inline-block bg-[#B5FE28] px-2 md:px-3 py-1 text-[#003CE9] font-bricolage-grotesque-condensed font-extrabold text-xl md:text-2xl">
                      {character.characteristic.toUpperCase() || "-"}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-blue-700 font-bold pb-2">
                      Waktu Panen
                    </p>
                    <div className="w-full md:w-auto text-center md:text-left inline-block bg-[#B5FE28] px-2 md:px-3 py-1 text-[#003CE9] font-bricolage-grotesque-condensed font-extrabold text-xl md:text-2xl">
                      {character.harvestTime.toUpperCase() || "-"}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-blue-700 font-bold pb-2">
                      Spesies
                    </p>
                    <div className="w-full md:w-auto text-center md:text-left inline-block bg-[#B5FE28] px-2 md:px-3 py-1 text-[#003CE9] font-bricolage-grotesque-condensed font-extrabold text-xl md:text-2xl">
                      {character.species.toUpperCase()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Fun Fact Section - Full width on mobile, half on tablet */}
              {funFact && (
                <div className="w-full md:w-1/2 md:flex md:flex-col mb-4 md:mb-0">
                  <div className="rounded-4xl bg-[#003CE9] text-white p-4 md:p-6 relative ">
                    {/* Heart decoration */}
                    <Image
                      src="/assets/decorations/heart.svg"
                      alt=""
                      aria-hidden="true"
                      width={24}
                      height={24}
                      className="absolute -top-6 md:-top-10 right-4 md:right-12 w-16 h-16 md:w-24 md:h-24 pointer-events-none select-none"
                    />
                    <div className="inline-flex font-bricolage-grotesque-condensed items-center gap-2 bg-[#9CFF00] text-[#003CE9] px-2 py-1 font-extrabold text-xl md:text-2xl whitespace-nowrap">
                      FUN FACT
                    </div>
                    <p className="mt-3 text-base leading-relaxed font-bold">
                      {funFact.introduction}
                    </p>
                    <p className="text-base leading-relaxed opacity-90">
                      {funFact.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
