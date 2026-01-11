import { Skeleton } from "@/components/ui/skeleton";
import Container from "@/components/layout/container";

export default function Loading() {
  return (
    <Container>
      <article className="w-full mx-auto pb-48">
        {/* ================================================================== */}
        {/* === MOBILE & TABLET LAYOUT (<1024px) ===                         */}
        {/* ================================================================== */}
        <div className="lg:hidden">
          {/* Header */}
          <div className="flex flex-col items-start gap-2 mb-8">
            <Skeleton className="w-32 h-6 rounded px-1 py-0.5 md:px-2 mb-1" />
            <Skeleton className="w-48 h-12 md:h-16 px-2 md:px-4 py-0.5 md:py-2" />
          </div>

          {/* Title & Author */}
          <div className="mb-4">
            <Skeleton className="w-48 h-4 mb-2" />
            <Skeleton className="w-full h-12 md:h-14 rounded-lg" />
          </div>

          {/* Info */}
          <div className="flex items-center gap-4 mb-6">
            <Skeleton className="w-24 h-4 rounded" />
            <Skeleton className="w-20 h-4 rounded" />
          </div>

          {/* Image */}
          <div className="w-full mb-8">
            <Skeleton className="w-full aspect-video rounded-2xl" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <Skeleton className="w-32 h-6 mb-3 rounded" />
              <div className="space-y-3 pt-3">
                <Skeleton className="w-full h-6 rounded" />
                <Skeleton className="w-full h-6 rounded" />
                <Skeleton className="w-[80%] h-6 rounded" />
              </div>
            </div>
            <div>
              <Skeleton className="w-32 h-6 mb-3 rounded" />
              <div className="space-y-4 pt-3">
                <div className="flex gap-4">
                  <Skeleton className="w-8 h-8 rounded-full" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="w-full h-4 rounded" />
                    <Skeleton className="w-[90%] h-4 rounded" />
                  </div>
                </div>
                <div className="flex gap-4">
                  <Skeleton className="w-8 h-8 rounded-full" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="w-full h-4 rounded" />
                    <Skeleton className="w-[80%] h-4 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================== */}
        {/* === DESKTOP LAYOUT (>=1024px) ===                                */}
        {/* ================================================================== */}
        <div className="hidden lg:block">
          {/* Header */}
          <div className="flex flex-col items-start gap-2 mb-8">
            <Skeleton className="w-32 h-6 rounded px-1 py-0.5 md:px-2 mb-1" />
            <Skeleton className="w-48 h-12 md:h-16 px-2 md:px-4 py-0.5 md:py-2" />
          </div>

          <div className="grid grid-cols-2 gap-12">
            {/* Left: Image */}
            <div className="w-full">
              <Skeleton className="w-full aspect-square rounded-2xl" />
            </div>
            {/* Right: Content */}
            <div>
              <Skeleton className="w-48 h-4 mb-2" />
              <Skeleton className="w-full h-16 rounded-xl mb-4" />

              <div className="flex items-center gap-4 mb-6">
                <Skeleton className="w-24 h-4 rounded" />
                <Skeleton className="w-20 h-4 rounded" />
              </div>

              <div className="mb-6">
                <Skeleton className="w-32 h-6 mb-3 rounded" />
                <div className="space-y-3 pt-3 border-t border-gray-200/50">
                  <Skeleton className="w-full h-6 rounded" />
                  <Skeleton className="w-full h-6 rounded" />
                  <Skeleton className="w-[80%] h-6 rounded" />
                </div>
              </div>
              <div>
                <Skeleton className="w-32 h-6 mb-3 rounded" />
                <div className="space-y-4 pt-3 border-t border-gray-200/50">
                  <div className="flex gap-4">
                    <Skeleton className="w-8 h-8 rounded-full" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="w-full h-4 rounded" />
                      <Skeleton className="w-[90%] h-4 rounded" />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Skeleton className="w-8 h-8 rounded-full" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="w-full h-4 rounded" />
                      <Skeleton className="w-[80%] h-4 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Container>
  );
}
