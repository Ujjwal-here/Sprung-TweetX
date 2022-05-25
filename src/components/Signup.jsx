import React from "react";

const Signup = () => {
  return (
    <div className="flex flex-row">
      <div className="mx-16 my-10 basis-2/5">
        <h1 className="font-bold text-3xl text-[#ff748d]">TweetX</h1>
        <button className="my-10 py-2 px-20 border border-[#8c8c8c] rounded-lg font-semibold text-[#182631]">
          Login
        </button>
        <h1 className="my-10 text-4xl font-bold text-[#5d676e]">
          Create Account
        </h1>
        <div className="flex flex-col">
          <input
            className="py-4 my-2 px-4 bg-[#f9f9f9] rounded-lg"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
          />
          <input
            className="py-4 my-2 px-4 bg-[#f9f9f9] rounded-lg"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <input
            className="py-4 my-2 px-4 bg-[#f9f9f9] rounded-lg"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <input
            className="py-4 my-2 px-4 bg-[#f9f9f9] rounded-lg"
            type="password"
            name="password2"
            id="password2"
            placeholder="Confirm Password"
          />
        </div>
        <button className="my-6 py-2 px-6 rounded bg-[#ff748d] text-white ">
          Signup
        </button>
      </div>
      <div className="flex items-center">
        <img src="signin.png" alt="signin"  />
      </div>
    </div>
  );
};

export default Signup;
