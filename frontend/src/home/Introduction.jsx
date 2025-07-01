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
      <div className="bg-amber-50  flex h-auto relative">
        <div className="absolute  z-10 flex justify-center items-center pl-90">
          <h1 className="text-6xl px-[15%] uppercase italic font-noto-serif font-light">
            Get to Know Whitney Rae—Colorado Wedding Photographer
          </h1>
        </div>
        <div className="bg-white flex-1/4 flex justify-center items-center grayscale-90">
          <img className="w-[600px] h-[900px] bg-cover " src={ceo} alt="" />
        </div>
        <div className=" bg-white flex-1 float-left  pr-40 text-[17px] text-gray-500 pt-60 ">
          <h2 className="font-bold text-2xl text-center uppercase">
            Preserving what’s fleeting with presence and intention.
          </h2>
          <br />
          <br />
          <p>
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
        <div className="flex justify-evenly items-center bg-white h-[300px]">
          <p className="text-lg  font-noto-serif font-extralight uppercase pl-[15%]">
            As we seen:
          </p>
          <img src={logo11} alt="" />
          <img src={logo12} alt="" />
          <img src={logo13} alt="" />
        </div>
      </div>
      <div className="  flex-col noto-serif-display text-6xl  text-gray-800 bg-white flex justify-center items-center text-center px-[10%] py-[7%]">
        <h1 className="italic">
          {" "}
          Creating artful & honest wedding imagenary for couples in colorado and
          worldwide- rooted in presence,emotion, and refined storyling.
        </h1>
        <div className="flex justify-center items-center pt-10 bg-white text-2xl">
          <button className="bg-[#c7c4c4] py-4 px-5 cursor-pointer ">
            The Experiances
          </button>
        </div>
      </div>

      <div
        className="h-screen w-full bg-center bg-cover bg-fixed grayscale"
        style={{ backgroundImage: `url(${cheers})`, height: "1100px" }}
      >
        <div className="flex w-full h-full  justify-end absolute z-30 ">
          {" "}
          <img className="w-[40s%] h-[1100px] bg-cover" src={kiss} alt="" />
        </div>
      </div>

      <div className="bg-white h-[800px] w-full flex ">
        <div className="flex-1/8 flex justify-end items-center ">
          <img className="w-[60%] h-[90%]" src={kiss2} alt="" />
        </div>
        <div className="flex-1 text-left px-30 pt-40 float-left">
          <h2 className="text-2xl noto-serif-display italic">
            ""WOW. What can I say about this incredible woman."
          </h2>
          <p className="pt-20 text-xl ">
            If you’re looking for a photographer who will exceed all
            expectations, capture the most beautiful moments of your life, and
            feel like a lifelong friend in the process, Whitney is the one for
            you. She is simply the best, and we couldn’t have been happier or
            more impressed with her work. From the moment we connected with her,
            she brought such warmth, creativity, professionalism and humor to
            every aspect of the process. Trust me, you won’t regret choosing
            Whitney to document your special moments. She’s truly one of a kind!
          </p>
          <br />
          <p className="font-noto-serif">- andrea + michael</p>
        </div>
      </div>
    </>
  );
}

export default Introduction;
