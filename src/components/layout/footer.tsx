"use client";
import React from "react";
import { IconBrandGithub, IconBrandX, IconMail, IconBrandLinkedin } from "@tabler/icons-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="w-full bg-black text-white py-4 px-6 flex flex-col md:flex-row justify-between items-center gap-3">
      <p className="text-sm text-center md:text-left">
        © All rights reserved by Khadija Mehmood
      </p>
      <div className="flex gap-4">
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <IconBrandLinkedin className="hover:text-blue-500 transition-colors" />
        </a>
        <a href="mailto:your@email.com">
          <IconMail className="hover:text-red-400 transition-colors" />
        </a>
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
          <IconBrandGithub className="hover:text-gray-300 transition-colors" />
        </a>
      </div>
    </footer>
  );
}

 