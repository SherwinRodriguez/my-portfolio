"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const roles = [
  "Full Stack Developer",
  "Java & Spring Boot Engineer",
  "Next.js Enthusiast",
  "MongoDB + TypeScript Pro",
  "Open Source Explorer",
  "Professional Footballer",
];

const fullName = "Sherwin Emmanuel Rodriguez";

const Home = () => {
  const [typedName, setTypedName] = useState("");
  const [index, setIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (index < fullName.length) {
      timeout = setTimeout(() => {
        setTypedName((prev) => prev + fullName[index]);
        setIndex(index + 1);
      }, 100);
    } else {
      setIsComplete(true);
      timeout = setTimeout(() => {
        setTypedName("");
        setIndex(0);
        setIsComplete(false);
      }, 2500);
    }

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <section
      id="home"
      className="scroll-mt-28 min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 pt-52 md:pt-44"
    >
      {/* Text Side */}
      <motion.div
        className="max-w-xl text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
          Hey, I’m{" "}
          <span
            className={`inline-block ${
              isComplete
                ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-400"
                : "text-indigo-400 animate-pulse border-r-2 border-indigo-300"
            } pr-1`}
            style={{
              minWidth: "21ch",
              whiteSpace: "nowrap",
            }}
          >
            {typedName}
          </span>
        </h1>

        {/* Role Scroller */}
        <div className="relative overflow-hidden h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 p-2.5 mt-2 group">
          <motion.div
            className="absolute flex gap-8 text-indigo-300 text-base md:text-lg font-medium whitespace-nowrap group-hover:[animation-play-state:paused]"
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {roles.concat(roles).map((role, idx) => (
              <span key={idx}>{role}</span>
            ))}
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          className="mt-6 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl font-medium transition"
          >
            Explore My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white/20 text-white hover:bg-white/10 rounded-xl font-medium transition"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-10 md:mb-0"
      >
        <Image
          src="/sherwin.jpg"
          alt="Sherwin"
          width={340}
          height={340}
          className="rounded-2xl shadow-2xl object-cover w-[280px] sm:w-[300px] md:w-[340px]"
        />
      </motion.div>
    </section>
  );
};

export default Home;
