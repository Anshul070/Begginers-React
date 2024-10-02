import React from 'react'
import Button from './Button'

function Schedule() {
  return (
    <div className='px-20 py-8'>
      <div className='w-full h-[60vh] rounded-xl bg-black overflow-hidden relative'>
        <video className='w-full h-full object-cover ml-48 opacity-50' autoPlay muted loop src="https://cdn.prod.website-files.com/644b71135990d7ae012e6894/647af0e98d2e511ffa669f02_ctav-transcode.webm"></video>
        <div className='absolute top-0 text-white text-7xl p-20'>
          <h1 className='mb-10'>More words - less <br /> code. Say hi!</h1>
          <Button text={"Schedule a call - 2 clicks away"} whiteTheme={true}/>
        </div>
      </div>
    </div>
  )
}

export default Schedule