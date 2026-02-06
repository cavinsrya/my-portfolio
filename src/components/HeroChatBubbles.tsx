"use client";

export default function HeroChatBubbles() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 w-full h-full max-w-7xl mx-auto px-4 overflow-hidden">
      <div
        className="absolute animate-float 
        /* Mobile */
        top-[15%] left-[30%] scale-75 origin-top-left
        /* Tablet */
        md:top-[20%] md:left-[40%] md:scale-90
        /* LG */
        lg:top-[10%] lg:left-[20%] lg:scale-90
        /* XL */
        xl:top-[8%] xl:left-[20%] xl:scale-100
        /* 2XL (Original) */
        2xl:top-[15%] 2xl:left-[20%]
      "
      >
        <div className="relative bg-gradient-to-r from-blue-300 to-blue-500 text-white px-4 py-1.5 md:px-6 md:py-2 rounded-2xl rounded-br-none shadow-lg transform rotate-6">
          <span className="font-sans font-semibold text-sm md:text-base">
            Hola!
          </span>
          <div className="absolute bottom-0 -right-2 w-3 h-3 md:w-4 md:h-4 bg-blue-500 [clip-path:polygon(0_0,0%_100%,100%_100%)]"></div>
        </div>
      </div>

      <div
        className="absolute animate-float animation-delay-2000
        /* Mobile */
        top-[28%] left-[3%] scale-75 origin-left
        /* Tablet */
        md:top-[40%] md:left-[5%] md:scale-90
        /* Lg */
        lg:top-[40%] lg:left-[5%] lg:scale-90
        /* XL */
        xl:top-[40%] xl:left-[10%] xl:scale-100
        /* 2XL (Original) */
        2xl:top-[35%] 2xl:left-[5%]
      "
      >
        <div className="relative bg-gradient-to-r from-pink-300 to-pink-500 text-white px-4 py-1.5 md:px-6 md:py-2 rounded-2xl rounded-br-none shadow-lg transform -rotate-1">
          <span className="font-sans font-semibold text-sm md:text-base">
            Portfolio
          </span>
          <div className="absolute bottom-0 -right-2 w-3 h-3 md:w-4 md:h-4 bg-pink-500 [clip-path:polygon(0_0,0%_100%,100%_100%)]"></div>
        </div>
      </div>

      <div
        className="absolute animate-float animation-delay-1000
        /* Mobile */
        top-[18%] right-[5%] scale-75 origin-top-right
        /* Tablet */
        md:top-[50%] md:right-[5%] md:scale-90
        /* Laptop */
        lg:top-[25%] lg:right-[5%] lg:scale-90
        /* XL  */
        xl:top-[25%] xl:right-[10%] xl:scale-100
        /* 2XL (Original) */
        2xl:top-[30%] 2xl:right-[10%]
      "
      >
        <div className="relative bg-gradient-to-r from-lime-300 to-lime-500 text-white px-4 py-1.5 md:px-6 md:py-2 rounded-2xl rounded-br-none shadow-lg transform -rotate-3">
          <span className="font-sans font-semibold text-sm md:text-base">
            2026
          </span>
          <div className="absolute bottom-0 -left-2 w-3 h-3 md:w-4 md:h-4 bg-lime-300 [clip-path:polygon(100%_0,0%_100%,100%_100%)]"></div>
        </div>
      </div>
    </div>
  );
}
