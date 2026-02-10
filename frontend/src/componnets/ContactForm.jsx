function ContactForm() {
  return (
    <div className="bg-gray-200 h-[700px] w-full relative top-100 z-100 pt-20">
      <div className="max-w-5xl mx-auto p-6 bg-gray-200">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 text-sm font-noto-serif font-light">
              Your First and Last Names: *
            </label>
            <input
              type="text"
              placeholder="Your name here"
              className="w-full border-b border-black focus:outline-none py-1 bg-transparent font-noto-serif font-light"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-noto-serif font-light">Your Email: *</label>
            <input
              type="email"
              placeholder="E.g. myemail@email.com"
              className="w-full border-b border-black focus:outline-none py-1 bg-transparent font-noto-serif font-light"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-noto-serif font-light">
              What Will We Be Documenting?
            </label>
            <select className="w-full border-b border-black bg-transparent py-1 focus:outline-none font-noto-serif font-light">
              <option disabled selected>
                Select an option
              </option>
              <option>Wedding</option>
              <option>Engagement</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 text-sm font-noto-serif font-light">Event Date(s):</label>
            <input
              type="text"
              className="w-full border-b border-black focus:outline-none py-1 bg-transparent font-noto-serif font-light"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-noto-serif font-light">
              Wedding Location: *
            </label>
            <input
              type="text"
              className="w-full border-b border-black focus:outline-none py-1 bg-transparent font-noto-serif font-light"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-noto-serif font-light">
              Name of Venue: *
            </label>
            <input
              type="text"
              className="w-full border-b border-black focus:outline-none py-1 bg-transparent font-noto-serif font-light"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-noto-serif font-light">
              Name of Wedding Planner: *
            </label>
            <input
              type="text"
              className="w-full border-b border-black focus:outline-none py-1 bg-transparent font-noto-serif font-light"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-noto-serif font-light">
              How Did You Hear About Me? *
            </label>
            <select className="w-full border-b border-black bg-transparent py-1 focus:outline-none font-noto-serif font-light">
              <option disabled selected>
                Select an option
              </option>
              <option>Instagram</option>
              <option>Referral</option>
              <option>Website</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block mb-1 text-sm font-noto-serif font-light">
              Tell Us More About Your Event Below: *
            </label>
            <textarea
              rows="5"
              className="w-full border border-black bg-transparent p-2 focus:outline-none font-noto-serif font-light"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
