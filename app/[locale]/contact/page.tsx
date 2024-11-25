import ColoredHeader from "@/app/components/ColoredHeader";
import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-between">
      <div className="ml-16 mt-12">
        <ColoredHeader text="Get In " coloredText="Touch" />
        <form className="w-[600px] flex flex-col gap-12">
          <input type="text" name="name" placeholder="Contact Name" className="w-full border-b-2 border-b-primary pb-3 outline-none"/>
          <input type="tel" name="tel" placeholder="Contact Phone" className="w-full border-b-2 border-b-primary pb-3 outline-none"/>
          <input type="text" name="city" placeholder="Contact Name" className="w-full border-b-2 border-b-primary pb-3 outline-none"/>
          <input type="email" name="email" placeholder="Contact Name" className="w-full border-b-2 border-b-primary pb-3 outline-none"/>
          <textarea name="message" placeholder="Contact Name" className="w-full border-b-2 border-b-primary pb-3 outline-none"/>
          <button className="w-full bg-primary outline-none text-white py-4 rounded-lg font-bold text-sm">Submit</button>
        </form>
      </div>
      <div className="w-3/12 h-screen bg-primary"></div>
    </div>
  );
};

export default Contact;
