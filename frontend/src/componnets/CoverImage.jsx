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
      <div className="relative z-10 p-4 md:p-8 text-black text-center">
        <h1 className="text-3xl md:text-4xl font-noto-serif font-light">WHITNEY RAR</h1>
      </div>
      
      <p className="mt-[-10px] md:mt-[-20px] font-noto-serif font-light text-[60px] md:text-[90px] lg:text-[120px] italic text-[#161515] absolute z-30 leading-none text-center w-full px-4">
        YOUR WEDDING
        <br />
        PHOTOGRAPHY
        <br />
        JOURNEY
      </p>

      {/* Slider */}
      <div className="flex justify-center items-start mt-[300px] md:mt-[400px] lg:mt-[50px] z-10 relative px-4">
        <div className="w-full max-w-[300px] md:max-w-[450px] lg:w-[550px] h-[400px] md:h-[600px] lg:h-[800px] rounded-lg text-white shadow-lg overflow-hidden relative">
          {/* Slider wrapper */}
          <div className="relative h-full top-0 md:top-10">
            <div
              className="flex transition-transform duration-700 ease-in-out w-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Couple ${index + 1}`}
                  className="w-full max-w-[300px] md:max-w-[450px] lg:w-[550px] h-[400px] md:h-[600px] lg:h-[800px] object-cover rounded-lg flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoverImage;
