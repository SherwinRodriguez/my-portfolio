"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadBasic } from "tsparticles-basic";
import type { Engine } from "tsparticles-engine";

const AnimatedBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadBasic(engine); // ✅ load basic particles version
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#1a1a40] to-[#24243e] bg-noise">
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0"
        options={{
          fpsLimit: 60,
          particles: {
            number: { value: 60 },
            color: { value: "#ffffff" },
            links: {
              enable: true,
              color: "#ffffff",
              distance: 100,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.3,
              direction: "none",
              outModes: { default: "out" },
            },
            opacity: { value: 0.3 },
            size: { value: { min: 0.5, max: 1.5 } },
          },
          detectRetina: true,
        }}
      />

      {/* blobs + waves here if needed */}
    </div>
  );
};

export default AnimatedBackground;
