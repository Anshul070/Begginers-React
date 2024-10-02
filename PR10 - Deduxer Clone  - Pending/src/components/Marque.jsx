import React from 'react'
import { motion } from "framer-motion"

function Marque() {
    const img = [
        "https://cdn.prod.website-files.com/644b71135990d7ae012e6894/65f44669920bf0c09efa14b3_ud.svg",
 "https://cdn.prod.website-files.com/644b71135990d7ae012e6894/65f9e06380d13c3d1ab83183_Fiverr%20logo.svg",
 "https://cdn.prod.website-files.com/644b71135990d7ae012e6894/6524807816f3cb750abb56f2_logo%202.svg",
 "https://cdn.prod.website-files.com/644b71135990d7ae012e6894/6690a35bd0d5c456c24e898b_materia%20logo.svg",
 "https://cdn.prod.website-files.com/644b71135990d7ae012e6894/6524815616f3cb750abc4442_logo%204.svg",
 "https://cdn.prod.website-files.com/644b71135990d7ae012e6894/652480d09ecc649219d2bbd4_62fa56674d11964a5f36ff8b_logo%201.svg",
 "https://cdn.prod.website-files.com/644b71135990d7ae012e6894/6531da2d8b06260fbdc70f01_UA%2BLogo%2BAligned%201%201.svg",
 "https://cdn.prod.website-files.com/644b71135990d7ae012e6894/652481d849dcda75d2bc59db_logo%206.svg",
 "https://cdn.prod.website-files.com/644b71135990d7ae012e6894/652482e80123d2d08985e6ab_logo%207.svg",
 "https://cdn.prod.website-files.com/644b71135990d7ae012e6894/652483035eedec650b962a9d_logo%209.svg",
 "https://cdn.prod.website-files.com/644b71135990d7ae012e6894/6524830f5eedec650b963828_logo%2010.svg",
 "https://cdn.prod.website-files.com/644b71135990d7ae012e6894/65e88cd63951b585b5be5f03_logo%203.svg",
 "https://cdn.prod.website-files.com/644b71135990d7ae012e6894/65e88d3fe921c13e3c53d8b0_bsa%201.svg"
    ]
  return (
    
    <motion.div animate={{x : "-381.9%"}} transition={{duration : 20 , repeat : Infinity , ease: "linear"}} className='flex gap-40 mt-20 whitespace-nowrap -translate-x-[]'>
        {img.map((elm,index) => <img className='h-10' src={elm} key={index}/>)}
        {img.map((elm,index) => <img className='h-10' src={elm} key={index}/>)}
    </motion.div>
  )
}

export default Marque