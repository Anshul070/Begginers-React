import React from "react";
import { FaStar } from "react-icons/fa";

function TmHeading() {
  return (
      <div className="w-full flex flex-col gap-10 items-center pt-28">
        <h5 className="flex gap-2 text-lg ">
        <span className="flex self-center opacity-30 inline-block w-fit">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </span>
        <span className="opacity-60">5 star reviews</span> 
        (70+ on Fiverr Pro)
      </h5>
      <h2 className="text-center text-7xl">Testimonials from<br/>future unicorns</h2>

    </div>
  );
}

export default TmHeading;
