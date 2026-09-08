"use client";
import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ArrowDown } from "lucide-react";

export function CareerPath() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[var(--color-border)]">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight uppercase mb-8">
          WHERE I'M HEADED
        </h2>
        <p className="text-lg md:text-xl text-[var(--color-muted)] font-light leading-relaxed mb-20">
          My goal is to grow into a VLSI engineer working in RTL design, FPGA development or design verification.
        </p>

        <div className="flex flex-col items-center gap-4 w-full">
          {PORTFOLIO_DATA.careerPath.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="text-lg md:text-2xl font-mono tracking-widest uppercase text-[var(--foreground)] py-2">
                {step}
              </div>
              {idx < PORTFOLIO_DATA.careerPath.length - 1 && (
                <div className="text-[var(--color-muted)] opacity-50 py-2">
                  <ArrowDown size={24} strokeWidth={1} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
