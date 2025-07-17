"use client";
import React from "react";
import { motion } from "framer-motion";
import { IconDownload } from "@tabler/icons-react";
import Link from "next/link";

export function ResumeButton() {
  return (
 <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
      <button className="mt-4 px-6 py-3 bg-transparent border-2 border-[#ccf869] text-white font-semibold rounded-full hover:bg-[#ccf869] hover:text-black transition flex items-center gap-2 cursor-pointer">
        Download Resume
        <IconDownload size={16} stroke={2} />
      </button>
    </Link>
  );
}
