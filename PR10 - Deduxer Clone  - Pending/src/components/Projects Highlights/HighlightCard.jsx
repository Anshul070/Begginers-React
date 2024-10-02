import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";


function HighlightCard({CardInfo}) {
  const [hover, setHover] = useState(false);
  var {src , title , description} = CardInfo;
  return (
    <div className='h-[34vw] rounded-2xl w-[52vw] bg-white shrink-0 border-[1px] border-zinc-600 relative overflow-hidden'>
        <video src={src} autoPlay muted loop></video>
        <div className='absolute w-full h-36 bg-black bottom-0 flex items-center justify-between px-10 bg-[#0f0f0f]' onMouseOver={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}>
            <div>
                <h2 className='text-4xl font-medium uppercase'>{title}</h2>
                <h4 className='text-xl mt-2 opacity-60 font-medium'>{description}</h4>
            </div>
            <div className={`overflow-hidden w-12 h-12 flex items-center justify-end rounded-full border-[2px] border-zinc-800`}>
          <div className={`bg-blue-500 w-full shrink-0 h-full flex items-center justify-center text-white rounded-full  transition-all duration-[1s] ${hover ? 'translate-x-[100%]' : '-translate-x-[0%]' }`}>
            <IoIosArrowForward / >
            </div>
          <div className={` w-full shrink-0 h-full flex items-center justify-center rounded-full`}>
            <IoIosArrowForward / >
            </div>
          </div>
        </div>
    </div>
  )
}

export default HighlightCard