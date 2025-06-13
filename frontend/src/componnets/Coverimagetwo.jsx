import rose from "../assets/bride.jpg";

function Coverimagetwo() {
  return (
    <div
      className="relative h-[600px] overflow-hidden bg-fixed  bg-cover"
      style={{
        backgroundImage: `url(${rose})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 " />

      {/* Scrollable Content */}
      <div className="relative z-10 p-8 text-white h-full overflow-y-auto text-center font-light pt-30 ">
        <p className="text-lg font-bold">I VALUE</p>
        <p className="text-7xl font-light mb-4 ">Presence Over Perfection</p>
        <p className="text-7xl font-light mb-4 italic">
          Personal Touches and Thoughtful Traditions
        </p>
        <p className="text-7xl font-light mb-4 italic">
          Space to be Unmistakably Yourself
        </p>
        <p className="text-7xl font-light mb-4 italic">
          Images Lasting Longer than Trends
        </p>
        <p className="text-7xl font-light mb-40 italic">A Story Fully Told</p>
      </div>
    </div>
  );
}

export default Coverimagetwo;
