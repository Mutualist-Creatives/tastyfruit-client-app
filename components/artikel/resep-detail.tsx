"use client";

import Image from "next/image";
import { ResepTastyData } from "@/lib/resep-tasty-data";

interface ResepDetailProps {
  resep: ResepTastyData;
  nextResep: ResepTastyData;
  sanitizedInstructions: string[]; // This is now an array of sanitized strings
}

export default function ResepDetail({
  resep,
  nextResep,
  sanitizedInstructions,
}: ResepDetailProps) {
  return (
    <article className="w-full mx-auto">
      {/* Header and top section... */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-2 mb-8">
        <div className="font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold text-2xl bg-[#003BE2] px-2 py-0.5 mb-5">
          ARTIKEL TASTY
        </div>
        <div className="font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-5xl bg-[#B5FE28] px-4 py-2">
          RESEP TASTY
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="w-full">
          <Image
            src={resep.image}
            alt={resep.name}
            width={500}
            height={600}
            className="rounded-2xl object-cover w-full h-[20em]"
          />
        </div>

        <div className="text-[#003CE9]">
          <p className="text-sm">
            Resep oleh <span className="font-bold">{resep.author}</span>
          </p>
          <h1 className="font-bold text-7xl my-2 font-bricolage-grotesque-condensed">
            {resep.name.toUpperCase()}
          </h1>
          <div className="flex items-center gap-8 text-sm text-[#003CE9]/80 mb-8">
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

          {/* Ingredients list (no changes needed here) */}
          <div className="mb-6">
            <h2 className="font-bold text-xl mb-3">Bahan Baku</h2>
            <ul className="space-y-2 border-t border-[#003CE9]/20 pt-3">
              {resep.ingredients.map((ingredient) => (
                <li
                  key={ingredient.name}
                  className="flex justify-between text-base"
                >
                  <span>{ingredient.name}</span>
                  <span className="font-medium">{ingredient.amount}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions list (UPDATED) */}
          <div>
            <h2 className="font-bold text-xl mb-3">Cara Masak</h2>
            <ol className="list-decimal list-inside space-y-3 border-t border-[#003CE9]/20 pt-3 text-base leading-relaxed">
              {/* --- IMPORTANT: Render each step as HTML --- */}
              {sanitizedInstructions.map((step, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: step }} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </article>
  );
}
