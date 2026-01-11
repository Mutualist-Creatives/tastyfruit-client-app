import Container from "@/components/layout/container";
import FullContainer from "@/components/layout/full-container";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="relative w-full h-auto">
      {/* PUBLIKASI SECTION SKELETON (Split: Text Left, Image Right) */}
      <Container>
        <div className="w-full mx-auto py-12">
          <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2 sm:items-start lg:grid-cols-[4fr_6fr] sm:gap-12">
            {/* Left Column: Header & Content */}
            <div className="w-full flex flex-col items-center sm:items-start gap-8">
              {/* Header */}
              <div className="flex flex-col items-center sm:items-start w-full">
                <Skeleton className="w-32 h-6 md:h-8 mb-3 rounded" />
                <Skeleton className="w-48 md:w-64 h-10 md:h-14 rounded" />
              </div>

              {/* Text Description */}
              <div className="w-[80%] sm:w-full lg:w-[70%] space-y-4 flex flex-col items-center sm:items-start">
                <Skeleton className="w-full h-4 md:h-5 rounded" />
                <Skeleton className="w-[90%] h-4 md:h-5 rounded" />
                <Skeleton className="w-[95%] h-4 md:h-5 rounded" />
              </div>

              {/* CTA & Decoration */}
              <div className="flex flex-col items-center sm:items-start gap-4">
                <Skeleton className="w-40 md:w-52 h-10 md:h-12 rounded-full" />
                <Skeleton className="w-16 h-16 rounded-full opacity-50" />
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="w-full h-[250px] sm:h-[400px] sm:col-start-2 sm:row-start-1 sm:row-span-2 rounded-3xl lg:rounded-4xl overflow-hidden relative">
              <Skeleton className="w-full h-full rounded-3xl lg:rounded-4xl" />
            </div>
          </div>
        </div>
      </Container>

      {/* RESEP TASTY SECTION SKELETON (Split: Marquee Left, Content Right) */}
      <FullContainer>
        <div className="flex flex-col gap-8 w-full mx-auto py-12 sm:grid sm:grid-cols-2 sm:items-start lg:grid-cols-[6fr_4fr] sm:gap-x-12">
          {/* Right Column (Header & Content) - Mobile: Top, Desktop: Right */}
          <div className="w-full flex flex-col items-center sm:items-end px-6 lg:px-20 order-first sm:col-start-2 sm:row-start-1">
            <div className="flex flex-col items-center sm:items-end w-full mb-8">
              <Skeleton className="w-32 h-6 md:h-8 mb-3 rounded" />
              <Skeleton className="w-48 md:w-64 h-10 md:h-14 rounded" />
            </div>
          </div>

          {/* Left Column (Marquee Placeholder) */}
          <div className="w-full flex flex-col gap-4 sm:col-start-1 sm:row-start-1 sm:row-span-2 order-2 sm:order-first">
            <div className="flex gap-4 overflow-hidden">
              {[1, 2, 3].map((i) => (
                <Skeleton
                  key={i}
                  className="w-40 h-44 sm:w-52 sm:h-60 md:w-60 md:h-72 lg:w-[255px] lg:h-[300px] rounded-2xl flex-shrink-0"
                />
              ))}
            </div>
            <div className="flex gap-4 overflow-hidden pl-10">
              {[1, 2, 3].map((i) => (
                <Skeleton
                  key={i}
                  className="w-40 h-44 sm:w-52 sm:h-60 md:w-60 md:h-72 lg:w-[255px] lg:h-[300px] rounded-2xl flex-shrink-0"
                />
              ))}
            </div>
          </div>

          {/* Right Column Content Continued (Description & CTA) */}
          <div className="flex flex-col items-center sm:items-end text-center sm:text-right space-y-8 px-6 lg:px-20 order-3 sm:col-start-2">
            <div className="w-full max-w-md space-y-4 flex flex-col items-center sm:items-end">
              <Skeleton className="w-full h-4 md:h-5 rounded" />
              <Skeleton className="w-[90%] h-4 md:h-5 rounded" />
              <Skeleton className="w-[85%] h-4 md:h-5 rounded" />
            </div>
            <div className="flex flex-col items-center sm:items-end gap-4">
              <Skeleton className="w-40 md:w-52 h-10 md:h-12 rounded-full" />
              <Skeleton className="w-16 h-16 rounded-full opacity-50" />
            </div>
          </div>
        </div>
      </FullContainer>
    </section>
  );
}
