import React,{useState} from 'react';
function Navbar({data}) {

    return ( <>
    <div className='h-24 px-40 bg-zinc-500 flex justify-between items-center'>
        <h2 className='text-zinc-300 font-semibold text-xl'>Navbar</h2>
        <h3 className='bg-orange-500 text-zinc-100 p-2 rounded-xl'>Items in cart : {data.filter((prod)=> prod.inCart).length}</h3>
    </div>
    </> );
}

export default Navbar;