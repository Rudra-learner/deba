"use client";
import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Workshops() {
  const { workshops } = PORTFOLIO_DATA as any;

  if (!workshops || workshops.length === 0) return null;

  return (
    <section id="workshops" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[var(--color-border)]">
      <div className="mb-16 md:mb-24">
        <h3 className="text-3xl md:text-5xl font-medium tracking-tight uppercase leading-[1.2]">
          WORKSHOPS & TECHNICAL LEADERSHIP
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
        {workshops.map((item: { date: string, title: string, description?: string }, idx: number) => (
          <div key={idx} className="flex flex-col h-full border border-[var(--color-border)] bg-[var(--background)] p-6 md:p-8 hover:border-[var(--color-accent)] transition-colors group">
            
            <div className="flex flex-col gap-2 mb-6">
              <span className="text-xs font-mono tracking-widest text-[var(--color-accent)] uppercase">
                {item.date}
              </span>
            </div>
            
            <h4 className="text-xl font-medium tracking-tight uppercase leading-[1.3] text-[var(--foreground)] mb-3 group-hover:text-[var(--color-accent)] transition-colors">
              {item.title}
            </h4>
            
            {item.description && (
              <p className="text-sm text-[var(--color-muted)] font-light mt-2 flex-grow">
                {item.description}
              </p>
            )}
            
          </div>
        ))}
      </div>
    </section>
  );
}
