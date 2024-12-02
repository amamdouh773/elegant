import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

type branchProps = {
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
}: branchProps) => {
  const t = useTranslations("About-Page");
  return (
    <div className="flex flex-col p-4 gap-4 items-center justify-center max-w-80">
      <Image src={logo} width={288} height={288} alt="logo" className="w-72 h-72" />
      <p className="self-center text-primary text-3xl underline underline-offset-8 font-bold p-2">{t(country)}</p>
      <div className="flex flex-col">
        <p className="text-primary font-bold">{t("address")}</p>
        <p>{t(location)}</p>
        <p className="text-primary font-bold">{t("hours")}</p>
        {hours.map(h=>(<p key={h}>{t(h)}</p>))}
        <p className="text-primary font-bold">{t("contact")}</p>
        <p>{phone}</p>
        <p>{mail}</p>
      </div>
    </div>
  );
};

export default BranchCard;
