import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="relative w-full overflow-hidden">
      {[1, 2, 3].map((_, index) => (
        <div key={index} className="w-full relative">
          {/* Background shape mimic */}
          <div
            className={`absolute top-0 ${
              index % 2 === 0 ? "left-0" : "right-0"
            } w-1/2 h-full bg-gray-50/50 -z-10`}
          />

          <div className="w-full max-w-full 2xl:max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center px-6 sm:px-10 lg:px-20 py-20 lg:py-32">
              {index % 2 === 0 ? (
                // Left Text, Right Image
                <>
                  <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
                    <Skeleton className="w-48 h-10 rounded-full" />
                    <div className="space-y-2 w-full flex flex-col items-center md:items-start">
                      <Skeleton className="w-full md:w-[80%] h-12 rounded-lg" />
                      <Skeleton className="w-[80%] md:w-[60%] h-12 rounded-lg" />
                    </div>
                    <div className="space-y-3 w-full flex flex-col items-center md:items-start">
                      <Skeleton className="w-full h-4 rounded" />
                      <Skeleton className="w-[90%] h-4 rounded" />
                      <Skeleton className="w-full h-4 rounded" />
                    </div>
                    <Skeleton className="w-40 h-12 rounded-full mt-4" />
                  </div>
                  <div className="flex items-center justify-center order-1 md:order-2">
                    <Skeleton className="w-full max-w-sm aspect-square rounded-[3rem]" />
                  </div>
                </>
              ) : (
                // Left Image, Right Text
                <>
                  <div className="flex items-center justify-center order-1">
                    <Skeleton className="w-full max-w-sm aspect-square rounded-[3rem]" />
                  </div>
                  <div className="space-y-6 flex flex-col items-center md:items-end text-center md:text-right order-2">
                    <Skeleton className="w-48 h-10 rounded-full" />
                    <div className="space-y-2 w-full flex flex-col items-center md:items-end">
                      <Skeleton className="w-full md:w-[80%] h-12 rounded-lg" />
                      <Skeleton className="w-[80%] md:w-[60%] h-12 rounded-lg" />
                    </div>
                    <div className="space-y-3 w-full flex flex-col items-center md:items-end">
                      <Skeleton className="w-full h-4 rounded" />
                      <Skeleton className="w-[90%] h-4 rounded" />
                      <Skeleton className="w-full h-4 rounded" />
                    </div>
                    <Skeleton className="w-40 h-12 rounded-full mt-4" />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
