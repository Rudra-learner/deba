"use client";
import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Extracurricular() {
  const { extracurricular } = PORTFOLIO_DATA;

  if (!extracurricular || extracurricular.length === 0) return null;

  return (
    <section id="extracurricular" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[var(--color-border)]">
      <div className="mb-16 md:mb-24">
        <h3 className="text-3xl md:text-5xl font-medium tracking-tight uppercase leading-[1.2]">
          EXTRACURRICULAR ACTIVITIES
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
        {extracurricular.map((item: { date: string, title: string, role: string, institution: string, description?: string, details?: string[] }, idx: number) => (
          <div key={idx} className="flex flex-col h-full border border-[var(--color-border)] bg-[var(--background)] p-6 md:p-8 hover:border-[var(--color-accent)] transition-colors group">
            
            <div className="flex flex-col gap-2 mb-6">
              <span className="text-xs font-mono tracking-widest text-[var(--color-accent)] uppercase">
                {item.date}
              </span>
            </div>
            
            <h4 className="text-xl font-medium tracking-tight uppercase leading-[1.3] text-[var(--foreground)] mb-3 group-hover:text-[var(--color-accent)] transition-colors">
              {item.title}
            </h4>
            
            <div className="flex flex-col gap-1 mb-4">
              <span className="text-sm font-mono text-[var(--foreground)] opacity-90 uppercase">
                {item.role}
              </span>
              <span className="text-xs font-mono text-[var(--color-muted)] uppercase">
                {item.institution}
              </span>
            </div>
            
            {item.description && (
              <p className="text-sm text-[var(--color-muted)] font-light mt-2 flex-grow">
                {item.description}
              </p>
            )}
            
            {item.details && item.details.length > 0 && (
              <ul className="flex flex-col gap-3 mt-auto border-t border-[var(--color-border)]/50 pt-6">
                {item.details.map((detail: string, dIdx: number) => (
                  <li key={dIdx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]/50 mt-1.5 flex-shrink-0 group-hover:bg-[var(--color-accent)] transition-colors" />
                    <span className="text-sm text-[var(--color-muted)] font-light leading-relaxed">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
