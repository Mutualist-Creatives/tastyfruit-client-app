import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="relative w-full h-auto mx-auto overflow-hidden">
      {/* Desktop Banana Placeholder */}
      <div className="w-full h-full -z-10 absolute top-0 hidden md:block">
        <Skeleton className="w-[40rem] lg:w-[60rem] h-[600px] translate-x-[55vw] mt-10 rounded-full opacity-20" />
      </div>

      <div className="flex flex-col w-full h-screen mx-auto max-w-[1440px] px-6 lg:px-12 pt-12 -mb-34">
        <div className="flex md:flex-col w-full md:w-[65%] lg:w-[60%] items-start gap-2">
          {/* Header Skeleton */}
          <div className="w-[50%] md:w-full flex flex-col items-start gap-2">
            <Skeleton className="w-48 md:w-80 h-8 md:h-16 -rotate-3 rounded-lg" />
            <Skeleton className="w-48 md:w-80 h-8 md:h-20 ml-4 md:ml-28 rounded-lg" />
          </div>

          {/* Contact Info Skeleton */}
          <div className="mt-8 w-[50%] md:w-full max-w-2xl">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              {/* Address Section */}
              <div className="flex flex-col items-start flex-1 gap-4">
                <div className="flex items-center gap-2">
                  <Skeleton className="w-6 h-6 rounded-full" />
                  <Skeleton className="w-32 h-6 rounded" />
                </div>
                <div className="ml-0 md:ml-8 space-y-2 w-full">
                  <Skeleton className="w-full h-4 rounded" />
                  <Skeleton className="w-[80%] h-4 rounded" />
                </div>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px rounded-full bg-gray-200 mx-4"></div>
              <Skeleton className="block md:hidden w-full h-px my-2" />

              {/* Contacts Section */}
              <div className="flex flex-col items-start flex-1 gap-4">
                <div className="flex items-center gap-2">
                  <Skeleton className="w-5 h-5 rounded-full" />
                  <Skeleton className="w-32 h-5 rounded" />
                </div>
                <div className="flex items-center gap-2">
                  <Skeleton className="w-5 h-5 rounded-full" />
                  <Skeleton className="w-32 h-5 rounded" />
                </div>
                <div className="flex items-center gap-2">
                  <Skeleton className="w-5 h-5 rounded-full" />
                  <Skeleton className="w-40 h-5 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
