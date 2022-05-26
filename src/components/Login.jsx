import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row">
      <div className="mx-20 my-10 basis-2/5">
        <h1 className="font-bold text-3xl text-[#ff748d]">TweetX</h1>
        <button onClick={()=>navigate('/')} className="my-10 py-2 px-12 border border-[#8c8c8c] rounded-lg font-semibold text-[#182631]">
          Create Account
        </button>
        <h1 className="my-10 text-4xl font-bold text-[#5d676e]">Login</h1>
        <div className="flex flex-col">
          <input
            className="py-4 my-4 px-4 bg-[#f9f9f9] rounded-lg"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <input
            className="py-4 my-4 px-4 bg-[#f9f9f9] rounded-lg"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="my-8 flex flex-row items-center justify-between">
          <h1 className="font-semibold">Forgot Password ?</h1>
          <button onClick={()=>navigate('/main')} className="py-2 px-6 rounded bg-[#ff748d] text-white font-semibold ">
            Login
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <img src="login.png" alt="login" />
      </div>
    </div>
  );
};

export default Login;
