"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";

const links = [
  { title: "About me", href: "/#about" },
  { title: "Experience", href: "/#experience" },
  { title: "Projects", href: "/#projects" },
  { title: "Blog", href: "/#blog" },
  { title: "Contact", href: "/#contact" },
];

export function Navbar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const handleNavClick = (href: string) => {
    if (typeof window !== "undefined") {
      const targetId = href.split("#")[1];
      if (window.location.pathname !== "/") {
        router.push(href);
      } else {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const offsets = links.map((link) => {
        const id = link.href.split("#")[1];
        const el = document.getElementById(id);
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-4 z-50 px-6 py-3 flex justify-start items-center gap-2 transition-all duration-300 ${
        scrolled ? "backdrop-blur-sm" : ""
      }`}
    >
      {/* Desktop Navbar */}
      <ul className="hidden md:flex gap-2 font-semibold text-white bg-black px-4 py-2 rounded-full">
        {links.map((link) => (
          <li key={link.title}>
            <button
              onClick={() => handleNavClick(link.href)}
              className={`px-4 py-1 rounded-full transition-all duration-300 whitespace-nowrap ${
                activeSection === link.href
                  ? "bg-[#D0FF71] text-black"
                  : "text-white hover:bg-[#D0FF71] hover:text-black"
              }`}
            >
              {link.title.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>

      <div className="md:hidden flex justify-end w-full">
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
          className="absolute top-16 left-4 right-4 mx-auto bg-black border border-[#D0FF71] p-6 rounded-xl flex flex-col gap-3 text-white font-medium w-[90vw] z-40"
        >
          {links.map((link) => (
            <button
              key={link.title}
              onClick={() => {
                handleNavClick(link.href);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 rounded-full transition-all duration-300 ${
                activeSection === link.href
                  ? "bg-[#D0FF71] text-black"
                  : "text-white hover:bg-[#D0FF71] hover:text-black"
              }`}
            >
              {link.title}
            </button>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
