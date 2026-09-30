"use client";

import React, { useState } from "react";
import {
  FileText,
  ShieldCheck,
  ExternalLink,
  ZoomIn,
  CheckCircle2,
  X,
  FileCheck2,
  Building,
  Printer,
  Download,
} from "lucide-react";
import { CredentialDocument } from "@/lib/data";

interface CertificateScanCardProps {
  document: CredentialDocument;
  accentColor?: "blue" | "sky" | "emerald";
}

export function CertificateScanCard({ document, accentColor = "blue" }: CertificateScanCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const colorStyles = {
    blue: {
      badge: "bg-blue-900/60 text-sky-300 border-blue-700/60",
      accentBorder: "border-blue-500/40 hover:border-blue-400",
      stampText: "text-blue-600 border-blue-600",
      ribbonBg: "bg-blue-600",
    },
    sky: {
      badge: "bg-sky-900/60 text-sky-200 border-sky-700/60",
      accentBorder: "border-sky-500/40 hover:border-sky-400",
      stampText: "text-sky-600 border-sky-600",
      ribbonBg: "bg-sky-600",
    },
    emerald: {
      badge: "bg-emerald-900/60 text-emerald-300 border-emerald-700/60",
      accentBorder: "border-emerald-500/40 hover:border-emerald-400",
      stampText: "text-emerald-600 border-emerald-600",
      ribbonBg: "bg-emerald-600",
    },
  }[accentColor];

  return (
    <>
      <div
        onClick={() => setModalOpen(true)}
        className={`group relative rounded-2xl bg-[#0c1e38] border ${colorStyles.accentBorder} p-4 sm:p-5 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden`}
      >
        {/* Glow ambient background */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-400/20 transition-colors" />

        {/* Certificate Card Header */}
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-2">
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${colorStyles.badge} uppercase tracking-wider`}>
              {document.category}
            </span>
            <span className="text-xs font-mono text-emerald-400 flex items-center gap-1 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Verified Original
            </span>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-black text-white group-hover:text-sky-300 transition-colors">
              {document.title}
            </h3>
            <p className="text-xs text-slate-400 font-medium mt-0.5">
              {document.formType}
            </p>
          </div>

          {/* Realistic Document Paper Scan Preview Frame */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden bg-slate-900 border border-slate-700/70 p-3 flex flex-col justify-between shadow-inner group-hover:border-sky-400/60 transition-colors">
            {/* Watermark security pattern */}
            <div className="absolute inset-0 bg-subtle-grid opacity-15 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent z-10" />

            {/* Document Header Representation */}
            <div className="relative z-20 flex items-center justify-between border-b border-slate-700/80 pb-1.5">
              <div className="flex items-center gap-1.5">
                <FileCheck2 className="w-4 h-4 text-sky-400" />
                <span className="text-xs font-bold tracking-tight text-slate-200">
                  GOVT. OF BIHAR • STATUTORY RECORD
                </span>
              </div>
              <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/20">
                OFFICIAL SCAN
              </span>
            </div>

            {/* Center Registration Number */}
            <div className="relative z-20 text-center py-2 space-y-1">
              <div className="text-xs text-slate-400 uppercase tracking-widest font-semibold">
                DOCUMENT REGISTRATION NO.
              </div>
              <div className="text-xs sm:text-sm font-mono font-extrabold text-sky-300 bg-sky-950/80 border border-sky-800/80 px-2.5 py-1 rounded-lg inline-block">
                {document.docNumber}
              </div>
            </div>

            {/* Document Footer with Stamp & Signature Placeholder */}
            <div className="relative z-20 flex items-end justify-between pt-1 border-t border-slate-800 text-xs">
              <div className="text-slate-400 max-w-[75%]">
                <span className="block text-[10px] text-slate-500 uppercase font-semibold">Issuing Authority</span>
                <span className="font-semibold text-slate-300 leading-tight block line-clamp-2">
                  {document.issuingAuthority}
                </span>
              </div>

              {/* Official Seal / Stamp Representation */}
              <div className="w-10 h-10 rounded-full border-2 border-dashed border-emerald-500/60 text-emerald-400 text-[8px] font-bold flex flex-col items-center justify-center rotate-[-12deg] shrink-0 bg-emerald-500/10">
                <span>SEAL</span>
                <span>BIHAR</span>
              </div>
            </div>

            {/* Hover Overlay Prompt */}
            <div className="absolute inset-0 z-30 bg-blue-950/80 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600 text-white text-xs font-bold shadow-lg">
                <ZoomIn className="w-4 h-4" />
                <span>View Full Original Certificate</span>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-1.5 pt-2">
            {document.highlights.map((h, idx) => (
              <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Click Button */}
        <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-sky-400 group-hover:text-white font-semibold">
          <span>Click to view original document scan</span>
          <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>

      {/* FULL LIGHTBOX MODAL PREVIEW */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-[#0b1e36] border border-blue-700/80 rounded-3xl shadow-2xl p-5 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-blue-900/80 pb-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Statutory Government Document Placeholder</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-white">
                  {document.title}
                </h2>
                <p className="text-xs text-slate-400">{document.formType}</p>
              </div>

              <button
                onClick={() => setModalOpen(false)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                title="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Official Scanned Certificate Canvas Representation */}
            <div className="relative rounded-2xl bg-gradient-to-b from-amber-50/5 to-slate-900 border-2 border-amber-300/30 p-6 sm:p-10 space-y-6 text-center shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-subtle-grid opacity-10 pointer-events-none" />

              {/* Top Bihar Govt Header */}
              <div className="space-y-1.5 border-b border-amber-300/20 pb-4">
                <div className="text-xs font-bold text-amber-300 uppercase tracking-widest">
                  GOVERNMENT OF BIHAR • DRUGS CONTROL ADMINISTRATION
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-white">
                  {document.formType}
                </h3>
                <div className="text-xs font-mono text-emerald-400 font-bold bg-emerald-950/60 inline-block px-3 py-1 rounded-lg border border-emerald-500/30">
                  Registration Number: {document.docNumber}
                </div>
              </div>

              {/* Description & Legal Text */}
              <div className="max-w-xl mx-auto space-y-3 text-left bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                <span className="text-[11px] text-slate-400 uppercase font-bold tracking-wider block">
                  Statutory Authorization & Legal Scope
                </span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {document.description}
                </p>
                <div className="text-xs text-sky-300 font-semibold pt-2 border-t border-slate-800">
                  Issuing Authority: <strong className="text-white">{document.issuingAuthority}</strong>
                </div>
              </div>

              {/* Official Seal and Signatory Verification Grid */}
              <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto pt-4 border-t border-amber-300/20 items-end">
                <div className="flex flex-col items-center space-y-1">
                  <div className="w-16 h-16 rounded-full border-2 border-dashed border-emerald-400 text-emerald-400 text-[10px] font-bold flex flex-col items-center justify-center rotate-[-10deg] bg-emerald-950/40">
                    <span>GOVT SEAL</span>
                    <span>BIHAR</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-semibold">Official State Seal</span>
                </div>

                <div className="text-center space-y-1">
                  <div className="font-serif italic text-sm text-sky-300 border-b border-slate-600 pb-1">
                    [Drugs Inspector / Lic. Authority]
                  </div>
                  <span className="text-[10px] text-slate-400 font-semibold block">Authorized Signature</span>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-slate-400 italic">
                * Note: Client scan photo file will replace this preview frame once high-resolution camera scan is uploaded.
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-slate-400 font-mono">
                Status: <strong className="text-emerald-400">{document.validity}</strong>
              </span>

              <button
                onClick={() => setModalOpen(false)}
                className="py-2.5 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
