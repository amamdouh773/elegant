import React from "react";

type ColoredHeaderProps = {
  text: string;
  coloredText: string;
  style?: string;
};

const ColoredHeader: React.FC<ColoredHeaderProps> = ({
  text,
  coloredText,
  style = "",
}) => {
  return (
    <div
      className={`flex items-center justify-center gap-3 w-full mb-8 text-center flex-wrap ${style}`}
    >
      <p className="text-header font-bold underline decoration-primary decoration-2 underline-offset-8 text-xl sm:text-2xl lg:text-4xl">
        {text}
      </p>
      <p className="text-primary text-header font-bold text-xl sm:text-2xl lg:text-4xl">
        {coloredText}
      </p>
    </div>
  );
};

export default ColoredHeader;
