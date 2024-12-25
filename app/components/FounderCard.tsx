import Image from "next/image";
import React from "react";

type founderProps = {
  name: string;
  image: string;
  about: string;
};

const FounderCard = (founder: founderProps) => {
  const { name, image, about } = founder;
  return (
    <div className="flex flex-col items-center justify-center gap-4 max-md:mb-4">
      <Image
        src={image}
        height={400}
        width={400}
        alt="Founder"
        className="rounded-xl border-primary border-2 max-md:w-[200px]"
      />
      <p className="text-2xl text-primary font-bold underline underline-offset-4 max-md:text-lg">
        {name}
      </p>
      <p className="max-w-[400px] text-lg text-center max-md:text-sm max-md:max-w-[200px]">{about}</p>
    </div>
  );
};

export default FounderCard;
