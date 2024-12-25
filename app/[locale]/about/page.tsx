import React from "react";
import AboutCompany from "../../sections/AboutCompany";
import Branches from "@/app/components/Branches";
import AboutFounders from "@/app/sections/AboutFounders";

const About = ({params:{locale}}:{params: {locale:string}}) => {
  return (
    <>
      <AboutCompany locale={locale}/>
      <AboutFounders locale={locale} />
      <Branches />
    </>
  );
};

export default About;
