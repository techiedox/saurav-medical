export interface CredentialDocument {
  id: string;
  title: string;
  formType: string;
  docNumber: string;
  issuingAuthority: string;
  validity: string;
  category: "Drug License" | "GSTIN" | "Quality Standard";
  description: string;
  highlights: string[];
  statusText?: string;
}

export interface BrandPartner {
  id: number;
  name: string;
  category: string;
  specialty?: string;
  color?: string;
  badge?: string;
  tier?: string;
}

export interface SupplyCategory {
  id: string;
  title: string;
  tagline: string;
  description: string;
  badge: string;
  items: string[];
}

// ============================================================================
// 1. SAURAV MEDICAL STORE (Santosh Kumar - Kotwali Chowk - 3+ Years)
// Wholesaler of Generic, Surgical & OTC Medicines
// ============================================================================
export const STORE_DETAILS = {
  id: "store",
  name: "Saurav Medical Store",
  brandName: "Saurav Medical Store",
  tagline: "Wholesaler of Generic, Surgical & OTC Medicines",
  supplyScope: "Quality Generic Medicines, Surgical Consumables & Fast Chemist Counter Supply",
  ownerName: "Santosh Kumar",
  ownerRole: "Founder & Wholesale Head",
  mobile: "7070605245",
  phoneDisplay: "+91 70706 05245",
  officePhone: "7070605245",
  email: "sauravmedicalstorebgp@gmail.com",
  address: "Kotwali Chowk, Next to ICICI Bank (1st Floor), Bhagalpur - 812002",
  city: "Bhagalpur, Bihar",
  mapUrl: "https://maps.app.goo.gl/wmPnEhdFsawuqxWZ8?g_st=ac",
  experienceYears: "3+",
  dlPlaceholder: "DL Nos. 20B/BGP/GEN-XXXXX & 21B/BGP/GEN-XXXXX",
  gstinPlaceholder: "GSTIN: 10XXXXX0000X2ZY",
  hours: "Mon – Sat: 9:00 AM – 8:30 PM",
  whatsappUrl: "https://wa.me/917070605245?text=Hello%20Santosh%20ji%20(Saurav%20Medical%20Store),%20I%20am%20a%20chemist%20and%20want%20to%20enquire%20about%20Generic%20%26%20Surgical%20medicines.",
  href: "/store",
};

// 21 GENERIC COMPANIES FOR SAURAV MEDICAL STORE (From verified visiting card)
export const STORE_BRANDS: BrandPartner[] = [
  { id: 1, name: "Alkem", category: "Generic Line", specialty: "Antibiotics & Generics", color: "#15803d", badge: "High Margin" },
  { id: 2, name: "Aristo", category: "Generic Line", specialty: "Gastro & Pain Formulations", color: "#b91c1c", badge: "Fast Mover" },
  { id: 3, name: "Cipla", category: "Generic Line", specialty: "Respiratory & Daily Acute", color: "#ea580c", badge: "Trusted" },
  { id: 4, name: "Medley", category: "Generic Line", specialty: "Hematinics & Analgesics", color: "#0284c7", badge: "Bulk Stock" },
  { id: 5, name: "Lupin", category: "Generic Line", specialty: "Cardiac & Daily Formulations", color: "#2563eb", badge: "Depot Line" },
  { id: 6, name: "Abbott", category: "Generic Line", specialty: "Metabolic & Acute Generics", color: "#0284c7", badge: "High Demand" },
  { id: 7, name: "Intas", category: "Generic Line", specialty: "Specialty Generics", color: "#0d9488", badge: "Chemist Choice" },
  { id: 8, name: "Smart Lab", category: "Generic Line", specialty: "High Margin Fast Movers", color: "#7c3aed", badge: "10+1 Scheme" },
  { id: 9, name: "Silver Cross", category: "Generic Line", specialty: "Pantoprazole & Gastro", color: "#475569", badge: "10+1 Scheme" },
  { id: 10, name: "Biochem", category: "Generic Line", specialty: "Antibiotic Injections & Tabs", color: "#0891b2", badge: "Bulk Pack" },
  { id: 11, name: "Torque", category: "Generic Line", specialty: "Cough Syrups & Tonics", color: "#e11d48", badge: "Syrup Line" },
  { id: 12, name: "Jacsonpal", category: "Generic Line", specialty: "Anti-Allergy & Pain Care", color: "#b45309", badge: "Regular Stock" },
  { id: 13, name: "Windlass", category: "Generic Line", specialty: "Bulk Tablet Formulations", color: "#047857", badge: "10+2 Scheme" },
  { id: 14, name: "Mankind", category: "Generic Line", specialty: "High Demand Chemist Lines", color: "#dc2626", badge: "Fast Mover" },
  { id: 15, name: "Laborate", category: "Generic Line", specialty: "Pain Gels & Ointments", color: "#4f46e5", badge: "Ointment Line" },
  { id: 16, name: "Lee Ford", category: "Generic Line", specialty: "Syrups & Generic Drops", color: "#059669", badge: "Pediatric Line" },
  { id: 17, name: "Ramsans", category: "Generic Line", specialty: "Multivitamin Tonics", color: "#d97706", badge: "Tonic Line" },
  { id: 18, name: "Safeone", category: "Generic Line", specialty: "Surgical Disposables & Antiseptics", color: "#0284c7", badge: "Surgical" },
  { id: 19, name: "Touchone", category: "Generic Line", specialty: "Calcium & Vitamin Formulations", color: "#16a34a", badge: "High Margin" },
  { id: 20, name: "Dr Reddy", category: "Generic Line", specialty: "Prescription Generics", color: "#9333ea", badge: "Premium Line" },
  { id: 21, name: "Alembic etc.", category: "Generic Line", specialty: "Antibiotics & Syrups", color: "#0f766e", badge: "Bulk Stock" },
];

