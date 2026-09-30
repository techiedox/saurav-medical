"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;

      if (totalScroll > 0) {
        const progress = Math.min(Math.max((currentScroll / totalScroll) * 100, 0), 100);
        setScrollProgress(progress);
      }

      setIsVisible(currentScroll > 160);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  // SVG Circle parameters
  const radius = 18;
  const circumference = 2 * Math.PI * radius; // ~113.1
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-20 sm:bottom-8 right-4 sm:right-6 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-xl border border-sky-200/80 shadow-[0_8px_24px_rgba(14,165,233,0.3)] flex items-center justify-center text-slate-700 hover:text-blue-600 hover:scale-105 active:scale-95 transition-all duration-300 group select-none"
    >
      {/* Circular Progress Measure Track */}
      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 44 44">
        {/* Inactive Track */}
        <circle
          cx="22"
          cy="22"
          r={radius}
          fill="none"
          stroke="#e0f2fe"
          strokeWidth="2.5"
        />
        {/* Animated Progress Stroke */}
        <circle
          cx="22"
          cy="22"
          r={radius}
          fill="none"
          stroke="#0284c7"
          strokeWidth="2.5"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-150 ease-out"
        />
      </svg>

      {/* Up Arrow Icon */}
      <ArrowUp className="w-4 h-4 text-sky-700 group-hover:text-blue-700 group-hover:-translate-y-0.5 transition-transform duration-200 relative z-10" />
    </button>
  );
}
