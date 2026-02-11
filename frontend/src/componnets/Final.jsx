import table from "../assets/table.jpg";
import bride2 from "../assets/bride2.jpg";
function Final() {
  return (
    <div
      className="relative overflow-hidden bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url(${table})`,
        backgroundAttachment: "fixed",
        height: "auto",
        minHeight: "900px"
      }}
    >
      <div className="uppercase text-4xl md:text-6xl lg:text-9xl relative z-50 py-20 px-4 text-center font-noto-serif font-light text-white">
        <h1>Inquiry to Get Started</h1>
      </div>
      <div className="w-full lg:w-1/2 h-auto rounded-lg text-white shadow-lg overflow-hidden z-30 lg:absolute lg:right-0 lg:top-0 lg:bottom-0">
        <div className="flex justify-end items-center h-[900px]">
          <img src={bride2} alt="" className="w-full h-[600px] md:h-[600px] lg:h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default Final;
