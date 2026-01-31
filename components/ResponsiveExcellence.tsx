"use client";

import { motion } from "framer-motion";

export default function ResponsiveExcellence() {
  return (
    <section
      id="responsiveness"
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-[#0b1220] via-[#0e1629] to-[#020617]" />
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

      <div className="mx-auto max-w-7xl px-6 space-y-32">

        {/* Desktop Excellence */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          
          {/* Desktop Video */}
          <motion.video
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <source src="/videos/desktop.webm" type="video/webm" />
          </motion.video>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-5"
          >
            <h3 className="text-3xl font-semibold text-white">
              Engineered for Large Screens
            </h3>

            <p className="text-white/70 leading-relaxed">
              Desktop experiences are not just scaled-up layouts.
              I architect interfaces that take advantage of space,
              performance, and interaction depth — ensuring clarity,
              balance, and intent on every large screen.
            </p>

            <ul className="space-y-2 text-sm text-white/60">
              <li>• Desktop-first layout strategy</li>
              <li>• Performance-driven UI composition</li>
              <li>• Precision spacing & interaction hierarchy</li>
            </ul>
          </motion.div>
        </div>

        {/* Mobile Excellence */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-5 order-2 lg:order-1"
          >
            <h3 className="text-3xl font-semibold text-white">
              Mobile-Perfect by Design
            </h3>

            <p className="text-white/70 leading-relaxed">
              Mobile is not an afterthought.
              Every interaction is crafted for touch,
              performance, and real-world usage —
              delivering fluid, native-feeling experiences
              across all modern devices.
            </p>

            <ul className="space-y-2 text-sm text-white/60">
              <li>• Touch-optimized interactions</li>
              <li>• Mobile performance optimization</li>
              <li>• Seamless responsiveness across breakpoints</li>
            </ul>
          </motion.div>

          {/* Mobile Video */}
          <motion.video
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-xl mx-auto order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <source src="/videos/mobile.webm" type="video/webm" />
          </motion.video>
        </div>

      </div>
    </section>
  );
}
