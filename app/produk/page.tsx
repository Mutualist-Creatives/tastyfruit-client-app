import Container from "@/components/layout/container";
import { produkData } from "@/lib/produk-data";
import ProdukSection from "@/components/produk/produk-section";

export default function Produk() {
  return (
    <div className="w-full">
      {/* JUDUL INI HANYA MUNCUL DI MOBILE */}
      <div className="px-4 pt-12 md:hidden">
        <div className="flex justify-start md:justify-center">
          <div className="font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold text-2xl bg-[#003BE2] px-2 py-0.5 w-fit">
            PRODUK TASTY
          </div>
        </div>
      </div>

      {/* Menampilkan semua bagian produk */}
      {produkData.map((item) => (
        <ProdukSection key={item.id} item={item} />
      ))}
    </div>
  );
}