export const STORE_SUPPLIES: SupplyCategory[] = [
  {
    id: "generic-medicines",
    title: "High-Margin Generic Medicines",
    tagline: "Direct Wholesale Supply for Retail Chemists",
    description: "Reliable generic tablets, capsules, dry syrups, and drops from top manufacturers like Alkem, Aristo, Cipla, Mankind, and Intas with high retailer margins.",
    badge: "Maximum Profit Margin",
    items: [
      "Amoxyclav 625mg & Cefixime 200mg Tablets",
      "Pantoprazole 40mg & Pantoprazole DSR",
      "Paracetamol 650mg & Aceclofenac Combinations",
      "Montelukast + Levocetirizine Formulations",
      "Multivitamin, Calcium & Antioxidant Capsules",
    ],
  },
  {
    id: "surgical-goods",
    title: "Surgical Goods & Disposables",
    tagline: "Everyday Medical Essentials for Clinics & Shops",
    description: "Essential surgical consumables, sterile disposables, bandages, and daily clinic supplies available at competitive bulk rates.",
    badge: "Ready Stock",
    items: [
      "Sterile Disposable Syringes (2ml, 5ml, 10ml)",
      "Latex Examination & Surgical Gloves",
      "IV Infusion Sets, Needles & Scalp Veins",
      "Absorbent Cotton Rolls, Bandages & Gauze",
      "Adhesive Medical Tapes & Dressing Strips",
    ],
  },
  {
    id: "retailer-schemes",
    title: "Lucrative 10+1 & 10+2 Schemes",
    tagline: "Trade Bonus Deals for Medical Store Owners",
    description: "Carton-level bonus box deals on fast-moving items, helping chemists get extra free boxes and earn maximum margin on everyday sales.",
    badge: "10+1 & 10+2 Free Deals",
    items: [
      "10+1 & 10+2 Free Box Schemes on Fast Movers",
      "Special discounts on full carton purchases",
      "Same-day packing & fast counter pickup",
      "Clean GST tax invoices with scheme breakdown",
    ],
  },
  {
    id: "on-demand-availability",
    title: "Fast On-Demand Brand Sourcing",
    tagline: "If It's Not On Our Shelf, We Arrange It Quickly",
    description: "Need a specific generic brand, molecule, or surgical product? Even if it is not in ready stock today, we quickly arrange and deliver it based on your requirement.",
    badge: "Quick Sourcing Support",
    items: [
      "Prompt brand arrangement on retailer request",
      "Fast turnaround time across Bhagalpur",
      "Wide supplier network for specialty generics",
      "Custom bulk orders fulfilled on priority",
    ],
  },
];

