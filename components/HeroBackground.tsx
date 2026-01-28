"use client";

import React from "react";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Base Premium Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-[#0b1220] via-[#0f172a] to-[#020617]" />

      {/* Subtle MongoDB Green Depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 40% at 30% 20%, rgba(34,197,94,0.10), transparent 60%)",
        }}
      />

      {/* Graph Paper Grid (MongoDB style) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 35%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 35%, transparent 75%)",
        }}
      />

      {/* Soft Vignette for Focus */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(2,6,23,0.65) 100%)",
        }}
      />
    </div>
  );
}
