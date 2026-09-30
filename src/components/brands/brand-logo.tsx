"use client";

import React from "react";

interface BrandLogoProps {
  name: string;
  category?: string;
  specialty?: string;
  badge?: string;
}

export function BrandLogo({ name, category, specialty, badge }: BrandLogoProps) {
  // Generate authentic visual logo marks for pharmaceutical brands
  const renderLogoGraphic = () => {
    const n = name.toLowerCase();

    if (n.includes("alkem")) {
      return (
        <div className="flex items-center gap-1.5">
          <svg className="w-5 h-5 text-emerald-600 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
          </svg>
          <span className="font-black text-slate-900 text-sm tracking-tighter">ALKEM</span>
        </div>
      );
    }

    if (n.includes("aristo")) {
      return (
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-md bg-red-600 flex items-center justify-center text-white font-black text-xs">
            A
          </div>
          <span className="font-extrabold text-red-600 text-sm tracking-tight">ARISTO</span>
        </div>
      );
    }

    if (n.includes("cipla")) {
      return (
        <div className="flex items-center gap-1">
          <div className="w-2.5 h-2.5 rounded-full bg-red-600" />
          <span className="font-black text-slate-900 text-base tracking-tight font-serif">Cipla</span>
        </div>
      );
    }

    if (n.includes("abbott")) {
      return (
        <div className="px-2.5 py-1 rounded-full border-2 border-sky-600 bg-sky-50 flex items-center justify-center">
          <span className="font-black text-sky-700 text-xs italic tracking-tighter">Abbott</span>
        </div>
      );
    }

    if (n.includes("pfizer")) {
      return (
        <div className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-blue-700 to-sky-600 text-white flex items-center justify-center shadow-xs">
          <span className="font-serif italic font-bold text-xs">Pfizer</span>
        </div>
      );
    }

    if (n.includes("serum institute")) {
      return (
        <div className="flex items-center gap-1 text-red-600">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3zm-1 6h2v6h-2V8zm0 8h2v2h-2v-2z" />
          </svg>
          <span className="font-black text-[11px] leading-tight text-slate-900 uppercase tracking-tighter">
            SERUM INSTITUTE
          </span>
        </div>
      );
    }

    if (n.includes("glaxo") || n.includes("gsk")) {
      return (
        <div className="flex items-center gap-1">
          <div className="w-5 h-5 rounded-md bg-orange-500 text-white font-black text-xs flex items-center justify-center">
            g
          </div>
          <span className="font-black text-slate-900 text-sm tracking-tighter">gsk</span>
        </div>
      );
    }

    if (n.includes("mankind")) {
      return (
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 rounded-full bg-red-600 flex items-center justify-center text-white text-[9px] font-black">
            M
          </div>
          <span className="font-black text-slate-900 text-xs tracking-tight">Mankind</span>
        </div>
      );
    }

    if (n.includes("medley")) {
      return (
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded-full bg-teal-700 text-white flex items-center justify-center font-bold text-[9px] shrink-0">
            M
          </div>
          <span className="font-extrabold text-slate-900 text-xs">Medley</span>
        </div>
      );
    }

    if (n.includes("lupin")) {
      return (
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          </div>
          <span className="font-black text-blue-800 text-xs tracking-wider">LUPIN</span>
        </div>
      );
    }

    if (n.includes("smart lab") || n.includes("smartlab")) {
      return (
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded-full bg-emerald-600 text-white font-bold text-[8px] flex items-center justify-center shrink-0">
            SL
          </div>
          <span className="font-black text-emerald-950 text-xs">SmartLab</span>
        </div>
      );
    }

    if (n.includes("silver cross")) {
      return (
        <div className="flex items-center gap-1.5">
          <div className="w-3.5 h-3.5 rounded bg-slate-800 text-white flex items-center justify-center text-[10px] font-black shrink-0">
            +
          </div>
          <span className="font-black text-slate-900 text-xs">Silver Cross</span>
        </div>
      );
    }

    if (n.includes("biochem")) {
      return (
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded-full bg-cyan-700 text-white font-bold text-[8px] flex items-center justify-center shrink-0">
            BC
          </div>
          <span className="font-black text-cyan-950 text-xs">BIOCHEM</span>
        </div>
      );
    }

    if (n.includes("torque")) {
      return (
        <div className="flex items-center gap-1.5">
          <div className="px-1 py-0.2 rounded bg-blue-600 text-white font-black text-[8px] shrink-0">
            TQ
          </div>
          <span className="font-black text-blue-800 text-xs">TORQUE</span>
        </div>
      );
    }

    if (n.includes("jacsonpal")) {
      return (
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded-full bg-indigo-900 text-white font-bold text-[8px] flex items-center justify-center shrink-0">
            JP
          </div>
          <span className="font-black text-indigo-950 text-xs">JACSONPAL</span>
        </div>
      );
    }

    if (n.includes("dr reddy")) {
      return (
        <div className="flex items-center gap-1">
          <span className="font-bold text-purple-700 text-xs">Dr.Reddy's</span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
        </div>
      );
    }

    if (n.includes("biocon")) {
      return (
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 rounded-md bg-teal-600 text-white font-black text-[9px] flex items-center justify-center">
            B
          </div>
          <span className="font-extrabold text-teal-700 text-xs tracking-tight">Biocon</span>
        </div>
      );
    }

    if (n.includes("raptakos")) {
      return (
        <div className="flex flex-col items-center">
          <span className="font-extrabold text-blue-900 text-[11px] tracking-tight">RAPTAKOS BRETT</span>
          <span className="text-[9px] font-bold text-blue-600 font-mono">Lactodex • Zerolac</span>
        </div>
      );
    }

    if (n.includes("laborate")) {
      return (
        <div className="flex items-center gap-1">
          <span className="font-black text-indigo-700 text-xs tracking-wider">LABORATE</span>
        </div>
      );
    }

    if (n.includes("glenmark")) {
      return (
        <div className="flex items-center gap-1">
          <span className="font-extrabold text-rose-700 text-xs tracking-tight">Glenmark</span>
        </div>
      );
    }

    if (n.includes("cadila")) {
      return (
        <div className="flex items-center gap-1">
          <span className="font-black text-red-700 text-xs tracking-tighter">CADILA</span>
        </div>
      );
    }

    if (n.includes("macleods")) {
      return (
        <div className="flex items-center gap-1">
          <span className="font-black text-blue-700 text-xs tracking-tight">MACLEODS</span>
        </div>
      );
    }

    if (n.includes("u.s.v.") || n.includes("usv")) {
      return (
        <div className="flex items-center gap-1">
          <span className="font-black text-teal-800 text-sm tracking-wider">USV</span>
        </div>
      );
    }

    // Default stylized modern pharma wordmark
    return (
      <div className="flex items-center gap-1.5 max-w-full">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
        <span className="font-bold text-slate-900 text-xs tracking-tight leading-tight line-clamp-1">
          {name}
        </span>
      </div>
    );
  };

  // Authentic status badge formatting (matching inspo image 3)
  const getStatusBadge = () => {
    const n = name.toLowerCase();
    if (n.includes("alkem")) return "Direct Depot";
    if (n.includes("aristo")) return "Authorized Wholesale";
    if (n.includes("cipla")) return "Direct Wholesale";
    if (n.includes("medley")) return "Authorized Wholesale";
    if (n.includes("lupin")) return "Direct Wholesale";
    if (n.includes("smart lab") || n.includes("smartlab")) return "Generic Line";
    if (n.includes("silver cross")) return "Generic Line";
    if (n.includes("biochem")) return "Authorized Wholesale";
    if (n.includes("torque")) return "Wholesale Partner";
    if (n.includes("jacsonpal")) return "Authorized Depot";
    if (n.includes("abbott")) return "Direct Depot";
    if (n.includes("pfizer")) return "Authorized Stockist";
    if (n.includes("serum institute")) return "Depot Vaccine";
    if (n.includes("gsk") || n.includes("glaxo")) return "Authorized Stockist";
    if (n.includes("mankind")) return "Direct Wholesale";
    if (n.includes("dr reddy")) return "Authorized Stockist";
    if (n.includes("biocon")) return "Direct Wholesale";
    if (n.includes("cadila")) return "Direct Depot";
    if (n.includes("macleods")) return "Authorized Wholesale";
    if (n.includes("usv")) return "Direct Depot";
    if (n.includes("glenmark")) return "Authorized Wholesale";
    return badge || "Authorized Wholesale";
  };

  const getSpecialty = () => {
    const n = name.toLowerCase();
    if (n.includes("alkem")) return "Antibiotics & Generics";
    if (n.includes("aristo")) return "Gastro & Anti-Infectives";
    if (n.includes("cipla")) return "Respiratory & Critical Care";
    if (n.includes("medley")) return "Analgesics & Hematinics";
    if (n.includes("lupin")) return "Cardiology & Anti-TB";
    if (n.includes("smart lab") || n.includes("smartlab")) return "Daily Acute Generics";
    if (n.includes("silver cross")) return "Essential Formulations";
    if (n.includes("biochem")) return "Injectables & Antibiotics";
    if (n.includes("torque")) return "Syrups, Ointments & Derma";
    if (n.includes("jacsonpal")) return "Gynecology & Pain Care";
    return specialty || category || "Ethical Pharmaceuticals";
  };

  return (
    <div className="group relative rounded-2xl bg-white p-2.5 sm:p-3.5 border border-slate-200/90 hover:border-blue-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between items-center text-center gap-2 shadow-xs min-h-[7.25rem]">
      {/* Top Logo Container Box (as shown in inspo image 3) */}
      <div className="w-full py-2 px-2 rounded-xl border border-slate-200/70 bg-white flex items-center justify-center min-h-[2.4rem] shadow-2xs">
        {renderLogoGraphic()}
      </div>

      {/* Middle Specialty / Category Text */}
      <span className="text-[11px] sm:text-xs text-slate-600 font-medium line-clamp-1 block w-full px-0.5">
        {getSpecialty()}
      </span>

      {/* Bottom Authentic Status Badge Pill (Light teal background with green text as in inspo image 3) */}
      <div className="w-full flex items-center justify-center">
        <span className="text-[10px] sm:text-[11px] font-bold text-teal-700 bg-teal-50 border border-teal-200/80 rounded-full px-2.5 py-0.5 whitespace-nowrap">
          {getStatusBadge()}
        </span>
      </div>
    </div>
  );
}
