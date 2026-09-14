"use client";
import React, { useState, useRef } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, ChevronLeft } from "lucide-react";

export function Experience() {
  type ExperienceType = typeof PORTFOLIO_DATA.experience[0];
  const [selectedExp, setSelectedExp] = useState<ExperienceType | null>(null);
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
    <section id="experience" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[var(--color-border)] relative">
      <div className="mb-12 max-w-4xl flex items-end justify-between">
        <div>
          <h3 className="text-3xl md:text-5xl font-medium tracking-tight uppercase leading-[1.2]">
            RESEARCH & INTERNSHIP EXPERIENCE
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
        {PORTFOLIO_DATA.experience.map((exp, idx) => (
          <motion.div 
            key={idx} 
            whileHover={{ y: -10 }}
            onClick={() => !dragMoved && setSelectedExp(exp)}
            className="w-[320px] md:w-[400px] flex-shrink-0 group flex flex-col border border-[var(--color-border)] bg-[var(--background)] p-8 hover:border-[var(--color-accent)] transition-all select-none"
          >
            <div className="flex flex-col gap-4 flex-grow">
              <span className="text-xs font-mono tracking-widest text-[var(--color-accent)] uppercase pointer-events-none">
                {exp.date}
              </span>
              <h4 className="text-xl md:text-2xl font-medium tracking-tight uppercase leading-[1.2] text-[var(--foreground)] group-hover:text-[var(--color-accent)] transition-colors pointer-events-none line-clamp-3">
                {exp.title}
              </h4>
              {exp.project && (
                <div className="text-sm font-mono text-[var(--color-muted)] pointer-events-none line-clamp-2">
                  {exp.project}
                </div>
              )}
              <p className="text-sm text-[var(--color-muted)] font-light leading-relaxed pointer-events-none line-clamp-3 mt-2">
                {exp.description}
              </p>
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
        {selectedExp && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedExp(null)}
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[var(--background)] border border-[var(--color-border)] p-6 md:p-12 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              <button 
                onClick={() => setSelectedExp(null)}
                className="absolute top-6 right-6 p-2 hover:bg-[var(--foreground)]/10 transition-colors rounded-full"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col gap-8 pr-12">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-mono tracking-widest text-[var(--color-accent)] uppercase">
                    {selectedExp.date}
                  </span>
                  <h4 className="text-3xl md:text-4xl font-medium tracking-tight uppercase leading-[1.1] text-[var(--foreground)]">
                    {selectedExp.title}
                  </h4>
                  {selectedExp.project && (
                    <h5 className="text-lg text-[var(--foreground)] font-mono uppercase mt-2">
                      {selectedExp.project}
                    </h5>
                  )}
                </div>

                <p className="text-lg text-[var(--color-muted)] font-light leading-relaxed">
                  {selectedExp.description}
                </p>

                {selectedExp.details && selectedExp.details.length > 0 && (
                  <div className="flex flex-col gap-3 mt-4 border-t border-[var(--color-border)] pt-4">
                    <span className="text-xs font-mono tracking-widest text-[var(--foreground)] uppercase">Experience Highlights</span>
                    <ul className="flex flex-col gap-2">
                      {selectedExp.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-muted)] mt-2 flex-shrink-0" />
                          <span className="text-base text-[var(--color-muted)]">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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
