import React, { useContext } from 'react'
import { ProductContext } from '../Context/Context'
import ProductRemoveCard from '../utils/ProductRemoveCard';
import axios from '../models/Axios';

function Remove() {
  const [Products , setProducts] = useContext(ProductContext);

  const handleRemove = (productId)=>{
    const newProducts = Products.filter(p => p.id !== productId);
    setProducts(newProducts);
    axios.delete(`/delete/${productId}`).then(()=>{
      console.log('Product removed successfully');
    })
  }

  return (
    <div className='p-7 w-auto flex gap-6 flex-wrap justify-start'>
      {Products.map((product , index) => <ProductRemoveCard key={index} product={product} handleRemove={handleRemove}/>)}
    </div>
  )
}

export default Remove