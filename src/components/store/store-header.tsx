"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Phone,
  ShieldCheck,
  Home,
  Store,
  MessageCircle,
  ThermometerSnowflake,
  ChevronRight,
  Stethoscope,
} from "lucide-react";
import { STORE_DETAILS } from "@/lib/data";
import { SauravLogo } from "@/components/brand/saurav-brand-identity";

export function StoreHeader() {
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
      {/* Top Statutory Compliance Ribbon */}
      <div className="bg-[#0b132b] text-blue-200 text-xs py-1.5 px-4 border-b border-blue-900/60 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs">
            <div className="flex items-center gap-1.5 text-blue-100">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-semibold text-white">Wholesale DL: Form 20B & 21B Licensed</span>
              <span className="text-blue-500">•</span>
              <span className="text-slate-300">Kotwali Chowk, Next to ICICI Bank (1st Floor)</span>
            </div>
            <span className="text-blue-500/40">|</span>
            <div className="flex items-center gap-1 text-sky-300">
              <Store className="w-3.5 h-3.5 text-emerald-400" />
              <span>Generic &amp; Surgical Medicines • 10+1 &amp; 10+2 Schemes</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="text-slate-300">
              Founder: <strong className="text-white font-semibold">Santosh Kumar</strong>
            </span>
            <span className="text-blue-500/40">|</span>
            <a
              href={`tel:${STORE_DETAILS.mobile}`}
              className="flex items-center gap-1 text-sky-300 hover:text-white font-mono font-bold transition-colors"
            >
              <Phone className="w-3 h-3 text-sky-400" />
              <span>{STORE_DETAILS.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="w-full bg-white/95 backdrop-blur-xl py-2.5 sm:py-3 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-6">
          {/* Logo & Identity */}
          <Link href="/store" className="flex items-center gap-2 sm:gap-3 min-w-0 group">
            <SauravLogo className="w-9 h-9 sm:w-11 sm:h-11 transition-transform group-hover:scale-105 shrink-0" priority />
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-black text-slate-900 text-xs xs:text-sm sm:text-base lg:text-lg tracking-tight truncate">
                  Saurav Medical Store
                </span>
              </div>
              <span className="text-[10px] sm:text-xs font-semibold text-emerald-600 block leading-tight mt-0.5 truncate">
                <span className="sm:hidden">Generic &amp; Surgical</span>
                <span className="hidden sm:inline">Generic &amp; Surgical Medicine Wholesale</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Clean & Scannable) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs font-bold text-slate-600">
            <Link
              href="/"
              className="px-2.5 py-1.5 rounded-lg hover:text-emerald-700 hover:bg-emerald-50 transition-colors flex items-center gap-1.5 whitespace-nowrap"
            >
              <Home className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Gateway</span>
            </Link>

            <a
              href="#about"
              className="px-2.5 py-1.5 rounded-lg hover:text-emerald-700 hover:bg-emerald-50 transition-colors whitespace-nowrap"
            >
              About
            </a>

            <a
              href="#supplies"
              className="px-2.5 py-1.5 rounded-lg hover:text-emerald-700 hover:bg-emerald-50 transition-colors whitespace-nowrap"
            >
              Supplies
            </a>

            <a
              href="#brands"
              className="px-2.5 py-1.5 rounded-lg hover:text-emerald-700 hover:bg-emerald-50 transition-colors whitespace-nowrap"
            >
              Top Brands
            </a>

            <a
              href="#schemes"
              className="px-2.5 py-1.5 rounded-lg hover:text-emerald-700 hover:bg-emerald-50 transition-colors whitespace-nowrap"
            >
              Chemist Schemes
            </a>

            <a
              href="#sourcing"
              className="px-2.5 py-1.5 rounded-lg hover:text-emerald-700 hover:bg-emerald-50 transition-colors whitespace-nowrap"
            >
              On-Demand
            </a>
          </nav>

          {/* Right Action Tools */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Quick Switch to Agency */}
            <Link
              href="/agency"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100/90 hover:bg-blue-50 text-slate-700 hover:text-blue-800 text-xs font-bold transition-all border border-slate-200/80 hover:border-blue-300 shadow-2xs group whitespace-nowrap"
              title="Switch to Saurav Medical Agency"
            >
              <Stethoscope className="w-3.5 h-3.5 text-blue-600 transition-transform group-hover:scale-110" />
              <span>Agency</span>
              <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            {/* Capsule Contact CTA */}
            <a
              href="#enquiry"
              className="px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] sm:text-xs font-black flex items-center justify-center gap-1 shadow-md shadow-emerald-600/25 border border-emerald-400/40 active:scale-95 transition-all shrink-0"
              aria-label="Contact / Enquiry Form"
            >
              <Phone className="hidden sm:block w-3.5 h-3.5 shrink-0" />
              <span>Contact</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
