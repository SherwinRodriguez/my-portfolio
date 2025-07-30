"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="w-full px-4 sm:px-6 md:px-20 py-6 bg-black/30 backdrop-blur-md border-t border-white/10 text-white text-sm">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-white/60 text-center sm:text-left">
          © {new Date().getFullYear()} Sherwin Rodriguez. All rights reserved.
        </p>
        <div className="flex gap-4 text-white/80">
          <a
            href="https://github.com/SherwinRodriguez"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sherwin-emmanuel-rodriguez-67445b290/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
