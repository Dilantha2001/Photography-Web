import rose from "../assets/bride.jpg";

function Coverimagetwo() {
  return (
    <div
      className="relative h-auto min-h-[500px] md:min-h-[600px] overflow-hidden bg-fixed bg-cover"
      style={{
        backgroundImage: `url(${rose})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center"
      }}
    >
      <div className="absolute inset-0" />

      {/* Scrollable Content */}
      <div className="relative z-10 p-6 md:p-8 text-white h-full overflow-y-auto text-center font-noto-serif font-light pt-10 md:pt-30">
        <p className="text-sm md:text-lg font-noto-serif font-light uppercase tracking-wider mb-4">I Value</p>
        <p className="text-3xl md:text-5xl lg:text-7xl font-noto-serif font-light mb-4 text-center">Presence Over Perfection</p>
        <p className="text-3xl md:text-5xl lg:text-7xl font-noto-serif font-light mb-4 italic text-center">
          Personal Touches and Thoughtful Traditions
        </p>
        <p className="text-3xl md:text-5xl lg:text-7xl font-noto-serif font-light mb-4 italic text-center">
          Space to Be Unmistakably Yourself
        </p>
        <p className="text-3xl md:text-5xl lg:text-7xl font-noto-serif font-light mb-4 italic text-center">
          Images Lasting Longer Than Trends
        </p>
        <p className="text-3xl md:text-5xl lg:text-7xl font-noto-serif font-light mb-10 md:mb-40 italic text-center">A Story Fully Told</p>
      </div>
    </div>
  );
}

export default Coverimagetwo;
