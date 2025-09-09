"use client"; // This directive marks it as a Client Component

import Image from "next/image";
import Link from "next/link";
import { publikasiData } from "@/lib/publikasi-data";

type Artikel = (typeof publikasiData)[0];

interface ArtikelDetailProps {
  artikel: Artikel;
  nextArtikel: Artikel;
  sanitizedContent: string;
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Event":
      return "bg-[#003BE2] text-white";
    case "Aktivitas":
      return "bg-[#E30E75] text-white";
    case "Produk":
      return "bg-[#FFE600] text-[#003BE2]";
    case "Informasi":
      return "bg-[#00C896] text-white";
    default:
      return "bg-[#003BE2] text-[#B5FE28]";
  }
};

export default function ArtikelDetail({
  artikel,
  nextArtikel,
  sanitizedContent,
}: ArtikelDetailProps) {
  return (
    <section className="w-full h-auto">
      {/* Page Titles (Aligned left) */}
      <div className="flex flex-col items-start gap-2 mb-8 relative">
        <div className="font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold text-2xl bg-[#003BE2] px-2 py-0.5 mb-5">
          ARTIKEL TASTY
        </div>
        <div className="font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-5xl bg-[#B5FE28] px-4 py-2">
          PUBLIKASI
        </div>
      </div>
      <div className="mx-auto relative flex flex-col items-start max-w-3xl">
        {/* Main Article Content Wrapper */}
        <div className="mx-auto w-full font-nunito text-[#003BE2]">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-[#003CE9] text-center font-bricolage-grotesque leading-tight">
              {artikel.title}
            </h1>

            <div className="relative my-4">
              <div
                className={`absolute top-4 left-4 z-10 inline-block px-2 py-1 rounded-full text-sm font-bold ${getCategoryColor(
                  artikel.category
                )}`}
              >
                {artikel.category}
              </div>
              <Image
                src={artikel.image}
                alt={artikel.title}
                width={896}
                height={504}
                className="w-full h-[25em] object-cover rounded-2xl"
              />
            </div>

            <div className="flex justify-between items-center text-sm">
              <span className="font-bold">{artikel.date}</span>
              <span>
                oleh <span className="font-bold"> {artikel.author}</span>
              </span>
            </div>

            <article
              className="prose lg:prose-lg max-w-none text-justify"
              dangerouslySetInnerHTML={{ __html: sanitizedContent }}
            />
          </div>
        </div>

        {/* Next Article Navigation Button (Aligned right) */}
        <div className="flex justify-end pt-8 w-full">
          <Link
            href={`/artikel/publikasi/${nextArtikel.id}`}
            className="block hover:scale-110 transition-transform duration-300"
          >
            <div className="bg-[#B5FE28] rounded-full w-16 h-16 flex items-center justify-center">
              <Image
                src="/assets/ui/arrow-right-blue.svg"
                alt="Next article"
                width={24}
                height={24}
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
