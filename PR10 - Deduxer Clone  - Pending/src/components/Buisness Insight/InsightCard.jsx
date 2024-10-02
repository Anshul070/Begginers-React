import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

function InsightCard({CardDtls}) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className=" w-full h-72 border-b-[1px] border-zinc-700 flex items-center justify-between"
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}>
      <div className={`w-2/5 h-full flex flex-col justify-around shrink-0 transition-all duration-[0.3s] ${hover && "opacity-60"}`}>
        <h4 className="text-4xl">
          {CardDtls.title}
        </h4>
        <div className="flex gap-4 text-zinc-500 font-semibold">
          <h3>{CardDtls.time} min read</h3>
          <h3>{CardDtls.type}</h3>
        </div>
      </div>

      <div className="w-42vw h-full mb-4">
        <img
          className={`w-full h-full object-fit transition-all duration-[0.3s] ease-in ${hover ? "rotate-x-0 rounded-2xl" : "rotate-x-90"}`}
          src={CardDtls.url}
          alt=""
        />
      </div>

      <div>
        <span
          className={`bg-zinc-300 overflow-hidden w-12 h-12 flex items-center justify-end rounded-full border-[1px] border-zinc-700 transition-all duration-500`}>
          <span
            className={`bg-white w-full shrink-0 h-full flex items-center justify-center text-white rounded-full transition-all duration-[0.5s] ${
              hover ? "translate-x-[100%]" : "-translate-x-[0%]"
            }`}></span>
          <span
            className={`bg-black w-full shrink-0 h-full flex items-center justify-center rounded-full transition-all duration-[0.5s] ${
              hover ? "text-black" : "text-white"
            }`}>
            <span className="absolute">
              <IoIosArrowForward />
            </span>
          </span>
        </span>
      </div>
    </div>
  )
}

export default InsightCard