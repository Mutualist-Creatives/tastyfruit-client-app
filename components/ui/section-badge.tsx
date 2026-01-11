"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SectionBadgeProps = {
  label: string;
  className?: string;
  wrapperClassName?: string;
};

export default function SectionBadge({
  label,
  className = "",
  wrapperClassName = "",
}: SectionBadgeProps) {
  const pathname = usePathname();
  const isArticlePage = pathname?.startsWith("/artikel/");

  const content = (
    <div
      className={`font-bricolage-grotesque-condensed text-[#B5FE28] font-extrabold bg-[#003BE2] w-fit ${className}`}
    >
      {label}
    </div>
  );

  return (
    <div className={wrapperClassName}>
      {isArticlePage ? (
        <Link href="/artikel" className="cursor-pointer">
          {content}
        </Link>
      ) : (
        content
      )}
    </div>
  );
}
