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
    </section>
  );
}
