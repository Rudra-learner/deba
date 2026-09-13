"use client";
import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Courses() {
  const { courses } = PORTFOLIO_DATA;

  if (!courses || courses.length === 0) return null;

  return (
    <section id="courses" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[var(--color-border)]">
      <div className="mb-16 md:mb-24">
        <h2 className="text-sm font-mono tracking-widest text-[var(--color-muted)] uppercase mb-4">
          CONTINUOUS LEARNING
        </h2>
        <h3 className="text-3xl md:text-5xl font-medium tracking-tight uppercase leading-[1.2]">
          COURSES & TRAINING
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course: { date: string, title: string, organization: string, description: string }, idx: number) => (
          <div key={idx} className="flex flex-col p-8 border border-[var(--color-border)] bg-[var(--background)] hover:border-[var(--foreground)] transition-colors duration-300">
            <div className="text-xs font-mono tracking-widest text-[var(--color-accent)] uppercase mb-4">
              {course.date}
            </div>
            <h4 className="text-lg md:text-xl font-medium tracking-tight uppercase leading-[1.3] mb-3 text-[var(--foreground)]">
              {course.title}
            </h4>
            <div className="text-sm font-mono tracking-widest text-[var(--foreground)] uppercase opacity-70 mb-4">
              {course.organization}
            </div>
            <p className="text-sm text-[var(--color-muted)] font-light leading-relaxed mt-auto">
              {course.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
