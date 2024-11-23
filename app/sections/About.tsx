import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import Button from "../components/Button";
import Link from "next/link";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("AboutUs-section")
  return (
    <div className="flex justify-between items-start m-14 pb-10">
      <div className="flex flex-col gap-4 justify-center items-start">
        <HeaderComponent text= {t("title")} />
        <p className="font-normal text-[32px] w-[640px] mb-[20px] leading-[60px]">
          {t("description")}
        </p>
        <Link href="/about" className="self-center"><Button text={t("know")} /></Link>
      </div>
      <video src="../about-video.mp4" controls={true} width={700} about="About Video" className="self-center"/>
    </div>
  );
};

export default About;
