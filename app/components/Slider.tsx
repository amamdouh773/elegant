'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import StoryCard from "./StoryCard";
import { stories } from "../assets/stories";

const Slider = ({ locale }: { locale: string }) => {
  const [width, setWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

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
    <div className="flex justify-between items-center w-full mt-10 ltr">
      <Image
        src="/left-arrow.png"
        alt="arrow"
        height={55}
        width={55}
        className="cursor-pointer max-lg:w-10"
        onClick={handlePrev}
      />
      {(width > 1024
        ? stories.slice(currentIndex, currentIndex + 3)
        : width > 768
        ? stories.slice(currentIndex, currentIndex + 2)
        : stories.slice(currentIndex, currentIndex + 1)
      ).map((story) => (
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
        className="cursor-pointer max-lg:w-10"
        onClick={handleNext}
      />
    </div>
  );
};

export default Slider;