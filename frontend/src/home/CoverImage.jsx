import React from "react";
import flower from "../assets/marage1.jpg";
function CoverImage() {
  return (
    <>
      <div className="fixed inset-1 -z-10">
        <img
          src={flower}
          alt="Background"
          className="w-full h-full object-cover blur-[1px] grayscale"
        />
      </div>
    </>
  );
}

export default CoverImage;
