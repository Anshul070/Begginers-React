import React from "react";

const HomeCard = ({ user , handleLike ,userIndex , handleDisLike}) => {
  return (
    <div className="w-1/2 h-2/5 bg-blue-300 rounded-md flex items-center p-5 text-zinc-800 justify-around">
      <img
        className="w-14 h-14 rounded-full object-cover object-top"
        src={user.profieImg}
        alt=""
      />
      <div className="w-1/2 ">
        <h2 className="font-semibold">{user.name}</h2>
        <h2 className="font-semibold text-xs opacity-50">{user.username}</h2>
        <h4 className="text-xs opacity-80 p-2 bg-[#ffffff] rounded">
          {user.tweets}
        </h4>
      </div>
      <div className="w-1/6 flex justify-center">
      <button onClick={
        ()=>{
          handleLike(userIndex);
          
        }
      } className={`transition-all duration-500 ${user.like ? "px-6 bg-[#008a8e]" : "px-10 bg-[#00d216]"} py-4 mt-5 rounded-md text-white`}>
        {user.like ? "Liked!" : "Like"}
      </button>
      </div>
      <div className="w-1/6 flex justify-center">
      <button onClick={
        ()=>{
          handleDisLike(userIndex);
          
        }
      } className={`transition-all duration-500 ${user.dislike ? "px-6 bg-[#9f0000]" : "px-10 bg-[#ff0000]"} py-4 mt-5 rounded-md text-white`}>
        Dislike
      </button>
      </div>
    </div>
  );
};

export default HomeCard;
