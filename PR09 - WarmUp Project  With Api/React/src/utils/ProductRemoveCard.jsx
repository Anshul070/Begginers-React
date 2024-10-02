import React from 'react'

function ProductRemoveCard({product , handleRemove}) {
    console.log(product)
  return (
    <div className='w-60 bg-zinc-200 rounded gap-5 flex flex-col items-center justify-around p-2'>
        <img src={product.image} alt="" className='w-2/4 mix-blend-multiply'/>
        <h1 className='w-full text-center font-bold'>{product.title}</h1>
        <button onClick={()=>{handleRemove(product.id);}} className='bg-red-600 px-5 py-1 text-white rounded'>Remove</button>
    </div>
  )
}

export default ProductRemoveCard;