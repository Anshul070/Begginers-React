import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

function UserModel({ user, handleTap, index }) {
  const { tap, name, username, profieImg } = user;
  const navigate = useNavigate();
  return (
    <div
      className={`flex flex-nowrap h-40 relative`}
      onClick={() => {
        handleTap(index);
        navigate(`/users/${name}`);
      }}>
      <div className={`w-auto`}>
        <img
          className={`h-40 w-full  object-cover ${
            tap ? "rounded-l-md" : "rounded-md"
          } `}
          src={profieImg}
          alt=""
        />
        <div
          className={`w-full absolute rounded-b-md px-2 bottom-0 backdrop-blur-sm ${
            tap ? "h-0" : "h-2/6"
          }`}>
          <h2 className={`font-semibold ${tap ? "hidden" : "block"}`}>
            {name}
          </h2>
          <h4 className={`text-xs opacity-80  ${tap ? "hidden" : "block"}`}>
            {username}
          </h4>
        </div>
      </div>

      <div
        className={`overflow-hidden px-5 py-2 text-black h-40 bg-blue-300 rounded-r-md ${
          !tap ? "w-0 z-0 hidden" : "w-60 block"
        }`}>
        {tap ? <Outlet /> : <></>}
      </div>
    </div>
  );
}

export default UserModel;
