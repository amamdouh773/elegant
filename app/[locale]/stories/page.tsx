import React from "react";
import { stories } from "../../assets/stories";
import StoryFull from "../../components/StoryFull";

const Stories = () => {
  return (
    <div>
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
    </div>
  );
};

export default Stories;
