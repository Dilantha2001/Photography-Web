import mark1 from "../assets/homepage/slide1.jpg";
import mark2 from "../assets/homepage/slide2.jpg";
import mark3 from "../assets/homepage/slide3.jpg";
import mark4 from "../assets/homepage/slide4.jpg";
import mark5 from "../assets/homepage/slide5.jpg";

const images = [mark1, mark2, mark3, mark4, mark5];

function Container() {
  return (
    <div className="overflow-hidden h-[500px] w-full relative text-center">
      <div className="flex w-1/2 scroll-animation">
        {[...images, ...images].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className="w-[50vw] h-[500px] object-cover"
          />
        ))}
      </div>
    </div>
  );
}

export default Container;
