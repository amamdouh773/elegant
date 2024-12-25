import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import { services } from "../assets/services";
import ServiceCard from "../components/ServiceCard";
import { useTranslations } from "next-intl";

const Services = ({
  locale,
}: {
  locale: string | string[] | undefined;
}) => {
  const t = useTranslations("Services-section");

  return (
    <div className="flex flex-col items-center px-4 py-8 sm:px-8 lg:px-16 gap-8">
      {/* Section Header */}
      <HeaderComponent text={t("title")} />

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-[1200px]">
        {services.slice(0, 4).map((service) => (
          <ServiceCard
            key={service.name}
            icon={service.icon}
            name={t(service.name)}
            locale={locale}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
