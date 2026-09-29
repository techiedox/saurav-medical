"use client";

import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  Store,
  Stethoscope,
  Pill,
  MessageCircle,
  Building2,
} from "lucide-react";
import { COMPANY_DETAILS, DIVISIONS } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#071529] text-slate-300 border-t border-blue-900/60 text-xs pb-16 md:pb-0 print:hidden">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center shadow-md border border-blue-300 shrink-0">
                <img
                  src="/logo.png"
                  alt={COMPANY_DETAILS.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-black text-white text-lg tracking-tight block leading-tight">
                  {COMPANY_DETAILS.name}
                </span>
                <span className="text-[10px] text-sky-400 uppercase font-semibold tracking-wider block">
                  Healthcare Wholesale Distributors • Est. 2004
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              Operating two dedicated healthcare wholesale pillars in Bhagalpur: <strong>Saurav Medical Agency</strong> for Surgical Disposables & Ethical Medicines, and <strong>Saurav Medical Store Agency</strong> for High-Margin Generic Medicines.
            </p>

            {/* Live Location Box */}
            <div className="rounded-xl overflow-hidden border border-blue-900/80 bg-slate-900/90 shadow-md">
              <div className="p-2 bg-[#050f1e] border-b border-blue-950 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-sky-400 font-semibold text-[11px]">
                  <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>Trade Desk • Bhagalpur</span>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Kotwali+Chowk+Bhagalpur+Bihar+812002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-sky-300 hover:text-white flex items-center gap-1 font-medium underline"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>

              <iframe
                title="Saurav Medical Trade Location"
                src="https://maps.google.com/maps?q=Kotwali+Chowk,+Bhagalpur,+Bihar+812002&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="130"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full opacity-85 hover:opacity-100 transition-opacity"
              />

              <div className="p-2 bg-[#050f1e] text-[10px] text-slate-400 flex items-center justify-between border-t border-blue-950">
                <span className="truncate pr-2">{COMPANY_DETAILS.address}</span>
                <span className="text-sky-400 font-mono shrink-0">Form 20B/21B</span>
              </div>
            </div>
          </div>

          {/* Division 1: Agency (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-blue-600/30 flex items-center justify-center text-sky-400 border border-blue-500/30">
                <Stethoscope className="w-3.5 h-3.5" />
              </div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider">
                Saurav Medical Agency
              </h4>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Institutional wholesale supply for hospitals, nursing homes, and doctors across East Bihar.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>• Sterile Surgical Disposables & Syringes</li>
              <li>• Critical Care & ICU Injectables</li>
              <li>• Ethical Prescription Medicines (Cipla, Sun, Alkem)</li>
              <li>• Hospital OT Rate Contracts & Emergency Delivery</li>
            </ul>
            <div className="pt-1">
              <Link
                href="/agency"
                className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 font-bold text-xs"
              >
                <span>Explore Agency Division</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Division 2: Store (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-sky-600/30 flex items-center justify-center text-sky-300 border border-sky-500/30">
                <Pill className="w-3.5 h-3.5" />
              </div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider">
                Saurav Medical Store Agency
              </h4>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Wholesale generic medicines & high profit schemes for 500+ retail chemist counters.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>• 1,500+ Fast-Moving Generic Formulations</li>
              <li>• Active 10+1 Free Chemist Bonus Schemes</li>
              <li>• Maximum Retail Profitability (35%–60%)</li>
              <li>• Same-Day Local Chemist Delivery in Bhagalpur</li>
            </ul>
            <div className="pt-1">
              <Link
                href="/store"
                className="inline-flex items-center gap-1.5 text-sky-300 hover:text-white font-bold text-xs"
              >
                <span>Explore Generic Store</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Contact & Hours (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Trade Desk
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div>
                <span className="text-[10px] text-slate-500 block uppercase font-semibold">Proprietor</span>
                <span className="font-bold text-white">{COMPANY_DETAILS.ownerName}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 block uppercase font-semibold">Helpline</span>
                <a href={`tel:${COMPANY_DETAILS.mobile}`} className="font-mono text-sky-300 font-bold block hover:underline">
                  {COMPANY_DETAILS.phoneDisplay}
                </a>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 block uppercase font-semibold">Business Hours</span>
                <span className="text-slate-400 text-[11px] block">{COMPANY_DETAILS.hours}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={COMPANY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm hover:from-emerald-700 hover:to-teal-700 transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Order</span>
              </a>
            </div>
          </div>
        </div>

        {/* Lower Legal & Compliance Strip */}
        <div className="mt-10 pt-6 border-t border-blue-950 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>
            © {currentYear} <strong>{COMPANY_DETAILS.name}</strong> • All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <span>{COMPANY_DETAILS.dlPlaceholder}</span>
            <span>•</span>
            <span>{COMPANY_DETAILS.gstinPlaceholder}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
