import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between px-40 py-4 shadow-md ">
      <h1 className="font-bold text-2xl text-[#ff748d]">TweetX</h1>
      <div className="flex flex-row">
        <NavLink to='' className="mx-12 font-bold text-lg text-[#e8e8e8]">Feed</NavLink>
        <NavLink to='users' className="mx-12 font-bold text-lg text-[#e8e8e8]">Users</NavLink>
        <NavLink to='profile' className="ml-12 mr-20 font-bold text-lg text-[#e8e8e8]">Profile</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
