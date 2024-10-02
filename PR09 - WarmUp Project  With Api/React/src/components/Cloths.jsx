import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../Context/Context'
import ProductCard from '../utils/ProductCard';

const Cloths = () => {
  const [Products, setProducts] = useContext(ProductContext);
  const gender = useParams().gender;

  const filteredProducts = Products.filter((Product,index) => Product.category.startsWith(gender));
  console.log(filteredProducts)
  

  return (
  <div className='p-4 w-auto flex flex-wrap gap-3'>
    {filteredProducts.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);
}

export default Cloths