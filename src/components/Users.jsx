import React from "react";
import Follow from "../reusable/Follow"
import Following from "../reusable/Following"

const Users = () => {
  return (
    <div className="mx-96 my-10 ">
      <Follow/>
      <hr className="mx-28"/>
      <Following/>
    </div>
  );
};

export default Users;
