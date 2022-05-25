import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between px-40 py-4 shadow-md ">
      <h1 className="font-bold text-2xl text-[#ff748d]">TweetX</h1>
      <div className="flex flex-row">
        <h1 className="mx-12 font-bold text-lg text-[#e8e8e8]">Feed</h1>
        <h1 className="mx-12 font-bold text-lg text-[#e8e8e8]">Users</h1>
        <h1 className="ml-12 mr-20 font-bold text-lg text-[#e8e8e8]">Profile</h1>
      </div>
    </div>
  );
};

export default Navbar;
