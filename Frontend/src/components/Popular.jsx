import React from "react";
import data from "../assets/data";
import Item from "./Item";

const Popular = () => {
  return (
    <div className=" w-full my-8 flex flex-col items-center gap-4">
      <div className="flex flex-col items-center font-semibold text-4xl">
        <h1>POPULAR IN WOMEN</h1>
        <hr className="border-b-2 border-black rounded-lg w-[30%] my-3" />
      </div>

      <div className=" flex flex-col md:flex-row mx-[10%] gap-4">
        {data.map((item) => {
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
        })}
      </div>
    </div>
  );
};

export default Popular;
