import Link from "next/link";
import React from "react";

type serviceProps = {
  icon: string;
  name: string;
};

const ServiceCard = ({ icon, name }: serviceProps) => {
  return (
    <div className="flex justify-start items-center gap-11 px-7 py-11 border-4 border-primary rounded-xl min-w-[600px] min-h-[260px] last:mx-auto">
      <img src={icon} alt="icon" width={150}/>
      <div className="flex flex-col gap-2">
        <p className="text-3xl font-normal">{name}</p>
        <Link href="/" className="underline decoration-primary underline-offset-4 text-2xl text-primary font-normal">Know More</Link>
      </div>
    </div>
  );
};

export default ServiceCard;
