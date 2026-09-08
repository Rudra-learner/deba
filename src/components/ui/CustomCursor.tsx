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
      <motion.div 
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference items-center justify-center overflow-hidden"
        animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
        transition={{ type: "tween", ease: "backOut", duration: 0 }}
      />
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 border border-white/50 rounded-full pointer-events-none z-[9998] mix-blend-difference"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      />
    </>
  );
}
