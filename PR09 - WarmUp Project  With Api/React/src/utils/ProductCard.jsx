import React from 'react'

function ProductCard({product , clickHandler , editButton}) {
  return (
    <div className='bg-zinc-200 h-[35vw] w-80 gap-2 rounded flex flex-col items-center p-5 justify-around'>
        <img className=' h-3/5 object-scale-down mix-blend-multiply' src={product.image} alt="" />
        <h2 className='font-bold'>{product.title.length > 32  ? product.title.slice(0,32) : product.title}</h2>
        <h2 className='text-xs self-start font-semibold'>{product.category}</h2>
        <h4 className='text-xs text-justify opacity-80'>{product.title.length > 15  ? product.description.slice(0,100) : product.description} . . . . .  </h4>
        <h5 className='text-sm inline-block w-full flex justify-between items-center'>Rating : {product.rating.rate} <span className='text-xs opacity-60'>Reviews : {product.rating.count}</span></h5>
        <div className='flex justify-between w-full items-center'>
            <h2 className='px-2 py-1 font-bold text-red-800 '><span className='text-black text-sm'>Price : </span>${product.price}</h2>
        <button onClick={()=>clickHandler(product)} className={`${editButton ? "bg-green-600 px-10" : "bg-blue-300 px-3"} py-1 rounded`}>{editButton ? "Edit" : "Buy Now"}</button>
        </div>
    </div>
  )
}

export default ProductCard