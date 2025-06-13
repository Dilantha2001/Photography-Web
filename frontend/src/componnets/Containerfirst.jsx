import React from "react";

function Containerfirst() {
  return (
    <div className=" bg-[#ebeaea] h-[620px] w-fill mt-[-150px]">
      <div className=" float-left ml-[1180px] mt-5 font-medium text-lg border-y-1">
        <p className="w-[210px] italic">
          An artful & refined WEDDING photography experience designed to help
          you slow down and feel it all.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 w-full h-[300px] pt-[70px] ">
        <div className=" flex items-center justify-center">
          <h2 className="text-6xl italic pr-[60px] pl-[90px]">
            TURNING MOMENTS INTO ARTFUL, Emotionally resonant imagery.
          </h2>
        </div>
        <div className=" flex items-center justify-center pr-[110px] text-md border-l-2 pl-10">
          <p>
            learn about WORKING TOGETHERFor couples who want to feel fully seen,
            fully supported, and fully present on their wedding day. <br />
            <br />
            My approach is designed to let you live it all—without distraction
            or performance, only thoughtful guidance. <br />
            <br />
            With a calm presence and a refined documentary style, I’ll
            photograph your day as it naturally unfolds—so that when you return
            to your photographs, you’re not just looking back—you’re stepping
            back into it.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center mt-5  ">
        <button className="bg-[#c7c4c4] py-4 px-20 cursor-pointer ">
          LEARN ABOUT WORK TOGETHER
        </button>
      </div>

      <div className="flex h-[400px] w-full bg-white flex-col pt-[50px]">
        <div class="pl-[90px]">
          <h1 class="text-8xl font-popins relative inline-block font-light ">
            WORKING
            <span class="absolute top-1/2 left-full w-full border-t border-black"></span>
          </h1>
          <h2 class="text-8xl font-popins font-light mt-2">WITH WHITNEY RAE</h2>
        </div>
        <div className=" flex justify-center items-center flex-1 pt-[40px]">
          <h3 className="uppercase text-lg font-semibold ">
            {" "}
            A thoughtful process, designed to let you be fully there— <br />
            <span className="text-center">present, supported, and at ease</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Containerfirst;
