import React from "react";
import new_collections from "../assets/new_collections";
import Item from "./Item";

const NewCollection = () => {
  return (
    <div className=" w-full flex flex-col mt-8 items-center gap-4">
      <div className=" flex flex-col items-center text-4xl font-semibold">
        <p>NEW COLLECTIONS</p>
        <hr className="border-b-2 border-black w-[30%] rounded-lg my-3" />
      </div>

      <div className=" grid grid-cols-4 gap-4 mx-[10%]">
        {new_collections.map((item) => (
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

export default NewCollection;
