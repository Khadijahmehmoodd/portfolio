"use client";
import React, { useEffect, useState } from "react";
import { projects } from "@/lib/constants/data";
import Image from "next/image";

export function ProjectSection() {
  const [visibleIndexes, setVisibleIndexes] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth >= 640) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleIndexes((prev) => {
          const updated = new Set(prev);
          entries.forEach((entry) => {
            const index = parseInt(entry.target.getAttribute("data-index") || "-1");
            if (entry.isIntersecting && !updated.has(index)) {
              updated.add(index);
            }
          });
          return updated;
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll(".project-card");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      className="relative w-full py-20 px-4 sm:px-6 md:px-20 bg-black text-white"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #262626 1px, transparent 1px),
            linear-gradient(to bottom, #262626 1px, transparent 1px),
            radial-gradient(circle at center, rgba(0,0,0,0.1), transparent 70%)
          `,
          backgroundSize: "20px 20px, 20px 20px, 100% 100%",
          backgroundBlendMode: "overlay",
        }}
      />
      <h2 className="text-2xl md:text-3xl font-semibold tracking-widest text-[#D0FF71] uppercase mb-6">
        Projects
      </h2>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => {
          const isVisible = visibleIndexes.has(index);
          return (
            <div
              key={index}
              data-index={index}
              className="project-card group relative overflow-hidden rounded-3xl bg-neutral-900 shadow-lg transition-transform duration-300 hover:shadow-2xl"
            >
              <div className="relative w-full h-[250px] sm:h-[300px]">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  width={1000}
                  height={600}
                  className={`w-full h-full object-cover rounded-t-3xl transition-opacity duration-500 
                    ${isVisible ? "opacity-20 sm:opacity-100" : "opacity-100"}`}
                />

                <div
                  className={`
                    absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-500 flex flex-col justify-end p-4 sm:p-6
                    pointer-events-none sm:pointer-events-auto group-hover:sm:opacity-100
                    ${isVisible ? "opacity-100 sm:opacity-0" : "opacity-0 sm:opacity-0"}
                  `}
                >
                  <div className="bg-black bg-opacity-70 rounded-xl p-4 sm:p-6 max-w-[90%] mx-auto pointer-events-auto">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 mb-4">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      
                    >
                      <button className="mt-6 px-6 py-2 border border-[#ccf869] rounded-full text-sm font-semibold hover:bg-[#ccf869] hover:text-black transition">
                        View Project ↗
                        </button>
                     
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
