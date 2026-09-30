"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Phone,
  ShieldCheck,
  Home,
  MessageCircle,
  Store,
  ChevronRight,
} from "lucide-react";
import { AGENCY_DETAILS } from "@/lib/data";

export function AgencyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md border-b border-slate-200/90 print:hidden">
      {/* Top Ribbon */}
      <div className="bg-[#0b132b] text-sky-200 text-xs py-1.5 px-4 border-b border-sky-950 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs">
            <div className="flex items-center gap-1.5 text-sky-100">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-semibold text-white">Wholesaler of Generic, Surgical, Ayurvedic and OTC Medicines</span>
              <span className="text-sky-500">•</span>
              <span className="text-slate-300">Kotwali Chowk, Next to ICICI Bank (1st Floor)</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="text-slate-300">
              Proprietor: <strong className="text-white font-semibold">Santosh Kumar</strong>
            </span>
            <span className="text-sky-500/40">|</span>
            <a
              href={`tel:${AGENCY_DETAILS.mobile}`}
              className="flex items-center gap-1 text-white font-mono font-bold transition-colors"
            >
              <Phone className="w-3 h-3 text-sky-400" />
              <span>{AGENCY_DETAILS.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Agency Navigation Bar (Steady, never moves up) */}
      <div className="w-full bg-white/95 backdrop-blur-xl py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
          {/* Logo & Identity with Red Cross Circle from visiting card */}
          <Link href="/agency" className="flex items-center gap-3 min-w-0 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white p-1.5 flex items-center justify-center text-red-600 shrink-0 group-hover:scale-105 transition-transform shadow-md border-2 border-red-100">
              {/* Circular Red Medical Cross */}
              <div className="w-full h-full rounded-full border-2 border-red-600 flex items-center justify-center relative">
                <div className="w-1.5 h-full bg-red-600 absolute" />
                <div className="h-1.5 w-full bg-red-600 absolute" />
              </div>
            </div>
            {/* Brand text visible on all screens */}
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-black text-[#0f172a] text-sm sm:text-lg md:text-xl tracking-tight block leading-tight whitespace-nowrap">
                  Saurav Medical Agency
                </span>
                <span className="hidden sm:inline-flex text-xs font-bold px-2 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">
                  Wholesale
                </span>
              </div>
              <span className="text-[10px] sm:text-xs font-semibold text-slate-500 block whitespace-nowrap leading-tight mt-0.5">
                Kotwali Chowk, Next to ICICI Bank
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-4 text-xs font-bold text-slate-600">
            <Link
              href="/"
              className="px-2.5 py-1.5 rounded-lg hover:text-blue-600 hover:bg-blue-50 transition-colors flex items-center gap-1.5"
            >
              <Home className="w-3.5 h-3.5 text-blue-600" />
              <span>Gateway</span>
            </Link>

            <a
              href="#about"
              className="px-2.5 py-1.5 rounded-lg hover:text-blue-600 hover:bg-blue-50 transition-colors"
            >
              About
            </a>

            <a
              href="#supplies"
              className="px-2.5 py-1.5 rounded-lg hover:text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Generic Supplies
            </a>

            <a
              href="#brands"
              className="px-2.5 py-1.5 rounded-lg hover:text-blue-600 hover:bg-blue-50 transition-colors"
            >
              21 Brand Lines
            </a>

            <a
              href="#schemes"
              className="px-2.5 py-1.5 rounded-lg hover:text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Chemist Schemes
            </a>

            <a
              href="#certificates"
              className="px-2.5 py-1.5 rounded-lg hover:text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Licenses
            </a>

            {/* Quick Switch to Store */}
            <Link
              href="/store"
              className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all flex items-center gap-1.5 border border-slate-200"
            >
              <Store className="w-3.5 h-3.5 text-blue-600" />
              <span>Saurav Medical Store</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </Link>
          </nav>

          {/* Right Action Tools (Only Icon on mobile) */}
          <div className="flex items-center gap-2">
            <a
              href={AGENCY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:py-2.5 sm:px-4 rounded-xl bg-[#0052ff] hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-blue-500/25 active:scale-95 transition-all"
              aria-label="WhatsApp Contact"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp Santosh ji</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
