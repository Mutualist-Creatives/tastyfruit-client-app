"use client";

import { usePathname } from "next/navigation";

interface ConditionalWrapperProps {
  children: React.ReactNode;
}

export default function ConditionalWrapper({
  children,
}: ConditionalWrapperProps) {
  const pathname = usePathname();
  const isFullWidthPage = pathname === "/";

  if (isFullWidthPage) {
    return (
      <main className="flex-1 w-full min-h-screen bg-white">{children}</main>
    );
  }

  return (
    <main className="flex-1 w-full min-h-screen bg-white">
      <div className="w-full h-auto mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-20 font-nunito py-12">
        {children}
      </div>
    </main>
  );
}
