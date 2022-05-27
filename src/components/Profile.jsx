import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div className="sm:mx-16 md:mx-28 lg:mx-48 2xl:mx-96 sm:my-14 lg:my-12">
      <div className="sm:h-20 lg:h-32 flex flex-row">
        <div className="border border-[#b8b8b8] rounded-full sm:h-14 sm:w-14 lg:h-24 lg:w-24 xl:h-14 xl:w-28 2xl:h-20 2xl:w-20"></div>
        <div className="sm:mx-4 lg:mx-12 xl:mx-16 2xl:mx-12 flex flex-col self-end">
          <h1 className="sm:mx-4 lg:mx-4 sm:text-md lg:text-xl font-bold text-[#707070]">
            Arjun Reddy
          </h1>
          <div className="sm:my-4 lg:my-6 flex flex-row">
            <h1 className="sm:mx-4 lg:mx-4 sm:text-xs 2xl:mx-4 lg:text-sm text-[#c9c9c9]">Posts : 511</h1>
            <h1 className="sm:mx-4 sm:text-xs lg:text-sm 2xl:mx-8 text-[#c9c9c9]">Followers : 511</h1>
            <h1 className="sm:mx-4 sm:text-xs lg:text-sm 2xl:mx-8 text-[#c9c9c9]">Following : 511</h1>
          </div>
        </div>
      </div>
      <hr className="ml-20 mr-36 mt-10" />
      <div className="mt-8">
        <NavLink to="" end className="sm:text-sm text-[#b7b7b7] sm:ml-2 md:ml-14 lg:ml-40 px-6 mx-8">
          Posts
        </NavLink>
        <NavLink to="follow" className="sm:text-sm text-[#b7b7b7] sm:ml-8 lg:ml-16 px-6">
          Followers
        </NavLink>
        <NavLink to="following" className="sm:text-sm text-[#b7b7b7] ml-16 lg:px-6">
          Following
        </NavLink>
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
