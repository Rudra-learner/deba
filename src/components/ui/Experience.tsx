"use client";
import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Experience() {
  const { experience } = PORTFOLIO_DATA;
  
  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[var(--color-border)]">
      <div className="mb-16 md:mb-24">
        <div className="text-sm font-mono tracking-widest text-[var(--color-muted)] uppercase">
          04 / EXPERIENCE
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <h3 className="text-3xl md:text-5xl font-medium tracking-tight uppercase leading-[1.1]">
            {experience.title}
          </h3>
          <div className="mt-6 text-xl font-light text-[var(--color-muted)]">
            {experience.company}
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-8">
          <div className="text-lg md:text-xl text-[var(--foreground)] font-medium uppercase tracking-wide border-b border-[var(--color-border)] pb-6">
            Project: {experience.project}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 pt-4">
            {experience.details.map((detail, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <span className="text-[var(--color-accent)] mt-1.5 opacity-70">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="text-lg text-[var(--color-muted)] font-light leading-relaxed">
                  {detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
