"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/layout/container";

const journeyData = [
  {
    year: "2018",
    title: "FONDASI DI DATARAN TINGGI CIPANAS",
    description:
      "Penanaman perdana pisang Cavendish di lahan 15 hektar di dataran tinggi Cipanas, Jawa Barat, menjadi awal dari perjalanan kami.",
  },
  {
    year: "2020",
    title: "INOVASI TEKNOLOGI PERTANIAN",
    description:
      "Mengadopsi teknologi pertanian modern untuk meningkatkan efisiensi dan kualitas hasil panen, memastikan standar tertinggi.",
  },
  {
    year: "2022",
    title: "EKSPANSI PASAR NASIONAL",
    description:
      "Produk kami mulai didistribusikan ke seluruh Indonesia, menjangkau lebih banyak konsumen dan membangun reputasi merek.",
  },
  {
    year: "2024",
    title: "PENGHARGAAN KUALITAS TERBAIK",
    description:
      "Menerima penghargaan sebagai produsen buah dengan kualitas terbaik, sebuah bukti dari komitmen dan kerja keras seluruh tim kami.",
  },
  // Anda bisa menambahkan data ganjil di sini dan kolom kanan akan kosong secara otomatis
  {
    year: "2025",
    title: "TUJUAN MASA DEPAN",
    description: "Menjelajahi pasar ekspor dan inovasi produk baru.",
  },
];

interface Journey {
  year: string;
  title: string;
  description: string;
}

// Animation variants for a consistent "reveal to the right" effect
const revealAnimation = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
  transition: { duration: 0.5 },
};

// Component for rendering the timeline content block
const JourneyContent = ({ journey }: { journey: Journey }) => (
  <>
    <div className="flex items-center gap-4">
      <div className="font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold text-5xl md:text-4xl bg-[#003BE2] px-3 py-1.5">
        {journey.year}
      </div>
    </div>
    <div className="font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-4xl md:text-[40px] bg-[#B5FE28] px-3 py-1 mt-5">
      {journey.title}
    </div>
    <div className="w-full">
      <div className="font-nunito text-[#003CE9] text-lg mt-5">
        {journey.description}
      </div>
    </div>
  </>
);

export default function PerjalananKami() {
  // NEW: State now tracks the index of the pair (0, 2, 4, ...)
  const [pairIndex, setPairIndex] = useState(0);

  const handleNext = () => {
    // NEW: Increment by 2 to get to the next pair
    setPairIndex((prevIndex) => (prevIndex + 2) % journeyData.length);
  };

  // Get the data for the left and right sides
  const leftJourney = journeyData[pairIndex];
  const rightJourney =
    pairIndex + 1 < journeyData.length ? journeyData[pairIndex + 1] : null;

  return (
    <>
      <Container>
        <div className="w-full py-10">
          {/* Static Header Section */}
          <div className="w-full lg:w-1/2 mb-12">
            <div className="flex flex-col items-center lg:items-start gap-2">
              <div className="font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold text-5xl md:text-2xl bg-[#003BE2] px-2 py-0.5 mb-5">
                ARTIKEL TASTY
              </div>
              <div className="font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-5xl md:text-6xl bg-[#B5FE28] px-4 py-2">
                PERJALANAN KAMI
              </div>
            </div>
          </div>

          {/* Timeline Container */}
          <div className="relative w-full">
            {/* Single connecting line */}
            <svg
              width="100%"
              height="50"
              className="absolute top-0 left-0 w-full z-0"
            >
              <motion.line
                x1="0"
                y1="25"
                x2="100%"
                y2="25"
                stroke="#003CE9"
                strokeWidth="3"
                key={pairIndex} // Re-animate the line when the pair changes
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </svg>

            {/* Main content layout */}
            <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-16 items-start relative z-10 min-h-[300px]">
              {/* Left Section */}
              <div className="w-full lg:w-1/2 flex flex-col justify-start">
                <AnimatePresence mode="wait">
                  <motion.div key={pairIndex} {...revealAnimation}>
                    <JourneyContent journey={leftJourney} />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Section */}
              <div className="w-full lg:w-1/2 flex flex-col justify-start">
                <AnimatePresence mode="wait">
                  {/* Render only if rightJourney exists */}
                  {rightJourney && (
                    <motion.div key={pairIndex + 1} {...revealAnimation}>
                      <JourneyContent journey={rightJourney} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Navigation Button */}
          <div className="flex justify-end pt-12 w-full">
            <div
              className="block hover:scale-110 transition-transform duration-300 cursor-pointer"
              onClick={handleNext}
            >
              <div className="bg-[#B5FE28] rounded-full w-16 h-16 flex items-center justify-center">
                <Image
                  src="/assets/ui/arrow-right-blue.svg"
                  alt="Next article"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
