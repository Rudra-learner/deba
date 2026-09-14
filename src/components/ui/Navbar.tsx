"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon, Laptop } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Avoid synchronous setState in effect (eslint react-hooks/set-state-in-effect)
    setTimeout(() => setMounted(true), 0);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "PROJECTS", href: "#work" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "SKILLS", href: "#skills" },
    { label: "CONTACT", href: "#contact" }
  ];

  const handleScrollTo = (href: string, external?: boolean) => {
    setMobileMenuOpen(false);
    if (external) {
      window.open(href, "_blank");
    } else if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const cycleTheme = () => {
    if (theme === "dark") setTheme("light");
    else if (theme === "light") setTheme("system");
    else setTheme("dark");
  };

  return (
    <nav 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[var(--background)]/95 backdrop-blur-md border-b border-[var(--color-border)] py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        <div className="text-xl font-medium tracking-tight uppercase cursor-pointer text-[var(--foreground)]" onClick={() => handleScrollTo("#home")}>
          DEBABRATA SAHU
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 flex-wrap justify-end">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleScrollTo(item.href)}
              className="text-xs md:text-sm font-mono tracking-widest text-[var(--color-muted)] hover:text-[var(--foreground)] transition-colors uppercase whitespace-nowrap"
            >
              {item.label}
            </button>
          ))}
          
          {mounted && (
            <button 
              onClick={cycleTheme}
              className="ml-2 p-2 rounded-full hover:bg-[var(--foreground)]/10 text-[var(--color-muted)] hover:text-[var(--foreground)] transition-colors"
              title="Toggle Theme"
            >
              {theme === "dark" ? <Moon size={16} /> : theme === "light" ? <Sun size={16} /> : <Laptop size={16} />}
            </button>
          )}
        </div>

        {/* Mobile Toggle & Theme */}
        <div className="flex lg:hidden items-center gap-4">
          {mounted && (
            <button 
              onClick={cycleTheme}
              className="p-2 rounded-full hover:bg-[var(--foreground)]/10 text-[var(--color-muted)] hover:text-[var(--foreground)] transition-colors"
            >
              {theme === "dark" ? <Moon size={18} /> : theme === "light" ? <Sun size={18} /> : <Laptop size={18} />}
            </button>
          )}
          <button 
            className="text-[var(--foreground)] z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[var(--background)] border-b border-[var(--color-border)] py-6 px-6 flex flex-col gap-4 shadow-xl max-h-[80vh] overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleScrollTo(item.href)}
              className="text-left text-sm font-mono tracking-widest text-[var(--foreground)] transition-colors uppercase py-2 border-b border-[var(--color-border)]/50 last:border-0"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
