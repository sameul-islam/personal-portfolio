"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowLeftSLine, RiArrowRightSLine, RiStarFill } from "react-icons/ri";
import { playSound } from "@/app/hooks/useSound";

const testimonials = [
  {
    id: 1,
    name: "Alex M.",
    role: "Product Manager",
    company: "TechCorp",
    text: "Sameul delivered a clean, efficient, and scalable solution for our project — highly recommended for any full-stack development needs.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya S.",
    role: "UI/UX Designer",
    company: "DesignStudio",
    text: "The attention to detail and code quality are exceptional. Communication and delivery were seamless.",
    rating: 5,
  },
  {
    id: 3,
    name: "David K.",
    role: "Startup Founder",
    company: "InnovateLabs",
    text: "Projects were structured thoughtfully and delivered with production-ready quality. Excellent developer!",
    rating: 5,
  },
  {
    id: 4,
    name: "Leila R.",
    role: "Tech Lead",
    company: "DevSolutions",
    text: "The interfaces were perfectly responsive and intuitive. Highly professional work from start to finish.",
    rating: 5,
  },
  {
    id: 5,
    name: "Tom H.",
    role: "CTO",
    company: "StartupMania",
    text: "Sameul's work levelled up our web experience. Highly detail-oriented, clean code, and production-ready design.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    playSound("/sounds/next-prev-testimonial.wav")
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    playSound("/sounds/next-prev-testimonial.wav")
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const currentTestimonial = testimonials[activeIndex];


  return (
    <section id="testimonials" className="relative py-16 sm:py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-[#0b1220] via-[#0e1629] to-[#011107]" />
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 128, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 128, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 35%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 35%, transparent 75%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Client Testimonials
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-4xl  font-bold text-white mb-4 sm:mb-6 font-Outfit tracking-tight"
          >
            Trusted by{" "}
            <span className="bg-linear-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Professionals
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base font-Open text-slate-400 max-w-2xl mx-auto leading-relaxed px-4"
          >
            Real feedback from clients who experienced world-class development,
            scalable architecture, and production-ready solutions.
          </motion.p>
        </div>

        {/* Main Testimonial Card - Desktop & Tablet */}
        <div className="hidden md:block max-w-xl lg:max-w-3xl xl:max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentTestimonial.id}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative group"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-linear-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Main Card */}
                <div className="relative bg-linear-to-br from-slate-900/90 via-slate-800/50 to-slate-900/90 backdrop-blur-xl rounded-2xl border border-white/10 p-8 sm:p-10 lg:p-12 shadow-2xl">
                  {/* Quote Icon */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-linear-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Stars Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <RiStarFill key={i} className="w-5 h-5 text-cyan-500" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed mb-8 font-light">
                    "{currentTestimonial.text}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-linear-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg">
                      {currentTestimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-base sm:text-lg">
                        {currentTestimonial.name}
                      </div>
                      <div className="text-slate-400 text-sm sm:text-base">
                        {currentTestimonial.role}
                        {currentTestimonial.company && (
                          <> · <span className="text-emerald-400">{currentTestimonial.company}</span></>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows - Desktop */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 lg:-translate-x-20 w-12 h-12 lg:w-14 lg:h-14 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-emerald-400/50 group"
              aria-label="Previous testimonial"
            >
              <RiArrowLeftSLine className="w-6 h-6 lg:w-7 lg:h-7 group-hover:text-emerald-400 transition-colors" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 lg:translate-x-20 w-12 h-12 lg:w-14 lg:h-14 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-emerald-400/50 group"
              aria-label="Next testimonial"
            >
              <RiArrowRightSLine className="w-6 h-6 lg:w-7 lg:h-7 group-hover:text-emerald-400 transition-colors" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8 sm:mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex
                    ? "w-8 sm:w-10 h-2 bg-linear-to-r from-emerald-400 to-cyan-400"
                    : "w-2 h-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Testimonial Card */}
        <div className="md:hidden px-4">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentTestimonial.id}
              custom={direction}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.4 }}
              className="relative group"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-linear-to-r from-emerald-500/20 to-cyan-500/20 rounded-xl blur-lg opacity-50" />
              
              {/* Main Card */}
              <div className="relative bg-linear-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-xl border border-white/10 p-6 shadow-xl">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <RiStarFill key={i} className="w-4 h-4 text-cyan-500" />
                  ))}
                </div>

                {/* Text */}
                <blockquote className="text-base text-white/90 leading-relaxed mb-6">
                  "{currentTestimonial.text}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-white font-bold">
                    {currentTestimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">
                      {currentTestimonial.name}
                    </div>
                    <div className="text-slate-400 text-xs">
                      {currentTestimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile Navigation */}
          <div className="flex items-center justify-between mt-6 px-2">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 text-white rounded-full flex items-center justify-center transition-all active:scale-95"
              aria-label="Previous"
            >
              <RiArrowLeftSLine className="w-5 h-5" />
            </button>

            {/* Mobile Dots */}
            <div className="flex gap-1.5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === activeIndex
                      ? "w-6 h-1.5 bg-linear-to-r from-emerald-400 to-cyan-400"
                      : "w-1.5 h-1.5 bg-white/20"
                  }`}
                  aria-label={`Testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-10 h-10 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 text-white rounded-full flex items-center justify-center transition-all active:scale-95"
              aria-label="Next"
            >
              <RiArrowRightSLine className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}