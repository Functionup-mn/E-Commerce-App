import React from "react";
import hand_icon from "../assets/hand_icon.png";
import arrow from "../assets/arrow.png";
import hero_image from "../assets/hero_image.png";

const Hero = () => {
  return (
    <div className=" flex flex-col-reverse md:flex-row justify-between w-full h-scree bg-gradient-to-b from-pink-200 to-white">
      <div className=" flex flex-col justify-center  mx-[10%] gap-4">
        <div className=" font-semibold text-xl">NEW ARRIVALS ONLY</div>
        <div className=" flex flex-col font-semibold text-4xl">
          <div className=" flex">
            <p>new</p>
            <img className="w-10 h-10" src={hand_icon} alt="handIcon" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className=" flex justify-center items-center bg-red-600 px-3 py-2 gap-2 rounded-3xl font-semibold">
          <button>Latest Collection</button>
          <img className=" w-3 h-3" src={arrow} alt="arrowIcon" />
        </div>
      </div>

      <div className=" flex justify-center items-center mr-[10%]">
        <img
          className=" w-[430px] h-[550px]"
          src={hero_image}
          alt="heroImage"
        />
      </div>
    </div>
  );
};

export default Hero;
