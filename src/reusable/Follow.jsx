import React from "react";

const Follow = () => {
  return (
    <div className="ml-28 mt-14 mb-6">
      <div className="flex flex-row items-center">
        <div className="border border-[#b8b8b8] rounded-full h-14 w-14"></div>
        <div className="flex flex-col">
          <h1 className="mx-8 text-md font-semibold text-[#707070]">
            Arjun Reddy
          </h1>
          <h1 className="mx-8 my-2 align-middle text-xs text-[#bfbfbf]">
            Following:200
          </h1>
        </div>
        <button className="mx-40 my-6 py-2 px-6 text-xs rounded bg-[#ff748d] text-white ">
          Follow
        </button>
      </div>
    </div>
  );
};

export default Follow;
