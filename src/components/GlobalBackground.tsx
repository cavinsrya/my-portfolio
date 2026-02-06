"use client";

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-white pointer-events-none">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="absolute inset-0 bg-white/30 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div
        className="absolute 
        top-0 -right-10 md:-top-[5%] md:-right-[5%] 2xl:-top-[10%] 2xl:-right-[10%] 
        w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 2xl:w-[500px] 2xl:h-[500px] 
        rounded-full bg-blue-500 
        blur-[60px] md:blur-[80px] 2xl:blur-[100px] 
        opacity-60 mix-blend-multiply animate-blob"
      />

      <div
        className="absolute 
        top-[30%] -left-10 md:top-[25%] md:-left-[5%] 2xl:top-[20%] 2xl:-left-[10%] 
        w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 2xl:w-[500px] 2xl:h-[500px] 
        rounded-full bg-lime-500 
        blur-[60px] md:blur-[80px] 2xl:blur-[100px] 
        opacity-60 mix-blend-multiply animate-blob animation-delay-2000"
      />

      <div
        className="absolute 
        bottom-[5%] -right-10 md:bottom-[10%] md:right-[10%] 2xl:bottom-[10%] 2xl:right-[20%] 
        w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 2xl:w-[400px] 2xl:h-[400px] 
        rounded-full bg-pink-500 
        blur-[60px] md:blur-[80px] 2xl:blur-[100px] 
        opacity-60 mix-blend-multiply animate-blob animation-delay-7000"
      />
    </div>
  );
}
