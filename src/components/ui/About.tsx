"use client";
import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Cpu } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[var(--color-border)]">
      <div className="flex flex-col gap-10 max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-[1.2] uppercase">
          {PORTFOLIO_DATA.personal.aboutHeading}
        </h2>
        
        <div className="text-lg md:text-xl text-[var(--color-muted)] font-light leading-relaxed whitespace-pre-line">
          {PORTFOLIO_DATA.personal.aboutBody}
        </div>

        <div className="mt-12 border border-[var(--color-border)] bg-[var(--background)] relative overflow-hidden group aspect-video max-h-[400px]">
          <img 
            src="/about-hardware.jpg" 
            alt="Hardware Architecture & VLSI"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center gap-3">
            <Cpu size={24} className="text-[var(--color-accent)]" />
            <div className="font-mono text-sm tracking-widest uppercase text-white drop-shadow-md">Hardware Architecture & VLSI</div>
          </div>
        </div>
      </div>
    </section>
  );
}
