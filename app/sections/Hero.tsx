import React from "react";
import Button from "../components/Button";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Hero = ({locale}:{locale:string}) => {
  const t = useTranslations("Hero");
  return (
    <div className="flex items-center justify-center flex-col ">
      <Image src="/Hero.png" alt="logo" width={1000} height={550}/>
      <div className="flex flex-col items-center justify-center mb-[40px]">
        <p className="font-extrabold text-primary text-header">{t("title")}</p>
        <p className="font-normal text-[40px] mt-[33px]">{t("sub-title")}</p>
      </div>
      <Link  href={locale + "/contact"}> <Button text={t("contact-us")} /></Link>
    </div>
  );
};

export default Hero;
