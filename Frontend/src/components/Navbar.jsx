import React, { useContext } from "react";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <div className=" flex justify-around items-center h-20 w-full bg-white shadow-lg z-50 fixed top-0 left-0">
      <div className=" flex justify-center items-center gap-2">
        <img src={logo} alt="logo" />
        <p className=" font-semibold text-3xl">SHOPPER</p>
      </div>

      <ul className=" flex items-center gap-12 font-semibold cursor-pointer">
        <li className=" hover:border-b-2 hover:border-red-600 active:text-red-700">
          <Link to="/">Shop</Link>
        </li>
        <li className=" hover:border-b-2 hover:border-red-600 active:text-red-600 focus:text-red-600">
          <Link to="/mens">Men</Link>
        </li>
        <li className=" hover:border-b-2 hover:border-red-600 active:border-red-700 focus:border-red-600">
          <Link to="/womens">Women</Link>
        </li>
        <li className=" hover:border-b-2 hover:border-red-600 active:text-red-700">
          <Link to="/kids">Kids</Link>
        </li>
      </ul>

      <div className="flex items-center gap-10">
        <Link to="/signup">
          <button className="px-4 py-2 rounded-md text-white bg-black hover:bg-blue-600 active:bg-green-950">
            Sign Up
          </button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="cartIcon" />
        </Link>
        <div className=" w-5 h-5 flex justify-center items-center mt-[-40px] ml-[-50px] text-white text-sm bg-red-700 rounded-xl">
          {getTotalCartItems()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
