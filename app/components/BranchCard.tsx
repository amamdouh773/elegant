import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

type BranchProps = {
  country: string;
  hours: string[];
  location: string;
  logo: string;
  phone: string;
  mail: string;
};

const BranchCard = ({
  country,
  hours,
  location,
  logo,
  phone,
  mail,
}: BranchProps) => {
  const t = useTranslations("About-Page");
  return (
    <div className="flex flex-col items-center justify-between bg-white shadow-lg rounded-lg p-4 gap-6 w-full max-w-md h-fit min-h-[500px] mx-auto">
      {/* Logo Section */}
      <div className="flex justify-center items-center w-32 h-32">
        <Image
          src={logo}
          width={128}
          height={128}
          alt={`${country} logo`}
          className="object-contain"
        />
      </div>

      {/* Country Title */}
      <p className="text-primary text-2xl font-bold underline underline-offset-8 text-center">
        {t(country)}
      </p>

      {/* Details Section */}
      <div className="flex flex-col justify-between gap-4 text-center flex-grow">
        {/* Address */}
        <div>
          <p className="text-primary font-semibold">{t("address")}</p>
          <p className="text-gray-700">{t(location)}</p>
        </div>

        {/* Hours */}
        <div>
          <p className="text-primary font-semibold">{t("hours")}</p>
          <ul className="text-gray-700">
            {hours.map((h) => (
              <li key={h}>{t(h)}</li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-primary font-semibold">{t("contact")}</p>
          <p className="text-gray-700">{phone}</p>
          <p className="text-gray-700">{mail}</p>
        </div>
      </div>
    </div>
  );
};

export default BranchCard;
