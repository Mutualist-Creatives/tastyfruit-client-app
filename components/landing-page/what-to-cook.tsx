// components/landing-page/what-to-cook.tsx
"use client";

import Image from "next/image";
import { CtaButton } from "@/components/ui/cta-button";
import { motion } from "motion/react";

// --- Image Data ---
const topRowImages = [
  "/assets/landing-page/what-to-cook/png/photo-1.png",
  "/assets/landing-page/what-to-cook/png/photo-2.png",
  "/assets/landing-page/what-to-cook/png/photo-3.png",
];

const bottomRowImages = [
  "/assets/landing-page/what-to-cook/png/photo-4.png",
  "/assets/landing-page/what-to-cook/png/photo-5.png",
  "/assets/landing-page/what-to-cook/png/photo-6.png",
];

// --- The Component ---
export default function WhatToCook() {
  // Create multiple duplicates for smoother infinite scroll
  const extendedTopRow = [
    ...topRowImages,
    ...topRowImages,
    ...topRowImages,
    ...topRowImages,
  ];
  const extendedBottomRow = [
    ...bottomRowImages,
    ...bottomRowImages,
    ...bottomRowImages,
    ...bottomRowImages,
  ];

  return (
    <section className="w-full h-auto py-20 overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Left Side: Infinite Image Sliders */}
        <div className="w-full lg:w-[60%] flex flex-col gap-4">
          {/* Top Row: Slides to the right (content moves left) */}
          <div className="w-full overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: [`0%`, `-${20 * topRowImages.length}%`],
              }}
              transition={{
                x: {
                  duration: 8, // Adjust this for speed (lower = faster)
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop",
                },
              }}
            >
              {extendedTopRow.map((src, index) => (
                <div key={`top-${index}`} className="flex-shrink-0 w-1/3 p-2">
                  <Image
                    src={src}
                    alt={`Recipe image ${(index % topRowImages.length) + 1}`}
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover aspect-square rounded-2xl"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Row: Slides to the left (content moves right) */}
          <div className="w-full overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: [`-${20 * bottomRowImages.length}%`, `0%`],
              }}
              transition={{
                x: {
                  duration: 10, // Adjust this for speed (lower = faster)
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop",
                },
              }}
            >
              {extendedBottomRow.map((src, index) => (
                <div
                  key={`bottom-${index}`}
                  className="flex-shrink-0 w-1/3 p-2"
                >
                  <Image
                    src={src}
                    alt={`Recipe image ${(index % bottomRowImages.length) + 1}`}
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover aspect-square rounded-2xl"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full lg:w-[40%] px-4 sm:px-6 lg:px-12 relative">
          <div className="flex flex-col items-start gap-6">
            <Image
              src="/assets/landing-page/what-to-cook/masak-apa-hari-ini.svg"
              alt="Masak Apa Hari Ini? Title"
              width={400}
              height={150}
              className="w-full max-w-sm h-auto"
            />
            <div className="space-y-4 text-blue-600 font-nunito">
              <p className="text-lg leading-relaxed">
                Pusing? Males ribet? Tenang! Tasty Fruit® punya jawabannya. Di
                rubrik ini, ada banyak resep-resep yang gak cuma bikin dapurmu
                rame, tapi juga lidahmu bergoyang gembira.
              </p>
              <p className="text-lg leading-relaxed">
                Yuk, coba kreasi buah-buahan yang unik dari Tasty Fruit®
                sekarang juga!
              </p>
            </div>
            <CtaButton href="/resep" color="blue" fontSize="text-xl">
              LANJUT BERKREASI
            </CtaButton>
          </div>
          <Image
            src="/assets/decorations/star.svg"
            alt="Star"
            width={40}
            height={40}
            className="absolute top-0 right-20 w-10 h-10 rotate-12"
          />
          <Image
            src="/assets/decorations/heart.svg"
            alt="Heart"
            width={60}
            height={60}
            className="absolute bottom-[-40px] right-20 w-16 h-16"
          />
        </div>
      </div>
    </section>
  );
}
