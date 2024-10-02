import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../Context/Context'
import ProductCard from '../utils/ProductCard';
import SortByPrice from '../models/SortingMode';

const Home = () => {
  const [Products,setProducts] = useContext(ProductContext);
  function BuyProduct(){console.log("Buy")}
  return (
    <div className='p-5 w-auto flex gap-3 flex-wrap justify-around'>
      {Products.length === 0 ?"Loading..." : Products.map((Product , index) => <ProductCard key={index} clickHandler={BuyProduct} product={Product}/>)}
    </div>
  )
}

export default Home