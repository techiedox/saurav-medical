"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Stethoscope,
  Syringe,
  ShieldCheck,
  Building2,
  Phone,
  MessageCircle,
  Search,
  CheckCircle2,
  Truck,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Store,
  FileCheck2,
  FileText,
  Clock,
  ChevronRight,
  Layers,
} from "lucide-react";
import { COMPANY_DETAILS, DIVISIONS, SURGICAL_ETHICAL_PRODUCTS } from "@/lib/data";

export default function AgencyPage() {
  const { agency } = DIVISIONS;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "Surgical Disposables",
    "Ethical Formulations",
    "Critical Care & Injections",
    "Hospital Consumables",
    "Wound & Ortho Care",
  ];

  const filteredProducts = SURGICAL_ETHICAL_PRODUCTS.filter((prod) => {
    const matchesCat = selectedCategory === "All" || prod.category === selectedCategory;
    const matchesSearch =
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.genericName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const getWhatsAppProductUrl = (productName: string, company: string) => {
    const text = encodeURIComponent(
      `Hello Saurav Medical Agency, I am interested in wholesale quotation for "${productName}" (${company}). Please share latest institutional rate and ready stock lot details.`
    );
    return `https://wa.me/917070605245?text=${text}`;
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-28 md:pb-16 pt-3 sm:pt-6">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        {/* Navigation Breadcrumb & Fast Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-1 text-xs text-slate-500 border-b border-slate-200/80 pb-2">
          <div className="flex items-center gap-1.5 font-medium min-w-0">
            <Link href="/" className="hover:text-blue-900 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="font-bold text-[#071529] flex items-center gap-1">
              <Stethoscope className="w-3.5 h-3.5 text-blue-600" />
              Saurav Medical Agency (Surgical & Ethical)
            </span>
          </div>

          {/* Quick Division Switcher */}
          <Link
            href="/store"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-800 hover:bg-sky-100 border border-sky-200 text-xs font-bold transition-all w-fit"
          >
            <span>Looking for Generic Medicines? Switch to Store</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Hero Banner for Agency */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#071529] via-[#0d284f] to-[#1e3a8a] text-white p-6 sm:p-10 lg:p-12 shadow-xl overflow-hidden border border-blue-900/60">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-sky-300 text-xs font-bold">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Hospital & Institutional Procurement Desk</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Saurav Medical Agency
            </h1>
            <p className="text-lg sm:text-xl font-bold text-sky-300">
              Wholesale Surgical Disposables, Hospital Supplies & Ethical Medicines
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl font-normal">
              Direct authorized stockist supplying multi-specialty hospitals, nursing homes, clinics, and retail chemists across Bhagalpur and East Bihar with 100% genuine sterile consumables, cold-chain critical care, and ethical formulations.
            </p>

            {/* Quick Badges Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                Form 20B/21B Licensed
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                100% Tax ITC B2B Invoices
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full text-slate-200">
                <Clock className="w-3.5 h-3.5 text-sky-400" />
                24/7 Emergency OT Dispatch
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href={COMPANY_DETAILS.whatsappAgencyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Request Hospital Quotation on WhatsApp</span>
              </a>
              <a
                href={`tel:${COMPANY_DETAILS.mobile}`}
                className="py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 text-sky-300" />
                <span>Call Trade Helpline</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-4 bg-white rounded-2xl border-slate-200/90 shadow-2xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center">
              <Syringe className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-sm font-black text-[#071529]">Sterile Surgical Disposables</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Safeone syringes, IV sets, cannula, nitrile gloves, and surgical cotton in bulk hospital carton packing.
            </p>
          </Card>

          <Card className="p-4 bg-white rounded-2xl border-slate-200/90 shadow-2xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-sm font-black text-[#071529]">Ethical Rx Formulations</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Leading prescription medicines from Cipla, Abbott, Sun Pharma, Alkem, Biochem, and Lupin.
            </p>
          </Card>

          <Card className="p-4 bg-white rounded-2xl border-slate-200/90 shadow-2xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center">
              <Truck className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-sm font-black text-[#071529]">Emergency OT Delivery</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Priority daily runs across Bhagalpur, Kahalgaon, Naugachia, and Banka with 24/7 OT emergency on call.
            </p>
          </Card>

          <Card className="p-4 bg-white rounded-2xl border-slate-200/90 shadow-2xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center">
              <FileCheck2 className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-sm font-black text-[#071529]">100% ITC Tax Invoices</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Full computerized B2B GST bills with batch numbers and HSN codes for hassle-free institutional audits.
            </p>
          </Card>
        </div>

        {/* Catalog Showcase Section */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200 pb-3">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-700 block">
                SURGICAL & ETHICAL SHOWCASE
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#071529] tracking-tight">
                Authorized Products & Hospital Consumables
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              Showing <strong>{filteredProducts.length}</strong> formulations & supplies
            </span>
          </div>

          {/* Search & Category Filter Controls */}
          <div className="bg-white rounded-2xl border border-slate-200 p-3 sm:p-4 shadow-xs space-y-3">
            {/* Search Bar */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search surgical item, ethical medicine, or brand (e.g. Syringe, Safeone, Augmentin)..."
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? "bg-[#0b1e36] text-white shadow-xs"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/70"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.map((prod) => (
              <Card
                key={prod.id}
                className="bg-white rounded-2xl border border-slate-200/90 hover:border-blue-500/50 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Image Container with Badge */}
                  <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5 z-10">
                      <span className="bg-[#071529]/90 backdrop-blur-md text-white text-[9px] font-bold px-2 py-0.5 rounded-md border border-white/20">
                        {prod.category}
                      </span>
                    </div>
                    <div className="absolute top-2.5 right-2.5 z-10">
                      <span className="bg-blue-600 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-md shadow-xs">
                        {prod.company}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 space-y-2">
                    <h3 className="font-extrabold text-[#071529] text-sm leading-snug group-hover:text-blue-900 transition-colors">
                      {prod.name}
                    </h3>
                    <p className="text-[11px] text-blue-700 font-semibold font-mono">
                      {prod.genericName}
                    </p>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {prod.description}
                    </p>

                    {/* Metadata Strip */}
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                      <span>Pack: <strong>{prod.packSize}</strong></span>
                      <span>HSN: <strong>{prod.hsnCode}</strong></span>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[9px] text-slate-400 block uppercase font-bold">Wholesale Reference</span>
                    <span className="text-sm font-black text-[#071529] font-mono">
                      ₹{prod.wholesalePrice}
                    </span>
                    <span className="text-[10px] text-slate-400 line-through ml-1.5">
                      MRP ₹{prod.mrp}
                    </span>
                  </div>

                  <a
                    href={getWhatsAppProductUrl(prod.name, prod.company)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-1.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all active:scale-95"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire</span>
                  </a>
                </div>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8 space-y-3">
              <Stethoscope className="w-10 h-10 text-slate-300 mx-auto" />
              <h3 className="text-base font-bold text-slate-800">No items match your search</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                We have over 800+ surgical items in stock. Please contact our trade desk directly for unlisted hospital supplies.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>

        {/* Hospital Rate Contract Box */}
        <div className="bg-white rounded-3xl border border-blue-200/80 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left max-w-xl">
            <Badge variant="outline" className="text-blue-800 border-blue-200 bg-blue-50 text-[10px] font-bold">
              Institutional Procurement
            </Badge>
            <h3 className="text-lg sm:text-xl font-black text-[#071529]">
              Managing a Hospital, Nursing Home or Trauma Center?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We offer customized annual rate contracts, priority bulk lot pricing, and 24/7 emergency dispatch for surgical consumables and critical care drugs.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={COMPANY_DETAILS.whatsappAgencyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 rounded-xl bg-[#0b1e36] hover:bg-[#153a6b] text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xs transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Contact Institutional Desk</span>
            </a>
            <a
              href={`tel:${COMPANY_DETAILS.mobile}`}
              className="py-2.5 px-4 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>Call Trade Desk</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
