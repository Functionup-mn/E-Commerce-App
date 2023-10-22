import React, { useContext } from "react";
import remove_icon from "../assets/cart_cross_icon.png";
import { ShopContext } from "../context/ShopContext";

const CartItems = () => {
  const { removeFromCart, allProducts, cartItem, getTotalCartAmount } =
    useContext(ShopContext);
  return (
    <div className="max-w-[80%] m-24 mx-[10%]">
      <div className=" grid grid-cols-7">
        <p>Product</p>
        <p className="col-span-2">Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className=" border-b-[1px] border-gray-200 mt-2" />
      {allProducts.map((item) => {
        if (cartItem[item.id] > 0) {
          return (
            <div key={item.id}>
              <div className=" grid grid-cols-7 items-center p-2">
                <img className=" w-12 h-12" src={item.image} alt="" />
                <p className=" col-span-2 text-xs max-w-[80%]">{item.name}</p>
                <p className=" flex justify-start">{item.new_price}</p>
                <p>{cartItem[item.id]}</p>
                <p className="ml-2">{item.new_price * cartItem[item.id]}</p>
                <img
                  className="ml-2 cursor-pointer"
                  onClick={() => removeFromCart(item.id)}
                  src={remove_icon}
                  alt=""
                />
              </div>
              <hr className=" border-b-[1px] border-gray-200 mt-2" />
            </div>
          );
        }
        return null;
      })}

      <div className=" flex justify-between mt-14">
        <div className="w-[50%] text-xs font-semibold text-gray-500 flex flex-col gap-2">
          <p className=" text-xl font-bold mb-10 text-black">Cart Totals</p>
          <div className=" flex items-center justify-between">
            <p>Subtoatal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr className=" border-b-[1px] border-gray-200 mt-2" />
          <div className=" flex justify-between">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr className=" border-b-[1px] border-gray-200 mt-2" />
          <div className=" flex justify-between text-black font-semibold text-base">
            <p>Total</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <div className="max-w-[40%] px-2 py-3 rounded-lg mt-8 text-base font-medium flex items-center justify-center bg-red-600 text-white">
            <button className=" uppercase">proceed to checkout</button>
          </div>
        </div>

        <div className=" flex flex-col gap-3 mt-10 w-[35%]">
          <p className=" text-sm text-gray-500">
            If you have a promo code, Enter it here
          </p>
          <div className=" border-[1px] h-10 flex items-center justify-between">
            <input
              className=" pl-4 outline-none"
              type="text"
              placeholder="promo code"
            />
            <button className=" bg-black text-white px-4 py-2">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
