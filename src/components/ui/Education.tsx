"use client";
import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Education() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    setExpandedIdx(expandedIdx === idx ? null : idx);
  };

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
        {PORTFOLIO_DATA.education.map((edu, idx) => {
          const isExpanded = expandedIdx === idx;
          const hasDetails = edu.details && edu.details.length > 0;
          const isLongDescription = edu.description.length > 120;
          const needsReadMore = hasDetails || isLongDescription;

          return (
            <div key={idx} className="flex flex-col h-full border border-[var(--color-border)] bg-[var(--background)] p-6 md:p-8 hover:border-[var(--color-accent)] transition-colors group">
              
              <div className="flex flex-col gap-2 mb-6">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-mono tracking-widest text-[var(--color-accent)] uppercase">
                    {edu.date}
                  </span>
                  <span className="text-xs font-mono tracking-widest text-[var(--foreground)] uppercase bg-[var(--foreground)]/5 px-2 py-1">
                    {edu.cgpa}
                  </span>
                </div>
              </div>

              <h4 className="text-xl md:text-2xl font-medium tracking-tight uppercase leading-[1.2] text-[var(--foreground)] mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                {edu.degree}
              </h4>
              
              <div className="text-sm font-mono text-[var(--foreground)] uppercase mb-4 opacity-80">
                {edu.university}
              </div>
              
              <p className={`text-sm md:text-base text-[var(--color-muted)] font-light leading-relaxed flex-grow ${isExpanded ? '' : 'line-clamp-3'}`}>
                {edu.description}
              </p>

              {needsReadMore && (
                <button 
                  onClick={() => toggleExpand(idx)}
                  className="text-xs font-mono tracking-widest text-[var(--color-foreground)] border border-[var(--color-border)] px-4 py-2 mt-6 uppercase hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors self-start"
                >
                  {isExpanded ? "Show Less" : "Read More"}
                </button>
              )}

              {isExpanded && hasDetails && (
                <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t border-[var(--color-border)]/50">
                  {edu.details.map((detail, dIdx) => (
                    <span key={dIdx} className="text-[10px] md:text-xs font-mono tracking-widest text-[var(--color-muted)] uppercase border border-[var(--color-border)] px-2 py-1 rounded-sm">
                      {detail}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
