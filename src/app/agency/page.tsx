"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Stethoscope,
  ShieldCheck,
  Building2,
  Phone,
  MessageCircle,
  CheckCircle2,
  Percent,
  TrendingUp,
  Clock,
  ChevronRight,
  Sparkles,
  MapPin,
  Mail,
  PackageCheck,
  Boxes,
  Store,
  UserCheck,
  Send,
  Tag,
  Zap,
} from "lucide-react";
import {
  AGENCY_DETAILS,
  AGENCY_BRANDS,
  AGENCY_SUPPLIES,
  AGENCY_DOCUMENTS,
} from "@/lib/data";
import { AgencyHeader } from "@/components/agency/agency-header";
import { AgencyFooter } from "@/components/agency/agency-footer";
import { CertificateScanCard } from "@/components/certificates/certificate-scan-card";
import { BrandLogo } from "@/components/brands/brand-logo";

export default function AgencyPage() {
  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    phone: "",
    shopName: "",
    requirement: "",
  });

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hello Santosh ji (Saurav Medical Agency), I am a chemist and want to enquire about generic stock and 10+1 schemes.\nName: ${enquiryForm.name}\nPhone: ${enquiryForm.phone}\nShop/Facility: ${enquiryForm.shopName}\nRequirement: ${enquiryForm.requirement}`
    );
    window.open(`https://wa.me/917070605245?text=${msg}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#f8fbfe] text-[#0f172a] flex flex-col justify-between selection:bg-blue-600 selection:text-white">
      {/* 1. Dedicated Agency Navigation Bar */}
      <AgencyHeader />

      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-16 sm:space-y-24">
        {/* HERO SECTION (Inspired by Reference UI) */}
        <section className="text-center max-w-4xl mx-auto space-y-6 pt-2">
          {/* Eyebrow Ribbon */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-medium shadow-xs">
            <span>Genuine quality healthcare — wholesale pricing with <strong>maximum chemist margins</strong></span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0f172a] tracking-tight leading-[1.15]">
            Wholesaler of Generic, Surgical, <br />
            <span className="text-[#0052ff]">Ayurvedic & OTC Medicines</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Registered wholesale medicine agency stocking 21+ leading generic companies at Kotwali Chowk, Next to ICICI Bank (1st Floor), Bhagalpur. Offering daily chemist counter packing and lucrative 10+1 / 10+2 trade bonus deals.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={AGENCY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-2xl bg-[#0052ff] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-blue-500/25 active:scale-95 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect on WhatsApp ({AGENCY_DETAILS.phoneDisplay})</span>
            </a>

            <a
              href={`tel:${AGENCY_DETAILS.mobile}`}
              className="py-3 px-5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm flex items-center gap-2 border border-slate-200 shadow-xs transition-all"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>Call Counter: {AGENCY_DETAILS.phoneDisplay}</span>
            </a>
          </div>
        </section>

        {/* PROPRIETOR / TEAM CARD (Inspired by Reference UI Doctor Cards) */}
        <section id="about" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200/80 pb-4">
            <div>
              <span className="text-xs font-bold text-blue-600 tracking-wider block mb-1">
                Agency Leadership
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#0f172a]">
                Meet the person <span className="text-[#0052ff]">who leads</span>
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              Registered wholesale counter at Kotwali Chowk, Bhagalpur
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-md">
            {/* Left Photo Frame Card (Reference Style) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-xs aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-b from-red-50 via-slate-100 to-blue-50 border-2 border-red-100 shadow-xl flex flex-col justify-between p-5 text-center">
                {/* Top Badge */}
                <div className="flex items-center justify-between w-full">
                  <span className="px-2.5 py-0.5 rounded-full bg-red-600 text-white text-xs font-bold">
                    Proprietor &amp; Head
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">
                    Wholesale Counter
                  </span>
                </div>

                {/* Center Silhouette / Graphic Portrait */}
                <div className="my-auto space-y-3">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-red-500 to-blue-600 p-1 shadow-lg shadow-red-500/20 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <UserCheck className="w-12 h-12 text-red-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-[#0f172a]">
                      {AGENCY_DETAILS.ownerName}
                    </h3>
                    <p className="text-xs text-red-600 font-bold">
                      {AGENCY_DETAILS.ownerRole}
                    </p>
                    <span className="text-xs text-slate-500 block mt-0.5">
                      {AGENCY_DETAILS.name}
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200/80 text-xs text-slate-500 font-mono">
                  Kotwali Chowk (Next to ICICI Bank 1st Floor)
                </div>
              </div>
            </div>

            {/* Right Leadership Details */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-red-600" />
                <span>Wholesale Medicine Distributor</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#0f172a] leading-tight">
                Proprietor &amp; Wholesale Operations Head
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Directing wholesale generic, surgical, and ayurvedic distribution from Kotwali Chowk, Next to ICICI Bank (1st Floor) Bhagalpur. Committed to maximizing retail pharmacy profits with direct factory wholesale prices, attractive 10+1 free bonus box deals, and same-day counter dispatch.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-slate-100">
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Wholesale distribution for 21 generic leaders</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Specialized 10+1 & 10+2 free box bonus schemes</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Complete surgical disposables & ayurvedic OTC</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Computerized GST invoices with full ITC tax credit</span>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <a
                  href={AGENCY_DETAILS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-5 rounded-2xl bg-[#0052ff] hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-2 shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Santosh Kumar</span>
                </a>
                <a
                  href={`tel:${AGENCY_DETAILS.mobile}`}
                  className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center gap-2 transition-all border border-slate-200"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>Call {AGENCY_DETAILS.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* HIGH CONTRAST BLUE BANNER (Reference UI "Take a look inside") */}
        <section className="relative rounded-3xl bg-[#0052ff] text-white p-8 sm:p-14 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-900/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-200 block">
              Wholesale Counter Advantages
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Maximum Chemist Profit Margins & 10+1 Schemes
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
              We stock ready bulk cartons of fast-moving molecules from Alkem, Aristo, Cipla, and Smart Lab. Our monthly bonus schemes allow retail medical stores to earn up to 70% trade margins with full computerized GST documentation.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-full bg-white/15 text-white text-xs font-bold border border-white/20">
                10+1 & 10+2 Free Boxes
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/15 text-white text-xs font-bold border border-white/20">
                Same-Day Counter Packing
              </span>
            </div>
          </div>
        </section>

        {/* WHAT THE AGENCY SUPPLIES */}
        <section id="supplies" className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
              Wholesale Supply Range
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0f172a]">
              What Saurav Medical Agency Supplies
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Bulk wholesale supplies of generic medicines, surgical items, ayurvedic tonics, and chemist schemes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {AGENCY_SUPPLIES.map((supply) => (
              <div
                key={supply.id}
                className="rounded-3xl bg-white p-6 border border-slate-200/90 shadow-xs hover:border-blue-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200 uppercase">
                    {supply.badge}
                  </span>

                  <h3 className="text-lg font-bold text-[#0f172a]">
                    {supply.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {supply.description}
                  </p>

                  <div className="pt-3 border-t border-slate-100 space-y-1.5">
                    {supply.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-100">
                  <a
                    href={`https://wa.me/917070605245?text=Hello%20Santosh%20ji,%20I%20want%20to%20enquire%20about%20schemes%20for%20"${encodeURIComponent(supply.title)}"`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 group"
                  >
                    <span>Enquire Chemist Scheme</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 21 GENERIC BRANDS (Clean Logo Grid - No Filter, Real Logos) */}
        <section id="brands" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200/80 pb-4">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">
                Generic Company Lines
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#0f172a]">
                21 Generic Brands Stocked
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              Popular companies from visiting card back available at our Kotwali Chowk counter
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
            {AGENCY_BRANDS.map((brand) => (
              <BrandLogo
                key={brand.id}
                name={brand.name}
                category={brand.category}
                specialty={brand.specialty}
                badge={brand.badge}
              />
            ))}
          </div>
        </section>

        {/* ORIGINAL CERTIFICATE SCANS & LICENSES */}
        <section id="certificates" className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
              Statutory Verification
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0f172a]">
              Licenses & Document Scans
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Government issued wholesale drug licenses and tax compliance documents for Saurav Medical Agency. Click any card to preview.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {AGENCY_DOCUMENTS.map((doc) => (
              <CertificateScanCard key={doc.id} document={doc} accentColor="emerald" />
            ))}
          </div>
        </section>

        {/* ENQUIRY CARD (Inspired by Reference UI "Are you ready to make an appointment?") */}
        <section id="schemes" className="rounded-3xl bg-white p-6 sm:p-10 border border-slate-200/90 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-3">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                Chemist Wholesale Desk
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-[#0f172a] leading-tight">
                Get Today&apos;s Chemist Scheme Sheet
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Connect directly with Santosh Kumar on WhatsApp to receive the latest wholesale generic price list, bulk carton discounts, and 10+1 free bonus scheme breakdown.
              </p>

              <div className="pt-2 space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                  <span><strong>Visiting Address:</strong> {AGENCY_DETAILS.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                  <span><strong>Direct Mobile:</strong> {AGENCY_DETAILS.phoneDisplay}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                  <span><strong>Counter Hours:</strong> {AGENCY_DETAILS.hours}</span>
                </div>
              </div>
            </div>

            {/* Quick Enquiry Form Card */}
            <div className="lg:col-span-6">
              <form onSubmit={handleEnquirySubmit} className="bg-slate-50 p-6 rounded-2xl border border-slate-200/90 space-y-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Chemist / Owner Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={enquiryForm.name}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={enquiryForm.phone}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Medical Store / Pharmacy Name</label>
                  <input
                    type="text"
                    placeholder="Name of your retail chemist shop"
                    value={enquiryForm.shopName}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, shopName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Molecules / Requirement</label>
                  <textarea
                    rows={2}
                    placeholder="E.g., Pantoprazole DSR, Cefixime, Cough Syrups, etc."
                    value={enquiryForm.requirement}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, requirement: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-[#0052ff] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 transition-all active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Enquire Generic Schemes on WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* QUICK DIVISION SWITCHER BANNER IN ENLARGED STETHOSCOPE FRAME */}
        <section className="relative my-8 sm:my-14 -mx-4 w-[calc(100%+2rem)] sm:mx-auto sm:w-full max-w-4xl lg:max-w-5xl px-0 sm:px-4">
          <div className="relative w-full overflow-hidden select-none">
            {/* The Stethoscope Frame Image (Scaled Up, Borderless) */}
            <img
              src="/stethoscope-frame.jpg"
              alt="Stethoscope Frame"
              className="w-full h-auto object-contain block select-none pointer-events-none"
            />

            {/* Inner Content - Enlarged and strictly within safe blank zone */}
            <div className="absolute top-[12%] bottom-[12%] left-[15%] sm:left-[16%] w-[48%] sm:w-[46%] flex flex-col justify-center items-start text-left space-y-1 sm:space-y-3">
              <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-500 text-white flex items-center justify-center font-black text-xs sm:text-base md:text-lg shrink-0 shadow-sm">
                SMS
              </div>
              <h4 className="font-black text-xs sm:text-xl md:text-2xl text-[#0f172a] leading-tight sm:leading-snug">
                Need Authorized Pharma Vaccines &amp; Ethical Stock?
              </h4>
              <p className="text-[10px] sm:text-sm md:text-base text-slate-600 leading-tight sm:leading-relaxed line-clamp-2 sm:line-clamp-3">
                Visit <strong>Saurav Medical Store</strong> at M.P. Dwivedi Road for GSK, Serum Institute, Abbott, Alkem, and 2°C–8°C cold chain vaccines.
              </p>
              <div className="pt-0.5 sm:pt-1">
                <Link
                  href="/store"
                  className="py-1.5 px-3 sm:py-2.5 sm:px-5 md:py-3 md:px-6 rounded-full bg-[#0052ff] hover:bg-blue-700 text-white font-bold text-[10px] sm:text-xs md:text-sm inline-flex items-center gap-1.5 sm:gap-2 shadow-md shadow-blue-500/25 active:scale-95 transition-all group whitespace-nowrap"
                >
                  <span className="hidden sm:inline">Visit Saurav Medical Store</span>
                  <span className="sm:hidden">Visit Medical Store</span>
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Dedicated Agency Footer */}
      <AgencyFooter />
    </div>
  );
}
