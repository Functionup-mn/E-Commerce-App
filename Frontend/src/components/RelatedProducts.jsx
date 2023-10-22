import React from "react";
import data from "../assets/data";
import Item from "./Item";

const RelatedProducts = () => {
  return (
    <div className=" flex flex-col items-center my-14">
      <p className=" text-3xl font-semibold">Related Products</p>
      <hr className=" border-b-2 border-black w-[10%] rounded-lg my-2" />

      <div className=" flex mx-[10%] gap-4 mt-5">
        {data.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
