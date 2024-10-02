import React, { useState } from 'react'
import PRtagline from './PRtagline'
import PrHighlights from './PrHighlights'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Projects() {
  const [translate, setTranslate] = useState(0);
  const [extra, setExtra] = useState(0);
  const handleRightTranslate = ()=>{
    setTranslate(translate => {
      console.log(translate + (3 * extra))
      return translate < 3510 ? translate + 870 + (3 * extra): 0});
      setExtra(extra => {
        return extra < 6? extra + 1 : 0;
      })
  }
  const handleLeftTranslate = ()=>{
    setTranslate(translate => {
      console.log(translate + (3 * extra))
      return translate > 0 ? translate - 870 - (3 * extra): 4395});
      setExtra(extra => {
        return extra > 0? extra - 1 : 6;
      });
  }
  return (
    <div className='w-full min-h-[150vh] bg-black rounded-t-2xl text-white overflow-hidden '>
        <PRtagline />
        <PrHighlights translate={translate}/>
        <div className='flex justify-between mb-16'>
        <div className='px-20 -translate-y-[45%] flex'>
          <span onClick={handleLeftTranslate} className='inline-block w-24 h-24 text-3xl bg-[#0f0f0f] flex items-center justify-center rounded-full border-[1.5px] border-zinc-700'>
          <FaArrowLeft />
          </span>
          <span onClick={handleRightTranslate} className='inline-block w-24 h-24 text-3xl bg-[#0f0f0f] flex items-center justify-center rounded-full border-[1.5px] border-zinc-700'>
          <FaArrowRight />
          </span>
        </div>
        <h2 className='opacity-50 text-6xl pr-20 -translate-y-[50%] hover:opacity-100 transition-all duration-150'>All case studies <span className='inline-block -translate-y-[40%] text-5xl'>+8</span></h2>
        </div>
    </div>
  )
}

export default Projects