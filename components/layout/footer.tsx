// Tambahkan ini di baris paling atas untuk menjadikan ini Client Component
"use client";

import Image from "next/image";
// Impor hook usePathname dari next/navigation
import { usePathname } from "next/navigation";

// KOMPONEN 1: Footer untuk Landing Page ("/")
// Ini adalah kode footer Anda yang sudah ada, dibungkus dalam komponen sendiri.
function LandingPageFooter() {
  return (
    <>
      <div className="w-full h-[1em] bg-[#003CE9]"></div>
      <footer className="relative w-full h-auto overflow-hidden mx-auto max-w-[1440px]">
        {/* Blue top border */}

        {/* Banana Image for Tablet/Desktop */}
        <div className="hidden md:block -z-10 absolute -bottom-10 md:-right-15 md:top-0">
          <Image
            src="/assets/ui/pisang.svg"
            alt="Pisang"
            width={800}
            height={900}
            className="object-contain w-[17.5rem] md:w-[40rem] translate-x-[12.5em] md:translate-x-[15em] lg:w-[55rem] lg:translate-x-[20em]"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col w-full h-auto mx-auto max-w-full px-4 sm:px-6 lg:px-20 font-nunito py-12">
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
          </div>
        </div>

        {/* Banana image specifically for mobile view, in normal flow */}
        <div className="w-full mt-12 md:hidden">
          <Image
            src="/assets/ui/pisang.svg"
            alt="Pisang"
            width={800}
            height={900}
            className="w-full h-auto"
          />
        </div>
      </footer>
      {/* Blue bottom border */}
      <div className="w-full h-[2em] bg-[#003CE9]"></div>
    </>
  );
}

// KOMPONEN 2: Footer baru untuk semua halaman selain landing page
function DefaultFooter() {
  // Mengambil tahun saat ini secara dinamis
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { src: "/assets/ui/location-white.svg", alt: "Location" },
    { src: "/assets/ui/telephone-white.svg", alt: "Telephone" },
    { src: "/assets/ui/email-white.svg", alt: "Email" },
    { src: "/assets/ui/instagram-white.svg", alt: "Instagram" },
  ];

  return (
    <footer className="bg-[#003CE9] w-full mx-auto max-w-full px-4 sm:px-6 lg:px-20">
      {/* Konten Utama Footer */}
      <div className="flex flex-col sm:flex-row justify-between items-center w-full mx-auto max-w-full 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-20 py-4 gap-4">
        {/* Kiri: Copyright */}
        <p className="font-nunito text-white text-sm text-center sm:text-left">
          &copy; {currentYear} Tasty Fruit. All Rights Reserved.
        </p>

        {/* Kanan: Ikon Sosial Media */}
        <div className="flex items-center gap-4">
          {socialIcons.map((icon) => (
            <a href="#" key={icon.alt} aria-label={icon.alt}>
              <Image
                src={icon.src}
                alt={icon.alt}
                width={24}
                height={24}
                className="w-5 h-5"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// KOMPONEN UTAMA: Penyeleksi Footer
// Komponen ini yang akan di-export dan digunakan di layout Anda.
export default function Footer() {
  const pathname = usePathname();

  // Jika pathname adalah landing page ('/'), tampilkan footer besar.
  // Jika tidak, tampilkan footer default yang simpel.
  if (pathname === "/") {
    return <LandingPageFooter />;
  }

  return <DefaultFooter />;
}
