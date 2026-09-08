"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ArrowDownRight, FileDown } from "lucide-react";

// Synthetic mechanical scrambling sound using Web Audio API
const playHoverSound = () => {
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    
    const audioCtx = new AudioContext();
    
    // Play a sequence of very short, slightly randomized ticks to sound like a digital scramble
    const numTicks = 12;
    const duration = 0.35;
    
    for (let i = 0; i < numTicks; i++) {
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      const filter = audioCtx.createBiquadFilter();
      
      const startTime = audioCtx.currentTime + (i * (duration / numTicks)) + (Math.random() * 0.01);
      
      oscillator.type = "square";
      oscillator.frequency.setValueAtTime(800 + Math.random() * 400, startTime);
      oscillator.frequency.exponentialRampToValueAtTime(100, startTime + 0.015);
      
      filter.type = "highpass";
      filter.frequency.value = 1000;
      
      gainNode.gain.setValueAtTime(0.03, startTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + 0.015);
      
      oscillator.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      oscillator.start(startTime);
      oscillator.stop(startTime + 0.015);
    }
  } catch (e) {
    console.error("Audio playback failed", e);
  }
};

const GlitchName = ({ text }: { text: string }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const textRef = useRef<HTMLHeadingElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    playHoverSound();
    let iteration = 0;
    
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      if (textRef.current) {
        textRef.current.innerText = text.split("").map((letter: string, index: number) => {
          if (index < iteration) {
            return text[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        }).join("");
      }
      
      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
      
      iteration += 1 / 2; // Speed of unscrambling
    }, 30);
  };

  return (
    <h1 
      ref={textRef}
      onMouseEnter={handleMouseEnter}
      data-value={text}
      className="text-5xl md:text-7xl lg:text-[6rem] font-medium leading-[1.05] tracking-tight text-balance uppercase cursor-crosshair transition-colors duration-300 hover:text-[var(--color-accent)]"
    >
      {text}.
    </h1>
  );
};

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-8 max-w-5xl"
      >
        <span className="text-xs md:text-sm font-mono tracking-widest text-[var(--color-muted)] uppercase">
          {PORTFOLIO_DATA.personal.role}
        </span>

        <GlitchName text={PORTFOLIO_DATA.personal.name} />

        <p className="text-xl md:text-2xl text-[var(--color-muted)] max-w-2xl font-light leading-relaxed">
          {PORTFOLIO_DATA.personal.shortBio}
        </p>

        <div className="flex flex-wrap gap-4 mt-4">
          <a
            href="#work"
            className="group flex items-center gap-2 bg-[var(--foreground)] text-[var(--background)] px-6 py-4 rounded-full text-sm font-medium tracking-wide transition-transform hover:scale-105"
          >
            VIEW MY WORK
            <ArrowDownRight size={16} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
          </a>
          <a
            href={PORTFOLIO_DATA.personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-transparent border border-[var(--color-border)] text-[var(--foreground)] px-6 py-4 rounded-full text-sm font-medium tracking-wide transition-all hover:border-[var(--foreground)]"
          >
            DOWNLOAD RESUME
            <FileDown size={16} />
          </a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-6 md:left-12 flex items-center gap-4"
      >
        <div className="w-[1px] h-12 bg-[var(--color-border)] relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-[var(--foreground)]"
            animate={{ y: [0, 50, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </div>
        <span className="text-xs font-mono text-[var(--color-muted)] tracking-widest uppercase rotate-90 origin-left translate-y-6">SCROLL</span>
      </motion.div>
    </section>
  );
}
