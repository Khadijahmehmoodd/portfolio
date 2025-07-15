// import React from "react";
// import { ProjectTimeline } from "../ui/project-timeline";
// import { projects } from "@/lib/constants/data";

// export function ProjectSection() {
//   return (
//     <div className="relative min-h-screen w-full overflow-clip text-white">
//       {/* Emerald Void Background */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           background: "radial-gradient(125% 125% at 50% 90%, #000000 40%, #D0FF71 100%)",
//         }}
//       />

//       {/* Timeline content */}
//       <div className="py-16 px-6 md:px-20 flex flex-col md:flex-row justify-between items-start gap-10 relative overflow-hidden">
//         <h2 className="text-2xl md:text-3xl font-semibold tracking-widest text-[#D0FF71]  uppercase mb-6">
//       Projects
//     </h2>
//         <ProjectTimeline projects={projects} />
//       </div>
//     </div>
//   );
// }
"use client";
import React from "react";
import { projects } from "@/lib/constants/data";
import Image from "next/image";

export function ProjectSection() {
  return (
    <section 
    id="projects"
    className="relative w-full py-20 px-4 sm:px-6 md:px-20 bg-black text-white">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-widest text-[#D0FF71] uppercase mb-6">
      Projects
    </h2>
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-3xl bg-neutral-900 shadow-lg transition-transform duration-300 hover:shadow-2xl"
          >
            <div className="relative">
              <Image
                src={project.thumbnail}
                alt={project.title}
                width={1000}
                height={600}
                className="w-full h-[250px] sm:h-[300px] object-cover transition-transform duration-500 group-hover:scale-105 rounded-t-3xl"
              />
              {/* <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 sm:p-6"> */}
                {/* <div className="absolute inset-0 bg-black bg-opacity-60 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 sm:p-6"> */}
              <div className="absolute inset-0 bg-black bg-opacity-60 
                opacity-0 
                group-hover:opacity-100 
                transition-opacity duration-500 
                flex flex-col justify-end 
                p-4 sm:p-6 
                pointer-events-none group-hover:pointer-events-auto"
              >

                <div className="bg-black bg-opacity-70 rounded-xl p-4 sm:p-6 max-w-[90%] mx-auto">
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
                    className="inline-flex items-center bg-[#D0FF71] text-black font-medium px-6 py-2 rounded-full hover:bg-[#ccf869] transition-colors text-sm sm:text-base"
                  >
                    View Project ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
