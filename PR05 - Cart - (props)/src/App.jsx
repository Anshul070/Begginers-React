import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Products";
import { data } from "autoprefixer";
function App() {
  const data = [
    {
      name: "Premiun white watch",
      description: "round white watch with white band",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      inCart: false,
    },
    {
      name: "Wireless headphones",
      description: "black Level wireless headphones on yellow surface",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      inCart: false,
    },
    {
      name: "Polaroid camera",
      description:
        "white and black Polaroid One Step 2 instant camera on white board",
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      inCart: false,
    },
    {
      name: "Premiun sandals",
      description: "pair of blue-and-pink floral almond-toe pumps",
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      inCart: false,
    },
    {
      name: "Premiun perfume",
      description: "A bottle of high quality perfume",
      image:
        "https://plus.unsplash.com/premium_photo-1675812488919-21fc8fae565b?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      inCart: false,
    },
  ];
  const [State, setState] = useState(data);
  
  function addToCart(prodIndex) {
    setState((prev) =>
      prev.map((prodData, index) =>
        prodIndex === index
          ? { ...prodData, inCart: !prodData.inCart }
          : { ...prodData }
      )
    );
  }

  return (
    <div className="w-full h-screen bg-zinc-300">
      <Navbar data={State}/>
      <div className="w-full h-2/3 flex justify-center items-center gap-5 felx-wrap">
        {State.map((prod, index) => (
          <Product
            key={index}
            values={prod}
            handleCart={addToCart}
            prodIndex={index}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
