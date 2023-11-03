import React, { useContext } from "react";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { ShopContext } from "../context/ShopContext";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  return (
    <div className=" max-w-[80%] mt-10 mx-[10%] flex flex-col md:flex-row gap-10">
      <div className=" flex gap-[17px] ">
        <div className="flex flex-col gap-[16px]">
          <img className=" h-28" src={product.image} alt="" />
          <img className=" h-28" src={product.image} alt="" />
          <img className=" h-28" src={product.image} alt="" />
          <img className=" h-28" src={product.image} alt="" />
        </div>
        <div>
          <img className=" w-[480px] h-[500px]" src={product.image} alt="" />
        </div>
      </div>

      <div className=" flex flex-col gap-5 w-[40%]">
        <div className=" font-semibold text-2xl">{product.name}</div>
        <div className=" flex items-center">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <div className=" mx-2">(122)</div>
        </div>
        <div className=" flex items-center gap-4">
          <p className=" text-gray-500 line-through">${product.old_price}</p>
          <p className=" text-red-600">${product.new_price}</p>
        </div>
        <div className=" text-sm">
          A lightweight, usually knitted, pullover shirt, close fitting and with
          a round neckline and short sleeves, warn as an undershirt or outer
          garment.
        </div>
        Select Size
        <div className=" flex items-center cursor-pointer text-sm gap-4">
          <div className="flex justify-center w-10 h-10 border-[1px] bg-gray-100 rounded-md p-2">
            S
          </div>
          <div className="flex justify-center w-10 h-10 border-[1px] bg-gray-100 rounded-md p-2">
            M
          </div>
          <div className="flex justify-center w-10 h-10 border-[1px] bg-gray-100 rounded-md p-2">
            L
          </div>
          <div className="flex justify-center w-10 h-10 border-[1px] bg-gray-100 rounded-md p-2">
            XL
          </div>
          <div className="flex justify-center w-10 h-10 border-[1px] bg-gray-100 rounded-md p-2">
            XXL
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
          className=" w-32 px-4 py-2 flex items-center bg-red-600 text-white rounded-md"
        >
          Add to Cart
        </button>
        <div className=" text-sm">
          <p>
            {" "}
            <span className=" font-semibold">category</span>: {product.category}
            , T-Shirt, Crop Top{" "}
          </p>
          <p>
            {" "}
            <span className=" font-semibold">Tags</span>: Modern, Latest
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
