"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(true); // Default true, then check

  useEffect(() => {
    // Check if device has a fine pointer (mouse)
    const checkMobile = () => {
      setIsMobile(!window.matchMedia("(pointer: fine)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    if (!isMobile) {
      window.addEventListener("mousemove", updateMousePosition);
    }

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Center Dot */}
      <motion.div 
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[var(--color-accent)] rounded-none pointer-events-none z-[9999]"
        animate={{ x: mousePosition.x - 3, y: mousePosition.y - 3 }}
        transition={{ type: "tween", ease: "backOut", duration: 0 }}
      />
      {/* Outer Bracket / Crosshair */}
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9998]"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-[var(--foreground)]/50" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-[var(--foreground)]/50" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-[var(--foreground)]/50" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-[var(--foreground)]/50" />
      </motion.div>
    </>
  );
}
