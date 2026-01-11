import { Skeleton } from "@/components/ui/skeleton";

export function HeroSkeleton() {
  return (
    <section className="w-full mb-20">
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[4fr_6fr] items-center gap-8 sm:gap-12 lg:gap-16">
          <div className="space-y-6 flex flex-col items-center lg:items-start order-2 lg:order-1">
            <Skeleton className="w-16 h-16 rounded-full hidden lg:block" />
            <div className="space-y-4 w-full flex flex-col items-center lg:items-start">
              <Skeleton className="w-3/4 h-8 rounded" />
              <Skeleton className="w-full h-8 rounded" />
              <Skeleton className="w-1/2 h-8 rounded" />
            </div>
            <Skeleton className="w-48 h-12 rounded-full" />
            <Skeleton className="w-20 h-20 rounded-full hidden lg:block" />
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <Skeleton className="w-full max-w-lg aspect-[4/3] rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function KomitmenSkeleton() {
  return (
    <section className="w-full py-16 lg:py-24">
      <div className="flex flex-col lg:flex-row gap-6 h-[400px] lg:h-[500px]">
        {/* Image Collage Skeleton */}
        <div className="w-full lg:w-[65%] h-full flex gap-4">
          <Skeleton className="w-[60%] h-full rounded-3xl" />
          <div className="w-[40%] h-full flex flex-col gap-4">
            <Skeleton className="h-full rounded-3xl" />
            <Skeleton className="h-full rounded-3xl" />
          </div>
        </div>
        {/* Content Skeleton */}
        <div className="w-full lg:w-[35%] flex flex-col justify-end gap-6">
          <div className="flex gap-2">
            <Skeleton className="w-12 h-12 rounded-full" />
            <Skeleton className="w-12 h-12 rounded-full" />
            <Skeleton className="w-12 h-12 rounded-full" />
          </div>
          <div className="space-y-4">
            <Skeleton className="w-full h-4 rounded" />
            <Skeleton className="w-[90%] h-4 rounded" />
            <Skeleton className="w-[95%] h-4 rounded" />
          </div>
          <Skeleton className="w-48 h-10 rounded-full" />
        </div>
      </div>
    </section>
  );
}

export function TastyUniverseSkeleton() {
  return (
    <section className="w-full relative overflow-hidden">
      {/* Top blue stripe */}
      <div className="hidden md:block absolute top-0 w-full h-7 md:h-13 bg-[#003BE2] z-10"></div>

      <div className="w-full h-full md:h-[50em] pb-20 md:pb-0 flex flex-col-reverse md:flex-row items-center mx-auto max-w-[1440px] gap-8 lg:gap-0">
        {/* Left content section */}
        <div className="w-full h-auto md:h-auto md:w-[50%] lg:w-[40%]">
          <div className="flex flex-col justify-center gap-6 w-full px-4 sm:px-6 lg:px-20 pb-10 md:pb-0">
            {/* Title Image Placeholder */}
            <div className="w-full flex justify-center md:justify-start">
              <Skeleton className="w-[80%] md:w-full h-24 md:h-32 rounded-xl" />
            </div>

            {/* Description Placeholder */}
            <div className="space-y-4 flex flex-col items-center md:items-start">
              <Skeleton className="w-full h-4 rounded" />
              <Skeleton className="w-[90%] h-4 rounded" />
              <Skeleton className="w-full h-4 rounded" />
            </div>

            {/* CTA Button Placeholder */}
            <div className="flex justify-center lg:justify-start mt-4">
              <Skeleton className="w-48 h-12 rounded-full" />
            </div>
          </div>
        </div>

        {/* Right section with stripes and image */}
        <div className="w-full h-auto min-h-[25em] md:min-h-0 md:h-full md:w-4/6 relative">
          <div className="block md:hidden absolute top-0 w-full h-7 bg-[#003BE2] z-10"></div>

          {/* Stripe columns background mimic */}
          <div className="absolute inset-0 flex justify-between">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div key={i} className="flex h-full">
                <div className="w-4 md:w-5 h-full bg-[#B5FE28]/50"></div>
                <div className="w-4 md:w-5 h-full bg-[#003BE2]/20"></div>
              </div>
            ))}
          </div>

          <div className="block md:hidden absolute bottom-0 w-full h-7 bg-[#003BE2] z-10"></div>

          {/* Mascot Placeholders */}
          {/* Top Left Mascot */}
          <Skeleton className="absolute top-5 left-10 w-32 h-32 md:w-48 md:h-48 rounded-full z-20" />

          {/* Bottom Center Mascot */}
          <Skeleton className="absolute bottom-10 left-1/3 w-40 h-40 md:w-64 md:h-64 rounded-full z-30 transform -translate-x-1/2" />

          {/* Top Right Mascot */}
          <Skeleton className="absolute top-20 right-10 w-32 h-32 md:w-56 md:h-56 rounded-full z-20" />
        </div>
      </div>

      {/* Bottom blue stripe */}
      <div className="absolute bottom-15 md:bottom-0 w-full h-7 md:h-13 bg-[#003BE2] z-10"></div>
    </section>
  );
}

export function WhatToCookSkeleton() {
  return (
    <section className="w-full py-12">
      <div className="flex flex-col-reverse lg:flex-row gap-10">
        <div className="w-full lg:w-[60%] space-y-4">
          <div className="flex gap-4 overflow-hidden">
            <Skeleton className="w-60 h-72 rounded-2xl flex-shrink-0" />
            <Skeleton className="w-60 h-72 rounded-2xl flex-shrink-0" />
            <Skeleton className="w-60 h-72 rounded-2xl flex-shrink-0" />
          </div>
          <div className="flex gap-4 overflow-hidden ml-10">
            <Skeleton className="w-60 h-72 rounded-2xl flex-shrink-0" />
            <Skeleton className="w-60 h-72 rounded-2xl flex-shrink-0" />
            <Skeleton className="w-60 h-72 rounded-2xl flex-shrink-0" />
          </div>
        </div>
        <div className="w-full lg:w-[40%] px-6 flex flex-col justify-center">
          <Skeleton className="w-full h-32 mb-6 rounded-xl" />
          <div className="space-y-4 mb-6">
            <Skeleton className="w-full h-4 rounded" />
            <Skeleton className="w-full h-4 rounded" />
            <Skeleton className="w-3/4 h-4 rounded" />
          </div>
          <Skeleton className="w-48 h-10 rounded-full" />
        </div>
      </div>
    </section>
  );
}

export function MedsosSkeleton() {
  return (
    <section className="w-full mt-20">
      <div className="w-full flex justify-center mb-8">
        <Skeleton className="w-[80%] h-24 rounded-xl" />
      </div>
      <div className="w-full h-96 bg-gray-100/50 relative">
        <div className="flex gap-4 justify-center items-center h-full px-4 overflow-hidden">
          <Skeleton className="w-64 h-80 rounded-2xl flex-shrink-0" />
          <Skeleton className="w-64 h-80 rounded-2xl flex-shrink-0 hidden md:block" />
          <Skeleton className="w-64 h-80 rounded-2xl flex-shrink-0 hidden lg:block" />
          <Skeleton className="w-64 h-80 rounded-2xl flex-shrink-0 hidden xl:block" />
        </div>
      </div>
    </section>
  );
}
