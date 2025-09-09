"use client";

import Image from "next/image";
import { CtaButton } from "@/components/ui/cta-button";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import { resepTastyData, ResepTastyData } from "@/lib/resep-tasty-data";

// --- Prepare Data from Imported Source ---
const topRowRecipes = resepTastyData.slice(0, 3);
const bottomRowRecipes = resepTastyData.slice(3, 6);
const topRowImages = [...topRowRecipes, ...topRowRecipes];
const bottomRowImages = [...bottomRowRecipes, ...bottomRowRecipes];

// --- Types ---
interface RecipeCardProps {
  recipe: ResepTastyData;
  index: number;
  direction: string;
}

// --- Recipe Card Component ---
const RecipeCard = ({ recipe, index, direction }: RecipeCardProps) => (
  <div key={`${direction}-${index}`} className="flex-shrink-0 px-2">
    <div className="relative">
      <Image
        src={recipe.image}
        alt={`Recipe image: ${recipe.name}`}
        width={400}
        height={400}
        className="object-cover rounded-2xl w-40 h-44 sm:w-52 sm:h-60 md:w-60 md:h-72 lg:w-[255px] lg:h-[300px]"
      />
      <div
        className="absolute inset-0 rounded-2xl opacity-50"
        style={{ backgroundColor: "#003CE9" }}
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
        <h3 className="font-bold text-lg sm:text-xl md:text-xl mb-2">
          {recipe.name}
        </h3>
        <div className="text-sm sm:text-base opacity-90 mb-1">
          {recipe.servings} servings
        </div>
        <div className="text-sm sm:text-base opacity-90">{recipe.time}</div>
      </div>
    </div>
  </div>
);

// --- The Component ---
export default function ResepTasty() {
  const [marqueeSpeed, setMarqueeSpeed] = useState(40);

  useEffect(() => {
    const updateSpeed = () => {
      if (window.innerWidth < 640) {
        setMarqueeSpeed(30);
      } else if (window.innerWidth < 1024) {
        setMarqueeSpeed(40);
      } else {
        setMarqueeSpeed(50);
      }
    };

    updateSpeed();
    window.addEventListener("resize", updateSpeed);
    return () => window.removeEventListener("resize", updateSpeed);
  }, []);

  return (
    <section className="w-full h-auto overflow-hidden">
      <div className="w-full flex flex-col-reverse md:flex-row justify-between items-start gap-12 md:gap-10">
        <div className="w-full md:w-[60%] flex flex-col gap-4">
          <Marquee speed={marqueeSpeed} direction="left">
            {topRowImages.map((recipe, index) => (
              <RecipeCard
                key={`top-${index}`}
                recipe={recipe}
                index={index}
                direction="top"
              />
            ))}
          </Marquee>

          <Marquee speed={marqueeSpeed} direction="right">
            {bottomRowImages.map((recipe, index) => (
              <RecipeCard
                key={`bottom-${index}`}
                recipe={recipe}
                index={index}
                direction="bottom"
              />
            ))}
          </Marquee>
        </div>

        {/* Right Side: Text Content */}
        {/* MODIFIED: Added lg:pr-44 for laptop screens */}
        <div className="w-full md:w-[40%] flex flex-col items-center md:items-end text-center md:text-right text-[#003CE9] px-4 lg:pr-20 xl:pr-20">
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="hidden md:block font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold text-2xl bg-[#003BE2] px-2 py-0.5 mb-3">
              ARTIKEL TASTY
            </div>
            <div className="font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-4xl sm:text-5xl bg-[#B5FE28] px-4 py-2">
              RESEP TASTY
            </div>
          </div>

          <div className="space-y-4 mt-6 max-w-md">
            <p className="text-base md:text-lg leading-relaxed">
              Pusing? Males ribet? Tenang!
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Tasty Fruit® punya jawabannya. Di rubrik ini, ada banyak
              resep-resep yang gak cuma bikin dapurmu rame, tapi juga lidahmu
              bergoyang gembira.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Yuk, coba kreasi buah-buahan yang unik dari Tasty Fruit® sekarang
              juga!
            </p>
          </div>

          <div className="flex justify-center md:justify-end pt-6">
            <CtaButton py="1" px="2" href="/artikel/resep-tasty" color="blue">
              LANJUT BERKREASI
            </CtaButton>
          </div>
          <div className="hidden md:block mt-8">
            <Image
              src="/assets/decorations/heart.svg"
              alt="Heart decoration"
              width={80}
              height={80}
              className="w-20 h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
