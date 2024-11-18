import React from "react";
import Button from "../components/Button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex items-center justify-center flex-col ">
      <img src="../Hero.png" alt="logo" />
      <div className="flex flex-col items-center justify-center mb-[40px]">
        <p className="font-extrabold text-primary text-header">A simple Approach to immigration process</p>
        <p className="font-normal text-[40px] mt-[33px]">SAVE YOUR RESOURCES OVER TIME WITH ELEGANT</p>
      </div>
      <Link  href="/contact"> <Button text="Contact Us" /></Link>
    </div>
  );
};

export default Hero;
