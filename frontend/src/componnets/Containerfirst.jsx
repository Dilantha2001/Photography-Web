import React from "react";

function Containerfirst() {
  return (
    <div className="bg-[#ebeaea] h-auto w-full mt-0 md:mt-[-150px] pb-10">
      <div className="flex flex-col md:flex-row md:justify-end md:items-start px-4 md:px-0">
        <div className="md:absolute md:right-[200px] md:mt-5 font-medium text-base md:text-lg border-y border-gray-300 py-4 md:py-0 md:border-y-0">
          <p className="max-w-[280px] md:w-[210px] italic text-center md:text-left font-noto-serif font-light text-gray-600">
            An artful & refined WEDDING photography experience designed to help
            you slow down and feel it all.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full h-auto  md:pt-[160px] px-4">
        <div className="flex items-center justify-center lg:justify-end lg:pr-[60px] lg:pl-[90px]">
          <h2 className="text-3xl md:text-4xl lg:text-6xl italic text-center lg:text-left font-noto-serif font-light text-gray-800">
            TURNING MOMENTS INTO ARTFUL, Emotionally resonant imagery.
          </h2>
        </div>
        <div className="flex items-center justify-center lg:justify-start lg:pr-[110px] lg:pl-10 text-sm md:text-base border-l-0 lg:border-l-2 border-gray-300 pl-0 py-4 lg:py-0">
          <p className="max-w-[600px] text-center lg:text-left font-noto-serif font-light text-gray-500 leading-relaxed">
            learn about WORKING TOGETHERFor couples who want to feel fully seen,
            fully supported, and fully present on their wedding day. <br />
            <br />
            My approach is designed to let you live it all—without distraction
            or performance, only thoughtful guidance. <br />
            <br />
            With a calm presence and a refined documentary style, I'll
            photograph your day as that when you return to your photographs,
            you're not just looking back—you're it naturally unfolds—so stepping
            back into it.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center mt-6 md:mt-5">
        <button className="bg-gray-700 text-white py-3 md:py-4 px-8 md:px-20 cursor-pointer uppercase text-sm font-noto-serif font-light tracking-wider hover:bg-gray-800 transition-colors">
          LEARN ABOUT WORK TOGETHER
        </button>
      </div>

      <div className="flex flex-col lg:flex-row h-auto w-full bg-white pt-8 lg:pt-[50px] gap-8 lg:gap-0 px-4">
        <div className="lg:pl-[90px]">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-noto-serif relative inline-block font-light italic text-center lg:text-left text-gray-800">
            WORKING
            <span className="hidden lg:inline absolute top-1/2 left-full w-full border-t border-black"></span>
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-8xl font-noto-serif font-light mt-2 italic text-center lg:text-left text-gray-800">
            WITH WHITNEY RAE
          </h2>
        </div>
        <div className="flex justify-center items-center lg:flex-1 lg:pt-[40px]">
          <h3 className="uppercase text-sm md:text-lg font-noto-serif font-light tracking-wider text-center text-gray-600">
            {" "}
            A thoughtful process, designed to let you be fully there— <br />
            <span className="text-center block mt-2 font-light">
              present, supported, and at ease
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Containerfirst;
