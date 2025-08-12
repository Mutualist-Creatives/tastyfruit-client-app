"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  {
    label: "Beranda",
    href: "/",
  },
  {
    label: "Kisah Tasty",
    href: "/about",
  },
  {
    label: "Produk",
    href: "/works",
  },
  {
    label: "Komitmen Tasty",
    href: "/services",
  },
  {
    label: "Artikel",
    href: "/artikel",
  },
  {
    label: "Tasty Universe",
    href: "/tasty-universe",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Hubungi Tasty",
    href: "/hubungi-tasty",
  },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full h-auto relative sticky top-0 z-50">
      <div className="w-full bg-[#003CE9] font-nunito text-white">
        {/* Main Header Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[5em]">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 pr-5">
              <Link href="/" className="flex items-center">
                <Image
                  src="/assets/tasty-fruit-logo.png"
                  alt="Tasty Fruit Logo"
                  width={40}
                  height={40}
                  className="sm:w-12 sm:h-12 lg:w-14 lg:h-14"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-2 rounded-full text-sm font-semibold transition-colors whitespace-nowrap ${
                    pathname === item.href
                      ? "bg-white/20 text-white"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Large Screen Navigation (fewer items visible) */}
            <nav className="hidden lg:flex xl:hidden items-center space-x-1">
              {navItems.slice(0, 5).map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-2 rounded-full text-sm font-semibold transition-colors whitespace-nowrap ${
                    pathname === item.href
                      ? "bg-white/20 text-white"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              {/* More button for remaining items */}
              <div className="relative group">
                <button className="px-3 py-2 rounded-full text-sm font-semibold text-white hover:bg-white/10">
                  Lainnya
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {navItems.slice(5).map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 first:rounded-t-md last:rounded-b-md ${
                        pathname === item.href
                          ? "bg-blue-50 text-[#003CE9]"
                          : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-white hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-4 py-4 bg-[#003CE9] border-t border-white/10">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                    pathname === item.href
                      ? "bg-white/20 text-white"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
