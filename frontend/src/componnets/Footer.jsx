import pic3 from "../assets/pic6.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";

function Footer() {
  return (
    <footer className="bg-amber-100 border-t border-gray-200 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-[5%]">
        {/* Brand Name */}
        <div className="text-center mb-12">
          <h2 className="font-noto-serif font-light text-5xl md:text-6xl italic text-gray-800">
            whitney rae
          </h2>
        </div>

        {/* Navigation */}
        <div className="text-center mb-16">
          <ul className="flex flex-wrap justify-center gap-6 md:gap-10 uppercase text-xs md:text-sm font-noto-serif font-light tracking-widest text-gray-700">
            <li>
              <a href="/" className="hover:text-gray-900 transition-colors">
                Home
              </a>
            </li>
            <li className="text-gray-300">•</li>
            <li>
              <a href="/about" className="hover:text-gray-900 transition-colors">
                About
              </a>
            </li>
            <li className="text-gray-300">•</li>
            <li>
              <a href="/experience" className="hover:text-gray-900 transition-colors">
                The Experience
              </a>
            </li>
            <li className="text-gray-300">•</li>
            <li>
              <a href="/galleries" className="hover:text-gray-900 transition-colors">
                Galleries
              </a>
            </li>
            <li className="text-gray-300">•</li>
            <li>
              <a href="/journal" className="hover:text-gray-900 transition-colors">
                Journal
              </a>
            </li>
          </ul>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {/* Left - Description */}
          <div className="text-center lg:text-left">
            <p className="font-noto-serif font-light text-base md:text-lg text-gray-600 leading-relaxed">
              Based in Colorado and available worldwide, Whitney photograph's
              weddings with a refined, documentary-style approach—designed to
              feel calm, collaborative, and effortlessly you.
            </p>
          </div>

          {/* Center - Image Gallery */}
          <div className="flex gap-4 h-[150px] md:h-[180px]">
            <div className="flex-1 overflow-hidden">
              <img
                src={pic3}
                alt="Wedding photography"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex-1 overflow-hidden">
              <img
                src={pic4}
                alt="Wedding photography"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex-1 overflow-hidden">
              <img
                src={pic5}
                alt="Wedding photography"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right - Location */}
          <div className="text-center lg:text-right">
            <p className="font-noto-serif font-light text-base md:text-lg text-gray-600 leading-relaxed">
              based in <span className="font-semibold text-gray-800">VAIL | CO</span>
              <br />
              <span className="italic text-gray-500">
                romanticizing life in beautiful locations around the globe
              </span>
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-12">
          <a
            href="/contact"
            className="bg-gray-700 text-white py-4 px-12 uppercase text-sm 
              font-noto-serif font-light tracking-wider hover:bg-gray-800 
              transition-colors duration-300"
          >
            Let's Get Started
          </a>
        </div>

        {/* Email & Social */}
        <div className="text-center mb-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 font-noto-serif font-light mb-4">
            <a
              href="mailto:hello@bywhitneyrae.com"
              className="hover:text-gray-900 transition-colors"
            >
              hello@bywhitneyrae.com
            </a>
          </p>
          <div className="flex justify-center gap-6 text-gray-600 font-noto-serif font-light text-sm">
            <a
              href="https://instagram.com/whitneyraephotography"
              className="hover:text-gray-900 transition-colors"
            >
              Instagram
            </a>
            <span className="text-gray-300">•</span>
            <a href="https://pinterest.com" className="hover:text-gray-900 transition-colors">
              Pinterest
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-400 font-noto-serif font-light">
          <p>© 2025 Whitney Rae Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;