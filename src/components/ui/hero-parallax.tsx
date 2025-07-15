"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";



export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
 const repeatedProducts = Array(4)
  .fill(products)
  .flat()
  .slice(0, 20); 

const firstRow = repeatedProducts.slice(0, 5);
const secondRow = repeatedProducts.slice(5, 10);
const thirdRow = repeatedProducts.slice(10, 15);
// const fourthRow = repeatedProducts.slice(15, 20);

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[200vh] sm:h-[00vh]py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-30 space-x-10 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 mb-10 md:mb-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        {/* <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {fourthRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div> */}
        {/* <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {fifthRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div> */}
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className=" text-center max-w-7xl relative p-6 py-40 px:20 w-full  left-0 top-0">
      <h1 className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl w-full px-4 md:px-16 lg:px-32 py-16">
      Projects <br /> 
      </h1>
      {/* <p className=" text-center max-w-2xl  md:text-xl mt-8 dark:text-neutral-200">
       I design and build modern, scalable web apps using Next.js, TailwindCSS, and Supabase. 
        Passionate about frontend motion, backend integration, and building user-first digital experiences.
      </p> */}
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product md:h-100 h-50 md:w-[60rem]  w-[20rem]  relative shrink-0"
    >
      <a
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-center absolute h-full w-full inset-0"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-gray-900 pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
// "use client";
// import React from "react";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   useSpring,
//   MotionValue,
// } from "motion/react";

// export const HeroParallax = ({
//   products,
// }: {
//   products: {
//     title: string;
//     link: string;
//     thumbnail: string;
//   }[];
// }) => {
//   const repeatedProducts = Array(4).fill(products).flat().slice(0, 20);

//   const firstRow = repeatedProducts.slice(0, 5);
//   const secondRow = repeatedProducts.slice(5, 10);
//   const thirdRow = repeatedProducts.slice(10, 15);

//   const ref = React.useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

//   const translateX = useSpring(
//     useTransform(scrollYProgress, [0, 1], [0, 1000]),
//     springConfig
//   );
//   const translateXReverse = useSpring(
//     useTransform(scrollYProgress, [0, 1], [0, -1000]),
//     springConfig
//   );
//   const rotateX = useSpring(
//     useTransform(scrollYProgress, [0, 0.2], [15, 0]),
//     springConfig
//   );
//   const opacity = useSpring(
//     useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
//     springConfig
//   );
//   const rotateZ = useSpring(
//     useTransform(scrollYProgress, [0, 0.2], [20, 0]),
//     springConfig
//   );
//   const translateY = useSpring(
//     useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
//     springConfig
//   );

//   return (
//     <div
//       ref={ref}
//       className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
//     >
//       <Header />
//       <motion.div
//         style={{ rotateX, rotateZ, translateY, opacity }}
//         className="space-y-20"
//       >
//         <motion.div className="flex flex-wrap justify-center gap-6">
//           {firstRow.map((product) => (
//             <ProductCard
//               product={product}
//               translate={translateX}
//               key={product.title}
//             />
//           ))}
//         </motion.div>
//         <motion.div className="flex flex-wrap justify-center gap-6">
//           {secondRow.map((product) => (
//             <ProductCard
//               product={product}
//               translate={translateXReverse}
//               key={product.title}
//             />
//           ))}
//         </motion.div>
//         <motion.div className="flex flex-wrap justify-center gap-6">
//           {thirdRow.map((product) => (
//             <ProductCard
//               product={product}
//               translate={translateX}
//               key={product.title}
//             />
//           ))}
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export const Header = () => {
//   return (
//     <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
//       <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
//         Projects <br />
//       </h1>
//       <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
//         I design and build modern, scalable web apps using Next.js, TailwindCSS, and Supabase. Passionate about frontend motion, backend integration, and building user-first digital experiences.
//       </p>
//     </div>
//   );
// };

// export const ProductCard = ({
//   product,
//   translate,
// }: {
//   product: {
//     title: string;
//     link: string;
//     thumbnail: string;
//   };
//   translate: MotionValue<number>;
// }) => {
//   return (
//     <motion.div
//       style={{ x: translate }}
//       whileHover={{ y: -20 }}
//       key={product.title}
//       className="group/product relative h-64 w-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 shrink-0"
//     >
//       <a href={product.link} className="block group-hover/product:shadow-2xl h-full w-full">
//         <img
//           src={product.thumbnail}
//           height="600"
//           width="600"
//           className="object-cover object-center absolute h-full w-full inset-0"
//           alt={product.title}
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-50 group-hover/product:bg-opacity-70 transition-opacity duration-300 flex items-center justify-center">
//           <h3 className="text-white text-xl md:text-2xl font-semibold drop-shadow-lg opacity-0 group-hover/product:opacity-100 transition-opacity duration-300">
//             {product.title}
//           </h3>
//         </div>
//       </a>
//     </motion.div>
//   );
// };
