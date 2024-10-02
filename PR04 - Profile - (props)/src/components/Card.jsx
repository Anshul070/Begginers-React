import React from 'react';
function Card({values , handleStateChange , index}) {
    const {name , profile , profession , friends} = values;
    return ( 
        
            <div className='w-52 h-62 bg-zinc-300 rounded-xl overflow-hidden relative'>
                <img className='w-full object-cover' src={profile} alt="" />
                <div className='absolute w-full h-2/6 bg-[#0000007b] bottom-0 text-zinc-200 p-3'>
                    <h3 className='text-lg'>{name}</h3>
                    <h4 className='text-xs'>{profession}</h4>
                    <button onClick={()=>{handleStateChange(index)}} className={`hover:scale-105 duration-200 px-3 py-1 ${friends ? "bg-red-700" : "bg-blue-500"} text-xs rounded mt-2`}>{
                        friends ? "Remove Friends" :"Add Friend"
                        }</button>
                </div>
            </div>
     );
}

export default Card;