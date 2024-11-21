import Image from "next/image";
import React from "react";

type serviceProps = {
  name: string;
  icon: string;
  details: string;
  isList: boolean;
  list?: { name: string; icon: string }[];
};

const ServiceDetails = ({
  name,
  icon,
  details,
  isList,
  list,
}: serviceProps) => {
  return (
    <div className="flex justify-between items-center mr-16  gap-20 px-15 ml-10">
      <div className="flex flex-col items-center gap-3 justify-start">
        <Image src={icon} width={100} height={100} alt="icon" />
        <p className="text-primary text-xl underline font-bold">{name}</p>
      </div>
      <div className="max-w-lg  flex flex-col mr-10 items-start justify-start">
        <p className="text-lg font-light">{details}</p>

        {isList && (
          <div className="flex justify-center items-center w-full gap-10 mt-5">
            {list?.map((item) => (
              <div
                className="flex flex-col items-center justify-center gap-2"
                key={item.name}
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <p className="text-sm font-thin">{item.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
