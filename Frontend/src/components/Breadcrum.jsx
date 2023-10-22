import React from "react";
import arrow_icon from "../assets/breadcrum_arrow.png";

const Breadcrum = ({ product }) => {
  return (
    <div className=" flex items-center w-full gap-2 mx-[10%] mt-10">
      HOME <img className=" h-3" src={arrow_icon} alt="" /> SHOP{" "}
      <img className=" h-3" src={arrow_icon} alt="" /> {product.category}{" "}
      <img className=" h-3" src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrum;
