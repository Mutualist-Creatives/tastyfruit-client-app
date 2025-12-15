import { produkData } from "@/lib/produk-data";
import ProdukSection from "@/components/produk/produk-section";
import Link from "next/link";
import Image from "next/image";
import * as motion from "framer-motion/client";

export default function Produk() {
  return (
    <div className="relative w-full">
      {/* Menampilkan semua bagian produk */}
      {produkData.map((item) => (
        <ProdukSection key={item.id} item={item} />
      ))}
      {/* Floating Email Button */}
      {/* Floating Email Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Link href="mailto:halo@tastyfruit.com" aria-label="Email Us">
          <motion.div
            className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#003BE2] rounded-full shadow-lg"
            whileTap={{ scale: 0.75 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
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
    </div>
  );
}
