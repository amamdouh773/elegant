import React from "react";
import { stories } from "../assets/stories";
import StoryCard from "./StoryCard";
import Image from "next/image";



const Slider = () => {
  return (
    <div className="flex justify-between items-center w-full mt-10">
      <Image src="/left-arrow.png" alt="arrow" height={55} width={55} className="cursor-pointer"/>
      {stories.map(story=><StoryCard key={story.name} name={story.name} icon={story.icon} date={story.Date}/>)}
      <Image src="/right-arrow.png" alt="arrow" height={55} width={55}  className="cursor-pointer"/>
    </div>
  );
};

export default Slider;
