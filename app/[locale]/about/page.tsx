import React from "react";
import AboutCompany from "../../sections/AboutCompany";
import Branches from "@/app/components/Branches";

const About = ({params:{locale}}:{params: {locale:string}}) => {
  return (
    <>
      <AboutCompany locale={locale}/>
      <Branches />
    </>
  );
};

export default About;
