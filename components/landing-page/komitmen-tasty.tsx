// components/landing-page/komitmen-tasty.tsx
import Image from "next/image";
import { CtaButton } from "@/components/ui/cta-button";

export default function KomitmenTasty() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8 lg:gap-16 items-center">
          {/* Left Column: Image Layout */}
          <div className="relative order-2 lg:order-1">
            {/* Main Flex: Left Full + Right 30/70 with Heart in Gap */}
            <div className="flex gap-3 sm:gap-4 lg:gap-6 h-[350px] sm:h-[450px] lg:h-[500px] xl:h-[550px]">
              {/* Left: Full Height Image */}
              <div className="w-1/2">
                <Image
                  src="/assets/komitmen/plantation-workers.jpg"
                  alt="Workers in banana plantation"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-md"
                />
              </div>

              {/* Right: 30/70 Split with Heart in Gap */}
              <div className="w-1/2 flex flex-col relative">
                {/* Top 30% */}
                <div className="h-[30%] mb-2 sm:mb-4">
                  <Image
                    src="/assets/komitmen/farmer-in-field.jpg"
                    alt="Farmer in field - top"
                    width={300}
                    height={120}
                    className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-md"
                  />
                </div>

                {/* Heart in the Gap */}
                <div className="absolute left-1/2 top-[30%] transform -translate-x-1/2 z-10">
                  <div className="bg-white rounded-full p-1 shadow-sm">
                    <Image
                      src="/assets/decorations/heart.svg"
                      alt="Heart"
                      width={20}
                      height={20}
                      className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"
                    />
                  </div>
                </div>

                {/* Bottom 70% */}
                <div className="flex-1">
                  <Image
                    src="/assets/komitmen/banana-detail.jpg"
                    alt="Banana detail - bottom"
                    width={300}
                    height={280}
                    className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-md"
                  />
                </div>
              </div>
            </div>

            {/* Komitmen Tasty Title SVG - Top Left Corner */}
            <div className="absolute top-0 left-0 z-20">
              <Image
                src="/assets/landing-page/komitmen-tasty/komitmen-tasty-title.svg"
                alt="Komitmen Tasty"
                width={200}
                height={80}
                className="w-28 h-auto sm:w-36 lg:w-44 xl:w-52"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="space-y-6 order-1 lg:order-2">
            {/* Quality Badges */}
            <div className="flex justify-center lg:justify-start gap-3 sm:gap-4 mb-6">
              <div className="bg-[#003CE9] rounded-full p-2 sm:p-3 shadow-lg">
                <Image
                  src="/assets/badges/mountain-farm.svg"
                  alt="Dataran Tinggi"
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
              </div>
              <div className="bg-[#003CE9] rounded-full p-2 sm:p-3 shadow-lg">
                <Image
                  src="/assets/badges/pesticide-free.svg"
                  alt="Pesticide Free"
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
              </div>
              <div className="bg-[#003CE9] rounded-full p-2 sm:p-3 shadow-lg">
                <Image
                  src="/assets/badges/quality-certified.svg"
                  alt="Quality Certified"
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
              </div>
            </div>

            {/* Content Text */}
            <div className="space-y-4 text-[#003CE9] text-center lg:text-left">
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                Buah kami tumbuh di kebun{" "}
                <span className="font-bold">dataran tinggi Sukabumi</span> yang
                kaya akan <span className="font-bold">mineral</span>. Hasilnya
                adalah pisang segar dengan rasa manis yang unik dengan tekstur
                lembut.
              </p>

              <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                Tasty Fruit® menumbuhkan pisang secara{" "}
                <span className="font-bold text-[#7ED321]">etis</span>,{" "}
                <span className="font-bold text-[#7ED321]">
                  selaras dengan irama alam
                </span>
                . Kami tidak hanya mengadopsi{" "}
                <span className="font-bold">
                  praktik berkelanjutan untuk menjaga bumi
                </span>
                , tetapi juga <span className="font-bold">merangkul</span> dan{" "}
                <span className="font-bold">memberdayakan komunitas lokal</span>
                .
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start pt-4">
              <CtaButton href="/komitmen" color="blue">
                PELAJARI LEBIH LANJUT →
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
