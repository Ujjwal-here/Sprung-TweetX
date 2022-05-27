import React from "react";

const Following = () => {
  return (
    <div className="sm:ml-12 lg:ml-28 mt-4 mb-6">
      <div className="flex flex-row items-center">
        <div className="border border-[#b8b8b8] rounded-full h-14 w-14"></div>
        <div className="flex flex-col">
          <h1 className="sm:mx-2 lg:mx-8 sm:text-md lg:text-xl font-semibold text-[#707070]">
            Arjun Reddy
          </h1>
          <h1 className="sm:mx-2 lg:mx-8 sm:text-xs lg:text-md my-2 align-middle text-xs text-[#bfbfbf]">
            Following:200
          </h1>
        </div>
        <button className="mx-40 my-6 py-2 px-2 font-bold text-[#707070] ">
          Following
        </button>
      </div>
    </div>
  );
};

export default Following;
