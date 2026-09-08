"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function BootLoader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500); // Wait half a sec at 100%
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[99999] flex flex-col justify-between bg-[#040404] text-white select-none overflow-hidden font-mono p-6 md:p-12"
    >
      <div className="flex justify-between items-center text-[10px] text-zinc-600 tracking-widest uppercase">
        <span>SAHU_OS // V.1.0</span>
        <span>SECURE BOOT</span>
      </div>
      
      <div className="flex-1 flex flex-col justify-center max-w-2xl mx-auto w-full gap-2">
        <div className="w-2.5 h-4 bg-zinc-300 mt-2 animate-pulse"></div>
      </div>
      
      <div className="w-full max-w-2xl mx-auto flex items-center gap-4">
        <div className="text-[10px] text-zinc-500 tracking-widest w-10">
          {Math.min(progress, 100)}%
        </div>
        <div className="flex-1 h-[1px] bg-zinc-800 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 bottom-0 left-0 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ ease: "linear", duration: 0.2 }}
          />
        </div>
      </div>
    </motion.div>
  );
}
