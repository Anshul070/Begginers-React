import React from "react";
import Button from "./Button";
import Marque from "./Marque";
import { motion } from "framer-motion";

function Landing() {
  return (
    <>
      <div className="w-full h-[89vh] fixed bottom-[-0.5%] z-[0] pointer-events-auto">
      <video src="https://cdn.prod.website-files.com/644b71135990d7ae012e6894/65ca623759dd4ca6bfb286c1_unicorn%20animation%202560x1440-transcode.mp4" autoPlay muted loop className="w-full object-cover h-full"></video>
      <motion.div   onViewportLeave={{opacity : 0}} className="absolute top-0 w-2/3 h-full py-10 px-16">
        <h1 className="text-8xl tracking-tight">Empowering the <br/>unicorns of tomorrow</h1>
        <h4 className="text-[1.7vw] mt-10 mb-10">
        A subscription agency focused on revamping SaaS and agency websites<br/>with a industry-leading Webflow solutions
        </h4>
      <Button text={"View our portfolio"}/>
      <Marque />
      </motion.div>
    </div>
    <div className=" h-[100vh] w-[0px]  z-[-10]"></div>
    </>
  );
}

export default Landing;
