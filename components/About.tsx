"use client";

import { motion } from "framer-motion";
import { SiMongodb, SiReact, SiNextdotjs, SiTypescript } from "react-icons/si";
import GlobalBackground from "./GlobalBackground";
import { FaNodeJs } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex items-center min-h-[80vh] py-32"
    >
      <GlobalBackground />

      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2">

          {/* LEFT — IDENTITY */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="mb-4 text-sm font-semibold tracking-widest text-[#14F1A6]">
              ABOUT ME
            </p>

            <h2 className="mb-6 text-3xl font-semibold leading-tight text-white md:text-4xl">
              I design & build systems  
              <span className="text-white/60"> — not just websites.</span>
            </h2>

            <p className="mb-6 max-w-xl text-base leading-relaxed text-white/70">
              I’m a full-stack focused web developer who cares deeply about
              structure, performance, and long-term maintainability.
              My work is driven by clarity — in code, design, and architecture.
            </p>

            <p className="max-w-xl text-base leading-relaxed text-white/60">
              I believe premium products are born from restraint,
              not excess. Every animation, interaction, and line of code
              must earn its place.
            </p>
          </motion.div>

          {/* RIGHT — PROOF */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            {/* Experience Card */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="mb-2 text-sm font-medium text-white">
                Experience & Focus
              </h3>
              <p className="text-sm leading-relaxed text-white/70">
                Building scalable, modern web applications with a strong
                emphasis on UX precision, component architecture,
                and performance-first thinking.
              </p>
            </div>

            {/* Stack */}
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-6 backdrop-blur-xl">
              <h3 className="mb-4 text-sm font-medium text-white">
                Core Technology Stack
              </h3>

              <div className="flex flex-wrap gap-3 text-white/70">
                <span className="flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm">
                  <SiNextdotjs/> Next.js
                </span>
                <span className="flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm">
                  <SiReact className="text-cyan-500"/> React
                </span>
                <span className="flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm">
                  <FaNodeJs className="text-green-600"/> Node.js
                </span>
                <span className="flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm">
                  <SiTypescript className="text-blue-400"/> TypeScript
                </span>
                <span className="flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm">
                  <SiMongodb className="text-green-400" /> MongoDB
                </span>
              </div>
            </div>

            {/* Philosophy */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <p className="text-sm leading-relaxed text-white/60">
                I don’t chase trends.  
                I build interfaces that feel inevitable — calm, confident,
                and engineered to last.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
