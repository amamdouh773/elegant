import React from "react";

const Button = ({ text = "click",style }: { text: string,style?:string }) => {
  return (
    <button className={`border-[#B32227] p-[12px] border-[2px] rounded-[8px] w-[180px] h-[62px] text-[20px] text-[#B32227] font-semibold  ${style}` }>
      {text}
    </button>
  );
};

export default Button;
