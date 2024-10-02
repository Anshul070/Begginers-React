import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import RouteHandler from "../utils/RouteHandler";

function SideBar() {
  const [hover,setHover] = useState(false);
  return (
    <div className="flex h-[inherit]">
      <div className="h-full bg-blue-100 border-r-[1px] border-black flex flex-col gap-5 items-center p-10">
        <NavLink
          className={(e) => {
            return e.isActive
              ? "text-purple-800 transition-all duration-150"
              : " transition-all duration-150";
          }}
          to={"/electronics"}>
          Electronics
        </NavLink>
        <div onMouseEnter={()=>{
          setHover(!hover);
        }} 
        onMouseLeave={()=>{
          setHover(!hover);
        }}
        className="p-2 flex flex-col items-center">
        <NavLink
          className={(e) => {
            e.isActive = hover; 
            return e.isActive
              ? "text-lg text-purple-800 transition-all duration-150"
              : "text-md transition-all duration-150";
          }}
          >
          Cloths
        </NavLink>
          <div className={`flex flex-col items-center transition-all duration-150 ${hover ? '' : "h-0 scale-0"}`}>
          <NavLink to={"/cloths/men"} className={"text-md font-semibold"}>Men</NavLink>
          <NavLink to={"/cloths/women"} className={"text-md font-semibold"}>Women</NavLink>
          </div>
        </div>
        <NavLink
          className={(e) => {
            return e.isActive
              ? "text-purple-800 transition-all duration-150"
              : "transition-all duration-150";
          }}
          to={"/accessories"}>
          Jewelery
        </NavLink>
      </div>
      <div className="w-full h-full overflow-x-hidden">
        <RouteHandler />
      </div>
    </div>
  );
}

export default SideBar;
