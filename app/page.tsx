"use client";

import { motion } from "framer-motion";
import FadeInSection from "@/components/FadeInSection";
import Navbar from "@/sections/Navbar";
import Home from "@/sections/Home";
import About from "@/sections/About";
import Project from "@/sections/Project";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Preloader from "@/components/PreLoader";

export default function HomePage() {
  return (
    <>
      <Preloader/>
      {/* <StarBackground className="fixed inset-0 -z-10" /> */}

      <div className="relative z-10 min-h-screen text-white">
        <Navbar />

        {/* Page load animation for Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Home />
        </motion.div>

        <FadeInSection delay={0.2}>
          <About />
        </FadeInSection>

        <FadeInSection delay={0.3}>
          <Project />
        </FadeInSection>

        <FadeInSection delay={0.4}>
          <Contact />
        </FadeInSection>

        <Footer />
      </div>
    </>
  );
}
