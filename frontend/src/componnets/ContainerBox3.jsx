import React from "react";
import pic2 from "../assets/wedding2.jpg";
import pic3 from "../assets/wedding3.jpg";
import mark1 from "../assets/mark1.jpg";
import mark2 from "../assets/mark2.jpg";
import mark3 from "../assets/mark3.jpg";

function ContainerBox3() {
  return (
    <div className="flex flex-col bg-amber-50 gap-10 pb-10">
      <div className="px-4">
        <p className="uppercase text-4xl md:text-5xl lg:text-7xl font-noto-serif font-light italic pt-8 md:pt-15 text-center md:text-left text-gray-800">
          words from the past clients
        </p>
      </div>

      {/* Testimonial 1 */}
      <div className="flex flex-col pt-15 lg:flex-row items-center justify-center mt-8 md:mt-15 gap-8 px-4">
        <div className="w-full max-w-[280px] md:max-w-[350px]  h-[400px] md:h-[500px] overflow-hidden">
          <img className="w-full h-full object-cover" src={pic3} alt="" />
        </div>
        <div className="text-center lg:text-left px-4">
          <br />
          <h3 className="text-lg md:text-xl font-noto-serif font-light uppercase italic text-center text-gray-700">
            "You won't find someone else as magical as Whitney Rae
            <br /> — a true artist."
          </h3>
          <br />
          <p className="w-full md:max-w-[600px] font-noto-serif font-light text-gray-500 text-center lg:text-left leading-relaxed">
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

      {/* Testimonial 2 */}
      <div className="flex flex-col lg:flex-row lg:justify-end lg:px-30  gap-8 px-4  ">
        <div className="order-2 lg:order-1 text-center lg:text-left px-4">
          <h3 className="text-lg md:text-xl font-noto-serif font-light uppercase italic text-center text-gray-700">
            "Our experience was the definition of luxury <br /> — we felt like
            ourselves the entire day."
          </h3>
          <br />
          <p className="w-full md:max-w-[600px] font-noto-serif font-light text-gray-500 text-center lg:text-left leading-relaxed">
            Working with Whitney was unreal — her vision and artistic eye was
            everything, and there was never a moment where she didn't have our
            complete trust. Our wedding day was magical, and she captured every
            detail and moment impeccably.
            <br />
            <br />
            <span className="text-gray-700 font-light"> - KELSEY & IAN</span>
          </p>
        </div>
        <div className="order-1 lg:order-2  w-full max-w-[280px]  md:max-w-[350px] h-[400px] md:h-[500px] overflow-hidden">
          <img className="w-full h-full object-contain" src={pic2} alt="" />
        </div>
      </div>

      {/* Image Gallery */}
      <div className="flex flex-col md:flex-row h-auto gap-2 px-4 mt-8">
        <div className="flex-1">
          <img
            src={mark1}
            alt="Mark 1"
            className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover"
          />
        </div>
        <div className="flex-1 md:flex-[0.4]">
          <img
            src={mark2}
            alt="Mark 2"
            className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover"
          />
        </div>
        <div className="flex-1">
          <img
            src={mark3}
            alt="Mark 3"
            className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ContainerBox3;
