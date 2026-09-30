"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Store,
  ShieldCheck,
  Building2,
  Phone,
  MessageCircle,
  CheckCircle2,
  ThermometerSnowflake,
  Copy,
  Check,
  ChevronRight,
  Sparkles,
  MapPin,
  Clock,
  Mail,
  PackageCheck,
  ArrowRight,
  UserCheck,
  Play,
  Send,
  Star,
} from "lucide-react";
import {
  STORE_DETAILS,
  STORE_BRANDS,
  STORE_SUPPLIES,
  STORE_DOCUMENTS,
} from "@/lib/data";
import { StoreHeader } from "@/components/store/store-header";
import { StoreFooter } from "@/components/store/store-footer";
import { CertificateScanCard } from "@/components/certificates/certificate-scan-card";
import { BrandLogo } from "@/components/brands/brand-logo";

export default function StorePage() {
  const [copiedBankField, setCopiedBankField] = useState<string | null>(null);
  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    phone: "",
    facilityName: "",
    requirement: "",
  });

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedBankField(fieldName);
    setTimeout(() => setCopiedBankField(null), 2000);
  };

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hello Gaurav ji (Saurav Medical Store), I want to enquire about stock availability.\nName: ${enquiryForm.name}\nPhone: ${enquiryForm.phone}\nHospital/Chemist: ${enquiryForm.facilityName}\nRequirement: ${enquiryForm.requirement}`
    );
    window.open(`https://wa.me/918789028637?text=${msg}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#f8fbfe] text-[#0f172a] flex flex-col justify-between selection:bg-blue-600 selection:text-white">
      {/* 1. Dedicated Store Navigation Bar */}
      <StoreHeader />

      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-16 sm:space-y-24">
        {/* HERO SECTION (Inspired by Reference UI) */}
        <section className="text-center max-w-4xl mx-auto space-y-6 pt-2">
          {/* Eyebrow Ribbon */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-medium shadow-xs">
            <span>Medicine <strong>starts</strong> with science — but true healing <strong>begins</strong> with trust</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0f172a] tracking-tight leading-[1.15]">
            Pharmaceuticals Stockist & <br />
            <span className="text-[#0052ff]">Vaccines Distributors</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Authorized depot stockist for 28 pharmaceutical leaders and unbroken 2°C – 8°C cold chain vaccine distributor serving hospitals, nursing homes, and retail pharmacies across Bihar.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={STORE_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-2xl bg-[#0052ff] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-blue-500/25 active:scale-95 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect on WhatsApp ({STORE_DETAILS.phoneDisplay})</span>
            </a>

            <a
              href={`tel:${STORE_DETAILS.mobile}`}
              className="py-3 px-5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm flex items-center gap-2 border border-slate-200 shadow-xs transition-all"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>Call: {STORE_DETAILS.phoneDisplay}</span>
            </a>
          </div>
        </section>

        {/* PROPRIETOR / TEAM CARD (Inspired by Reference UI Doctor Cards) */}
        <section id="about" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200/80 pb-4">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">
                Executive Leadership
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#0f172a]">
                Meet the person <span className="text-[#0052ff]">who leads</span>
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              Over 20+ years of authorized pharma distribution in Bhagalpur
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-md">
            {/* Left Photo Frame Card (Reference Style) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-xs aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-b from-blue-50 via-slate-100 to-blue-100 border-2 border-blue-100 shadow-xl flex flex-col justify-between p-5 text-center">
                {/* Top Badge */}
                <div className="flex items-center justify-between w-full">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-bold">
                    Stockist & Head
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold">
                    20+ Yrs Exp
                  </span>
                </div>

                {/* Center Silhouette / Graphic Portrait */}
                <div className="my-auto space-y-3">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-blue-600 to-sky-400 p-1 shadow-lg shadow-blue-500/20 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <UserCheck className="w-12 h-12 text-[#0052ff]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-[#0f172a]">
                      {STORE_DETAILS.ownerName}
                    </h3>
                    <p className="text-xs text-blue-600 font-bold">
                      {STORE_DETAILS.ownerRole}
                    </p>
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      {STORE_DETAILS.name}
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200/80 text-[10px] text-slate-500 font-mono">
                  M.P. Dwivedi Road, Bhagalpur
                </div>
              </div>
            </div>

            {/* Right Leadership Details */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>Authorized Pharmaceutical Representative</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#0f172a] leading-tight">
                Proprietor &amp; Head of Distribution
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Directing wholesale distribution operations from M.P. Dwivedi Road, Bhagalpur. Dedicated to supplying healthcare facilities, nursing homes, and retail pharmacies with 100% genuine depot pharmaceuticals, life-saving critical care injectables, and unbroken cold-chain vaccine logistics.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-slate-100">
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Authorized stockist for 28 pharma leaders</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Certified 2°C – 8°C cold chain vaccine protocol</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Hospital ICU critical care emergency delivery</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>ICICI Bank settlement desk & full ITC invoicing</span>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <a
                  href={STORE_DETAILS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-5 rounded-xl bg-[#0052ff] hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-2 shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Gaurav Sarawgi</span>
                </a>
                <a
                  href={`tel:${STORE_DETAILS.mobile}`}
                  className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center gap-2 transition-all border border-slate-200"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>Call {STORE_DETAILS.phoneDisplay}</span>
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
              Facility & Cold Storage
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Certified Cold Chain & Depot Operations
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
              Equipped with pharmaceutical-grade refrigeration units, round-the-clock digital temperature dataloggers, and backup power to guarantee that every vaccine vial retains full biological potency from depot to clinic.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-full bg-white/15 text-white text-xs font-bold border border-white/20">
                Temperature 2°C – 8°C Monitored
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/15 text-white text-xs font-bold border border-white/20">
                Insulated Cold Box Dispatch
              </span>
            </div>
          </div>
        </section>

        {/* WHAT THE STORE SUPPLIES */}
        <section id="supplies" className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
              Distribution Portfolio
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0f172a]">
              What Saurav Medical Store Supplies
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Direct authorized distribution of ethical therapeutics, critical vaccines, infant nutrition, and hospital supplies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {STORE_SUPPLIES.map((supply) => (
              <div
                key={supply.id}
                className="rounded-3xl bg-white p-6 border border-slate-200/90 shadow-xs hover:border-blue-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200 uppercase">
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
                    href={`https://wa.me/918789028637?text=Hello%20Gaurav%20ji,%20I%20want%20to%20enquire%20about%20supply%20for%20"${encodeURIComponent(supply.title)}"`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors group"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-blue-600" />
                    <span>Enquire Availability</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 28 AUTHORIZED BRANDS (Clean Logo Grid - No Filter, Real Logos) */}
        <section id="brands" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200/80 pb-4">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">
                Depot Stockist Partners
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#0f172a]">
                28 Authorized Brand Partners
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              Direct company depot representation from visiting card
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
            {STORE_BRANDS.map((brand) => (
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
              Government issued wholesale drug licenses and tax compliance documents. Click any card to preview.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {STORE_DOCUMENTS.map((doc) => (
              <CertificateScanCard key={doc.id} document={doc} accentColor="blue" />
            ))}
          </div>
        </section>

        {/* ICICI BANK DETAILS (From Visiting Card) */}
        <section id="bank" className="rounded-3xl bg-[#0b132b] text-white p-6 sm:p-10 border border-slate-800 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-1">
                Official Banking Settlement
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Bank Details (From Visiting Card)
              </h3>
              <p className="text-xs text-slate-400">
                Official settlement desk for institutional wholesale orders & NEFT/RTGS payments.
              </p>
            </div>

            <div className="px-3 py-1 rounded-xl bg-white/10 text-xs font-mono font-semibold text-sky-300 w-fit">
              ICICI Bank Verified
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-[11px] text-slate-400 block">Account Name</span>
              <span className="text-sm font-bold text-white block">{STORE_DETAILS.accountHolder}</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
              <span className="text-xs text-slate-400 block font-medium">Bank Name</span>
              <span className="text-sm font-bold text-white block">{STORE_DETAILS.bankName}</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block font-medium">Account Number</span>
                <span className="text-sm font-mono font-bold text-sky-300 block">{STORE_DETAILS.accountNo}</span>
              </div>
              <button
                onClick={() => handleCopy(STORE_DETAILS.accountNo, "acc")}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 transition-colors"
                title="Copy Account Number"
              >
                {copiedBankField === "acc" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block font-medium">IFSC Code</span>
                <span className="text-sm font-mono font-bold text-sky-300 block">{STORE_DETAILS.ifscCode}</span>
              </div>
              <button
                onClick={() => handleCopy(STORE_DETAILS.ifscCode, "ifsc")}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 transition-colors"
                title="Copy IFSC Code"
              >
                {copiedBankField === "ifsc" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </section>

        {/* ENQUIRY CARD (Inspired by Reference UI "Are you ready to make an appointment?") */}
        <section id="enquiry" className="rounded-3xl bg-white p-6 sm:p-10 border border-slate-200/90 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-3">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                Procurement Desk
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-[#0f172a] leading-tight">
                Are you ready to procure or enquire stock?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Send your medicine or vaccine procurement requirement directly to Gaurav Sarawgi on WhatsApp for real-time depot batch availability and wholesale PTR quotation.
              </p>

              <div className="pt-2 space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                  <span><strong>Visiting Address:</strong> {STORE_DETAILS.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                  <span><strong>Direct Contact:</strong> {STORE_DETAILS.phoneDisplay} | Office: {STORE_DETAILS.officePhone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                  <span><strong>Trade Hours:</strong> {STORE_DETAILS.hours}</span>
                </div>
              </div>
            </div>

            {/* Quick Enquiry Form Card (Reference Form UI) */}
            <div className="lg:col-span-6">
              <form onSubmit={handleEnquirySubmit} className="bg-slate-50 p-6 rounded-2xl border border-slate-200/90 space-y-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Doctor / Chemist / Purchaser Name"
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
                  <label className="text-xs font-bold text-slate-700">Hospital / Chemist Facility</label>
                  <input
                    type="text"
                    placeholder="Name of your pharmacy, hospital or clinic"
                    value={enquiryForm.facilityName}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, facilityName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Requirement / Medicines</label>
                  <textarea
                    rows={2}
                    placeholder="E.g., Rabies vaccine, Lactodex, Augmentin, etc."
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
                  <span>Send Enquiry to WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* QUICK DIVISION SWITCHER BANNER IN STETHOSCOPE FRAME */}
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
              <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white border-2 border-red-600 flex items-center justify-center text-red-600 shrink-0 shadow-sm">
                <div className="w-full h-full rounded-full flex items-center justify-center relative">
                  <div className="w-1.5 h-full bg-red-600 absolute" />
                  <div className="h-1.5 w-full bg-red-600 absolute" />
                </div>
              </div>
              <h4 className="font-black text-xs sm:text-xl md:text-2xl text-[#0f172a] leading-tight sm:leading-snug">
                Looking for Generic, Surgical &amp; OTC Medicines?
              </h4>
              <p className="text-[10px] sm:text-sm md:text-base text-slate-600 leading-tight sm:leading-relaxed line-clamp-2 sm:line-clamp-3">
                Visit <strong>Saurav Medical Agency</strong> at Kotwali Chowk (Next to ICICI Bank 1st Floor) for 21 generic lines &amp; 10+1 schemes.
              </p>
              <div className="pt-0.5 sm:pt-1">
                <Link
                  href="/agency"
                  className="py-1.5 px-3 sm:py-2.5 sm:px-5 md:py-3 md:px-6 rounded-full bg-[#0052ff] hover:bg-blue-700 text-white font-bold text-[10px] sm:text-xs md:text-sm inline-flex items-center gap-1.5 sm:gap-2 shadow-md shadow-blue-500/25 active:scale-95 transition-all group whitespace-nowrap"
                >
                  <span className="hidden sm:inline">Visit Saurav Medical Agency</span>
                  <span className="sm:hidden">Visit Medical Agency</span>
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Dedicated Store Footer */}
      <StoreFooter />
    </div>
  );
}
