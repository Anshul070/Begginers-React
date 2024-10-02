import React from 'react'

function TmCard({review}) {
  return (
    <div className='w-[48vw] h-[69vh] shrink-0 px-10 py-12 bg-[#0f0f0f] rounded-2xl border-2 border-zinc-800 flex flex-col justify-between'>
        <h1 className='text-zinc-200 text-3xl '>"{review.review}"</h1>
        <div className='flex mb-8 gap-6'>
            <img className='w-16 rounded-full' src={review.img} alt="" />
            <div className='text-xl'>
            <h3 className='mb-2 text-zinc-200'>{review.name}</h3>
            <h3 className='text-zinc-400'>{review.work}</h3>
            </div>
        </div>
    </div>
  )
}

export default TmCard