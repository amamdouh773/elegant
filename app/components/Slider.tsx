"use client";
import React, { useState } from "react";
import { stories } from "../assets/stories";
import StoryCard from "./StoryCard";
import Image from "next/image";

const Slider = ({locale}:{locale:string|string[]|undefined}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + stories.length) % stories.length
    );
  };
  if (currentIndex > stories.length - 3) {
    setCurrentIndex(0);
  }
  return (
    <div className="flex justify-between items-center w-full mt-10">
      <Image
        src="/left-arrow.png"
        alt="arrow"
        height={55}
        width={55}
        className="cursor-pointer"
        onClick={handlePrev}
      />
      {stories.slice(currentIndex, currentIndex + 3).map((story) => (
        <StoryCard
          key={story.name}
          name={story.name}
          icon={story.icon}
          date={story.Date}
          id={story.id}
          locale={locale}
        />
      ))}
      <Image
        src="/right-arrow.png"
        alt="arrow"
        height={55}
        width={55}
        className="cursor-pointer"
        onClick={handleNext}
      />
    </div>
  );
};

export default Slider;
