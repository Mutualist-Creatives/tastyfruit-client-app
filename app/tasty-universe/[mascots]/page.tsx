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
          {/* Left column: texts */}
          <div className="w-[40%] space-y-6">
            <div className="flex justify-center lg:justify-start pt-2">
              <CtaButton px="2" py="0" href="/" color="blue">
                MEET THE PACK!
              </CtaButton>
            </div>
            <h1 className="font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-5xl md:text-6xl bg-[#B5FE28] px-4 py-2  inline-block">
              {character.name}
            </h1>

            <div className="w-full lg:w-[70%]">
              {character.introduction && (
                <p className="text-blue-700 text-lg md:text-lg leading-relaxed max-w-xl mb-5">
                  {character.introduction
                    .split(character.name)
                    .map((part, index, array) => (
                      <span key={index}>
                        {part}
                        {index < array.length - 1 && (
                          <strong>{character.name}</strong>
                        )}
                      </span>
                    ))}
                </p>
              )}

              {character.description && (
                <p className="text-blue-700 text-lg md:text-lg leading-relaxed max-w-xl">
                  {character.description}
                </p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <p className="text-sm text-blue-700 font-bold pb-2">
                  Tempat Tumbuh
                </p>
                <div className="inline-block bg-[#B5FE28] px-3 py-1 text-[#003CE9] font-bricolage-grotesque-condensed font-extrabold text-3xl">
                  {character.growingPlace.toUpperCase() || "-"}
                </div>
              </div>
              <div>
                <p className="text-sm text-blue-700 font-bold pb-2">
                  Karakteristik
                </p>
                <div className="inline-block bg-[#B5FE28] px-3 py-1 text-[#003CE9] font-bricolage-grotesque-condensed font-extrabold text-3xl">
                  {character.characteristic.toUpperCase() || "-"}
                </div>
              </div>
              <div>
                <p className="text-sm text-blue-700 font-bold pb-2">
                  Waktu Panen
                </p>
                <div className="inline-block bg-[#B5FE28] px-3 py-1 text-[#003CE9] font-bricolage-grotesque-condensed font-extrabold text-3xl">
                  {character.harvestTime.toUpperCase() || "-"}
                </div>
              </div>
              <div>
                <p className="text-sm text-blue-700 font-bold pb-2">Spesies</p>
                <div className="inline-block bg-[#B5FE28] px-3 py-1 text-[#003CE9] font-bricolage-grotesque-condensed font-extrabold text-3xl">
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
              className="object-contain drop-shadow-xl w-[auto] h-[35em] -z-50"
              priority
            />
          </div>

          {/* Right column: Fun section */}
          <div className="absolute top-0 right-0 w-[30%] h-full flex flex-col gap-6">
            {/* Flip Card redesigned */}
            <div className="w-[210px] h-[290px] ml-auto">
              {(() => {
                const entry = character.flipCard?.[0];
                return (
                  <FlipCard
                    frontBg="transparent"
                    backBg="#003BE2"
                    front={
                      <div
                        className="relative w-full h-full rounded-2xl border-[6px]"
                        style={{
                          borderColor: entry.borderColor,
                          backgroundColor: entry.bgColor,
                        }}
                      >
                        <div
                          className="absolute inset-0 rounded-2xl pointer-events-none select-none z-0"
                          aria-hidden="true"
                          style={{
                            backgroundImage:
                              "url(/assets/tasty-universe/card-pattern.svg)",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            opacity: 0.1,
                          }}
                        />
                        <div className="flex flex-col h-full p-3 text-left relative z-10">
                          {/* Upper section */}
                          <div className="flex items-start justify-between gap-2">
                            {/* Upper left */}
                            <div className="flex-1 min-w-0 space-y-1 text-left">
                              <div
                                className="block w-fit px-2 py-1 font-bricolage-grotesque-condensed font-extrabold text-[.95rem] leading-none"
                                style={{
                                  color: "#B5FE28",
                                  backgroundColor: "#003BE2",
                                }}
                              >
                                {entry?.name ?? character.name}
                              </div>
                              {entry?.nickname && (
                                <div
                                  className="block w-fit px-1 py-0.5 font-bricolage-grotesque-condensed font-extrabold text-[10px] leading-none"
                                  style={{
                                    color: "#B5FE28",
                                    backgroundColor: "#003BE2",
                                  }}
                                >
                                  {entry.nickname.toUpperCase()}
                                </div>
                              )}
                              {entry?.description && (
                                <p
                                  className="font-nunito text-left text-[.7rem] leading-snug py-1 inline-block max-w-full"
                                  style={{ color: "#003BE2" }}
                                >
                                  {entry.description}
                                </p>
                              )}
                              {entry?.rarity && (
                                <div
                                  className="inline-block px-1 py-0.5 font-bricolage-grotesque-condensed font-extrabold text-[.8rem] leading-none"
                                  style={{
                                    color: "#B5FE28",
                                    backgroundColor: "#003BE2",
                                  }}
                                >
                                  {entry.rarity.toUpperCase()}
                                </div>
                              )}
                            </div>
                            {/* Upper right kcal heart */}
                            <div className="relative shrink-0 w-12 h-12">
                              <img
                                src="/assets/decorations/heart-kcal.svg"
                                alt="kcal"
                                className="absolute inset-0 w-full h-full"
                              />
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div
                                  className="font-extrabold text-sm leading-none text-center"
                                  style={{ color: "#003BE2" }}
                                >
                                  <div className="font-bricolage-grotesque-condensed text-lg -mt-1">
                                    {entry?.kcal ?? "-"}
                                  </div>
                                  <div className="text-[5px] -mt-1.5">kcal</div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex-1" />

                          {/* Bottom section */}
                          <div className="mt-1 flex flex-col items-start gap-1 w-fit">
                            <div className="opacity-90 w-fit inline-block">
                              <img
                                src="/assets/landing-page/hero-section/tastier-happier.svg"
                                alt="Tastier & Happier"
                                className="h-5 w-auto"
                              />
                            </div>
                            <div className="flex flex-col items-start gap-1 w-fit">
                              {(entry?.skills ?? [])
                                .slice(0, 3)
                                .map((s, idx) => (
                                  <span
                                    key={idx}
                                    className="inline-block px-1 py-0.5 font-bricolage-grotesque-condensed font-extrabold text-[.7rem] leading-none"
                                    style={{
                                      color: "#B5FE28",
                                      backgroundColor: "#003BE2",
                                    }}
                                  >
                                    {s.name.toUpperCase()}
                                  </span>
                                ))}
                            </div>
                          </div>
                        </div>
                        {/* Mascot image at bottom-right */}
                        <img
                          src={character.image}
                          alt={character.name}
                          className="absolute -right-3 -bottom-3 w-34 h-auto drop-shadow-xl pointer-events-none select-none z-10"
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
                  className="absolute -top-12 right-10 w-[7em] h-[7em] pointer-events-none select-none"
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
      </section>
    </Container>
  );
}
