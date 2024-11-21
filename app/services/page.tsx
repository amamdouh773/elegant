import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ColoredHeader from "../components/ColoredHeader";
import Image from "next/image";
import { services } from "../assets/services";
import ServiceDetails from "../components/ServiceDetails";

const Services = () => {
  return (
    <div>
      <Nav />
      <ColoredHeader text="Explore Our" coloredText="Services" style=" ml-6" />
      <div className="flex mb-24">
        <div className="flex flex-col gap-20  w-full">
          {services.map((service) => (
            <ServiceDetails
              name={service.name}
              icon={service.icon}
              isList={service.isList}
              list={service.list}
              key={service.name}
              details={service.details}
            />
          ))}
        </div>
        <Image src="/services.png" alt="image" height={650} width={500} />
      </div>
      <Footer />
    </div>
  );
};

export default Services;
