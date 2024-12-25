import React from "react";
import {
  FaFacebook,
  FaInstagramSquare,
  FaTiktok,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { locations } from "../assets/locations";
import { numbers } from "../assets/numbers";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Social Media Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Social Media</h3>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/Elegant.visa.ca"
              target="_blank"
              className="hover:scale-110 transition-transform"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/elegant_visa_services"
              target="_blank"
              className="hover:scale-110 transition-transform"
            >
              <FaInstagramSquare className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/01065131758"
              target="_blank"
              className="hover:scale-110 transition-transform"
            >
              <IoLogoWhatsapp className="w-6 h-6" />
            </a>
            <a
              href="https://www.tiktok.com/@elegantvisaservices"
              target="_blank"
              className="hover:scale-110 transition-transform"
            >
              <FaTiktok className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Locations Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Locations</h3>
          <ul>
            {locations.map((location, index) => (
              <li key={index} className="flex items-center gap-3 mb-3">
                <FaLocationDot className="w-5 h-5" />
                <p className="text-sm">{location}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Numbers Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Numbers</h3>
          <ul>
            {numbers.map((number, index) => (
              <li key={index} className="flex items-center gap-3 mb-3">
                <FaPhoneAlt className="w-5 h-5" />
                <p className="text-sm">{number}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Copyright Section */}
        <div className="lg:col-span-1 md:col-span-2 text-center lg:text-left">
          <p className="text-sm mt-4 lg:mt-0">
            Copyright © 2020 Elegant Services - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
