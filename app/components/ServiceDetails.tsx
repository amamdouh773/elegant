import Image from "next/image";
import React from "react";

type ServiceProps = {
  name: string;
  icon: string;
  details: string;
  isList: boolean;
  list?: { icon: string }[];
};

const ServiceDetails = ({
  name,
  icon,
  details,
  isList,
  list,
}: ServiceProps) => {
  return (
    <div className="flex flex-col items-center  gap-8 lg:gap-16 p-6 rounded-lg shadow-lg bg-white max-w-6xl mx-auto">
      {/* Service Icon and Name */}
      <div className="flex flex-col justify-center items-center gap-3">
        <Image
          src={icon}
          width={256}
          height={256}
          alt={`${name} Icon`}
          className="w-40 h-40 object-contain lg:w-64 lg:h-64"
        />
        <p className="text-primary text-2xl font-bold underline underline-offset-4 text-center">
          {name}
        </p>
      </div>

      {/* Service Details and List */}
      <div className="flex flex-col items-center gap-4 max-w-2xl text-left">
        <p className="text-gray-700 text-lg font-light leading-relaxed">
          {details}
        </p>

        {isList && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-4 w-full ">
            {list?.map((item) => (
              <div
                key={item.icon}
                className="flex flex-col items-center text-center rounded-xl border-primary border-2"
              >
                <Image
                  src={item.icon}
                  alt={item.icon}
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
