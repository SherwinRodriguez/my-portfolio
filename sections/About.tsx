"use client";

import React, { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

const About = () => {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      x: "-50%",
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: 10,
      },
    });
  }, [controls]);

  const skills = [
    { name: "Java", icon: "/skills/java.png" },
    { name: "Spring Boot", icon: "/skills/spring.png" },
    { name: "Next.js", icon: "/skills/nextjs.png" },
    { name: "React", icon: "/skills/react.png" },
    { name: "MongoDB", icon: "/skills/mongodb.png" },
    { name: "TypeScript", icon: "/skills/typescript.png" },
    { name: "Tailwind CSS", icon: "/skills/tailwind.png" },
    { name: "Git", icon: "/skills/git.png" },
    { name: "Linux", icon: "/skills/linux.png" },
    { name: "Postman", icon: "/skills/postman.png" },
    { name: "Figma", icon: "/skills/figma.png" },
  ];

  return (
    <section
      id="about"
      className="py-28 px-4 sm:px-6 md:px-20 min-h-screen flex flex-col items-center justify-center text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-white">
          Who I Am
        </h2>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/80 mb-6">
          I’m a Computer Science student at Loyola ICAM College of Engineering
          and Technology, and a Full Stack Web3 Developer with a focus on building secure, scalable, and user-friendly applications. My expertise lies in crafting seamless experiences across the stack — from robust Java Spring Boot APIs to sleek frontend interfaces built with Next.js and TypeScript.
        </p>

        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/80 mb-6">
          My go-to tech stack includes <span className="text-white font-semibold">Java</span>, <span className="text-white font-semibold">Spring Boot</span>, <span className="text-white font-semibold">Next.js</span>, <span className="text-white font-semibold">MongoDB</span>, and <span className="text-white font-semibold">TypeScript</span>. I’ve recently started diving deeper into <span className="text-white font-semibold">Web3 development</span> using tools like Solidity, Ethers.js, and Groq APIs — exploring how decentralized apps can change the way we build trust online.
        </p>

        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/80">
          Outside of tech, I’m a professional footballer — a journey that’s shaped my mindset, discipline, and resilience both on and off the field.
        </p>
      </motion.div>

      {/* Skill Belt */}
      <div className="relative w-full mt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1f1c2c] via-[#928DAB] to-[#1f1c2c] blur-2xl opacity-20 z-0" />
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10" />

        <motion.div
          className="relative flex gap-12 px-4 py-6 z-20"
          animate={controls}
          onHoverStart={() => controls.stop()}
          onHoverEnd={() =>
            controls.start({
              x: "-50%",
              transition: {
                repeat: Infinity,
                ease: "linear",
                duration: 10,
              },
            })
          }
        >
          {[...skills, ...skills].map((skill, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center justify-center transition-all duration-300 cursor-pointer min-w-[60px]"
              whileHover={{ scale: 1.6 }}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 md:w-16 md:h-16 object-contain mb-2"
              />
              <span className="text-sm text-white text-center">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
