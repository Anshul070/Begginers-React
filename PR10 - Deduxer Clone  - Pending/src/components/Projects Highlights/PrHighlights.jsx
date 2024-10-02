import React from 'react'
import HighlightCard from './HighlightCard'
import {motion} from 'framer-motion'

function PrHighlights({translate}) {
  var Cards = [
    {src:"https://assets-global.website-files.com/644b71135990d7ae012e6894/660169b8d01dfd243282de3b_siber-2-transcode.mp4",
      title : "siber-facade",
      description : "Development,Design,3D"
    },
    {src:"https://deduxer.b-cdn.net/Deduxer%20Webflow%20Agency.mp4",
      title : "w-e-agency",
      description : "Development,Design,3D"
    },
    {src:"https://deduxer.b-cdn.net/Badbones%201.mp4",
      title : "badbones-films",
      description : "Development,Webflow,Motion"
    },
    {src:"https://deduxer.b-cdn.net/Deduxer%20Unify%20Align%20Transcode.mp4",
      title : "unify-align",
      description : "Development,Design,Graphics"
    },
    {src:"https://deduxer.b-cdn.net/Deduxer%20PSG1%20Transcode.mp4",
      title : "psg",
      description : "Development,Design"
    },
    {src:"https://deduxer.b-cdn.net/Metafor%201%20transcode.mp4",
      title : "metafor",
      description : "Motion Webflow CMS"
    },
  ]
  return (
    <div className='px-20 min-h-[120vh] bg-black'>
        <motion.h1 initial={{color : "black"}} whileInView={{color : "white" }} className=' text-7xl transition-all duration-500 ease-linear'>Portfolio highlights</motion.h1>
        <h4 className='mt-10 text-xl opacity-60 mb-10'>Over 200 successful websites launched. From landing pages to corporate projects, we<br />make you shine online.</h4>
        <motion.div animate={{x : -(translate)}} className={`flex word-nowrap gap-20 transition-all duration-500 ease-linear`}>
        {Cards.map((card,index)=> <HighlightCard CardInfo={card} key={index}/>)}
        </motion.div>
    </div>
  )
}

export default PrHighlights