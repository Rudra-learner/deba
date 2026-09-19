"use client";
import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { motion, AnimatePresence } from "framer-motion";

export function Experience() {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const selectedExp = PORTFOLIO_DATA.experience[selectedIdx];

  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[var(--color-border)] relative">
      <div className="mb-12 max-w-4xl flex items-end justify-between">
        <div>
          <h3 className="text-3xl md:text-5xl font-medium tracking-tight uppercase leading-[1.2]">
            INTERNSHIP AND TRAINING
          </h3>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start mt-16">
        
        {/* Left Side: Timeline List */}
        <div className="lg:w-2/5 flex flex-col relative w-full border-l border-[var(--color-border)]">
          {PORTFOLIO_DATA.experience.map((exp, idx) => (
            <div 
              key={idx} 
              onClick={() => setSelectedIdx(idx)}
              className={`relative pl-8 py-8 cursor-pointer group transition-all border-b border-[var(--color-border)] last:border-0 ${
                selectedIdx === idx ? 'bg-[var(--foreground)]/5' : 'hover:bg-[var(--foreground)]/5 hover:pl-10'
              }`}
            >
              {/* Timeline active dot */}
              <div className={`absolute left-[-5px] top-1/2 -translate-y-1/2 w-[9px] h-[9px] rounded-full transition-all duration-300 ${
                selectedIdx === idx ? 'bg-[var(--color-accent)] scale-125 shadow-[0_0_10px_var(--color-accent)]' : 'bg-[var(--color-border)] group-hover:bg-[var(--foreground)] group-hover:scale-110'
              }`} />
              
              <div className="flex flex-col gap-1">
                <span className={`text-xs font-mono tracking-widest uppercase transition-colors ${
                  selectedIdx === idx ? 'text-[var(--color-accent)]' : 'text-[var(--color-muted)] group-hover:text-[var(--foreground)]'
                }`}>
                  {exp.date}
                </span>
                <h4 className={`text-lg md:text-xl font-medium tracking-tight uppercase leading-[1.2] transition-colors ${
                  selectedIdx === idx ? 'text-[var(--foreground)]' : 'text-[var(--color-muted)] group-hover:text-[var(--foreground)]'
                }`}>
                  {exp.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Details Box (Sticky) */}
        <div className="lg:w-3/5 w-full lg:sticky lg:top-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIdx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="border border-[var(--color-border)] bg-[var(--background)] p-8 md:p-12 relative shadow-2xl"
            >
              {/* Top Accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-accent)] opacity-50" />
              
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-mono tracking-widest text-[var(--color-accent)] uppercase">
                    {selectedExp.date}
                  </span>
                  <h4 className="text-2xl md:text-4xl font-medium tracking-tight uppercase leading-[1.1] text-[var(--foreground)]">
                    {selectedExp.title}
                  </h4>
                  {selectedExp.project && (
                    <h5 className="text-base md:text-lg text-[var(--foreground)] font-mono uppercase mt-2">
                      {selectedExp.project}
                    </h5>
                  )}
                </div>

                <p className="text-base md:text-lg text-[var(--color-muted)] font-light leading-relaxed">
                  {selectedExp.description}
                </p>

                {selectedExp.details && selectedExp.details.length > 0 && (
                  <div className="flex flex-col gap-4 mt-2 border-t border-[var(--color-border)] pt-6">
                    <span className="text-xs font-mono tracking-widest text-[var(--foreground)] uppercase">Experience Highlights</span>
                    <ul className="flex flex-col gap-3">
                      {selectedExp.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]/80 mt-2 flex-shrink-0" />
                          <span className="text-sm md:text-base text-[var(--color-muted)] font-light leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
