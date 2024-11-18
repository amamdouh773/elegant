import React from "react";
import { stories } from "../assets/stories";
import StoryCard from "./StoryCard";



const Slider = () => {
  return (
    <div className="flex justify-between items-center w-full mt-10">
      <img src="../left-arrow.png" alt="arrow" className="w-14 h-14 cursor-pointer"/>
      {stories.map(story=><StoryCard key={story.name} name={story.name} icon={story.icon} date={story.Date}/>)}
      <img src="../right-arrow.png" alt="arrow"  className="w-14 h-14 cursor-pointer"/>
    </div>
  );
};

export default Slider;
