import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const links = [
    {
      id: 1,
      link: 'Shop',
      src: '/'
    },
    {
      id: 2,
      link: 'Men',
      src: '/mens'
    },
    {
      id: 3,
      link: 'Women',
      src: '/womens'
    },
    {
      id: 4,
      link: 'Kids',
      src: '/kids'
    },
  ]
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <div className=" flex justify-between md:justify-around items-center h-24 md:h-20 w-full bg-white shadow-lg z-50 fixed top-0 left-0">
      <div className=" flex flex-col md:flex-row justify-center items-center md:gap-2">
        <img src={logo} alt="logo" />
        <p className=" font-semibold text-lg pl-1 md:pl-0 md:text-3xl">YOUR SHOPPER</p>
      </div>

      <ul className=" hidden md:flex gap-3">
        {
          links.map(({ id, link, src }) => (
            <li key={id} className=" px-3 cursor-pointer font-medium capitalize text-red-600 hover:scale-110 duration-200">
              <Link to={src}>{link}</Link>
            </li>
          ))
        }
      </ul>

      <div onClick={() => setNav(!nav)} className=" cursor-pointer text-red-600 z-10 md:hidden">
        {nav ? <FaTimes size={20}/> : <FaBars size={20} />}
      </div>

      {
        nav && (
          <ul className=" flex flex-col items-center justify-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-600 text-gray-100 '">
            {
              links.map(({ id, link, src }) => (
                <li key={id} className=" cursor-pointer capitalize p-5 text-3xl">
                  <Link onClick={() => setNav(!nav)} to={src} smooth duration={500}>{link}</Link>
                </li>
              ))
            }
          </ul>
        )
      }

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
