"use client";

import React, { useEffect, useState } from "react";
 import Image from "next/image";
import { motion } from "framer-motion";

const roles = [
  "Full Stack Engineer (Next.js & Spring Boot)",
  "Java Backend Specialist | REST & Microservices",
  "TypeScript + MongoDB Craftsman",
  "Next.js + Tailwind UI Builder",
  "Open Source Contributor & Explorer",
  "Smart Web App Engineer (PDF, QR, Auth)",
  "API-first Developer | Secure & Scalable Systems",
  "Web3 Curious | ETHGlobal Builder"
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
      className="scroll-mt-28 min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 pt-52 md:pt-44 gap-5"
    >
      {/* Text Side */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold text-white leading-tight mb-4 w-full break-words text-center md:text-left">
          Hey, I’m <br/> {" "}
          <span
            className={`inline-block ${
              isComplete
                ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-400"
                : "text-indigo-400 animate-pulse border-r-2 border-indigo-300"
            }`}
            style={{
              display: "inline-block",
              overflowWrap: "break-word",
              wordBreak: "break-word",
              maxWidth: "100%",
              overflow: "hidden",
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

      {/* Image Side */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* <ProfileCard
          name="Sherwin Rodriguez"
          title="Full Stack Developer"
          handle="sherwin.codes"
          status="Available"
          avatarUrl="/sherwin.jpg"
          contactText="Hire Me"
          onContactClick={() => console.log('Contact clicked')}
        /> */}
        <Image
          src="/sherwin.jpg"
          alt="Sherwin"
          width={340}
          height={340}
          className="rounded-2xl shadow-2xl object-cover w-[260px] sm:w-[300px] md:w-[340px]"
        />
      </motion.div>
    </section>
  );
};

export default Home;
