import React from "react";

const FeedCard = (props) => {
  return (
    <div
      className={`sm:pl-6 sm:py-8 md:pl-8 lg:pl-8 lg:py-8 mx-16 flex flex-row  my-12 rounded-3xl main ${props.shadow}`}
    >
      <div className={`border border-[#b8b8b8] rounded-full ${props.h} ${props.w}`}></div>
      <div className="flex flex-col">
        <h1 className="mx-8 sm:text-lg lg:text-xl font-semibold text-[#707070]">
          Arjun Reddy
        </h1>
        <h1 className="mr-24 mb-2 text-xs text-[#bfbfbf] place-self-end">
          10 mins ago
        </h1>
        <h1 className={`ml-8 mr-20 sm:text-xs lg:text-sm ${props.desfont} text-[#b6b6b6]`}>
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
