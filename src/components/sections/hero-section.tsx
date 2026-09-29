"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ShieldCheck,
  Building2,
  ArrowRight,
  Truck,
  Phone,
  Store,
  MapPin,
  FileCheck2,
  Sparkles,
  Award,
  Stethoscope,
  Pill,
  CheckCircle2,
  Syringe,
  Boxes,
  Zap,
  TrendingUp,
  MessageCircle,
} from "lucide-react";
import { COMPANY_DETAILS, DIVISIONS } from "@/lib/data";

export function HeroSection() {
  const { agency, store } = DIVISIONS;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-sky-50/40 pt-6 pb-14 sm:pt-12 sm:pb-24 border-b border-blue-100">
      {/* Dynamic Animated Ambient Light Orbs (Shades of Blue and Light Blue) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-20 w-80 sm:w-[550px] h-80 sm:h-[550px] bg-gradient-to-br from-blue-400/20 via-sky-300/15 to-cyan-200/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute top-1/3 -left-28 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-gradient-to-tr from-sky-400/20 via-indigo-300/15 to-blue-200/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-cyan-100/40 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
        {/* Top Header & Headline Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          {/* Compliance & Established Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-blue-200 shadow-xs hover:border-blue-300 transition-all">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[#071529] font-bold text-xs">
              EST. 2004 • Form 20B & 21B Licensed Wholesale Stockist
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-blue-700 font-semibold text-xs flex items-center gap-1">
              <MapPin className="w-3 h-3 text-blue-600" /> Bhagalpur, Bihar
            </span>
          </div>

          {/* Main Huge Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black tracking-tight text-[#071529] leading-[1.08]">
              Saurav Medical
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-900 via-blue-700 to-sky-600 bg-clip-text text-transparent leading-snug">
              Two Specialized Divisions. One Trusted Legacy in Healthcare.
            </p>
          </div>

          {/* Subtitle */}
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Operating two authorized wholesale pillars in Bhagalpur under proprietor <strong>{COMPANY_DETAILS.ownerName}</strong>. Select your division below to explore specialized hospital surgical supplies, ethical medicines, or high-margin retail generics.
          </p>
        </div>

        {/* The Two Master Dual Portals (Selection Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* PORTAL 1: Saurav Medical Agency (Surgical & Ethical) */}
          <div className="relative group rounded-3xl p-1 bg-gradient-to-b from-blue-600/30 via-slate-200 to-blue-200/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="h-full bg-white rounded-[1.4rem] p-6 sm:p-8 flex flex-col justify-between space-y-6 relative overflow-hidden">
              {/* Subtle top background accent */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-blue-100/60 to-transparent rounded-bl-full pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* Division Badge & Icon */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0b1e36] text-white text-[11px] font-extrabold tracking-wide uppercase shadow-xs">
                    <Stethoscope className="w-3.5 h-3.5 text-sky-400" />
                    Division 1
                  </span>
                  <Badge variant="outline" className="border-blue-200 text-blue-900 bg-blue-50 text-[10px] font-bold">
                    Hospital & Doctors
                  </Badge>
                </div>

                {/* Division Title */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#071529] tracking-tight group-hover:text-blue-900 transition-colors">
                    {agency.name}
                  </h2>
                  <p className="text-xs sm:text-sm font-bold text-blue-700 mt-1">
                    Wholesale Surgical Disposables & Ethical Medicine Supply
                  </p>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Supplying multi-specialty hospitals, nursing homes, clinics, and surgeons with genuine sterile surgical consumables, ICU injectables, and ethical medicines at direct depot rates.
                </p>

                {/* Key Bullet Highlights */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong>Sterile Surgical Disposables:</strong> Syringes, IV sets, cannula, examination gloves, and surgical cotton.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong>Ethical Rx Medicines:</strong> Direct authorized supply from Cipla, Alkem, Sun Pharma, Abbott, and Biochem.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong>Emergency OT Supply:</strong> 24/7 on-call dispatch for urgent surgical and critical care needs.</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons for Agency */}
              <div className="pt-4 border-t border-slate-100 space-y-2.5 relative z-10">
                <Button
                  asChild
                  className="w-full bg-[#0b1e36] hover:bg-[#153a6b] text-white h-12 rounded-xl text-xs sm:text-sm font-black shadow-md hover:shadow-lg transition-all group/btn flex items-center justify-center gap-2"
                >
                  <Link href="/agency">
                    <Stethoscope className="w-4 h-4 text-sky-400 group-hover/btn:scale-110 transition-transform" />
                    <span>Enter Surgical & Ethical Division</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                  <span>Target: Hospitals, Clinics, Surgeons</span>
                  <a
                    href={COMPANY_DETAILS.whatsappAgencyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 hover:underline"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* PORTAL 2: Saurav Medical Store Agency (Generic Medicine Wholesale) */}
          <div className="relative group rounded-3xl p-1 bg-gradient-to-b from-sky-500/30 via-slate-200 to-sky-200/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="h-full bg-white rounded-[1.4rem] p-6 sm:p-8 flex flex-col justify-between space-y-6 relative overflow-hidden">
              {/* Subtle top background accent */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-sky-100/60 to-transparent rounded-bl-full pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* Division Badge & Icon */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0284c7] text-white text-[11px] font-extrabold tracking-wide uppercase shadow-xs">
                    <Pill className="w-3.5 h-3.5 text-sky-200" />
                    Division 2
                  </span>
                  <Badge variant="outline" className="border-sky-200 text-sky-900 bg-sky-50 text-[10px] font-bold">
                    Chemist High Margin
                  </Badge>
                </div>

                {/* Division Title */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#071529] tracking-tight group-hover:text-sky-900 transition-colors">
                    {store.name}
                  </h2>
                  <p className="text-xs sm:text-sm font-bold text-sky-700 mt-1">
                    High-Margin Wholesale Generic Medicines & Chemist Schemes
                  </p>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Empowering 500+ retail pharmacies and medical stores across Bhagalpur and East Bihar with fast-moving generic formulations, highest profit margins, and attractive 10+1 free schemes.
                </p>

                {/* Key Bullet Highlights */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span><strong>1,500+ Generic SKUs:</strong> Fast-moving antibiotics, analgesics, pantoprazole, and cough syrups.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span><strong>Continuous 10+1 Free Schemes:</strong> Regular festive deals and slab discounts for maximum retailer profit.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span><strong>Same-Day Chemist Dispatch:</strong> Direct supply to local chemist counters with computerized GST invoices.</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons for Store */}
              <div className="pt-4 border-t border-slate-100 space-y-2.5 relative z-10">
                <Button
                  asChild
                  className="w-full bg-[#0284c7] hover:bg-[#0369a1] text-white h-12 rounded-xl text-xs sm:text-sm font-black shadow-md hover:shadow-lg transition-all group/btn flex items-center justify-center gap-2"
                >
                  <Link href="/store">
                    <Store className="w-4 h-4 text-white group-hover/btn:scale-110 transition-transform" />
                    <span>Enter Generic Store Division</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                  <span>Target: Retail Medical Stores, Chemists</span>
                  <a
                    href={COMPANY_DETAILS.whatsappStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-sky-700 hover:text-sky-900 flex items-center gap-1 hover:underline"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Request Scheme Sheet</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item Quick Trust Ribbon */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-blue-100 p-4 sm:p-5 shadow-xs grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 text-left">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-100">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-extrabold text-[#071529] block">100% Genuine</span>
              <span className="text-[10px] text-slate-500 font-medium">Batch-Tested Stock</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-left">
            <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center shrink-0 border border-sky-100">
              <Building2 className="w-5 h-5 text-sky-600" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-extrabold text-[#071529] block">21+ Top Brands</span>
              <span className="text-[10px] text-slate-500 font-medium">Direct Company Depots</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-left">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-100">
              <Truck className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-extrabold text-[#071529] block">Same-Day Supply</span>
              <span className="text-[10px] text-slate-500 font-medium">Bhagalpur & East Bihar</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-left">
            <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center shrink-0 border border-sky-100">
              <FileCheck2 className="w-5 h-5 text-sky-600" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-extrabold text-[#071529] block">GST B2B Invoices</span>
              <span className="text-[10px] text-slate-500 font-medium">100% ITC Eligible</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
