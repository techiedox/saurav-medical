"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Pill,
  Store,
  ShieldCheck,
  Building2,
  Phone,
  MessageCircle,
  Search,
  CheckCircle2,
  Truck,
  ArrowRight,
  Sparkles,
  Stethoscope,
  TrendingUp,
  Percent,
  Clock,
  ChevronRight,
  Tag,
  Zap,
} from "lucide-react";
import { COMPANY_DETAILS, DIVISIONS, GENERIC_PRODUCTS, OFFER_SLIDES } from "@/lib/data";

export default function StorePage() {
  const { store } = DIVISIONS;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "Antibiotics & Anti-Infectives",
    "Analgesics & Pain Relief",
    "Gastro & Antacids",
    "Allergy & Respiratory",
    "Cough & Cold Syrups",
    "Vitamins & Nutritional",
  ];

  const filteredProducts = GENERIC_PRODUCTS.filter((prod) => {
    const matchesCat = selectedCategory === "All" || prod.category === selectedCategory;
    const matchesSearch =
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.genericName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const getWhatsAppProductUrl = (productName: string, company: string, scheme?: string) => {
    const text = encodeURIComponent(
      `Hello Saurav Medical Store Agency, I am a Chemist / Medical Store owner and want to enquire about stock & current scheme for "${productName}" (${company}). Scheme noted: ${scheme || "Wholesale"}.`
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
              <Pill className="w-3.5 h-3.5 text-sky-600" />
              Saurav Medical Store Agency (Generic Medicine Wholesale)
            </span>
          </div>

          {/* Quick Division Switcher */}
          <Link
            href="/agency"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-900 hover:bg-blue-100 border border-blue-200 text-xs font-bold transition-all w-fit"
          >
            <span>Need Surgical & Ethical Supplies? Switch to Agency</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Hero Banner for Store */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0369a1] via-[#0284c7] to-[#0ea5e9] text-white p-6 sm:p-10 lg:p-12 shadow-xl overflow-hidden border border-sky-400/40">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-sky-900/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white text-xs font-bold">
              <Pill className="w-3.5 h-3.5" />
              <span>Chemist Wholesale Desk • 10+1 Bonus Schemes</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Saurav Medical Store Agency
            </h1>
            <p className="text-lg sm:text-xl font-bold text-sky-100">
              High-Margin Wholesale Generic Medicines for Retail Pharmacies
            </p>

            <p className="text-xs sm:text-sm text-sky-50 leading-relaxed max-w-2xl font-normal">
              Empowering 500+ chemist shops and pharmacies across Bhagalpur and East Bihar with fast-moving generic formulations, highest profit margins (35%–60%), continuous 10+1 free schemes, and reliable same-day counter delivery.
            </p>

            {/* Quick Badges Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs">
              <span className="flex items-center gap-1.5 bg-white/15 px-3 py-1 rounded-full text-white">
                <Percent className="w-3.5 h-3.5 text-amber-300" />
                35%–60% Chemist Margin
              </span>
              <span className="flex items-center gap-1.5 bg-white/15 px-3 py-1 rounded-full text-white">
                <Tag className="w-3.5 h-3.5 text-amber-300" />
                Active 10+1 Schemes
              </span>
              <span className="flex items-center gap-1.5 bg-white/15 px-3 py-1 rounded-full text-white">
                <Truck className="w-3.5 h-3.5 text-amber-300" />
                Same-Day Local Delivery
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href={COMPANY_DETAILS.whatsappStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-5 rounded-xl bg-white text-blue-900 hover:bg-sky-50 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Request Chemist Scheme Sheet on WhatsApp</span>
              </a>
              <a
                href={`tel:${COMPANY_DETAILS.mobile}`}
                className="py-2.5 px-4 rounded-xl bg-black/20 hover:bg-black/30 border border-white/20 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 text-sky-200" />
                <span>Call Wholesale Desk</span>
              </a>
            </div>
          </div>
        </div>

        {/* Chemist Scheme Banner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {OFFER_SLIDES.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-2xl border border-sky-200/80 p-4 shadow-2xs space-y-2 relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <Badge className="bg-sky-100 text-sky-900 border-sky-200 text-[10px] font-bold">
                  {offer.badge}
                </Badge>
                <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {offer.code}
                </span>
              </div>
              <h3 className="font-extrabold text-[#071529] text-sm">{offer.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{offer.highlight}</p>
              <div className="pt-1">
                <a
                  href={`https://wa.me/917070605245?text=${encodeURIComponent(`Hello Saurav Medical Store Agency, I am interested in ${offer.title} (${offer.code}).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-sky-700 hover:text-sky-900 inline-flex items-center gap-1"
                >
                  <span>Book this Scheme on WhatsApp</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Generic Catalog Showcase Section */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200 pb-3">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-sky-700 block">
                GENERIC MEDICINE CATALOG
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#071529] tracking-tight">
                Fast-Moving Generic Formulations & Bonus Schemes
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              Showing <strong>{filteredProducts.length}</strong> generic formulations
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
                placeholder="Search generic salt, brand or molecule (e.g. Cefixime, Paracetamol, Pantoprazole)..."
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-600 transition-all"
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
                      ? "bg-[#0284c7] text-white shadow-xs"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/70"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Generic Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.map((prod) => (
              <Card
                key={prod.id}
                className="bg-white rounded-2xl border border-slate-200/90 hover:border-sky-500/50 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Image Container with Badges */}
                  <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Scheme Highlight Ribbon */}
                    {prod.scheme && (
                      <div className="absolute top-2.5 left-2.5 z-10">
                        <span className="bg-amber-500 text-slate-950 font-black text-[9px] px-2.5 py-0.5 rounded-md shadow-sm uppercase tracking-wide">
                          {prod.scheme}
                        </span>
                      </div>
                    )}
                    <div className="absolute top-2.5 right-2.5 z-10">
                      <span className="bg-[#0b1e36] text-white text-[9px] font-extrabold px-2 py-0.5 rounded-md shadow-xs">
                        {prod.company}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 space-y-2">
                    <h3 className="font-extrabold text-[#071529] text-sm leading-snug group-hover:text-sky-800 transition-colors">
                      {prod.name}
                    </h3>
                    <p className="text-[11px] text-sky-800 font-semibold font-mono">
                      {prod.genericName}
                    </p>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {prod.description}
                    </p>

                    {/* Metadata Strip */}
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                      <span>Pack: <strong>{prod.packSize}</strong></span>
                      <span className="text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.2 rounded">In Stock</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[9px] text-slate-400 block uppercase font-bold">Wholesale PTR</span>
                    <span className="text-sm font-black text-[#071529] font-mono">
                      ₹{prod.wholesalePrice}
                    </span>
                    <span className="text-[10px] text-slate-400 line-through ml-1.5">
                      MRP ₹{prod.mrp}
                    </span>
                  </div>

                  <a
                    href={getWhatsAppProductUrl(prod.name, prod.company, prod.scheme)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-1.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all active:scale-95"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Check Stock</span>
                  </a>
                </div>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8 space-y-3">
              <Pill className="w-10 h-10 text-slate-300 mx-auto" />
              <h3 className="text-base font-bold text-slate-800">No generic items match your search</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                We have over 1,500+ generic formulations in stock. Contact our wholesale counter directly for the complete molecule price list.
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

        {/* Chemist Onboarding Strip */}
        <div className="bg-white rounded-3xl border border-sky-200/80 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left max-w-xl">
            <Badge variant="outline" className="text-sky-800 border-sky-200 bg-sky-50 text-[10px] font-bold">
              Chemist Support & Wholesale Terms
            </Badge>
            <h3 className="text-lg sm:text-xl font-black text-[#071529]">
              Are You a Retail Chemist in Bhagalpur or Nearby Towns?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Join 500+ retail chemist counters who enjoy direct wholesale schemes, 10+1 free lot bonuses, daily counter dispatch, and friendly payment terms.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={COMPANY_DETAILS.whatsappStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xs transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300" />
              <span>Request Full Generic List</span>
            </a>
            <a
              href={`tel:${COMPANY_DETAILS.mobile}`}
              className="py-2.5 px-4 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4 text-sky-600" />
              <span>Call Wholesale Desk</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
