"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";

const links = [
  { title: "About me", href: "#about" },
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

 
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const offsets = links.map((link) => {
        const el = document.querySelector(link.href);
        return el ? { id: link.href, top: el.getBoundingClientRect().top + window.scrollY } : null;
      });

      const scrollPos = window.scrollY + window.innerHeight / 2;
      for (let i = offsets.length - 1; i >= 0; i--) {
        if (offsets[i] && scrollPos >= offsets[i]!.top) {
          setActiveSection(offsets[i]!.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-screen-xl px-6 py-3 flex justify-between items-center rounded-full transition-all duration-300 ${
        scrolled ? "backdrop-blur-sm" : ""
      }`}
    >
     
      <ul className="hidden md:flex gap-4 font-semibold text-white">
        {links.map((link) => (
          <li key={link.title}>
            <a
              href={link.href}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeSection === link.href
                  ? "bg-[#D0FF71] text-black"
                  : "text-white hover:bg-[#D0FF71] hover:text-black"
              }`}
            >
              {link.title.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>

     
      <div className="md:hidden flex items-center justify-between w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white z-50 focus:outline-none"
        >
          {isOpen ? <IconX size={28} /> : <IconMenu2 size={28} />}
        </button>
      </div>

     
      {isOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="absolute top-16 left-4 w-[80%] bg-black border border-[#D0FF71] p-6 rounded-lg flex flex-col gap-4 text-white font-medium"
        >
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeSection === link.href
                  ? "bg-[#D0FF71] text-black"
                  : "text-white hover:bg-[#D0FF71] hover:text-black"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
