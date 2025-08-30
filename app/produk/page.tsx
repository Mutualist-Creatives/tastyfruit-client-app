// components/landing-page/publikasi.tsx
import Container from "@/components/layout/container";
import { produkData } from "@/lib/produk-data";
import ProdukSection from "@/components/produk/produk-section";

export default function Produk() {
  return (
    <div className="w-full">
      {produkData.map((item) => (
        <ProdukSection key={item.id} item={item} />
      ))}
    </div>
  );
}
