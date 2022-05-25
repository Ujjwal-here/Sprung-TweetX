import React from "react";

const Main = () => {
  return (
    <div className="mx-96">
      <button className="my-8 py-2 px-6 rounded bg-[#ff748d] text-white ">
        Write
      </button>
      <div className="pl-10  py-6 rounded-3xl shadow-lg">
        <div className="flex flex-row items-center">
          <div className="border border-[#b8b8b8] rounded-full h-14 w-14"></div>
          <h1 className="mx-8 text-lg font-semibold text-[#707070]">
            Arjun Reddy
          </h1>
        </div>
        <h1 className="my-2 align-middle text-xs text-[#bfbfbf]">
          10 mins ago
        </h1>
        <div className="main">
          <h1 className="mx-20 text-[#b6b6b6]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            lectus tortor, aliquet sed lectus eget, iaculis egestas erat. Nam
            non lacinia urna, a luctus leo. Morbi vestibulum lorem porttitor
            massa porta laoreet ut a mauris. Nam auctor convallis ligula, et
            consequat lectus tincidunt sit amet.
          </h1>
          <div className="semicircle"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
