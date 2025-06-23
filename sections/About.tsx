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
          and Technology, and a professional footballer with a passion for
          technology. My expertise lies in full-stack development — blending
          backend logic with sleek, user-focused frontend experiences.
        </p>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/80">
          I currently build real-world tools using{" "}
          <span className="text-white font-semibold">Spring Boot</span>,{" "}
          <span className="text-white font-semibold">Next.js</span>,{" "}
          <span className="text-white font-semibold">MongoDB</span>, and{" "}
          <span className="text-white font-semibold">Groq</span>. My goal? To
          create high-performance apps and earn a place in a top product-based
          company.
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
