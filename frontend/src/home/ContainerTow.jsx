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
    <div className="h-[600px] w-full">
      <div className="flex ">
        <div className="bg-blue-300 p-4 text-8xl uppercase 2fr">
          your there now your always will be
        </div>
        <div className="bg-green-300 p-4 text-center 1fr">
          <p className="max-w-[300px] float-right pr-[60px]">
            An artful & refined WEDDING photography experience designed to help
            you slow down and feel it all.
          </p>
        </div>
      </div>

      <div className="flex  h-[1000px] gap-10">
        <div className="bg-red-300 p-4 text-center 1fr">
          <p className="max-w-[600px] text-xl">
            Based in Colorado and serving Vail, Aspen, Telluride, and beyond, I
            document celebrations with a refined, documentary-style approach—
            inviting ease, presence, and connection.
            <br />
            <br />
            Every image we create is rooted in intention: Soft movement, honest
            emotion, natural light, and a sense of place.
            <br />
            <br /> Your job is to be fully there. Mine is to help you remember
            what that felt like.
          </p>
          <button className="bg-[#c7c4c4] py-4 px-20 cursor-pointer uppercase mt-20">
            let get started
          </button>
        </div>

        <div className=" text-center 2fr">
          <div className="flex justify-center items-start  z-10 relative">
            <div className="w-[550px] h-[1000px] rounded-lg text-white shadow-lg overflow-hidden relative">
              <div className="relative h-full ">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
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

                  <div className="bg-red-500 w-[200px] h-[300px] absolute z-55"></div>
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
