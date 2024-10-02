import { React, useState } from "react";
import { FaArrowRightLong , FaArrowLeftLong } from "react-icons/fa6";
function Slideshow() {

  const [sliderIndex, setsliderIndex] = useState(0);
  const [slideArr, setslideArr] = useState([
    "https://4kwallpapers.com/images/walls/thumbs_3t/16500.jpg",
    "https://4kwallpapers.com/images/walls/thumbs_3t/17972.jpg",
    "https://4kwallpapers.com/images/walls/thumbs_3t/16213.jpg",
    "https://img.freepik.com/free-photo/anime-style-clouds_23-2151071771.jpg?t=st=1723983379~exp=1723986979~hmac=cdc58fc671aa56df4de0d1246d42bc0b202545d8ed97c8aca71ae16449666836&w=1380",
    "https://img.freepik.com/free-photo/anime-moon-landscape_23-2151645924.jpg?t=st=1723982202~exp=1723985802~hmac=bb43df31a3660856e14e0796d82f2d76b27e52b5b98ad5409d655b10a2d9a973&w=1380"
  ]);

  
  return (
    <div className="w-full h-screen bg-[#06023f] flex justify-center items-center">
      <div className="w-1/2 h-1/2 bg-zinc-300 rounded-xl flex overflow-hidden">
      <div className={`transform-all ease-in-out duration-500 flex -translate-x-[${sliderIndex}%]`}>
        {slideArr.map((image)=>(
            <img
            className=" w-full h-full object-cover shrink-0"
            src={image}
            alt=""
          />
        ))}
      
        
      </div>
      <span className="absolute bottom-[10%] left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-5">
        <span
          onClick={() => {
            setsliderIndex((val)=> val > 0 ? val - 100 : (slideArr.length - 1)*100);
          }}
          className=" bg-[#dadada8b] w-20 h-10 rounded-full flex justify-center items-center">
          <FaArrowLeftLong />
        </span>
        <span
          onClick={() => {
            setsliderIndex((val)=> val < (slideArr.length - 1)*100 ? val + 100 : 0);
          }}
          className=" bg-[#dadada8b] w-20 h-10 rounded-full flex justify-center items-center">
          <FaArrowRightLong />
        </span>
        </span>
      </div>
    </div>
  );
}

export default Slideshow;

// const [slider, setslider] = useState(true);




// <span className="absolute bottom-[30%] left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-5">
//         <span
//           onClick={() => {
//             setslider(!slider);
//           }}
//           className=" bg-[#dadada8b] w-10 h-10 rounded-full flex justify-center items-center">
//           <FaArrowLeftLong />
//         </span>
//         <span
//           onClick={() => {
//             setslider(!slider);
//           }}
//           className=" bg-[#dadada8b] w-10 h-10 rounded-full flex justify-center items-center">
//           <FaArrowRightLong />
//         </span>
//         </span>