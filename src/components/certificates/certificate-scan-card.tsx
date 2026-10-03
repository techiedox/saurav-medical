"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FileText,
  ShieldCheck,
  ExternalLink,
  ZoomIn,
  CheckCircle2,
  X,
  FileCheck2,
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
      ribbonBg: "bg-blue-600",
    },
    sky: {
      badge: "bg-sky-900/60 text-sky-200 border-sky-700/60",
      accentBorder: "border-sky-500/40 hover:border-sky-400",
      ribbonBg: "bg-sky-600",
    },
    emerald: {
      badge: "bg-emerald-900/60 text-emerald-300 border-emerald-700/60",
      accentBorder: "border-emerald-500/40 hover:border-emerald-400",
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
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${colorStyles.badge} uppercase tracking-wider`}>
              {document.category}
            </span>
            <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Verified Original
            </span>
          </div>

          <div>
            <h3 className="text-sm sm:text-base font-black text-white group-hover:text-sky-300 transition-colors line-clamp-1">
              {document.title}
            </h3>
            <p className="text-[11px] text-slate-400 font-medium mt-0.5 line-clamp-1">
              {document.formType}
            </p>
          </div>

          {/* Actual Document Paper Scan Preview Frame */}
          <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 border border-slate-700/70 shadow-inner group-hover:border-sky-400/60 transition-colors">
            {document.image ? (
              <>
                <Image
                  src={document.image}
                  alt={`${document.title} - ${document.docNumber}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

                {/* Floating Top Header Badges */}
                <div className="absolute top-2 inset-x-2 flex items-center justify-between z-10 pointer-events-none">
                  <span className="text-[9px] font-mono font-bold text-amber-300 bg-slate-950/85 backdrop-blur-md px-1.5 py-0.5 rounded border border-amber-400/30">
                    OFFICIAL RECORD
                  </span>
                  <span className="text-[9px] font-mono font-bold text-emerald-300 bg-slate-950/85 backdrop-blur-md px-1.5 py-0.5 rounded border border-emerald-500/30">
                    VERIFIED
                  </span>
                </div>

                {/* Bottom Number Strip */}
                <div className="absolute bottom-2 inset-x-2 z-10 flex items-center justify-between text-[11px]">
                  <span className="font-mono font-bold text-white bg-slate-950/90 px-2 py-0.5 rounded border border-slate-700 text-[10px] truncate max-w-[65%]">
                    {document.docNumber}
                  </span>
                  <span className="text-[10px] text-sky-300 bg-slate-950/85 px-1.5 py-0.5 rounded font-medium">
                    Expand Scan
                  </span>
                </div>
              </>
            ) : (
              /* Fallback representation if scan is missing */
              <div className="w-full h-full flex flex-col justify-between p-3">
                <div className="flex items-center justify-between border-b border-slate-700/80 pb-1">
                  <span className="text-[10px] font-bold text-slate-300">STATUTORY RECORD</span>
                  <span className="text-[9px] font-mono text-amber-400">OFFICIAL</span>
                </div>
                <div className="text-center py-2">
                  <div className="text-xs font-mono font-bold text-sky-300">{document.docNumber}</div>
                </div>
                <div className="text-[10px] text-slate-400 line-clamp-1">{document.issuingAuthority}</div>
              </div>
            )}

            {/* Hover Overlay Prompt */}
            <div className="absolute inset-0 z-20 bg-blue-950/75 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-600 text-white text-xs font-bold shadow-lg">
                <ZoomIn className="w-4 h-4" />
                <span>View Full Document</span>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-1.5 pt-1">
            {document.highlights.slice(0, 3).map((h, idx) => (
              <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{h}</span>
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
        <div
          onClick={() => setModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-[#0b1e36] border border-blue-700/80 rounded-3xl shadow-2xl p-4 sm:p-6 space-y-4 max-h-[92vh] flex flex-col"
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-blue-900/80 pb-3 shrink-0">
              <div className="space-y-1 min-w-0">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Statutory Government Document</span>
                </div>
                <h2 className="text-lg sm:text-2xl font-black text-white truncate">
                  {document.title}
                </h2>
                <p className="text-xs text-slate-400 truncate">{document.formType}</p>
              </div>

              <button
                onClick={() => setModalOpen(false)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors shrink-0"
                title="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Official Scanned Image Viewer */}
            <div className="relative flex-1 min-h-[300px] overflow-auto rounded-2xl bg-slate-950 border border-slate-700/80 p-2 sm:p-4 flex items-center justify-center">
              {document.image ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={document.image}
                  alt={`${document.title} - Full Scan`}
                  className="max-h-[62vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                />
              ) : (
                <div className="text-center p-8 space-y-2 text-slate-400">
                  <FileText className="w-12 h-12 mx-auto text-slate-500" />
                  <p>Document scan is being processed.</p>
                </div>
              )}
            </div>

            {/* Modal Footer Strip */}
            <div className="bg-[#081527] border border-blue-900/60 rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs shrink-0">
              <div className="space-y-0.5 text-center sm:text-left">
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <span className="text-slate-400 text-[11px]">Registration No:</span>
                  <strong className="text-sky-300 font-mono text-xs sm:text-sm">{document.docNumber}</strong>
                </div>
                <div className="text-slate-400 text-[11px]">
                  Validity: <strong className="text-emerald-400 font-medium">{document.validity}</strong>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {document.image && (
                  <>
                    <a
                      href={document.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Open Full Size</span>
                    </a>
                    <a
                      href={document.image}
                      download
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors shadow-sm"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Scan</span>
                    </a>
                  </>
                )}
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition-colors"
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
