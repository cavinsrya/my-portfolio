"use client";

import Image from "next/image";
import { projectsData } from "@/constant/projects";

export default function Projects() {
  return (
    <section id="projects">
      <div className="w-full">
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-3xl font-normal tracking-wide text-gray-200 font-display">
            Projects
          </h2>
          <div className="h-[2px] bg-white w-full flex-1 rounded-full opacity-60"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`
                relative flex flex-col rounded-[2.5rem] overflow-hidden transition-transform duration-300 hover:-translate-y-2
                ${
                  project.variant === "blue"
                    ? "bg-[#263BCA] text-white"
                    : "bg-[#2D2D2D] text-gray-400"
                }
              `}
            >
              <div className="p-8 pb-4">
                <h3
                  className={`text-2xl font-bold font-sans mb-4 ${
                    project.variant === "blue" ? "text-white" : "text-[#ABE851]"
                  }`}
                >
                  {project.title}
                </h3>
                <p className="text-md md:text-sm lg:text-md text-white leading-relaxed font-display">
                  {project.description}
                </p>
              </div>

              <div className="mt-auto w-full relative">
                <div className="relative w-full aspect-[4/3] rounded-t-4xl overflow-hidden ">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
