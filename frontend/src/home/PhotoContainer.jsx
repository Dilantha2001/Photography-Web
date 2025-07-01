import React from "react";
import couple4 from "../assets/container1.jpg";
import couple3 from "../assets/container2.jpg";
import couple2 from "../assets/container3.jpg";

function PhotoContainer() {
  return (
    <div className="flex justify-around h-[800px] mt-200 bg-amber-50 px-14 gap-20">
      <div className="flex-1 bg-amber-50 flex justify-center ">
        <img
          className="w-[350px] bg-cover h-[500px] mt-[-50px] "
          src={couple4}
          alt="aaaa"
        />
      </div>
      <div className="flex-1 ">
        <img
          className="w-[500px] bg-cover h-[700px] "
          src={couple2}
          alt="aaaa"
        />
      </div>
      <div className="flex-1 ">
        <img className="mt-[-80px]" src={couple3} alt="aaaa" />
      </div>
    </div>
  );
}

export default PhotoContainer;
