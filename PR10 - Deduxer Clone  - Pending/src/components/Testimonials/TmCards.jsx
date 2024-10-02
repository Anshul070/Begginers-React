import React from 'react'
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import TmCard from './TmCard';
function TmCards() {
    const Reviews = [
        {
            img : "https://cdn.prod.website-files.com/6451597c62e55d5ea41332a5/66b8f83281ce1bdd251b0f62_Shady%20John%20Tawk%20photo-p-500.jpeg",
            name : "Shady",
            work: "CEO at BSA Qatar",
            review: "The Deduxer team are very professional and creative when it comes to design and UI/UX. Plus comes the cherry on top when they communicate and commit to deadline. Highly recommended",
            left : false,
            right : false
        },
        {
            img : "https://cdn.prod.website-files.com/6451597c62e55d5ea41332a5/65fc2995b1bf93744a9bf9b0_64762ed3847c7dd1ad88b920_fvyRxXFO_400x400.webp",
            name : "Devan",
            work: "Founder at Undetectable AI",
            review: "Working with Deduxer was a brilliant experience. Their expertise significantly elevated our website, ensuring it not only looked great but also performed excellently. A real game-changer for our online presence.",
            left : false,
            right : false
        },
        {
            img : "https://cdn.prod.website-files.com/6451597c62e55d5ea41332a5/65fc297bd484174479f4c67a_64762fa384d9d09ca7e57d10_1523254102254.webp",
            name : "Jody",
            work: "Marketing director at Toku",
            review: "Roma and the team were exceptional. Extremely good communication, can turn complex feedback into reality and overall exceptional delivery. Would highly recommend to anyone looking to build out a site on Webflow!!",
            left : false,
            right : false
        },
        {
            img : "https://cdn.prod.website-files.com/6451597c62e55d5ea41332a5/65fc294b6ac05fc9ce133d53_647630b95dbfa9365506235a_63dd2c52dd65ed7362f134d3_Screenshot%202023-02-03%20074602.webp",
            name : "Vincent",
            work: "Co-Founder at Journey",
            review: "Collaborating with Deduxer was truly a delight. They not only surpassed expectations, but also excelled in clear communication around deadlines. Their flexibility throughout the numerous iterations we had was highly commendable and appreciated.",
            left : false,
            right : false
        }
    ]
  return (
    <div className=' min-h-[100vh] p-10'>
        <div className='w-full flex justify-between items-center'>
        <span className='inline-block absolute z-[0] w-24 h-24 border-2 border-zinc-800 rounded-full flex justify-center items-center text-4xl text-zinc-200'>
        <IoIosArrowBack />
        </span >

        <div className='flex overflow-hidden gap-10'>
            {Reviews.map((review,index) => <TmCard review={review} key={index}/>)}
        </div>

        <span className='inline-block absolute right-0 z-[0] w-24 h-24 border-2 border-zinc-800 rounded-full flex justify-center items-center text-4xl text-zinc-200'>
        <IoIosArrowForward />
        </span>
        </div>

        <hr className='w-[95%] mt-14 opacity-60 mx-auto' />
        
    </div>
  )
}

export default TmCards