import React from "react";

const FeedCard = (props) => {
  return (
    <div
      className={`pl-8 py-8 mx-16 flex flex-row  my-12 rounded-3xl main ${props.shadow}`}
    >
      <div className={`border border-[#b8b8b8] rounded-full ${props.h} ${props.w}`}></div>
      <div className="flex flex-col">
        <h1 className="mx-8 text-lg font-semibold text-[#707070]">
          Arjun Reddy
        </h1>
        <h1 className="mr-24 mb-2 text-xs text-[#bfbfbf] place-self-end">
          10 mins ago
        </h1>
        <h1 className={`ml-8 mr-20 ${props.desfont} text-[#b6b6b6]`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          lectus tortor, aliquet sed lectus eget, iaculis egestas erat. Nam non
          lacinia urna, a luctus leo. Morbi vestibulum lorem porttitor massa
          porta laoreet ut a mauris
        </h1>
      </div>
      <div className="semicircle"></div>
    </div>
  );
};

export default FeedCard;
