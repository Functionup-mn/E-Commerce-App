import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from "../assets/dropdown_icon.png";
import Item from "../components/Item";

const ShopCategory = (props) => {
  const { allProducts } = useContext(ShopContext);
  return (
    <div className=" max-w-full flex flex-col items-center my-10 gap-4">
      <img className=" w-[80%]" src={props.banner} alt="" />

      <div className=" w-[80%] flex justify-between items-center my-3 text-sm">
        <p>
          {" "}
          <span className=" font-semibold">Showing 1-12</span> out of 36
          products.
        </p>
        <div className=" flex justify-center items-center gap-2 border-[1px] rounded-3xl px-4 py-2">
          <p>Sort by</p>
          <img
            className=" cursor-pointer"
            src={dropdown_icon}
            alt="drop-down icon"
          />
        </div>
      </div>

      <div className=" w-[80%] grid grid-cols-4 gap-4">
        {allProducts.map((item) => {
          if (props.category === item.category) {
            return (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
