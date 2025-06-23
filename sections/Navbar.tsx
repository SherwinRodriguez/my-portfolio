"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "/Sherwin_Rodriguez_Resume.pdf", external: true },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90vw] max-w-6xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 shadow-xl"
    >
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <motion.h1
          className="text-white font-bold text-sm sm:text-base tracking-wide"
          whileHover={{ scale: 1.05 }}
        >
          <span className="bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
            Sherwin Rodriguez
          </span>
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-5 md:gap-8 items-center text-sm md:text-base font-medium text-white">
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

        {/* Hamburger for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 flex flex-col md:hidden bg-black/40 backdrop-blur-md rounded-xl p-4 space-y-3 text-sm text-white font-medium border border-white/10 shadow-xl"
        >
          {navItems.map((item, idx) => (
            <li key={idx} className="group relative text-center">
              <a
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 ${
                  item.name === "Resume"
                    ? "text-amber-300 border border-amber-300 rounded-full hover:bg-amber-300/10"
                    : "hover:text-indigo-400"
                }`}
              >
                {item.name}
              </a>
              {item.name !== "Resume" && (
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-400 rounded-full transition-all duration-300 group-hover:w-full"></span>
              )}
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
