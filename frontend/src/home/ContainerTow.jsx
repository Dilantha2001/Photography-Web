import React from "react";
import couple1 from "../assets/couple1.jpg";
import couple2 from "../assets/couple2.jpg";
import couple3 from "../assets/couple3.jpg";
import couple4 from "../assets/couple4.jpg";

function ContainerTow() {
  const images = [couple1, couple2, couple3, couple4];
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
      <div class="grid grid-cols-2 grid-rows-2 gap-4 p-4">
        <div class="bg-blue-300 p-4  text-8xl uppercase">
          your there now your always will be
        </div>
        <div class="bg-green-300 p-4 text-center">
          <p className="max-w-[300px] float-right pr-[60px]">
            An artful & refined WEDDING photography experience designed to help
            you slow down and feel it all.
          </p>
        </div>
        <div class="bg-red-300 p-4 text-center">
          <p className="max-w-[600px] text-xl">
            {" "}
            Based in Colorado and serving Vail, Aspen, Telluride, and beyond, I
            document celebrations with a refined, documentary-style
            approach—inviting ease, presence, and connection.
            <br />
            <br />
            Every image we create is rooted in intention: Soft movement, honest
            emotion, natural light, and a sense of place.
            <br />
            <br /> Your job is to be fully there. Mine is to help you remember
            what that felt like.
          </p>
          <button className="bg-[#c7c4c4] py-4 px-20 cursor-pointer uppercase mt-20  ">
            let get started
          </button>
        </div>
        <div class="bg-yellow-300 p-4 text-center">
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
      </div>
    </>
  );
}

export default ContainerTow;
