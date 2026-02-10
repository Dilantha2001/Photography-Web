import React from "react";
import pic3 from "../assets/girl.jpg";
import logo11 from "../assets/logo11.png";
import logo12 from "../assets/logo12.jpeg";
import logo13 from "../assets/logo13.png";

function Portfolio() {
  return (
    <div className="w-full h-auto bg-amber-50 pb-10">
      <div className="flex flex-col items-center justify-center gap-6 md:gap-10 pt-10 md:pt-10 px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl uppercase mt-10 font-noto-serif italic text-center text-gray-800">
          My Portfolio
        </h1>
        <button className="bg-gray-700 text-white py-3 md:py-4 px-8 md:px-20 cursor-pointer uppercase text-sm font-noto-serif font-light tracking-wider hover:bg-gray-800 transition-colors">
          View More Work
        </button>
      </div>
      <br />
      <div className="flex flex-col lg:flex-row justify-center mt-10 md:mt-15 bg-amber-50 px-4 gap-8">
        <div className="flex flex-col lg:flex-row items-center border-gray-300 gap-6 lg:gap-10">
          <div className="w-full max-w-[280px] md:max-w-[350px] h-[300px] md:h-[500px]">
            <img className="bg-cover w-full h-full" src={pic3} alt="" />
          </div>
          <div className="text-center lg:text-left">
            <br />
            <h3 className="font-noto-serif font-light text-lg md:text-xl uppercase tracking-wider text-center text-gray-600">
              -Meet Whitney-
            </h3>
            <p className="font-noto-serif font-light italic text-xl md:text-2xl p-4 lg:p-5 text-gray-700">
              Honest imagery—effortless elegance. <br /> Nostalgia-invoking{" "}
              <br /> wedding photography.
            </p>
            <br />
            <p className="w-full md:max-w-[600px] font-noto-serif font-light text-gray-500 px-4 leading-relaxed">
              Based in Vail, Colorado, I work with couples who value emotion,
              intentional details, and imagery that feels deeply personal.
              Rooted in documenting your love story with intention, emotion, and
              refined storytelling, I create imagery that reflects the depth of
              your experience—honest, beautiful, and completely your own.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-evenly items-center bg-amber-50 h-auto py-10 gap-6">
        <p className="text-sm md:text-lg font-noto-serif font-light uppercase tracking-wider text-center text-gray-500">
          As seen in:
        </p>
        <img src={logo11} alt="" className="w-24 md:w-32" />
        <img src={logo12} alt="" className="w-24 md:w-32" />
        <img src={logo13} alt="" className="w-24 md:w-32" />
      </div>
    </div>
  );
}

export default Portfolio;
