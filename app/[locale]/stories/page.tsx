import React from "react";
import { stories } from "../../assets/stories";
import StoryFull from "../../components/StoryFull";
import ColoredHeader from "@/app/components/ColoredHeader";
import { useTranslations } from "next-intl";

const Stories = () => {
  const t = useTranslations("Stories");
  return (
    <div className="py-10">
      {/* Header Section */}

      <ColoredHeader
        coloredText={t("header")}
        text={t("subheader")}

      />

      {/* Stories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-6">
        {stories.map((story) => (
          <StoryFull
            name={story.name}
            date={story.Date}
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
