"use client";

import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="about" className="mt-12">
      <div className="w-full">
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-3xl font-normal tracking-wide text-gray-200 font-display">
            About Me
          </h2>
          <div className="h-[2px] bg-white w-full flex-1 rounded-full opacity-60"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-4 bg-[#1A1A1A] p-6 rounded-3xl w-full h-fit border border-white/5">
            <h3 className="text-[#a3e635] text-2xl md:text-xl lg:text-2xl font-medium mb-6 leading-tight font-sans">
              Cavin Surya
              <br />
              Rizqy Anugrah
            </h3>

            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <Image
                src="https://res.cloudinary.com/dohpngcuj/image/upload/v1770101076/cavin_photo_xqcxyz.png"
                alt="Cavin Surya Rizqy Anugrah"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="md:col-span-6 lg:col-span-8 space-y-6 text-gray-300 font-sans text-md md:text-sm lg:text-xl leading-relaxed">
            <p>
              <span className="text-white font-semibold">
                Hi, I&apos;m Cavin Surya.
              </span>
            </p>

            <p>
              I used to be the one asking,{" "}
              <span className="italic">
                &quot;Can we build this feature?&quot;
              </span>
              . Now, I&apos;m the one answering,{" "}
              <span className="italic text-white">
                &quot;Yes, and here is the most efficient way to engineer
                it.&quot;
              </span>
            </p>

            <p>
              Transitioning from Product to Developer gave me high standards.
              I&apos;m never satisfied with code that just{" "}
              <span className="italic">&quot;works.&quot;</span> For me, the
              true art of programming lies in its structure. I obsess over the
              questions behind the screen,{" "}
              <span className="text-gray-200">
                Is this efficient? Is the architecture clean? Is this component
                reusable for future scale?, clean code not just for performance,
                but because I understand how deeply the backend structure
                affects the frontend experience.
              </span>
            </p>

            <p>
              I believe messy code is technical debt. Well-structured code, on
              the other hand, is an investment just as valuable as a solid
              product strategy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
