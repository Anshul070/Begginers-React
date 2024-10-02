import React, { useContext } from "react";
import { ProductContext } from "../Context/Context";
import ProductCard from "../utils/ProductCard";

const Jewelery = () => {
  const [Products, setProducts] = useContext(ProductContext);
  const filteredProducts = Products.filter((product) => product.category.startsWith("jewelery")
  );
  return (
    <div className=" flex felx-wrap p-4 gap-4">
      {filteredProducts.map((Product, index) => (
        <ProductCard product={Product} key={index} />
      ))}
    </div>
  );
};

export default Jewelery;
