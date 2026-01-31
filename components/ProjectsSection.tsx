"use client";

import { Key, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiCloseLargeLine } from "react-icons/ri";
import GlobalBackground from "./GlobalBackground";
import { playSound } from "@/app/hooks/useSound";

const projects = [
  {
    id: "one",
    title: "Premium SaaS Platform",
    description:
      "A scalable SaaS architecture focused on performance, UX precision, and real-world usability across devices.",
    thumbnail: "/projects/thumbs/one.png",
    showcase: [
      "/projects/details/one.png"
    ],
    live: "https://jameswear.vercel.app/",
    github: "https://github.com/sameul-islam/footwear-commerce",
  },
  {
    id: "two",
    title: "Modern E-Commerce System",
    description:
      "An advanced e-commerce experience with optimized flows, responsiveness, and conversion-focused UI.",
    thumbnail: "/projects/thumbs/two.png",
    showcase: [
      "/projects/details/two.png"
    ],
    live: "https://mini-apps-hub.vercel.app/",
    github: "https://github.com/sameul-islam/mini-apps-hub",
  },
  {
    id: "three",
    title: "Interactive Web Application",
    description:
      "A complex web app built with component-driven architecture and smooth interactive experiences.",
    thumbnail: "/projects/thumbs/three.png",
    showcase: [
      "/projects/details/three.png"
    ],
    live: "https://rolax-resort-beige.vercel.app/",
    github: "https://github.com/sameul-islam/rolax.resort",
  },
];

export default function ProjectsSection() {
  const [active, setActive] = useState<any>(null);

    // Body Scroll Lock
    useEffect(() => {
      document.body.style.overflow = active ? "hidden" : "auto";
    },[active]);

      const toggleSound = () => {
        playSound(active ? "/sounds/project-popup-close.wav" : "");
        setActive(!active);
      };

  return (
    <>
      <section id="project" className="relative py-24">
       <GlobalBackground/>

        <div className=" w-full md:w-[95%] lg:w-[90%] mx-auto px-2">
          <h2 className="text-3xl font-semibold font-Outfit text-center bg-linear-to-r from-[#00C853] via-[#14F1A6] to-[#38BDF8] bg-clip-text text-transparent animate-gradient-x mb-3">
            Featured Digital Experiences
          </h2>
    
          <p className="text-white/50 font-Outfit text-center max-w-xl mx-auto">
            Carefully crafted systems balancing performance, clarity, and real-world usability.
          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-18">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setActive(project)}
                className="group relative cursor-pointer overflow-hidden rounded-sm"
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />

                {/* Hover Overlay (Desktop only) */}
                <div className="hidden md:flex absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition items-center justify-center">
                  <span className="text-white text-sm tracking-wide">
                    View Project Details →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[rgba(34,197,94,0.10)] backdrop-blur-3xl overflow-y-auto"
          >
            {/* Close */}
            <button
              onClick={toggleSound}
              className="fixed top-6 right-6 text-white/70 hover:text-white hover:rotate-180 transition duration-700 cursor-pointer"
            >
              <RiCloseLargeLine size={32} />
            </button>

            <div className="max-w-4xl mx-auto px-6 py-24 space-y-10">
              <h3 className="text-4xl font-semibold text-white">
                {active.title}
              </h3>

              <p className="text-white/70 leading-relaxed">
                {active.description}
              </p>

             <div className="space-y-12">
              {active.showcase.map((img: any, i : Key) => (
              <img
                key={i}
                src={img}
                alt="template"
                loading="lazy"
                className="w-full rounded-xl"
              />
              ))}
             </div>

              <div className="flex gap-4 pt-8">
                <a
                  href={active.live}
                  target="_blank"
                  className="px-6 py-3 rounded-lg bg-white text-black text-sm"
                >
                  Live Preview
                </a>
                <a
                  href={active.github}
                  target="_blank"
                  className="px-6 py-3 rounded-lg border border-white/30 text-white text-sm"
                >
                  Source Code
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
