"use client";
import React, { useState } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/ui/Hero";
import { Marquee } from "@/components/ui/Marquee";
import { About } from "@/components/ui/About";
import { ResearchInterests } from "@/components/ui/ResearchInterests";
import { Projects } from "@/components/ui/Projects";
import { Skills } from "@/components/ui/Skills";
import { Experience } from "@/components/ui/Experience";
import { Education } from "@/components/ui/Education";
import { Courses } from "@/components/ui/Courses";
import { Extracurricular } from "@/components/ui/Extracurricular";
import { Contact } from "@/components/ui/Contact";
import { Footer } from "@/components/ui/Footer";
import { BootLoader } from "@/components/ui/BootLoader";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { motion } from "framer-motion";

export default function Home() {
  const [booted, setBooted] = useState(false);

  return (
    <>
      {!booted && <BootLoader onComplete={() => setBooted(true)} />}
      
      {/* Global CAD / Drafting Grid Background */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-20 bg-[linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="pointer-events-none fixed inset-[-50%] z-0 opacity-[0.03] mix-blend-overlay noise-bg" />
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
        <ResearchInterests />
        <Projects />
        <Experience />
        <Skills />
        <Courses />
        <Education />
        <Extracurricular />
        <Contact />
        <Footer />
      </motion.main>


    </>
  );
}
