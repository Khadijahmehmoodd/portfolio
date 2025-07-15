// "use client";
// import React from "react";
// import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

// const tools = [
//   { name: "Docker", src: "https://cdn.simpleicons.org/docker" },
//   { name: "Node.js", src: "https://cdn.simpleicons.org/nodedotjs" },
//   { name: "Next.js", src: "https://cdn.simpleicons.org/nextdotjs" },
//   { name: "React", src: "https://cdn.simpleicons.org/react" },
//   { name: "WordPress", src: "https://cdn.simpleicons.org/wordpress" },
//   { name: "MongoDB", src: "https://cdn.simpleicons.org/mongodb" },
//   { name: "Kubernetes", src: "https://cdn.simpleicons.org/kubernetes" },
//   { name: "Jenkins", src: "https://cdn.simpleicons.org/jenkins" },
//   { name: "Git", src: "https://cdn.simpleicons.org/git" },
//   { name: "DVC", src: "https://cdn.simpleicons.org/dvc" },
//   { name: "MySQL", src: "https://cdn.simpleicons.org/mysql" },
//   { name: "GitHub", src: "https://cdn.simpleicons.org/github" },
//   // { name: "Windows", src: "https://cdn.simpleicons.org/windows" },
//   { name: "Ubuntu", src: "https://cdn.simpleicons.org/ubuntu" },
//   { name: "HTML", src: "https://cdn.simpleicons.org/html5" },
//   // { name: "CSS", src: "https://cdn.simpleicons.org/css3" },
//   { name: "Bash", src: "https://cdn.simpleicons.org/gnubash" },
//   { name: "JavaScript", src: "https://cdn.simpleicons.org/javascript" },
// ];


// const Tools = () => {
//   const words = [
//     {
//       text: "Tools",
//     },
//     {
//       text: "&",
//     },
//     {
//       text: "Technologies",
//     },
    
//   ];
//   const halfway = Math.ceil(tools.length / 2);
//   const firstRow = tools.slice(0, halfway);
//   const secondRow = tools.slice(halfway);

//   return (
//     <div className="bg-gray-900 py-12 px-4 overflow-hidden">
//        <div className="flex flex-col items-center justify-center   ">
//       <TypewriterEffectSmooth words={words} />
    
//     </div>
//       <div className="flex flex-col gap-8 items-center justify-center">
//         {[firstRow, secondRow].map((row, i) => (
//           <div
//             key={i}
//             className="flex flex-wrap justify-center items-center gap-6 sm:gap-10"
//           >
//             {row.map((tool, index) => (
//               <div
//                 key={index}
//                 className="relative group w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center"
//               >
//                 <img
//                   src={tool.src}
//                   alt={tool.name}
//                   className="w-full h-full object-contain grayscale hover:grayscale-0 transition"
//                 />
//                 <div className="absolute bottom-[-2rem] text-white text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none">
//                   {tool.name}
//                 </div>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Tools;
"use client";
import React from "react";

const tools = [
  { name: "Docker", src: "https://cdn.simpleicons.org/docker" },
  { name: "Node.js", src: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "Next.js", src: "https://cdn.simpleicons.org/nextdotjs" },
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
    <section className="w-full bg-black py-16 px-4 md:px-20 text-white">
      <h2 className="text-2xl md:text-4xl font-bold text-[#D0FF71] mb-8 text-center">
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
