import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
import pic6 from "../assets/pic6.jpg";
import rose from "../assets/rose.jpg";
import Coverimagetwo from "./Coverimagetwo";
function Containertwo() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-3 h-auto mt-[300px] bg-white pt-10  text-[#474646]">
        <div className="  flex  flex-col items-center border-r-2 border-gray-300  ">
          <div className="w-[300px] h-[400px]">
            <img className="bg-cover w-full h-full" src={pic1} alt="" />
          </div>
          <div className="">
            <br />
            <h3 className="text-center font-extralight textxl uppercase">
              The First CONNECTION
            </h3>
            <br />
            <p className="w-[400px] font-medium text-lg ">
              Intentional, easy, and personal from the start. Once I receive
              your inquiry, we’ll schedule a relaxed conversation to
              connect—where I’ll learn more about your story, what matters most
              to you, and how you want your day to feel.
              <br /> From there, I’ll curate a wedding photography collection
              just for you—whether you're planning a Colorado mountain
              celebration or a destination event. No guesswork, no
              one-size-fits-all approach.
            </p>
          </div>
        </div>
        <div className="  flex  flex-col items-center border-r-2 border-gray-300 ">
          <div className="w-[300px] h-[400px]">
            <img className="bg-cover w-full h-full" src={pic2} alt="" />
          </div>
          <div className="">
            <br />
            <h3 className="text-center font-extralight text-lg uppercase">
              Thoughtful Preparation
            </h3>
            <br />
            <p className="w-[400px] font-medium text-lg ">
              Guided without pressure. Supported without overwhelm. You’ll
              receive timeline insight, planning support, and space to ask
              anything. My role is to offer clarity and confidence, not add to
              your to-do list.
            </p>
          </div>
        </div>
        <div className="  flex  flex-col items-center border-r-2 border-gray-300  ">
          <div className="w-[300px] h-[400px]">
            <img className="bg-cover w-full h-full" src={pic4} alt="" />
          </div>
          <div className="">
            <br />
            <h3 className="text-center font-extralight text-lg uppercase">
              YOUR WEDDING DAY
            </h3>
            <br />
            <p className="w-[400px] font-medium text-lg ">
              Seamlessly integrated with your creative team and loved ones—
              we’ll move with intention and ease, documenting each thoughtfully
              curated detail, catching in-between moments and natural,
              unscripted emotion—preserving the story of your day just as it
              was, effortlessly and artfully.
            </p>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-2 bg-white px-70 pt-40">
        <div className="  flex  flex-col items-center border-r-2 border-gray-300  ">
          <div className="w-[300px] h-[400px]">
            <img className="bg-cover w-full h-full" src={pic5} alt="" />
          </div>
          <div className="">
            <br />
            <h3 className="text-center font-extralight textxl uppercase">
              Your Images, Delivered
            </h3>
            <br />
            <p className="w-[400px] font-medium text-lg ">
              A collection designed to feel complete. Every image is chosen with
              care and delivered in a private, high-resolution gallery—so you
              can return to the day as it truly felt, again and again.
            </p>
          </div>
        </div>
        <div className="  flex  flex-col items-center border-r-2 border-gray-300  ">
          <div className="w-[300px] h-[400px]">
            <img className="bg-cover w-full h-full" src={pic6} alt="" />
          </div>
          <div className="">
            <br />
            <h3 className="text-center font-extralight text-lg uppercase">
              heirloom offerings
            </h3>
            <br />
            <p className="w-[400px] font-medium text-lg ">
              Your photographs deserve to live beyond the screen. From
              handcrafted albums to curated print collections, each heirloom is
              made to preserve your story with intention—something to hold,
              revisit, and pass down for years to come.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-white pt-15 text-5xl">
        <h3 className="text-center w-[1000px] italic font-light">
          {" "}
          The Whitney Rae experience is rooted in artful, emotionally resonant
          imagery—created for couples who value presence, connection, and a
          celebration that feels entirely their own.
        </h3>
      </div>
      <div className="flex justify-center items-center pt-30 bg-white pb-30   ">
        <button className="bg-[#c7c4c4] py-4 px-20 cursor-pointer ">
          INQUIRE ABOUT YOUR DATE
        </button>
      </div>
      <Coverimagetwo />
    </div>
  );
}

export default Containertwo;
