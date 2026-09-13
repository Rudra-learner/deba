"use client";
import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";


export function ResearchInterests() {
  return (
    <section id="research-interests" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[var(--color-border)]">
      <div className="mb-16 md:mb-24">
        <h2 className="text-sm font-mono tracking-widest text-[var(--color-muted)] uppercase mb-4">
          WHAT I WANT TO EXPLORE
        </h2>
        <h3 className="text-3xl md:text-5xl font-medium tracking-tight uppercase leading-[1.2]">
          RESEARCH INTERESTS
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PORTFOLIO_DATA.researchInterests.map((interest, idx) => (
          <div key={idx} className="flex flex-col p-8 border border-[var(--color-border)] bg-[var(--background)] hover:border-[var(--foreground)] transition-colors duration-300">
            <div className="text-xs font-mono tracking-widest text-[var(--color-muted)] uppercase mb-6">
              0{idx + 1}
            </div>
            <h4 className="text-xl md:text-2xl font-medium tracking-tight uppercase leading-[1.3] mb-4 text-[var(--foreground)]">
              {interest.title}
            </h4>
            <p className="text-base text-[var(--color-muted)] font-light leading-relaxed">
              {interest.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
