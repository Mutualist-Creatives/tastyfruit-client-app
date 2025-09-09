// components/landing-page/publikasi.tsx

import Image from "next/image";
import Container from "@/components/layout/container";
import ArtikelCard from "@/components/artikel/artikel-card";
import { publikasiData } from "@/lib/publikasi-data";

export default function Publikasi() {
  return (
    <Container>
      <section className="w-full h-auto">
        <div className="mx-auto">
          {/* Header Section */}
          {/* ADJUSTED: Header is now always left-aligned */}
          <div className="flex flex-col items-start gap-2 mb-8 relative">
            <div className="font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold text-2xl bg-[#003BE2] px-2 py-0.5 mb-5">
              ARTIKEL TASTY
            </div>
            <div className="font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-5xl bg-[#B5FE28] px-4 py-2">
              PUBLIKASI
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {publikasiData.map((publikasi) => (
              <ArtikelCard key={publikasi.id} publikasi={publikasi} />
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}
