import React from 'react';
function Card() {
    const data = [
        { name: "Amazon", image: "https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dicription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, qui molestiae quia reiciendis voluptas optio." , inStock : true , price : 400},
        { name: "Flipcart", image: "https://images.unsplash.com/photo-1595246135406-803418233494?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dicription:"Lorem ipsum dolor sit amet consectetur adipisicing elit." , inStock :false , price :120},
        { name: "Nike", image: "https://images.unsplash.com/photo-1633174524778-61a18ee54490?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dicription:"Lorem ipsum dolor . Sed, qui molestiae quia reiciendis voluptas optio." , inStock :true  , price :50},
    ]

    return (<>
    <div className='w-full h-screen bg-zinc-500 flex justify-center items-center gap-10'>
        {data.map((prod , index)=>(
            <div className='w-52  rounded-md overflow-hidden'>
            <div className='w-full h-32 bg-zinc-300'>
                <img className='h-full w-full object-fit' src={prod.image} alt="" />
            </div>
            <div className='w-full bg-zinc-200 rounded-b-md px-3 py-2'>
                <h3 className='font-semibold'>{prod.name}</h3>
                <p className='text-xs mt-5'>{prod.dicription}</p>
                {prod.inStock ? (<div className='flex justify-between mt-2'>
                <h4 className='bg-blue-500 px-4 py-1 text-xs text-zinc-100 rounded'>Price</h4>
                <h4 className='text-sm font-semibold text-zinc-800'>${prod.price}</h4>
                </div>) : (<button onClick={()=>{alert("This item is out of stock")}} className='w-full bg-red-500 px-4 py-1 text-xs text-zinc-100 rounded mt-2'>Out Of Stock</button>)}
            </div>

        </div>
        ))}
    </div>
    </> );
}

export default Card;