"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ArrowDownRight, FileDown } from "lucide-react";

import Image from "next/image";

// Glitch Effect Component
const GlitchName = ({ text }: { text: string }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const textRef = useRef<HTMLHeadingElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      if (textRef.current) {
        textRef.current.innerText = text.split("").map((letter, index) => {
          if (index < iteration) {
            return text[index];
          }
          if (text[index] === " ") return " ";
          return letters[Math.floor(Math.random() * 26)];
        }).join("");
      }
      
      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
      iteration += 1 / 2;
    }, 30);
  };

  return (
    <h1 
      ref={textRef}
      onMouseEnter={handleMouseEnter}
      className="text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6rem] font-medium leading-[1.05] tracking-tight text-balance uppercase text-[var(--foreground)] cursor-crosshair"
    >
      {text}.
    </h1>
  );
};

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full"
      >
        {/* Left Side: Text */}
        <div className="lg:col-span-7 flex flex-col gap-8 order-2 lg:order-1">
          <div className="flex flex-col gap-2">
            <span className="text-sm md:text-base font-mono tracking-widest text-[var(--color-accent)] uppercase">
              {PORTFOLIO_DATA.personal.role}
            </span>
            <GlitchName text={PORTFOLIO_DATA.personal.name} />
          </div>

          <div className="flex flex-col gap-4 max-w-2xl">
            <p className="text-xl md:text-3xl text-[var(--foreground)] font-light leading-relaxed">
              {PORTFOLIO_DATA.personal.shortBio}
            </p>
            <p className="text-lg md:text-xl text-[var(--color-muted)] font-light leading-relaxed">
              {PORTFOLIO_DATA.personal.secondBio}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="#work"
              className="group flex items-center gap-2 bg-[var(--foreground)] text-[var(--background)] px-8 py-4 rounded-sm text-sm font-medium tracking-wide transition-transform hover:scale-105"
            >
              EXPLORE MY WORK
              <ArrowDownRight size={18} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-transparent border border-[var(--color-border)] text-[var(--foreground)] px-8 py-4 rounded-sm text-sm font-medium tracking-wide transition-all hover:border-[var(--foreground)] hover:bg-[var(--foreground)]/5"
            >
              DOWNLOAD CV
              <FileDown size={18} />
            </a>
          </div>
        </div>

        {/* Right Side: VLSI Floorplan Layout */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2 w-full mt-12 lg:mt-0">
          <div className="relative group shrink-0 w-64 h-64 md:w-80 md:h-80 lg:w-[24rem] lg:h-[24rem] p-6 md:p-8 bg-[var(--background)] border border-[var(--color-border)] shadow-2xl overflow-hidden transition-colors duration-700 hover:border-[var(--color-accent)]/30">
            
            {/* Background layout grid */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
            
            {/* IO Pads (Top & Bottom) */}
            <div className="absolute top-2 left-6 right-6 h-1.5 flex justify-between px-2">
              {[...Array(12)].map((_, i) => <div key={`io-t-${i}`} className="w-2 h-full bg-[var(--foreground)]/20 border border-[var(--color-border)] transition-colors duration-500 group-hover:bg-[var(--color-accent)]/20" />)}
            </div>
            <div className="absolute bottom-2 left-6 right-6 h-1.5 flex justify-between px-2">
              {[...Array(12)].map((_, i) => <div key={`io-b-${i}`} className="w-2 h-full bg-[var(--foreground)]/20 border border-[var(--color-border)] transition-colors duration-500 group-hover:bg-[var(--color-accent)]/20" />)}
            </div>
            
            {/* IO Pads (Left & Right) */}
            <div className="absolute left-2 top-6 bottom-6 w-1.5 flex flex-col justify-between py-2">
              {[...Array(12)].map((_, i) => <div key={`io-l-${i}`} className="h-2 w-full bg-[var(--foreground)]/20 border border-[var(--color-border)] transition-colors duration-500 group-hover:bg-[var(--color-accent)]/20" />)}
            </div>
            <div className="absolute right-2 top-6 bottom-6 w-1.5 flex flex-col justify-between py-2">
              {[...Array(12)].map((_, i) => <div key={`io-r-${i}`} className="h-2 w-full bg-[var(--foreground)]/20 border border-[var(--color-border)] transition-colors duration-500 group-hover:bg-[var(--color-accent)]/20" />)}
            </div>

            {/* Central Core (Photo) */}
            <div className="relative w-full h-full border border-[var(--color-border)] bg-[var(--background)] p-1 z-10 transition-colors duration-700 group-hover:border-[var(--color-accent)]/50">
              {/* Core Label */}
              <div className="absolute -top-2 left-3 bg-[var(--background)] px-1 text-[8px] md:text-[10px] font-mono tracking-widest text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors duration-500 z-20">
                CORE_MACRO
              </div>
              
              <div className="relative w-full h-full overflow-hidden bg-[var(--foreground)]/5">
                <Image 
                  src="/photo.png" 
                  alt="Debabrata Sahu" 
                  fill
                  className="object-cover grayscale-[20%] group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700" 
                />
                
                
                {/* Overlay & Scanline */}
                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] pointer-events-none" />
                <motion.div 
                  className="absolute left-0 w-full h-[1px] bg-[var(--color-accent)]/30 shadow-[0_0_8px_var(--color-accent)]"
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 5, ease: "linear", repeat: Infinity }}
                />
              </div>
            </div>

            {/* Simulated logic blocks (floating around the core) */}
            <div className="absolute top-8 left-8 w-16 h-8 border border-[var(--color-border)] bg-[var(--background)]/80 backdrop-blur-sm hidden sm:flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 z-20">
              <span className="text-[7px] font-mono tracking-wider text-[var(--color-muted)]">PLL_CLK</span>
            </div>
            
            <div className="absolute bottom-8 right-8 w-12 h-16 border border-[var(--color-border)] bg-[var(--background)]/80 backdrop-blur-sm hidden sm:flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200 z-20">
              <span className="text-[7px] font-mono tracking-wider text-[var(--color-muted)] -rotate-90">SRAM_1</span>
            </div>

            <div className="absolute bottom-8 left-8 w-20 h-6 border border-[var(--color-border)] bg-[var(--background)]/80 backdrop-blur-sm hidden sm:flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300 z-20">
              <span className="text-[7px] font-mono tracking-wider text-[var(--color-muted)]">ADC_FRONTEND</span>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 right-8 w-6 h-24 border border-[var(--color-border)] bg-[var(--background)]/80 backdrop-blur-sm hidden sm:flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-500 z-20">
              <span className="text-[7px] font-mono tracking-wider text-[var(--color-muted)] -rotate-90">DSP_MACRO</span>
            </div>
            
          </div>
        </div>
      </motion.div>

      {/* Highlight Area (Moved below the grid) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="w-full mt-16 pt-8 border-t border-[var(--color-border)]"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl">
          {PORTFOLIO_DATA.stats.map((stat, index) => (
            <div key={index} className="flex flex-col gap-2">
              <span className="text-lg md:text-xl font-medium tracking-tight text-[var(--foreground)] uppercase">
                {stat.value}
              </span>
              <span className="text-xs font-mono tracking-widest text-[var(--color-muted)] uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 right-6 md:right-12 flex items-center gap-4"
      >
        <span className="text-xs font-mono text-[var(--color-muted)] tracking-widest uppercase origin-right -translate-x-2">SCROLL</span>
        <div className="w-[1px] h-16 bg-[var(--color-border)] relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-[var(--foreground)]"
            animate={{ y: [0, 64, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
