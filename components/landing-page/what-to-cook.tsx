"use client";

import Image from "next/image";
import { CtaButton } from "@/components/ui/cta-button";
import Marquee from "react-fast-marquee";

// --- Image Data ---
// We add duplicates to ensure the marquee has enough content to scroll smoothly without gaps.
const topRowImages = [
  "/assets/landing-page/what-to-cook/png/photo-1.png",
  "/assets/landing-page/what-to-cook/png/photo-2.png",
  "/assets/landing-page/what-to-cook/png/photo-3.png",
  "/assets/landing-page/what-to-cook/png/photo-1.png",
  "/assets/landing-page/what-to-cook/png/photo-2.png",
  "/assets/landing-page/what-to-cook/png/photo-3.png",
];

const bottomRowImages = [
  "/assets/landing-page/what-to-cook/png/photo-4.png",
  "/assets/landing-page/what-to-cook/png/photo-5.png",
  "/assets/landing-page/what-to-cook/png/photo-6.png",
  "/assets/landing-page/what-to-cook/png/photo-4.png",
  "/assets/landing-page/what-to-cook/png/photo-5.png",
  "/assets/landing-page/what-to-cook/png/photo-6.png",
];

// --- The Component ---
export default function WhatToCook() {
  return (
    <section className="w-full h-auto overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-10 py-12">
        {/* Left Side: Infinite Image Sliders */}
        <div className="w-full lg:w-[60%] flex flex-col gap-4">
          <Marquee speed={50} direction="left">
            {topRowImages.map((src, index) => (
              <div key={`top-${index}`} className="flex-shrink-0 px-2">
                <Image
                  src={src}
                  alt={`Recipe image ${(index % 3) + 1}`}
                  width={400}
                  height={400}
                  className="w-[255px] h-[300px] object-cover rounded-2xl"
                />
              </div>
            ))}
          </Marquee>

          <Marquee speed={50} direction="right">
            {bottomRowImages.map((src, index) => (
              <div key={`bottom-${index}`} className="flex-shrink-0 px-2">
                <Image
                  src={src}
                  alt={`Recipe image ${(index % 3) + 4}`}
                  width={400}
                  height={400}
                  className="w-[255px] h-[300px] object-cover rounded-2xl"
                />
              </div>
            ))}
          </Marquee>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full lg:w-[40%] px-4 sm:px-6 lg:px-20 font-nunito relative">
          <div className="flex flex-col items-start gap-6">
            <Image
              src="/assets/landing-page/what-to-cook/masak-apa-hari-ini.svg"
              alt="Masak Apa Hari Ini? Title"
              width={400}
              height={150}
              className="w-full max-w-xs h-auto"
            />
            <div className="space-y-4 text-blue-600 font-nunito gap-2">
              <p className="text-lg leading-6">Pusing? Males ribet? Tenang!</p>
              <p className="text-lg leading-6">
                Tasty Fruit® punya jawabannya. Di rubrik ini, ada banyak
                resep-resep yang gak cuma bikin dapurmu rame, tapi juga lidahmu
                bergoyang gembira.
              </p>
              <p className="text-lg leading-6">
                Yuk, coba kreasi buah-buahan yang unik dari Tasty Fruit®
                sekarang juga!
              </p>
            </div>
            <CtaButton href="/resep" color="blue" fontSize="text-3xl">
              LANJUT BERKREASI
            </CtaButton>
            <Image
              src="/assets/decorations/heart.svg"
              alt="Heart"
              width={60}
              height={60}
              className="mt-5 w-20 h-20"
            />
          </div>
          <Image
            src="/assets/decorations/star.svg"
            alt="Star"
            width={40}
            height={40}
            className="absolute top-10 right-30 w-5 h-5"
          />
          <Image
            src="/assets/decorations/star.svg"
            alt="Star"
            width={40}
            height={40}
            className="absolute top-1/6 left-1/6 w-12 h-12 rotate-48"
          />
          <Image
            src="/assets/decorations/star.svg"
            alt="Star"
            width={40}
            height={40}
            className="absolute top-1/6 left-1/6 w-12 h-12 rotate-48"
          />
        </div>
      </div>
    </section>
  );
}
