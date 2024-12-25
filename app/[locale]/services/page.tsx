import React from "react";
import ColoredHeader from "../../components/ColoredHeader";
import { services } from "../../assets/services";
import ServiceDetails from "../../components/ServiceDetails";
import { useTranslations } from "next-intl";

const Services = () => {
  const t = useTranslations("Services-Page");
  return (
    <div className="container mx-auto p-6">
      {/* Header Section */}
      <ColoredHeader
        text={t("title")}
        coloredText={t("colored-title")}
        style="text-center"
      />

      {/* Services Content */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-12 mb-24">
        {/* Service Details */}
        <div className="flex flex-col gap-16 w-full">
          {services.map((service) => (
            <ServiceDetails
              name={t(service.name)}
              icon={service.image}
              isList={service.isList}
              list={service.list}
              key={service.name}
              details={t(service.details)}
            />
          ))}
        </div>

        {/* Image Section */}
        {/* <div className="hidden lg:block">
          <Image
            src="/services.png"
            alt="Services Image"
            height={1000}
            width={500}
            className="rounded-lg h-full"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Services;
