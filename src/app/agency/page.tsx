"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Building2,
  Phone,
  MessageCircle,
  CheckCircle2,
  ThermometerSnowflake,
  Copy,
  Check,
  ChevronRight,
  MapPin,
  Clock,
  Mail,
  UserCheck,
  Send,
  Star,
  Eye,
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
import { SauravLogo } from "@/components/brand/saurav-brand-identity";

export default function AgencyPage() {
  const [copiedBankField, setCopiedBankField] = useState<string | null>(null);
  const [revealedBankFields, setRevealedBankFields] = useState<{ acc: boolean; ifsc: boolean }>({
    acc: false,
    ifsc: false,
  });
  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    phone: "",
    facilityName: "",
    requirement: "",
  });

  const handleReveal = (field: "acc" | "ifsc") => {
    setRevealedBankFields((prev) => ({ ...prev, [field]: true }));
    setTimeout(() => {
      setRevealedBankFields((prev) => ({ ...prev, [field]: false }));
    }, 15000);
  };

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedBankField(fieldName);
    setTimeout(() => setCopiedBankField(null), 2500);
  };

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hello Gaurav ji (Saurav Medical Agency), I want to enquire about stock availability.\nName: ${enquiryForm.name}\nPhone: ${enquiryForm.phone}\nHospital/Chemist: ${enquiryForm.facilityName}\nRequirement: ${enquiryForm.requirement}`
    );
    window.open(`https://wa.me/918789028637?text=${msg}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#f8fbfe] text-[#0f172a] flex flex-col justify-between selection:bg-blue-600 selection:text-white">
      {/* 1. Dedicated Agency Navigation Bar */}
      <AgencyHeader />

      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-16 sm:space-y-24">
        {/* HERO SECTION (With High-Definition 3D Isometric Medical Tiles Background) */}
        <section className="relative overflow-hidden rounded-3xl sm:rounded-[2.5rem] bg-[#ecf7f6] border border-cyan-200/60 shadow-sm sm:shadow-md">
          {/* Background Image Layer - True edge-to-edge background */}
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
            <picture>
              <source srcSet="/hero-store-bg.webp?v=4" type="image/webp" />
              <img
                src="/hero-store-bg.jpg?v=4"
                alt="Saurav Medical Agency Background"
                className="w-full h-full object-cover object-[75%_center] sm:object-right transition-opacity"
              />
            </picture>
            {/* Desktop & Tablet Soft Gradient: Fades from #ecf7f6 behind text to transparent over the 3D tiles */}
            <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-[#ecf7f6] via-[#ecf7f6]/90 to-transparent via-45%" />
            {/* Mobile Ambient Wash */}
            <div className="sm:hidden absolute inset-0 bg-[#ecf7f6]/80 backdrop-blur-[2px]" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-2xl p-6 sm:p-10 lg:p-14 space-y-5 sm:space-y-6 text-left">
            {/* Eyebrow Ribbon / Capsule Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-cyan-100/90 border border-cyan-200 text-cyan-900 text-[10.5px] sm:text-xs md:text-sm font-semibold shadow-2xs max-w-full">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-600 animate-pulse shrink-0" />
              <span className="truncate sm:whitespace-normal">
                <span className="sm:hidden">35+ Yrs Trust • Ethical &amp; Vaccine Stockist</span>
                <span className="hidden sm:inline">35+ Years of Trust • Authorized Ethical Pharma &amp; Vaccine Stockist</span>
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-[#0f172a] tracking-tight leading-[1.12]">
              Pharmaceuticals Stockist &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052ff] via-blue-600 to-cyan-600">
                Vaccines Distributors
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              Authorized depot stockist for 28 pharmaceutical leaders and unbroken 2°C – 8°C cold chain vaccine distributor. Serving leading hospitals, nursing homes, and retail medical shops across Bihar with 35+ years of trusted service from M.P. Dwivedi Road, Bhagalpur.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <a
                href={AGENCY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 rounded-2xl bg-[#0052ff] hover:bg-blue-700 text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-blue-500/25 active:scale-98 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Connect on WhatsApp</span>
              </a>

              <a
                href={`tel:${AGENCY_DETAILS.mobile}`}
                className="py-3.5 px-6 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm flex items-center justify-center gap-2 border border-slate-200/90 shadow-xs active:scale-98 transition-all"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Call: {AGENCY_DETAILS.phoneDisplay}</span>
              </a>
            </div>

            {/* Trust Badges / Stats Micro Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-3 sm:pt-4 border-t border-cyan-200/60">
              <div className="bg-white/90 backdrop-blur-xs rounded-xl p-3 border border-slate-200/70 shadow-2xs">
                <p className="text-lg sm:text-xl font-black text-blue-700">35+ Yrs</p>
                <p className="text-[11px] font-semibold text-slate-600">Healthcare Trust</p>
              </div>
              <div className="bg-white/90 backdrop-blur-xs rounded-xl p-3 border border-slate-200/70 shadow-2xs">
                <p className="text-lg sm:text-xl font-black text-cyan-700">28</p>
                <p className="text-[11px] font-semibold text-slate-600">Pharma Depots</p>
              </div>
              <div className="bg-white/90 backdrop-blur-xs rounded-xl p-3 border border-slate-200/70 shadow-2xs">
                <div className="flex items-center gap-1">
                  <p className="text-lg sm:text-xl font-black text-cyan-600">2°C – 8°C</p>
                  <ThermometerSnowflake className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                </div>
                <p className="text-[11px] font-semibold text-slate-600">Cold Chain Secured</p>
              </div>
              <div className="bg-white/90 backdrop-blur-xs rounded-xl p-3 border border-slate-200/70 shadow-2xs">
                <p className="text-lg sm:text-xl font-black text-emerald-600">Swift</p>
                <p className="text-[11px] font-semibold text-slate-600">Depot Sourcing</p>
              </div>
            </div>
          </div>
        </section>

        {/* PROPRIETOR / TEAM CARD */}
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
              Over 35+ years of authorized pharma distribution in Bhagalpur
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-md">
            {/* Left Photo Full Card Cover */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 group bg-slate-900">
                {/* Full Div Cover Image */}
                <Image
                  src={AGENCY_DETAILS.ownerImage || "/agency-owner-dp.jpg"}
                  alt={`${AGENCY_DETAILS.ownerName} - Proprietor`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 380px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  priority
                />

                {/* Top Badges */}
                <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10 pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-blue-800 border border-blue-100 text-xs font-black shadow-md tracking-wide">
                    Proprietor
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white border border-white/20 text-xs font-bold shadow-md">
                    35+ Yrs Trust
                  </span>
                </div>

                {/* Bottom Overlay with Name & Proprietor Tag (No location) */}
                <div className="absolute inset-x-0 bottom-0 pt-28 pb-5 px-6 bg-gradient-to-t from-slate-950 via-slate-950/75 to-transparent z-10">
                  <span className="text-sky-400 text-[11px] font-black tracking-widest uppercase block mb-1">
                    Proprietor
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                    {AGENCY_DETAILS.ownerName}
                  </h3>
                  <p className="text-xs text-slate-300 font-medium mt-1">
                    {AGENCY_DETAILS.name}
                  </p>
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
                Proprietor
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Directing authorized ethical pharmaceutical and cold-chain vaccine operations from M.P. Dwivedi Road, Bhagalpur. Dedicated to supplying healthcare facilities, nursing homes, and retail pharmacies with 100% genuine depot pharmaceuticals, life-saving critical care injectables, and unbroken cold-chain vaccine logistics.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-slate-100">
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Authorized stockist for 28 pharma leaders</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Certified 2°C – 8°C cold chain vaccine storage</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Hospital ICU critical care emergency delivery</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Direct depot sourcing for hard-to-find doctor prescriptions</span>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <a
                  href={AGENCY_DETAILS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-5 rounded-xl bg-[#0052ff] hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-2 shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Gaurav Sarawgi</span>
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

        {/* HIGH CONTRAST BLUE BANNER */}
        <section className="relative rounded-3xl bg-[#0052ff] text-white p-8 sm:p-14 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-900/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-200 block">
              Facility &amp; Cold Storage
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Certified Cold Chain &amp; Depot Operations
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
              <span className="px-3.5 py-1.5 rounded-full bg-white/15 text-white text-xs font-bold border border-white/20">
                Direct Depot Verification
              </span>
            </div>
          </div>
        </section>

        {/* WHAT THE AGENCY SUPPLIES */}
        <section id="supplies" className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
              Distribution Portfolio
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0f172a]">
              What Saurav Medical Agency Supplies
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Direct authorized distribution of ethical therapeutics, critical vaccines, infant nutrition, and hospital supplies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {AGENCY_SUPPLIES.map((supply) => (
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

        {/* 28 AUTHORIZED BRANDS */}
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
              Direct company depot representation across Bihar
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
              Licenses &amp; Document Scans
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Government issued wholesale drug licenses and tax compliance documents for Saurav Medical Agency. Click any card to preview.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {AGENCY_DOCUMENTS.map((doc) => (
              <CertificateScanCard key={doc.id} document={doc} accentColor="blue" />
            ))}
          </div>
        </section>

        {/* ICICI BANK DETAILS */}
        <section id="bank" className="rounded-3xl bg-[#0b132b] text-white p-6 sm:p-10 border border-slate-800 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-1">
                Official Banking Settlement
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Bank Details (Saurav Medical Agency)
              </h3>
              <p className="text-xs text-slate-400">
                Official settlement desk for institutional wholesale orders &amp; NEFT/RTGS payments.
              </p>
            </div>

            <div className="px-3 py-1 rounded-xl bg-white/10 text-xs font-mono font-semibold text-sky-300 w-fit">
              ICICI Bank Verified
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-[11px] text-slate-400 block">Account Name</span>
              <span className="text-sm font-bold text-white block">{AGENCY_DETAILS.accountHolder}</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
              <span className="text-xs text-slate-400 block font-medium">Bank Name</span>
              <span className="text-sm font-bold text-white block">{AGENCY_DETAILS.bankName}</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5 flex items-center justify-between">
              <div className="min-w-0 pr-2">
                <span className="text-xs text-slate-400 block font-medium">Account Number</span>
                <span className="text-sm font-mono font-bold text-sky-300 block tracking-wider truncate">
                  {revealedBankFields.acc ? AGENCY_DETAILS.accountNo : "•••• •••• ••••"}
                </span>
              </div>
              {!revealedBankFields.acc ? (
                <button
                  onClick={() => handleReveal("acc")}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-sky-300 hover:text-white transition-colors flex items-center gap-1 text-xs font-semibold shrink-0"
                  title="Click to view Account Number"
                >
                  <Eye className="w-4 h-4" />
                  <span className="text-[10px]">View</span>
                </button>
              ) : (
                <button
                  onClick={() => handleCopy(AGENCY_DETAILS.accountNo, "acc")}
                  className="p-2 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 hover:text-white transition-colors flex items-center gap-1 text-xs font-semibold shrink-0"
                  title="Copy Account Number"
                >
                  {copiedBankField === "acc" ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-[10px] text-emerald-400 font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="text-[10px]">Copy</span>
                    </>
                  )}
                </button>
              )}
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5 flex items-center justify-between">
              <div className="min-w-0 pr-2">
                <span className="text-xs text-slate-400 block font-medium">IFSC Code</span>
                <span className="text-sm font-mono font-bold text-sky-300 block tracking-wider truncate">
                  {revealedBankFields.ifsc ? AGENCY_DETAILS.ifscCode : "•••••••••••"}
                </span>
              </div>
              {!revealedBankFields.ifsc ? (
                <button
                  onClick={() => handleReveal("ifsc")}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-sky-300 hover:text-white transition-colors flex items-center gap-1 text-xs font-semibold shrink-0"
                  title="Click to view IFSC Code"
                >
                  <Eye className="w-4 h-4" />
                  <span className="text-[10px]">View</span>
                </button>
              ) : (
                <button
                  onClick={() => handleCopy(AGENCY_DETAILS.ifscCode, "ifsc")}
                  className="p-2 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 hover:text-white transition-colors flex items-center gap-1 text-xs font-semibold shrink-0"
                  title="Copy IFSC Code"
                >
                  {copiedBankField === "ifsc" ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-[10px] text-emerald-400 font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="text-[10px]">Copy</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </section>

        {/* ENQUIRY CARD */}
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
                  <span><strong>Visiting Address:</strong> {AGENCY_DETAILS.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                  <span><strong>Direct Contact:</strong> {AGENCY_DETAILS.phoneDisplay} | Office: {AGENCY_DETAILS.officePhone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                  <span><strong>Trade Hours:</strong> {AGENCY_DETAILS.hours}</span>
                </div>
              </div>
            </div>

            {/* Quick Enquiry Form Card */}
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

        {/* QUICK DIVISION SWITCHER BANNER IN ENLARGED STETHOSCOPE FRAME */}
        <section className="relative my-8 sm:my-14 -mx-4 w-[calc(100%+2rem)] sm:mx-auto sm:w-full max-w-4xl lg:max-w-5xl px-0 sm:px-4">
          <div className="relative w-full overflow-hidden select-none">
            {/* The Stethoscope Frame Image */}
            <img
              src="/stethoscope-frame.jpg"
              alt="Stethoscope Frame"
              className="w-full h-auto object-contain block select-none pointer-events-none"
            />

            {/* Inner Content */}
            <div className="absolute top-[12%] bottom-[12%] left-[15%] sm:left-[16%] w-[48%] sm:w-[46%] flex flex-col justify-center items-start text-left space-y-1 sm:space-y-3">
              <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-2xl bg-white p-1 sm:p-1.5 shadow-md border border-slate-200/70 text-white flex items-center justify-center shrink-0">
                <SauravLogo className="w-full h-full" />
              </div>
              <h4 className="font-black text-xs sm:text-xl md:text-2xl text-[#0f172a] leading-tight sm:leading-snug">
                Looking for Generic &amp; Surgical Medicines?
              </h4>
              <p className="text-[10px] sm:text-sm md:text-base text-slate-600 leading-tight sm:leading-relaxed line-clamp-2 sm:line-clamp-3">
                Visit <strong>Saurav Medical Store</strong> at Kotwali Chowk (Next to ICICI Bank 1st Floor) for 21 generic lines &amp; 10+1 schemes.
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
