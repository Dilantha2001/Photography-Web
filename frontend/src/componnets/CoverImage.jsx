import React, { useState, useEffect } from "react";
import flower from "../assets/flowers.jpg";
import couple1 from "../assets/couple1.jpg";
import couple2 from "../assets/couple2.jpg";
import couple3 from "../assets/couple3.jpg";
import couple4 from "../assets/couple4.jpg";

function CoverImage() {
  const images = [couple1, couple2, couple3, couple4];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <img
          src={flower}
          alt="Background"
          className="w-full h-full object-cover blur-[1px] grayscale"
        />
      </div>

      {/* Header */}
      <div className="relative z-10 p-8 text-black text-center">
        <h1 className="text-4xl font-bold">WHITNEY RAR</h1>
      </div>
      <p className="mt-[-20px] font-poppins font-light text-[120px] text-[#161515] absolute z-30 leading-none pl-[200px]">
        YOUR WEDDING
        <br />
        PHOTOGRAPHY
        <br />
        JOURNEY
      </p>

      {/* Slide Shower in Red Box */}
      <div className="flex justify-center items-start mt-[50px] z-10 relative">
        <div className=" w-[550px] h-[800px] rounded-lg text-white  shadow-lg overflow-hidden relative">
          {/* Slider wrapper */}
          <div className="relative h-full top-10">
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
            </div>

            {/* Navigation Buttons */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoverImage;
