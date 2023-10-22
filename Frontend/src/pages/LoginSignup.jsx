import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  return (
    <div className=" w-full flex items-center justify-center my-14">
      <div className=" flex flex-col items-center gap-4 bg-cyan-200 px-6 py-10 rounded-lg">
        <p className=" text-3xl">
          {action === "Sign Up" ? "Sign Up" : "Login"}
        </p>

        {action === "Login" ? (
          <div></div>
        ) : (
          <input
            className=" px-6 py-2 focus:outline-none border-[1px] rounded-lg bg-transparent border-gray-500"
            type="text"
            placeholder="Enter Your Name"
          />
        )}
        <input
          className=" px-6 py-2 focus:outline-none border-[1px] rounded-lg bg-transparent border-gray-500"
          type="email"
          placeholder="Enter Your Email"
        />
        <input
          className=" px-6 py-2 focus:outline-none border-[1px] rounded-lg bg-transparent border-gray-500"
          type="password"
          placeholder="Enter Your Password"
        />

        <button
          className=" bg-red-600 w-[255px] py-2 text-white rounded-xl"
          onClick={() => setAction("Sign Up")}
        >
          Continue
        </button>

        {action === "Login" ? (
          <div className=" flex flex-col gap-5">
            <Link className="flex justify-end cursor-pointer text-sm text-green-900">
              Forgot Password
            </Link>

            <p className=" text-xs">
              You don't have an account?{" "}
              <span
                className=" text-red-600 font-semibold cursor-pointer"
                onClick={() => setAction("Sign Up")}
              >
                signup here
              </span>
            </p>
          </div>
        ) : (
          <div></div>
        )}

        {action === "Sign Up" ? (
          <div className=" flex flex-col gap-5 ">
            <div className=" flex justify-end text-xs">
              <p>
                Already have an account?{" "}
                <span
                  className=" text-red-600 font-semibold cursor-pointer"
                  onClick={() => setAction("Login")}
                >
                  Login here
                </span>
              </p>
            </div>

            <div className=" flex gap-2 text-xs">
              <input type="checkbox" name="" id="" />
              <p>By continuing, I agree to the terms of use & privacy policy</p>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
