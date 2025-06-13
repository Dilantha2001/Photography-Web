import React from "react";
import pic2 from "../assets/wedding2.jpg";
import pic3 from "../assets/wedding3.jpg";
import mark1 from "../assets/mark1.jpg";
import mark2 from "../assets/mark2.jpg";
import mark3 from "../assets/mark3.jpg";
function ContainerBox3() {
  return (
    <div className="flex flex-col bg-amber-50 gap-15">
      <div className="">
        <p className="uppercase text-7xl font-light font-noto-serif italic pl-30 pt-15">
          words from <br />
          the past cilents
        </p>
      </div>
      <div className="flex items-center justify-center mt-15">
        <div className="  flex  items-center  border-gray-300 gap-10 ">
          <div className="w-[350px] h-[500px]">
            <img className="bg-cover w-full h-full" src={pic3} alt="" />
          </div>
          <div className="">
            <br />
            <h3 className="text-center font-extralight text-xl uppercase font-noto-serif italic">
              "You won't find someone else as magical as Whitney Rae
              <br /> — a true artist."
            </h3>
            <br />
            <p className="w-[600px] font-medium text-lg ">
              Working with Samantha Kay was unreal — her vision and artistic eye
              was everything, and there was never a moment where she didn't have
              our complete trust. Our wedding day was magical, and she captured
              every detail and moment impeccably.
              <br />
              <br />
              <span className=""> - ERICA & STEVEN</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center ">
        <div className="  flex  items-center border-r-2 border-gray-300 gap-10">
          <div className="">
            <br />
            <h3 className="text-center font-extralight text-xl uppercase font-noto-serif italic">
              "Our experience was the definition of luxury <br /> — we felt like
              ourselves the entire day."
            </h3>
            <br />
            <p className="w-[600px] font-medium text-lg ">
              Working with Whitney was unreal — her vision and artistic eye was
              everything, and there was never a moment where she didn't have our
              complete trust. Our wedding day was magical, and she captured
              every detail and moment impeccably.
              <br />
              <br />
              <span className="text-black"> - KELSEY & IAN</span>
            </p>
          </div>
          <div className="w-[350px] h-[500px]">
            <img className="bg-cover w-full h-full" src={pic2} alt="" />
          </div>
        </div>
      </div>

      <div className="flex h-[1000px] gap-2">
        <div className="flex-1">
          <img
            src={mark1}
            alt="Mark 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1/5">
          <img
            src={mark2}
            alt="Mark 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <img
            src={mark3}
            alt="Mark 3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ContainerBox3;
