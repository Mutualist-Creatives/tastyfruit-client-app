// app/produk/[slug]/page.tsx

import { notFound } from "next/navigation";
import Image from "next/image";
import { produkData, ProdukData, FruitType } from "@/lib/produk-data";
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

  // Prepare data for "Other Products" section
  const otherProducts = produkData
    .filter((item) => item.slug !== params?.slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Mobile-only "PRODUK TASTY" badge */}
      <MobileBadge />

      {/* Product Sections - Each fruit type gets its own section */}
      {product.fruitType.map((fruit, index) => (
        <ProductSection key={fruit.slug} fruit={fruit} index={index} />
      ))}

      {/* Nutrition Information Section */}
      <NutritionSection product={product} otherProducts={otherProducts} />
    </div>
  );
}

// ==================== COMPONENT DEFINITIONS ====================

function MobileBadge() {
  return (
    <div className="flex justify-start px-6 pt-12 pb-4 md:hidden">
      <div className="font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold text-2xl bg-[#003BE2] px-2 py-0.5 w-fit">
        PRODUK TASTY
      </div>
    </div>
  );
}

function ProductSection({ fruit, index }: { fruit: FruitType; index: number }) {
  const isOdd = index % 2 === 0;

  return (
    <section className="w-full max-w-full 2xl:max-w-[1440px] mx-auto">
      {/* Mobile Layout (hidden on md and up) */}
      <MobileProductLayout fruit={fruit} />

      {/* Desktop Layout (hidden on mobile, shows on md and up) */}
      <DesktopProductLayout fruit={fruit} isOdd={isOdd} />
    </section>
  );
}

function MobileProductLayout({ fruit }: { fruit: FruitType }) {
  return (
    <div className="md:hidden px-4 sm:px-6 pb-12 flex flex-col items-start text-left">
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
      <QualityBadges alignment="self-start" />

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
  );
}

function DesktopProductLayout({
  fruit,
  isOdd,
}: {
  fruit: FruitType;
  isOdd: boolean;
}) {
  return (
    <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center px-6 sm:px-10 lg:px-20 mx-auto py-12">
      {isOdd ? (
        <LeftToRightLayout fruit={fruit} />
      ) : (
        <RightToLeftLayout fruit={fruit} />
      )}
    </div>
  );
}

function LeftToRightLayout({ fruit }: { fruit: FruitType }) {
  return (
    <>
      {/* Content on the left */}
      <ProductContent
        fruit={fruit}
        textAlign="text-center md:text-left"
        flexAlign="items-center md:items-start"
        badgeAlign="gap-3"
        heartJustify="pt-4 xl:pt-8 hidden md:block"
      />

      {/* Image on the right */}
      <ProductImage fruit={fruit} />
    </>
  );
}

function RightToLeftLayout({ fruit }: { fruit: FruitType }) {
  return (
    <>
      {/* Image on the left */}
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

      {/* Content on the right */}
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
        <div className="pt-8 justify-center md:justify-end hidden md:block">
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
  );
}

function ProductContent({
  fruit,
  textAlign,
  flexAlign,
  badgeAlign,
  heartJustify,
}: {
  fruit: FruitType;
  textAlign: string;
  flexAlign: string;
  badgeAlign: string;
  heartJustify: string;
}) {
  return (
    <div className={`space-y-6 ${textAlign} flex flex-col ${flexAlign}`}>
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
      <div className={`flex items-center ${badgeAlign}`}>
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
      <div className={heartJustify}>
        <Image
          src="/assets/decorations/heart.svg"
          alt="Heart decoration"
          width={80}
          height={80}
          className="w-12 sm:w-16 lg:w-20 h-auto"
        />
      </div>
    </div>
  );
}

function ProductImage({ fruit }: { fruit: FruitType }) {
  return (
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
  );
}

function QualityBadges({ alignment }: { alignment: string }) {
  return (
    <div className={`flex items-center ${alignment} gap-2 mb-4`}>
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
  );
}

function NutritionSection({
  product,
  otherProducts,
}: {
  product: ProdukData;
  otherProducts: ProdukData[];
}) {
  return (
    <section
      className="relative mx-auto max-w-full 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-20 pt-16"
      style={{ background: `linear-gradient(to bottom, #B5FE2800, #B5FE28)` }}
    >
      {/* Desktop Ribbon */}
      <div className="hidden md:block absolute right-20 top-0 lg:right-30 xl:right-50 lg:top-5 xl:-top-5 z-20 pointer-events-none">
        <Ribbon fruitName={product.fruit} />
      </div>

      <div className="w-full h-auto mx-auto">
        <div className="mb-16">
          {/* Mobile Ribbon */}
          <div className="w-full h-auto mb-12 flex justify-center items-center">
            <div className="h-auto block md:hidden relative pointer-events-none">
              <Ribbon fruitName={product.fruit} />
            </div>
          </div>

          {/* Nutrition Grid */}
          <NutritionGrid product={product} />
        </div>

        {/* Other Products Section */}
        <OtherProductsSection otherProducts={otherProducts} product={product} />
      </div>
    </section>
  );
}

function NutritionGrid({ product }: { product: ProdukData }) {
  return (
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
      {/* WRAPPER: To center the last item on the 2-column mobile grid */}
      <div className="col-span-2 sm:col-span-1 flex justify-center">
        <NutritionItem
          label="Kalium"
          value={product.nutrition.potassium.split("mg")[0]}
          unit="mg"
        />
      </div>
    </div>
  );
}

// ==================== MODIFIED COMPONENT ====================

function OtherProductsSection({
  otherProducts,
  product,
}: {
  otherProducts: ProdukData[];
  product: ProdukData;
}) {
  return (
    // No longer needs to be "relative"
    <div className="w-full max-w-full 2xl:max-w-[1440px] mx-auto pb-12">
      {/* Using justify-between to space out the three items on desktop */}
      <div className="h-full md:h-[10em] lg:h-[16em] flex flex-col md:flex-row items-center justify-center lg:justify-center gap-8 lg:gap-10 xl:gap-12">
        {/* 1. Left Content: Title */}
        <div className="flex-shrink-0 self-center md:self-start">
          <Image
            src="/assets/produk/telusuri-produk-lainnya-title.svg"
            alt="Telusuri produk lainnya"
            width={420}
            height={64}
            className="h-auto w-64 md:w-44 lg:w-auto lg:h-36"
          />
        </div>

        {/* 2. Center Content: Two FruitCards */}
        <div className="self-center">
          <div className="flex flex-row items-center justify-center gap-4 md:gap-4">
            {otherProducts.map((item) => (
              <div key={item.id}>
                <FruitCard
                  name={item.fruit}
                  image={item.fruitType[0].image}
                  layoutType={"layout-b"}
                  href={item.fruit.toLowerCase()}
                  variant="simple"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 3. Right Content: Mascot (now a flex item) */}
        <div className="self-center md:self-end pointer-events-none">
          <Image
            src={product.gesture}
            alt={`Mascot ${product.fruit}`}
            width={400}
            height={400}
            className="h-auto w-88 sm:w-64 md:w-72 lg:w-76 xl:w-88 drop-shadow-md translate-y-1/3 md:translate-y-1/2"
          />
        </div>
      </div>
    </div>
  );
}