"use client";
import React from "react";
import { motion } from "framer-motion";

const skills = [
  "RTL DESIGN",
  "VERILOG",
  "SYSTEMVERILOG",
  "FPGA",
  "DIGITAL VLSI",
  "VERIFICATION",
  "EMBEDDED SYSTEMS",
  "HARDWARE RESEARCH"
];

export function Marquee() {
  return (
    <div className="w-full overflow-hidden border-y border-[var(--color-border)] py-4 bg-[var(--background)]">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex gap-8 md:gap-16 px-4 md:px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {/* Duplicate the array twice for seamless looping */}
          {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
            <span
              key={index}
              className="text-sm md:text-base font-mono tracking-widest text-[var(--foreground)] uppercase flex items-center gap-8 md:gap-16"
            >
              {skill}
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] inline-block opacity-50" />
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
