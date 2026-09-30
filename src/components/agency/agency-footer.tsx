"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";
import { AGENCY_DETAILS } from "@/lib/data";

export function AgencyFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#060c18] text-slate-300 border-t border-slate-800 text-xs print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-28 sm:py-14 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white text-red-600 flex items-center justify-center p-1.5 shadow-md shrink-0">
                <div className="w-full h-full rounded-full border-2 border-red-600 flex items-center justify-center relative">
                  <div className="w-1.5 h-full bg-red-600 absolute" />
                  <div className="h-1.5 w-full bg-red-600 absolute" />
                </div>
              </div>
              <div>
                <span className="font-black text-white text-lg tracking-tight block leading-tight">
                  {AGENCY_DETAILS.name}
                </span>
                <span className="text-xs text-sky-400 font-semibold block mt-0.5">
                  {AGENCY_DETAILS.tagline}
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              Wholesale medicine agency supplying fast-moving generic formulations, surgical consumables, ayurvedic tonics, and attractive 10+1 / 10+2 trade bonus deals for retail medical stores.
            </p>

            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-sky-300 font-medium">
                Wholesale DL: Form 20B &amp; 21B
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-red-400 font-medium">
                Kotwali Chowk (Next to ICICI Bank)
              </span>
            </div>
          </div>

          {/* Quick Sections (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide">
              Agency Portfolio
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#supplies" className="hover:text-white transition-colors">
                  • Fast-Moving Generic Tablets &amp; Capsules
                </a>
              </li>
              <li>
                <a href="#supplies" className="hover:text-white transition-colors">
                  • Surgical Disposables &amp; Infusion Sets
                </a>
              </li>
              <li>
                <a href="#supplies" className="hover:text-white transition-colors">
                  • Ayurvedic &amp; OTC Formulations
                </a>
              </li>
              <li>
                <a href="#schemes" className="hover:text-white transition-colors">
                  • 10+1 &amp; 10+2 Chemist Bonus Deals
                </a>
              </li>
              <li>
                <a href="#brands" className="hover:text-white transition-colors">
                  • 21 Generic Company Lines
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide">
              Agency Contact &amp; Counter
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Address:</strong> {AGENCY_DETAILS.address}
                </span>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Santosh Kumar:</strong>{" "}
                  <a href={`tel:${AGENCY_DETAILS.mobile}`} className="text-sky-300 font-mono font-bold hover:underline">
                    {AGENCY_DETAILS.phoneDisplay}
                  </a>
                </span>
              </div>

              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Email:</strong> {AGENCY_DETAILS.email}
                </span>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Hours:</strong> {AGENCY_DETAILS.hours}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={AGENCY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-[#0052ff] hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Santosh Kumar ({AGENCY_DETAILS.phoneDisplay})</span>
              </a>
            </div>
          </div>
        </div>

        {/* Lower Legal Bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>
            © {currentYear} <strong>{AGENCY_DETAILS.name}</strong> • All rights reserved.
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
