import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type storiesProps = {
  name: string;
  icon: string;
  date: string;
  id: string;
  locale: string;
};

const StoryCard = ({ name, icon, date, id, locale }: storiesProps) => {
  const t = useTranslations("Stories-section");
  return (
    <div className="flex flex-col gap-4 justify-center items-center p-6 border-2 rounded-xl border-primary shadow-md w-full max-w-[320px] md:max-w-[280px] lg:max-w-[250px] xl:max-w-[300px] bg-white">
      {/* User Info */}
      <div className="flex flex-col lg:flex-row gap-3 items-center w-full">
        <Image
          src={icon}
          alt="user"
          width={50}
          height={50}
          className="w-12 h-12 sm:w-10 sm:h-10 object-contain"
        />
        <div className="flex flex-col justify-center items-start">
          <p className="text-lg sm:text-base font-semibold text-gray-800 truncate">
            {name}
          </p>
          <p className="text-sm sm:text-xs text-gray-600">{date}</p>
        </div>
      </div>

      {/* Explore Button */}
      <Link
        href={`${locale}/stories/${id}`}
        className="bg-primary py-2 px-4 w-full max-w-[120px] text-center text-white font-bold rounded-xl text-sm sm:text-xs hover:bg-primary-dark transition"
      >
        {t("explore")}
      </Link>
    </div>
  );
};

export default StoryCard;
