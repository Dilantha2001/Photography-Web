import React from "react";
import ceo from "../assets/business.jpg";
import logo11 from "../assets/logo11.png";
import logo12 from "../assets/logo12.jpeg";
import logo13 from "../assets/logo13.png";
import cheers from "../assets/cheers.jpg";
import kiss from "../assets/kiss.jpg";
import kiss2 from "../assets/kiss2.jpg";

function Introduction() {
  return (
    <>
      <div className="bg-amber-50 flex flex-col lg:flex-row h-auto relative">
        <div className="absolute z-10 flex justify-center items-center pl-0 lg:pl-90 w-full">
          <h1 className="text-2xl  md:text-4xl lg:text-6xl px-[5%] lg:px-[15%] uppercase italic font-noto-serif font-light text-center">
            Get to Know Whitney Rae—Colorado Wedding Photographer
          </h1>
        </div>
        <div className="bg-white flex-1/4 flex justify-center items-center grayscale-90 pt-20 lg:pt-0">
          <img
            className="w-full max-w-[400px] mt-4.5 lg:w-[600px] h-[400px] lg:h-[900px] bg-cover object-cover"
            src={ceo}
            alt=""
          />
        </div>
        <div className="bg-white flex-1 float-left lg:pr-40 text-[14px] md:text-[15px] lg:text-[17px] text-gray-500 pt-8 lg:pt-60 px-4 lg:px-0">
          <h2 className="font-bold text-lg md:text-xl lg:text-2xl text-center uppercase">
            Preserving what's fleeting with presence and intention.
          </h2>
          <br />
          <br />
          <p className="font-noto-serif font-light text-gray-500 leading-relaxed">
            I approach each wedding day with quiet intuition and grounded
            presence—anticipating moments before they unfold, offering support
            without intrusion, and helping my couples feel calm, seen, and fully
            themselves. <br />
            <br />
            <br />
            I work with couples who value artistry, emotion, and a seamless
            experience. They care deeply about the way their wedding feels—not
            just how it looks. <br />
            <br />
            <br />
            They want honest, beautiful images, yes—but they also want trust,
            warmth, and someone who just gets it. Based in Colorado and
            available worldwide, I photograph weddings with a refined,
            documentary-style approach—designed to feel calm, collaborative, and
            effortlessly you.
            <br />
            <br />
            <br />
            Rooted in emotional awareness and tailored connection, I meet each
            couple exactly where they are—co-creating photographs that let you
            feel it all, long after the day has passed.
          </p>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col md:flex-row justify-evenly items-center bg-white h-auto py-10 gap-6">
          <p className="text-sm md:text-lg font-noto-serif font-extralight uppercase pl-0 lg:pl-[15%] text-center">
            As we seen:
          </p>
          <img src={logo11} alt="" className="w-24 md:w-32" />
          <img src={logo12} alt="" className="w-24 md:w-32" />
          <img src={logo13} alt="" className="w-24 md:w-32" />
        </div>
      </div>
      <div className="flex-col noto-serif-display text-3xl md:text-4xl lg:text-6xl text-gray-800 bg-white flex justify-center items-center text-center px-[5%] lg:px-[10%] py-[7%]">
        <h1 className="italic">
          Creating artful & honest wedding imagenary for couples in colorado and
          worldwide- rooted in presence,emotion, and refined storyling.
        </h1>
        <div className="flex justify-center items-center pt-10 bg-white text-lg md:text-2xl">
          <button className="bg-[#c7c4c4] py-3 md:py-4 px-8 md:px-5 cursor-pointer">
            The Experiances
          </button>
        </div>
      </div>

      <div
        className="h-[600px] md:h-[900px] lg:h-[1100px] w-full bg-center bg-cover bg-fixed grayscale"
        style={{ backgroundImage: `url(${cheers})` }}
      >
        <div className="flex w-full h-full justify-end absolute z-30">
          <img
            className="w-1/2 md:w-[40%] h-[600px] md:h-[900px] lg:h-[1100px] bg-cover object-cover"
            src={kiss}
            alt=""
          />
        </div>
      </div>

      <div className="bg-white h-auto w-full flex flex-col lg:flex-row pb-10">
        <div className="flex-1/8 flex justify-center lg:justify-end items-center pt-10 lg:pt-0">
          <img
            className="w-full max-w-[300px] lg:w-[60%] h-auto aspect-[3/4] lg:h-[90%]"
            src={kiss2}
            alt=""
          />
        </div>
        <div className="flex-1 text-left px-4 lg:px-30 pt-8 lg:pt-40">
          <h2 className="text-xl md:text-2xl noto-serif-display italic">
            ""WOW. What can I say about this incredible woman."
          </h2>
          <p className="pt-8 md:pt-20 text-base md:text-xl font-noto-serif font-light text-gray-500">
            If you're looking for a photographer who will exceed all
            expectations, capture the most beautiful moments of your life, and
            feel like a lifelong friend in the process, Whitney is the one for
            you. She is simply the best, and we couldn't have been happier or
            more impressed with her work. From the moment we connected with her,
            she brought such warmth, creativity, professionalism and humor to
            every aspect of the process. Trust me, you won't regret choosing
            Whitney to document your special moments. She's truly one of a kind!
          </p>
          <br />
          <p className="font-noto-serif">- andrea + michael</p>
        </div>
      </div>
    </>
  );
}

export default Introduction;
