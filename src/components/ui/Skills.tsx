"use client";
import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  TerminalSquare, 
  Cpu, 
  CircuitBoard, 
  Settings, 
  Wrench, 
  Layers, 
  Activity,
  Monitor,
  Box,
  BrainCircuit,
  Calculator,
  SearchCode,
  ChevronDown
} from "lucide-react";

const getIconForSkill = (skill: string) => {
  const s = skill.toLowerCase();
  
  // HDL & Programming
  if (s.includes("verilog")) return <CircuitBoard size={16} />;
  if (s.includes("python") || s.includes("c") || s.includes("html")) return <Code2 size={16} />;
  if (s.includes("matlab") || s.includes("assembly")) return <TerminalSquare size={16} />;
  
  // VLSI & EDA
  if (s.includes("cadence") || s.includes("xilinx") || s.includes("eda") || s.includes("tcad")) return <Cpu size={16} />;
  
  // Digital Hardware
  if (s.includes("vlsi")) return <Cpu size={16} />;
  if (s.includes("rtl design")) return <CircuitBoard size={16} />;
  if (s.includes("verification")) return <SearchCode size={16} />;
  if (s.includes("arithmetic") || s.includes("logic")) return <Calculator size={16} />;
  if (s.includes("hardware architecture")) return <Layers size={16} />;
  
  // Embedded & IoT
  if (s.includes("embedded") || s.includes("microcontroller")) return <Cpu size={16} />;
  if (s.includes("arduino") || s.includes("esp32")) return <Box size={16} />;
  if (s.includes("sensor") || s.includes("iot") || s.includes("thingspeak")) return <Activity size={16} />;
  if (s.includes("debugging")) return <Wrench size={16} />;
  
  // Dev Tools
  if (s.includes("vs code") || s.includes("ide") || s.includes("studio")) return <Monitor size={16} />;
  
  // Machine Learning
  if (s.includes("machine learning") || s.includes("ml")) return <BrainCircuit size={16} />;
  
  return <Settings size={16} />;
};

function SkillAccordion({ group, items, isOpen, onToggle }: { group: string, items: string[], isOpen: boolean, onToggle: () => void }) {
  return (
    <div className={`border border-[var(--color-border)] transition-colors duration-300 ${isOpen ? 'bg-[var(--foreground)]/5 border-[var(--color-accent)]/50' : 'bg-[var(--background)] hover:border-[var(--color-accent)]'}`}>
      <button 
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 md:p-8 cursor-pointer select-none"
      >
        <h4 className={`text-sm md:text-base font-mono tracking-widest uppercase transition-colors ${isOpen ? 'text-[var(--color-accent)]' : 'text-[var(--foreground)]'}`}>
          {group}
        </h4>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={isOpen ? 'text-[var(--color-accent)]' : 'text-[var(--color-muted)]'}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-6 md:p-8 pt-0 border-t border-[var(--color-border)]/50 mt-2">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                {items.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-sm md:text-base text-[var(--color-muted)] font-light flex items-center gap-4 hover:text-[var(--foreground)] transition-colors group">
                    <div className="p-2 border border-[var(--color-border)] rounded-md bg-[var(--background)] text-[var(--color-muted)] group-hover:text-[var(--color-accent)] group-hover:border-[var(--color-accent)] transition-colors">
                      {getIconForSkill(item)}
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Skills() {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // first one open by default

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[var(--color-border)] relative z-10">
      <div className="mb-16 md:mb-24">
        <h3 className="text-3xl md:text-5xl font-medium tracking-tight uppercase leading-[1.2]">
          TECHNICAL SKILLS
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl">
        {PORTFOLIO_DATA.skills.map((skillGroup, idx) => (
          <SkillAccordion 
            key={idx}
            group={skillGroup.group}
            items={skillGroup.items}
            isOpen={openIdx === idx}
            onToggle={() => toggleAccordion(idx)}
          />
        ))}
      </div>
    </section>
  );
}
