"use client";

import Image from "next/image";
import Link from "next/link";

// Helper function untuk warna kategori, membuatnya serbaguna.
const getCategoryColor = (category: string) => {
  switch (category) {
    case "Event":
      return "bg-[#003BE2] text-white";
    case "Aktivitas":
      return "bg-[#E30E75] text-white";
    case "Produk":
      return "bg-[#FFE600] text-[#003BE2]";
    case "Informasi":
    case "Inovasi": // Menambahkan kategori baru untuk contoh kita
      return "bg-[#00C896] text-white";
    case "Resep":
      return "bg-[#003CE9] text-[#B5FE28]";
    default:
      return "bg-[#003BE2] text-[#B5FE28]";
  }
};

// Interface untuk props komponen BasicCard
export interface BasicCardProps {
  image: string;
  title: string;
  footerText: string; // Teks di bagian bawah kiri (bisa tanggal, deskripsi singkat, dll)
  category?: string; // Kategori ini opsional
}

export default function BasicCard({
  image,
  title,
  footerText,
  category,
}: BasicCardProps) {
  // Styling didefinisikan secara statis sesuai permintaan (gaya "publikasi")
  const cardStyles = {
    bgColor: "bg-[#003CE9]",
    textColor: "text-white",
    mutedTextColor: "text-white/90",
    arrowCircleBg: "bg-[#B5FE28]",
    arrowSrc: "/assets/ui/arrow-right-blue.svg",
  };

  return (
    <div className="block h-full">
      <div
        className={`${cardStyles.bgColor} rounded-2xl p-3 sm:p-4 h-full flex flex-col group`}
      >
        {/* Kontainer Gambar */}
        <div className="relative mb-3 sm:mb-4">
          <Image
            src={image}
            alt={title}
            width={400}
            height={300}
            className="w-full aspect-[4/3] object-cover rounded-xl"
          />
        </div>

        {/* Kontainer Teks */}
        <div className="space-y-2 sm:space-y-3 flex flex-col">
          <h3
            className={`${cardStyles.textColor} font-nunito font-bold text-sm sm:text-lg leading-tight flex-grow line-clamp-2`}
          >
            {title}
          </h3>
          {/* Footer Kartu */}
          <div className="flex items-center justify-between">
            <span
              className={`${cardStyles.mutedTextColor} font-nunito text-[8px] sm:text-sm`}
            >
              {footerText}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
