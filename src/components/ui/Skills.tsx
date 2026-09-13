"use client";
import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[var(--color-border)]">
      <div className="mb-16 md:mb-24">
        <h2 className="text-sm font-mono tracking-widest text-[var(--color-muted)] uppercase mb-4">
          CORE COMPETENCIES
        </h2>
        <h3 className="text-3xl md:text-5xl font-medium tracking-tight uppercase leading-[1.2]">
          TECHNICAL SKILLS
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {PORTFOLIO_DATA.skills.map((skillGroup, idx) => (
          <div key={idx} className="flex flex-col gap-6">
            <h4 className="text-sm font-mono tracking-widest text-[var(--foreground)] border-b border-[var(--color-border)] pb-4 uppercase">
              {skillGroup.group}
            </h4>
            <ul className="flex flex-col gap-3">
              {skillGroup.items.map((item, itemIdx) => (
                <li key={itemIdx} className="text-base text-[var(--color-muted)] font-light flex items-center gap-3">
                  <span className="w-1 h-1 bg-[var(--color-accent)] rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
