import React from "react";
import couple4 from "../assets/container1.jpg";
import couple3 from "../assets/container2.jpg";
import couple2 from "../assets/container3.jpg";

function PhotoContainer() {
  return (
    <div className="flex flex-col lg:flex-row justify-around h-auto lg:h-[800px] mt-10 bg-amber-50 px-4 lg:px-14 gap-8 lg:gap-20 pb-10">
      <div className="flex-1 bg-amber-50 flex justify-center items-start lg:items-center">
        <img
          className="w-full max-w-[300px] lg:w-[350px] bg-cover h-[400px] lg:h-[500px] mt-4 lg:mt-[-50px]"
          src={couple4}
          alt="aaaa"
        />
      </div>
      <div className="flex-1 flex justify-center">
        <img
          className="w-full max-w-[400px] lg:w-[500px] bg-cover h-[500px] lg:h-[700px]"
          src={couple2}
          alt="aaaa"
        />
      </div>
      <div className="flex-1 flex justify-center">
        <img
          className="w-full max-w-[300px] lg:max-w-none mt-4 lg:mt-[-80px]"
          src={couple3}
          alt="aaaa"
        />
      </div>
    </div>
  );
}

export default PhotoContainer;
