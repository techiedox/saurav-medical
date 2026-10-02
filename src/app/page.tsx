"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Truck, Users, MapPin } from "lucide-react";
import { SauravLogo, SauravWordmark } from "@/components/brand/saurav-brand-identity";
import {
  AgencySuppliesSvg,
  StorePharmacySvg,
} from "@/components/gateway/gateway-vectors";
import { PharmacistCounterSticker } from "@/components/stickers/pharmacist-counter-sticker";

export default function HomePage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eaf2f8] via-[#f3f8fc] to-[#e8f1f8] flex flex-col p-4 sm:p-6 lg:p-8 font-sans selection:bg-blue-600 selection:text-white relative overflow-x-clip">
      {/* Ambient Lighting & Soft Background Circles */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-sky-200/35 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col py-1 sm:py-3">
        {/* Top Header */}
        <header className="flex items-center justify-between pb-3 sm:pb-6">
          {/* Logo & Wordmark Brand Identity */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
            <SauravLogo className="w-9 h-9 sm:w-11 sm:h-11 transition-transform group-hover:scale-105" priority />
            <SauravWordmark subtitle="MEDICAL" size="md" />
          </Link>

          {/* Clean 4-Line Quote */}
          <div className="text-right text-[9px] font-bold text-slate-400 tracking-wider uppercase leading-tight border-l border-slate-200/90 pl-3 hidden sm:block">
            HEALTHCARE<br />BUILDS A<br />BETTER<br />TOMORROW
          </div>
        </header>

        {/* Hero Section: Recreated with Pharmacist Counter Component (Matching Inspo) */}
        <section className="grid grid-cols-12 gap-3 sm:gap-6 items-center py-2.5 sm:py-5">
          <div className="col-span-7 sm:col-span-7 space-y-1 sm:space-y-2">
            <span className="text-[10px] sm:text-xs font-bold text-sky-600 tracking-[0.2em] uppercase block">
              WELCOME TO
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0b2545] tracking-tight leading-[1.05]">
              SAURAV<br />MEDICAL
            </h1>
            <p className="text-[11px] sm:text-sm text-slate-600 leading-relaxed font-normal max-w-md pt-0.5 sm:pt-1">
              Your trusted partner in healthcare, serving different needs through two independent businesses.
            </p>
          </div>

          {/* Pharmacist Counter Illustration Component */}
          <div className="col-span-5 sm:col-span-5 flex items-center justify-center sm:justify-end">
            <PharmacistCounterSticker className="w-full max-w-[160px] sm:max-w-[280px] lg:max-w-[340px] h-auto drop-shadow-md select-none" />
          </div>
        </section>

        {/* TWO 3D CLAYMORPHIC ENTERPRISE CARDS (IN ONE ROW ON MOBILE) */}
        <section className="grid grid-cols-2 gap-3 sm:gap-6 py-2.5 sm:py-5">
          {/* Card 1: SAURAV MEDICAL AGENCY (Ethical Wholesale & Depots) */}
          <div className="rounded-2xl sm:rounded-[32px] p-3 sm:p-6 bg-gradient-to-b from-[#e3f0fc] to-[#d6e9fa] border border-blue-200/70 shadow-[0_12px_28px_rgba(59,130,246,0.12),inset_0_1px_1px_rgba(255,255,255,0.85)] flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 group">
            {/* Top Badge */}
            <div>
              <span className="inline-block px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/70 backdrop-blur-md text-[8px] sm:text-[10px] font-bold text-sky-700 tracking-wider uppercase border border-white shadow-xs">
                35+ YRS • ETHICAL
              </span>
            </div>

            {/* 3D Vector Illustration */}
            <div className="my-2 sm:my-3 flex items-center justify-center">
              <AgencySuppliesSvg className="w-20 h-16 sm:w-44 sm:h-32 group-hover:scale-105 transition-transform duration-300" />
            </div>

            {/* Content & Action */}
            <div className="space-y-0.5 sm:space-y-1">
              <span className="text-[9px] sm:text-[11px] font-black text-[#003894] tracking-wider uppercase block">
                SAURAV
              </span>
              <h2 className="text-xs sm:text-xl font-extrabold text-[#039c04] tracking-tight leading-tight">
                MEDICAL AGENCY
              </h2>
              <div className="text-[9px] sm:text-xs text-slate-600 pt-0.5 sm:pt-1 leading-snug space-y-0.5">
                <p className="line-clamp-1 sm:line-clamp-none font-medium">Ethical &amp; Doctor Prescriptions</p>
                <p className="hidden sm:block">28 Pharma Depots • Cold Chain Vaccines</p>
                <p className="sm:hidden text-sky-700 font-semibold text-[8px]">Ethical &amp; Cold Chain</p>
              </div>

              <Link
                href="/agency"
                className="mt-2.5 sm:mt-4 w-full py-1.5 sm:py-2.5 px-2 sm:px-4 rounded-full bg-[#1b5cb8] hover:bg-[#154a96] text-white font-bold text-[10px] sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2 shadow-md shadow-blue-600/25 transition-all active:scale-95 group/btn"
              >
                <span>Agency</span>
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:translate-x-0.5 transition-transform shrink-0">
                  <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                </div>
              </Link>
            </div>
          </div>

          {/* Card 2: SAURAV MEDICAL STORE (Generic & Surgical Wholesale) */}
          <div className="rounded-2xl sm:rounded-[32px] p-3 sm:p-6 bg-gradient-to-b from-[#f0f9ff] to-[#e0f2fe] border border-sky-200/70 shadow-[0_12px_28px_rgba(14,165,233,0.12),inset_0_1px_1px_rgba(255,255,255,0.95)] flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 group">
            {/* Top Badge */}
            <div>
              <span className="inline-block px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/80 backdrop-blur-md text-[8px] sm:text-[10px] font-bold text-emerald-700 tracking-wider uppercase border border-white shadow-xs">
                3+ YRS • GENERIC
              </span>
            </div>

            {/* 3D Vector Illustration */}
            <div className="my-2 sm:my-3 flex items-center justify-center">
              <StorePharmacySvg className="w-20 h-16 sm:w-44 sm:h-32 group-hover:scale-105 transition-transform duration-300" />
            </div>

            {/* Content & Action */}
            <div className="space-y-0.5 sm:space-y-1">
              <span className="text-[9px] sm:text-[11px] font-black text-[#003894] tracking-wider uppercase block">
                SAURAV
              </span>
              <h2 className="text-xs sm:text-xl font-extrabold text-[#039c04] tracking-tight leading-tight">
                MEDICAL STORE
              </h2>
              <div className="text-[9px] sm:text-xs text-slate-600 pt-0.5 sm:pt-1 leading-snug space-y-0.5">
                <p className="line-clamp-1 sm:line-clamp-none font-medium">Generic &amp; Surgical Medicines</p>
                <p className="hidden sm:block">Top Brands • 10+1 Deals • Fast Sourcing</p>
                <p className="sm:hidden text-emerald-700 font-semibold text-[8px]">Generic &amp; Surgical</p>
              </div>

              <Link
                href="/store"
                className="mt-2.5 sm:mt-4 w-full py-1.5 sm:py-2.5 px-2 sm:px-4 rounded-full bg-[#0052ff] hover:bg-blue-700 text-white font-bold text-[10px] sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2 shadow-md shadow-blue-500/20 transition-all active:scale-95 group/btn"
              >
                <span>Store</span>
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:translate-x-0.5 transition-transform shrink-0">
                  <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* TRUST HIGHLIGHTS BAR (Clean 4-Item Pill Container - "Batch") */}
        <section className="pt-3 sm:pt-6 pb-2 sm:pb-4">
          <div className="w-full max-w-2xl mx-auto rounded-2xl sm:rounded-full bg-white/80 backdrop-blur-md border border-white shadow-[0_8px_24px_rgba(15,23,42,0.06)] px-3 sm:px-6 py-3.5 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-0 items-center sm:divide-x sm:divide-slate-100">
            <div className="flex flex-col items-center text-center px-1">
              <ShieldCheck className="w-4 h-4 text-sky-600 mb-1" />
              <span className="text-xs font-bold text-slate-700 leading-tight">
                Genuine Products
              </span>
            </div>
            <div className="flex flex-col items-center text-center px-1">
              <Truck className="w-4 h-4 text-sky-600 mb-1" />
              <span className="text-xs font-bold text-slate-700 leading-tight">
                Reliable Supply
              </span>
            </div>
            <div className="flex flex-col items-center text-center px-1">
              <Users className="w-4 h-4 text-sky-600 mb-1" />
              <span className="text-xs font-bold text-slate-700 leading-tight">
                Professional Service
              </span>
            </div>
            <div className="flex flex-col items-center text-center px-1">
              <MapPin className="w-4 h-4 text-sky-600 mb-1" />
              <span className="text-xs font-bold text-slate-700 leading-tight">
                Local Presence
              </span>
            </div>
          </div>
        </section>

        {/* FOOTER: Pushed below fold so it is viewed upon scrolling */}
        <footer className="mt-8 sm:mt-12 pt-6 sm:pt-8 pb-28 sm:pb-12 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-[11px] sm:text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <SauravLogo className="w-5 h-5" />
            <span>© {currentYear} <strong className="text-slate-800">Saurav Medical</strong> • Bhagalpur, Bihar</span>
          </div>

          {/* Built with ❤️ by Techiedox */}
          <div className="flex items-center gap-1.5 font-medium text-slate-500">
            <span>Built with</span>
            <span className="text-red-500 animate-pulse">❤️</span>
            <span>by</span>
            <a
              href="https://techiedox.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#003894] hover:text-blue-800 font-bold underline underline-offset-2 transition-colors"
            >
              Techiedox
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
