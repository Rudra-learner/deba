"use client";
import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Cpu } from "lucide-react";

export function About() {
  const timeline = [
    "Electronics & Communication Engineering",
    "Digital Electronics",
    "Digital Hardware",
    "RTL / Verilog",
    "FPGA Design",
    "Computer Arithmetic",
    "VLSI & IC Design",
    "Hardware Optimization",
    "Research Experience"
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[var(--color-border)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column: Timeline (Now Horizontal) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="text-sm font-mono tracking-widest text-[var(--color-muted)] uppercase">
            MY JOURNEY
          </div>
          
          <div className="flex flex-wrap gap-2">
            {timeline.map((step, index) => (
              <div 
                key={index} 
                className="text-xs md:text-sm font-mono tracking-widest text-[var(--foreground)] uppercase border border-[var(--color-border)] px-3 py-1.5 rounded-full hover:border-[var(--color-accent)] transition-colors"
              >
                {step}
              </div>
            ))}
          </div>
        </div>

        {/* Right Content Column */}
        <div className="lg:col-span-8 flex flex-col gap-10">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-[1.2] uppercase max-w-3xl">
            {PORTFOLIO_DATA.personal.aboutHeading}
          </h2>
          
          <div className="text-lg md:text-xl text-[var(--color-muted)] font-light leading-relaxed max-w-3xl whitespace-pre-line">
            {PORTFOLIO_DATA.personal.aboutBody}
          </div>

          <div className="mt-12 p-10 border border-[var(--color-border)] bg-[var(--background)] flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="relative z-10 flex flex-col items-center gap-6 text-[var(--color-muted)] transition-transform duration-700 group-hover:scale-105">
              <Cpu size={56} strokeWidth={1} className="text-[var(--foreground)]" />
              <div className="font-mono text-sm tracking-widest uppercase text-[var(--foreground)]">Hardware Architecture & VLSI</div>
            </div>
            
            {/* Abstract routing lines */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[var(--color-border)] -translate-y-1/2" />
            <div className="absolute left-1/2 top-0 w-[1px] h-full bg-[var(--color-border)] -translate-x-1/2" />
          </div>
        </div>
        
      </div>
    </section>
  );
}
