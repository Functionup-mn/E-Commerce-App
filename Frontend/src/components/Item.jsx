import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className=" hover:scale-105 transition duration-300">
      <Link to={`/product/${props.id}`}>
        {" "}
        <img
          onClick={window.scrollTo(0, 0)}
          src={props.image}
          alt="image"
        />{" "}
      </Link>
      <p className="mt-3 text-sm ">{props.name}</p>
      <div className=" flex gap-4 mt-2">
        <p className=" font-semibold">${props.new_price}</p>
        <p className=" text-gray-500 text line-through">${props.old_price}</p>
      </div>
    </div>
  );
};

export default Item;
