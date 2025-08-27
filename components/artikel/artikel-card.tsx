"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PublikasiData } from "@/lib/publikasi-data";
import { ResepTastyData } from "@/lib/resep-tasty-data";

// --- Props Interface (Unchanged) ---
interface ArtikelCardProps {
  publikasi?: PublikasiData;
  resep?: ResepTastyData;
}

// --- Category Color Function (Unchanged) ---
const getCategoryColor = (category: string) => {
  switch (category) {
    case "Event":
      return "bg-[#003BE2] text-white";
    case "Aktivitas":
      return "bg-[#E30E75] text-white";
    case "Produk":
      return "bg-[#FFE600] text-[#003BE2]";
    case "Informasi":
      return "bg-[#00C896] text-white";
    case "Resep":
      return "bg-[#003CE9] text-[#B5FE28]";
    default:
      return "bg-[#003BE2] text-[#B5FE28]";
  }
};

export default function ArtikelCard({ publikasi, resep }: ArtikelCardProps) {
  const pathname = usePathname();
  const isResepPage = pathname.includes("/resep-tasty");

  // Determine common properties to simplify JSX
  const id = isResepPage ? resep!.id : publikasi!.id;
  const image = isResepPage ? resep!.image : publikasi!.image;
  const title = isResepPage ? resep!.name : publikasi!.title;
  const category = isResepPage ? "Resep" : publikasi!.category;

  // Determine the base path for the link
  const basePath = isResepPage ? "/artikel/resep-tasty" : "/artikel/publikasi";

  const cardStyles = {
    bgColor: isResepPage ? "bg-[#B5FE28]" : "bg-[#003CE9]",
    textColor: isResepPage ? "text-[#003CE9]" : "text-white",
    mutedTextColor: isResepPage ? "text-[#003CE9]/80" : "text-white/70",
    arrowCircleBg: isResepPage ? "bg-[#003CE9]" : "bg-[#B5FE28]",
    arrowSrc: isResepPage
      ? "/assets/ui/arrow-right-green.svg"
      : "/assets/ui/arrow-right-blue.svg",
  };

  return (
    <Link href={`${basePath}/${id}`} className="block">
      <div
        className={`${cardStyles.bgColor} rounded-3xl p-4 h-full hover:scale-105 transition-transform duration-300 cursor-pointer flex flex-col`}
      >
        {/* Article Image Wrapper */}
        <div className="relative mb-4">
          {/* --- MODIFICATION 1: Conditionally render the category badge --- */}
          {!isResepPage && (
            <div
              className={`absolute top-2 left-2 z-10 inline-block px-1.5 py-0.5 rounded-full text-xs font-bold ${getCategoryColor(
                category
              )}`}
            >
              {category}
            </div>
          )}

          {/* Article Image */}
          <Image
            src={image}
            alt={title}
            width={400}
            height={300}
            className="w-full h-54 object-cover rounded-2xl"
          />
        </div>

        {/* Article Content */}
        <div className="space-y-3 flex flex-col flex-grow">
          <h3
            className={`${cardStyles.textColor} font-bold text-lg leading-tight flex-grow`}
          >
            {title}
          </h3>

          <div className="flex items-center justify-between mt-auto">
            {/* --- MODIFICATION 2: Conditional layout for bottom text --- */}
            {isResepPage && resep ? (
              // New layout for Recipe cards
              <div className={`${cardStyles.textColor} font-medium text-base`}>
                <span>{resep.servings} servings</span>
                <div className="flex items-center gap-1.5">
                  <Image
                    src="/assets/artikel/resep-tasty/time.svg" // NOTE: Assumes you have a clock icon here
                    alt="Time"
                    width={16}
                    height={16}
                  />
                  <span className="mt-0.5">{resep.time}</span>
                </div>
              </div>
            ) : (
              // Original layout for Publication cards
              <span className={`${cardStyles.mutedTextColor} text-sm`}>
                {publikasi?.date}
              </span>
            )}

            {/* Read More Arrow */}
            <div
              className={`${cardStyles.arrowCircleBg} rounded-full w-8 h-8 flex items-center justify-center`}
            >
              <Image
                src={cardStyles.arrowSrc}
                alt="Read more arrow"
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