export const STORE_DOCUMENTS: CredentialDocument[] = [
  {
    id: "store-doc-20b",
    title: "Wholesale Drug License - Form 20B",
    formType: "Form 20B (Generic & Surgical Wholesale License)",
    docNumber: "DL No. 20B/BGP/GEN-XXXXX",
    issuingAuthority: "Drugs Control Administration, Government of Bihar",
    validity: "Active Wholesale Chemist License",
    category: "Drug License",
    description: "Statutory wholesale drug license to store and supply generic formulations, surgical consumables, and OTC healthcare medicines.",
    highlights: [
      "Premises: Kotwali Chowk, Next to ICICI Bank (1st Floor)",
      "Compliance with Drugs & Cosmetics Act",
      "Registered wholesale counter supervision",
    ],
  },
  {
    id: "store-doc-21b",
    title: "Wholesale Drug License - Form 21B",
    formType: "Form 21B (Special Formulations Wholesale)",
    docNumber: "DL No. 21B/BGP/GEN-XXXXX",
    issuingAuthority: "Drugs Control Administration, Government of Bihar",
    validity: "Active Wholesale License",
    category: "Drug License",
    description: "Wholesale drug license allowing bulk distribution of scheduled generic oral formulations and pediatric syrups.",
    highlights: [
      "Verified quality generic manufacturers only",
      "Direct wholesale counter next to ICICI Bank",
      "Timely statutory renewal protocol",
    ],
  },
  {
    id: "store-gstin",
    title: "GSTIN Tax Registration Certificate",
    formType: "Form GST REG-06 (Regular Taxpayer)",
    docNumber: "GSTIN: 10XXXXX0000X2ZY",
    issuingAuthority: "Commercial Taxes Department, Government of Bihar",
    validity: "Active & In Good Standing",
    category: "GSTIN",
    description: "Computerized GST billing ensuring retail medical shops receive full tax credit (ITC) on all wholesale medicine purchases.",
    highlights: [
      "HSN 3004 & 3002 itemized tax bills",
      "Clear wholesale PTR and bonus scheme details",
      "Computerized delivery challans",
    ],
  },
];


// ============================================================================
// 2. SAURAV MEDICAL AGENCY (Gaurav Sarawgi - M.P. Dwivedi Road - 35+ Years)
// Authorized Stockist for Ethical Pharmaceuticals & Vaccines
// ============================================================================
export const AGENCY_DETAILS = {
  id: "agency",
  name: "Saurav Medical Agency",
  brandName: "Saurav Medical Agency",
  tagline: "Authorized Stockist for Ethical Pharmaceuticals & Cold Chain Vaccines",
  supplyScope: "Doctor-Prescribed Ethical Medicines, 2°C – 8°C Cold Chain Vaccines, Hospital & Clinic Supplies",
  ownerName: "Gaurav Sarawgi",
  ownerRole: "Proprietor & Stockist",
  mobile: "8789028637",
  phoneDisplay: "+91 87890 28637",
  officePhone: "9431296074",
  email: "sauravmedicalagencybgp@gmail.com",
  address: "M.P. Dwivedi Road, Bhagalpur - 812002",
  city: "Bhagalpur, Bihar",
  mapUrl: "https://maps.app.goo.gl/rXKY3c7rh8tH3BdK8?g_st=ac",
  experienceYears: "35+",
  bankName: "ICICI Bank",
  accountNo: "747805000330",
  ifscCode: "ICIC0007478",
  accountHolder: "Saurav Medical Agency",
  dlPlaceholder: "DL Nos. 20B/BGP/XXXXX & 21B/BGP/XXXXX",
  gstinPlaceholder: "GSTIN: 10XXXXX0000X1ZX",
  hours: "Mon – Sat: 9:00 AM – 8:30 PM",
  whatsappUrl: "https://wa.me/918789028637?text=Hello%20Gaurav%20ji%20(Saurav%20Medical%20Agency),%20I%20want%20to%20enquire%20about%20Ethical%20Pharma%20and%20Vaccines%20supply.",
  href: "/agency",
};

