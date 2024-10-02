import React from 'react'
import InsightCards from './InsightCards'

function Insight() {
  return (
    <div className='bg-black text-white rounded-xl min-h-[150vh] px-20 py-40'>
        <h1 className='m-auto w-fit text-center text-7xl '>Your all things - <br />digital business<br /> insights</h1>
        <div className='pt-28'>
            <InsightCards />
        </div>
        <h2 className='mt-28 w-fit text-6xl text-zinc-600 font-semibold relative transform-all duration-150 ease-linear hover:text-zinc-200'>View all articles <span className='ml-4 text-5xl top-[-15%] absolute '>+35</span></h2>
    </div>
  )
}

export default Insight