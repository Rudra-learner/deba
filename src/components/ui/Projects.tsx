"use client";
import React, { useState, useRef } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, ChevronLeft } from "lucide-react";

export function Projects() {
  type ProjectType = typeof PORTFOLIO_DATA.projects[0];
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Drag to scroll state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragMoved, setDragMoved] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setDragMoved(false);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    if (Math.abs(walk) > 10) setDragMoved(true);
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[var(--color-border)] relative">
      <div className="mb-12 max-w-4xl flex items-end justify-between">
        <div>
          <h3 className="text-3xl md:text-5xl font-medium tracking-tight uppercase leading-[1.2]">
            PROJECTS
          </h3>
        </div>
        
        {/* Navigation Buttons for horizontal scroll */}
        <div className="hidden md:flex gap-4">
          <button onClick={() => scroll('left')} className="p-3 border border-[var(--color-border)] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors rounded-full">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => scroll('right')} className="p-3 border border-[var(--color-border)] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors rounded-full">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Horizontal scrolling container */}
      <div 
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`flex overflow-x-auto gap-8 pb-12 hide-scrollbar relative items-stretch ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {PORTFOLIO_DATA.projects.map((project) => (
          <motion.div 
            key={project.id} 
            whileHover={{ y: -10 }}
            onClick={() => !dragMoved && setSelectedProject(project)}
            className="w-[320px] md:w-[400px] flex-shrink-0 group flex flex-col border border-[var(--color-border)] bg-[var(--background)] p-6 hover:border-[var(--color-accent)] transition-all select-none"
          >
            <div className="w-full aspect-[4/3] bg-[var(--foreground)]/5 border border-[var(--color-border)]/50 relative overflow-hidden mb-6 flex items-center justify-center flex-shrink-0 group-hover:border-[var(--color-accent)] transition-colors">
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    if (e.currentTarget.nextElementSibling) {
                      (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
              ) : null}
              
              <div 
                className={`absolute inset-0 flex flex-col items-center justify-center ${project.image ? 'hidden' : 'flex'}`}
                style={{ zIndex: project.image ? -1 : 1 }}
              >
                <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />
                <span className="text-xs font-mono text-[var(--color-muted)] uppercase tracking-widest pointer-events-none relative z-10">
                  [ Photo ]
                </span>
              </div>
            </div>
            
            <div className="flex flex-col gap-2 flex-grow">
              <span className="text-xs font-mono tracking-widest text-[var(--color-accent)] uppercase pointer-events-none">
                {project.category}
              </span>
              <h4 className="text-xl md:text-2xl font-medium tracking-tight uppercase leading-[1.2] text-[var(--foreground)] group-hover:text-[var(--color-accent)] transition-colors pointer-events-none line-clamp-3">
                {project.title}
              </h4>
            </div>
            
            <div className="mt-8 text-sm font-mono tracking-widest uppercase border-t border-[var(--color-border)] pt-4 text-[var(--color-muted)] group-hover:text-[var(--foreground)] transition-colors flex justify-between items-center pointer-events-none">
              <span>View Details</span>
              <ChevronRight size={16} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[var(--background)] border border-[var(--color-border)] p-6 md:p-12 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 hover:bg-[var(--foreground)]/10 transition-colors rounded-full"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col gap-6 md:gap-8 pr-4 md:pr-12">
                
                {/* Header Section */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-mono tracking-widest text-[var(--color-accent)] uppercase">
                    PROJECT {selectedProject.id} — {selectedProject.category}
                  </span>
                  <h4 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight uppercase leading-[1.1] text-[var(--foreground)]">
                    {selectedProject.title}
                  </h4>
                  {selectedProject.subtitle && (
                    <h5 className="text-base md:text-lg text-[var(--foreground)] font-mono uppercase mt-1">
                      {selectedProject.subtitle}
                    </h5>
                  )}
                </div>

                {/* Two Column Layout for Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  
                  {/* Left Column: Image and Tech Stack */}
                  <div className="flex flex-col gap-6">
                    {/* Photo in modal */}
                    <div className="w-full aspect-video bg-[var(--foreground)]/5 border border-[var(--color-border)] relative flex flex-col items-center justify-center overflow-hidden">
                      {selectedProject.image ? (
                        <img 
                          src={selectedProject.image} 
                          alt={selectedProject.title} 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                            if (e.currentTarget.nextElementSibling) {
                              (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                            }
                          }}
                        />
                      ) : null}
                      
                      <div 
                        className={`absolute inset-0 flex flex-col items-center justify-center ${selectedProject.image ? 'hidden' : 'flex'}`}
                        style={{ zIndex: selectedProject.image ? -1 : 1 }}
                      >
                        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
                        <span className="relative z-10 text-xs font-mono tracking-widest text-[var(--color-muted)] uppercase text-center px-4">
                          [ Photo placeholder ]
                        </span>
                      </div>
                    </div>

                    {selectedProject.technologies && (
                      <div className="flex flex-col gap-3">
                        <span className="text-xs font-mono tracking-widest text-[var(--foreground)] uppercase">Tech Stack</span>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((tech: string, tIdx: number) => (
                            <span key={tIdx} className="text-[10px] md:text-xs font-mono tracking-widest text-[var(--foreground)] uppercase border border-[var(--color-border)] px-3 py-1.5 rounded-full">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Details */}
                  <div className="flex flex-col gap-6">
                    <p className="text-base md:text-lg text-[var(--color-muted)] font-light leading-relaxed">
                      {selectedProject.description}
                    </p>

                    {selectedProject.architecture && (
                      <div className="flex flex-col gap-3 border-t border-[var(--color-border)] pt-4">
                        <span className="text-xs font-mono tracking-widest text-[var(--foreground)] uppercase">Architecture & Flow</span>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.architecture.map((item: string, i: number) => (
                            <div key={i} className="flex items-center gap-2">
                              <span className="text-xs md:text-sm font-mono text-[var(--color-muted)]">{item}</span>
                              {i < selectedProject.architecture.length - 1 && (
                                <ChevronRight size={14} className="text-[var(--color-border)]" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedProject.focus && (
                      <div className="flex flex-col gap-3 border-t border-[var(--color-border)] pt-4">
                        <span className="text-xs font-mono tracking-widest text-[var(--foreground)] uppercase">Focus Areas</span>
                        <ul className="flex flex-col gap-2">
                          {selectedProject.focus.map((f: string, i: number) => (
                            <li key={i} className="flex items-center gap-3">
                              <span className="w-1 h-1 rounded-full bg-[var(--color-accent)]" />
                              <span className="text-sm md:text-base text-[var(--color-muted)]">{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
