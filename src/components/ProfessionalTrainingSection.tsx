"use client";

import Image from "next/image";
import { trainingData } from "@/constant/training";

export default function ProfessionalTraining() {
  return (
    <div className="w-full">
      <div className="flex items-center gap-6 mb-12">
        <h2 className="text-3xl font-normal tracking-wide text-gray-200 font-display">
          Professional Training
        </h2>
        <div className="h-[1px] bg-gray-800 w-full flex-1 rounded-full opacity-60"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {trainingData.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden group">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent opacity-90"></div>

              <div className="absolute bottom-0 left-0 p-6 z-10 text-white w-2/3">
                <h3 className="text-xl font-semibold font-sans mb-1">
                  {item.title}
                </h3>
                <p className="text-sm font-light text-blue-100">
                  {item.academy}
                </p>
                <p className="text-xs text-blue-200 opacity-80 mt-1">
                  {item.location}
                </p>
              </div>

              <div className="absolute bottom-4 right-4 w-1/3 aspect-[4/3] bg-white rounded-lg p-1 shadow-lg transform rotate-3 transition-transform duration-300 group-hover:rotate-0 group-hover:scale-105">
                <div className="relative w-full h-full overflow-hidden rounded">
                  <Image
                    src={item.certificate}
                    alt="Certificate"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center mt-6 gap-2">
              <div className="w-4 h-4 rounded-full bg-[#a3e635] shadow-[0_0_10px_rgba(163,230,53,0.5)] border-2 border-[#0a0a0a]"></div>

              <span className="text-white font-sans font-medium tracking-widest">
                {item.year}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
