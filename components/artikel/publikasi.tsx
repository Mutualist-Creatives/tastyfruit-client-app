// components/landing-page/hero-section.tsx
import Image from "next/image";
import { CtaButton } from "@/components/ui/cta-button";

export default function Publikasi() {
  return (
    <section className="w-full">
      <div className="mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-[4fr_6fr] items-start gap-8 sm:gap-12 lg:gap-16">
          {/* Left Column: Content */}
          <div className="space-y-6 text-center lg:text-left text-[#003CE9] md:max-w-[65ch] mx-auto lg:mx-0 order-2 lg:order-1">
            {/* === MODIFIED PART START === */}
            {/* Wrapper for the stacked headings */}
            <div className="flex flex-col items-center lg:items-start gap-2">
              <div className="font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold text-5xl md:text-2xl bg-[#003BE2] px-2 py-0.5 mb-5">
                ARTIKEL TASTY
              </div>
              <div className="font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-5xl md:text-5xl bg-[#B5FE28] px-4 py-2">
                PUBLIKASI
              </div>
            </div>
            {/* === MODIFIED PART END === */}

            {/* Text Content */}
            <div className="space-y-4 sm:space-y-6 w-[75%]">
              <p className="text-md sm:text-base md:text-xl lg:text-lg leading-relaxed text-center lg:text-left">
                Mau tau informasi terbaru mengenai Tasty Fruit? Rubrik ini buat
                kalian!
              </p>
              <p className="text-md sm:text-base md:text-xl lg:text-lg leading-relaxed text-center lg:text-left">
                Dari acara pop-up booth Tasty Fruit®, tips memilih pisang
                terbaik, hingga{" "}
                <span className="italic">behind the scenes</span>, pastikan kamu
                selalu terhubung agar tidak ketinggalan informasi terbaru dari
                Tasty Fruit®.
              </p>
            </div>
            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start pt-2">
              <CtaButton py="1" px="2" href="/artikel/publikasi" color="blue">
                PELAJARI LEBIH LANJUT!
              </CtaButton>
            </div>
          </div>
          {/* Right Column: Main Graphic */}
          <div className="relative order-1 lg:order-2 ml-auto">
            {/* Main "Tastier! Happier!" Image */}
            <Image
              src="/assets/artikel/farmer.jpg"
              alt="Tasty Fruit Farmer"
              width={600}
              height={400}
              className="object-cover w-[475px] h-[550px] rounded-4xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
