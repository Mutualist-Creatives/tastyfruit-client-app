"use client";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CtaButton } from "@/components/ui/cta-button";
import FruitCard from "./fruit-card";
import { ProdukData } from "@/lib/produk-data";
import Image from "next/image";

interface ProdukSectionProps {
  item: ProdukData;
}

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    x: "0%",
    zIndex: 0,
  },
  left: {
    opacity: 0.6,
    scale: 0.75,
    x: "-50%",
    zIndex: 1,
  },
  center: {
    opacity: 1,
    scale: 1,
    x: "0%",
    zIndex: 2,
  },
  right: {
    opacity: 0.6,
    scale: 0.75,
    x: "50%",
    zIndex: 1,
  },
};

export default function ProdukSection({ item }: ProdukSectionProps) {
  // State untuk melacak indeks kartu yang aktif
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Helper function untuk menentukan state kartu (tidak ada perubahan)
  const getCardState = (
    index: number,
    selectedIndex: number,
    totalSlides: number
  ) => {
    if (index === selectedIndex) {
      return "center";
    }
    const leftIndex = selectedIndex === 0 ? totalSlides - 1 : selectedIndex - 1;
    if (index === leftIndex) {
      return "left";
    }
    const rightIndex =
      selectedIndex === totalSlides - 1 ? 0 : selectedIndex + 1;
    if (index === rightIndex) {
      return "right";
    }
    return "hidden";
  };

  // ✅ 1. useEffect untuk auto-scroll tanpa Embla
  useEffect(() => {
    const totalSlides = item.fruitType.length;
    if (totalSlides === 0) return;

    // Set interval untuk mengubah selectedIndex setiap 3 detik
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000);

    // Bersihkan interval saat komponen di-unmount
    return () => clearInterval(interval);
  }, [item.fruitType.length]); // <-- Dependensi hanya pada jumlah slide

  const isLayoutA = item.layoutType === "layout-a";

  const TitleBlock = (alignRight: boolean) => {
    // Dynamic colors based on layout type
    const isBlue = item.layoutType === "layout-a";
    const primaryColor = isBlue ? "#B5FE28" : "#003BE2"; // Green for layout-a, Blue for layout-b
    const secondaryColor = isBlue ? "#003BE2" : "#B5FE28"; // Blue for layout-a, Green for layout-b
    const textColor = isBlue ? "#003BE2" : "#B5FE28"; // Blue text for layout-a, Green text for layout-b

    return (
      <div className={`max-w-xl ${alignRight ? "ml-auto text-right" : ""}`}>
        <div
          className={`flex flex-col ${
            alignRight ? "items-end" : "items-start"
          } gap-2`}
        >
          <div className="font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold text-2xl bg-[#003BE2] px-2 py-0.5 mb-5">
            PRODUK TASTY
          </div>
          <h2
            className="font-bricolage-grotesque-condensed font-extrabold text-5xl md:text-6xl px-4 py-2"
            style={{
              color: textColor,
              backgroundColor: primaryColor,
            }}
          >
            {item.fruit.toUpperCase()}
          </h2>
        </div>
        <p
          className={`mt-4 text-[#003BE2] max-w-[45ch] leading-relaxed ${
            alignRight ? "ml-auto" : ""
          }`}
        >
          {item.description}
        </p>
        <div
          className={`mt-4 ${
            alignRight ? "flex flex-col items-end" : "flex flex-col items-start"
          }`}
        >
          <CtaButton
            href={`/produk/${item.slug}`}
            color={item.layoutType === "layout-b" ? "blue" : "green"}
            py="2"
            px="3"
          >
            PELAJARI LEBIH LANJUT
          </CtaButton>
          <div className="mt-6">
            <Image
              src="/assets/decorations/heart.svg"
              alt="Heart decoration"
              width={80}
              height={80}
              className="w-12 sm:w-16 lg:w-20 h-auto"
            />
          </div>
        </div>
      </div>
    );
  };

  const CardsCarousel = (
    // ✅ 2. Hapus `ref={emblaRef}` dari sini
    <div className="relative w-full h-[450px]">
      <div className="w-full h-full">
        {item.fruitType.map((f, index) => (
          <motion.div
            key={f.slug}
            variants={cardVariants}
            animate={getCardState(index, selectedIndex, item.fruitType.length)}
            transition={{ type: "spring", stiffness: 300, damping: 35 }}
            className="absolute top-0 bottom-0 left-0 right-0 m-auto w-[320px] h-fit"
          >
            <FruitCard
              name={f.name}
              image={f.image}
              layoutType={item.layoutType}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      className={`w-full h-[40em] overflow-hidden max-w-full md:max-w-[1440px] mx-auto ${
        item.bgGradient
          ? `bg-gradient-to-br from-transparent via-[${item.bgGradient}] to-transparent`
          : ""
      }`}
      style={
        item.bgGradient
          ? {
              background: `linear-gradient(to bottom, ${item.bgGradient}00, ${item.bgGradient}, ${item.bgGradient}00)`,
            }
          : {}
      }
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 w-full h-auto mx-auto max-w-full md:max-w-7xl px-4 sm:px-6 lg:px-20 py-12`}
      >
        {isLayoutA ? (
          <>
            <div>{TitleBlock(false)}</div>
            <div className="h-full flex items-center justify-center">
              {CardsCarousel}
            </div>
          </>
        ) : (
          <>
            <div className="order-2 lg:order-1 h-full flex items-center justify-center">
              {CardsCarousel}
            </div>
            <div className="order-1 lg:order-2 lg:text-right">
              {TitleBlock(true)}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
