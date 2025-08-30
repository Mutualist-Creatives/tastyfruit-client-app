import Image from "next/image";

export default function HubungiTasty() {
  return (
    <>
      <section className="relative w-full h-auto overflow-hidden">
        {/* Banana Image as Absolute */}
        <div className="absolute -right-15 top-0 hidden lg:block">
          <Image
            src="/assets/ui/pisang.svg"
            alt="Pisang"
            width={800}
            height={900}
            className="object-contain w-[60rem] translate-x-[16em]"
          />
        </div>

        {/* Content */}
        <div className="lex flex-col w-full h-auto mx-auto max-w-full md:max-w-7xl px-4 sm:px-6 lg:px-15 font-nunito py-12 justify-center items-center">
          <div className="flex flex-col w-full lg:w-[60%]">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              {/* Left Content */}
              <div className="flex flex-col items-center lg:items-start gap-2 flex-1">
                <div className="font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold text-2xl sm:text-3xl md:text-2xl lg:text-7xl bg-[#003BE2] px-3 sm:px-4 py-2 -mb-2 tracking-wide -rotate-3">
                  INGIN TAHU LEBIH?
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-9 mb-3">
                  <div className="font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-7xl bg-[#B5FE28] px-3 sm:px-4 py-2 tracking-wide ms-[1.75em]">
                    HUBUNGI KAMI
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-5">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Address Section */}
                <div className="flex flex-col flex-2 max-w-md">
                  <div className="w-full flex justify-center lg:justify-start items-center">
                    <Image
                      src="/assets/ui/location.svg"
                      alt="Location"
                      width={60}
                      height={60}
                      className="w-5 h-5"
                    />
                    <div className="font-nunito text-[#003CE9] text-base sm:text-lg md:text-lg font-bold ml-2">
                      GRAHA DSN
                    </div>
                  </div>
                  <div className="font-nunito text-[#003CE9] text-base sm:text-lg md:text-lg font-normal ml-7 mt-1">
                    Jl. Pulo Ayang Kav. OR3 Kawasan Industri Pulogadung Cakung,
                    Jakarta Timur DKI Jakarta, 13260
                  </div>
                </div>

                {/* Vertical Line */}
                <div className="hidden lg:block w-[0.25em] rounded-full bg-[#003CE9] mx-4"></div>

                {/* Contact Section */}
                <div className="flex flex-col flex-2 justify-between">
                  {/* Phone */}
                  <div className="flex items-center">
                    <Image
                      src="/assets/ui/telephone.svg"
                      alt="Phone"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                    <div className="font-nunito text-[#003CE9] text-base sm:text-lg md:text-lg font-normal ml-2">
                      +62 21 1234 5678
                    </div>
                  </div>
                  {/* Instagram */}
                  <div className="flex items-center">
                    <Image
                      src="/assets/ui/instagram.svg"
                      alt="Instagram"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                    <div className="font-nunito text-[#003CE9] text-base sm:text-lg md:text-lg font-normal ml-2">
                      tastyfruit.id
                    </div>
                  </div>
                  {/* Email */}
                  <div className="flex items-center">
                    <Image
                      src="/assets/ui/mail.svg"
                      alt="Email"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                    <div className="font-nunito text-[#003CE9] text-base sm:text-lg md:text-lg font-normal ml-2">
                      halo@tastyfruit.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-[3em]">
              <Image
                src="/assets/decorations/heart.svg"
                alt="Heart"
                width={20}
                height={20}
                className="w-[6em] h-[6em]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