// 28 AUTHORIZED PHARMA DEPOT BRANDS FOR SAURAV MEDICAL AGENCY
export const AGENCY_BRANDS: BrandPartner[] = [
  { id: 1, name: "Aristo Pharmaceuticals", category: "Pharma Depot", specialty: "Antibiotics & Gastro", color: "#b91c1c", badge: "Depot Line" },
  { id: 2, name: "Alkem Laboratories", category: "Pharma Depot", specialty: "Anti-Infectives & Acute Care", color: "#15803d", badge: "Depot Line" },
  { id: 3, name: "Ajanta Pharma", category: "Pharma Depot", specialty: "Cardiology & Ophthalmology", color: "#0369a1", badge: "Depot Line" },
  { id: 4, name: "Abbott Healthcare", category: "Pharma Depot", specialty: "Nutrition & Metabolic Health", color: "#0284c7", badge: "Depot Line" },
  { id: 5, name: "Biocon Ltd.", category: "Pharma & Biologics", specialty: "Insulin & Oncology", color: "#0d9488", badge: "Biologics" },
  { id: 6, name: "Biological E. Ltd (B.E.)", category: "Pharma & Vaccine", specialty: "Vaccines & Biologicals", color: "#1d4ed8", badge: "Vaccine" },
  { id: 7, name: "Boehringer Ingelheim", category: "Pharma Depot", specialty: "Cardio-Metabolic Care", color: "#047857", badge: "Depot Line" },
  { id: 8, name: "Bharat Serum & TTK All Group", category: "Pharma & Biologics", specialty: "Plasma & Critical Care", color: "#c026d3", badge: "Critical Care" },
  { id: 9, name: "Cadila Pharmaceuticals", category: "Pharma Depot", specialty: "Gastro & Anti-Infectives", color: "#dc2626", badge: "Depot Line" },
  { id: 10, name: "Deys Medical Store", category: "Pharma Depot", specialty: "Classic Formulations", color: "#b45309", badge: "Classic Line" },
  { id: 11, name: "Glaxo Smith Kline (GSK)", category: "Pharma & Vaccine", specialty: "Global Vaccines & Derma", color: "#ea580c", badge: "Vaccine Leader" },
  { id: 12, name: "Glenmark Pharmaceuticals", category: "Pharma Depot", specialty: "Dermatology & Respiratory", color: "#e11d48", badge: "Depot Line" },
  { id: 13, name: "Indoco Remedies Ltd.", category: "Pharma Depot", specialty: "Oral Care & Gastro", color: "#4f46e5", badge: "Depot Line" },
  { id: 14, name: "J.B. Chemicals (Razel Group)", category: "Pharma Depot", specialty: "Cardiology & Gastro", color: "#0284c7", badge: "Depot Line" },
  { id: 15, name: "Karnataka Antibiotics", category: "Pharma Depot", specialty: "Injectables & Antibiotics", color: "#16a34a", badge: "Injectables" },
  { id: 16, name: "Macleods Pharmaceuticals", category: "Pharma Depot", specialty: "Anti-TB & Antibiotics", color: "#2563eb", badge: "Depot Line" },
  { id: 17, name: "Micro All Group", category: "Pharma Depot", specialty: "Dolo Series & Cardiology", color: "#7c3aed", badge: "Depot Line" },
  { id: 18, name: "MSD Pharmaceuticals", category: "Pharma & Vaccine", specialty: "Global Vaccines & Immunology", color: "#059669", badge: "Vaccine" },
  { id: 19, name: "Mylan Pharmaceuticals", category: "Pharma Depot", specialty: "Critical Care Injectables", color: "#0284c7", badge: "Critical Care" },
  { id: 20, name: "Nutricia International", category: "Nutrition", specialty: "Infant Care Nutrition", color: "#0284c7", badge: "Nutrition" },
  { id: 21, name: "Overseas Pharmaceuticals", category: "Pharma Depot", specialty: "Specialty Formulations", color: "#64748b", badge: "Depot Line" },
  { id: 22, name: "Ozone Pharmaceuticals", category: "Pharma Depot", specialty: "Pain & Skin Formulations", color: "#f97316", badge: "Depot Line" },
  { id: 23, name: "Panacea (Mankind)", category: "Pharma & Vaccine", specialty: "Vaccines & Derma Care", color: "#dc2626", badge: "Vaccine" },
  { id: 24, name: "Pfizer Ltd.", category: "Pharma & Vaccine", specialty: "Global Vaccines & Hospital Care", color: "#0052ff", badge: "Global Leader" },
  { id: 25, name: "Pharmed Ltd.", category: "Pharma Depot", specialty: "Nutraceuticals & Joint Health", color: "#0891b2", badge: "Nutraceutical" },
  { id: 26, name: "Raptakos Brett & Co.", category: "Nutrition & Pharma", specialty: "Lactodex, Zerolac Pediatric", color: "#2563eb", badge: "Lactodex" },
  { id: 27, name: "Serum Institute India Ltd.", category: "Pharma & Vaccine", specialty: "World Leader in Vaccines", color: "#dc2626", badge: "Vaccine Leader" },
  { id: 28, name: "U.S.V. Ltd.", category: "Pharma Depot", specialty: "Diabetes (Glycomet) & Cardio", color: "#0f766e", badge: "Depot Line" },
];

