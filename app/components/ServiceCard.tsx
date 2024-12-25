import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type serviceProps = {
  icon: string;
  name: string;
  locale: string | string[] | undefined;
};

const ServiceCard = ({ icon, name, locale }: serviceProps) => {
  const t = useTranslations("Services-section");

  return (
    <div className="flex flex-col items-center p-6 border-4 border-primary rounded-xl shadow-lg hover:scale-105 transition-transform transform">
      {/* Icon Section */}
      <Image
        src={icon}
        alt={name}
        width={100}
        height={100}
        className="w-[100px] h-[100px] object-contain mb-4"
      />

      {/* Text Section */}
      <div className="text-center">
        <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
          {name}
        </p>
        <Link
          href={`${locale}`}
          className="text-lg md:text-xl text-primary font-medium underline decoration-primary underline-offset-4"
        >
          {t("know")}
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
