"use client";
import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";


export function ResearchInterests() {
  return (
    <section id="research-interests" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[var(--color-border)]">
      <div className="mb-16 md:mb-24">
        <h3 className="text-3xl md:text-5xl font-medium tracking-tight uppercase leading-[1.2]">
          RESEARCH INTERESTS
        </h3>
      </div>

      <div className="flex flex-col border-t border-[var(--color-border)]">
        {PORTFOLIO_DATA.researchInterests.map((interest, idx) => (
          <div 
            key={idx} 
            className="group flex flex-col md:flex-row py-8 md:py-12 border-b border-[var(--color-border)] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors duration-500 px-4 md:px-8 -mx-4 md:-mx-8 cursor-default"
          >
            <div className="md:w-1/3 flex flex-col justify-between mb-4 md:mb-0 pr-4">
              <span className="text-xs font-mono tracking-widest uppercase text-[var(--color-accent)] group-hover:text-[var(--background)] opacity-80 mb-4 md:mb-12">
                0{idx + 1} //
              </span>
              <h4 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight uppercase leading-[1.1]">
                {interest.title}
              </h4>
            </div>
            <div className="md:w-2/3 md:pl-12 flex items-end">
              <p className="text-base md:text-lg font-light leading-relaxed text-[var(--color-muted)] group-hover:text-[var(--background)] group-hover:opacity-90 transition-colors duration-500">
                {interest.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
