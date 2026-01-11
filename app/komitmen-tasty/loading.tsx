import { Skeleton } from "@/components/ui/skeleton";
import Container from "@/components/layout/container";

export default function Loading() {
  return (
    <Container>
      <section className="relative w-full h-auto">
        <div className="mx-auto">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8 md:gap-4">
            <div className="flex flex-col items-start gap-2 w-full md:w-auto">
              <Skeleton className="w-32 h-6 rounded px-1.5 py-0 md:px-2 md:py-0.5" />
              <div className="flex flex-row items-center gap-4 sm:gap-9 mb-3">
                <Skeleton className="w-32 h-10 md:h-14 rounded-lg" />
                <Skeleton className="w-48 h-12 md:h-16 rounded-lg -rotate-3" />
              </div>
              <Skeleton className="w-64 h-10 md:h-14 rounded-lg -mt-2" />
            </div>
            {/* Mobile Heart Placeholder */}
            <div className="flex md:hidden w-full md:w-auto justify-center md:justify-end">
              <Skeleton className="w-32 h-32 rounded-full" />
            </div>
          </div>

          {/* Content under header */}
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6 md:gap-8 mt-2 md:mt-8">
            <div className="w-full md:w-[55%] space-y-5">
              <div className="space-y-2">
                <Skeleton className="w-full h-4 rounded" />
                <Skeleton className="w-[95%] h-4 rounded" />
                <Skeleton className="w-[90%] h-4 rounded" />
              </div>
              <div className="space-y-2">
                <Skeleton className="w-full h-4 rounded" />
                <Skeleton className="w-[95%] h-4 rounded" />
                <Skeleton className="w-[85%] h-4 rounded" />
              </div>
            </div>
            {/* Desktop Heart Placeholder */}
            <div className="hidden md:flex w-full md:w-[40%] justify-center items-center">
              <Skeleton className="w-64 h-64 lg:w-72 lg:h-72 rounded-full" />
            </div>
          </div>

          {/* Three Commitments Section */}
          <div className="mt-12 mb-6">
            <Skeleton className="w-64 h-8 rounded-lg" />
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-[2em]">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-full lg:w-1/3 space-y-5">
                <Skeleton className="w-40 h-10 rounded-lg -mb-2" />
                <div className="space-y-2">
                  <Skeleton className="w-full h-4 rounded" />
                  <Skeleton className="w-[95%] h-4 rounded" />
                  <Skeleton className="w-[90%] h-4 rounded" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="w-full h-4 rounded" />
                  <Skeleton className="w-[80%] h-4 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}
