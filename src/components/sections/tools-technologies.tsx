"use client";
import React from "react";

const tools = [
  { name: "Docker", src: "https://cdn.simpleicons.org/docker" },
  { name: "Node.js", src: "https://cdn.simpleicons.org/nodedotjs" },
  // { name: "Next.js", src: "https://cdn.simpleicons.org/nextdotjs" },
  { name: "React", src: "https://cdn.simpleicons.org/react" },
  { name: "WordPress", src: "https://cdn.simpleicons.org/wordpress" },
  { name: "MongoDB", src: "https://cdn.simpleicons.org/mongodb" },
  { name: "Kubernetes", src: "https://cdn.simpleicons.org/kubernetes" },
  { name: "Jenkins", src: "https://cdn.simpleicons.org/jenkins" },
  { name: "Git", src: "https://cdn.simpleicons.org/git" },
  { name: "DVC", src: "https://cdn.simpleicons.org/dvc" },
  { name: "MySQL", src: "https://cdn.simpleicons.org/mysql" },
  { name: "GitHub", src: "https://cdn.simpleicons.org/github" },
  { name: "Ubuntu", src: "https://cdn.simpleicons.org/ubuntu" },
  { name: "HTML", src: "https://cdn.simpleicons.org/html5" },
  { name: "Bash", src: "https://cdn.simpleicons.org/gnubash" },
  { name: "JavaScript", src: "https://cdn.simpleicons.org/javascript" },
];

const Tools = () => {
  return (
    <section className="relative w-full py-20 px-4 sm:px-6 md:px-20 bg-black text-white">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-widest text-[#D0FF71] uppercase mb-6">
      Tools & Technologies
    </h2>

      <div className="overflow-hidden whitespace-nowrap relative">
        <div className="animate-marquee flex gap-10 items-center">
          {[...tools, ...tools].map((tool, index) => (
            <div
              key={index}
              className="relative group w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center shrink-0"
            >
              <img
                src={tool.src}
                alt={tool.name}
                className="w-full h-full object-contain grayscale hover:grayscale-0 transition"
              />
              <span className="absolute bottom-[-1.2rem] text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition pointer-events-none">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
