import React, { useContext } from "react";
import { ProductContext } from "../Context/Context";
import ProductCard from "../utils/ProductCard";

const Electronics = () => {
  const [Products, setProducts] = useContext(ProductContext);
  const filteredProducts = Products.filter((product) =>
    product.category.startsWith("ele")
  );
  return (
    <div className=" p-4 w-auto flex flex-wrap gap-3">
      {filteredProducts.map((Product, index) => (
        <ProductCard product={Product} key={index} />
      ))}
    </div>
  );
}

export default Electronics