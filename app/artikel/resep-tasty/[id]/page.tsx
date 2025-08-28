import { notFound } from "next/navigation";
import { resepTastyData } from "@/lib/resep-tasty-data";
import Container from "@/components/layout/container";
import ResepDetail from "@/components/artikel/resep-detail";
import DOMPurify from "isomorphic-dompurify";

export function generateStaticParams() {
  return resepTastyData.map((resep) => ({
    id: String(resep.id),
  }));
}

export default async function ResepDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const resep = resepTastyData.find((p) => String(p.id) === id);

  if (!resep) {
    notFound();
  }

  // --- IMPORTANT: Sanitize each string within the instructions array ---
  const sanitizedInstructions = resep.instructions.map((step) =>
    DOMPurify.sanitize(step)
  );

  const currentIndex = resepTastyData.findIndex((p) => String(p.id) === id);
  const nextIndex = (currentIndex + 1) % resepTastyData.length;
  const nextResep = resepTastyData[nextIndex];

  return (
    <Container>
      <ResepDetail
        resep={resep}
        nextResep={nextResep}
        sanitizedInstructions={sanitizedInstructions} // Pass the sanitized array
      />
    </Container>
  );
}
