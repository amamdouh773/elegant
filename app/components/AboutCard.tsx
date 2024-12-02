import Image from "next/image";
import React from "react";

type aboutProps = {
  title: string;
  description: string;
  url: string;
  locale: string
};

const AboutCard = ({ title, description, url, locale }: aboutProps) => {
  return (
    <div
      className={`flex bg-primary mb-11 max-w-4xl justify-center items-start p-5 even:rounded-l-xl odd:mr-auto odd:rounded-r-xl`}
    >
      <Image
        src={url}
        alt={title}
        width={300}
        height={300}
        className="w-72 h-72"
      />
      <div className={`flex flex-col justify-start items-center mx-8 gap-3 ${locale === "ar" ? "rtl":"ltr"}`}>
        <p className="underline text-white font-medium text-3xl">{title}</p>
        <p className="text-gray-100 leading-relaxed font-light text-xl">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
