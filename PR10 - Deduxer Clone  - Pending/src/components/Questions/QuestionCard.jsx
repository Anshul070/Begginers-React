import React, { useState } from "react";

function QuestionCard({data}) {
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      <div
        className={`w-full overflow-hidden border-b-[1px] border-zinc-400 transform-all duration-300 hover:bg-white hover:border-[1px] hover:rounded-xl ${
          clicked ? "h-[24vh]" : "h-[8vh]"
        }`}>
        <div
          onClick={() => {
            setClicked(!clicked);
          }}
          className="w-full h-[8vh] flex items-center px-4 gap-8 ">
          <span className="block w-[15px] h-[2.5px] relative bg-black">
            <span className="block w-[15px] h-[2px] absolute rotate-90 bg-black"></span>
          </span>
          <h4 className="text-[1.5vw]">
            {data.Qus}
          </h4>
        </div>
        <div className="pl-16 pt-4 pb-10 text-[1.2vw] text-zinc-500">
          <h4>
            {data.Ans}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default QuestionCard;
