import Image from "next/image";
import Container from "@/components/layout/container";
import ArtikelCard from "@/components/artikel/artikel-card";
import { resepTastyData } from "@/lib/resep-tasty-data";

export default function ResepTasty() {
  return (
    <Container>
      <section className="w-full h-auto">
        <div className="mx-auto">
          {/* Header Section */}
          <div className="flex flex-col items-center lg:items-start gap-2 mb-8 relative">
            {/* <Image
              src="/assets/decorations/star-blue.svg"
              alt="Blue Star"
              width={60}
              height={60}
              className="absolute -top-4 right-20 w-12 h-12 hidden lg:block"
            />
            <Image
              src="/assets/decorations/star-blue.svg"
              alt="Blue Star"
              width={80}
              height={80}
              className="absolute top-32 right-8 w-16 h-16 hidden lg:block"
            />
            <Image
              src="/assets/decorations/star-blue.svg"
              alt="Blue Star"
              width={40}
              height={40}
              className="absolute top-64 left-8 w-10 h-10 hidden lg:block"
            /> */}

            <div className="font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold text-5xl md:text-2xl bg-[#003BE2] px-2 py-0.5 mb-5">
              ARTIKEL TASTY
            </div>
            <div className="font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-5xl md:text-5xl bg-[#B5FE28] px-4 py-2">
              RESEP TASTY
            </div>
          </div>
          {/* Articles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* --- 2. MAP over the correct array --- */}
            {resepTastyData.map((resep) => (
              // --- 3. PASS the correct prop to the card ---
              <ArtikelCard key={resep.id} resep={resep} />
            ))}
          </div>

          {/* Decorative Elements */}
          <div className="relative mt-16">
            {/* <Image
              src="/assets/decorations/heart-green.svg"
              alt="Green Heart"
              width={80}
              height={80}
              className="absolute bottom-0 right-16 w-20 h-20 hidden lg:block"
            /> */}
          </div>
        </div>
      </section>
    </Container>
  );
}
