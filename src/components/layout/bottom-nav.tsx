"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Stethoscope, Pill, MessageCircle } from "lucide-react";
import { COMPANY_DETAILS } from "@/lib/data";

export function BottomNav() {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isAgency = pathname.startsWith("/agency");
  const isStore = pathname.startsWith("/store");

  const navItems = [
    {
      label: "Home",
      sublabel: "Gateway",
      href: "/",
      icon: Home,
      isActive: isHome,
    },
    {
      label: "Agency",
      sublabel: "Surgical/Ethical",
      href: "/agency",
      icon: Stethoscope,
      isActive: isAgency,
    },
    {
      label: "Store",
      sublabel: "Generic",
      href: "/store",
      icon: Pill,
      isActive: isStore,
    },
  ];

  return (
    <nav className="fixed bottom-3 left-3 right-3 max-w-sm mx-auto z-40 bg-[#071529]/95 backdrop-blur-2xl border border-blue-900/60 shadow-[0_12px_40px_rgba(0,0,0,0.5)] rounded-2xl py-1.5 px-2 md:hidden print:hidden transition-all duration-300">
      <div className="grid grid-cols-4 items-center justify-items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = item.isActive;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all duration-200 active:scale-95 group ${
                active ? "text-white" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <div
                className={`p-1.5 rounded-xl transition-all duration-300 ${
                  active
                    ? "bg-gradient-to-r from-blue-600 via-sky-500 to-blue-500 text-white shadow-md shadow-blue-500/30 -translate-y-0.5 scale-110"
                    : "group-hover:bg-white/10 text-slate-400 group-hover:text-white"
                }`}
              >
                <Icon className="w-4 h-4" />
              </div>
              <span
                className={`text-[10px] tracking-tight mt-0.5 transition-colors ${
                  active ? "font-bold text-sky-300" : "font-medium text-slate-400 group-hover:text-slate-200"
                }`}
              >
                {item.label}
              </span>
              {active && (
                <span className="w-1 h-1 rounded-full bg-sky-400 mt-0.5 shadow-[0_0_8px_rgba(56,189,248,0.9)] animate-in zoom-in" />
              )}
            </Link>
          );
        })}

        {/* WhatsApp Direct Action */}
        <a
          href={COMPANY_DETAILS.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all duration-200 active:scale-95 text-emerald-400 hover:text-emerald-300"
        >
          <div className="p-1.5 rounded-xl bg-emerald-600/30 text-emerald-400 border border-emerald-500/40 shadow-xs">
            <MessageCircle className="w-4 h-4" />
          </div>
          <span className="text-[10px] tracking-tight mt-0.5 font-bold text-emerald-400">
            WhatsApp
          </span>
        </a>
      </div>
    </nav>
  );
}
