"use client";
import React from "react";
import { motion } from "framer-motion";
import { User, CodeXml, FolderGit2, Mail } from "lucide-react";

export function Dock() {
  const links = [
    { name: "About", href: "#about", icon: User, color: "from-blue-400 to-blue-600" },
    { name: "Skills", href: "#skills", icon: CodeXml, color: "from-emerald-400 to-emerald-600" },
    { name: "Projects", href: "#work", icon: FolderGit2, color: "from-violet-400 to-violet-600" },
    { name: "Contact", href: "#contact", icon: Mail, color: "from-amber-400 to-amber-600" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 110 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      className="fixed bottom-6 inset-x-0 z-50 flex justify-center pointer-events-none px-4"
    >
      <div className="flex glass-effect rounded-2xl p-3 items-center gap-4 shadow-2xl pointer-events-auto bg-zinc-900/60 backdrop-blur-2xl transition-all duration-300">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <a key={link.name} href={link.href} className="group relative flex items-center justify-center">
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-zinc-800/95 backdrop-blur-md text-white text-[11px] uppercase tracking-wider font-semibold rounded-lg border border-white/10 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-150 whitespace-nowrap pointer-events-none shadow-xl">
                {link.name}
              </div>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center shadow-md border border-white/10 relative z-10 hover:z-20 hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6 text-white drop-shadow-md" />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-white/50 scale-75 group-hover:scale-100 transition-all duration-300"></div>
            </a>
          );
        })}
      </div>
    </motion.div>
  );
}
