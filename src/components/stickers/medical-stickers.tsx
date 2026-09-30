"use client";

import React from "react";

// 1. VACCINE & COLD CHAIN STICKER (For Agency)
export function VaccineColdChainSticker({ className = "w-28 h-28" }: { className?: string }) {
  return (
    <div className={`relative inline-flex items-center justify-center animate-sticker-bob select-none ${className}`}>
      {/* Outer Glow Halo */}
      <div className="absolute inset-0 bg-blue-400/25 rounded-full blur-xl animate-pulse-glow" />

      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_12px_20px_rgba(30,58,138,0.22)] filter"
      >
        {/* Die-cut white sticker border outline */}
        <ellipse cx="60" cy="108" rx="36" ry="7" fill="#0f172a" fillOpacity="0.12" />

        {/* Cold-Chain Ice Crystal / Snowflake Badges */}
        <g className="animate-sticker-wiggle origin-center">
          <circle cx="26" cy="38" r="14" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="2.5" />
          <path d="M26 29v18M20 38h12M22 34l8 8M22 42l8-8" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Vaccine Vial Body */}
        <g>
          {/* Glass Vial Background */}
          <rect x="42" y="36" width="36" height="58" rx="8" fill="#f0f9ff" stroke="#ffffff" strokeWidth="4" />
          <rect x="42" y="36" width="36" height="58" rx="8" fill="url(#vialGlassGrad)" stroke="#38bdf8" strokeWidth="2.5" />

          {/* Liquid Level (Active Vaccine) */}
          <rect x="44.5" y="54" width="31" height="38" rx="6" fill="url(#vaccineLiquidGrad)" />

          {/* Vaccine Vial Label */}
          <rect x="45" y="60" width="30" height="24" rx="3" fill="#ffffff" fillOpacity="0.95" stroke="#bae6fd" strokeWidth="1" />
          {/* Cross Icon on Label */}
          <path d="M60 65v14M53 72h14" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" />
          {/* 2°C - 8°C micro text badge */}
          <rect x="48" y="78" width="24" height="4" rx="2" fill="#0284c7" />

          {/* Glass Reflection Highlight */}
          <path d="M47 42v46" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.8" />
          <path d="M52 44v10" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6" />

          {/* Vial Neck */}
          <rect x="50" y="28" width="20" height="8" rx="2" fill="#cbd5e1" stroke="#ffffff" strokeWidth="3" />
          <rect x="50" y="28" width="20" height="8" rx="2" fill="#94a3b8" stroke="#64748b" strokeWidth="1.5" />

          {/* Vial Rubber Cap / Aluminium Crimp */}
          <rect x="47" y="20" width="26" height="9" rx="3.5" fill="#0284c7" stroke="#ffffff" strokeWidth="3.5" />
          <rect x="47" y="20" width="26" height="9" rx="3.5" fill="url(#crimpGrad)" stroke="#0369a1" strokeWidth="1.5" />
          <rect x="54" y="18" width="12" height="4" rx="2" fill="#38bdf8" />
        </g>

        {/* Cold-Chain 2-8°C Floating Badge */}
        <g className="animate-sticker-bob-alt origin-center">
          <rect x="74" y="24" width="38" height="22" rx="11" fill="#ffffff" stroke="#38bdf8" strokeWidth="2" />
          <rect x="76" y="26" width="34" height="18" rx="9" fill="#0284c7" />
          <text x="93" y="39" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold" fontFamily="sans-serif">
            2°–8°C
          </text>
        </g>

        {/* Sparkle Stars */}
        <path d="M96 68l1.5 3.5 3.5 1.5-3.5 1.5-1.5 3.5-1.5-3.5-3.5-1.5 3.5-1.5z" fill="#38bdf8" />
        <path d="M22 74l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" fill="#60a5fa" />

        {/* Gradients */}
        <defs>
          <linearGradient id="vialGlassGrad" x1="42" y1="36" x2="78" y2="94" gradientUnits="userSpaceOnUse">
            <stop stopColor="#e0f2fe" stopOpacity="0.4" />
            <stop offset="1" stopColor="#bae6fd" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="vaccineLiquidGrad" x1="60" y1="54" x2="60" y2="92" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38bdf8" />
            <stop offset="0.6" stopColor="#0284c7" />
            <stop offset="1" stopColor="#0369a1" />
          </linearGradient>
          <linearGradient id="crimpGrad" x1="47" y1="20" x2="73" y2="29" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0284c7" />
            <stop offset="1" stopColor="#075985" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// 2. GENERIC PILL & CAPSULE STICKER (For Store)
