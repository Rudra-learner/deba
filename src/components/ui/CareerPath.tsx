"use client";
import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ArrowDown } from "lucide-react";

export function CareerPath() {
  return (
    <section id="career-path" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[var(--color-border)] bg-[var(--background)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Side: Description */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-sm font-mono tracking-widest text-[var(--color-muted)] uppercase">
              FUTURE GOALS
            </h2>
            <h3 className="text-3xl md:text-5xl font-medium tracking-tight uppercase leading-[1.2]">
              FROM UNDERGRADUATE PROJECTS TO VLSI RESEARCH
            </h3>
          </div>
          
          <div className="text-lg md:text-xl text-[var(--color-muted)] font-light leading-relaxed whitespace-pre-line">
            {PORTFOLIO_DATA.careerPathDesc}
          </div>
        </div>

        {/* Right Side: Visual Flow */}
        <div className="lg:col-span-5 flex flex-col items-center w-full pt-8 lg:pt-0">
          
          {/* Top Node */}
          <div className="px-6 py-4 border border-[var(--color-border)] text-sm md:text-base font-mono tracking-widest uppercase text-[var(--foreground)] w-full text-center bg-[var(--foreground)]/5 shadow-sm">
            VLSI & DIGITAL HARDWARE
          </div>
          
          {/* Stem down */}
          <div className="w-[1px] h-6 bg-[var(--color-border)]" />
          
          {/* Horizontal Branch */}
          <div className="w-full md:w-[90%] h-[1px] bg-[var(--color-border)] relative">
            <div className="absolute left-0 top-0 w-[1px] h-6 bg-[var(--color-border)]" />
            <div className="absolute right-0 top-0 w-[1px] h-6 bg-[var(--color-border)]" />
            <div className="absolute left-1/2 top-0 w-[1px] h-6 bg-[var(--color-border)] -translate-x-1/2" />
          </div>
          
          {/* Gap for stems to reach boxes */}
          <div className="h-6 w-full" />
          
          {/* 3 Middle Nodes */}
          <div className="w-full md:w-[90%] flex justify-between relative -mt-6">
            <div className="w-[30%] text-center text-xs font-mono border border-[var(--color-border)] py-2 bg-[var(--foreground)]/5">Digital IC<br/>Design</div>
            <div className="w-[30%] text-center text-xs font-mono border border-[var(--color-border)] py-2 bg-[var(--foreground)]/5">Computer<br/>Arithmetic</div>
            <div className="w-[30%] text-center text-xs font-mono border border-[var(--color-border)] py-2 bg-[var(--foreground)]/5">Hardware<br/>Architectures</div>
          </div>
          
          {/* Stems down from middle nodes */}
          <div className="w-full md:w-[90%] flex justify-between relative">
            <div className="w-[30%] flex justify-center"><div className="w-[1px] h-6 bg-[var(--color-border)]" /></div>
            <div className="w-[30%] flex justify-center"><div className="w-[1px] h-6 bg-[var(--color-border)]" /></div>
            <div className="w-[30%] flex justify-center"><div className="w-[1px] h-6 bg-[var(--color-border)]" /></div>
          </div>
          
          {/* Horizontal merge */}
          <div className="w-full md:w-[90%] h-[1px] bg-[var(--color-border)] relative">
            <div className="absolute left-1/2 top-0 w-[1px] h-6 bg-[var(--color-border)] -translate-x-1/2" />
          </div>
          
          {/* Stem down to bottom nodes */}
          <div className="h-6 w-full" />
          
          <div className="flex flex-col items-center gap-0 w-full relative -mt-6">
            <div className="px-6 py-3 border border-[var(--color-border)] text-sm font-mono tracking-widest uppercase text-[var(--foreground)] w-full text-center bg-[var(--foreground)]/5 shadow-sm">
              Approximate Computing
            </div>
            <div className="w-[1px] h-6 bg-[var(--color-border)]" />
            <div className="px-6 py-3 border border-[var(--color-border)] text-sm font-mono tracking-widest uppercase text-[var(--foreground)] w-full text-center bg-[var(--foreground)]/5 shadow-sm">
              FPGA Computing
            </div>
            <div className="w-[1px] h-6 bg-[var(--color-border)]" />
            <div className="px-6 py-3 border border-[var(--color-border)] text-sm font-mono tracking-widest uppercase text-[var(--foreground)] w-full text-center bg-[var(--foreground)]/5 shadow-sm">
              EDA & Optimization
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
