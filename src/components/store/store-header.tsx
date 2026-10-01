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
              <span className="font-semibold text-white">Form 20B & 21B Licensed Wholesale Stockist</span>
              <span className="text-blue-500">•</span>
              <span className="text-slate-300">M.P. Dwivedi Road, Bhagalpur</span>
            </div>
            <span className="text-blue-500/40">|</span>
            <div className="flex items-center gap-1 text-sky-300">
              <ThermometerSnowflake className="w-3.5 h-3.5" />
              <span>Certified 2°C – 8°C Cold Chain Protocol</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="text-slate-300">
              Proprietor: <strong className="text-white font-semibold">Gaurav Sarawgi</strong>
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

      {/* Main Navigation Bar (Steady, never moves up) */}
      <div className="w-full bg-white/95 backdrop-blur-xl py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
          {/* Logo & Identity */}
          <Link href="/store" className="flex items-center gap-2.5 sm:gap-3 min-w-0 group">
            <SauravLogo className="w-10 h-10 sm:w-11 sm:h-11 transition-transform group-hover:scale-105" priority />
            {/* Brand text visible on all screens */}
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-black text-[#0f172a] text-sm sm:text-lg md:text-xl tracking-tight block leading-tight whitespace-nowrap">
                  Saurav Medical Store
                </span>
                <span className="hidden sm:inline-flex text-xs font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                  Est. 2004
                </span>
              </div>
              <span className="text-[10px] sm:text-xs font-semibold text-blue-600 block whitespace-nowrap leading-tight mt-0.5">
                Stockist &amp; Vaccine Distributors
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Clean & Scannable) */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-3 text-xs font-bold text-slate-600">
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
              Supplies
            </a>

            <a
              href="#brands"
              className="px-2.5 py-1.5 rounded-lg hover:text-blue-600 hover:bg-blue-50 transition-colors"
            >
              28 Authorized Brands
            </a>

            <a
              href="#certificates"
              className="px-2.5 py-1.5 rounded-lg hover:text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Licenses
            </a>

            <a
              href="#bank"
              className="px-2.5 py-1.5 rounded-lg hover:text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Bank Details
            </a>

            {/* Quick Switch to Agency */}
            <Link
              href="/agency"
              className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all flex items-center gap-1.5 border border-slate-200"
            >
              <Stethoscope className="w-3.5 h-3.5 text-red-600" />
              <span>Saurav Medical Agency</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </Link>
          </nav>

          {/* Right Action Tools (Only Icon on mobile) */}
          <div className="flex items-center gap-2">
            <a
              href={STORE_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:py-2.5 sm:px-4 rounded-xl bg-[#0052ff] hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-blue-500/25 active:scale-95 transition-all"
              aria-label="WhatsApp Contact"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp Gaurav ji</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
