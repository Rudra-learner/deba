"use client";
import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Education() {
  return (
    <section id="education" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[var(--color-border)]">
      <div className="mb-16 md:mb-24">
        <h2 className="text-sm font-mono tracking-widest text-[var(--color-muted)] uppercase mb-4">
          ACADEMIC BACKGROUND
        </h2>
        <h3 className="text-3xl md:text-5xl font-medium tracking-tight uppercase leading-[1.2]">
          EDUCATION
        </h3>
      </div>

      <div className="flex flex-col gap-16 md:gap-24">
        {PORTFOLIO_DATA.education.map((edu, idx) => (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 border-b border-[var(--color-border)] pb-16 last:border-0 last:pb-0">
            
            <div className="md:col-span-4 flex flex-col gap-2">
              <div className="text-xs font-mono tracking-widest text-[var(--color-accent)] uppercase">
                {edu.date}
              </div>
              <div className="text-lg font-mono tracking-widest text-[var(--foreground)] uppercase mt-2">
                {edu.cgpa}
              </div>
            </div>

            <div className="md:col-span-8 flex flex-col gap-4">
              <h4 className="text-2xl md:text-3xl font-medium tracking-tight uppercase leading-[1.2] text-[var(--foreground)]">
                {edu.degree}
              </h4>
              <div className="text-xl text-[var(--foreground)] font-light">
                {edu.university}
              </div>
              <p className="text-base md:text-lg text-[var(--color-muted)] font-light leading-relaxed mt-2">
                {edu.description}
              </p>

              {edu.details && edu.details.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {edu.details.map((detail, dIdx) => (
                    <span key={dIdx} className="text-xs font-mono tracking-widest text-[var(--color-muted)] uppercase border border-[var(--color-border)] px-3 py-1.5 rounded-sm">
                      {detail}
                    </span>
                  ))}
                </div>
              )}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
