"use client";

import React from "react";

import Image from "next/image";

// Official Saurav Medical Cross & Leaf Logo
export function SauravLogoSvg({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div className={`relative shrink-0 flex items-center justify-center ${className}`}>
      <Image
        src="/logo.png"
        alt="Saurav Medical"
        width={64}
        height={64}
        priority
        className="w-full h-full object-contain select-none"
      />
    </div>
  );
}

// 3D-Styled Medical Cross on Pedestal with Leaf
export function HeroCrossSvg({ className = "w-48 sm:w-56 h-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        {/* Soft Pedestal Gradients */}
        <linearGradient id="pedestalTop" x1="50" y1="180" x2="230" y2="180" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e0f2fe" />
          <stop offset="1" stopColor="#bae6fd" />
        </linearGradient>
        <linearGradient id="pedestalBase" x1="140" y1="185" x2="140" y2="230" gradientUnits="userSpaceOnUse">
          <stop stopColor="#bae6fd" />
          <stop offset="1" stopColor="#93c5fd" />
        </linearGradient>
        {/* 3D Cross Gradients */}
        <linearGradient id="crossBlue" x1="90" y1="50" x2="150" y2="150" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="1" stopColor="#0284c7" />
        </linearGradient>
        <linearGradient id="crossWhite" x1="130" y1="70" x2="190" y2="170" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" />
          <stop offset="1" stopColor="#e2e8f0" />
        </linearGradient>
        {/* Plant Leaves */}
        <linearGradient id="leafGrad" x1="220" y1="40" x2="240" y2="130" gradientUnits="userSpaceOnUse">
          <stop stopColor="#34d399" />
          <stop offset="1" stopColor="#059669" />
        </linearGradient>
      </defs>

      {/* Pedestal Base (3D Elliptical Podium) */}
      <ellipse cx="140" cy="205" rx="100" ry="24" fill="url(#pedestalBase)" opacity="0.6" />
      <ellipse cx="140" cy="195" rx="96" ry="22" fill="url(#pedestalTop)" />

      {/* Little Floating Spheres on Pedestal */}
      <circle cx="65" cy="180" r="10" fill="url(#crossBlue)" opacity="0.85" />
      <circle cx="225" cy="175" r="9" fill="url(#crossBlue)" opacity="0.7" />

      {/* Plant Stem & Leaves in Background */}
      <path d="M208 190V90" stroke="#059669" strokeWidth="3" strokeLinecap="round" opacity="0.75" />
      {/* Leaves */}
      <path d="M208 85C215 70 230 65 235 72C235 85 220 90 208 85Z" fill="url(#leafGrad)" />
      <path d="M208 110C218 98 232 96 235 104C235 116 220 118 208 110Z" fill="url(#leafGrad)" />
      <path d="M208 135C218 125 230 124 233 131C233 141 218 142 208 135Z" fill="url(#leafGrad)" />

      {/* 3D Medical Cross (+) Split in Blue & White */}
      {/* Back Shadow */}
      <g filter="drop-shadow(0 14px 20px rgba(2,132,199,0.22))">
        {/* Left / Blue Half of Cross */}
        <path
          d="M125 45C125 36.7 131.7 30 140 30V150C131.7 150 125 143.3 125 135V110H95C86.7 110 80 103.3 80 95C80 86.7 86.7 80 95 80H125V45Z"
          fill="url(#crossBlue)"
        />
        {/* Right / White Half of Cross */}
        <path
          d="M140 30C148.3 30 155 36.7 155 45V80H185C193.3 80 200 86.7 200 95C200 103.3 193.3 110 185 110H155V135C155 143.3 148.3 150 140 150V30Z"
          fill="url(#crossWhite)"
        />
      </g>

      {/* Specular 3D Highlights on Cross */}
      <path
        d="M140 40V140"
        stroke="#ffffff"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  );
}

