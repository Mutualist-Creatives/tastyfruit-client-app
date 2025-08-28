import { notFound } from "next/navigation";
import { publikasiData } from "@/lib/publikasi-data";
import DOMPurify from "isomorphic-dompurify";
import Container from "@/components/layout/container";
import PublikasiDetail from "@/components/artikel/publikasi-detail";

/**
 * This function tells Next.js which article IDs are available
 * at build time, so it can pre-render them as static pages.
 */
export function generateStaticParams() {
  return publikasiData.map((artikel) => ({
    id: artikel.id,
  }));
}

/**
 * This is the main page component. It is now an async Server Component
 * to correctly handle the params object.
 */
export default async function PublikasiDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // --- Server-Side Logic ---
  // Await the params object before accessing its properties
  const { id } = await params;

  const artikel = publikasiData.find((p) => p.id === id);
  if (!artikel) {
    notFound();
  }

  const currentIndex = publikasiData.findIndex((p) => p.id === id);
  const nextIndex = (currentIndex + 1) % publikasiData.length;
  const nextArtikel = publikasiData[nextIndex];
  const sanitizedContent = DOMPurify.sanitize(artikel.content);
  // --- End of Server-Side Logic ---

  // Pass all the prepared data down to the client component as props
  return (
    <Container>
      <PublikasiDetail
        artikel={artikel}
        nextArtikel={nextArtikel}
        sanitizedContent={sanitizedContent}
      />
    </Container>
  );
}
