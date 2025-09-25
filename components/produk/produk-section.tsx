"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Ganti atau sesuaikan path import sesuai struktur proyek Anda
import { CtaButton } from "@/components/ui/cta-button";
import SectionBadge from "@/components/ui/section-badge";
import HtmlContent from "@/components/ui/html-content";
import FruitCard from "./fruit-card";
import { ProdukData } from "@/lib/produk-data";

interface ProdukSectionProps {
  item: ProdukData;
}

// Konfigurasi animasi untuk kartu carousel
const cardVariants = {
  hidden: { opacity: 0, scale: 0.5, x: "0%", y: "0%", zIndex: 0 },
  left: {
    opacity: 1,
    scale: 0.85,
    x: "var(--left-x, -35%)",
    y: "var(--left-y, 0%)",
    zIndex: 1,
  },
  center: { opacity: 1, scale: 1, x: "0%", y: "0%", zIndex: 2 },
  right: {
    opacity: 1,
    scale: 0.85,
    x: "var(--right-x, 35%)",
    y: "var(--right-y, 0%)",
    zIndex: 1,
  },
};

export default function ProdukSection({ item }: ProdukSectionProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Fungsi untuk menentukan posisi kartu (kiri, tengah, kanan)
  const getCardState = (
    index: number,
    selectedIndex: number,
    totalSlides: number
  ) => {
    if (index === selectedIndex) return "center";
    const leftIndex = selectedIndex === 0 ? totalSlides - 1 : selectedIndex - 1;
    if (index === leftIndex) return "left";
    const rightIndex =
      selectedIndex === totalSlides - 1 ? 0 : selectedIndex + 1;
    if (index === rightIndex) return "right";
    return "hidden";
  };

  // Efek untuk auto-slide carousel setiap 3 detik
  useEffect(() => {
    const totalSlides = item.fruitType.length;
    if (totalSlides === 0) return;
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [item.fruitType.length]);

  const isLayoutA = item.layoutType === "layout-a";
  const alignRight = !isLayoutA;
  const isBlue = item.layoutType === "layout-a";
  const primaryColor = isBlue ? "#B5FE28" : "#003BE2";
  const textColor = isBlue ? "#003BE2" : "#B5FE28";

  // BAGIAN 1: Judul dan Badge (Tetap rata kiri/kanan)
  const TitleHeader = () => (
    <div
      className={`flex w-full flex-col gap-2 ${
        alignRight ? "items-end" : "items-start"
      }`}
    >
      <div className="w-fit">
        <SectionBadge
          label="PRODUK TASTY"
          className="text-xs md:text-3xl lg:text-2xl px-1 py-0.5 md:px-2 md:py-0.5 mb-1"
        />
      </div>
      <h2
        className={`font-bricolage-grotesque-condensed font-extrabold text-4xl md:text-6xl px-2 py-0 md:px-4 md:py-2 w-fit`}
        style={{ color: textColor, backgroundColor: primaryColor }}
      >
        {item.fruit.toUpperCase()}
      </h2>
    </div>
  );

  // BAGIAN 2: Deskripsi
  const DescriptionContent = () => (
    <HtmlContent
      // PERUBAHAN 1: Lebar menjadi 75% dan perataan responsif ditambahkan
      className={`mt-4 text-[#003BE2] w-[75%] md:w-[60%] leading-relaxed font-nunito text-xs md:text-lg text-center mx-auto ${
        alignRight
          ? "md:text-right md:ml-auto md:mr-0"
          : "md:text-left md:mr-auto md:ml-0"
      }`}
      content={item.description}
    />
  );

  // BAGIAN 3: Tombol CTA
  const CtaContent = () => (
    // PERUBAHAN 2: Perataan responsif ditambahkan
    <div
      className={`mt-4 md:mt-8 flex w-full flex-col items-center ${
        alignRight ? "md:items-end" : "md:items-start"
      }`}
    >
      <CtaButton
        href={`/produk/${item.slug}`}
        color={item.layoutType === "layout-b" ? "blue" : "green"}
        py="1"
        px="2"
      >
        PELAJARI LEBIH LANJUT
      </CtaButton>
      <div className="mt-8">
        <Image
          src="/assets/decorations/heart.svg"
          alt="Heart decoration"
          width={80}
          height={80}
          className="hidden md:block md:w-16 lg:w-20 h-auto"
        />
      </div>
    </div>
  );

  // Komponen untuk carousel kartu buah
  const CardsCarousel = () => (
    <div className="relative mt-10 md:mt-0 w-full h-[360px] md:h-[420px] lg:h-[520px]">
      <style jsx>{`
        .carousel-container {
          --left-x: -25%;

          --right-x: 25%;
        }

        @media (min-width: 768px) {
          .carousel-container {
            --left-x: -30%;

            --right-x: 30%;
          }
        }

        @media (min-width: 1024px) {
          .carousel-container {
            --left-x: -35%;

            --right-x: 35%;
          }
        }

        @media (min-width: 1280px) {
          .carousel-container {
            --left-x: -40%;

            --right-x: 40%;
          }
        }
      `}</style>
      <div className="carousel-container w-full h-full mx-auto">
        {item.fruitType.map((f, index) => (
          <motion.div
            key={f.slug}
            variants={cardVariants}
            animate={getCardState(index, selectedIndex, item.fruitType.length)}
            transition={{ type: "spring", stiffness: 300, damping: 35 }}
            className="absolute top-0 bottom-0 left-0 right-0 m-auto w-[280px] sm:w-[320px] md:w-[420px] lg:w-[500px] h-fit"
          >
            <FruitCard
              name={f.name}
              image={f.image}
              layoutType={item.layoutType}
              isActive={index === selectedIndex}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );

  // Komponen TitleBlock lengkap untuk Desktop
  const DesktopTitleBlock = () => (
    <div className={`max-w-xl`}>
      <TitleHeader />
      <DescriptionContent />
      <CtaContent />
    </div>
  );

  return (
    <section
      className="w-full h-auto max-w-full md:h-[46em] lg:h-[50em] overflow-hidden  mx-auto"
      style={
        item.bgGradient
          ? {
              background: `linear-gradient(to bottom, ${item.bgGradient}00, ${item.bgGradient}, ${item.bgGradient}00)`,
            }
          : {}
      }
    >
      {/* LAYOUT DESKTOP */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5 w-full h-auto mx-auto max-w-full 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-20 py-12">
        {isLayoutA ? (
          <>
            <div className="flex items-start justify-center md:justify-start">
              <DesktopTitleBlock />
            </div>
            <div className="h-full flex items-center justify-center md:justify-end">
              <CardsCarousel />
            </div>
          </>
        ) : (
          <>
            <div className="order-2 md:order-1 h-full flex items-center justify-center md:justify-start">
              <CardsCarousel />
            </div>
            <div className="order-1 md:order-2 flex items-start justify-center md:justify-end">
              <DesktopTitleBlock />
            </div>
          </>
        )}
      </div>

      {/* LAYOUT MOBILE */}
      <div className="block md:hidden w-full h-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col gap-8">
          <TitleHeader />
          <CardsCarousel />
          <DescriptionContent />
          <CtaContent />
        </div>
      </div>
    </section>
  );
}
