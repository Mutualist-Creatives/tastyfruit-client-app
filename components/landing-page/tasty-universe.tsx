import Image from "next/image";
import { CtaButton } from "@/components/ui/cta-button";

export default function TastyUniverse() {
  const stripeColumns = Array.from({ length: 9 });

  return (
    <section className="w-full min-h-screen relative overflow-hidden">
      {/* Top blue stripe */}
      <div className="absolute top-0 w-full h-13 bg-[#003BE2] z-10"></div>

      <div className="w-full flex items-center min-h-screen">
        {/* Left content section */}
        <div className="w-[40%] h-screen flex items-center z-20">
          <div className="flex flex-col justify-center gap-6 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-20 font-nunito mr-">
            {/* Tasty Universe Image */}
            <div className="relative">
              <Image
                src="/assets/tasty-universe/tasty-universe-title.svg"
                alt="Tasty Universe Title"
                width={450}
                height={250}
                className="w-full max-w-[250px] sm:max-w-[400px] lg:max-w-[400px] h-auto"
                priority
              />
            </div>

            {/* Description text */}
            <div className="space-y-4 text-blue-600">
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
            <div className="flex">
              <CtaButton href="/kisah-tasty" color="green" fontSize="text-3xl">
                SELANJUTNYA!
              </CtaButton>
            </div>
          </div>
        </div>

        {/* Right section with stripes and image */}
        <div className="w-4/6 h-screen relative">
          {/* Stripe columns background */}
          <div className="absolute inset-0 flex justify-between">
            {stripeColumns.map((_, idx) => (
              <div key={idx} className="flex">
                <div className="w-5 h-full bg-[#B5FE28]"></div>
                <div className="w-5 h-full bg-[#003BE2]"></div>
              </div>
            ))}
          </div>

          {/* Mascot Characters */}
          {/* Lime/Green character - top left - bigger and extending out */}
          <div className="absolute -top-10 left-10 z-20">
            <Image
              src="/assets/landing-page/tasty-universe/oishi-maru.png"
              alt="Oishimaru"
              width={400}
              height={350}
              className="object-contain w-auto h-auto drop-shadow-xl"
              priority
            />
          </div>

          {/* Dragon Fruit character - bottom center - bigger and extending out */}
          <div className="absolute -bottom-25 -left-32 z-30">
            <Image
              src="/assets/landing-page/tasty-universe/mishku.png"
              alt="Mishku"
              width={500}
              height={350}
              className="object-contain w-auto h-auto drop-shadow-xl"
              priority
            />
          </div>

          {/* Banana character - right side - bigger and extending out */}
          <div className="absolute top-15 right-0 z-20">
            <Image
              src="/assets/landing-page/tasty-universe/mr-tasty.png"
              alt="Mr Tasty"
              width={425}
              height={400}
              className="object-contain w-auto h-auto drop-shadow-xl"
              priority
            />
          </div>

          {/* Decorative Stars */}
          <div className="absolute top-[20%] left-[25%] z-10">
            <Image
              src="/assets/decorations/star.svg"
              alt="Star"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </div>

          <div className="absolute bottom-[30%] right-[25%] z-10">
            <Image
              src="/assets/decorations/star.svg"
              alt="Star"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </div>

          <div className="absolute top-[60%] left-[5%] z-10">
            <Image
              src="/assets/decorations/star.svg"
              alt="Star"
              width={16}
              height={16}
              className="w-4 h-4"
            />
          </div>
        </div>
      </div>

      {/* Bottom blue stripe */}
      <div className="absolute bottom-0 w-full h-13 bg-[#003BE2] z-10"></div>
    </section>
  );
}
