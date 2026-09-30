"use client";

import React from "react";

export function PharmacistCounterSticker({ className = "w-full max-w-lg aspect-square" }: { className?: string }) {
  return (
    <div className={`relative inline-flex items-center justify-center select-none animate-sticker-bob ${className}`}>
      {/* Ambient background soft glow */}
      <div className="absolute inset-0 bg-teal-400/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <svg
        viewBox="0 0 500 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_20px_35px_rgba(13,148,136,0.18)]"
      >
        {/* Soft Backdrop Organic Dome / Arch */}
        <path
          d="M70 380C70 200 150 50 310 50C430 50 470 170 470 380H70Z"
          fill="url(#backdropArchGrad)"
          fillOpacity="0.45"
        />

        {/* Pharmacy Shelves in Background */}
        <g opacity="0.75">
          {/* Top Shelf */}
          <rect x="250" y="115" width="180" height="6" rx="3" fill="#cbd5e1" />
          {/* Books / Medicine cartons on top shelf */}
          <rect x="260" y="85" width="10" height="30" rx="2" fill="#93c5fd" />
          <rect x="272" y="88" width="12" height="27" rx="2" fill="#60a5fa" />
          <rect x="286" y="82" width="14" height="33" rx="2" fill="#3b82f6" />
          <rect x="302" y="90" width="10" height="25" rx="2" fill="#cbd5e1" />

          {/* Middle Shelf */}
          <rect x="250" y="175" width="195" height="6" rx="3" fill="#cbd5e1" />
          {/* Medicine Boxes & Syrup bottles on middle shelf */}
          <rect x="265" y="148" width="28" height="27" rx="4" fill="#ffffff" stroke="#93c5fd" strokeWidth="2" />
          <rect x="272" y="156" width="14" height="5" rx="1.5" fill="#3b82f6" />

          <rect x="302" y="144" width="26" height="31" rx="4" fill="#ffffff" stroke="#6ee7b7" strokeWidth="2" />
          <rect x="308" y="154" width="14" height="5" rx="1.5" fill="#10b981" />

          {/* Syrup bottle */}
          <path d="M375 145h10v6h-10zM372 151h16v24h-16z" fill="#93c5fd" fillOpacity="0.7" />
          <path d="M400 143h12v6h-12zM396 149h20v26h-20z" fill="#a7f3d0" fillOpacity="0.7" />

          {/* Wall Clock */}
          <circle cx="410" cy="90" r="22" fill="#ffffff" stroke="#cbd5e1" strokeWidth="3" />
          <path d="M410 77v14M403 90h14" stroke="#0ea5e9" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Pharmacist Character */}
        <g>
          {/* Hair Back */}
          <ellipse cx="250" cy="170" rx="46" ry="52" fill="#58311e" />

          {/* Neck */}
          <rect x="238" y="195" width="24" height="28" rx="6" fill="#fbd2be" />

          {/* Blue Shirt Collar under Coat */}
          <path d="M228 215L250 250L272 215H228Z" fill="#1d4ed8" />

          {/* Head & Face */}
          <circle cx="250" cy="165" r="38" fill="#fddcc9" />

          {/* Hair Front / Bangs */}
          <path
            d="M216 160C216 130 230 120 250 120C275 120 290 135 288 165C275 145 260 140 242 145C228 149 220 156 216 160Z"
            fill="#58311e"
          />

          {/* Spectacles / Glasses */}
          <rect x="226" y="155" width="20" height="15" rx="5" fill="none" stroke="#292524" strokeWidth="2.5" />
          <rect x="254" y="155" width="20" height="15" rx="5" fill="none" stroke="#292524" strokeWidth="2.5" />
          <line x1="246" y1="162" x2="254" y2="162" stroke="#292524" strokeWidth="2.5" />
          <line x1="226" y1="160" x2="220" y2="158" stroke="#292524" strokeWidth="2" />
          <line x1="274" y1="160" x2="280" y2="158" stroke="#292524" strokeWidth="2" />

          {/* Eyes (Smiling Arcs) */}
          <path d="M231 163C233 160 239 160 241 163" stroke="#292524" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M259 163C261 160 267 160 269 163" stroke="#292524" strokeWidth="2.5" strokeLinecap="round" />

          {/* Happy Smile */}
          <path d="M242 178C245 186 255 186 258 178" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" />

          {/* Rosy Cheeks */}
          <circle cx="228" cy="174" r="4" fill="#f87171" fillOpacity="0.4" />
          <circle cx="272" cy="174" r="4" fill="#f87171" fillOpacity="0.4" />

          {/* White Lab Coat Body */}
          <path
            d="M200 310L216 220C220 215 228 214 236 216L250 250L264 216C272 214 280 215 284 220L300 310H200Z"
            fill="#ffffff"
            stroke="#e2e8f0"
            strokeWidth="3"
          />

          {/* Lab Coat Lapels */}
          <path d="M234 216L246 270L220 220Z" fill="#f1f5f9" />
          <path d="M266 216L254 270L280 220Z" fill="#f1f5f9" />

          {/* Green Name Badge on Coat */}
          <rect x="268" y="240" width="16" height="7" rx="2" fill="#10b981" />

          {/* Crossed Arms */}
          <path
            d="M214 246C205 265 215 295 240 295H260C285 295 295 265 286 246C276 270 266 280 250 280C234 280 224 270 214 246Z"
            fill="#ffffff"
            stroke="#e2e8f0"
            strokeWidth="3"
          />

          {/* Hands holding sleeves */}
          <circle cx="236" cy="275" r="7" fill="#fddcc9" />
          <circle cx="264" cy="275" r="7" fill="#fddcc9" />
        </g>

        {/* Pharmacy Counter Desk */}
        <g>
          {/* Main Solid Counter Block (Navy Blue) */}
          <rect x="180" y="300" width="290" height="95" rx="14" fill="#2563eb" />
          <rect x="180" y="300" width="290" height="95" rx="14" fill="url(#counterGrad)" />

          {/* Counter Top Surface (Lighter Accent Bar) */}
          <rect x="170" y="295" width="310" height="15" rx="7.5" fill="#3b82f6" />

          {/* Medical Cross (+) Emblem on Counter */}
          <g transform="translate(315, 335)">
            <rect x="8" y="0" width="8" height="24" rx="3" fill="#ffffff" fillOpacity="0.85" />
            <rect x="0" y="8" width="24" height="8" rx="3" fill="#ffffff" fillOpacity="0.85" />
          </g>

          {/* Computer Desktop Monitor on Counter */}
          <g>
            {/* Monitor Stand */}
            <rect x="345" y="250" width="12" height="48" rx="3" fill="#64748b" />
            <rect x="330" y="294" width="42" height="6" rx="3" fill="#475569" />

            {/* Monitor Screen Frame */}
            <rect x="290" y="195" width="95" height="65" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="2.5" />
            {/* Screen Glass (Soft dark gradient) */}
            <rect x="296" y="201" width="83" height="53" rx="5" fill="#0f172a" />
            {/* Pharmacy Software Wave / Graph on screen */}
            <path d="M302 232L312 232L317 220L323 242L330 225L336 235L342 232L372 232" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          {/* Barcode Scanner on Stand */}
          <path d="M280 270C280 262 284 256 288 256C292 256 295 260 294 266L290 295" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
          <ellipse cx="288" cy="256" rx="6" ry="4" fill="#0f172a" />

          {/* Cute Desk Plant (Succulent in pot) */}
          <g>
            {/* Pot */}
            <path d="M400 282L403 296H417L420 282Z" fill="#b45309" />
            {/* Plant Leaves */}
            <path d="M410 262C405 268 403 276 405 282C410 282 414 278 416 270C418 276 422 282 425 282C427 274 423 268 418 264C415 258 412 256 410 262Z" fill="#10b981" />
          </g>
        </g>

        {/* Floating Sparkles & Soft Accents */}
        <path d="M120 180L123 188L131 191L123 194L120 202L117 194L109 191L117 188Z" fill="#38bdf8" />
        <path d="M160 120L162 125L167 127L162 129L160 134L158 129L153 127L158 125Z" fill="#14b8a6" />

        {/* Gradients */}
        <defs>
          <linearGradient id="backdropArchGrad" x1="270" y1="50" x2="270" y2="380" gradientUnits="userSpaceOnUse">
            <stop stopColor="#e0f2fe" />
            <stop offset="0.7" stopColor="#ccfbf1" />
            <stop offset="1" stopColor="#ffffff" />
          </linearGradient>
          <linearGradient id="counterGrad" x1="180" y1="300" x2="470" y2="395" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1e40af" />
            <stop offset="1" stopColor="#1e3a8a" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
