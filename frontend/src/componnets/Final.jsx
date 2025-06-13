import table from "../assets/table.jpg";
import bride2 from "../assets/bride2.jpg";
function Final() {
  return (
    <div
      className="relative  overflow-hidden bg-fixed  bg-cover top-145  "
      style={{
        backgroundImage: `url(${table})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className=" uppercase text-9xl absolute z-50 ">
        <h1 className="p-[25%]">inquery to get started</h1>
      </div>
      <div className=" w-1/2 h-auto rounded-lg text-white  shadow-lg overflow-hidden z-30 float-end">
        <div className="flex justify-end items-center  ">
          <img src={bride2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Final;
