import { produkData } from "@/lib/produk-data";
import ProdukSection from "@/components/produk/produk-section";

import StarDecorations from "@/components/ui/star-decorations";
import SectionBadge from "@/components/ui/section-badge";

export default function Produk() {
  return (
    <div className="relative w-full">
      {/* <StarDecorations count={1} seed={9190} randomRotate={true} />
      <StarDecorations count={2} seed={2022} randomRotate={true} />
      <StarDecorations count={3} seed={3247012} randomRotate={true} />
      <StarDecorations count={8} seed={12738} randomRotate={true} />
      <StarDecorations count={4} seed={28373} randomRotate={true} />
      <StarDecorations count={6} seed={625267} randomRotate={true} />
      <StarDecorations count={6} seed={629067} randomRotate={true} /> */}

      {/* Menampilkan semua bagian produk */}
      {produkData.map((item) => (
        <ProdukSection key={item.id} item={item} />
      ))}
    </div>
  );
}
