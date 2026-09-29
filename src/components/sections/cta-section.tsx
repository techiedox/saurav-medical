"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Stethoscope,
  Pill,
  ArrowRight,
  PhoneCall,
  FileCheck2,
  MessageCircle,
} from "lucide-react";
import { COMPANY_DETAILS } from "@/lib/data";

export function CTASection() {
  return (
    <section id="contact" className="py-14 sm:py-20 bg-gradient-to-br from-[#071529] via-[#0b1e36] to-[#0f274a] text-white relative overflow-hidden border-t border-blue-900/60">
      {/* Subtle Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-sky-500 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 sm:space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-700/50 text-[11px] text-sky-300 font-semibold shadow-inner">
          <FileCheck2 className="w-3.5 h-3.5" />
          <span>Form 20B & 21B Licensed Wholesale Stockist • Bhagalpur, Bihar</span>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Partner With Saurav Medical Today
          </h2>
          <p className="text-xs sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Supplying genuine surgical disposables, ethical prescription drugs, and high-margin generics with honest wholesale rates and same-day delivery.
          </p>
        </div>

        {/* Dual Division Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-[#1e40af] hover:bg-[#1d4ed8] text-white font-bold text-xs sm:text-sm px-5 h-12 rounded-xl group shadow-md flex items-center justify-center gap-2"
            asChild
          >
            <Link href="/agency">
              <Stethoscope className="w-4 h-4 text-sky-300" />
              <span>Surgical & Ethical (Agency)</span>
              <ArrowRight className="w-4 h-4 ml-0.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>

          <Button
            size="lg"
            className="w-full sm:w-auto bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-xs sm:text-sm px-5 h-12 rounded-xl group shadow-md flex items-center justify-center gap-2"
            asChild
          >
            <Link href="/store">
              <Pill className="w-4 h-4 text-sky-200" />
              <span>Generic Medicines (Store)</span>
              <ArrowRight className="w-4 h-4 ml-0.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border-white/20 text-white font-semibold text-xs sm:text-sm px-5 h-12 rounded-xl flex items-center justify-center gap-2"
            asChild
          >
            <a href={`tel:${COMPANY_DETAILS.mobile}`}>
              <PhoneCall className="w-4 h-4 text-sky-300" />
              <span>Call Helpline</span>
            </a>
          </Button>
        </div>

        {/* Trade Information Strip */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
            Active Form 20B/21B Wholesale License
          </span>
          <span>•</span>
          <span>GST B2B ITC Invoices</span>
          <span>•</span>
          <span>Kotwali Chowk, Bhagalpur</span>
        </div>
      </div>
    </section>
  );
}
