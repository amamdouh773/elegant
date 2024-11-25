import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type serviceProps = {
  icon: string;
  name: string;
  locale: string|string[]|undefined;
};

const ServiceCard = ({ icon, name,locale }: serviceProps) => {
  const t = useTranslations("Services-section")
  return (
    <div className="flex justify-start items-center gap-11 px-7 py-11 border-4 border-primary rounded-xl min-w-[600px] min-h-[260px] last:mx-auto">
      <Image src={icon} alt="icon" width={150} height={150}/>
      <div className="flex flex-col gap-2">
        <p className="text-3xl font-normal">{name}</p>
        <Link href={`${locale}`} className="underline decoration-primary underline-offset-4 text-2xl text-primary font-normal">{t("know")}</Link>
      </div>
    </div>
  );
};

export default ServiceCard;
