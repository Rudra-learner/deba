"use client";
import React, { useState, useEffect, useRef } from "react";
import { Command, Wifi, BatteryMedium, Search } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Navbar() {
  const [time, setTime] = useState("");
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleScroll = (id: string) => {
    setActiveMenu(null);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAction = (action: () => void) => {
    setActiveMenu(null);
    action();
  };

  const menus = [
    {
      label: "sahu os",
      isBrand: true,
      items: [
        { label: "About This Developer", action: () => handleScroll("about") },
        { divider: true },
        { label: "System Preferences...", action: () => handleScroll("skills") },
      ]
    },
    {
      label: "File",
      items: [
        { label: "Download Resume", action: () => {
            window.open(PORTFOLIO_DATA.personal.resume, "_blank");
            setActiveMenu(null);
        }},
        { divider: true },
        { label: "Print", action: () => handleAction(() => window.print()) },
      ]
    },
    {
      label: "Edit",
      items: [
        { label: "Copy Profile URL", action: () => handleAction(() => navigator.clipboard.writeText(window.location.href)) },
        { divider: true },
        { label: "Send Message", action: () => handleScroll("contact") },
      ]
    },
    {
      label: "View",
      items: [
        { label: "Projects", action: () => handleScroll("work") },
        { label: "Experience", action: () => handleScroll("experience") },
        { label: "Skills", action: () => handleScroll("skills") },
      ]
    },
    {
      label: "Window",
      items: [
        { label: "Minimize", action: () => setActiveMenu(null) },
        { label: "Zoom", action: () => setActiveMenu(null) },
      ]
    },
    {
      label: "Help",
      items: [
        { label: "Contact Support", action: () => handleScroll("contact") },
      ]
    }
  ];

  return (
    <div className="fixed top-0 inset-x-0 h-10 md:h-7 z-50 flex items-center justify-between px-4 bg-zinc-900/80 backdrop-blur-xl border-b border-white/10 text-[13px] font-medium text-white/90 select-none shadow-sm" ref={menuRef}>
      
      <div className="flex items-center gap-2 md:gap-5 h-full">
        {menus.map((menu) => (
          <div key={menu.label} className="relative h-full flex items-center">
            <div 
              onClick={() => setActiveMenu(activeMenu === menu.label ? null : menu.label)}
              onMouseEnter={() => { if (activeMenu) setActiveMenu(menu.label); }}
              className={`px-2 py-0.5 rounded cursor-pointer transition-colors flex items-center gap-1 ${activeMenu === menu.label ? 'bg-emerald-500 text-black' : 'hover:bg-white/10 hover:text-white'}`}
            >
              {menu.isBrand && <Command className="w-3.5 h-3.5" />}
              <span className={menu.isBrand ? "font-bold tracking-tight" : ""}>
                {menu.label}
              </span>
            </div>

            {/* Dropdown */}
            {activeMenu === menu.label && (
              <div className="absolute top-full left-0 mt-0.5 w-56 bg-zinc-800/95 backdrop-blur-2xl border border-white/10 rounded-md shadow-2xl py-1 text-[13px] text-white/90 flex flex-col z-[100]">
                {menu.items.map((item, idx) => (
                  item.divider ? (
                    <div key={idx} className="h-[1px] bg-white/10 my-1 mx-2" />
                  ) : (
                    <div 
                      key={item.label} 
                      onClick={item.action}
                      className="px-3 py-1 hover:bg-emerald-500 hover:text-black cursor-pointer mx-1 rounded-sm transition-colors"
                    >
                      {item.label}
                    </div>
                  )
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 text-white/80">
        <button className="flex items-center justify-center p-1 rounded hover:bg-white/10 transition-all text-zinc-300 hover:text-white outline-none active:scale-95" title="Connected">
          <Wifi className="w-3.5 h-3.5" />
        </button>
        <button className="flex items-center justify-center p-1 rounded hover:bg-white/10 transition-all text-zinc-300 hover:text-white outline-none active:scale-95" title="Search">
          <Search className="w-3.5 h-3.5" />
        </button>
        <button className="flex items-center justify-center p-1 rounded hover:bg-white/10 transition-all text-zinc-300 hover:text-white outline-none active:scale-95" title="100%">
          <BatteryMedium className="w-4 h-4" />
        </button>
        <span className="cursor-pointer hover:text-white ml-2">{time}</span>
      </div>
    </div>
  );
}