// 3D-Styled Agency Supplies (Carton, Syrup Bottle, Capsule Pills)
export function AgencySuppliesSvg({ className = "w-36 h-28 sm:w-44 sm:h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="boxFront" x1="30" y1="40" x2="110" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" />
          <stop offset="1" stopColor="#e2e8f0" />
        </linearGradient>
        <linearGradient id="boxTop" x1="50" y1="20" x2="120" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f8fafc" />
          <stop offset="1" stopColor="#e2e8f0" />
        </linearGradient>
        <linearGradient id="boxSide" x1="100" y1="40" x2="135" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#cbd5e1" />
          <stop offset="1" stopColor="#94a3b8" />
        </linearGradient>
        <linearGradient id="bottleBlue" x1="120" y1="50" x2="155" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" />
          <stop offset="1" stopColor="#cbd5e1" />
        </linearGradient>
      </defs>

      {/* Soft Ground Shadow */}
      <ellipse cx="95" cy="132" rx="75" ry="12" fill="#93c5fd" opacity="0.35" />

      {/* 3D Medicine Box */}
      <g filter="drop-shadow(0 8px 12px rgba(15,23,42,0.08))">
        {/* Box Front Face */}
        <rect x="25" y="42" width="75" height="75" rx="8" fill="url(#boxFront)" />
        {/* Box Top Lip / Perspective */}
        <path d="M25 42L45 24H115L100 42H25Z" fill="url(#boxTop)" />
        {/* Box Right Side Face */}
        <path d="M100 42L115 24V98L100 117V42Z" fill="url(#boxSide)" />

        {/* Blue Cross on Box */}
        <g transform="translate(52, 68)">
          <rect x="6.5" y="0" width="8" height="24" rx="2" fill="#0284c7" />
          <rect x="0" y="8" width="21" height="8" rx="2" fill="#0284c7" />
        </g>
      </g>

      {/* Large Medicine Bottle with Blue Cap */}
      <g filter="drop-shadow(0 6px 10px rgba(14,165,233,0.2))">
        {/* Bottle Body */}
        <rect x="115" y="65" width="32" height="52" rx="6" fill="url(#bottleBlue)" />
        {/* Bottle Label */}
        <rect x="115" y="74" width="32" height="26" fill="#ffffff" />
        <line x1="120" y1="82" x2="140" y2="82" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
        <line x1="120" y1="88" x2="135" y2="88" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
        {/* Bottle Neck */}
        <rect x="123" y="55" width="16" height="10" fill="#e2e8f0" />
        {/* Blue Ribbed Cap */}
        <rect x="119" y="47" width="24" height="12" rx="3" fill="#0284c7" />
      </g>

      {/* Small Medicine Vial */}
      <g filter="drop-shadow(0 4px 6px rgba(14,165,233,0.15))">
        <rect x="150" y="80" width="22" height="37" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
        <rect x="150" y="88" width="22" height="18" fill="#ffffff" />
        <line x1="154" y1="96" x2="168" y2="96" stroke="#0284c7" strokeWidth="1.5" />
        {/* Small Cap */}
        <rect x="152" y="74" width="18" height="8" rx="2" fill="#0284c7" />
      </g>

      {/* 2 Two-Tone Capsule Pills on Ground */}
      <g transform="translate(108, 120)">
        {/* Capsule 1 */}
        <rect x="0" y="0" width="26" height="11" rx="5.5" fill="#0284c7" transform="rotate(-15)" />
        <rect x="13" y="0" width="13" height="11" rx="5.5" fill="#ffffff" transform="rotate(-15)" />
      </g>
      <g transform="translate(128, 122)">
        {/* Capsule 2 */}
        <rect x="0" y="0" width="26" height="11" rx="5.5" fill="#ffffff" />
        <rect x="13" y="0" width="13" height="11" rx="5.5" fill="#0284c7" />
      </g>
    </svg>
  );
}

// 3D-Styled Store Pharmacy (Miniature Storefront Building with Blue Canopy)
export function StorePharmacySvg({ className = "w-36 h-28 sm:w-44 sm:h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="wallGrad" x1="40" y1="40" x2="160" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" />
          <stop offset="1" stopColor="#f1f5f9" />
        </linearGradient>
        <linearGradient id="canopyBlue" x1="40" y1="35" x2="160" y2="70" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0284c7" />
          <stop offset="1" stopColor="#0369a1" />
        </linearGradient>
      </defs>

      {/* Soft Ground Shadow */}
      <ellipse cx="100" cy="132" rx="75" ry="12" fill="#93c5fd" opacity="0.35" />

      {/* Building Base & Walls */}
      <g filter="drop-shadow(0 10px 16px rgba(15,23,42,0.1))">
        {/* Base Slab */}
        <rect x="35" y="122" width="130" height="9" rx="4.5" fill="#e2e8f0" />
        {/* Main Wall Structure */}
        <rect x="42" y="55" width="116" height="68" rx="8" fill="url(#wallGrad)" stroke="#e2e8f0" strokeWidth="1.5" />

        {/* Glass Entrance Door */}
        <rect x="62" y="78" width="30" height="44" rx="4" fill="#0284c7" fillOpacity="0.85" />
        <line x1="77" y1="78" x2="77" y2="122" stroke="#ffffff" strokeWidth="1.5" />
        {/* Door Handles */}
        <circle cx="74" cy="100" r="2" fill="#ffffff" />
        <circle cx="80" cy="100" r="2" fill="#ffffff" />

        {/* Display Glass Window */}
        <rect x="104" y="78" width="32" height="30" rx="4" fill="#38bdf8" fillOpacity="0.85" />
        <line x1="104" y1="93" x2="136" y2="93" stroke="#ffffff" strokeWidth="1.5" />
        <line x1="120" y1="78" x2="120" y2="108" stroke="#ffffff" strokeWidth="1.5" />
        {/* Window Sill */}
        <rect x="100" y="108" width="40" height="3" rx="1.5" fill="#cbd5e1" />

        {/* Blue Scalloped Canopy Awning */}
        <path
          d="M38 42C38 38 41 35 45 35H155C159 35 162 38 162 42L166 64C166 67 163 70 160 70H40C37 70 34 67 34 64L38 42Z"
          fill="url(#canopyBlue)"
        />
        {/* Awning Scallops / Segments */}
        <line x1="58" y1="35" x2="56" y2="70" stroke="#0369a1" strokeWidth="2" opacity="0.6" />
        <line x1="82" y1="35" x2="81" y2="70" stroke="#0369a1" strokeWidth="2" opacity="0.6" />
        <line x1="106" y1="35" x2="106" y2="70" stroke="#0369a1" strokeWidth="2" opacity="0.6" />
        <line x1="130" y1="35" x2="131" y2="70" stroke="#0369a1" strokeWidth="2" opacity="0.6" />
        <line x1="154" y1="35" x2="155" y2="70" stroke="#0369a1" strokeWidth="2" opacity="0.6" />

        {/* White Medical Cross on Canopy */}
        <g transform="translate(93, 44)">
          <rect x="5" y="0" width="6" height="18" rx="1.5" fill="#ffffff" />
          <rect x="0" y="6" width="16" height="6" rx="1.5" fill="#ffffff" />
        </g>
      </g>

      {/* Decorative Plant next to Store */}
      <path d="M168 122C168 110 174 95 174 95C174 95 180 110 180 122Z" fill="#10b981" />
      <path d="M162 110C162 105 170 98 170 98C170 98 172 106 172 110Z" fill="#34d399" />
    </svg>
  );
}
