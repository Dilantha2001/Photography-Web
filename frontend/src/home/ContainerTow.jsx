import React, { useState, useEffect } from "react";
import couple1 from "../assets/couple1.jpg";
import couple2 from "../assets/couple2.jpg";
import couple3 from "../assets/couple3.jpg";
import couple4 from "../assets/couple4.jpg";

function ContainerTow() {
  const images = [couple1, couple2, couple3, couple4];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto Slide (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[1000px] w-full bg-amber-50 ">
      <div className="flex justify-around ">
        <div className=" p-4  uppercase flex-3 ">
          <p className="font-noto-serif  font-[100] text-[66px] text-[rgba(33,33,33,1)]">
            your were fully there. <br />
          </p>
          <h2 className="font-noto-serif  font-extralight text-[80px] italic">
            now your always <br /> will be
          </h2>
        </div>
        <div className="p-4 text-center  flex-1">
          <p className="max-w-[300px] float-right pr-[60px] ">
            An artful & refined WEDDING photography experience designed to help
            you slow down and feel it all.
          </p>
        </div>
      </div>

      <div className="flex  h-[800px] gap-5 ml-10 ">
        <div className=" p-4 text-center flex-1/7">
          <h3 className="uppercase mb-10 font-bold mt-4">
            Emotive, Light-Filled Wedding <br /> Photography in Colorado
          </h3>
          <br />
          <p className="max-w-[600px] text-xl px-15 ">
            Based in Colorado and serving Vail, Aspen, Telluride, and beyond, I
            document celebrations with a refined, documentary-style approach—
            inviting ease, presence, and connection.
            <br />
            <br />
            Every image we create is rooted in intention: Soft movement, honest
            emotion, natural light, and a sense of place.
            <br />
            <br />
            <br /> Your job is to be fully there.
            <br /> Mine is to help you remember what that felt like.
          </p>
          <button className="bg-[#c7c4c4] py-4 px-20 cursor-pointer uppercase mt-20">
            let get started
          </button>
        </div>

        <div className=" flex-2 mt-[-150px]">
          <div className="  z-10 relative">
            <div className="w-[550px] h-[780px]  text-white shadow-lg overflow-hidden relative">
              
              <div className="relative h-full flex  ">
                <div
                  className="flex transition-transform duration-700 ease-in-out "
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Couple ${index + 1}`}
                      className="w-[550px] h-full object-cover rounded-lg flex-shrink-0"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContainerTow;
