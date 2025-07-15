"use client";
import React from "react";
import { motion } from "framer-motion";
import { IconDownload } from "@tabler/icons-react";

export function ResumeButton() {
  return (
    <motion.a
      href="/resume.pdf"
      download="Khadija_Mehmood_Resume.pdf"
      whileHover="hover"
      initial="rest"
      animate="rest"
      variants={{
        rest: { scale: 1 },
        hover: { scale: 1.05 },
      }}
      className="group relative inline-flex sm:items-center justify-center gap-2 sm:gap-3 rounded-full bg-[#D0FF71] px-2 py-2 sm:px-6 sm:py-3 text-sm sm:text-base text-black font-medium transition-all duration-300"
    >
      Download Resume
      <motion.div
        className="flex items-center justify-center w-7 h-7  sm:w-9 sm:h-9 rounded-full bg-black text-[#D0FF71] ml-2 sm:ml-3"
        variants={{
          rest: { x: 0 },
          hover: { x: 6 },
        }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <IconDownload size={16} stroke={2} />
      </motion.div>
    </motion.a>
  );
}
