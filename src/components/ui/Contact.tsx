"use client";
import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { FileDown, Eye, ArrowRight } from "lucide-react";

export function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    const myForm = e.currentTarget;
    const formData = new FormData(myForm);
    
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        // @ts-ignore - URLSearchParams accepts FormData in modern browsers
        body: new URLSearchParams(formData).toString(),
      });
      
      setFormStatus("success");
      myForm.reset();
      setTimeout(() => setFormStatus("idle"), 5000);
    } catch (error) {
      console.error(error);
      setFormStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[var(--color-border)]">
      
      {/* Resume CTA Section */}
      <div className="flex flex-col items-center text-center mb-32 md:mb-48 glass-effect border border-white/10 rounded-2xl p-12 md:p-24 relative overflow-hidden transition-all duration-500 hover:border-zinc-700 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight uppercase mb-12 relative z-10 text-white">
          TAKE A CLOSER LOOK.
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6 relative z-10">
          <a
            href={PORTFOLIO_DATA.personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-[var(--color-accent)] text-black px-8 py-4 rounded-xl text-sm font-bold tracking-wide transition-transform hover:scale-105"
          >
            VIEW RESUME
            <Eye size={16} />
          </a>
          <a
            href={PORTFOLIO_DATA.personal.resume}
            download
            className="group flex items-center gap-2 bg-transparent border border-white/20 text-white px-8 py-4 rounded-xl text-sm font-bold tracking-wide transition-all hover:bg-white/10"
          >
            DOWNLOAD
            <FileDown size={16} />
          </a>
        </div>
      </div>

      {/* Contact Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
        
        <div className="flex flex-col gap-10">
          <div className="text-sm font-mono tracking-widest text-zinc-500 uppercase">
            06 / CONTACT
          </div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight uppercase leading-[1.05] text-white">
            LET'S BUILD SOMETHING IN HARDWARE.
          </h2>
          <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-lg">
            Open to internships, entry-level opportunities, technical collaborations and conversations around VLSI, FPGA, RTL and digital hardware.
          </p>

          <div className="flex flex-col gap-4 mt-8">
            <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="text-lg font-mono text-white hover:text-[var(--color-accent)] transition-colors">
              {PORTFOLIO_DATA.personal.email}
            </a>
            <div className="flex gap-6 mt-4">
              <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm font-mono tracking-widest uppercase text-zinc-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">
                LinkedIn
              </a>
              <a href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noopener noreferrer" className="text-sm font-mono tracking-widest uppercase text-zinc-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div>
          <form 
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit} 
            className="flex flex-col gap-8 glass-effect p-8 md:p-10 rounded-2xl transition-all duration-500 hover:border-zinc-700 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)]"
          >
            {/* Required hidden inputs for Netlify */}
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs font-mono tracking-widest uppercase text-zinc-500 ml-1">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-lg focus:outline-none focus:border-[var(--color-accent)] transition-colors placeholder:text-zinc-600 text-white"
                placeholder="John Doe"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-mono tracking-widest uppercase text-zinc-500 ml-1">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-lg focus:outline-none focus:border-[var(--color-accent)] transition-colors placeholder:text-zinc-600 text-white"
                placeholder="john@example.com"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-mono tracking-widest uppercase text-zinc-500 ml-1">Message</label>
              <textarea 
                id="message" 
                name="message"
                required
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-lg focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none placeholder:text-zinc-600 text-white"
                placeholder="How can we collaborate?"
              />
            </div>

            <button 
              type="submit"
              disabled={formStatus === "submitting"}
              className="group flex items-center justify-center gap-2 w-full bg-white text-black rounded-xl px-8 py-5 text-sm font-bold tracking-widest uppercase mt-4 hover:bg-gray-200 transition-colors disabled:opacity-50"
            >
              <span>{formStatus === "submitting" ? "SENDING..." : "SEND MESSAGE"}</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {formStatus === "success" && (
              <div className="text-sm font-mono text-[var(--color-accent)] mt-2 text-center">
                SYSTEM MESSAGE: Transmission received successfully.
              </div>
            )}
            {formStatus === "error" && (
              <div className="text-sm font-mono text-red-500 mt-2 text-center">
                SYSTEM ERROR: Transmission failed. Please try again.
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}
