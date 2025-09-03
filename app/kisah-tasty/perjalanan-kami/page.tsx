"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/layout/container";

interface Journey {
  year: string;
  title: string;
  description: string;
  layout: "layout-a" | "layout-b" | "layout-c";
}

const journeyData: Journey[] = [
  {
    year: "2018",
    title: "FONDASI DI DATARAN TINGGI CIPANAS",
    description:
      "Perjalanan kami dimulai dengan penanaman perdana pisang jenis Cavendish di lahan 15 hektar di dataran tinggi Cipanas, Jawa Barat. Lokasi ini dipilih karena kondisi geografis dan iklimnya yang ideal, memberikan fondasi alami untuk menghasilkan pisang premium.",
    layout: "layout-a",
  },
  {
    year: "2019",
    title: "MENYAPA PASAR DENGAN PISANG HIJAU",
    description:
      "Tasty Fruit mulai memperkenalkan produknya ke pasar dalam bentuk pisang hijau. Ini menjadi langkah awal dalam membangun kepercayaan pasar terhadap kualitas hasil panen dari dataran tinggi kami.",
    layout: "layout-b",
  },
  {
    year: "2020",
    title: "INOVASI RIPENING DAN PERLUASAN DISTRIBUSI",
    description:
      "Untuk menjawab kebutuhan pasar akan pisang matang, kami membangun fasilitas ripening skala kecil di Cipanas. Pisang matang dari kebun kami mulai didistribusikan ke wilayah Jabodetabek, memperluas jangkauan dan membuka peluang pasar baru.",
    layout: "layout-b",
  },
  {
    year: "2024",
    title: "PANEN PERDANA, REJUVENASI BRAND, DAN DIVERSIFIKASI PRODUK",
    description:
      "Panen perdana dari kebun baru di Sukabumi menjadi bukti keberhasilan ekspansi kami. Di tahun ini pula, kami melakukan rejuvenasi brand untuk menghadirkan citra Tasty Fruit yang lebih modern, dinamis, dan dekat dengan konsumen Indonesia. Selain itu, kami juga mulai merambah ke berbagai buah-buahan lainnya seperti melon, alpukat, buah naga, dan lain-lain untuk memperkaya pilihan produk Tasty Fruit bagi konsumen.",
    layout: "layout-c",
  },
  {
    year: "2025",
    title: "NATIONAL FULFILLMENT CENTER & CITRA BARU",
    description:
      "Kami membangun Packing House dan National Fulfillment Center (Cold Storage, Ripening, & Distribution Center) berskala nasional di Sukabumi, sebagai langkah besar untuk mendukung distribusi luas ke seluruh Indonesia. Bersamaan dengan itu, kami akan memperkenalkan citra baru Tasty Fruit – merefleksikan perjalanan, pertumbuhan, dan ambisi kami untuk menjadi pemimpin di industri pisang nasional.",
    layout: "layout-c",
  },
];

// Animation variants
const revealAnimation = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
  transition: { duration: 0.5 },
};

// Function to split description for Layout C
const splitDescriptionForLayoutC = (description: string) => {
  if (description.length < 200) {
    return { leftContent: description, rightContent: "" };
  }

  // Find the first period after 200 characters
  const afterMinChar = description.substring(200);
  const periodIndex = afterMinChar.indexOf(".");

  if (periodIndex === -1) {
    // No period found after 200 chars, return full description on left
    return { leftContent: description, rightContent: "" };
  }

  // Split at the period after 200 chars
  const splitPoint = 200 + periodIndex + 1;
  const leftContent = description.substring(0, splitPoint).trim();
  const rightContent = description.substring(splitPoint).trim();

  return { leftContent, rightContent };
};

