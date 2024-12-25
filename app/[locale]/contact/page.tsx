import ColoredHeader from "@/app/components/ColoredHeader";
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-20">
      {/* Left Section: Form */}
      <div className="w-full py-12 lg:w-8/12">
        <ColoredHeader text="Get In " coloredText="Touch" style="text-center lg:text-left" />
        <form className="w-full max-w-xl mx-auto flex flex-col gap-8">
          <input
            type="text"
            name="name"
            placeholder="Contact Name"
            className="w-full border-b-2 border-b-primary pb-3 outline-none placeholder-gray-500"
            required
          />
          <input
            type="tel"
            name="tel"
            placeholder="Contact Phone"
            className="w-full border-b-2 border-b-primary pb-3 outline-none placeholder-gray-500"
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            className="w-full border-b-2 border-b-primary pb-3 outline-none placeholder-gray-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Contact Email"
            className="w-full border-b-2 border-b-primary pb-3 outline-none placeholder-gray-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            className="w-full border-b-2 border-b-primary pb-3 outline-none placeholder-gray-500 resize-none"
          />
          <button className="w-full bg-primary text-white py-3 rounded-lg font-bold text-base hover:bg-primary-dark transition-colors">
            Submit
          </button>
        </form>
      </div>

      {/* Right Section: Decorative Box */}
      <div className="hidden w-full h-screen lg:block lg:w-4/12 bg-primary"></div>
    </div>
  );
};

export default Contact;
