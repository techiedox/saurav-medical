"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface SauravLogoProps {
  className?: string;
  size?: number;
  priority?: boolean;
}

export function SauravLogo({
  className = "w-10 h-10",
  size = 64,
  priority = false,
}: SauravLogoProps) {
  return (
    <div className={`relative shrink-0 flex items-center justify-center ${className}`}>
      <Image
        src="/logo.png"
        alt="Saurav Medical Logo"
        width={size}
        height={size}
        priority={priority}
        className="w-full h-full object-contain select-none drop-shadow-xs"
      />
    </div>
  );
}

interface SauravWordmarkProps {
  subtitle?: "MEDICAL" | "MEDICAL AGENCY" | "MEDICAL STORE";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function SauravWordmark({
  subtitle = "MEDICAL",
  size = "md",
  className = "",
}: SauravWordmarkProps) {
  const sizeStyles = {
    sm: {
      title: "text-base sm:text-lg tracking-tight",
      sub: "text-[10px] sm:text-[11px] tracking-[0.2em]",
    },
    md: {
      title: "text-lg sm:text-2xl md:text-3xl tracking-tight",
      sub: "text-[11px] sm:text-xs md:text-sm tracking-[0.22em]",
    },
    lg: {
      title: "text-2xl sm:text-3xl md:text-4xl tracking-tight",
      sub: "text-xs sm:text-sm md:text-base tracking-[0.24em]",
    },
  }[size];

  return (
    <div className={`leading-none flex flex-col justify-center select-none ${className}`}>
      {/* Brand Name in Vibrant Royal Blue (matching logo cross blue) */}
      <span className={`font-black text-[#003894] block leading-tight ${sizeStyles.title}`}>
        SAURAV
      </span>
      {/* Business Unit in Vibrant Emerald Green (matching logo cross green) */}
      <span className={`font-extrabold text-[#039c04] uppercase block mt-0.5 leading-tight ${sizeStyles.sub}`}>
        {subtitle}
      </span>
    </div>
  );
}

interface SauravBrandProps {
  subtitle?: "MEDICAL" | "MEDICAL AGENCY" | "MEDICAL STORE";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  extraSubtitle?: string;
}

export function SauravBrand({
  subtitle = "MEDICAL",
  size = "md",
  href,
  className = "",
  extraSubtitle,
}: SauravBrandProps) {
  const logoSizes = {
    sm: "w-8 h-8 sm:w-9 sm:h-9",
    md: "w-10 h-10 sm:w-11 sm:h-11",
    lg: "w-12 h-12 sm:w-14 sm:h-14",
  }[size];

  const content = (
    <div className={`flex items-center gap-2.5 sm:gap-3 group ${className}`}>
      <div className="shrink-0 transition-transform duration-200 group-hover:scale-105">
        <SauravLogo className={logoSizes} priority />
      </div>
      <div className="min-w-0">
        <SauravWordmark subtitle={subtitle} size={size} />
        {extraSubtitle && (
          <span className="text-[10px] sm:text-xs font-semibold text-slate-500 block truncate leading-tight mt-0.5">
            {extraSubtitle}
          </span>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg">
        {content}
      </Link>
    );
  }

  return content;
}
