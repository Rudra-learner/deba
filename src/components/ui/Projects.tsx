"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ArrowRight, X, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const activeProject = PORTFOLIO_DATA.projects.find(p => p.id === selectedProject);

  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16 md:mb-24">
        <div className="text-sm font-mono tracking-widest text-[var(--color-muted)] uppercase">
          02 / SELECTED WORK
        </div>
      </div>

      <div className="flex flex-col gap-32">
        {PORTFOLIO_DATA.projects.map((project, idx) => (
          <div key={project.id} className="group relative flex flex-col md:flex-row gap-8 md:gap-16 items-start">
            
            {/* Project Info */}
            <div className="flex-1 flex flex-col gap-6 md:sticky md:top-32 z-10">
              <div className="flex items-center gap-4">
                <span className="text-sm font-mono text-[var(--color-muted)]">{project.id}</span>
                <span className="w-8 h-[1px] bg-[var(--color-border)]" />
                <span className="text-xs font-mono tracking-widest text-[var(--color-accent)] uppercase">{project.category}</span>
              </div>
              
              <h3 className="text-3xl md:text-5xl font-medium tracking-tight uppercase leading-[1.1]">
                {project.title}
              </h3>
              
              <p className="text-lg text-[var(--color-muted)] font-light leading-relaxed max-w-xl">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="text-xs font-mono border border-[var(--color-border)] px-3 py-1 rounded-full text-[var(--color-muted)] uppercase">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-6">
                <button 
                  onClick={() => setSelectedProject(project.id)}
                  className="flex items-center gap-2 text-sm font-medium tracking-widest uppercase hover:text-[var(--color-accent)] transition-colors"
                >
                  VIEW DETAILS
                  <ArrowRight size={16} />
                </button>
                {project.github && !project.github.includes("YOUR GITHUB") && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[var(--color-muted)] hover:text-[var(--foreground)] transition-colors">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>

            {/* Project Visual (Placeholder for actual hardware graphic/waveform) */}
            <div 
              className="flex-1 w-full aspect-[4/3] bg-[#f5f5f5] border border-[var(--color-border)] rounded-sm overflow-hidden relative cursor-pointer"
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:20px_20px]" />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="w-full h-full border border-[var(--color-border)]/50 bg-white/50 flex flex-col items-center justify-center text-[var(--color-muted)] text-sm font-mono uppercase tracking-widest gap-4 group-hover:scale-105 transition-transform duration-700">
                  <span>[ Visual Placeholder ]</span>
                  <span className="text-xs text-[var(--color-muted)]/70">Technical diagram / Waveform / Architecture</span>
                </div>
              </div>
            </div>
            
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[var(--background)] overflow-y-auto"
          >
            <div className="min-h-screen relative p-6 md:p-12 lg:p-24 max-w-5xl mx-auto flex flex-col gap-12">
              <button 
                onClick={() => setSelectedProject(null)}
                className="fixed top-8 right-8 md:top-12 md:right-12 z-50 p-4 bg-[var(--background)] border border-[var(--color-border)] rounded-full hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col gap-6 mt-16 md:mt-0">
                <span className="text-xs font-mono tracking-widest text-[var(--color-accent)] uppercase">{activeProject.category}</span>
                <h2 className="text-4xl md:text-6xl font-medium tracking-tight uppercase leading-[1.1]">{activeProject.title}</h2>
              </div>

              <div className="w-full aspect-video bg-[#f5f5f5] border border-[var(--color-border)] rounded-sm overflow-hidden relative flex items-center justify-center">
                 <div className="text-[var(--color-muted)] font-mono text-sm tracking-widest uppercase">[ Detailed Architecture / Schematic View ]</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8">
                <div className="md:col-span-2 flex flex-col gap-12">
                  <div className="flex flex-col gap-4">
                    <h4 className="text-sm font-mono tracking-widest text-[var(--color-muted)] uppercase">Problem Statement</h4>
                    <p className="text-lg font-light text-[var(--foreground)] leading-relaxed">{activeProject.details.problem}</p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h4 className="text-sm font-mono tracking-widest text-[var(--color-muted)] uppercase">Objective</h4>
                    <p className="text-lg font-light text-[var(--foreground)] leading-relaxed">{activeProject.details.objective}</p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h4 className="text-sm font-mono tracking-widest text-[var(--color-muted)] uppercase">Architecture & Methodology</h4>
                    <p className="text-lg font-light text-[var(--foreground)] leading-relaxed">{activeProject.details.architecture}</p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h4 className="text-sm font-mono tracking-widest text-[var(--color-muted)] uppercase">Results / Observations</h4>
                    <p className="text-lg font-light text-[var(--foreground)] leading-relaxed">{activeProject.details.results}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-8 md:border-l md:border-[var(--color-border)] md:pl-12">
                  <div className="flex flex-col gap-4">
                    <h4 className="text-sm font-mono tracking-widest text-[var(--color-muted)] uppercase">Technologies</h4>
                    <ul className="flex flex-col gap-2">
                      {activeProject.technologies.map(tech => (
                        <li key={tech} className="text-base font-light text-[var(--foreground)]">{tech}</li>
                      ))}
                    </ul>
                  </div>
                  
                  {activeProject.github && !activeProject.github.includes("YOUR GITHUB") && (
                    <a 
                      href={activeProject.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-mono tracking-widest text-[var(--foreground)] hover:text-[var(--color-accent)] uppercase mt-4 transition-colors"
                    >
                      <ExternalLink size={16} />
                      View Source
                    </a>
                  )}
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
