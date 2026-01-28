"use client";

import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";
import { Typewriter } from "react-simple-typewriter";

const dynamicRoles = [
  "Full-Stack Web Developer",
  "MERN Stack Expert",
  "Freelance Solutions Engineer",
  "UI/UX & Web Innovator"
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-[85vh] md:h-[92vh] font-Outfit flex items-center justify-center overflow-hidden"
    >
      <HeroBackground/>

      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-4 md:px-12 relative z-10">
        
        {/* Left Side: Name + Dynamic Roles */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <motion.h1
            className="flex flex-col gap-3 text-white/80"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
           <span className="text-2xl">Hi There,</span> <span className=" text-3xl md:text-4xl lg:text-5xl font-semibold bg-linear-to-r from-[#00C853] via-[#14F1A6] to-[#38BDF8] bg-clip-text text-transparent animate-gradient-x">I'm Sameul Islam</span>
          </motion.h1>

          <motion.p
            className="text-gray-300 text-lg sm:text-xl md:text-2xl h-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Typewriter
            words={dynamicRoles}
            loop={0}
            cursor
            cursorStyle="|"
            cursorColor="#14F1A6"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
            />
          </motion.p>
        </div>

        {/* Right Image with Hexagonal Border */}
        <motion.div
          className="flex-1 mb-10 md:mb-0 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="relative w-64 h-80 sm:w-80 sm:h-125 md:w-96 md:h-150 lg:w-100 lg:h-162.5">

           <svg viewBox="0 0 200 260" className="w-full h-full ">
            <defs>
             <clipPath id="hexClip">
             <polygon points="100,10 190,55 190,205 100,250 10,205 10,55" />
           </clipPath>

             {/* Animated Gradient */}
          <linearGradient id="hexGradient" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00ED64" />
          <stop offset="35%" stopColor="#00C853" />
          <stop offset="65%" stopColor="#14F1A6" />
          <stop offset="100%" stopColor="#38BDF8" />
          <animateTransform
           attributeName="gradientTransform"
           type="rotate"
           from="0 100 130"
           to="360 100 130"
           dur="18s"
           repeatCount="indefinite"
          />
         </linearGradient>

           {/* Glow Filter */}
         <filter id="glow">
          <feGaussianBlur stdDeviation="1" result="coloredBlur" />
           <feMerge>
            <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
              </feMerge>
              </filter>
            </defs>

           {/* Image */}
          <image
           href="/photo.png"
           width="200"
           height="260"
           clipPath="url(#hexClip)"
           preserveAspectRatio="xMidYMid slice"
           />

           {/* Glow Stroke */}
         <polygon
            points="100,10 190,55 190,205 100,250 10,205 10,55"
            fill="none"
            stroke="url(#hexGradient)"
           // strokeWidth="6"
           opacity="0.35"
           // filter="url(#glow)"
           />

         {/* Main Stroke */}
        <polygon
          points="100,10 190,55 190,205 100,250 10,205 10,55"
          fill="none"
          stroke="url(#hexGradient)"
          strokeWidth="1.4"
         />
         </svg>



          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
