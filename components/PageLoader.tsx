"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    // Hide loader after minimum display time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-9999 flex items-center justify-center overflow-hidden"
        >
          {/* Premium Background */}
          <div className="absolute inset-0 bg-linear-to-br from-[#0a0f1e] via-[#0f172a] to-[#020617]" />

          {/* Animated Gradient Orbs */}
          <div className="absolute inset-0">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
            />
          </div>

          {/* Main Content Container */}
          <div className="relative z-10 flex flex-col items-center gap-8 px-4">
            
            {/* Logo/Name Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center"
            >
              {/* Animated Initial */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "backOut" }}
                className="mb-4"
              >
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto">
                  {/* Spinning Ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 rounded-full border-2 border-transparent border-t-emerald-400 border-r-cyan-400"
                  />
                  
                  {/* Inner Circle */}
                  <div className="absolute inset-2 rounded-full bg-linear-to-br from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                    <span className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                      S
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Name with Staggered Letters */}
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold font-Outfit"
              >
                {["S", "a", "m", "e", "u", "l"].map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.4 + index * 0.05,
                      ease: "easeOut",
                    }}
                    className="inline-block bg-linear-to-r from-white via-emerald-100 to-cyan-100 bg-clip-text text-transparent"
                  >
                    {letter}
                  </motion.span>
                ))}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  className="inline-block text-slate-400 mx-2"
                >
                  •
                </motion.span>
                {["I", "s", "l", "a", "m"].map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.75 + index * 0.05,
                      ease: "easeOut",
                    }}
                    className="inline-block bg-linear-to-r from-emerald-100 via-cyan-100 to-white bg-clip-text text-transparent"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-emerald-400 text-sm sm:text-base mt-2 font-medium"
              >
                Full-Stack Developer
              </motion.p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="w-64 sm:w-80 space-y-3"
            >
              {/* Progress Bar Container */}
              <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden backdrop-blur-sm">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute inset-y-0 left-0 bg-linear-to-r from-emerald-400 to-cyan-400 rounded-full"
                >
                  {/* Shimmer Effect */}
                  <motion.div
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                  />
                </motion.div>
              </div>

              {/* Loading Text */}
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-slate-400"
                >
                  Loading experience...
                </motion.span>
                <span className="text-emerald-400 font-medium tabular-nums">
                  {Math.min(Math.round(progress), 100)}%
                </span>
              </div>
            </motion.div>

            {/* Animated Dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="flex gap-2"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                  className="w-2 h-2 rounded-full bg-linear-to-r from-emerald-400 to-cyan-400"
                />
              ))}
            </motion.div>

          </div>

          {/* Bottom Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-emerald-500/50 to-transparent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}