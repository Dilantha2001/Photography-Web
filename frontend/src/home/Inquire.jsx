import React, { useState } from "react";
import inquireHero from "../assets/bride.jpg";
import inquireDetail from "../assets/bride2.jpg";
import Navigation from "../componnets/Navigation";
import Footer from "../componnets/Footer";
function Inquire() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    weddingDate: "",
    location: "",
    eventType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (integrate with your backend)
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        weddingDate: "",
        location: "",
        eventType: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <>
      {/* Hero Section */}
      <Navigation />
      <div className="bg-white pt-20 pb-0 px-0">
        <div className="h-[600px] bg-center bg-cover relative grayscale-50">
          <img
            src={inquireHero}
            alt="Contact Whitney Rae"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 flex justify-center items-center">
            <h1 className="font-noto-serif font-light text-6xl italic text-white text-center px-[10%]">
              Let's Begin Your Story
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-white py-20 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Info & Image */}
            <div>
              <div className="mb-12">
                <h2 className="font-noto-serif font-light text-4xl italic text-gray-800 mb-6">
                  Inquire to Share Your Vision
                </h2>
                <p className="text-lg text-gray-500 font-noto-serif font-light leading-relaxed mb-6">
                  Whether you're planning an intimate Colorado mountain wedding,
                  a destination celebration, or an elopement adventure, I'd love
                  to learn more about your story.
                </p>
                <p className="text-lg text-gray-500 font-noto-serif font-light leading-relaxed mb-6">
                  Complete the form, and Whitney Rae and her team will respond
                  within 48 hours, Monday through Thursday, 9 AM to 5 PM MST.
                </p>
              </div>

              <div className="bg-amber-50 p-8 mb-8">
                <h3 className="font-noto-serif font-bold text-xl text-gray-800 mb-4">
                  Quick Details
                </h3>
                <div className="space-y-4 text-gray-600 font-noto-serif font-light">
                  <p>
                    <span className="font-bold text-gray-800">
                      Base Investment:
                    </span>{" "}
                    Wedding collections begin at $8,700
                  </p>
                  <p>
                    <span className="font-bold text-gray-800">
                      Coverage Areas:
                    </span>{" "}
                    Colorado (Vail, Aspen, Telluride), destination worldwide
                  </p>
                  <p>
                    <span className="font-bold text-gray-800">Approach:</span>{" "}
                    Refined, documentary-style photography rooted in presence
                    and emotion
                  </p>
                  <p>
                    <span className="font-bold text-gray-800">
                      Availability:
                    </span>{" "}
                    Limited weddings per year for personalized care
                  </p>
                </div>
              </div>

              <div className="overflow-hidden h-[400px]">
                <img
                  src={inquireDetail}
                  alt="Wedding details"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <div className="bg-white border border-gray-200 p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <h3 className="font-noto-serif font-light text-3xl italic text-gray-800 mb-4">
                      Thank You
                    </h3>
                    <p className="text-gray-500 font-noto-serif font-light text-lg mb-4">
                      Your message has been received. We'll be in touch within
                      the next 48 hours.
                    </p>
                    <p className="text-gray-400 font-noto-serif font-light">
                      Looking forward to connecting with you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm uppercase font-noto-serif font-light tracking-wider text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-800 font-noto-serif font-light bg-white"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm uppercase font-noto-serif font-light tracking-wider text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-800 font-noto-serif font-light bg-white"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm uppercase font-noto-serif font-light tracking-wider text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-800 font-noto-serif font-light bg-white"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label className="block text-sm uppercase font-noto-serif font-light tracking-wider text-gray-700 mb-2">
                        Wedding Date *
                      </label>
                      <input
                        type="date"
                        name="weddingDate"
                        value={formData.weddingDate}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-800 font-noto-serif font-light bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm uppercase font-noto-serif font-light tracking-wider text-gray-700 mb-2">
                        Location / Venue *
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-800 font-noto-serif font-light bg-white"
                        placeholder="City, State or Country"
                      />
                    </div>

                    <div>
                      <label className="block text-sm uppercase font-noto-serif font-light tracking-wider text-gray-700 mb-2">
                        Event Type *
                      </label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-800 font-noto-serif font-light bg-white appearance-none"
                      >
                        <option value="">Select event type</option>
                        <option value="wedding">Wedding (Full Day)</option>
                        <option value="elopement">Elopement</option>
                        <option value="engagement">Engagement Session</option>
                        <option value="bridal">Bridal Session</option>
                        <option value="intimate">Intimate Celebration</option>
                        <option value="destination">Destination Wedding</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm uppercase font-noto-serif font-light tracking-wider text-gray-700 mb-2">
                        Tell Us About Your Vision *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="6"
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-800 font-noto-serif font-light bg-white resize-none"
                        placeholder="Share your story, what's important to you, and what you're looking for in your wedding photography experience..."
                      ></textarea>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full bg-gray-700 text-white py-4 uppercase font-noto-serif font-light tracking-wider hover:bg-gray-800 transition-colors duration-300"
                      >
                        Send Inquiry
                      </button>
                    </div>

                    <p className="text-xs text-gray-400 font-noto-serif font-light text-center">
                      * Required fields
                    </p>
                  </form>
                )}
              </div>

              {/* Alternative Contact */}
              <div className="mt-10 text-center">
                <p className="text-gray-600 font-noto-serif font-light mb-2">
                  Prefer to reach out directly?
                </p>
                <a
                  href="mailto:hello@bywhitneyrae.com"
                  className="text-gray-800 font-noto-serif font-light text-lg hover:text-gray-600 transition-colors"
                >
                  hello@bywhitneyrae.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="bg-amber-50 py-20 px-[5%]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-noto-serif font-light text-5xl italic text-gray-800 mb-6">
            What You Can Expect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <h3 className="font-noto-serif font-light text-2xl text-gray-800 mb-3">
                Personalized Consultation
              </h3>
              <p className="text-gray-600 font-noto-serif font-light">
                We'll take time to understand your vision, values, and what
                matters most about your celebration.
              </p>
            </div>
            <div>
              <h3 className="font-noto-serif font-light text-2xl text-gray-800 mb-3">
                Custom Proposal
              </h3>
              <p className="text-gray-600 font-noto-serif font-light">
                Based on our conversation, we'll create a tailored package and
                investment outline just for you.
              </p>
            </div>
            <div>
              <h3 className="font-noto-serif font-light text-2xl text-gray-800 mb-3">
                Collaborative Partnership
              </h3>
              <p className="text-gray-600 font-noto-serif font-light">
                From planning to the final delivery, you'll experience warmth,
                professionalism, and genuine care.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-white py-20 px-[5%] text-center">
        <p className="font-noto-serif font-light text-gray-600 text-lg max-w-3xl mx-auto">
          Ready to explore whether we're the right fit for your wedding
          photography? Fill out the inquiry form above, and let's begin the
          conversation about creating images that let you feel it all, long
          after the day has passed.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Inquire;
