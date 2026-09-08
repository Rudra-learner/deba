"use client";
import React, { useState } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/ui/Hero";
import { Marquee } from "@/components/ui/Marquee";
import { About } from "@/components/ui/About";
import { Projects } from "@/components/ui/Projects";
import { Skills } from "@/components/ui/Skills";
import { Experience } from "@/components/ui/Experience";
import { Education } from "@/components/ui/Education";
import { CareerPath } from "@/components/ui/CareerPath";
import { Contact } from "@/components/ui/Contact";
import { Footer } from "@/components/ui/Footer";
import { BootLoader } from "@/components/ui/BootLoader";
import { Dock } from "@/components/ui/Dock";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { motion } from "framer-motion";

export default function Home() {
  const [booted, setBooted] = useState(false);

  return (
    <>
      {!booted && <BootLoader onComplete={() => setBooted(true)} />}
      
      <div className="pointer-events-none fixed inset-[-50%] z-0 opacity-[0.03] mix-blend-overlay noise-bg"></div>
      <CustomCursor />
      <Navbar />

      <motion.main 
        initial={{ opacity: 0, filter: "blur(4px)", y: 15 }}
        animate={booted ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
        transition={{ duration: 1 }}
        className="min-h-screen bg-[var(--background)] selection:bg-[var(--color-accent)] selection:text-black relative z-10"
      >
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <CareerPath />
        <Contact />
        <Footer />
      </motion.main>

      {booted && <Dock />}
    </>
  );
}
