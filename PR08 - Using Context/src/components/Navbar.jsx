import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-500 flex p-3 justify-around gap-10">
        <h2 className="text-zinc-100 text-xl font-semibold">Navbar</h2>
      <div className="flex gap-10">
      <NavLink
        to={"/"}
        className={(e) => {
          return e.isActive
            ? "text-xl text-zinc-100 font-semibold"
            : "text-zinc-100 opacity-80";
        }}>
        Home
      </NavLink>
      <NavLink
        to={"/users"}
        className={(e) => {
          return e.isActive
            ? "text-xl text-zinc-100 font-semibold"
            : "text-zinc-100 opacity-80";
        }}>
        Users
      </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
