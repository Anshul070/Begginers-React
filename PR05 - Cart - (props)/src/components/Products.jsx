import React, { useState } from "react";
function Product({ values, handleCart, prodIndex }) {
  const { name, description, image, inCart } = values;
  return (
    <div className="p-2 bg-zinc-500 w-52 rounded-md flex-col ">
      <img className="rounded-md h-32 w-full object-cover" src={image} alt="" />
      <h4 className="text-zinc-100 font-semibold">{name}</h4>
      <h6 className="text-zinc-300 text-xs mb-2">{description}</h6>
      <button
        onClick={() => {
          handleCart(prodIndex);
        }}
        className={`w-full transistion-all duration-200 ${
          inCart ? "bg-green-500 hover:bg-green-700" : "bg-orange-500 hover:bg-orange-700"
        } px-3 py-1 rounded-md text-zinc-100`}>
        {inCart ? "Added!" : "Add to cart"}
      </button>
    </div>
  );
}

export default Product;
