import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between sm:px-14 sm:py-2 lg:px-40 lg:py-2 shadow-md ">
      <h1 className="font-bold sm:text-lg sm:my-3 lg:text-2xl text-[#ff748d]">TweetX</h1>
      <div className="flex flex-row">
        <NavLink
          to=""
          end
          className="sm:mx-4 sm:my-4 sm:text-sm lg:mx-12 lg:my-4 font-semibold lg:text-md text-[#e8e8e8]"
        >
          Feed
        </NavLink>
        <NavLink
          to="users"
          className="sm:mx-4 sm:my-4 sm:text-sm lg:mx-12 lg:my-4 font-semibold lg:text-md text-[#e8e8e8]"
        >
          Users
        </NavLink>
        <NavLink
          to="profile"
          className="sm:mx-4 sm:my-4 sm:text-sm lg:ml-12 lg:my-4 mr-20 font-semibold lg:text-md text-[#e8e8e8]"
        >
          Profile
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
