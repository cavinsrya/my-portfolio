"use client";

import { ReactNode } from "react";

interface DarkCardContainerProps {
  children: ReactNode;
}

export default function DarkCardContainer({
  children,
}: DarkCardContainerProps) {
  return (
    <section className="relative z-20 w-full pb-12 -mt-20 md:-mt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-[#0a0a0a] rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 text-white shadow-2xl">
          <div className="flex flex-col space-y-24">{children}</div>
        </div>
      </div>
    </section>
  );
}
