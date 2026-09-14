"use client";
import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
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
  SearchCode
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

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[var(--color-border)]">
      <div className="mb-16 md:mb-24">
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
                <li key={itemIdx} className="text-base text-[var(--color-muted)] font-light flex items-center gap-4 hover:text-[var(--foreground)] transition-colors group">
                  <div className="p-2 border border-[var(--color-border)] rounded-md bg-[var(--background)] text-[var(--color-muted)] group-hover:text-[var(--color-accent)] group-hover:border-[var(--color-accent)] transition-colors">
                    {getIconForSkill(item)}
                  </div>
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
