"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "InternX",
    description:
      "A full-stack internship simulation portal built with Java (Spring Boot) and Next.js to mimic real-world internship workflows.",
    link: "#",
    image: "/one.png",
  },
  {
    title: "SecureBox",
    description:
      "Personal Data Vault with AES/RSA encryption built for security-focused file storage. Full-stack with encryption-first backend.",
    link: "#",
    image: "/one.png",
  },
  {
    title: "CodeDiffAI",
    description:
      "AI-powered tool to compare old vs. new codebases (HTML to React, etc.), auto-generate mappings, and highlight differences.",
    link: "#",
    image: "/one.png",
  },
];

export default function Project() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const projectIndex = useTransform(scrollYProgress, [0, 1], [0, projects.length - 1]);
  const displayNumber = useTransform(projectIndex, (i) =>
    `#${String(Math.round(i + 1)).padStart(3, "0")}`
  );

  return (
    <section
      id="projects"
      ref={containerRef}
      className="min-h-screen w-full px-6 py-20 text-white"
    >
      {/* Intro Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-20 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-indigo-400">
          Let’s Build Something Cool Together 🚀
        </h2>
        <p className="text-white/60 mt-4 text-lg">My featured projects are below</p>
      </motion.div>

      {/* Responsive Layout */}
      <div className="relative flex flex-col md:flex-row gap-16">
        {/* Left Sticky Number (Desktop Only) */}
        <div className="hidden md:flex w-full md:w-1/3 sticky top-0 h-screen items-center justify-center">
          <motion.h2 className="text-5xl font-bold text-indigo-400">
            <motion.span>{displayNumber}</motion.span>
          </motion.h2>
        </div>

        {/* Right Scrollable Projects */}
        <div className="w-full md:w-2/3 flex flex-col space-y-48">
          {projects.map((project, idx) => (
            <div key={idx} className="max-h-fit flex">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 + 0.3 }}
                viewport={{ once: true }}
                className="max-w-xl bg-white/20 backdrop-blur-lg shadow-2xl rounded-3xl p-4 pb-2"
              >
                {/* Mobile Project Number */}
                <span className="text-indigo-400 text-xl font-semibold mb-2 block md:hidden">
                  #{String(idx + 1).padStart(3, "0")}
                </span>

                <img
                  src={project.image}
                  alt={project.title}
                  className="mb-6 rounded-xl w-full max-w-md object-cover shadow-lg border border-white/10"
                />
                <h3 className="text-3xl font-semibold mb-3">{project.title}</h3>
                <p className="text-white/80 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-indigo-400 hover:text-indigo-300 font-medium transition"
                >
                  View Project →
                </a>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
