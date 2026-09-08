"use client";
import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Cpu } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Stats Column */}
        <div className="lg:col-span-4 flex flex-col gap-12">
          <div className="text-sm font-mono tracking-widest text-[var(--color-muted)] uppercase">
            01 / ABOUT
          </div>
          
          <div className="flex flex-col gap-8">
            {PORTFOLIO_DATA.stats.map((stat, index) => (
              <div key={index} className="flex flex-col gap-1">
                <span className="text-4xl md:text-5xl font-light tracking-tight text-[var(--foreground)]">
                  {stat.value}
                </span>
                <span className="text-xs font-mono tracking-widest text-[var(--color-muted)] uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content Column */}
        <div className="lg:col-span-8 flex flex-col gap-10 lg:pt-16">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-[1.2] uppercase max-w-3xl">
            {PORTFOLIO_DATA.personal.aboutHeading}
          </h2>
          
          <div className="text-lg md:text-xl text-[var(--color-muted)] font-light leading-relaxed max-w-2xl whitespace-pre-line">
            {PORTFOLIO_DATA.personal.aboutBody}
          </div>

          {/* Technical Graphic Abstraction */}
          <div className="mt-12 p-8 border border-[var(--color-border)] rounded-sm bg-[#fcfcfc] flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="relative z-10 flex flex-col items-center gap-4 text-[var(--color-muted)] transition-transform duration-700 group-hover:scale-105">
              <Cpu size={48} strokeWidth={1} />
              <div className="font-mono text-xs tracking-widest uppercase">RTL Architecture Synthesis</div>
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
