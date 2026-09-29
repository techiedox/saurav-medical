"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  ShieldCheck,
  Home,
  Store,
  Stethoscope,
  Pill,
  Award,
  Menu,
  X,
  MessageCircle,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { COMPANY_DETAILS, DIVISIONS } from "@/lib/data";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isAgencyActive = pathname.startsWith("/agency");
  const isStoreActive = pathname.startsWith("/store");
  const isHomeActive = pathname === "/";

  return (
    <>
      <header className="sticky top-0 z-30 w-full transition-all duration-300 print:hidden">
        {/* Top Statutory Compliance Ribbon */}
        <div className="bg-[#071529] text-blue-100 text-xs py-1.5 px-4 border-b border-blue-900/50 hidden md:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4 text-[11px]">
              <div className="flex items-center gap-1.5 text-blue-200">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                <span className="font-medium">Form 20B & 21B Licensed Wholesale Stockist • Kotwali Chowk, Bhagalpur</span>
              </div>
              <span className="text-blue-400/40">|</span>
              <span className="text-slate-300">
                Two Specialized Divisions: Surgical & Ethical Agency + Generic Store
              </span>
            </div>

            <div className="flex items-center gap-4 text-[11px]">
              <a
                href={`tel:${COMPANY_DETAILS.mobile}`}
                className="flex items-center gap-1.5 text-sky-300 hover:text-white font-mono font-semibold transition-colors"
              >
                <Phone className="w-3 h-3 text-sky-400" />
                <span>Trade Helpline: {COMPANY_DETAILS.phoneDisplay}</span>
              </a>
              <span className="text-blue-400/40">|</span>
              <span className="text-blue-200 font-medium">9:00 AM – 8:30 PM</span>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div
          className={`w-full transition-all duration-300 ${
            isScrolled
              ? "bg-white/95 backdrop-blur-xl shadow-md border-b border-slate-200/90 py-2 sm:py-2.5"
              : "bg-white border-b border-slate-200/80 py-2.5 sm:py-3.5"
          }`}
        >
          <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
            {/* Logo Brand Identity */}
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 min-w-0 group">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-blue-50 to-sky-50 shadow-xs border border-blue-200/80 p-1 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-blue-400 transition-all">
                <img
                  src="/logo.png"
                  alt={COMPANY_DETAILS.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-black text-[#071529] text-sm sm:text-lg tracking-tight block leading-tight truncate">
                    {COMPANY_DETAILS.name}
                  </span>
                  <Badge variant="outline" className="hidden sm:inline-flex text-[9px] font-bold border-blue-200 text-blue-800 bg-blue-50/80 px-1.5 py-0">
                    Est. 2004
                  </Badge>
                </div>
                <span className="text-[10px] sm:text-[11px] font-semibold text-blue-700 tracking-tight block truncate">
                  Agency (Surgical/Ethical) • Store (Generic)
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
              <Link
                href="/"
                className={`text-xs font-bold transition-all px-3 py-1.5 rounded-lg flex items-center gap-1.5 ${
                  isHomeActive
                    ? "bg-blue-50 text-blue-800 border border-blue-200/80"
                    : "text-slate-600 hover:text-[#071529] hover:bg-slate-50"
                }`}
              >
                <Home className="w-3.5 h-3.5 text-blue-600" />
                <span>Home</span>
              </Link>

              {/* Division 1: Agency Link */}
              <Link
                href="/agency"
                className={`text-xs font-bold transition-all px-3 py-1.5 rounded-lg flex items-center gap-1.5 ${
                  isAgencyActive
                    ? "bg-[#0b1e36] text-white shadow-xs"
                    : "text-slate-700 hover:text-blue-900 hover:bg-blue-50/70 border border-slate-200/60"
                }`}
              >
                <Stethoscope className="w-3.5 h-3.5 text-sky-400" />
                <span>Surgical & Ethical</span>
                <span className={`text-[9px] px-1.5 py-0 rounded font-semibold uppercase ${
                  isAgencyActive ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-800"
                }`}>
                  Agency
                </span>
              </Link>

              {/* Division 2: Store Link */}
              <Link
                href="/store"
                className={`text-xs font-bold transition-all px-3 py-1.5 rounded-lg flex items-center gap-1.5 ${
                  isStoreActive
                    ? "bg-[#0284c7] text-white shadow-xs"
                    : "text-slate-700 hover:text-sky-900 hover:bg-sky-50/70 border border-slate-200/60"
                }`}
              >
                <Pill className="w-3.5 h-3.5 text-sky-300" />
                <span>Generic Medicine</span>
                <span className={`text-[9px] px-1.5 py-0 rounded font-semibold uppercase ${
                  isStoreActive ? "bg-sky-800 text-white" : "bg-sky-100 text-sky-800"
                }`}>
                  Store
                </span>
              </Link>

              <Link
                href="/#credentials"
                className="text-xs font-medium text-slate-600 hover:text-[#071529] hover:bg-slate-50 px-2.5 py-1.5 rounded-lg transition-colors"
              >
                Licenses & Trust
              </Link>

              <Link
                href="/#about"
                className="text-xs font-medium text-slate-600 hover:text-[#071529] hover:bg-slate-50 px-2.5 py-1.5 rounded-lg transition-colors"
              >
                Leadership
              </Link>

              <Link
                href="/#contact"
                className="text-xs font-medium text-slate-600 hover:text-[#071529] hover:bg-slate-50 px-2.5 py-1.5 rounded-lg transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Right Action Tools */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              {/* Phone Helpline */}
              <a
                href={`tel:${COMPANY_DETAILS.mobile}`}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                title="Call trade desk"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span className="hidden sm:inline font-mono">{COMPANY_DETAILS.phoneDisplay}</span>
              </a>

              {/* Direct WhatsApp Quote Button */}
              <a
                href={COMPANY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-bold shadow-xs hover:shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">WhatsApp Order</span>
                <span className="sm:hidden">Chat</span>
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors border border-slate-200"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-4 py-4 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-100">
              {/* Agency Mobile Card */}
              <Link
                href="/agency"
                className={`p-3 rounded-xl border text-left transition-all ${
                  isAgencyActive
                    ? "bg-[#0b1e36] text-white border-[#0b1e36]"
                    : "bg-blue-50/60 border-blue-200 text-slate-800"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <Stethoscope className={`w-4 h-4 ${isAgencyActive ? "text-sky-300" : "text-blue-600"}`} />
                  <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded uppercase ${
                    isAgencyActive ? "bg-white/20 text-white" : "bg-blue-200 text-blue-900"
                  }`}>Agency</span>
                </div>
                <div className="font-extrabold text-xs">Surgical & Ethical</div>
                <div className={`text-[10px] mt-0.5 ${isAgencyActive ? "text-slate-300" : "text-slate-500"}`}>Hospital & Doctor Supply</div>
              </Link>

              {/* Store Mobile Card */}
              <Link
                href="/store"
                className={`p-3 rounded-xl border text-left transition-all ${
                  isStoreActive
                    ? "bg-[#0284c7] text-white border-[#0284c7]"
                    : "bg-sky-50/60 border-sky-200 text-slate-800"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <Pill className={`w-4 h-4 ${isStoreActive ? "text-white" : "text-sky-600"}`} />
                  <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded uppercase ${
                    isStoreActive ? "bg-white/20 text-white" : "bg-sky-200 text-sky-900"
                  }`}>Store</span>
                </div>
                <div className="font-extrabold text-xs">Generic Medicine</div>
                <div className={`text-[10px] mt-0.5 ${isStoreActive ? "text-slate-200" : "text-slate-500"}`}>Chemist High Margin</div>
              </Link>
            </div>

            <div className="space-y-1">
              <Link
                href="/"
                className="flex items-center justify-between p-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                <span className="flex items-center gap-2">
                  <Home className="w-3.5 h-3.5 text-blue-600" />
                  Home Gateway
                </span>
                <ArrowRight className="w-3 h-3 text-slate-400" />
              </Link>

              <Link
                href="/#credentials"
                className="flex items-center justify-between p-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  Licenses & Trust (Form 20B/21B)
                </span>
                <ArrowRight className="w-3 h-3 text-slate-400" />
              </Link>

              <Link
                href="/#about"
                className="flex items-center justify-between p-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                <span className="flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-blue-600" />
                  About Proprietor Santosh Kumar
                </span>
                <ArrowRight className="w-3 h-3 text-slate-400" />
              </Link>

              <Link
                href="/#contact"
                className="flex items-center justify-between p-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                <span className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  Contact & Visiting Location
                </span>
                <ArrowRight className="w-3 h-3 text-slate-400" />
              </Link>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
              <a
                href={COMPANY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Order Desk</span>
              </a>
              <a
                href={`tel:${COMPANY_DETAILS.mobile}`}
                className="py-2 px-3 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>Call</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
