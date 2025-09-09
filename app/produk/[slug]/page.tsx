// app/produk/[slug]/page.tsx

import { notFound } from "next/navigation";
import Image from "next/image";
import { produkData } from "@/lib/produk-data";
import Ribbon from "@/components/produk/ribbon";
import FruitCard from "@/components/produk/fruit-card";
import NutritionItem from "@/components/produk/nutrition-item";
import HtmlContent from "@/components/ui/html-content";

interface ProdukDetailPageProps {
  params: {
    slug: string;
  };
}

export default async function ProdukDetailPage({
  params,
}: ProdukDetailPageProps) {
  // Find the product data based on slug
  const product = produkData.find((item) => item.slug === params?.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="w-full overflow-hidden">
      {/* "PRODUK TASTY" badge for mobile */}
      {/* ADJUSTED: Badge align-left */}
      <div className="flex justify-start px-6 pt-12 pb-4 md:hidden">
        <div className="font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold text-2xl bg-[#003BE2] px-2 py-0.5 w-fit">
          PRODUK TASTY
        </div>
      </div>
      {product.fruitType.map((fruit, index) => {
        const isOdd = index % 2 === 0;

        return (
          <section
            key={fruit.slug}
            className="w-full max-w-full 2xl:max-w-[1440px] mx-auto"
          >
            {/* ================================================================== */}
            {/* Mobile-only layout (hidden on md and up)                         */}
            {/* ================================================================== */}
            <div className="md:hidden px-6 pb-12 flex flex-col items-start text-left">
              {/* 1. Fruit Image Container */}
              <div className="relative w-full max-w-xs mx-auto mb-4">
                <div className="relative w-full h-[320px]">
                  <Image
                    src={fruit.image}
                    alt={fruit.name}
                    fill
                    sizes="(max-width: 768px) 320px"
                    className="object-contain object-center drop-shadow-lg"
                  />
                </div>
              </div>

              {/* 2. Quality Badges */}
              {/* ADJUSTED: Badges align-right (self-end) */}
              <div className="flex items-center self-start gap-2 mb-4">
                <Image
                  src="/assets/badges/highland-farm-blue.svg"
                  alt="Dataran Tinggi"
                  width={24}
                  height={32}
                  className="w-6 h-8 object-contain"
                />
                <Image
                  src="/assets/badges/pesticide-free-blue.svg"
                  alt="Pesticide Free"
                  width={24}
                  height={32}
                  className="w-6 h-8 object-contain"
                />
                <Image
                  src="/assets/badges/handpicked-blue.svg"
                  alt="Quality Certified"
                  width={24}
                  height={32}
                  className="w-6 h-8 object-contain"
                />
              </div>

              {/* 3. Fruit Name */}
              <h1 className="font-bricolage-grotesque-condensed text-[#003BE2] font-extrabold text-4xl bg-[#B5FE28] px-4 py-2 w-fit mb-4">
                {fruit.name.toUpperCase()}
              </h1>

              {/* 4. Description */}
              <HtmlContent
                className="text-[#003BE2] max-w-[45ch] leading-relaxed text-base font-nunito"
                content={fruit.description}
              />
            </div>
            {/* ================================================================== */}
            {/* Original layout is now hidden on mobile (shows on md and up) */}
            {/* ================================================================== */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center px-6 sm:px-10 lg:px-20 mx-auto py-12">
              {/* ... The rest of the code for desktop remains unchanged ... */}
              {isOdd ? (
                // Left to Right Layout
                <>
                  <div className="space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
                    <div className="font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold text-2xl bg-[#003BE2] px-2 py-0.5 w-fit">
                      PRODUK TASTY
                    </div>
                    <h1 className="font-bricolage-grotesque-condensed text-[#003BE2] font-extrabold text-4xl md:text-4xl lg:text-5xl xl:text-6xl bg-[#B5FE28] px-4 py-2 w-fit">
                      {fruit.name.toUpperCase()}
                    </h1>
                    <HtmlContent
                      className="text-[#003BE2] max-w-[45ch] md:max-w-[30ch] xl:max-w-[35ch] leading-relaxed text-base lg:text-lg font-nunito"
                      content={fruit.description}
                    />
                    <div className="flex items-center gap-3">
                      <Image
                        src="/assets/badges/highland-farm-blue.svg"
                        alt="Dataran Tinggi"
                        width={56}
                        height={56}
                        className="h-12 w-12"
                        style={{ objectFit: "contain" }}
                      />
                      <Image
                        src="/assets/badges/pesticide-free-blue.svg"
                        alt="Pesticide Free"
                        width={56}
                        height={56}
                        className="h-12 w-12"
                        style={{ objectFit: "contain" }}
                      />
                      <Image
                        src="/assets/badges/handpicked-blue.svg"
                        alt="Quality Certified"
                        width={56}
                        height={56}
                        className="h-12 w-12"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div className="pt-4 xl:pt-8 hidden md:block">
                      <Image
                        src="/assets/decorations/heart.svg"
                        alt="Heart decoration"
                        width={80}
                        height={80}
                        className="w-12 sm:w-16 lg:w-20 h-auto"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="relative w-full max-w-sm md:max-w-md h-[300px] md:h-[380px] lg:h-[450px]">
                      <Image
                        src={fruit.image}
                        alt={fruit.name}
                        fill
                        sizes="(max-width: 768px) 300px, (max-width: 1024px) 380px, 450px"
                        className="object-contain object-center drop-shadow-lg"
                      />
                    </div>
                  </div>
                </>
              ) : (
                // Right to Left Layout
                <>
                  <div className="order-2 md:order-1 flex items-center justify-center">
                    <div className="relative w-full max-w-sm md:max-w-md h-[300px] md:h-[380px] lg:h-[450px]">
                      <Image
                        src={fruit.image}
                        alt={fruit.name}
                        fill
                        sizes="(max-width: 768px) 300px, (max-width: 1024px) 380px, 450px"
                        className="object-contain object-center drop-shadow-lg"
                      />
                    </div>
                  </div>
                  <div className="order-1 md:order-2 space-y-6 text-center md:text-right flex flex-col items-center md:items-end">
                    <div className="font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold text-2xl bg-[#003BE2] px-2 py-0.5 w-fit">
                      PRODUK TASTY
                    </div>
                    <h1 className="font-bricolage-grotesque-condensed text-[#003BE2] font-extrabold text-4xl md:text-4xl lg:text-5xl xl:text-6xl bg-[#B5FE28] px-4 py-2 w-fit">
                      {fruit.name.toUpperCase()}
                    </h1>
                    <HtmlContent
                      className="text-[#003BE2] max-w-[45ch] md:max-w-[30ch] xl:max-w-[35ch] leading-relaxed text-base lg:text-lg font-nunito"
                      content={fruit.description}
                    />
                    <div className="flex items-center gap-3 justify-center md:justify-end">
                      <Image
                        src="/assets/badges/highland-farm-blue.svg"
                        alt="Dataran Tinggi"
                        width={56}
                        height={56}
                        className="h-12 w-12"
                        style={{ objectFit: "contain" }}
                      />
                      <Image
                        src="/assets/badges/pesticide-free-blue.svg"
                        alt="Pesticide Free"
                        width={56}
                        height={56}
                        className="h-12 w-12"
                        style={{ objectFit: "contain" }}
                      />
                      <Image
                        src="/assets/badges/handpicked-blue.svg"
                        alt="Quality Certified"
                        width={56}
                        height={56}
                        className="h-12 w-12"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div className="pt-8 flex justify-center md:justify-end hidden md:block">
                      <Image
                        src="/assets/decorations/heart.svg"
                        alt="Heart decoration"
                        width={80}
                        height={80}
                        className="w-12 sm:w-16 lg:w-20 h-auto"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </section>
        );
      })}

      {/* Nutrition Section */}
      <section
        className="relative w-full py-16"
        style={{
          background: `linear-gradient(to bottom, #B5FE2800, #B5FE28)`,
        }}
      >
        {/* ADJUSTED: Ribbon position and visibility */}
        <div className="hidden md:block absolute right-20 top-0 lg:right-30 xl:right-50 lg:top-5 xl:-top-5 z-20 pointer-events-none">
          <Ribbon fruitName={product.fruit} />
        </div>

        <div className="w-full h-auto mx-auto max-w-full 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-20">
          <div className="mb-16">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
              <NutritionItem
                label="Energi"
                value={product.nutrition.energy.split(" ")[0]}
                unit={product.nutrition.energy.split(" ")[1]}
              />
              <NutritionItem
                label="Lemak Total"
                value={product.nutrition.totalFat.split("g")[0]}
                unit="gram"
              />
              <NutritionItem
                label="Kolesterol"
                value={product.nutrition.cholesterol.split("mg")[0]}
                unit="mg"
              />
              <div className="hidden md:block"></div>
              <div className="hidden md:block"></div>
              <div className="hidden md:block"></div>
              <NutritionItem
                label="Serat"
                value={product.nutrition.fiber.split("g")[0]}
                unit="gram"
              />
              <NutritionItem
                label="Karbohidrat"
                value={product.nutrition.carbohydrates.split("g")[0]}
                unit="gram"
              />
              <NutritionItem
                label="Protein"
                value={product.nutrition.protein.split("g")[0]}
                unit="gram"
              />
              <NutritionItem
                label="Natrium"
                value={product.nutrition.sodium.split("mg")[0]}
                unit="mg"
              />
              <NutritionItem
                label="Magnesium"
                value={product.nutrition.magnesium.split("mg")[0]}
                unit="mg"
              />
              <NutritionItem
                label="Kalium"
                value={product.nutrition.potassium.split("mg")[0]}
                unit="mg"
              />
            </div>
          </div>

          {/* Bottom Section - Other Products */}
          {/* <div>
            <div className="flex flex-col items-center justify-center gap-8 mb-8">
              <Image
                src="/assets/produk/telusuri-produk-lainnya-title.svg"
                alt="Telusuri produk lainnya"
                width={420}
                height={64}
                className="h-12 md:h-14 lg:h-16 w-auto"
              />
              <div className="flex items-center justify-center gap-4 md:gap-8">
                {produkData
                  .filter((item) => item.slug !== params?.slug)
                  .sort(() => Math.random() - 0.5)
                  .slice(0, 2)
                  .map((item) => (
                    <div
                      key={item.id}
                      className="hidden sm:block flex-shrink-0"
                    >
                      <FruitCard
                        name={item.fruit}
                        image={item.fruitType[0].image}
                        layoutType={"layout-b"}
                      />
                    </div>
                  ))}
                <div className="hidden xs:block flex-shrink-0">
                  <Image
                    src="/assets/tasty-universe/mascots/png/mr-tasty.png"
                    alt="Mr. Tasty Mascot"
                    width={200}
                    height={200}
                    className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
                  />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}
