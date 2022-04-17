import React from "react";

const Price = props => {
  const { name, price, text } = props.price;
  return (
    <div className="relative w-11/12 h-full mx-auto p-7 shadow-inner shadow-green-900	rounded-2xl text-neutral-300 font-medium	 text-lg bg-green-700">
      <h1 className="text-2xl my-1">{name}</h1>
      <p className="my-1">Per Month : {price} TK.</p>
      <p className="mb-7">{text}</p>
      <button className="p-3 absolute bottom-0 inset-x-0 rounded-3xl w-3/4 mx-auto bg-white text-green-800">
        Get Schedule
      </button>
    </div>
  );
};

export default Price;
