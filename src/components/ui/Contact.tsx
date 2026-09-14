"use client";
import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Mail, FileDown } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[var(--color-border)]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        
        {/* CV Section */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl md:text-4xl font-medium tracking-tight uppercase leading-[1.2] text-[var(--foreground)]">
              WANT TO KNOW MORE ABOUT MY WORK?
            </h3>
          </div>
          <p className="text-lg text-[var(--color-muted)] font-light leading-relaxed max-w-md">
            Explore my academic background, research experience, technical projects, internships, skills, and achievements in greater detail.
          </p>
          <a
            href={PORTFOLIO_DATA.personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-[var(--foreground)] text-[var(--background)] px-8 py-4 rounded-sm text-sm font-medium tracking-wide transition-transform hover:scale-105 w-fit mt-4"
          >
            DOWNLOAD CV
            <FileDown size={18} />
          </a>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-8 md:border-l border-[var(--color-border)] md:pl-16">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl md:text-4xl font-medium tracking-tight uppercase leading-[1.2] text-[var(--foreground)]">
              LET&apos;S CONNECT
            </h3>
          </div>
          <p className="text-lg text-[var(--color-muted)] font-light leading-relaxed max-w-md">
            Interested in my work, projects, or academic journey?<br/><br/>
            I am currently pursuing my Bachelor&apos;s degree in Electronics & Communication Engineering and preparing for graduate study in VLSI and digital hardware design.
          </p>
          
          <div className="flex flex-col gap-4 mt-4">
            <a 
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="group inline-flex items-center gap-4 text-[var(--color-muted)] hover:text-[var(--foreground)] transition-colors"
            >
              <div className="w-12 h-12 rounded-sm border border-[var(--color-border)] flex items-center justify-center group-hover:border-[var(--foreground)] transition-colors">
                <Mail size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-mono tracking-widest uppercase">Email</span>
                <span className="text-base font-light">{PORTFOLIO_DATA.personal.email}</span>
              </div>
            </a>

            <a 
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 text-[var(--color-muted)] hover:text-[var(--foreground)] transition-colors"
            >
              <div className="w-12 h-12 rounded-sm border border-[var(--color-border)] flex items-center justify-center group-hover:border-[var(--foreground)] transition-colors text-xs font-mono">
                IN
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-mono tracking-widest uppercase">LinkedIn</span>
                <span className="text-base font-light">linkedin.com/in/debabrata-sahu</span>
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
