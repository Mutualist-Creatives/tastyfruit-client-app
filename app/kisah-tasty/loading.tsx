import { Skeleton } from "@/components/ui/skeleton";
import Container from "@/components/layout/container";

export default function Loading() {
  return (
    <Container>
      <section className="relative w-full items-start flex overflow-hidden">
        <div className="mx-auto w-full h-full">
          <div className="relative h-full lg:h-[37.5em] flex flex-col lg:flex-row-reverse lg:gap-10 items-start pb-8 lg:pb-0">
            {/* Main Content Wrapper - Matches original structure exactly */}
            <div className="w-full flex flex-col justify-start relative z-10">
              <div className="flex flex-col items-center lg:items-start gap-2 w-full">
                {/* Badge */}
                <Skeleton className="w-32 h-6 rounded px-1 py-0.5 md:px-2 mb-1" />

                {/* Title */}
                <div className="mb-0.5 md:mb-3 flex flex-col items-center lg:items-start w-full">
                  <Skeleton className="w-[80%] md:w-[60%] h-10 md:h-14 mb-2" />
                  <Skeleton className="w-[60%] md:w-[40%] h-10 md:h-14" />
                </div>

                {/* Images Section - NESTED inside, just like page.tsx */}
                <div className="relative lg:absolute mt-5 w-full lg:w-[60%] flex items-center lg:top-[8em] xl:top-[8.5em] right-0">
                  <div className="flex w-full h-full gap-2 md:gap-4 lg:gap-4 xl:gap-6 lg:pl-20">
                    {/* Left Column */}
                    <div className="w-1/2 lg:w-[60%] flex flex-col gap-2 md:gap-4">
                      <Skeleton className="w-full min-h-[350px] lg:min-h-[430px] rounded-2xl lg:rounded-3xl" />
                    </div>
                    {/* Right Column */}
                    <div className="w-1/2 lg:w-[40%] flex flex-col gap-2 md:gap-4 lg:gap-6">
                      <Skeleton className="w-full h-[180px] lg:h-[180px] rounded-2xl lg:rounded-3xl" />
                      <Skeleton className="w-full h-[180px] lg:h-[225px] rounded-2xl lg:rounded-3xl" />
                    </div>
                  </div>
                </div>

                {/* Description - Correctly positioned in flow */}
                <div className="mt-5 w-[70%] lg:w-[40%] text-left space-y-4">
                  <Skeleton className="w-full h-4 rounded" />
                  <Skeleton className="w-[95%] h-4 rounded" />
                  <Skeleton className="w-[90%] h-4 rounded" />
                  <div className="h-2"></div>
                  <Skeleton className="w-full h-4 rounded" />
                  <Skeleton className="w-[85%] h-4 rounded" />
                </div>

                {/* CTA Button */}
                <div className="flex mx-0 justify-start mt-6">
                  <Skeleton className="w-48 h-12 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
