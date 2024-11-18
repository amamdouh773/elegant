import React from "react";
type storiesProps = {
  name: string;
  icon: string;
  date: string;
};

const StoryCard = ({ name, icon, date }: storiesProps) => {
  return (
    <div className="flex  flex-col gap-4 justify-center items-center px-7 py-6 border-2 rounded-xl border-primary">
      <div className="flex gap-3">
      <img src={icon} alt="user" width={50} height={50} />
        <div className="flex flex-col justify-start items-start ">
          <p className="text-3xl">{name}</p>
          <p className="text-l text-gray-600">{date}</p>
        </div>
      </div>
      <button className="bg-primary py-3 px-2 text-white rounded-xl w-32 text-sm">
        Know More
      </button>
    </div>
  );
};

export default StoryCard;
