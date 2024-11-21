import React from "react";

const ColoredHeader = ({
  text,
  coloredText,
  style,
}: {
  text: string;
  coloredText: string;
  style?: string;
}) => {
  return (
    <div className="flex">
      <p
        className={
          "text-header underline decoration-primary decoration-2 underline-offset-[15px] mb-20 inline" +
          style
        }
      >
        {text}
      </p>
      <p
        className={
          "text-primary text-header ml-3 mb-20 inline" +
          style
        }
      >
        {coloredText}
      </p>
    </div>
  );
};

export default ColoredHeader;
