import React from "react";
import { motion } from "framer-motion";

function PRtagline() {
  return (
    <div className="text-white min-h-[130vh] relative">
      <video
        autoPlay
        loop
        muted
        className="w-full cover opacity-50"
        src="https://cdn.prod.website-files.com/644b71135990d7ae012e6894/6458c7e12608d1e606b90b2d_test%20final%20vibe-transcode.mp4"></video>
      <div className="absolute top-28 left-20">
        <h4 className="text-7xl  leading-tight">
          <span className="mr-20 text-2xl">Over 200+ projects closed</span>
          {"Webflow".split("").map((chr, index) => (
            <motion.span
              key={index}
              initial={{ x: -(20 * index) , color: "black"}}
              whileInView={{ x: 0, opacity: 1 ,color: "white"}}
              className="inline-block ml-[1px] overflow-hidden transform-all duration-200 ease-linear">
              {chr}
            </motion.span>
          ))}{" "}
          {"agency".split("").map((chr, index) => (
            <motion.span
              key={index}
              initial={{ x: -(20 * index) , color: "black"}}
              whileInView={{ x: 0, opacity: 1 ,color: "white"}}
              className="inline-block ml-[1px] overflow-hidden transform-all duration-200 ease-linear">
              {chr}
            </motion.span>
          ))}{" "}
          <br />
          {"designing".split("").map((chr, index) => (
            <motion.span
              key={index}
              initial={{ x: -(20 * index) }}
              whileInView={{ x: 0, opacity: 1 }}
              className="inline-block ml-[1px] overflow-hidden transform-all duration-150 ease-linear">
              {chr}
            </motion.span>
          ))}
          <span className="relative inline-block w-32 h-16 ml-6 inline-block">
            <motion.span
              initial={{ left: 8 }}
              whileInView={{ left: 0 }}
              className="w-14 rounded-full h-14 inline-block absolute top-[70%] -translate-y-[50%] border-2 border-zinc-400"
            />
            <motion.span
              initial={{ left: 8 }}
              whileInView={{ left: 15 }}
              className="w-14 rounded-full h-14 absolute top-[70%] -translate-y-[50%]   inline-block border-2 border-zinc-400"
            />
            <motion.span
              initial={{ left: 8 }}
              whileInView={{ left: 30 }}
              className="w-14 rounded-full h-14 absolute top-[70%] -translate-y-[50%]   inline-block border-2 border-zinc-400"
            />
            <motion.span
              initial={{ left: 8 }}
              whileInView={{ left: 45 }}
              className="w-14 rounded-full h-14 absolute top-[70%] -translate-y-[50%]   inline-block border-2 border-zinc-400"
            />
            <motion.span
              initial={{ left: 8 }}
              whileInView={{ left: 60 }}
              className="w-14 rounded-full h-14 absolute top-[70%] -translate-y-[50%]   inline-block border-2 border-zinc-400"
            />
          </span>
          {"immersive".split("").map((chr, index) => (
            <motion.span
              key={index}
              initial={{ x: -(20 * index) }}
              whileInView={{ x: 0 , opacity : 1 }}
              className="inline-block ml-[1px] overflow-hidden transform-all duration-150 ease-linear">
              {chr}
            </motion.span>
          ))}{" "}
          {"websites".split("").map((chr, index) => (
            <motion.span
              key={index}
              initial={{ x: -(20 * index) }}
              whileInView={{ x: 0 , opacity : 1 }}
              className="inline-block ml-[1px] overflow-hidden transform-all duration-150 ease-linear">
              {chr}
            </motion.span>
          ))}{" "}
          <br />{" "}
          {"from".split("").map((chr, index) => (
            <motion.span
              key={index}
              initial={{ x: -(20 * index)}}
              whileInView={{ x: 0, opacity: 1 }}
              className="inline-block ml-[1px] overflow-hidden transform-all duration-150 ease-linear">
              {chr}
            </motion.span>
          ))}{" "}
          {"concept".split("").map((chr, index) => (
            <motion.span
              key={index}
              initial={{ x: -(20 * index)}}
              whileInView={{ x: 0, opacity: 1 }}
              className="inline-block ml-[1px] overflow-hidden transform-all duration-150 ease-linear">
              {chr}
            </motion.span>
          ))}{" "}
          {"to".split("").map((chr, index) => (
            <motion.span
              key={index}
              initial={{ x: -(20 * index)}}
              whileInView={{ x: 0, opacity: 1 }}
              className="inline-block ml-[1px] overflow-hidden transform-all duration-150 ease-linear">
              {chr}
            </motion.span>
          ))}{" "}
          {"reality".split("").map((chr, index) => (
            <motion.span
              key={index}
              initial={{ x: -(20 * index)}}
              whileInView={{ x: 0, opacity: 1 }}
              className="inline-block ml-[1px] overflow-hidden transform-all duration-150 ease-linear">
              {chr}
            </motion.span>
          ))}{" "}
          <span className="text-zinc-500">(*with 3D)</span>
        </h4>
        <h4 className="mt-60 text-2xl">
          Our mission:{" "}
          <span className="opacity-60">
            Turning visionary ideas into <br />
            digital reality, one pixel at a time
          </span>
        </h4>
      </div>
    </div>
  );
}

export default PRtagline;
