import React from "react";
import exclusive_image from "../assets/exclusive_image.png";

const Offer = () => {
  return (
    <div className=" w-full">
      <div className="w-[80%] mx-[10%] flex flex-col-reverse md:flex-row justify-around bg-gradient-to-b pt-10 from-pink-100 to-white">
        <div className="flex flex-col gap-2 pt-14 md:pt-32">
          <p className=" text-4xl font-semibold">Esclusive</p>
          <p className=" text-4xl font-semibold">Offers For You</p>
          <p>ONLY ON BEST SELLER PRODUCTS</p>

          <div className=" flex justify-center items-center bg-red-600 text-white py-2 my-4 mx-8 rounded-3xl">
            <button>Check now</button>
          </div>
        </div>

        <div>
          <img
            className="w-[400px] h-[400px] md:h-[500px]"
            src={exclusive_image}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default Offer;
