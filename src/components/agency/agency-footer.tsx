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
  Star,
} from "lucide-react";
import { AGENCY_DETAILS } from "@/lib/data";
import { SauravLogo } from "@/components/brand/saurav-brand-identity";

export function AgencyFooter() {
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
                  <span className="text-emerald-400">MEDICAL AGENCY</span>
                </span>
                <span className="text-xs text-slate-400 font-semibold block mt-0.5">
                  {AGENCY_DETAILS.tagline}
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              Direct authorized depot stockist for 28 pharmaceutical leaders and certified 2°C – 8°C cold chain vaccine distributor serving healthcare facilities, nursing homes, and retail pharmacies across Bihar. If any required specialty is not in ready stock, we arrange and supply it as quickly as possible.
            </p>

            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-sky-300 font-medium">
                Wholesale DL: Form 20B &amp; 21B
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-sky-400 font-medium">
                ICICI Bank Verified Account
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
                  • Vaccines &amp; Biologicals (2°C – 8°C Cold Chain)
                </a>
              </li>
              <li>
                <a href="#supplies" className="hover:text-white transition-colors">
                  • Ethical Prescription Medicines
                </a>
              </li>
              <li>
                <a href="#supplies" className="hover:text-white transition-colors">
                  • Hospital &amp; Critical Care Injectables
                </a>
              </li>
              <li>
                <a href="#supplies" className="hover:text-white transition-colors">
                  • Lactodex &amp; Pediatric Nutrition
                </a>
              </li>
              <li>
                <a href="#brands" className="hover:text-white transition-colors">
                  • 28 Authorized Pharma Brand Depots
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide">
              Agency Contact &amp; Visiting Desk
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <strong>Address:</strong> {AGENCY_DETAILS.address}
                  <div className="mt-1">
                    <a
                      href={AGENCY_DETAILS.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 underline underline-offset-2 font-medium"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Gaurav Sarawgi:</strong>{" "}
                  <a href={`tel:${AGENCY_DETAILS.mobile}`} className="text-sky-300 font-mono font-bold hover:underline">
                    {AGENCY_DETAILS.phoneDisplay}
                  </a>{" "}
                  | Office: {AGENCY_DETAILS.officePhone}
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
                href={AGENCY_DETAILS.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <Star className="w-4 h-4 fill-slate-950 text-slate-950" />
                <span>★ 4.9 • Rate Us / Google Reviews</span>
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
