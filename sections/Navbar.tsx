"use client";

import React from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "/Sherwin_Rodriguez_Resume.pdf", external: true },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90vw] max-w-6xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-4 shadow-xl"
    >
      <div className="flex flex-wrap justify-between items-center w-full">
        {/* Logo */}
        <motion.h1
          className="text-white font-bold text-lg tracking-wide"
          whileHover={{ scale: 1.05 }}
        >
          <span className="bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
            Sherwin Rodriguez
          </span>
        </motion.h1>

        {/* Links */}
        <ul className="flex flex-wrap gap-5 md:gap-8 items-center text-sm md:text-base font-medium text-white">
          {navItems.map((item, idx) => (
            <li key={idx} className="group relative">
              <a
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={`transition-all px-3 py-1 ${
                  item.name === "Resume"
                    ? "text-amber-300 border border-amber-300 rounded-full hover:bg-amber-300/10"
                    : "hover:text-indigo-400"
                }`}
              >
                {item.name}
              </a>
              {item.name !== "Resume" && (
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-400 rounded-full transition-all duration-300 group-hover:w-full"></span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
