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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PORTFOLIO_DATA.researchInterests.map((interest, idx) => (
          <div key={idx} className="flex flex-col p-8 border border-[var(--color-border)] bg-[var(--background)] hover:border-[var(--color-accent)] hover:shadow-[0_0_15px_rgba(var(--color-accent-rgb),0.1)] transition-all duration-300 group cursor-default">
            <div className="text-xs font-mono tracking-widest text-[var(--color-accent)] uppercase mb-6 opacity-70 group-hover:opacity-100 transition-opacity">
              0{idx + 1}
            </div>
            <h4 className="text-xl md:text-2xl font-medium tracking-tight uppercase leading-[1.3] text-[var(--foreground)] group-hover:text-[var(--color-accent)] transition-colors">
              {interest.title}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}
