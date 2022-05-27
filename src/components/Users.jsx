import React from "react";
import Follow from "../reusable/Follow"
import Following from "../reusable/Following"

const Users = () => {
  return (
    <div className="sm:mx-14 lg:mx-32 md:mx-20 2xl:mx-96 my-10 ">
      <Follow/>
      <hr className="mx-28"/>
      <Following/>
    </div>
  );
};

export default Users;
