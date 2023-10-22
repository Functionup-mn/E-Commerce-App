import React from "react";
import logo from "../assets/logo.png";
import instagram_icon from "../assets/instagram_icon.png";
import whatsapp_icon from "../assets/whatsapp_icon.png";
import pinterest_icon from "../assets/pintester_icon.png";

const Footer = () => {
  return (
    <div className=" flex flex-col items-center justify-end max-w-full gap-8">
      <div className=" flex justify-center items-center gap-4">
        <img src={logo} alt="" />
        <p className=" text-3xl text-gray-700 font-semibold">SHOPPER</p>
      </div>
      <div className=" w-[30%]">
        <ul className=" flex justify-between items-center cursor-pointer">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className=" flex w-[10%] opacity-80 justify-between items-center cursor-pointer">
        <img src={instagram_icon} alt="instagram-icon" />
        <img src={pinterest_icon} alt="pinterest-icon" />
        <img src={whatsapp_icon} alt="whatsapp-icon" />
      </div>
      <hr className="w-[80%] border-b-1 border-gray-500" />
      <p className="pb-8">Copyright @ 2023 - All Right Reserved</p>
    </div>
  );
};

export default Footer;
