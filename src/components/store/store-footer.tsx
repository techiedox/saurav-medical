"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Clock,
  Store,
  MessageCircle,
} from "lucide-react";
import { STORE_DETAILS } from "@/lib/data";
import { SauravLogo } from "@/components/brand/saurav-brand-identity";

export function StoreFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#060c18] text-slate-300 border-t border-slate-800 text-xs print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-28 sm:py-14 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="flex items-center gap-3">
              <SauravLogo className="w-11 h-11 bg-white rounded-xl p-1 shadow-md shrink-0" />
              <div>
                <span className="font-black text-white text-lg tracking-tight block leading-tight">
                  <span className="text-sky-400">SAURAV</span>{" "}
                  <span className="text-emerald-400">MEDICAL STORE</span>
                </span>
                <span className="text-xs text-slate-400 font-semibold block mt-0.5">
                  {STORE_DETAILS.tagline}
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              Wholesale medicine store supplying fast-moving generic formulations, surgical consumables, and top pharma brand lines with attractive 10+1 &amp; 10+2 trade bonus deals. If any medicine or brand is not in ready stock, we arrange and supply it as quickly as possible.
            </p>

            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-sky-300 font-medium">
                Wholesale DL: Form 20B &amp; 21B
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400 font-medium">
                Kotwali Chowk (Next to ICICI Bank)
              </span>
            </div>
          </div>

          {/* Quick Sections (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide">
              Store Portfolio
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#supplies" className="hover:text-white transition-colors">
                  • Fast-Moving Generic Medicines
                </a>
              </li>
              <li>
                <a href="#supplies" className="hover:text-white transition-colors">
                  • Surgical Disposables &amp; Consumables
                </a>
              </li>
              <li>
                <a href="#brands" className="hover:text-white transition-colors">
                  • Top Pharma Brands (Alkem, Cipla, Mankind...)
                </a>
              </li>
              <li>
                <a href="#schemes" className="hover:text-white transition-colors">
                  • 10+1 &amp; 10+2 Chemist Bonus Schemes
                </a>
              </li>
              <li>
                <a href="#sourcing" className="hover:text-white transition-colors">
                  • On-Demand Fast Medicine Availability
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide">
              Store Contact &amp; Counter
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong>Address:</strong> {STORE_DETAILS.address}
                  <div className="mt-1">
                    <a
                      href={STORE_DETAILS.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 underline underline-offset-2 font-medium"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Santosh Kumar:</strong>{" "}
                  <a href={`tel:${STORE_DETAILS.mobile}`} className="text-emerald-300 font-mono font-bold hover:underline">
                    {STORE_DETAILS.phoneDisplay}
                  </a>
                </span>
              </div>

              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Email:</strong> {STORE_DETAILS.email}
                </span>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Hours:</strong> {STORE_DETAILS.hours}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={STORE_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Santosh Kumar ({STORE_DETAILS.phoneDisplay})</span>
              </a>
            </div>
          </div>
        </div>

        {/* Lower Legal Bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>
            © {currentYear} <strong>{STORE_DETAILS.name}</strong> • All rights reserved.
          </div>

          <div className="flex items-center gap-1.5 text-slate-400 font-medium">
            <span>Built with</span>
            <span className="text-red-500 animate-pulse">❤️</span>
            <span>by</span>
            <a
              href="https://techiedox.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-300 font-bold transition-colors underline underline-offset-2"
            >
              Techiedox
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
