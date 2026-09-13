"use client";
import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[var(--color-border)]">
      <div className="mb-16 md:mb-24">
        <h2 className="text-sm font-mono tracking-widest text-[var(--color-muted)] uppercase mb-4">
          RESEARCH & INTERNSHIP EXPERIENCE
        </h2>
        <h3 className="text-3xl md:text-5xl font-medium tracking-tight uppercase leading-[1.2]">
          ACADEMIC & INDUSTRY EXPOSURE
        </h3>
      </div>

      <div className="flex flex-col gap-16 md:gap-24 relative border-l border-[var(--color-border)] pl-8 md:pl-12 ml-4">
        {PORTFOLIO_DATA.experience.map((exp, idx) => (
          <div key={idx} className="relative">
            <span className="absolute -left-[37px] md:-left-[53px] top-2 w-2 h-2 rounded-full bg-[var(--foreground)] ring-4 ring-[var(--background)]" />
            
            <div className="flex flex-col gap-4 max-w-4xl">
              <div className="text-xs font-mono tracking-widest text-[var(--color-accent)] uppercase">
                {exp.date}
              </div>
              
              <h4 className="text-2xl md:text-3xl font-medium tracking-tight uppercase leading-[1.2] text-[var(--foreground)]">
                {exp.title}
              </h4>
              
              {exp.project && (
                <div className="text-lg md:text-xl font-mono text-[var(--foreground)]">
                  {exp.project}
                </div>
              )}
              
              <p className="text-base md:text-lg text-[var(--color-muted)] font-light leading-relaxed mt-2">
                {exp.description}
              </p>
              
              {exp.details && exp.details.length > 0 && (
                <ul className="flex flex-col gap-3 mt-4">
                  {exp.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-muted)] mt-2 flex-shrink-0" />
                      <span className="text-base text-[var(--color-muted)] font-light">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
