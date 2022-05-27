import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row">
      <div className="xs:mx-10 lg:mx-20 sm:mx-20 my-10 basis-2/5">
        <h1 className="font-bold xs:text-2xl lg:text-3xl sm:text-xl text-[#ff748d]">TweetX</h1>

        <button
          onClick={() => navigate("/login")}
          className="my-10 xs:py-2 xs:px-14 lg:py-3 lg:px-20 lg:text-sm sm:py-2 sm:px-14 sm:text-xs border border-[#8c8c8c] rounded-xl font-semibold text-[#182631]"
        >
          Login
        </button>

        <h1 className="my-10 xs:text-3xl lg:text-3xl sm:text-2xl font-bold text-[#5d676e]">
          Create Account
        </h1>
        <div className="flex flex-col">
          <input
            className="lg:py-4 my-2 px-4 sm:py-2 sm:text-sm bg-[#f9f9f9] rounded-lg"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
          />
          <input
            className="lg:py-4 my-2 px-4 sm:py-2 sm:text-sm bg-[#f9f9f9] rounded-lg"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <input
            className="lg:py-4 my-2 px-4 sm:py-2 sm:text-sm bg-[#f9f9f9] rounded-lg"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <input
            className="lg:py-4 my-2 px-4 sm:py-2 sm:text-sm bg-[#f9f9f9] rounded-lg"
            type="password"
            name="password2"
            id="password2"
            placeholder="Confirm Password"
          />
        </div>
        <button className="justify-self-end my-6 lg:py-3 lg:px-6 sm:px-4 sm:py-2 rounded lg:text-sm sm:text-xs bg-[#ff748d] text-white ">
          Sign up
        </button>
      </div>
      <div className="flex items-center">
        <img src="sign.png" alt="signup" />
      </div>
    </div>
  );
};

export default Signup;
