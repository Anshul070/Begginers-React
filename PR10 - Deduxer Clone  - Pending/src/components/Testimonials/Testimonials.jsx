import React from 'react'
import TmHeading from './TmHeading'
import TmCards from './TmCards'

function Testimonials() {
  return (
    <div className='w-full min-h-[150vh] bg-black rounded-2xl text-white flex flex-col gap-20'>
      <TmHeading />
      <TmCards />
    </div>
  )
}

export default Testimonials