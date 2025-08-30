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
      <div className="bg-[#003BE2] text-2xl text-[#B5FE28] px-1.5 py-0.25 w-fit mx-auto font-bricolage-grotesque-condensed font-bold">
        {label.toUpperCase()}
      </div>
      <div className="relative">
        <Image
          src="/assets/decorations/heart.svg"
          alt="Heart decoration"
          width={120}
          height={120}
          className="w-24 h-24 mx-auto"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-4xl font-bold text-[#003BE2] font-bricolage-grotesque-condensed">
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
