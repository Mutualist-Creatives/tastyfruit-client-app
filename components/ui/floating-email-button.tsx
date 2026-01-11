"use client";

import Image from "next/image";
import Link from "next/link";
import * as motion from "framer-motion/client";

export default function FloatingEmailButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Link href="mailto:halo@tastyfruit.com" aria-label="Email Us">
        <motion.div
          className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#003BE2] rounded-full shadow-lg"
          whileHover={{ scale: 1.1 }} // Hover animation: scaling only
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <Image
            src="/assets/ui/email-white-fill.svg"
            alt="Email"
            width={32}
            height={32}
            className="w-7 h-7 md:w-8 md:h-8"
            unoptimized
          />
        </motion.div>
      </Link>
    </div>
  );
}
