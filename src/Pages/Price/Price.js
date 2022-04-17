import React from "react";

const Price = props => {
  const { name, price, text, picture } = props.price;
  return (
    <div className="relative w-11/12 h-full mx-auto p-7 shadow-inner shadow-green-900	rounded-2xl text-neutral-300 font-medium	 text-lg bg-green-700">
      <img className="h-48 w-full" src={picture} alt="" />
      <h1 className="text-2xl my-1 p-3 inline-block rounded-br-3xl border-b-4">
        {name}
      </h1>
      <p className="my-1">Per Month : {price} TK.</p>
      <p className="mb-10">{text}</p>
      <button className="p-3 my-2 absolute bottom-0 inset-x-0 rounded-3xl w-3/4 mx-auto bg-white text-green-800 inline-block rounded-br-3xl border-b-4 border-green-800 hover:font-bold hover:text-xl hover:bg-green-100 hover:shadow-inner	shadow-2xl">
        Get Schedule
      </button>
    </div>
  );
};

export default Price;
