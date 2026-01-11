import { Skeleton } from "@/components/ui/skeleton";
import Container from "@/components/layout/container";

export default function Loading() {
  return (
    <Container>
      <div className="w-full h-full mx-auto max-w-[1280px] flex flex-col lg:flex-row md:items-center justify-between gap-6 lg:gap-8 pt-6 pb-12">
        {/* Left Section - Content */}
        <div className="w-full h-full lg:w-1/2 lg:pr-4 xl:pr-8 mb-8 lg:mb-0">
          {/* Title Placeholder */}
          <div className="relative mb-6 lg:mb-8 flex justify-center lg:justify-start">
            <Skeleton className="w-[350px] sm:w-[400px] lg:w-[450px] h-32 rounded-xl" />
          </div>

          {/* Text Placeholder */}
          <div className="w-full lg:w-[78%] space-y-4 px-2 md:px-[6em] lg:px-0 mb-6 lg:mb-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            <Skeleton className="w-full h-4 rounded" />
            <Skeleton className="w-[90%] h-4 rounded" />
            <div className="h-2"></div>
            <Skeleton className="w-[95%] h-4 rounded" />
            <Skeleton className="w-full h-4 rounded" />
            <Skeleton className="w-[85%] h-4 rounded" />
          </div>

          {/* CTA Button Placeholder */}
          <div className="flex justify-center lg:justify-start mt-8">
            <Skeleton className="w-48 h-12 rounded-full" />
          </div>
        </div>

        {/* Right Section - Character GRID Placeholder */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end">
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3 sm:gap-5 lg:gap-4 xl:gap-4 w-full">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <div key={i} className="w-full aspect-[3/4]">
                <Skeleton className="w-full h-full rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
