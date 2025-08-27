"use client";

import Image from "next/image";
import { CtaButton } from "@/components/ui/cta-button";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import { resepTastyData, ResepTastyData } from "@/lib/resep-tasty-data";

// --- Prepare Data from Imported Source ---
// Slice the imported data into two arrays for the top and bottom marquees.
const topRowRecipes = resepTastyData.slice(0, 3);
const bottomRowRecipes = resepTastyData.slice(3, 6);

// Duplicate arrays to ensure a smooth, continuous scrolling effect.
const topRowImages = [...topRowRecipes, ...topRowRecipes];
const bottomRowImages = [...bottomRowRecipes, ...bottomRowRecipes];

// --- Types ---
interface RecipeCardProps {
  recipe: ResepTastyData; // Use the imported type for consistency.
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
      {/* Blue overlay */}
      <div
        className="absolute inset-0 rounded-2xl opacity-50"
        style={{ backgroundColor: "#003CE9" }}
      />
      {/* Food information overlay */}
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
      <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-start gap-10">
        {/* Left Side: Infinite Image Sliders */}
        <div className="w-full lg:w-[60%] flex flex-col gap-4">
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
        <div className="space-y-6 text-center lg:text-right text-[#003CE9] md:max-w-[65ch] mx-auto lg:mx-0 order-2 lg:order-1 pr-15">
          {/* === MODIFIED PART START === */}
          {/* Wrapper for the stacked headings */}
          <div className="flex flex-col items-center lg:items-end gap-2">
            <div className="font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold text-5xl md:text-2xl bg-[#003BE2] px-2 py-0.5 mb-5">
              ARTIKEL TASTY
            </div>
            <div className="font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-5xl md:text-5xl bg-[#B5FE28] px-4 py-2">
              RESEP TASTY
            </div>
          </div>
          {/* === MODIFIED PART END === */}

          {/* Text Content */}
          <div className="space-y-4 sm:space-y-6 w-[75%] ml-auto">
            <p className="text-md sm:text-base md:text-xl lg:text-lg leading-relaxed text-center lg:text-right">
              Pusing? Males ribet? Tenang!
            </p>
            <p className="text-md sm:text-base md:text-xl lg:text-lg leading-relaxed text-center lg:text-right">
              Tasty Fruit® punya jawabannya. Di rubrik ini, ada banyak
              resep-resep yang gak cuma bikin dapurmu rame, tapi juga lidahmu
              bergoyang gembira.
            </p>
            <p className="text-md sm:text-base md:text-xl lg:text-lg leading-relaxed text-center lg:text-right">
              Yuk, coba kreasi buah-buahan yang unik dari Tasty Fruit® sekarang
              juga!
            </p>
          </div>
          {/* CTA Button */}
          <div className="flex justify-center lg:justify-end pt-2">
            <CtaButton py="1" px="2" href="/artikel/resep-tasty" color="blue">
              LANJUT BERKREASI
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
