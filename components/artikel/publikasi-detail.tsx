"use client";

import Image from "next/image";
import { ResepTastyData } from "@/lib/resep-tasty-data";

interface ResepDetailProps {
  resep: ResepTastyData;
  nextResep: ResepTastyData;
  sanitizedContent: string;
}

export default function ResepDetail({
  resep,
  nextResep,
  sanitizedContent,
}: ResepDetailProps) {
  return (
    <article className="w-full mx-auto py-8">
      {/* Header */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-2 mb-8">
        <div className="font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold text-2xl bg-[#003BE2] px-2 py-0.5 mb-5">
          ARTIKEL TASTY
        </div>
        <div className="font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-5xl bg-[#B5FE28] px-4 py-2">
          RESEP TASTY
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Image */}
        <div className="w-full">
          <Image
            src={resep.image}
            alt={resep.name}
            width={500}
            height={600}
            className="rounded-2xl object-cover w-full h-auto"
          />
        </div>

        {/* Right Column: Details */}
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

          {/* Render TipTap Content */}
          <div
            className="prose prose-blue max-w-none border-t border-[#003CE9]/20 pt-3"
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
          />
        </div>
      </div>
    </article>
  );
}
