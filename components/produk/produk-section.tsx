"use client";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CtaButton } from "@/components/ui/cta-button";
import HtmlContent from "@/components/ui/html-content";
import FruitCard from "./fruit-card";
import { ProdukData } from "@/lib/produk-data";
import Image from "next/image";

interface ProdukSectionProps {
  item: ProdukData;
}

// Responsive variants dengan x dan y yang berbeda per device
const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    x: "0%",
    y: "0%",
    zIndex: 0,
  },
  left: {
    opacity: 1,
    scale: 0.85,
    x: "var(--left-x, -35%)",
    y: "var(--left-y, 0%)",
    zIndex: 1,
  },
  center: {
    opacity: 1,
    scale: 1,
    x: "0%",
    y: "0%",
    zIndex: 2,
  },
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

  useEffect(() => {
    const totalSlides = item.fruitType.length;
    if (totalSlides === 0) return;

    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, [item.fruitType.length]);

  const isLayoutA = item.layoutType === "layout-a";

  const TitleBlock = (alignRight: boolean) => {
    const isBlue = item.layoutType === "layout-a";
    const primaryColor = isBlue ? "#B5FE28" : "#003BE2";
    const textColor = isBlue ? "#003BE2" : "#B5FE28";

    return (
      <div
        className={`max-w-xl text-center md:text-left ${
          alignRight ? "mx-auto dd:ml-auto md:text-right" : ""
        }`}
      >
        <div
          className={`flex flex-col items-center ${
            alignRight ? "md:items-end" : "md:items-start"
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
        <HtmlContent
          className={`mt-4 text-[#003BE2] max-w-[45ch] leading-relaxed font-nunito w-full md:w-[80%] lg:w-[60%] text-base md:text-lg mx-auto md:mx-0 ${
            alignRight ? "md:ml-auto" : ""
          }`}
          content={item.description}
        />
        <div
          className={`mt-4 flex flex-col items-center ${
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
      </div>
    );
  };

  const CardsCarousel = (alignStart: boolean) => (
    <div className="relative w-full h-[360px] md:h-[420px] lg:h-[520px]">
      {/* CSS Custom Properties untuk responsive X values */}
      <style jsx>{`
        .carousel-container {
          /* Mobile: overlap lebih sedikit */
          --left-x: -25%;
          --right-x: 25%;
        }

        /* Tablet */
        @media (min-width: 768px) {
          .carousel-container {
            --left-x: -30%;
            --right-x: 30%;
          }
        }

        /* Desktop */
        @media (min-width: 1024px) {
          .carousel-container {
            --left-x: -35%;
            --right-x: 35%;
          }
        }

        /* Large Desktop - spacing lebih lebar */
        @media (min-width: 1280px) {
          .carousel-container {
            --left-x: -40%;
            --right-x: 40%;
          }
        }
      `}</style>

      <div
        className={`carousel-container w-full h-full ${
          isLayoutA ? "mr-0" : "ml-0"
        }`}
      >
        {item.fruitType.map((f, index) => (
          <motion.div
            key={f.slug}
            variants={cardVariants}
            animate={getCardState(index, selectedIndex, item.fruitType.length)}
            transition={{ type: "spring", stiffness: 300, damping: 35 }}
            className={`absolute top-0 bottom-0 left-0 right-0 m-auto w-[280px] sm:w-[320px] md:w-[300px] lg:w-[300px] xl:w-[350px] h-fit`}
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

  return (
    <section
      className={`w-full h-auto md:h-[46em] lg:h-[50em] overflow-hidden max-w-full md:max-w-[1440px] mx-auto ${
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
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5 w-full h-auto mx-auto max-w-full
          ${
            isLayoutA
              ? "mx-auto max-w-full md:max-w-7xl px-4 sm:px-6 lg:px-20"
              : "mx-auto max-w-full md:max-w-7xl px-4 sm:px-6 lg:px-20"
          } 
          py-12`}
      >
        {isLayoutA ? (
          <>
            <div className="flex items-center justify-center md:justify-start">
              {TitleBlock(false)}
            </div>
            <div className="h-full flex items-center justify-center md:justify-end md:pr-0">
              {CardsCarousel(false)}
            </div>
          </>
        ) : (
          <>
            <div className="order-2 md:order-1 h-full flex items-center justify-center md:justify-start md:pl-0">
              {CardsCarousel(true)}
            </div>
            <div className="order-1 md:order-2 flex items-center justify-center">
              {TitleBlock(true)}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
