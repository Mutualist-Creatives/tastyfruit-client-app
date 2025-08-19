import Image from "next/image";
import { CtaButton } from "@/components/ui/cta-button";

export default function TastyUniverse() {
  const stripeColumns = Array.from({ length: 9 });
  return (
    <section className="w-full min-h-screen">
      <div className="absolute w-full left-0 h-10 bg-[#003BE2] z-10"></div>
      <div className="w-full flex items-center">
        <div className="w-2/6 h-screen">
          <div className="w-full h-full flex flex-row">
            <div className="w-[70%] h-full flex flex-col justify-center gap-6">
              {/* Tasty Universe Image */}
              <div className="relative">
                <Image
                  src="/assets/tasty-universe/tasty-universe-title.svg"
                  alt="Tasty Universe Title"
                  width={450}
                  height={250}
                  className="w-full max-w-[250px] sm:max-w-[400px] lg:max-w-[400px] h-auto mx-auto lg:mx-0"
                  priority
                />
              </div>

              {/* Description text */}
              <div className="space-y-4 text-blue-600 text-center lg:text-left">
                <p className="text-base sm:text-lg leading-relaxed">
                  Kenalan yuk sama maskot Tasty Fruit®!
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  Dengan kepribadian mereka yang unik dan super{" "}
                  <span className="italic">fun</span>, mereka siap bikin harimu
                  jadi lebih segar dan penuh dengan tawa.
                </p>
              </div>

              {/* CTA Button */}
              <div className="flex justify-start lg:justify-start">
                <CtaButton
                  href="/kisah-tasty"
                  color="green"
                  fontSize="text-3xl"
                >
                  SELANJUTNYA!
                </CtaButton>
              </div>
            </div>
          </div>
        </div>
        <div className="w-4/6 absolute right-0">
          <div className="flex justify-between h-screen">
            {stripeColumns.map((_, idx) => (
              <div key={idx} className="flex">
                <div className="w-5 h-full bg-[#B5FE28]"></div>
                <div className="w-5 h-full bg-[#003BE2]"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-4/6 h-full z-10">
          <div className="absolute z-30">
            <Image
              src="/assets/landing-page/tasty-universe/mishku.png"
              alt="Tasty Universe Title"
              width={430}
              height={610}
              className="object-contain h-[610px] w-[430px] drop-shadow-xl/50"
              priority
            />
          </div>
        </div>
      </div>
      <div className="absolute w-full left-0 h-10 bg-[#003BE2] z-10"></div>
    </section>
  );
}
