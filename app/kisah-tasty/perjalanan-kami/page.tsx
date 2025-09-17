"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/layout/container";
import { useRouter } from "next/navigation";

import StarDecorations from "@/components/ui/star-decorations";

// --- Hook untuk mendeteksi ukuran layar ---
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

// --- Interface dan Data ---
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
    title: "INOVASI RIPENING\nDAN PERLUASAN DISTRIBUSI",
    description:
      "Untuk menjawab kebutuhan pasar akan pisang matang, kami membangun fasilitas ripening skala kecil di Cipanas. Pisang matang dari kebun kami mulai didistribusikan ke wilayah Jabodetabek, memperluas jangkauan dan membuka peluang pasar baru.",
    layout: "layout-b",
  },
  {
    year: "2024",
    title: "PANEN PERDANA, REJUVENASI BRAND, \nDAN DIVERSIFIKASI PRODUK",
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

// --- Komponen-komponen Pendukung ---

// Komponen judul yang sekarang menangani logika responsif
const JourneyTitle = ({
  title,
  className,
  isMobile,
}: {
  title: string;
  className: string;
  isMobile: boolean;
}) => {
  // Jika ini adalah perangkat mobile dan judul berisi newline, pisahkan.
  if (isMobile && title.includes("\n")) {
    const titleParts = title.split("\n").map((part) => part.trim());
    return (
      <div className="flex flex-col items-start mt-5 space-y-3">
        {titleParts.map((part, index) => (
          <div key={index} className={className}>
            {part}
          </div>
        ))}
      </div>
    );
  }

  // Jika tidak, render dalam satu baris dan ganti newline dengan spasi.
  return (
    <div className="flex flex-col items-start mt-5">
      <div className={className}>{title.replace(/\n/g, " ")}</div>
    </div>
  );
};

const revealAnimation = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
  transition: { duration: 0.5 },
};

const splitDescriptionForLayoutC = (description: string) => {
  if (description.length < 200) {
    return { leftContent: description, rightContent: "" };
  }
  const afterMinChar = description.substring(200);
  const periodIndex = afterMinChar.indexOf(".");
  if (periodIndex === -1) {
    return { leftContent: description, rightContent: "" };
  }
  const splitPoint = 200 + periodIndex + 1;
  const leftContent = description.substring(0, splitPoint).trim();
  const rightContent = description.substring(splitPoint).trim();
  return { leftContent, rightContent };
};

const JourneyContent = ({
  journey,
  isMobile,
}: {
  journey: Journey;
  isMobile: boolean;
}) => (
  <>
    <div className="flex items-center gap-4">
      <div className="inline-block font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold text-4xl md:text-5xl bg-[#003BE2] px-3 py-1">
        {journey.year}
      </div>
    </div>
    <JourneyTitle
      title={journey.title}
      isMobile={isMobile}
      className="inline-block font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-[22px] md:text-4xl lg:text-2xl xl:text-[40px] bg-[#B5FE28] px-2 py-0"
    />
    <div className="w-full">
      <div className="font-nunito text-[#003CE9] text-base md:text-lg lg:text-base xl:text-lg mt-5">
        {journey.description}
      </div>
    </div>
  </>
);

