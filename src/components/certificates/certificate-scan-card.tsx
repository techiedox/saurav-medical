"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  FileText,
  ShieldCheck,
  ExternalLink,
  ZoomIn,
  X,
  Download,
  Award,
} from "lucide-react";
import { CredentialDocument } from "@/lib/data";

interface CertificateScanCardProps {
  document: CredentialDocument;
  accentColor?: "blue" | "sky" | "emerald";
}

export function CertificateScanCard({ document, accentColor = "blue" }: CertificateScanCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (modalOpen) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "unset";
    }
    return () => {
      window.document.body.style.overflow = "unset";
    };
  }, [modalOpen]);

  const theme = {
    blue: {
      cardBg: "bg-gradient-to-br from-white via-[#f8fbff] to-[#edf4fc]",
      topBar: "bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700",
      badge: "bg-blue-600 text-white shadow-xs",
      borderHover: "border-blue-200 hover:border-blue-400/90",
      textAccent: "group-hover:text-blue-600 text-blue-700",
      btnPrimary: "bg-[#0052ff] hover:bg-blue-700 text-white",
      zoomIcon: "text-blue-600",
      actionCircle: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
      regBadge: "text-blue-950 bg-blue-50/80 border-blue-200/80",
    },
    sky: {
      cardBg: "bg-gradient-to-br from-white via-[#f0f9ff] to-[#e0f2fe]",
      topBar: "bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-500",
      badge: "bg-sky-600 text-white shadow-xs",
      borderHover: "border-sky-200 hover:border-sky-400/90",
      textAccent: "group-hover:text-sky-600 text-sky-700",
      btnPrimary: "bg-sky-600 hover:bg-sky-700 text-white",
      zoomIcon: "text-sky-600",
      actionCircle: "bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white",
      regBadge: "text-sky-950 bg-sky-50/80 border-sky-200/80",
    },
    emerald: {
      cardBg: "bg-gradient-to-br from-white via-[#f2fbf5] to-[#e6f7ec]",
      topBar: "bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-700",
      badge: "bg-emerald-600 text-white shadow-xs",
      borderHover: "border-emerald-200 hover:border-emerald-400/90",
      textAccent: "group-hover:text-emerald-700 text-emerald-800",
      btnPrimary: "bg-emerald-600 hover:bg-emerald-700 text-white",
      zoomIcon: "text-emerald-600",
      actionCircle: "bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white",
      regBadge: "text-emerald-950 bg-emerald-50/80 border-emerald-200/80",
    },
  }[accentColor];

  return (
    <>
      <div
        onClick={() => setModalOpen(true)}
        className={`group relative rounded-2xl ${theme.cardBg} border ${theme.borderHover} p-4 sm:p-5 shadow-[0_4px_16px_rgba(15,23,42,0.05)] hover:shadow-[0_16px_36px_rgba(15,23,42,0.12)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden`}
      >
        {/* Top Decorative Gradient Accent Bar */}
        <div className={`absolute top-0 inset-x-0 h-1.5 ${theme.topBar}`} />

        {/* Certificate Card Content */}
        <div className="space-y-3 pt-1">
          {/* Top Pill Badges */}
          <div className="flex items-center justify-between gap-2">
            <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full ${theme.badge} uppercase tracking-wider`}>
              {document.category}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-white/95 px-2.5 py-0.5 rounded-full border border-emerald-300/80 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Verified Original</span>
            </span>
          </div>

          {/* Title & Registration Strip */}
          <div className="space-y-1.5">
            <h3 className={`text-sm sm:text-base font-black text-slate-900 ${theme.textAccent} transition-colors line-clamp-1`}>
              {document.title}
            </h3>

            {/* Embossed Registration Number Pill */}
            <div className={`flex items-center justify-between px-2.5 py-1.5 rounded-xl border ${theme.regBadge}`}>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                Registration No:
              </span>
              <span className="font-mono text-xs font-black text-slate-900 truncate">
                {document.docNumber}
              </span>
            </div>
          </div>

          {/* Official Document Paper Preview Frame */}
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900/[0.04] border border-slate-300/70 p-1.5 shadow-inner group-hover:border-slate-400/80 transition-colors">
            <div className="relative w-full h-full rounded-lg overflow-hidden bg-white shadow-xs border border-slate-200/80">
              {document.image ? (
                <>
                  <Image
                    src={document.image}
                    alt={`${document.title} - ${document.docNumber}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Clean Dark-Frosted Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-950/45 backdrop-blur-2xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <div className="px-4 py-2 rounded-full bg-white text-slate-950 text-xs font-black flex items-center gap-2 shadow-2xl border border-white/90 group-hover:scale-105 transition-transform">
                      <ZoomIn className={`w-4 h-4 ${theme.zoomIcon}`} />
                      <span>Preview Original Scan</span>
                    </div>
                  </div>
                </>
              ) : (
                /* Fallback if scan image is not provided */
                <div className="w-full h-full flex flex-col justify-between p-3 text-slate-500">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-1">
                    <span className="text-[10px] font-bold text-slate-700">OFFICIAL RECORD</span>
                    <Award className="w-3.5 h-3.5 text-blue-600" />
                  </div>
                  <div className="text-center py-2 font-mono font-bold text-slate-900 text-xs">
                    {document.docNumber}
                  </div>
                  <div className="text-[10px] text-slate-500 line-clamp-1">{document.issuingAuthority}</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Card Footer: Authority & Action Link */}
        <div className="pt-3 mt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
          <div className="min-w-0 pr-2">
            <span className="block text-[11px] text-slate-600 font-semibold truncate">
              {document.issuingAuthority}
            </span>
            <span className="block text-[10px] text-emerald-700 font-bold">
              ✓ Active Govt Compliance
            </span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <span className={`text-xs font-black ${theme.textAccent}`}>Inspect</span>
            <div className={`w-6 h-6 rounded-full ${theme.actionCircle} flex items-center justify-center transition-all shadow-2xs`}>
              <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </div>

      {/* LIGHTBOX MODAL PREVIEW - Fixed at high z-index above bottom nav */}
      {modalOpen && (
        <div
          onClick={() => setModalOpen(false)}
          className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-2.5 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl sm:rounded-3xl shadow-2xl p-3.5 sm:p-6 space-y-2.5 sm:space-y-4 max-h-[96vh] sm:max-h-[92vh] flex flex-col my-auto"
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-2.5 sm:pb-3 shrink-0">
              <div className="space-y-0.5 min-w-0 pr-2">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] sm:text-xs font-bold border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Statutory Government Document</span>
                </div>
                <h2 className="text-base sm:text-2xl font-black text-slate-900 leading-snug line-clamp-2">
                  {document.title}
                </h2>
                <p className="text-[11px] sm:text-xs text-slate-500 line-clamp-1">{document.formType}</p>
              </div>

              <button
                onClick={() => setModalOpen(false)}
                className="p-1.5 sm:p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors shrink-0"
                title="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Official Scanned Image Viewer */}
            <div className="relative flex-1 min-h-[200px] max-h-[48vh] sm:max-h-[58vh] overflow-auto rounded-xl sm:rounded-2xl bg-slate-100 border border-slate-200/90 p-2 sm:p-4 flex items-center justify-center">
              {document.image ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={document.image}
                  alt={`${document.title} - Full Scan`}
                  className="max-h-[46vh] sm:max-h-[56vh] w-auto h-auto object-contain rounded shadow-sm"
                />
              ) : (
                <div className="text-center p-8 space-y-2 text-slate-400">
                  <FileText className="w-12 h-12 mx-auto text-slate-400" />
                  <p>Document scan is being processed.</p>
                </div>
              )}
            </div>

            {/* Modal Footer Strip */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3 text-xs shrink-0">
              <div className="flex items-center justify-between w-full sm:w-auto gap-2 text-center sm:text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-500 text-[10px] sm:text-[11px] font-medium">Reg No:</span>
                  <strong className="text-slate-900 font-mono text-xs sm:text-sm bg-white px-2 py-0.5 rounded border border-slate-200">
                    {document.docNumber}
                  </strong>
                </div>
                <div className="text-slate-500 text-[10px] sm:text-[11px]">
                  Validity: <strong className="text-emerald-700 font-semibold">{document.validity}</strong>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 w-full sm:w-auto sm:flex sm:items-center">
                {document.image && (
                  <>
                    <a
                      href={document.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1 px-2.5 sm:px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-800 font-bold text-xs transition-colors shadow-2xs text-center"
                    >
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                      <span>Open</span>
                    </a>
                    <a
                      href={document.image}
                      download
                      className={`inline-flex items-center justify-center gap-1 px-2.5 sm:px-3.5 py-2 rounded-xl ${theme.btnPrimary} font-bold text-xs transition-colors shadow-sm text-center`}
                    >
                      <Download className="w-3.5 h-3.5 shrink-0" />
                      <span>Download</span>
                    </a>
                  </>
                )}
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-3 sm:px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs transition-colors text-center"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
