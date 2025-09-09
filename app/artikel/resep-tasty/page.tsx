// app/artikel/resep-tasty/page.tsx

import Image from "next/image";
import Container from "@/components/layout/container";
import ArtikelCard from "@/components/artikel/artikel-card";
import { resepTastyData } from "@/lib/resep-tasty-data";

export default function ResepTastyPage() {
  // Renamed for clarity
  return (
    <Container>
      <section className="w-full h-auto">
        <div className="mx-auto">
          {/* Header Section */}
          {/* ADJUSTED: Header alignment and font size now match the Publikasi page */}
          <div className="flex flex-col items-start gap-2 mb-8 relative">
            <div className="font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold text-2xl bg-[#003BE2] px-2 py-0.5 mb-5">
              ARTIKEL TASTY
            </div>
            <div className="font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-5xl bg-[#B5FE28] px-4 py-2">
              RESEP TASTY
            </div>
          </div>

          {/* Articles Grid */}
          {/* ADJUSTED: Grid layout now matches the Publikasi page */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {resepTastyData.map((resep) => (
              <ArtikelCard key={resep.id} resep={resep} />
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}
