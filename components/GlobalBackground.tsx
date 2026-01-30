"use client";

export default function GlobalBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Base Continuity Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-[#020617] via-[#0b1220] to-[#020617]" />

      {/* Calm MongoDB Green Presence */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 30% at 70% 80%, rgba(34,197,94,0.08), transparent 65%)",
        }}
      />

      {/* Extremely Soft Grid (Barely Perceptible) */}
      <div
        className="absolute inset-0"
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

      {/* Gentle Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 10%, rgba(2,6,23,0.55) 100%)",
        }}
      />
    </div>
  );
}
