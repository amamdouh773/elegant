import React from "react";
import Button from "../components/Button";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Hero = ({ locale }: { locale: string }) => {
  const t = useTranslations("Hero");

  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 sm:px-8 lg:px-16">
      {/* Hero Image */}
      <Image
        src="/Hero.png"
        alt="Hero"
        width={1000}
        height={550}
        className="w-full max-w-[1000px] h-auto object-contain max-md:max-w-[750px] max-sm:max-w-[90%]"
      />

      {/* Hero Text */}
      <div className="flex flex-col items-center justify-center text-center mt-8 mb-12 max-lg:mb-6">
        <p className="font-extrabold text-primary text-[36px] sm:text-[30px] md:text-[34px] lg:text-[45px] xl:text-header leading-tight">
          {t("title")}
        </p>
        <p className="font-extrabold text-primary text-[36px] sm:text-[30px] md:text-[34px] lg:text-[45px] xl:text-header leading-tight">{t('slogan')}</p>
        <p className="font-normal text-[18px] sm:text-[16px] md:text-[20px] lg:text-[22px] xl:text-[24px] mt-4 sm:mt-3 lg:mt-5 leading-relaxed max-w-[800px]">
          {t("sub-title")}
        </p>
      
      </div>

      {/* Hero Button */}
      <Link href={`${locale}/contact`}>
        <Button text={t("contact-us")} />
      </Link>
    </div>
  );
};

export default Hero;
