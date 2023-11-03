import React from "react";

const NewsLetter = () => {
  return (
    <div className=" w-full h-96 mt-10">
      <div className=" mx-[10%] flex flex-col items-center pt-16 gap-5 bg-gradient-to-b from-pink-200 to-white">
        <p className=" text-4xl font-semibold text-gray-700">
          Get Exclusive Offers On Your Email
        </p>
        <p className=" text-sm">Subscribe to our newsletter and stay updated</p>

        <div className="flex w-[90%] mr-8 md:w-[50%]">
          <input
            className=" px-2 md:px-12 py-2.5 w-full rounded-3xl focus:outline-none border-[1px] border-gray-500"
            type="text"
            placeholder="Enter Your Email"
          />
          <button className=" bg-black text-white px-8 py-2.5 text-sm rounded-3xl -mx-10">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
