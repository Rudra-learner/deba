"use client";
import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="px-6 md:px-12 py-12 border-t border-[var(--color-border)] max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        
        <div className="flex flex-col gap-4">
          <div className="text-xl font-medium tracking-tight">
            {PORTFOLIO_DATA.personal.name}
          </div>
          <div className="text-xs font-mono tracking-widest text-[var(--color-muted)] uppercase">
            VLSI • RTL • FPGA • EMBEDDED
          </div>
          <div className="text-sm text-[var(--color-muted)] font-light mt-4">
            © 2026 {PORTFOLIO_DATA.personal.name}. All rights reserved.
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end gap-8 w-full md:w-auto">
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono tracking-widest text-[var(--color-muted)] hover:text-[var(--foreground)] uppercase transition-colors"
          >
            BACK TO TOP
            <ArrowUp size={14} />
          </button>
          
          <div className="flex flex-wrap gap-6 md:gap-8">
            <a href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--foreground)] hover:text-[var(--color-accent)] transition-colors">
              GitHub
            </a>
            <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--foreground)] hover:text-[var(--color-accent)] transition-colors">
              LinkedIn
            </a>
            <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="text-sm text-[var(--foreground)] hover:text-[var(--color-accent)] transition-colors">
              Email
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
