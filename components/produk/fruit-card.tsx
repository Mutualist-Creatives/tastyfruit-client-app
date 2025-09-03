"use client";
import Image from "next/image";

type Layout = "layout-a" | "layout-b";

interface FruitCardProps {
  name: string;
  image: string;
  layoutType: Layout;
  isActive?: boolean;
}

export default function FruitCard({
  name,
  image,
  layoutType,
  isActive = false,
}: FruitCardProps) {
  const isBlue = layoutType === "layout-a"; // layout-a → blue holder/title, layout-b → green

  const holderSrc = isBlue
    ? "/assets/produk/image-holder-blue.svg"
    : "/assets/produk/image-holder-green.svg";

  const titleBg = isBlue
    ? "bg-[#B5FE28] text-[#003BE2]"
    : "bg-[#003BE2] text-[#B5FE28]";

  const badgeColor = isBlue ? "white" : "blue";
  const cardBg = isBlue ? "bg-[#B5FE28]" : "bg-[#003BE2]";
  const glowClass = isActive
    ? isBlue
      ? "shadow-[0_0_40px_rgba(255,255,255,0.7)]"
      : "shadow-[0_0_40px_rgba(181,254,40,0.6)]"
    : "shadow-none";

  return (
    <div className="w-full max-w-[320px] md:max-w-[200px] lg:max-w-[350px]">
      {/* Card */}
      <div
        className={`relative md:rounded-2xl lg:rounded-[28px] p-4 md:p-5 ${cardBg} ${glowClass} transition-shadow duration-300`}
      >
        {/* Image holder - inset style */}
        <div className="relative lg:rounded-[24px] overflow-hidden h-[320px] md:h-[200px] lg:h-[425px]">
          <Image
            src={holderSrc}
            alt="holder"
            fill
            sizes="(max-width: 768px) 20rem, 22rem"
            className="object-contain"
          />

          {/* Content inside image holder */}
          <div className="relative z-10 h-full flex flex-col">
            {/* Fruit image - perfectly centered within upper area */}
            <div className="relative flex-1 px-6 md:px-8">
              <Image
                src={image}
                alt={name}
                fill
                sizes="(max-width: 640px) 220px, (max-width: 1024px) 300px, 360px"
                className="object-contain object-center drop-shadow-lg"
                style={{ objectPosition: "center" }}
              />
            </div>

            {/* Bottom section with badges and logo */}
            <div className="px-6 md:px-8 pb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex-shrink-0">
                    <Image
                      src={`/assets/badges/highland-farm-${badgeColor}.svg`}
                      alt="badge"
                      width={80}
                      height={80}
                      className="h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src={`/assets/badges/pesticide-free-${badgeColor}.svg`}
                      alt="badge"
                      width={80}
                      height={80}
                      className="h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src={`/assets/badges/handpicked-${badgeColor}.svg`}
                      alt="badge"
                      width={80}
                      height={80}
                      className="h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>
                <Image
                  src="/assets/tasty-fruit-logo.svg"
                  alt="Tasty Fruit"
                  width={96}
                  height={24}
                  className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10"
                />
              </div>
              {/* Title bar */}
              <div
                className={`text-center font-bricolage-grotesque-condensed font-extrabold text-xl md:text-2xl w-fit mx-auto px-2 mt-4 mb-8 ${titleBg}`}
              >
                {name.toUpperCase()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
