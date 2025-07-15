"use client";
import React from "react";
import { motion } from "framer-motion";
import { ResumeButton } from "../ui/resume-button";

export function HeroSection() {
  return (
<section className="relative h-[100vh] w-full font-sans bg-black text-white overflow-hidden">

  <div className="absolute inset-0 z-0">
    <div className="w-full h-full bg-black clip-left"></div>
    <div className="absolute inset-0 bg-[#D0FF71] clip-right"></div>
  </div>


  <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 md:px-20 gap-10">
    <motion.h1
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeIn",
      }}
      className="text-left  hidden md:block   md:text-6xl font-bold text-[#D0FF71] "
    >
      Khadija Mehmood <br /> Full Stack Developer
    </motion.h1>
    <motion.h1
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeIn",
      }}
      className="block md:hidden justify-items-center text-left text-3xl font-bold text-[#D0FF71] "
    >
      Khadija <br/> Mehmood <br /> Full Stack <br/> Developer
    </motion.h1>
<div className=" hidden md:block">
    <ResumeButton />
    </div>
  </div>
</section>

  );
}

