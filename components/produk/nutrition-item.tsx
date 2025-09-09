"use client";
import Image from "next/image";

interface NutritionItemProps {
  label: string;
  value: string;
  unit: string;
  align?: "center" | "left" | "right";
}

export default function NutritionItem({
  label,
  value,
  unit,
  align = "center",
}: NutritionItemProps) {
  const alignment =
    align === "left"
      ? "items-start text-left"
      : align === "right"
      ? "items-end text-right"
      : "items-center text-center";

  return (
    <div className={`text-center ${alignment}`.trim()}>
      <div className="bg-[#003BE2] text-xl lg:text-2xl text-[#B5FE28] px-1.5 py-[0.1em] lg:py-0.25 w-fit mx-auto font-bricolage-grotesque-condensed font-bold">
        {label.toUpperCase()}
      </div>
      <div className="relative">
        <Image
          src="/assets/decorations/heart.svg"
          alt="Heart decoration"
          width={120}
          height={120}
          className="w-20 h-20 lg:w-28 lg:h-28 xl:w-32 xl:h-32 mx-auto"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-4xl lg:text-5xl font-bold text-[#003BE2] font-bricolage-grotesque-condensed">
            {value}
          </span>
          <span className="text-xs text-bold text-[#003BE2] font-nunito -mt-2">
            {unit}
          </span>
        </div>
      </div>
    </div>
  );
}
