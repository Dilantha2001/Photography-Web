import React from "react";
import pic3 from "../assets/girl.jpg";
import logo11 from "../assets/logo11.png";
import logo12 from "../assets/logo12.jpeg";
import logo13 from "../assets/logo13.png";

function Portfolio() {
  return (
    <div className="w-full h-[500px] bg-amber-50 ">
      <div className="flex items-center flex-col justify-center gap-10">
        <h1 className="text-7xl uppercase mt-10 font-noto-serif italic">
          my portfolio
        </h1>
        <button className="bg-[#c7c4c4] py-4 px-20 cursor-pointer uppercase">
          view more work
        </button>
      </div>
      <br />
      <div className="flex  justify-center mt-15 bg-amber-50">
        <div className="  flex  items-center  border-gray-300 gap-10 ">
          <div className="w-[350px] h-[500px]">
            <img className="bg-cover w-full h-full" src={pic3} alt="" />
          </div>
          <div className="">
            <br />
            <h3 className=" font-extralight text-xl uppercase font-noto-serif ">
              -MEET WHITENY-
            </h3>
            <p className="font-noto-serif font-extralight italic text-2xl p-5">
              Honest imagery—effortless elegance. <br /> Nostalgia-invoking{" "}
              <br /> wedding photography.
            </p>
            <br />
            <p className="w-[600px] font-medium text-lg ">
              Based in Vail, Colorado, I work with couples who value emotion,
              intentional details, and imagery that feels deeply personal.
              Rooted in documenting your love story with intention, emotion, and
              refined storytelling, I create imagery that reflects the depth of
              your experience—honest, beautiful, and completely your own.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-evenly items-center bg-amber-50 h-[300px]">
        <p className="text-lg  font-noto-serif font-extralight uppercase pl-[15%]">
          As we seen:
        </p>
        <img src={logo11} alt="" />
        <img src={logo12} alt="" />
        <img src={logo13} alt="" />
      </div>
    </div>
  );
}

export default Portfolio;