const LayoutCContent = ({
  journey,
  isMobile,
}: {
  journey: Journey;
  isMobile: boolean;
}) => {
  const { leftContent, rightContent } = splitDescriptionForLayoutC(
    journey.description
  );
  return (
    <>
      <div className="flex items-center gap-4">
        <div className="inline-block font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold text-4xl md:text-5xl bg-[#003BE2] px-3 py-1">
          {journey.year}
        </div>
      </div>
      <JourneyTitle
        title={journey.title}
        isMobile={isMobile}
        className="inline-block font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-[20px] md:text-4xl xl:text-[40px] bg-[#B5FE28] px-2 py-0"
      />
      <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-8 mt-5">
        <div className="w-full lg:w-1/2 text-left">
          <div className="font-nunito text-[#003CE9] text-base md:text-lg">
            {leftContent}
          </div>
        </div>
        {rightContent && (
          <div className="w-full lg:w-1/2 text-left">
            <div className="font-nunito text-[#003CE9] text-base md:text-lg">
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
    <div className="w-full lg:w-[70%] text-start lg:text-left">
      <div className="font-nunito text-[#003CE9] text-base md:text-lg lg:text-base xl:text-lg">
        Tasty Fruit adalah merek buah modern yang berawal dari dataran tinggi
        yang subur. Dimulai pada tahun 2018, kami terus berinovasi dan
        berkembang, memadukan tradisi kekeluargaan dengan teknologi modern.
      </div>
      <div className="font-nunito text-[#003CE9] text-base md:text-lg lg:text-base xl:text-lg mt-5">
        Setiap buah yang kami hasilkan merupakan wujud komitmen kami untuk
        menyajikan kualitas terbaik, dari kebun hingga ke tangan Anda.
      </div>
    </div>
  </>
);

// --- Komponen Utama ---
export default function PerjalananKami() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isJourneyStarted, setIsJourneyStarted] = useState(false);
  const router = useRouter();

  const { width } = useWindowSize();
  const isTabletOrBelow = width ? width < 1024 : false;

  const currentJourney = journeyData[currentIndex];
  const effectiveLayout = currentJourney.layout;

  const getNextLayoutB = () => {
    for (let i = currentIndex + 1; i < journeyData.length; i++) {
      if (journeyData[i].layout === "layout-b") {
        return journeyData[i];
      }
    }
    return null;
  };

  const nextLayoutBJourney =
    !isTabletOrBelow && currentJourney.layout === "layout-b"
      ? getNextLayoutB()
      : null;

  const handleNext = () => {
    // Jika ini adalah item terakhir, arahkan ke halaman baru.
    if (currentIndex === journeyData.length - 1) {
      router.push("/kisah-tasty/inovasi-dalam-budidaya");
      return;
    }

    // Jika ini klik pertama di mobile, cukup mulai perjalanannya.
    if (isTabletOrBelow && !isJourneyStarted) {
      setIsJourneyStarted(true);
      return;
    }

    // Logika navigasi slide (dengan modulo untuk mencegah error).
    if (
      !isTabletOrBelow &&
      currentJourney.layout === "layout-b" &&
      getNextLayoutB()
    ) {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % journeyData.length);
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % journeyData.length);
    }
  };

  return (
    <Container>
      <div className="relative w-full h-auto">
        <StarDecorations count={2} seed={5} randomRotate={true} />
        <StarDecorations count={1} seed={20} randomRotate={true} />

        {/* Header Section */}
        <div className="w-full lg:w-1/2 mb-6">
          <div className="flex flex-col items-start gap-2">
            <div className="font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold text-2xl md:text-3xl bg-[#003BE2] px-2 py-0.5 mb-5">
              KISAH TASTY
            </div>
            <div className="font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-5xl md:text-5xl xl:text-6xl bg-[#B5FE28] px-3 py-1">
              PERJALANAN KAMI
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative w-full min-h-[300px] pt-[25px]">
          {isTabletOrBelow && !isJourneyStarted ? (
            <motion.div key="intro" {...revealAnimation}>
              <StaticParagraphContent />
            </motion.div>
          ) : (
            <>
              {effectiveLayout === "layout-a" && (
                <div className="relative w-full">
                  <div className="w-full flex flex-col lg:flex-row lg:gap-16 items-start relative z-10">
                    <div className="w-full lg:w-1/2 flex flex-col justify-start items-center lg:items-start">
                      <div className="hidden lg:block">
                        <StaticParagraphContent />
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col justify-start">
                      <AnimatePresence mode="wait">
                        <motion.div key={currentIndex} {...revealAnimation}>
                          <div className="flex items-center">
                            <div className="relative inline-block font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold text-4xl md:text-5xl bg-[#003BE2] px-2 py-0">
                              {currentJourney.year}
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
                          <JourneyTitle
                            title={currentJourney.title}
                            isMobile={isTabletOrBelow}
                            className="inline-block font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-[22px] md:text-4xl lg:text-3xl xl:text-[40px] bg-[#B5FE28] px-2 py-0"
                          />
                          <div className="w-full">
                            <div className="font-nunito text-[#003CE9] text-base md:text-lg lg:text-base xl:text-lg mt-5">
                              {currentJourney.description}
                            </div>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              )}

              {effectiveLayout === "layout-b" && (
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
                  <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-4 items-start relative z-10">
                    <div className="w-full lg:w-1/2 flex flex-col justify-start">
                      <AnimatePresence mode="wait">
                        <motion.div key={currentIndex} {...revealAnimation}>
                          <JourneyContent
                            journey={currentJourney}
                            isMobile={isTabletOrBelow}
                          />
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
                            <JourneyContent
                              journey={nextLayoutBJourney}
                              isMobile={isTabletOrBelow}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              )}

              {effectiveLayout === "layout-c" && (
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
                  <div className="w-full flex justify-center relative z-10">
                    <div className="w-full lg:w-4/5 flex flex-col justify-start">
                      <AnimatePresence mode="wait">
                        <motion.div key={currentIndex} {...revealAnimation}>
                          {currentJourney.layout === "layout-b" &&
                          isTabletOrBelow ? (
                            <JourneyContent
                              journey={currentJourney}
                              isMobile={isTabletOrBelow}
                            />
                          ) : (
                            <LayoutCContent
                              journey={currentJourney}
                              isMobile={isTabletOrBelow}
                            />
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
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
