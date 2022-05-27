import React from "react";
import FeedCard from "../reusable/FeedCard";

const Feed = () => {
  return (
    <div className="mx-96">
      <button className="mt-8 py-2 px-6 mx-20 rounded bg-[#ff748d] text-white ">
        Write
      </button>
      <FeedCard shadow="shadow-lg" desfont="text-sm" h="h-16" w="w-44"/>
    </div>
  );
};

export default Feed;
