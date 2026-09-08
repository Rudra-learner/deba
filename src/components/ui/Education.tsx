"use client";
import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Education() {
  const { education, achievements } = PORTFOLIO_DATA;

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[var(--color-border)]">
      <div className="mb-16 md:mb-24">
        <div className="text-sm font-mono tracking-widest text-[var(--color-muted)] uppercase">
          05 / EDUCATION
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
        
        {/* Education Info */}
        <div className="flex flex-col gap-6">
          <div className="text-xs font-mono tracking-widest text-[var(--color-muted)] uppercase mb-2">
            {education.startYear} — {education.endYear}
          </div>
          <h3 className="text-3xl md:text-5xl font-medium tracking-tight uppercase leading-[1.1]">
            {education.degree}
          </h3>
          <div className="text-xl text-[var(--color-muted)] font-light mt-4">
            {education.university}
          </div>
          <div className="inline-flex items-center gap-4 mt-6">
            <span className="text-sm font-mono tracking-widest text-[var(--foreground)] border border-[var(--color-border)] px-4 py-2 rounded-full">
              CGPA: {education.cgpa}
            </span>
          </div>
        </div>

        {/* Achievements */}
        <div className="flex flex-col gap-8 lg:pl-16 lg:border-l border-[var(--color-border)]">
          <h4 className="text-sm font-mono tracking-widest text-[var(--color-muted)] uppercase">
            SELECTED ACHIEVEMENTS
          </h4>
          <ul className="flex flex-col gap-6">
            {achievements.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--foreground)] mt-2.5 opacity-50 flex-shrink-0" />
                <span className="text-lg text-[var(--foreground)] font-light leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
