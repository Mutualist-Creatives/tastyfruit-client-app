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
  const isBlue = layoutType === "layout-a"; // layout-a → blue theme, layout-b → green theme

  // Asset paths
  const holderSrc = isBlue
    ? "/assets/produk/image-holder-blue.svg"
    : "/assets/produk/image-holder-green.svg";

  // Color schemes
  const titleBg = isBlue
    ? "bg-[#B5FE28] text-[#003BE2]"
    : "bg-[#003BE2] text-[#B5FE28]";

  const badgeColor = isBlue ? "white" : "blue";
  const cardBg = isBlue ? "bg-[#B5FE28]" : "bg-[#003BE2]";

  // Active state glow effect
  const glowClass = isActive
    ? isBlue
      ? "shadow-[0_0_40px_rgba(255,255,255,0.7)]"
      : "shadow-[0_0_40px_rgba(181,254,40,0.6)]"
    : "shadow-none";

  return (
    <div className="w-full max-w-[320px] md:max-w-[250px] lg:max-w-[300px] xl:max-w-[350px] mx-auto">
      {/* Main Card Container */}
      <div
        className={`relative rounded-2xl lg:rounded-[28px] p-4 md:p-5 ${cardBg} ${glowClass} transition-shadow duration-300`}
      >
        {/* Image Holder Container */}
        <div className="relative rounded-2xl lg:rounded-[24px] overflow-hidden h-[320px] md:h-[275px] lg:h-[350px] xl:h-[425px]">
          {/* Background Holder */}
          <Image
            src={holderSrc}
            alt="Card background holder"
            fill
            sizes="(max-width: 768px) 320px, (max-width: 1024px) 300px, (max-width: 1280px) 300px, 350px"
            className="object-contain"
          />

          {/* Card Content */}
          <div className="relative z-10 h-full flex flex-col">
            {/* Fruit Image Section */}
            <div className="relative flex-1 px-6 md:px-6 lg:px-6 xl:px-8">
              <Image
                src={image}
                alt={name}
                fill
                sizes="(max-width: 768px) 220px, (max-width: 1024px) 240px, (max-width: 1280px) 240px, 280px"
                className="object-contain object-center drop-shadow-lg"
                style={{ objectPosition: "center" }}
              />
            </div>

            {/* Bottom Section with Badges and Logo */}
            <div className="px-6 md:px-6 lg:px-6 xl:px-8 pb-6 md:pb-6 lg:pb-6">
              {/* Badges and Logo Row */}
              <div className="flex items-center justify-between mb-2">
                {/* Badges Group */}
                <div className="flex items-center gap-1 md:gap-1 lg:gap-2">
                  <div className="flex-shrink-0">
                    <Image
                      src={`/assets/badges/highland-farm-${badgeColor}.svg`}
                      alt="Highland Farm badge"
                      width={24}
                      height={24}
                      className="h-4 w-4 md:h-3 md:w-3 lg:h-5 lg:w-5 xl:h-6 xl:w-6"
                    />
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src={`/assets/badges/pesticide-free-${badgeColor}.svg`}
                      alt="Pesticide Free badge"
                      width={24}
                      height={24}
                      className="h-4 w-4 md:h-3 md:w-3 lg:h-5 lg:w-5 xl:h-6 xl:w-6"
                    />
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src={`/assets/badges/handpicked-${badgeColor}.svg`}
                      alt="Handpicked badge"
                      width={24}
                      height={24}
                      className="h-4 w-4 md:h-3 md:w-3 lg:h-5 lg:w-5 xl:h-6 xl:w-6"
                    />
                  </div>
                </div>

                {/* Logo */}
                <div className="flex-shrink-0">
                  <Image
                    src="/assets/tasty-fruit-logo.svg"
                    alt="Tasty Fruit"
                    width={40}
                    height={40}
                    className="w-7 h-7 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10"
                  />
                </div>
              </div>

              {/* Fruit Name Title */}
              <div
                className={`text-center font-bricolage-grotesque-condensed font-extrabold text-lg md:text-sm lg:text-xl xl:text-2xl w-fit mx-auto px-2 py-1 ${titleBg}`}
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
