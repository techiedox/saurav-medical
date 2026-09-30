"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Store, BriefcaseMedical } from "lucide-react";

export function BottomNav() {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isAgency = pathname.startsWith("/agency");
  const isStore = pathname.startsWith("/store");

  const navItems = [
    {
      id: "home",
      href: "/",
      isActive: isHome,
      ariaLabel: "Home Gateway",
      icon: (active: boolean) => (
        <Home
          className={`w-5 h-5 transition-transform duration-300 ${
            active ? "scale-110 text-white" : "text-sky-800/80 group-hover:text-sky-950"
          }`}
        />
      ),
    },
    {
      id: "agency",
      href: "/agency",
      isActive: isAgency,
      ariaLabel: "Saurav Medical Agency",
      icon: (active: boolean) => (
        <BriefcaseMedical
          className={`w-5 h-5 transition-transform duration-300 ${
            active ? "scale-110 text-white" : "text-sky-800/80 group-hover:text-sky-950"
          }`}
        />
      ),
    },
    {
      id: "store",
      href: "/store",
      isActive: isStore,
      ariaLabel: "Saurav Medical Store",
      icon: (active: boolean) => (
        <Store
          className={`w-5 h-5 transition-transform duration-300 ${
            active ? "scale-110 text-white" : "text-sky-800/80 group-hover:text-sky-950"
          }`}
        />
      ),
    },
  ];

  return (
    <nav
      aria-label="Mobile Navigation"
      className="fixed bottom-5 inset-x-0 mx-auto w-[290px] sm:w-[320px] max-w-[90vw] z-50 md:hidden print:hidden pointer-events-auto select-none"
    >
      {/* Light Sky Blue Glassmorphism Floating Dock (Extended Length) */}
      <div className="relative px-5 py-2 rounded-full bg-gradient-to-r from-sky-100/90 via-white/95 to-sky-100/90 backdrop-blur-2xl border border-sky-300/70 shadow-[0_14px_36px_rgba(14,165,233,0.25),inset_0_1.5px_2px_rgba(255,255,255,0.95)] flex items-center justify-between">
        {/* Specular Top Shimmer Highlight */}
        <div className="absolute inset-x-5 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-sky-300/80 to-transparent pointer-events-none" />

        {/* 3 Icon Buttons with Water-Fluid Motion (No Text, Icons Only) */}
        {navItems.map((item) => {
          const active = item.isActive;

          return (
            <Link
              key={item.id}
              href={item.href}
              aria-label={item.ariaLabel}
              className={`relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 active:scale-90 group focus:outline-none ${
                active ? "text-white" : "text-sky-800/80 hover:text-sky-950"
              }`}
            >
              {/* Water-Fluid Motion Active Indicator */}
              {active && (
                <>
                  {/* Expanding Light Sky Blue Water Ripple Wave */}
                  <span className="absolute inset-0 rounded-full bg-sky-400/40 animate-water-ripple pointer-events-none" />

                  {/* Morphing Liquid Droplet Bubble (Light Sky Blue to Blue) */}
                  <span className="absolute inset-0.5 rounded-full bg-gradient-to-tr from-sky-500 via-sky-600 to-blue-600 animate-water-fluid shadow-[0_4px_14px_rgba(14,165,233,0.5)] pointer-events-none" />

                  {/* Specular Liquid Bubble Reflection */}
                  <span className="absolute top-1.5 left-3 w-2 h-1 bg-white/80 rounded-full blur-[0.4px] pointer-events-none" />
                </>
              )}

              {/* Icon Only */}
              <div className="relative z-10 flex items-center justify-center">
                {item.icon(active)}
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
