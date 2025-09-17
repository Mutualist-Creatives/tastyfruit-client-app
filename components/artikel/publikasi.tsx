import Image from "next/image";
import { CtaButton } from "@/components/ui/cta-button";

export default function Publikasi() {
  return (
    <section className="w-full h-auto">
      <div className="mx-auto">
        {/* ================================================================== */}
        {/* === MOBILE LAYOUT (<640px) ===                                   */}
        {/* ================================================================== */}
        <div className="sm:hidden flex flex-col items-center text-center">
          {/* NEW: "ARTIKEL TASTY" badge added back for mobile, aligned left */}
          <div className="w-full flex justify-start mb-6">
            <div className="font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold text-2xl bg-[#003BE2] px-2 py-0.5">
              ARTIKEL TASTY
            </div>
          </div>

          <div className="font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-5xl bg-[#B5FE28] px-4 py-2 mb-6">
            PUBLIKASI
          </div>

          <div className="relative w-full h-[300px] rounded-4xl overflow-hidden mb-8">
            <Image
              src="/assets/artikel/farmer.jpg"
              alt="Tasty Fruit Farmer"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>

          <div className="space-y-4 text-center text-[#003CE9] mb-8 max-w-prose">
            <p className="text-lg leading-relaxed">
              Mau tau informasi terbaru mengenai Tasty Fruit? Rubrik ini buat
              kalian!
            </p>
            <p className="text-lg leading-relaxed">
              Dari acara pop-up booth Tasty Fruit®, tips memilih pisang terbaik,
              hingga <span className="italic">behind the scenes</span>, pastikan
              kamu selalu terhubung agar tidak ketinggalan informasi terbaru
              dari Tasty Fruit®.
            </p>
          </div>

          <div className="flex justify-center">
            <CtaButton py="1" px="2" href="/artikel/publikasi" color="blue">
              PELAJARI LEBIH LANJUT!
            </CtaButton>
          </div>
        </div>

        {/* ================================================================== */}
        {/* === TABLET LAYOUT (640px - 1023px) ===                           */}
        {/* ================================================================== */}
        <div className="hidden sm:grid grid-cols-2 gap-12 items-center">
          {/* ... (Tablet layout remains unchanged) ... */}
          <div className="lg:hidden flex flex-col items-start text-left space-y-6 text-[#003CE9]">
            <div className="flex flex-col items-start gap-2">
              <div className="font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold text-2xl bg-[#003BE2] px-2 py-0.5">
                ARTIKEL TASTY
              </div>
              <div className="font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-5xl bg-[#B5FE28] px-4 py-2">
                PUBLIKASI
              </div>
            </div>
            <div className="space-y-4 max-w-prose">
              <p className="text-lg leading-relaxed">
                Mau tau informasi terbaru mengenai Tasty Fruit? Rubrik ini buat
                kalian!
              </p>
              <p className="text-lg leading-relaxed">
                Dari acara pop-up booth Tasty Fruit®, tips memilih pisang
                terbaik, hingga{" "}
                <span className="italic">behind the scenes</span>, pastikan kamu
                selalu terhubung agar tidak ketinggalan informasi terbaru dari
                Tasty Fruit®.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 pt-2">
              <CtaButton py="1" px="2" href="/artikel/publikasi" color="blue">
                PELAJARI LEBIH LANJUT!
              </CtaButton>
              <div className="hidden md:block">
                <Image
                  src="/assets/decorations/heart.svg"
                  alt="Heart decoration"
                  width={64}
                  height={64}
                  className="w-16 h-auto"
                />
              </div>
            </div>
          </div>
          <div className="lg:hidden relative w-full h-[450px] rounded-4xl overflow-hidden">
            <Image
              src="/assets/artikel/farmer.jpg"
              alt="Tasty Fruit Farmer"
              fill
              className="object-cover"
              sizes="(min-width: 640px) 50vw, 100vw"
              priority
            />
          </div>
        </div>

        {/* ================================================================== */}
        {/* === DESKTOP LAYOUT (>=1024px) ===                                */}
        {/* ================================================================== */}
        <div className="hidden lg:grid grid-cols-[4fr_6fr] items-start gap-16">
          {/* ... (Desktop layout remains unchanged) ... */}
          <div className="space-y-6 text-left text-[#003CE9]">
            <div className="flex flex-col items-start gap-2">
              <div className="font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold text-2xl bg-[#003BE2] px-2 py-0.5 mb-5">
                ARTIKEL TASTY
              </div>
              <div className="font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-5xl bg-[#B5FE28] px-4 py-2">
                PUBLIKASI
              </div>
            </div>
            <div className="max-w-prose xl:w-[70%] space-y-6">
              <p className="text-lg leading-relaxed">
                Mau tau informasi terbaru mengenai Tasty Fruit? Rubrik ini buat
                kalian!
              </p>
              <p className="text-lg leading-relaxed">
                Dari acara pop-up booth Tasty Fruit®, tips memilih pisang
                terbaik, hingga{" "}
                <span className="italic">behind the scenes</span>, pastikan kamu
                selalu terhubung agar tidak ketinggalan informasi terbaru dari
                Tasty Fruit®.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 xl:gap-8 pt-2">
              <CtaButton py="1" px="2" href="/artikel/publikasi" color="blue">
                PELAJARI LEBIH LANJUT!
              </CtaButton>
              <Image
                src="/assets/decorations/heart.svg"
                alt="Heart decoration"
                width={80}
                height={80}
                className="w-20 h-auto"
              />
            </div>
          </div>
          <div className="relative ml-auto">
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
