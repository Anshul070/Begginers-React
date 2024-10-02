import React from "react";

function StrCard({ svg }) {
  return (
    <div className="w-[35vw] h-[31vw] bg-zinc-100 border-zinc-400 rounded-2xl border-[1px] p-8 flex flex-col justify-between">
      <div className="w-24">{svg.svg}</div>
      <div>
        <h3 className="text-3xl font-medium">{svg.title}</h3>
        <h4 className="text-xl mt-4 font-medium opacity-60">{svg.description}</h4>
      </div>
    </div>
  );
}

export default StrCard;
