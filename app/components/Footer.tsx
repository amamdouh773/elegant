import React from "react";
import { FaFacebook, FaInstagramSquare, FaTiktok,FaPhoneAlt  } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { locations } from "../assets/locations";
import { numbers } from "../assets/numbers";
const Footer = () => {
  return (
    <div className="flex justify-between items-start bg-primary p-4 min-h-48">
      <div>
        <p className="text-xl text-white mb-2">Social Media</p>
        <div className="flex gap-3">
          <a href="https://www.facebook.com/Elegant.visa.ca" target="_blank">
            <FaFacebook color="white" className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/elegant_visa_services"
            target="_blank"
          >
            <FaInstagramSquare color="white" className="w-6 h-6" />
          </a>
          <a href="https://wa.me/01065131758" target="_blank">
            <IoLogoWhatsapp color="white" className="w-6 h-6" />
          </a>
          <a href="https://www.tiktok.com/@elegantvisaservices" target="_blank">
            <FaTiktok color="white" className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div>
        <p className="text-xl text-white mb-2">Locations</p>
        <div>
          {locations.map((location) => (
            <div
              key={location}
              className="flex gap-2 justify-start items-center mt-4"
            >
              <FaLocationDot color="white" className="w-6 h-6" />
              <p className="text-white text-lg max-w-96">{location}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xl text-white mb-2">Numbers</p>
        {numbers.map((number) => (
          <div key={number} className="flex gap-2 mt-4 justify-start items-center">
            <FaPhoneAlt  color="white" className="w-6 h-6" />
            <p className="text-white text-lg max-w-96">{number}</p>
          </div>
        ))}
      </div>
      <p className="text-xl text-white mb-2 self-end">
        Copyright © 2020 Elegant Services - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
