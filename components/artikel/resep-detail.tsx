"use client";

import Image from "next/image";
import Link from "next/link";
import { ResepTastyData, InstructionStep } from "@/lib/resep-tasty-data";

interface ResepDetailProps {
  resep: ResepTastyData;
  nextResep: ResepTastyData;
}

export default function ResepDetail({ resep, nextResep }: ResepDetailProps) {
  return (
    <article className="w-full mx-auto">
      {/* ================================================================== */}
      {/* === MOBILE & TABLET LAYOUT (<1024px) ===                         */}
      {/* ================================================================== */}
      <div className="lg:hidden">
        {/* Header */}
        <div className="flex flex-col items-start text-left gap-2 mb-8">
          <div className="font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold text-2xl bg-[#003BE2] px-2 py-0-5 mb-5">
            ARTIKEL TASTY
          </div>
          <div className="font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-5xl bg-[#B5FE28] px-4 py-2">
            RESEP TASTY
          </div>
        </div>

        {/* Author and Title */}
        {/* ADJUSTED: Reduced margin-bottom to bring info block closer */}
        <div className="text-[#003CE9] mb-4">
          <p className="text-sm">
            Resep oleh <span className="font-bold">{resep.author}</span>
          </p>
          <h1 className="font-bold text-5xl md:text-6xl my-2 font-bricolage-grotesque-condensed">
            {resep.name.toUpperCase()}
          </h1>
        </div>

        {/* Info Servings & Time */}
        <div className="text-[#003CE9]">
          {/* ADJUSTED: Reduced gap and bottom margin */}
          <div className="flex items-center gap-4 text-sm text-[#003CE9]/80 mb-6">
            <p>{resep.servings} servings</p>
            <div className="flex items-center gap-1.5">
              <Image
                src="/assets/artikel/resep-tasty/time.svg"
                alt="Time"
                width={16}
                height={16}
              />
              <span>{resep.time}</span>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="w-full mb-8">
          <Image
            src={resep.image}
            alt={resep.name}
            width={500}
            height={281}
            className="rounded-2xl object-cover w-full h-auto aspect-video"
          />
        </div>

        {/* Ingredients and Instructions */}
        <div className="text-[#003CE9]">
          <div className="mb-6">
            <h2 className="font-bold text-xl mb-3">Bahan Baku</h2>
            <ul className="space-y-3 border-t border-[#003CE9]/20 pt-3">
              {resep.ingredients.map((ingredient) => (
                <li
                  key={ingredient.name}
                  className="flex justify-between items-start text-base"
                >
                  <div>
                    <span>{ingredient.name}</span>
                    {ingredient.note && (
                      <span className="block text-xs text-[#003CE9]/70 italic">
                        {ingredient.note}
                      </span>
                    )}
                  </div>
                  <span className="font-medium text-right flex-shrink-0 ml-4">
                    {ingredient.amount}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-xl mb-3">Cara Masak</h2>
            <ol className="space-y-4 border-t border-[#003CE9]/20 pt-3 text-base leading-relaxed">
              {resep.instructions.map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="font-bricolage-grotesque-condensed font-bold text-3xl text-[#003CE9]/50 mt-[-2px]">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-bold">{step.title}</h3>
                    <p className="italic text-[#003CE9]/90">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* ================================================================== */}
      {/* === DESKTOP LAYOUT (>=1024px) ===                                */}
      {/* ================================================================== */}
      <div className="hidden lg:block">
        <div className="flex flex-col items-start text-left gap-2 mb-8">
          <div className="font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold text-2xl bg-[#003BE2] px-2 py-0-5 mb-5">
            ARTIKEL TASTY
          </div>
          <div className="font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-5xl bg-[#B5FE28] px-4 py-2">
            RESEP TASTY
          </div>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <div className="w-full">
            <Image
              src={resep.image}
              alt={resep.name}
              width={500}
              height={500}
              className="rounded-2xl object-cover w-full h-auto aspect-square"
            />
          </div>
          <div className="text-[#003CE9]">
            <p className="text-sm">
              Resep oleh <span className="font-bold">{resep.author}</span>
            </p>
            {/* ADJUSTED: Reduced margin-bottom to bring info block closer */}
            <h1 className="font-bold text-7xl mb-2 font-bricolage-grotesque-condensed">
              {resep.name.toUpperCase()}
            </h1>
            {/* ADJUSTED: Reduced gap and bottom margin */}
            <div className="flex items-center gap-4 text-sm text-[#003CE9]/80 mb-6">
              <p>{resep.servings} servings</p>
              <div className="flex items-center gap-1.5">
                <Image
                  src="/assets/artikel/resep-tasty/time.svg"
                  alt="Time"
                  width={16}
                  height={16}
                />
                <span>{resep.time}</span>
              </div>
            </div>
            <div className="mb-6">
              <h2 className="font-bold text-xl mb-3">Bahan Baku</h2>
              <ul className="space-y-3 border-t border-[#003CE9]/20 pt-3">
                {resep.ingredients.map((ingredient) => (
                  <li
                    key={ingredient.name}
                    className="flex justify-between items-start text-base"
                  >
                    <div>
                      <span>{ingredient.name}</span>
                      {ingredient.note && (
                        <span className="block text-xs text-[#003CE9]/70 italic">
                          {ingredient.note}
                        </span>
                      )}
                    </div>
                    <span className="font-medium text-right flex-shrink-0 ml-4">
                      {ingredient.amount}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-bold text-xl mb-3">Cara Masak</h2>
              <ol className="space-y-4 border-t border-[#003CE9]/20 pt-3 text-base leading-relaxed">
                {resep.instructions.map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="font-bricolage-grotesque-condensed font-bold text-3xl text-[#003CE9]/50 mt-[-2px]">
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-bold">{step.title}</h3>
                      <p className="italic text-[#003CE9]/90">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
