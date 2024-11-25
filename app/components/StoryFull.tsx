'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type storyProps = {
  name: string;
  date: string;
  icon: string;
  story: string;
  id: string;
};

const StoryFull = ({ name, date, icon, story, id }: storyProps) => {
  const pathname = usePathname();
  return (
    <div className="flex justify-between items-center gap-14 mx-12 p-8 border-primary border-4 rounded-2xl w-[1340px]">
      <div className="flex flex-col items-center">
        <Image
          src={icon}
          width={50}
          height={50}
          className="w-16 h-16 mb-6"
          alt={name}
        />
        <p className="text-xl font-medium">{name}</p>
        <p className="text-gray-500">{date}</p>
      </div>
      <p className="max-w-3xl">{story}</p>
      <Link
        href={`${pathname}/${id}`}
        className="bg-primary py-3 px-2 w-32 font-bold text-center text-white rounded-xl  text-sm"
      >
        Explore
      </Link>
    </div>
  );
};

export default StoryFull;
