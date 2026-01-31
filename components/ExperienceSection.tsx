"use client";

import { motion } from "framer-motion";
import { experiences } from "./experienceData";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="relative py-28 overflow-hidden"
    >
      {/* Background – Hero-matched but slightly distinct */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-[#070a12] via-[#0b1323] to-[#020617]" />

     <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(148,163,184,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,163,184,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "96px 96px",
          maskImage:
            "radial-gradient(ellipse at center, black 45%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 45%, transparent 80%)",
        }}
      />

      {/* Subtle radial depth */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 40% at 70% 20%, rgba(34,197,94,0.08), transparent 40%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Professional{" "}
            <span className="bg-linear-to-r from-[#00C853] via-[#14F1A6] to-[#38BDF8] bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            A timeline of my professional journey, responsibilities, and growth
            as a developer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-px bg-white/10" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-2 h-3 w-3 rounded-full bg-[#14F1A6] flex items-center justify-center before:absolute before:w-5 before:h-5 before:rounded-full before:animate-ping before:bg-linear-to-r before:from-green-500 before:via-[#38BDF8] before:to-green-600 before:opacity-40" />

                {/* Card */}
                <div className="ml-12 md:ml-0 md:w-[45%] rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                  <h3 className="text-lg font-semibold text-white">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-[#14F1A6] mt-1">
                    {exp.company}
                  </p>
                  <p className="text-xs text-white/50 mt-1">
                    {exp.duration}
                  </p>

                  <ul className="mt-4 space-y-2 text-sm text-white/70">
                    {exp.points.map((point, i) => (
                      <li key={i} className="leading-relaxed">
                        • {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
