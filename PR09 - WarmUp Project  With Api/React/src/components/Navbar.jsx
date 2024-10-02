import React from "react";
import { NavLink } from "react-router-dom";
import SideBar from "./SideBar";

const Navbar = () => {
  return <>
  <div className="w-full h-24 bg-blue-100 flex justify-around items-center border-b-black border-b-[1.5px]">
    <div className="flex items-center">
    <img className="h-16 w-14 mix-blend-multiply object-cover" src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?w=740&t=st=1724837182~exp=1724837782~hmac=d18461c2826674fda51019937d57d940d255a27b85949485b76104eb318fe5c5" alt="" />
    <h2 className="text-xl font-semibold">Kharido</h2>
    </div>

    <div className="flex gap-16">
    <NavLink to={"/"}>Home</NavLink>
    <NavLink to={"/add"}>Add</NavLink>
    <NavLink to={"/edit"}>Edit</NavLink>
    <NavLink to={"/remove"}>Remove</NavLink>
    </div>
  </div>
  </>

};

export default Navbar;
