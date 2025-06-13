function ContactForm() {
  return (
    <div className=" bg-gray-200  h-[700px] w-full relative top-100 z-100 pt-20">
      <div class="max-w-5xl mx-auto p-6 bg-gray-200">
        <form class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block mb-1 text-sm font-medium">
              Your First and Last Names: *
            </label>
            <input
              type="text"
              placeholder="Your name here"
              class="w-full border-b border-black focus:outline-none py-1 bg-transparent"
            />
          </div>

          <div>
            <label class="block mb-1 text-sm font-medium">Your Email: *</label>
            <input
              type="email"
              placeholder="E.g. myemail@email.com"
              class="w-full border-b border-black focus:outline-none py-1 bg-transparent"
            />
          </div>

          <div>
            <label class="block mb-1 text-sm font-medium">
              What Will We Be Documenting?
            </label>
            <select class="w-full border-b border-black bg-transparent py-1 focus:outline-none">
              <option disabled selected>
                Select an option
              </option>
              <option>Wedding</option>
              <option>Engagement</option>
            </select>
          </div>

          <div>
            <label class="block mb-1 text-sm font-medium">Event Date(s):</label>
            <input
              type="text"
              class="w-full border-b border-black focus:outline-none py-1 bg-transparent"
            />
          </div>

          <div>
            <label class="block mb-1 text-sm font-medium">
              Wedding Location: *
            </label>
            <input
              type="text"
              class="w-full border-b border-black focus:outline-none py-1 bg-transparent"
            />
          </div>

          <div>
            <label class="block mb-1 text-sm font-medium">
              Name of Venue: *
            </label>
            <input
              type="text"
              class="w-full border-b border-black focus:outline-none py-1 bg-transparent"
            />
          </div>

          <div>
            <label class="block mb-1 text-sm font-medium">
              Name of Wedding Planner: *
            </label>
            <input
              type="text"
              class="w-full border-b border-black focus:outline-none py-1 bg-transparent"
            />
          </div>

          <div>
            <label class="block mb-1 text-sm font-medium">
              How Did You Hear About Me? *
            </label>
            <select class="w-full border-b border-black bg-transparent py-1 focus:outline-none">
              <option disabled selected>
                Select an option
              </option>
              <option>Instagram</option>
              <option>Referral</option>
              <option>Website</option>
            </select>
          </div>

          <div class="md:col-span-2">
            <label class="block mb-1 text-sm font-medium">
              Tell Us More About Your Event Below: *
            </label>
            <textarea
              rows="5"
              class="w-full border border-black bg-transparent p-2 focus:outline-none"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
