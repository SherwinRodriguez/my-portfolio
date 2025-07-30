"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 md:px-10 bg-gradient-to-b from-black via-[#0a0a23] to-black text-white"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Call to Action */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Let’s build something{" "}
            <span className="text-indigo-400">amazing</span>
          </h2>
          <p className="text-base sm:text-lg text-white/80 mb-4 leading-relaxed">
            I'm currently open to internship or freelance opportunities.  
            If you have an exciting idea or just want to say hi, feel free to reach out!
          </p>
          <p className="text-sm text-white/50">
            I usually reply within 24 hours.
          </p>
        </motion.div>

        {/* Right Side: Contact Card */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6">Contact Links</h3>
            <div className="flex flex-col gap-5 text-white/90 text-sm sm:text-base">
              <a
                href="mailto:sherwin7rodriguez10@gmail.com"
                className="flex items-center gap-3 hover:text-indigo-400 transition"
              >
                <Mail size={20} /> sherwin7rodriguez10@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/sherwin-emmanuel-rodriguez-67445b290/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-indigo-400 transition"
              >
                <Linkedin size={20} /> linkedin.com/in/sherwin
              </a>
              <a
                href="https://github.com/SherwinRodriguez"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-indigo-400 transition"
              >
                <Github size={20} /> github.com/sherwin
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
