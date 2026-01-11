import { Skeleton } from "@/components/ui/skeleton";
import Container from "@/components/layout/container";

export default function Loading() {
  return (
    <Container>
      <section className="w-full h-auto pb-48">
        {/* Page Titles (Aligned left) */}
        <div className="flex flex-col items-start gap-2 mb-8 relative">
          <Skeleton className="w-32 h-6 rounded px-1 py-0.5 md:px-2 mb-1" />
          <Skeleton className="w-48 h-12 md:h-16 px-2 md:px-4 py-0.5 md:py-2" />
        </div>
        <div className="mx-auto relative flex flex-col items-start max-w-3xl w-full">
          {/* Main Article Content Wrapper */}
          <div className="mx-auto w-full">
            <div className="space-y-6">
              {/* Title */}
              <Skeleton className="w-3/4 h-10 md:h-12 mx-auto rounded-lg" />

              {/* Image & Category */}
              <div className="relative my-4">
                <Skeleton className="absolute top-4 left-4 z-10 w-20 h-6 rounded-full" />
                <Skeleton className="w-full h-64 md:h-[25em] rounded-2xl" />
              </div>

              {/* Date & Author */}
              <div className="flex justify-between items-center">
                <Skeleton className="w-24 h-4 rounded" />
                <Skeleton className="w-32 h-4 rounded" />
              </div>

              {/* Content Paragraphs */}
              <div className="space-y-4">
                <Skeleton className="w-full h-4 rounded" />
                <Skeleton className="w-full h-4 rounded" />
                <Skeleton className="w-[90%] h-4 rounded" />
                <Skeleton className="w-full h-4 rounded" />
                <Skeleton className="w-[85%] h-4 rounded" />
                <div className="h-4"></div>
                <Skeleton className="w-full h-4 rounded" />
                <Skeleton className="w-[95%] h-4 rounded" />
                <Skeleton className="w-full h-4 rounded" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
