import React from "react";

type HeaderComponentProps = {
  text: string;
  style?: string; // Optional custom styles
};

const HeaderComponent: React.FC<HeaderComponentProps> = ({ text, style }) => {
  return (
    <h2
      className={`text-primary text-4xl font-bold underline decoration-primary decoration-2 underline-offset-8 mb-12 text-center sm:text-3xl sm:mb-8 ${style}`}
    >
      {text}
    </h2>
  );
};

export default HeaderComponent;
