import Image from "next/image";

export default function HubungiTasty() {
  return (
    <>
      <section className="relative w-full h-screen overflow-hidden">
        {/* Banana Image for Tablet/Desktop */}
        {/* ADJUSTED: Now explicitly hidden on mobile */}
        <div className="hidden md:block -z-10 absolute -bottom-10 md:-right-15 2xl:right-1/3 md:top-0">
          <Image
            src="/assets/ui/pisang.svg"
            alt="Pisang"
            width={800}
            height={900}
            className="object-contain w-[17.5rem] md:w-[40rem] translate-x-[12.5em] md:translate-x-[15em] lg:w-[55rem] lg:translate-x-[20em]"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col w-full h-auto mx-auto max-w-full 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-20 font-nunito py-12">
          <div className="flex flex-col w-full md:w-[65%] lg:w-[60%] items-center md:items-start">
            {/* Heading Section */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold text-4xl md:text-5xl lg:text-6xl bg-[#003BE2] px-3 sm:px-4 py-2 -mb-2 tracking-wide -rotate-3">
                INGIN TAHU LEBIH?
              </div>
              <div className="font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-5xl md:text-6xl lg:text-7xl bg-[#B5FE28] px-3 sm:px-4 py-2 tracking-wide md:ml-7">
                HUBUNGI KAMI
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-8 w-full max-w-2xl">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Address Section */}
                <div className="flex flex-col items-center md:items-start flex-1">
                  <div className="w-full flex justify-center md:justify-start items-center">
                    <Image
                      src="/assets/ui/location-blue.svg"
                      alt="Location"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <div className="text-[#003CE9] text-base sm:text-lg md:text-sm lg:text-base xl:text-lg font-bold ml-2">
                      GRAHA DSN
                    </div>
                  </div>
                  <div className="text-[#003CE9] text-base sm:text-lg md:text-sm lg:text-base xl:text-lg text-center md:text-left font-normal ml-0 md:ml-8 mt-1">
                    Jl. Pulo Ayang Kav. OR3 Kawasan Industri Pulogadung Cakung,
                    Jakarta Timur DKI Jakarta, 13260
                  </div>
                </div>

                {/* Vertical Line for Tablet & Desktop */}
                <div className="hidden md:block w-px rounded-full bg-[#003CE9]/50 mx-4"></div>
                {/* Horizontal line for mobile */}
                <hr className="md:hidden w-full my-2 md:my-4 border-[#003CE9]/20" />

                {/* Contact Section */}
                {/* ADJUSTED: Contact info is now centered on mobile, left-aligned on tablet+ */}
                <div className="flex flex-col items-center md:items-start flex-1 gap-2">
                  <div className="flex items-center">
                    <Image
                      src="/assets/ui/telephone-blue.svg"
                      alt="Phone"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                    <div className="text-[#003CE9] text-base sm:text-lg md:text-sm lg:text-base xl:text-lg font-normal ml-2">
                      +62 21 1234 5678
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src="/assets/ui/instagram-blue.svg"
                      alt="Instagram"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                    <div className="text-[#003CE9] text-base sm:text-lg md:text-sm lg:text-base xl:text-lg font-normal ml-2">
                      tastyfruit.id
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src="/assets/ui/email-blue.svg"
                      alt="Email"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                    <div className="text-[#003CE9] text-base sm:text-lg md:text-sm lg:text-base xl:text-lg font-normal ml-2">
                      halo@tastyfruit.com
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Heart Icon */}
            <div className="hidden md:flex items-center mt-12">
              <Image
                src="/assets/decorations/heart.svg"
                alt="Heart"
                width={100}
                height={100}
                className="w-20 h-20 md:hidden lg:block lg:w-[6em] lg:h-[6em]"
              />
            </div>
          </div>
        </div>

        {/* NEW: Banana image specifically for mobile view, in normal flow */}
        <div className="w-full mt-12 md:hidden">
          <Image
            src="/assets/ui/pisang-blue.svg"
            alt="Pisang"
            width={800}
            height={900}
            className="w-full h-auto"
          />
        </div>
      </section>
    </>
  );
}
