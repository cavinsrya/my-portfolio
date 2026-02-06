"use client";

import { CircleArrowDown, CircleArrowOutUpRight } from "lucide-react";
import HeroChatBubbles from "./HeroChatBubbles";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 px-4 md:px-8 overflow-hidden"
    >
      <HeroChatBubbles />
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10 -mt-20 md:-mt-40 ">
        <h1 className="text-5xl md:text-7xl font-semibold text-balance leading-tight font-sans text-black">
          Defined by vision, built with precision. Product heart, Developer art.
        </h1>

        <p className="text-base md:text-lg text-black max-w-3xl mx-auto leading-relaxed font-display text-balance">
          {
            "Transitioning from Product to Software Engineering taught me one thing: context is king. I write code that is efficient, scalable, and always centered around the end-user experience."
          }
        </p>

        <div className="flex flex-row gap-4 justify-center items-center pt-6">
          <a
            href="#about"
            className="px-8 py-3 text-white font-semibold rounded-full text-heading bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br rounded-base text-center font-display cursor-pointer inline-flex items-center justify-center transition-transform active:scale-95"
          >
            <CircleArrowDown className="inline-block w-5 h-5 mr-2" />
            More Info
          </a>
          <Link
            href="https://api.whatsapp.com/send/?phone=6285156736505&text&type=phone_number&app_absent=0"
            target="_blank"
            className="px-8 py-3 border-2 border-black text-black font-semibold rounded-full hover:bg-black hover:text-white transition-colors font-display cursor-pointer"
          >
            <CircleArrowOutUpRight className="inline-block w-5 h-5 mr-2 hover:color:#fff" />
            Lets Talk
          </Link>
        </div>
      </div>
    </section>
  );
}
