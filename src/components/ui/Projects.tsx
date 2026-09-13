"use client";
import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[var(--color-border)]">
      <div className="mb-20 md:mb-32 max-w-4xl">
        <h2 className="text-sm font-mono tracking-widest text-[var(--color-muted)] uppercase mb-4">
          SELECTED PROJECTS
        </h2>
        <h3 className="text-3xl md:text-5xl font-medium tracking-tight uppercase leading-[1.2] mb-6">
          From RTL architectures and FPGA implementations to VLSI, mixed-signal design, and engineering systems.
        </h3>
      </div>

      <div className="flex flex-col gap-32">
        {PORTFOLIO_DATA.projects.map((project, idx) => (
          <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative">
            
            {/* Left side: Content */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-mono tracking-widest text-[var(--color-accent)] uppercase">
                  PROJECT {project.id} — {project.category}
                </span>
                <h4 className="text-3xl md:text-4xl font-medium tracking-tight uppercase leading-[1.1] text-[var(--foreground)]">
                  {project.title}
                </h4>
                {project.subtitle && (
                  <h5 className="text-lg text-[var(--foreground)] font-mono uppercase mt-2">
                    {project.subtitle}
                  </h5>
                )}
              </div>

              <p className="text-lg text-[var(--color-muted)] font-light leading-relaxed">
                {project.description}
              </p>

              {project.focus && (
                <div className="flex flex-col gap-3 mt-4">
                  <span className="text-xs font-mono tracking-widest text-[var(--foreground)] uppercase">Focus Areas</span>
                  <ul className="flex flex-col gap-2">
                    {project.focus.map((f, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="w-1 h-1 rounded-full bg-[var(--color-muted)]" />
                        <span className="text-sm text-[var(--color-muted)]">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.technologies && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="text-xs font-mono tracking-widest text-[var(--foreground)] uppercase border border-[var(--color-border)] px-3 py-1.5 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Right side: Visuals / Architecture / Evaluation */}
            <div className="lg:col-span-7 flex flex-col gap-12">
              {/* Visual Placeholder */}
              <div className="w-full aspect-[4/3] bg-[var(--foreground)]/5 border border-[var(--color-border)] relative flex flex-col items-center justify-center overflow-hidden group">
                <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
                <span className="relative z-10 text-xs font-mono tracking-widest text-[var(--color-muted)] uppercase group-hover:text-[var(--foreground)] transition-colors">
                  [ Visual placeholder for {project.title} ]
                </span>
                <span className="relative z-10 text-[10px] font-mono text-[var(--color-muted)] uppercase mt-2 opacity-50">
                  Awaiting actual screenshots/results
                </span>
              </div>

            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