export const AGENCY_SUPPLIES: SupplyCategory[] = [
  {
    id: "ethical-medicines",
    title: "Doctor-Prescribed Ethical Medicines",
    tagline: "Direct Authorized Stockist for 28 Company Depots",
    description: "Genuine prescription medicines sourced directly from authorized company depots. Trusted by doctors and hospitals across Bhagalpur and Bihar.",
    badge: "100% Depot Genuine",
    items: [
      "Antibiotics & Anti-Infectives (Alkem, Aristo, Macleods)",
      "Cardiology & Diabetes Formulations (USV, Micro, Ajanta)",
      "Gastroenterology & Stomach Care (Cadila, Alkem)",
      "Dermatology & Skin Care (Glenmark, GSK)",
      "Respiratory & Acute Care Medicines (Boehringer, Indoco)",
    ],
  },
  {
    id: "vaccines-coldchain",
    title: "Vaccines & 2°C – 8°C Cold Chain",
    tagline: "Unbroken Temperature-Controlled Storage",
    description: "Certified cold-chain storage for Serum Institute, GSK, Biological E, and MSD vaccines, monitored 24/7 to guarantee complete potency.",
    badge: "2°C – 8°C Monitored",
    items: [
      "Anti-Rabies Vaccines (Rabivax-S, Berab)",
      "Hepatitis A & B Immunizations",
      "Typhoid & Tetanus Toxoid (TT)",
      "Pediatric Childhood Vaccines (DPT, MMR)",
      "Anti-Snake Venom Biologicals",
    ],
  },
  {
    id: "hospital-critical-care",
    title: "Hospital & Critical Care Injectables",
    tagline: "Emergency Supply for ICU & Nursing Homes",
    description: "Priority supply of high-end ICU antibiotics, sterile intravenous fluids, and life-saving injectables for healthcare institutions.",
    badge: "Hospital Supply",
    items: [
      "Broad-Spectrum ICU Antibiotic Injectables",
      "Human Albumin & Blood Plasma Fractions",
      "Sterile Large-Volume IV Infusions",
      "Emergency Care & Resuscitation Drugs",
      "Specialty Oncology & Critical Care Lines",
    ],
  },
  {
    id: "pediatric-nutrition",
    title: "Infant Nutrition & Pediatric Care",
    tagline: "Authorized Depot for Raptakos Brett & Nutricia",
    description: "Specialized pediatric nutritional foods and infant formulas regularly prescribed by leading pediatricians in East Bihar.",
    badge: "Pediatric Care",
    items: [
      "Lactodex 1 & Lactodex 2 Infant Milk Formula",
      "Zerolac Lactose-Free Special Care Formula",
      "Dexolac & Special Dietary Supplements",
      "Pediatric Multivitamin Drops",
    ],
  },
  {
    id: "on-demand-prescription",
    title: "Hard-to-Find Prescription Sourcing",
    tagline: "Direct Depot Arrangements for Specific Prescriptions",
    description: "If a doctor prescribes a specialty brand or formulation that is hard to find in the local market, we coordinate directly with pharmaceutical depots to arrange it swiftly.",
    badge: "Depot Sourcing Support",
    items: [
      "Specialty doctor-prescribed medicine arrangement",
      "Direct coordination with 28 pharmaceutical depots",
      "Fast fulfillment for hospital and chemist orders",
      "Original company batch records and cold-chain care",
    ],
  },
];