export function GenericPillSticker({ className = "w-28 h-28" }: { className?: string }) {
  return (
    <div className={`relative inline-flex items-center justify-center animate-sticker-bob-alt select-none ${className}`}>
      {/* Outer Glow Halo */}
      <div className="absolute inset-0 bg-sky-400/25 rounded-full blur-xl animate-pulse-glow" />

      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_12px_20px_rgba(2,132,199,0.22)] filter"
      >
        {/* Soft Contact Shadow */}
        <ellipse cx="60" cy="106" rx="40" ry="7" fill="#0f172a" fillOpacity="0.12" />

        {/* Main Angled Capsule */}
        <g transform="rotate(-28 60 56)">
          {/* Die-cut white background border */}
          <rect x="28" y="38" width="64" height="34" rx="17" fill="#ffffff" stroke="#ffffff" strokeWidth="5" />

          {/* Left Half (Cyan / Light Blue) */}
          <path
            d="M45 38h15v34H45a17 17 0 0 1-17-17v0a17 17 0 0 1 17-17z"
            fill="url(#capsuleCyanGrad)"
            stroke="#0284c7"
            strokeWidth="2"
          />

          {/* Right Half (Deep Blue / Navy) */}
          <path
            d="M60 38h17a17 17 0 0 1 17 17v0a17 17 0 0 1-17 17H60V38z"
            fill="url(#capsuleBlueGrad)"
            stroke="#075985"
            strokeWidth="2"
          />

          {/* Mid Joint Seam Ring */}
          <rect x="58.5" y="37" width="3" height="36" rx="1.5" fill="#ffffff" fillOpacity="0.9" />

          {/* Capsule Gloss Highlights */}
          <path d="M35 44c8-3 38-3 48 0" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.85" />
          <path d="M38 48c4-1 12-1 16 0" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.7" />
        </g>

        {/* Round Generic Tablet Floating Near Bottom Right */}
        <g className="animate-sticker-bob origin-center">
          {/* White Border */}
          <circle cx="86" cy="80" r="18" fill="#ffffff" stroke="#ffffff" strokeWidth="4" />
          <circle cx="86" cy="80" r="18" fill="url(#tabletGrad)" stroke="#38bdf8" strokeWidth="2.5" />
          {/* Pill Score Line */}
          <line x1="74" y1="80" x2="98" y2="80" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.8" />
          {/* Cross embossed */}
          <path d="M86 74v12" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5" />
          {/* Tablet Highlight */}
          <path d="M74 74a14 14 0 0 1 18-6" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.9" />
        </g>

        {/* Chemist Profit Scheme Badge "%" */}
        <g className="animate-sticker-wiggle origin-center">
          <circle cx="30" cy="30" r="13" fill="#ffffff" stroke="#ffffff" strokeWidth="3" />
          <circle cx="30" cy="30" r="13" fill="#10b981" stroke="#059669" strokeWidth="1.5" />
          <text x="30" y="35" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="black" fontFamily="sans-serif">
            %
          </text>
        </g>

        {/* Sparkles */}
        <path d="M22 76l1.5 3 3 1.5-3 1.5-1.5 3-1.5-3-3-1.5 3-1.5z" fill="#0284c7" />
        <path d="M98 32l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1z" fill="#38bdf8" />

        {/* Gradients */}
        <defs>
          <linearGradient id="capsuleCyanGrad" x1="28" y1="38" x2="60" y2="72" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7dd3fc" />
            <stop offset="1" stopColor="#0284c7" />
          </linearGradient>
          <linearGradient id="capsuleBlueGrad" x1="60" y1="38" x2="94" y2="72" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0284c7" />
            <stop offset="1" stopColor="#0b1e36" />
          </linearGradient>
          <linearGradient id="tabletGrad" x1="72" y1="66" x2="100" y2="94" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f0f9ff" />
            <stop offset="1" stopColor="#bae6fd" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// 3. STATUTORY VERIFIED SHIELD STICKER (Form 20B/21B Drug License & GSTIN)
export function StatutoryShieldSticker({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <div className={`relative inline-flex items-center justify-center animate-sticker-bob select-none ${className}`}>
      <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-xl animate-pulse-glow" />

      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_10px_18px_rgba(5,150,105,0.22)] filter"
      >
        {/* Die Cut White Border */}
        <path
          d="M50 10l30 12v26c0 22-14 36-30 42C34 84 20 70 20 48V22l30-12z"
          fill="#ffffff"
          stroke="#ffffff"
          strokeWidth="6"
          strokeLinejoin="round"
        />

        {/* Outer Shield (Deep Royal Blue) */}
        <path
          d="M50 12l28 11.2v24.8c0 20.8-13.2 34-28 39.8C35.2 82 22 68.8 22 48V23.2L50 12z"
          fill="url(#shieldBlueGrad)"
          stroke="#1e3a8a"
          strokeWidth="2"
        />

        {/* Inner Shield (Emerald / Green Trust Accent) */}
        <path
          d="M50 20l20 8v18c0 15-9.5 25-20 29.5C39.5 71 30 61 30 46V28l20-8z"
          fill="url(#shieldEmeraldGrad)"
        />

        {/* Big White Checkmark */}
        <path
          d="M40 47l7 7 14-16"
          stroke="#ffffff"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* 20B / 21B Ribbon Banner */}
        <rect x="22" y="70" width="56" height="16" rx="8" fill="#ffffff" stroke="#059669" strokeWidth="2" />
        <text x="50" y="81.5" textAnchor="middle" fill="#047857" fontSize="8" fontWeight="900" fontFamily="sans-serif">
          FORM 20B & 21B
        </text>

        {/* Star Badges */}
        <circle cx="50" cy="27" r="3" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />

        <defs>
          <linearGradient id="shieldBlueGrad" x1="22" y1="12" x2="78" y2="88" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1e3a8a" />
            <stop offset="1" stopColor="#0b1e36" />
          </linearGradient>
          <linearGradient id="shieldEmeraldGrad" x1="30" y1="20" x2="70" y2="75" gradientUnits="userSpaceOnUse">
            <stop stopColor="#34d399" />
            <stop offset="1" stopColor="#059669" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// 4. DOCTOR & HOSPITAL STETHOSCOPE STICKER (For Agency Surgical & Ethical)
export function DoctorStethoscopeSticker({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <div className={`relative inline-flex items-center justify-center animate-sticker-bob-alt select-none ${className}`}>
      <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-pulse-glow" />

      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_10px_18px_rgba(2,132,199,0.2)] filter"
      >
        {/* Die Cut Background */}
        <circle cx="50" cy="50" r="44" fill="#ffffff" stroke="#ffffff" strokeWidth="6" />
        <circle cx="50" cy="50" r="42" fill="url(#stethCircleGrad)" stroke="#bae6fd" strokeWidth="2" />

        {/* Stethoscope Rubber Tubing Forming a Heart */}
        <path
          d="M32 30v14c0 14 12 24 18 24s18-10 18-24V30"
          stroke="#0284c7"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Metallic Ear Tubes */}
        <path d="M32 32c-3-6-5-10-8-10M68 32c3-6 5-10 8-10" stroke="#64748b" strokeWidth="4.5" strokeLinecap="round" />
        <circle cx="23" cy="22" r="3.5" fill="#0f172a" />
        <circle cx="77" cy="22" r="3.5" fill="#0f172a" />

        {/* Tubing down to chest piece */}
        <path d="M50 68v10" stroke="#0284c7" strokeWidth="6" strokeLinecap="round" />

        {/* Metallic Chestpiece / Diaphragm */}
        <circle cx="50" cy="80" r="9" fill="#e2e8f0" stroke="#0284c7" strokeWidth="3" />
        <circle cx="50" cy="80" r="5" fill="#0284c7" />

        {/* Glowing ECG Pulse Line in Center */}
        <path
          d="M26 48h14l3.5-7 5 14 4-10 3 5 2-2h16"
          stroke="#38bdf8"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <defs>
          <linearGradient id="stethCircleGrad" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f0f9ff" />
            <stop offset="1" stopColor="#e0f2fe" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// 5. INSULATED COLD BOX STICKER (For Cold Chain Vaccine Storage)
export function ColdBoxSticker({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <div className={`relative inline-flex items-center justify-center animate-sticker-bob select-none ${className}`}>
      <div className="absolute inset-0 bg-sky-400/20 rounded-full blur-xl animate-pulse-glow" />

      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_10px_18px_rgba(3,105,161,0.2)] filter"
      >
        {/* Die cut */}
        <rect x="18" y="28" width="64" height="52" rx="10" fill="#ffffff" stroke="#ffffff" strokeWidth="6" />

        {/* Main Box Body */}
        <rect x="20" y="38" width="60" height="40" rx="8" fill="url(#coldBoxBodyGrad)" stroke="#0284c7" strokeWidth="2.5" />

        {/* Box Lid */}
        <rect x="17" y="28" width="66" height="14" rx="5" fill="#38bdf8" stroke="#0284c7" strokeWidth="2.5" />
        <rect x="42" y="24" width="16" height="6" rx="2" fill="#0284c7" />

        {/* Front Temperature Display */}
        <rect x="34" y="48" width="32" height="18" rx="4" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
        <text x="50" y="61" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="monospace">
          3.8°C
        </text>

        {/* Snowflake */}
        <path d="M50 70v4M48 72h4" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />

        {/* Side Latches */}
        <rect x="18" y="44" width="4" height="10" rx="1" fill="#64748b" />
        <rect x="78" y="44" width="4" height="10" rx="1" fill="#64748b" />

        <defs>
          <linearGradient id="coldBoxBodyGrad" x1="20" y1="38" x2="80" y2="78" gradientUnits="userSpaceOnUse">
            <stop stopColor="#e0f2fe" />
            <stop offset="1" stopColor="#bae6fd" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// 6. INFANT NUTRITION FORMULA STICKER (Lactodex / Zerolac / Raptakos Brett)
export function InfantNutritionSticker({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <div className={`relative inline-flex items-center justify-center animate-sticker-bob-alt select-none ${className}`}>
      <div className="absolute inset-0 bg-blue-300/20 rounded-full blur-xl animate-pulse-glow" />

      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_10px_18px_rgba(30,58,138,0.2)] filter"
      >
        {/* Die cut */}
        <rect x="26" y="24" width="48" height="60" rx="8" fill="#ffffff" stroke="#ffffff" strokeWidth="6" />

        {/* Tin Can Body */}
        <rect x="28" y="26" width="44" height="56" rx="6" fill="url(#tinGrad)" stroke="#0284c7" strokeWidth="2.5" />

        {/* Tin Lid Rim */}
        <rect x="25" y="22" width="50" height="8" rx="3" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />

        {/* Label */}
        <rect x="30" y="40" width="40" height="30" rx="3" fill="#ffffff" stroke="#bae6fd" strokeWidth="1" />
        <text x="50" y="52" textAnchor="middle" fill="#0284c7" fontSize="7" fontWeight="bold" fontFamily="sans-serif">
          LACTODEX
        </text>
        <text x="50" y="62" textAnchor="middle" fill="#64748b" fontSize="6" fontWeight="semibold" fontFamily="sans-serif">
          Formula 1 & 2
        </text>

        {/* Cute Heart */}
        <path d="M50 71c-2-2-4-2-4 0s4 4 4 4 4-2 4-4-2-2-4 0z" fill="#f43f5e" />

        <defs>
          <linearGradient id="tinGrad" x1="28" y1="26" x2="72" y2="82" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f0f9ff" />
            <stop offset="1" stopColor="#bae6fd" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
