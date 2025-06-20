"use client";

import { useState, useEffect } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => setFadeOut(true), 2000);
    const timeout2 = setTimeout(() => setLoading(false), 2800);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#0f0f0f] transition-opacity duration-700 ease-in-out ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex items-center justify-center w-48 h-48">
        {/* Animated Glow Ring */}
        <div className="absolute w-full h-full rounded-full bg-gradient-to-tr from-blue-500 via-purple-600 to-pink-500 blur-2xl opacity-30 animate-spin-slow"></div>

        {/* Loader Content */}
        <div className="z-10 text-center">
          <h1 className="text-white text-3xl md:text-4xl font-extrabold tracking-wide">
            Sherwin.dev
          </h1>
          <div className="mt-3 text-sm text-gray-300 animate-bounce">
            Loading magic...
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
