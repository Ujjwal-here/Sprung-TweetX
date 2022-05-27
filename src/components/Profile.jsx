import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div className="mx-96 my-8">
      <div className="h-40 flex flex-row">
        <div className="border border-[#b8b8b8] rounded-full h-28 w-28"></div>
        <div className="mx-16 flex flex-col self-end">
          <h1 className="mx-8 text-2xl font-bold text-[#707070]">
            Arjun Reddy
          </h1>
          <div className="my-8 flex flex-row">
            <h1 className="mx-8 text-sm text-[#c9c9c9]">Posts : 511</h1>
            <h1 className="mx-8 text-sm text-[#c9c9c9]">Followers : 511</h1>
            <h1 className="mx-8 text-sm text-[#c9c9c9]">Following : 511</h1>
          </div>
        </div>
      </div>
      <hr className="ml-20 mr-36 mt-8" />
      <div className="my-2">
        <NavLink to="" end className="text-[#b7b7b7] ml-40 px-6 mx-8">
          Posts
        </NavLink>
        <NavLink to="follow" className="text-[#b7b7b7] ml-16 px-6">
          Followers
        </NavLink>
        <NavLink to="following" className="text-[#b7b7b7] ml-16 px-6">
          Following
        </NavLink>
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
