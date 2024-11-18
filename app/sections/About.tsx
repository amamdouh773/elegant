import React from "react";
import Header from "../components/HeaderComponent";
import Button from "../components/Button";
import Link from "next/link";

const About = () => {
  return (
    <div className="flex justify-between items-start m-14 pb-10">
      <div className="flex flex-col gap-4 justify-center items-start">
        <Header text="Who Are We?" />
        <p className="font-normal text-[32px] w-[640px] mb-[20px]">
          ELEGANT PUBLIC SERVICES is a registered Canadian Immigration firm
          under the Federal and Provincial Government of Canada`s registry
          authorities.
        </p>
        <Link href="/about" className="self-center"><Button text="Know More" /></Link>
      </div>
      <video src="../about-video.mp4" controls={true} width={700}  />
    </div>
  );
};

export default About;
