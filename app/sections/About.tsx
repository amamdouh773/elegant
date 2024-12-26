import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import Button from "../components/Button";
import Link from "next/link";
import { useTranslations } from "next-intl";

const About = ({ locale }: { locale: string | string[] | undefined }) => {
  const t = useTranslations("AboutUs-section");

  return (
    <div className="flex flex-col bg-gray-100 lg:flex-row justify-between items-center px-4 py-8 sm:px-8 lg:px-16 gap-8">
      {/* Text Content */}
      <div className="flex flex-col gap-4 justify-center items-center lg:items-center max-lg:mt-5 text-center lg:text-left">
        <HeaderComponent text={t("title")} />
        <p className="font-normal text-lg md:text-xl lg:text-2xl leading-loose">
          {t("description")}
        </p>
        <Link href={`${locale}/about`}>
          <Button text={t("know")} />
        </Link>
      </div>

      {/* Video Section */}
      <div className="w-full max-w-[700px]">
        <video
          src="../about-video.mp4"
          controls={true}
          className="w-full h-auto rounded-lg shadow-lg"
          aria-label="About Video"
        />
      </div>
    </div>
  );
};

export default About;
