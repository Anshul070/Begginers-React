import React from "react";
function Card({userInfo , index , removeHandler}) {
  return (
    <div className="w-52 h-60 bg-zinc-100 rounded-md p-4 flex flex-col justify-between items-center">
      <img className="w-20 h-20 rounded-full object-cover mx-auto border-2 border-black"
        src={userInfo.imgUrl}
        alt=""
      />
      <h3 className="font-semibold">{userInfo.name}</h3>
      <h5 className="text-xs font-semibold opacity-60">{userInfo.email}</h5>
      <h5 className="text-xs font-semibold text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel esse et rerum.</h5>
      <button onClick={() => removeHandler(index)} className="bg-red-700 px-3 py-1 text-xs rounded-md text-zinc-200">Remove</button>
    </div>
  );
}

export default Card;
