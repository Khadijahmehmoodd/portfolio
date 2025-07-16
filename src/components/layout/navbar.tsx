"use client";
import { useRouter, usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";

const links = [
  { title: "About me", href: "/#about" },
  { title: "Experience", href: "/#experience" },
  { title: "Projects", href: "/#projects" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/#contact" },
];

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const isBlogPage =
    pathname === "/blog" || /^\/blog\/[^\/]+$/.test(pathname);

  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const handleNavClick = (href: string) => {
    const isHashLink = href.includes("#");
    const [path, hash] = href.split("#");

    if (!isHashLink) {
      router.push(href);
      return;
    }

    if (pathname !== "/") {
      localStorage.setItem("scrollToSection", hash);
      router.push("/");
    } else {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const scrollPos = window.scrollY + window.innerHeight / 2;

      const offsets = links.map((link) => {
        const id = link.href.split("#")[1];
        const el = document.getElementById(id);
        return el ? { id: link.href, top: el.offsetTop } : null;
      });

      for (let i = offsets.length - 1; i >= 0; i--) {
        if (offsets[i] && scrollPos >= offsets[i]!.top) {
          setActiveSection(offsets[i]!.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <nav
  className={`fixed top-4 z-50 px-6 py-3 flex items-center gap-2 transition-all duration-300
    ${scrolled ? "backdrop-blur-md bg-black/20" : ""}
    ${
      isBlogPage
        ? "left-4 md:left-1/2 md:-translate-x-1/2 md:justify-center"
        : "left-4 justify-start"
    }
  `}
>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-2 font-semibold text-white bg-black px-4 py-2 rounded-full">
        {links.map((link) => (
          <li key={link.title}>
            <button
              onClick={() => handleNavClick(link.href)}
              className={`cursor-pointer px-4 py-1 rounded-full transition-all duration-300 whitespace-nowrap ${
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

      {/* Mobile Nav Toggle */}
      <div className="md:hidden flex justify-end w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white z-50 focus:outline-none"
        >
          {isOpen ? <IconX size={28} /> : <IconMenu2 size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
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
              className={`cursor-pointer w-full text-left px-4 py-2 rounded-full transition-all duration-300 ${
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
