"use client";

import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Pill,
  Syringe,
  Boxes,
  HeartPulse,
  ArrowRight,
  Stethoscope,
  Store,
  CheckCircle2,
} from "lucide-react";

interface CategoryCard {
  id: string;
  name: string;
  count: string;
  description: string;
  topBrands: string;
  icon: React.ReactNode;
  division: "agency" | "store";
  divisionLabel: string;
  link: string;
  tag?: string;
}

const CATEGORIES: CategoryCard[] = [
  {
    id: "surgical",
    name: "SURGICAL & DISPOSABLES",
    count: "Hospital & Clinical Consumables",
    description: "Sterile hypodermic syringes, infusion sets, IV cannula, examination gloves, and surgical cotton rolls.",
    topBrands: "Safeone, Dispovan, Romson",
    icon: <Boxes className="w-5 h-5 text-blue-600" />,
    division: "agency",
    divisionLabel: "Agency Division",
    link: "/agency",
    tag: "Hospital Supply",
  },
  {
    id: "ethical",
    name: "ETHICAL PRESCRIPTION DRUGS",
    count: "Doctor Prescription Formulations",
    description: "Anti-infectives, cardiology, pulmonology, gastro, and life-saving critical care injectables.",
    topBrands: "Cipla, Sun Pharma, Abbott, Alkem",
    icon: <Stethoscope className="w-5 h-5 text-blue-600" />,
    division: "agency",
    divisionLabel: "Agency Division",
    link: "/agency",
    tag: "Direct Depots",
  },
  {
    id: "generics",
    name: "GENERIC TABLETS & CAPSULES",
    count: "High Margin Chemist Stock",
    description: "Fast-moving generic antibiotics, paracetamol, antacids, and pain relievers with 10+1 free schemes.",
    topBrands: "Smart Lab, Silver Cross, Laborate",
    icon: <Pill className="w-5 h-5 text-sky-600" />,
    division: "store",
    divisionLabel: "Store Division",
    link: "/store",
    tag: "10+1 Free Schemes",
  },
  {
    id: "syrups",
    name: "COUGH SYRUPS & NUTRITION",
    count: "High Turnover Liquid Line",
    description: "Pediatric & adult cough syrups, ambroxol, multivitamin appetite tonics, and topical pain gels.",
    topBrands: "Torque, Ramsans, Lee Ford",
    icon: <HeartPulse className="w-5 h-5 text-sky-600" />,
    division: "store",
    divisionLabel: "Store Division",
    link: "/store",
    tag: "Chemist Margin",
  },
];

export function ProductsPreviewSection() {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <Badge variant="outline" className="border-blue-200 text-blue-900 bg-blue-50 text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5">
            Two Specialized Divisions
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-black text-[#071529] tracking-tight">
            Comprehensive Healthcare Distribution Portfolio
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Supplying both institutional hospitals with surgical & ethical drugs, and retail chemists with high-margin generic formulations.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.map((category) => (
            <Card
              key={category.id}
              className="bg-white rounded-2xl border border-slate-200/90 hover:border-blue-500/50 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              <CardHeader className="p-4 sm:p-5 space-y-2.5 pb-2">
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    category.division === "agency" ? "bg-blue-50" : "bg-sky-50"
                  }`}>
                    {category.icon}
                  </div>
                  <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase ${
                    category.division === "agency"
                      ? "bg-blue-100 text-blue-900 border border-blue-200"
                      : "bg-sky-100 text-sky-900 border border-sky-200"
                  }`}>
                    {category.divisionLabel}
                  </span>
                </div>

                <div>
                  <CardTitle className="text-sm font-black text-[#071529] tracking-tight group-hover:text-blue-900 transition-colors">
                    {category.name}
                  </CardTitle>
                  <span className="text-[11px] text-slate-500 font-medium block mt-0.5">
                    {category.count}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                  {category.description}
                </p>
              </CardHeader>

              <CardContent className="p-4 sm:p-5 pt-0 space-y-3">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/80 text-xs">
                  <span className="text-slate-400 block text-[9px] uppercase tracking-wider font-bold">
                    Key Companies
                  </span>
                  <span className="font-semibold text-slate-800 text-[11px]">{category.topBrands}</span>
                </div>

                <div className="pt-1">
                  <Link
                    href={category.link}
                    className={`w-full flex items-center justify-between py-1.5 text-xs font-bold transition-colors border-t border-slate-100 ${
                      category.division === "agency"
                        ? "text-blue-900 hover:text-blue-700"
                        : "text-sky-900 hover:text-sky-700"
                    }`}
                  >
                    <span>Explore Products</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Division Selection Gateway Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#071529] via-[#0d284f] to-[#0284c7] text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs font-bold text-sky-300 uppercase tracking-wider block">
              Direct Wholesale Supplies • Bhagalpur
            </span>
            <h3 className="text-xl sm:text-2xl font-black">
              Select Your Business Division to Begin
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              Hospitals & Clinics can explore Surgical Disposables & Ethical Injections; Retail Chemists can explore Generic Formulations & 10+1 Schemes.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Button
              size="default"
              className="bg-white text-blue-950 hover:bg-slate-100 font-black text-xs px-4 h-10 rounded-xl"
              asChild
            >
              <Link href="/agency">Agency (Surgical/Ethical)</Link>
            </Button>
            <Button
              size="default"
              className="bg-sky-500 hover:bg-sky-600 text-white font-black text-xs px-4 h-10 rounded-xl"
              asChild
            >
              <Link href="/store">Store (Generic Wholesale)</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
