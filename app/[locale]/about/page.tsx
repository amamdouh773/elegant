import React from "react";
import AboutCompany from "../../sections/AboutCompany";
import Branches from "@/app/components/Branches";
import AboutFounders from "@/app/sections/AboutFounders";

const About = () => {
  return (
    <>
      <AboutCompany />
      <AboutFounders />
      <Branches />
    </>
  );
};

export default About;
