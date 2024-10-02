import React from 'react'
import Button from '../Button'
import StrCards from './StrCards'

function StrAproch() {
  return (
    <div className='w-full h-[94vh] py-28 bg-zinc-200 flex overflow-hidden'>
        <div className='w-[55%] pl-20'>
            <h2 className='text-7xl font-medium opacity-90'>Strategic approach with <span className='opacity-60 leading-snug'>(*studio like)</span> creativity</h2>
            <h4 className='text-[1.4vw] mt-10 opacity-70 mb-8'>
            Whether you’re testing ideas or need a quick turnaround, our plans let you scale and adapt effortlessly</h4>
            <Button text={"Client testimonials"}/>
        </div>
        <div className='w-[45%]'>
            <StrCards />
        </div>
    </div>
  )
}

export default StrAproch