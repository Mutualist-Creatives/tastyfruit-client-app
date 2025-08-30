"use client";
import Image from "next/image";

type Layout = "layout-a" | "layout-b";

interface FruitCardProps {
  name: string;
  image: string;
  layoutType: Layout;
}

export default function FruitCard({ name, image, layoutType }: FruitCardProps) {
  const isBlue = layoutType === "layout-a"; // layout-a → blue holder/title, layout-b → green

  const holderSrc = isBlue
    ? "/assets/produk/image-holder-blue.svg"
    : "/assets/produk/image-holder-green.svg";

  const titleBg = isBlue
    ? "bg-[#B5FE28] text-[#003BE2]"
    : "bg-[#003BE2] text-[#B5FE28]";

  const badgeColor = isBlue ? "white" : "blue";
  const cardBg = isBlue ? "bg-[#B5FE28]" : "bg-[#003BE2]";

  return (
    <div className="w-full max-w-[255px]">
      {/* Card */}
      <div className={`relative rounded-[28px] p-3 ${cardBg}`}>
        {/* Image holder - inset style */}
        <div className="relative rounded-[24px] overflow-hidden h-[320px]">
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
            <div className="flex-1 flex items-center justify-center px-6">
              <Image
                src={image}
                alt={name}
                width={200}
                height={200}
                className="object-contain object-center max-h-[180px] drop-shadow-lg"
                style={{ objectPosition: "center" }}
              />
            </div>

            {/* Bottom section with badges and logo */}
            <div className="px-6 pb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex-shrink-0">
                    <Image
                      src={`/assets/badges/highland-farm-${badgeColor}.svg`}
                      alt="badge"
                      width={56}
                      height={56}
                      className="h-6 w-6"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src={`/assets/badges/pesticide-free-${badgeColor}.svg`}
                      alt="badge"
                      width={56}
                      height={56}
                      className="h-6 w-6"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src={`/assets/badges/handpicked-${badgeColor}.svg`}
                      alt="badge"
                      width={56}
                      height={56}
                      className="h-6 w-6"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>
                <Image
                  src="/assets/tasty-fruit-logo.svg"
                  alt="Tasty Fruit"
                  width={72}
                  height={20}
                  className="w-6 h-6"
                />
              </div>
              {/* Title bar */}
              <div
                className={`text-center font-bricolage-grotesque-condensed font-extrabold text-lg w-fit mx-auto px-1 mt-3 mb-7 ${titleBg}`}
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
