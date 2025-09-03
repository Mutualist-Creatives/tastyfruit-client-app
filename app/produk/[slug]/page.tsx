import { notFound } from "next/navigation";
import Image from "next/image";
import { produkData } from "@/lib/produk-data";
import FruitCard from "@/components/produk/fruit-card";
import NutritionItem from "@/components/produk/nutrition-item";
import HtmlContent from "@/components/ui/html-content";

interface ProdukDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ProdukDetailPage({ params }: ProdukDetailPageProps) {
  // Find the product data based on slug
  const product = produkData.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="w-full">
      {product.fruitType.map((fruit, index) => {
        const isOdd = index % 2 === 0; // 0-based index, so even index = odd section (left to right)

        return (
          <section
            key={fruit.slug}
            className="w-full max-w-full md:max-w-[1440px] mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-8 lg:px-20 max-w-7xl mx-auto py-20">
              {isOdd ? (
                // Left to Right Layout (Odd sections: 0, 2, 4...)
                <>
                  {/* Left Content */}
                  <div className="space-y-6">
                    {/* "PRODUK TASTY" Badge */}
                    <div className="font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold text-2xl bg-[#003BE2] px-2 py-0.5 w-fit">
                      PRODUK TASTY
                    </div>

                    {/* Fruit Name */}
                    <h1 className="font-bricolage-grotesque-condensed text-[#003BE2] font-extrabold text-5xl md:text-6xl bg-[#B5FE28] px-4 py-2 w-fit">
                      {fruit.name.toUpperCase()}
                    </h1>

                    {/* Description */}
                    <HtmlContent
                      className="text-[#003BE2] max-w-[45ch] leading-relaxed text-lg font-nunito"
                      content={fruit.description}
                    />

                    {/* Quality Badges */}
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

                    {/* Heart Decoration */}
                    <div className="mt-[5em]">
                      <Image
                        src="/assets/decorations/heart.svg"
                        alt="Heart decoration"
                        width={80}
                        height={80}
                        className="w-12 sm:w-16 lg:w-20 h-auto"
                      />
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="flex items-center justify-center">
                    <div className="relative w-full max-w-md h-[280px] md:h-[360px] lg:h-[420px]">
                      <Image
                        src={fruit.image}
                        alt={fruit.name}
                        fill
                        sizes="(max-width: 768px) 280px, (max-width: 1024px) 360px, 420px"
                        className="object-contain object-center drop-shadow-lg"
                      />
                    </div>
                  </div>
                </>
              ) : (
                // Right to Left Layout (Even sections: 1, 3, 5...)
                <>
                  {/* Right Content */}
                  <div className="order-2 lg:order-1 flex items-center justify-center">
                    <div className="relative w-full max-w-md h-[280px] md:h-[360px] lg:h-[420px]">
                      <Image
                        src={fruit.image}
                        alt={fruit.name}
                        fill
                        sizes="(max-width: 768px) 280px, (max-width: 1024px) 360px, 420px"
                        className="object-contain object-center drop-shadow-lg"
                      />
                    </div>
                  </div>

                  {/* Left Content */}
                  <div className="order-1 lg:order-2 space-y-6 text-right">
                    {/* "PRODUK TASTY" Badge */}
                    <div className="font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold text-2xl bg-[#003BE2] px-2 py-0.5 w-fit ml-auto">
                      PRODUK TASTY
                    </div>

                    {/* Fruit Name */}
                    <h1 className="font-bricolage-grotesque-condensed text-[#003BE2] font-extrabold text-5xl md:text-6xl bg-[#B5FE28] px-4 py-2 w-fit ml-auto">
                      {fruit.name.toUpperCase()}
                    </h1>

                    {/* Description */}
                    <HtmlContent
                      className="text-[#003BE2] max-w-[45ch] leading-relaxed text-lg ml-auto"
                      content={fruit.description}
                    />

                    {/* Quality Badges */}
                    <div className="flex items-center gap-3 justify-end">
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

                    {/* Heart Decoration */}
                    <div className="mt-[5em] flex justify-end">
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
        className="w-full py-16"
        style={{
          background: `linear-gradient(to bottom, #B5FE2800, #B5FE28)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          {/* Top Section - Nutrition Info */}
          <div className="mb-16">
            {/* First Row - 3 Nutrisi + Banner */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
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

              {/* Banner KANDUNGAN ALAMI DARI {buah} */}
              <div className="flex items-center justify-center">
                <div className="bg-[#003BE2] text-[#B5FE28] px-4 py-2 w-fit transform rotate-12 font-bricolage-grotesque-condensed font-bold text-center">
                  <div className="text-lg">KANDUNGAN ALAMI</div>
                  <div className="text-lg">
                    DARI {product.fruit.toUpperCase()}!
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row - 6 Nutrisi */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
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
          <div>
            <div className="flex items-center justify-center gap-8 mb-8">
              {/* Title Image */}
              <Image
                src="/assets/produk/telusuri-produk-lainnya-title.svg"
                alt="Telusuri produk lainnya"
                width={420}
                height={64}
                className="h-12 md:h-14 lg:h-16 w-auto"
              />
              {/* Product Cards using FruitCard component */}
              {produkData
                .filter((item) => item.slug !== params.slug)
                .sort(() => Math.random() - 0.5)
                .slice(0, 2)
                .map((item) => (
                  <div key={item.id} className="flex-shrink-0">
                    <FruitCard
                      name={item.fruit}
                      image={item.fruitType[0].image}
                      layoutType={"layout-b"}
                    />
                  </div>
                ))}

              {/* Mascot */}
              <div className="flex-shrink-0">
                <Image
                  src="/assets/tasty-universe/mascots/png/mr-tasty.png"
                  alt="Mr. Tasty Mascot"
                  width={200}
                  height={200}
                  className="w-32 h-32 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
