// components/landing-page/komitmen-tasty.tsx
import Image from "next/image";
import { CtaButton } from "@/components/ui/cta-button";

export default function KomitmenTasty() {
  return (
    <section className="w-full min-h-screen max-h-[700px] flex items-center overflow-hidden">
      <div className="mx-auto max-w-7xl w-full h-full">
        {/* Container with responsive layout */}
        <div className="relative flex h-full flex-col items-stretch gap-4 lg:flex-row lg:gap-6">
          {/* Images Section - 70% width on desktop */}
          <div className="relative order-2 flex-1 min-h-[500px] w-full lg:order-1 lg:w-[65%] lg:flex-none">
            {/* Komitmen Tasty Title SVG */}
            <div className="absolute -top-6 left-0 z-20 md:-top-8 lg:-top-12">
              <Image
                src="/assets/landing-page/komitmen-tasty/komitmen-tasty-title.svg"
                alt="Komitmen Tasty"
                width={275}
                height={200}
                className="h-[100px] w-[150px] md:h-[120px] md:w-[180px] lg:h-[200px] lg:w-[275px]"
                style={{ objectFit: "contain" }}
              />
            </div>

            {/* Image Collage */}
            <div className="flex h-full gap-2 pl-6 md:gap-3 md:pl-8 lg:gap-5 lg:pl-20">
              {/* Left Image (Full Height) */}
              <div className="w-[60%] h-full">
                <div className="relative w-full h-full">
                  <Image
                    src="/assets/landing-page/komitmen-tasty/jpg/photo-1.jpg"
                    alt="Workers in banana plantation"
                    fill
                    className="rounded-2xl object-cover lg:rounded-3xl"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 40vw, 30vw"
                  />
                </div>
              </div>

              {/* Right Column (Top/Bottom Images) */}
              <div className="relative flex w-[40%] h-full flex-col gap-1 md:gap-2 lg:gap-5">
                <div className="flex-[0.3] relative">
                  <Image
                    src="/assets/landing-page/komitmen-tasty/jpg/photo-2.jpg"
                    alt="Farmer in field - top"
                    fill
                    className="rounded-2xl object-cover lg:rounded-3xl"
                    sizes="(max-width: 768px) 30vw, (max-width: 1024px) 25vw, 20vw"
                  />
                </div>
                <div className="flex-[0.7] relative">
                  <Image
                    src="/assets/landing-page/komitmen-tasty/jpg/photo-3.jpg"
                    alt="Banana detail - bottom"
                    fill
                    className="rounded-2xl object-cover lg:rounded-3xl"
                    sizes="(max-width: 768px) 30vw, (max-width: 1024px) 25vw, 20vw"
                  />
                </div>
                {/* Heart decoration positioned between images */}
                <div className="absolute -left-3 top-[30%] z-10 -translate-x-1/2 -translate-y-1/2 transform lg:-left-4">
                  <div className="rounded-full">
                    <Image
                      src="/assets/decorations/heart.svg"
                      alt="Heart"
                      width={24}
                      height={24}
                      className="h-4 w-4 sm:h-5 sm:w-5 lg:h-24 lg:w-24"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section - 30% width on desktop */}
          <div className="order-1 flex w-full flex-col justify-end space-y-3 lg:order-2 lg:w-[35%] lg:space-y-4 lg:flex-none">
            {/* Quality Badges */}
            <div className="flex justify-center gap-2 lg:justify-start flex-shrink-0">
              <div className="flex-shrink-0">
                <Image
                  src="/assets/badges/highland-farm.svg"
                  alt="Dataran Tinggi"
                  width={56}
                  height={56}
                  className="h-10 w-10 md:h-12 md:w-12"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/assets/badges/pesticide-free.svg"
                  alt="Pesticide Free"
                  width={56}
                  height={56}
                  className="h-10 w-10 md:h-12 md:w-12"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/assets/badges/handpicked.svg"
                  alt="Quality Certified"
                  width={56}
                  height={56}
                  className="h-10 w-10 md:h-12 md:w-12"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>

            {/* Content Text */}
            <div className="space-y-3 text-center text-[#003CE9] lg:space-y-4 lg:text-left flex-shrink-0">
              <p className="text-xs leading-relaxed sm:text-sm lg:text-lg lg:leading-5 xl:text-base xl:leading-6">
                Buah kami tumbuh di kebun{" "}
                <span className="font-bold">dataran tinggi Sukabumi</span> yang
                kaya akan <span className="font-bold">mineral</span>. Hasilnya
                adalah pisang segar dengan rasa manis yang unik dengan tekstur
                lembut.
              </p>
              <p className="text-xs leading-relaxed sm:text-sm lg:text-lg lg:leading-5 xl:text-base xl:leading-6">
                Tasty Fruit® menumbuhkan pisang secara{" "}
                <span className="font-bold text-[#003CE9]">etis</span>,{" "}
                <span className="font-bold text-[#003CE9]">
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
            <div className="flex justify-center pt-2 lg:justify-start flex-shrink-0">
              <CtaButton href="/komitmen" color="blue">
                PELAJARI LEBIH LANJUT
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
