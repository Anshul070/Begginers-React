import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

function Button({ text, whiteTheme }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="flex relative w-fit items-center"
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}>
      <button
        className={`items-center shrink-0 pb-1 px-6 flex justify-center text-xl rounded-full ${
          whiteTheme
            ? "bg-white text-black font-semibold h-16"
            : "bg-zinc-900 text-white h-12"
        }`}>
        {text}
      </button>
      <span
        className={` overflow-hidden flex items-center justify-end rounded-full transition-all duration-500 ${
          hover ? "-translate-x-[-40%]" : "-translate-x-[0%]"
        }  ${whiteTheme ? "bg-black border-[1px] border-zinc-700 w-16 h-16 text-3xl" : "bg-zinc-300 border-[1.5px] border-zinc-400 w-12 h-12"}`}>
        <span
          className={`w-full shrink-0 h-full flex items-center justify-center rounded-full  transition-all duration-[1s] ${
            hover ? "translate-x-[100%]" : "-translate-x-[0%]"
          } ${
            whiteTheme ? "bg-white text-black" : "bg-zinc-900 text-white"
          }` }>
          <IoIosArrowForward />
        </span>
        <span
          className={`w-full shrink-0 h-full flex items-center justify-center rounded-full  ${
            whiteTheme ? "bg-black" : "bg-zinc-300"
          }`}>
          <IoIosArrowForward />
        </span>
      </span>
    </div>
  );
}

export default Button;
