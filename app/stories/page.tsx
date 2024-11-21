import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { stories } from "../assets/stories";
import StoryFull from "../components/StoryFull";

const Stories = () => {
  return (
    <div>
      <Nav />
      <div className="flex flex-wrap gap-14 my-14 justify-center items-center">
        {stories.map((story) => (
          <StoryFull
            name={story.name}
            date={story.Date}
            icon={story.icon}
            story={story.story}
            id={story.id}
            key={story.name}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Stories;
