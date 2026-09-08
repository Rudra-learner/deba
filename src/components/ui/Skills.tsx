"use client";
import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[var(--color-border)]">
      <div className="mb-16 md:mb-24">
        <div className="text-sm font-mono tracking-widest text-[var(--color-muted)] uppercase">
          03 / EXPERTISE
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
        {PORTFOLIO_DATA.skills.map((skillGroup, idx) => (
          <div key={idx} className="flex flex-col gap-8">
            <h4 className="text-sm font-mono tracking-widest text-[var(--foreground)] uppercase border-b border-[var(--color-border)] pb-4">
              {skillGroup.group}
            </h4>
            <ul className="flex flex-col gap-3">
              {skillGroup.items.map((item, itemIdx) => (
                <li key={itemIdx} className="text-lg text-[var(--color-muted)] font-light">
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
