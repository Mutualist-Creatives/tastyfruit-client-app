import { produkData } from "@/lib/produk-data";
import ProdukSection from "@/components/produk/produk-section";
import Link from "next/link";
import Image from "next/image";
import * as motion from "framer-motion/client";
import FloatingEmailButton from "@/components/ui/floating-email-button";

export default function Produk() {
  return (
    <div className="relative w-full">
      {/* Menampilkan semua bagian produk */}
      {produkData.map((item) => (
        <ProdukSection key={item.id} item={item} />
      ))}
      {/* Floating Email Button */}
      <FloatingEmailButton />
    </div>
  );
}
