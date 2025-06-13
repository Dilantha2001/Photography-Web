import pic3 from "../assets/pic6.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";

function Footer() {
  return (
    <footer className=" relative z-100 top-100 bg-amber-50 h-[600px]">
      <div className="flex flex-col pt-15 text-center">
        <div className="text-5xl font-bold uppercase">whitney rae</div>
        <div className="">
          <ul className="flex justify-around px-[35%] pt-10 uppercase">
            <li>Home</li>
            <li>About</li>
            <li>The experiance</li>
            <li>galleries</li>
            <li>journal</li>
          </ul>
        </div>
        <div className="flex gap-5 px-[10%] pt-20">
          <div className="flex-1 text-xl">
            <p>
              Based in Colorado and available worldwide, Whitney photograph's
              weddings with a refined, documentary-style approach—designed to
              feel calm, collaborative, and effortlessly you.
            </p>
          </div>

          <div className="flex flex-1.5  h-[200px] justify-center gap-5">
            <img src={pic3} alt="" />
            <img src={pic4} alt="" />
            <img src={pic5} alt="" />
          </div>

          <div className="flex-1 text-xl uppercase ">
            <p>
              based in VAIL | CO
              <br />
              romanticizing life in <br /> beautiful locations <br /> around the
              globe
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center pt-10 ">
          <button className="bg-[#c7c4c4] py-4 px-20 cursor-pointer uppercase ">
            lets's get started
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