// JourneyContent khusus untuk konten kanan layout-b dengan title tembus
const JourneyContentRightLayoutB = ({ journey }: { journey: Journey }) => (
  <>
    <div className="flex items-center gap-4">
      <div className="inline-block font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold text-5xl md:text-4xl bg-[#003BE2] px-3 py-1.5">
        {journey.year}
      </div>
    </div>
    {/* Title yang tembus container untuk konten kanan layout-b */}
    <div className="relative mt-5 overflow-visible">
      <div
        className="font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-4xl md:text-[40px] bg-[#B5FE28] px-3 py-1 whitespace-nowrap"
        style={{ width: "max-content", minWidth: "200vw" }}
      >
        {journey.title}
      </div>
    </div>
    {/* Deskripsi tetap dalam container */}
    <div className="w-full">
      <div className="font-nunito text-[#003CE9] text-lg mt-5">
        {journey.description}
      </div>
    </div>
  </>
);

// JourneyContent dengan background w-auto
const JourneyContent = ({ journey }: { journey: Journey }) => (
  <>
    <div className="flex items-center gap-4">
      {/* Menambahkan inline-block agar background mengikuti lebar teks */}
      <div className="inline-block font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold text-5xl md:text-4xl bg-[#003BE2] px-3 py-1.5">
        {journey.year}
      </div>
    </div>
    {/* Menambahkan inline-block agar background mengikuti lebar teks */}
    <div className="inline-block font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-4xl md:text-[40px] bg-[#B5FE28] px-3 py-1 mt-5">
      {journey.title}
    </div>
    <div className="w-full">
      <div className="font-nunito text-[#003CE9] text-lg mt-5">
        {journey.description}
      </div>
    </div>
  </>
);

