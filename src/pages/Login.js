import React, { useState } from "react";
import bulb from "./bulb.jpg";
import login from "./login-logo2.png";
import { AiOutlineEye } from "react-icons/ai";

const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("")
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(email,password)
  }
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-white-100 flex rounded-2xl  shadow-lg  max-w-3xl p-5 items-center content-between justify-center">
        <div className="md:block hidden w-1/2">
          <img className="rounded-2xl shadow-lg" src={bulb} alt="" />
        </div>

        <div className="md:w-1/2 px-8 md:px-16">
          <img className="" src={login} alt="" />
          <h2 className="text-center font-bold text-3xl">
            Welcome <span className=" text-[#00FF00]">Back</span>
          </h2>
          <p className="text-xs text-center mt-4 text-[#002D74]">
            Gold to see you again
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              className="p-2 mt-8 rounded-xl border"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              onChange={e=>setEmail(e.target.value)}
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type="password"
                name="password"
                placeholder="Password"
                onChange={e=>setPassword(e.target.value)}
              />
              <p className="absolute top-1/2 right-3 -translate-y-1/2">
                {" "}
                <AiOutlineEye />
              </p>
            </div>
            <a href="/#" className="text-right">
              Forgot Password
            </a>
            <button className="bg-[#000000] rounded-xl text-white py-2 hover:scale-105 duration-300">
              Login
            </button>
          </form>

          <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
            <p>Don't have an account?</p>
            <a
              href="/register"
              className="py-2 px-5 bg-[#000000] text-white border rounded-xl hover:scale-110 duration-300"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
