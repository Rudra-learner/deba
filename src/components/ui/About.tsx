"use client";
import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";


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

      </div>
    </section>
  );
}
