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
import { SauravLogo } from "@/components/brand/saurav-brand-identity";

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
              <span className="font-semibold text-white">Wholesale DL: Form 20B &amp; 21B Licensed • 35+ Years Established</span>
              <span className="text-sky-500">•</span>
              <span className="text-slate-300">M.P. Dwivedi Road, Bhagalpur</span>
            </div>
            <span className="text-sky-500/40">|</span>
            <div className="flex items-center gap-1 text-sky-300">
              <span>2°C – 8°C Cold Chain Vaccine Protocol</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="text-slate-300">
              Proprietor: <strong className="text-white font-semibold">Gaurav Sarawgi</strong>
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

      {/* Main Agency Navigation Bar */}
      <div className="w-full bg-white/95 backdrop-blur-xl py-2.5 sm:py-3 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 lg:gap-6">
          {/* Logo & Identity */}
          <Link href="/agency" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group">
            <SauravLogo className="w-10 h-10 sm:w-11 sm:h-11 transition-transform group-hover:scale-105 shrink-0" priority />
            <div className="shrink-0">
              <div className="flex items-center gap-2">
                <span className="font-black text-slate-900 text-sm sm:text-base lg:text-lg tracking-tight whitespace-nowrap">
                  Saurav Medical Agency
                </span>
              </div>
              <span className="text-[10px] sm:text-xs font-semibold text-slate-500 block whitespace-nowrap leading-tight mt-0.5">
                Ethical Medicines &amp; Cold Chain Vaccines
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs font-bold text-slate-600">
            <Link
              href="/"
              className="px-2.5 py-1.5 rounded-lg hover:text-blue-700 hover:bg-blue-50 transition-colors flex items-center gap-1.5 whitespace-nowrap"
            >
              <Home className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>Gateway</span>
            </Link>

            <a
              href="#about"
              className="px-2.5 py-1.5 rounded-lg hover:text-blue-700 hover:bg-blue-50 transition-colors whitespace-nowrap"
            >
              About
            </a>

            <a
              href="#supplies"
              className="px-2.5 py-1.5 rounded-lg hover:text-blue-700 hover:bg-blue-50 transition-colors whitespace-nowrap"
            >
              Ethical Supplies
            </a>

            <a
              href="#brands"
              className="px-2.5 py-1.5 rounded-lg hover:text-blue-700 hover:bg-blue-50 transition-colors whitespace-nowrap"
            >
              28 Depots
            </a>

            <a
              href="#cold-chain"
              className="px-2.5 py-1.5 rounded-lg hover:text-blue-700 hover:bg-blue-50 transition-colors whitespace-nowrap"
            >
              Cold Chain
            </a>

            <a
              href="#bank"
              className="px-2.5 py-1.5 rounded-lg hover:text-blue-700 hover:bg-blue-50 transition-colors whitespace-nowrap"
            >
              Bank Details
            </a>
          </nav>

          {/* Right Action Tools */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Quick Switch to Store */}
            <Link
              href="/store"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100/90 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 text-xs font-bold transition-all border border-slate-200/80 hover:border-emerald-300 shadow-2xs group whitespace-nowrap"
              title="Switch to Saurav Medical Store"
            >
              <Store className="w-3.5 h-3.5 text-emerald-600 transition-transform group-hover:scale-110" />
              <span>Store</span>
              <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            {/* Contact CTA */}
            <a
              href={AGENCY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:py-2 sm:px-3.5 rounded-full bg-[#0052ff] hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-blue-500/25 active:scale-95 transition-all whitespace-nowrap"
              aria-label="Contact on WhatsApp"
            >
              <Phone className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">Contact</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