// Layout C Content Component
const LayoutCContent = ({ journey }: { journey: Journey }) => {
  const { leftContent, rightContent } = splitDescriptionForLayoutC(
    journey.description
  );

  return (
    <>
      <div className="flex items-center gap-4">
        <div className="inline-block font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold text-5xl md:text-4xl bg-[#003BE2] px-3 py-1.5">
          {journey.year}
        </div>
      </div>
      <div className="inline-block font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-4xl md:text-[40px] bg-[#B5FE28] px-3 py-1 mt-5">
        {journey.title}
      </div>

      {/* Split description into two columns for Layout C */}
      <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-8 mt-5">
        <div className="w-full lg:w-1/2 text-left">
          <div className="font-nunito text-[#003CE9] text-lg">
            {leftContent}
          </div>
        </div>
        {rightContent && (
          <div className="w-full lg:w-1/2 text-left">
            <div className="font-nunito text-[#003CE9] text-lg">
              {rightContent}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const StaticParagraphContent = () => (
  <>
    <div className="w-[70%]">
      <div className="font-nunito text-[#003CE9] text-lg">
        Tasty Fruit adalah merek buah modern yang berawal dari dataran tinggi
        yang subur. Dimulai pada tahun 2018, kami terus berinovasi dan
        berkembang, memadukan tradisi kekeluargaan dengan teknologi modern.
      </div>
      <div className="font-nunito text-[#003CE9] text-lg mt-5">
        Setiap buah yang kami hasilkan merupakan wujud komitmen kami untuk
        menyajikan kualitas terbaik, dari kebun hingga ke tangan Anda.
      </div>
    </div>
  </>
);

export default function PerjalananKami() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentJourney = journeyData[currentIndex];
  const currentLayout = currentJourney.layout;

  const getNextLayoutB = () => {
    for (let i = currentIndex + 1; i < journeyData.length; i++) {
      if (journeyData[i].layout === "layout-b") {
        return journeyData[i];
      }
    }
    return null;
  };

  const handleNext = () => {
    if (currentLayout === "layout-b" && getNextLayoutB()) {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % journeyData.length);
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % journeyData.length);
    }
  };

  const nextLayoutBJourney =
    currentLayout === "layout-b" ? getNextLayoutB() : null;

  return (
    <Container>
      <div className="w-full">
        {/* Static Header Section */}
        <div className="w-full lg:w-1/2 mb-6">
          <div className="flex flex-col items-start gap-2">
            <div className="font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold text-5xl md:text-2xl bg-[#003BE2] px-2 py-0.5 mb-5">
              KISAH TASTY
            </div>
            <div className="font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-5xl md:text-5xl xl:text-6xl bg-[#B5FE28] px-4 py-2">
              PERJALANAN KAMI
            </div>
          </div>
        </div>

        {currentLayout === "layout-a" && (
          <div className="relative w-full">
            <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-16 items-start relative z-10 min-h-[300px] pt-[25px]">
              {/* Left Section - Static Paragraph */}
              <div className="w-full lg:w-1/2 flex flex-col justify-start">
                <AnimatePresence mode="wait">
                  <motion.div key="static-paragraph" {...revealAnimation}>
                    <StaticParagraphContent />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Section - Logika garis diperbaiki */}
              <div className="w-full lg:w-1/2 flex flex-col justify-start">
                <AnimatePresence mode="wait">
                  <motion.div key={currentIndex} {...revealAnimation}>
                    <div className="flex items-center">
                      {/* Kotak Tahun diberi position: relative dan inline-block */}
                      <div className="relative inline-block font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold text-5xl md:text-4xl bg-[#003BE2] px-3 py-1.5">
                        {currentJourney.year}
                        {/* Garis ditempel di sini, tinggi diubah menjadi 10px */}
                        <div className="absolute left-full top-1/2 -translate-y-1/2 h-[10px] w-[100vw]">
                          <motion.div
                            className="h-full bg-[#003CE9]"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{
                              duration: 2,
                              ease: "easeInOut",
                            }}
                            key={currentIndex}
                          />
                        </div>
                      </div>
                    </div>
                    {/* Sisa Konten */}
                    <div className="inline-block font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-4xl md:text-[40px] bg-[#B5FE28] px-3 py-1 mt-5">
                      {currentJourney.title}
                    </div>
                    <div className="w-full">
                      <div className="font-nunito text-[#003CE9] text-lg mt-5">
                        {currentJourney.description}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        )}

        {/* Layout B: Garis mentok kiri-kanan */}
        {currentLayout === "layout-b" && (
          <div className="relative w-full">
            <svg
              width="120%"
              height="50"
              className="absolute top-0 left-[-10%] w-[120%] z-0"
            >
              <motion.line
                x1="0"
                y1="25"
                x2="100%"
                y2="25"
                stroke="#003CE9"
                strokeWidth="10"
                key={currentIndex}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </svg>
            <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-4 items-start relative z-10 min-h-[300px]">
              <div className="w-full lg:w-1/2 flex flex-col justify-start">
                <AnimatePresence mode="wait">
                  <motion.div key={currentIndex} {...revealAnimation}>
                    <JourneyContent journey={currentJourney} />
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-start">
                <AnimatePresence mode="wait">
                  {nextLayoutBJourney && (
                    <motion.div
                      key={`${currentIndex}-next`}
                      {...revealAnimation}
                    >
                      <JourneyContentRightLayoutB
                        journey={nextLayoutBJourney}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        )}

        {/* Layout C: Garis mentok kiri-kanan dengan split description */}
        {currentLayout === "layout-c" && (
          <div className="relative w-full">
            <svg
              width="120%"
              height="50"
              className="absolute top-0 left-[-10%] w-[120%] z-0"
            >
              {currentIndex === journeyData.length - 1 ? (
                <motion.line
                  x1="0"
                  y1="25"
                  x2="20%"
                  y2="25"
                  stroke="#003CE9"
                  strokeWidth="10"
                  key={currentIndex}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              ) : (
                <motion.line
                  x1="0"
                  y1="25"
                  x2="100%"
                  y2="25"
                  stroke="#003CE9"
                  strokeWidth="10"
                  key={currentIndex}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              )}
            </svg>
            <div className="w-full flex justify-center relative z-10 min-h-[300px]">
              <div className="w-full lg:w-4/5 flex flex-col justify-start">
                <AnimatePresence mode="wait">
                  <motion.div key={currentIndex} {...revealAnimation}>
                    <LayoutCContent journey={currentJourney} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Button */}
        <div className="flex justify-end pt-12 w-full">
          <div
            className="block hover:scale-110 transition-transform duration-300 cursor-pointer"
            onClick={handleNext}
          >
            <div className="bg-[#B5FE28] rounded-full w-16 h-16 flex items-center justify-center">
              {/* Panah CSS diganti dengan komponen Image */}
              <Image
                src="/assets/ui/arrow-right-blue.svg"
                alt="Langkah Berikutnya"
                width={28}
                height={28}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
