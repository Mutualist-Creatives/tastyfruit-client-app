import { Skeleton } from "@/components/ui/skeleton";
import Container from "@/components/layout/container";

export default function Loading() {
  return (
    <Container>
      <section className="w-full h-auto pb-48">
        <div className="max-w-7xl relative">
          {/* DESKTOP LAYOUT SKELETON */}
          <div className="hidden lg:flex w-full min-h-[600px]">
            {/* Left Column */}
            <div className="w-[40%] space-y-6">
              <div className="flex justify-start">
                <Skeleton className="w-32 h-8 rounded-full" />
              </div>
              <Skeleton className="w-[80%] h-20 rounded-lg" />
              <div className="w-[70%] space-y-4">
                <Skeleton className="w-full h-4 rounded" />
                <Skeleton className="w-[90%] h-4 rounded" />
                <Skeleton className="w-[95%] h-4 rounded" />
                <ScoreLine />
                <Skeleton className="w-full h-4 rounded" />
                <Skeleton className="w-[80%] h-4 rounded" />
              </div>
              <div className="w-full grid grid-cols-2 gap-4 pt-4">
                <InfoItem />
                <InfoItem />
                <InfoItem />
                <InfoItem />
              </div>
            </div>

            {/* Middle Column - Image */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Skeleton className="h-[35em] aspect-[3/4] rounded-3xl opacity-50" />
            </div>

            {/* Right Column */}
            <div className="absolute top-0 right-0 w-[30%] h-full flex flex-col justify-between items-end">
              <Skeleton className="w-[210px] h-[290px] rounded-2xl" />
              <div className="w-full rounded-3xl p-6 relative mt-auto">
                <Skeleton className="w-full h-40 rounded-3xl" />
              </div>
            </div>
          </div>

          {/* MOBILE LAYOUT SKELETON */}
          <div className="block lg:hidden space-y-6">
            <div className="relative flex justify-between min-h-[450px] md:min-h-[550px]">
              {/* Left Content */}
              <div className="w-4/6 md:w-1/2 flex flex-col">
                <Skeleton className="w-24 h-6 mb-4 rounded-full" />
                <Skeleton className="w-full h-16 md:h-24 rounded-lg mb-4" />
                {/* Image Placeholder Absolute */}
                <div className="w-full absolute top-28 md:top-34 left-0 right-1/2">
                  <Skeleton className="w-[80%] aspect-[3/4] rounded-xl" />
                </div>
              </div>

              {/* Right Content */}
              <div className="w-1/2 flex flex-col justify-between items-end">
                <Skeleton className="w-[6em] h-[8.5em] md:w-[10em] md:h-[13em] rounded-xl mt-[3em]" />
                <Skeleton className="w-[70%] h-32 rounded-3xl" />
              </div>
            </div>

            {/* Bottom Content */}
            <div className="w-4/5 md:w-4/7 space-y-6">
              <div className="space-y-4">
                <Skeleton className="w-full h-4 rounded" />
                <Skeleton className="w-[90%] h-4 rounded" />
                <ScoreLine />
                <Skeleton className="w-full h-4 rounded" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <InfoItem mobile />
                <InfoItem mobile />
                <InfoItem mobile />
                <InfoItem mobile />
              </div>
            </div>
          </div>

          {/* Fixed Navigation Skeleton */}
          <div className="fixed bottom-[15vh] md:bottom-16 left-0 w-full p-4 md:p-8 z-50 pointer-events-none">
            <div className="max-w-7xl mx-auto flex justify-between items-center gap-4 relative">
              <Skeleton className="w-12 h-12 rounded-full" />
              <Skeleton className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full" />
              <Skeleton className="w-12 h-12 rounded-full" />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

function InfoItem({ mobile }: { mobile?: boolean }) {
  return (
    <div className="space-y-2">
      <Skeleton className={`w-20 h-4 rounded ${mobile ? "h-3" : ""}`} />
      <Skeleton className={`w-full h-8 rounded ${mobile ? "h-6" : ""}`} />
    </div>
  );
}

function ScoreLine() {
  return <div className="h-2" />;
}