export const AGENCY_DOCUMENTS: CredentialDocument[] = [
  {
    id: "agency-doc-20b",
    title: "Wholesale Drug License - Form 20B",
    formType: "Form 20B (Statutory Wholesale License)",
    docNumber: "DL No. 20B/BGP/XXXXX",
    issuingAuthority: "Drugs Control Administration, Government of Bihar",
    validity: "Active Wholesale Stockist License",
    category: "Drug License",
    description: "Statutory wholesale authorization under the Drugs & Cosmetics Rules to stock, sell, and distribute scheduled pharmaceuticals.",
    highlights: [
      "Registered Premises: M.P. Dwivedi Road, Bhagalpur",
      "Authorized registered pharmacist compliance",
      "Wholesale stockist clearance for 28 pharma companies",
    ],
  },
  {
    id: "agency-doc-21b",
    title: "Wholesale Drug License - Form 21B",
    formType: "Form 21B (Specified Schedule C & C(1) Biologicals)",
    docNumber: "DL No. 21B/BGP/XXXXX",
    issuingAuthority: "Drugs Control Administration, Government of Bihar",
    validity: "Active Vaccines & Biologicals License",
    category: "Drug License",
    description: "Statutory authorization for cold-chain biologicals, vaccines, sera, and life-saving injectable medications.",
    highlights: [
      "Audited cold-chain storage compliance (2°C – 8°C)",
      "Depot authorization for Serum Institute & GSK vaccines",
      "Regular inspection compliance",
    ],
  },
  {
    id: "agency-gstin",
    title: "GSTIN Tax Registration Certificate",
    formType: "Form GST REG-06 (Regular Taxpayer)",
    docNumber: "GSTIN: 10XXXXX0000X1ZX",
    issuingAuthority: "Commercial Taxes Department, Government of Bihar",
    validity: "Active & In Good Standing",
    category: "GSTIN",
    description: "Computerized B2B tax compliance allowing healthcare facilities and retail pharmacies to claim full Input Tax Credit (ITC).",
    highlights: [
      "Itemized HSN 3004 & 3002 tax invoices",
      "Computerized batch and expiry tracking",
      "Monthly GST returns filed on schedule",
    ],
  },
];

// ============================================================================
// Compatibility mappings
// ============================================================================
export const COMPANY_DETAILS = {
  name: "Saurav Medical",
  subname: "Saurav Medical Agency & Saurav Medical Store",
  tagline: "Pharmaceuticals Stockist, Vaccines & Generic Distributors",
  primaryMobile: "8789028637",
  mobile: "8789028637",
  phoneDisplay: "+91 87890 28637",
  officePhone: "9431296074",
  email: "sauravmedicalagencybgp@gmail.com",
  address: "Bhagalpur, Bihar",
  city: "Bhagalpur, Bihar",
  whatsappUrl: "https://wa.me/918789028637",
  ownerName: "Gaurav Sarawgi / Santosh Kumar",
  role: "Directors & Proprietors",
  ownerPhotoUrl: "/owner.png",
  upiId: "eazypay.589015203@icici",
  dlPlaceholder: "DL Nos. 20B/21B Active",
  gstinPlaceholder: "GSTIN Active",
  hours: "Mon – Sat: 9:00 AM – 8:30 PM",
  whatsappAgencyUrl: AGENCY_DETAILS.whatsappUrl,
  whatsappStoreUrl: STORE_DETAILS.whatsappUrl,
};

export const DIVISIONS = {
  store: STORE_DETAILS,
  agency: AGENCY_DETAILS,
};

export const CARD_COMPANIES = AGENCY_BRANDS;
export const CREDENTIALS_DATA = AGENCY_DOCUMENTS;
export const STORE_CREDENTIALS = STORE_DOCUMENTS;
export const AGENCY_CREDENTIALS = AGENCY_DOCUMENTS;
export type CredentialItem = any;
export const TIMELINE_MILESTONES: any[] = [];
export const VALUE_PROPOSITIONS: any[] = [];
export const OFFER_SLIDES: any[] = [];
export type OfferSlide = any;
export type ProductItem = any;
export type BrandItem = any;
export const DUMMY_PRODUCTS: any[] = [];
