import { notFound } from "next/navigation";
import { resepTastyData } from "@/lib/resep-tasty-data";
import Container from "@/components/layout/container";
import ResepDetail from "@/components/artikel/resep-detail";

export function generateStaticParams() {
  return resepTastyData.map((resep) => ({
    id: String(resep.id),
  }));
}

export default async function ResepDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const resep = resepTastyData.find((p) => String(p.id) === id);

  if (!resep) {
    notFound();
  }

  return (
    <Container>
      <ResepDetail resep={resep} />
    </Container>
  );
}
