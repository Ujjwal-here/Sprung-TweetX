import React from "react";

const Users = () => {
  return (
    <div className="mx-96 my-10 ">
      <div className="flex flex-row items-center">
        <div className="border border-[#b8b8b8] rounded-full h-14 w-14"></div>
        <div className="flex flex-col">
          <h1 className="mx-8 text-lg font-semibold text-[#707070]">
            Arjun Reddy
          </h1>
          <h1 className="mx-8 my-2 align-middle text-xs text-[#bfbfbf]">
            Following:200
          </h1>
        </div>
        <button className="mx-48 my-6 py-2 px-6 rounded bg-[#ff748d] text-white ">
          Follow
        </button>
      </div>
      <hr className="mr-60 my-4"/>
    </div>
  );
};

export default Users;
