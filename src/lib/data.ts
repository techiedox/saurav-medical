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
// 1. SAURAV MEDICAL STORE (Gaurav Sarawgi - M.P. Dwivedi Road - 28 Brands)
// ============================================================================
export const STORE_DETAILS = {
  id: "store",
  name: "Saurav Medical Store",
  brandName: "Saurav Medical Store",
  tagline: "Pharmaceuticals Stockist & Vaccines Distributors",
  supplyScope: "Pharmaceuticals, Vaccines (2°C – 8°C Cold Chain), Ethical & Critical Care Supply",
  ownerName: "Gaurav Sarawgi",
  ownerRole: "Proprietor & Stockist",
  mobile: "8789028637",
  phoneDisplay: "+91 87890 28637",
  officePhone: "9431296074",
  email: "sauravmedical@gmail.com",
  address: "M.P. Dwivedi Road, Bhagalpur - 812002",
  city: "Bhagalpur, Bihar",
  bankName: "ICICI Bank",
  accountNo: "747805000330",
  ifscCode: "ICIC0007478",
  accountHolder: "Saurav Medical Agency",
  dlPlaceholder: "DL Nos. 20B/BGP/XXXXX & 21B/BGP/XXXXX",
  gstinPlaceholder: "GSTIN: 10XXXXX0000X1ZX",
  hours: "Mon – Sat: 9:00 AM – 8:30 PM",
  whatsappUrl: "https://wa.me/918789028637?text=Hello%20Gaurav%20ji%20(Saurav%20Medical%20Store),%20I%20want%20to%20enquire%20about%20Pharma%20%26%20Vaccines%20distribution.",
  href: "/store",
};

// 28 AUTHORIZED BRANDS FOR SAURAV MEDICAL STORE (From visiting card back)
export const STORE_BRANDS: BrandPartner[] = [
  { id: 1, name: "Aristo Pharmaceuticals", category: "Pharma", specialty: "Antibiotics & Gastro", color: "#b91c1c", badge: "Depot Line" },
  { id: 2, name: "Alkem Laboratories", category: "Pharma", specialty: "Anti-Infectives & Acute Care", color: "#15803d", badge: "Depot Line" },
  { id: 3, name: "Ajanta Pharma", category: "Pharma", specialty: "Cardiology & Ophthalmology", color: "#0369a1", badge: "Depot Line" },
  { id: 4, name: "Abbott Healthcare", category: "Pharma", specialty: "Nutrition & Metabolic Health", color: "#0284c7", badge: "Depot Line" },
  { id: 5, name: "Biocon Ltd.", category: "Pharma & Biologics", specialty: "Insulin & Oncology", color: "#0d9488", badge: "Biologics" },
  { id: 6, name: "Biological E. Ltd (B.E.)", category: "Pharma & Vaccine", specialty: "Vaccines & Biologicals", color: "#1d4ed8", badge: "Vaccine" },
  { id: 7, name: "Boehringer Ingelheim", category: "Pharma", specialty: "Cardio-Metabolic Care", color: "#047857", badge: "Depot Line" },
  { id: 8, name: "Bharat Serum & TTK All Group", category: "Pharma & Biologics", specialty: "Plasma & Critical Care", color: "#c026d3", badge: "Critical Care" },
  { id: 9, name: "Cadila Pharmaceuticals", category: "Pharma", specialty: "Gastro & Anti-Infectives", color: "#dc2626", badge: "Depot Line" },
  { id: 10, name: "Deys Medical Store", category: "Pharma", specialty: "Classic Formulations", color: "#b45309", badge: "Classic Line" },
  { id: 11, name: "Glaxo Smith Kline (GSK)", category: "Pharma & Vaccine", specialty: "Global Vaccines & Derma", color: "#ea580c", badge: "Vaccine Leader" },
  { id: 12, name: "Glenmark Pharmaceuticals", category: "Pharma", specialty: "Dermatology & Respiratory", color: "#e11d48", badge: "Depot Line" },
  { id: 13, name: "Indoco Remedies Ltd.", category: "Pharma", specialty: "Oral Care & Gastro", color: "#4f46e5", badge: "Depot Line" },
  { id: 14, name: "J.B. Chemicals (Razel Group)", category: "Pharma", specialty: "Cardiology & Gastro", color: "#0284c7", badge: "Depot Line" },
  { id: 15, name: "Karnataka Antibiotics", category: "Pharma", specialty: "Injectables & Antibiotics", color: "#16a34a", badge: "Injectables" },
  { id: 16, name: "Macleods Pharmaceuticals", category: "Pharma", specialty: "Anti-TB & Antibiotics", color: "#2563eb", badge: "Depot Line" },
  { id: 17, name: "Micro All Group", category: "Pharma", specialty: "Dolo Series & Cardiology", color: "#7c3aed", badge: "Depot Line" },
  { id: 18, name: "MSD Pharmaceuticals", category: "Pharma & Vaccine", specialty: "Global Vaccines & Immunology", color: "#059669", badge: "Vaccine" },
  { id: 19, name: "Mylan Pharmaceuticals", category: "Pharma", specialty: "Critical Care Injectables", color: "#0284c7", badge: "Critical Care" },
  { id: 20, name: "Nutricia International", category: "Nutrition", specialty: "Infant Care Nutrition", color: "#0284c7", badge: "Nutrition" },
  { id: 21, name: "Overseas Pharmaceuticals", category: "Pharma", specialty: "Specialty Formulations", color: "#64748b", badge: "Depot Line" },
  { id: 22, name: "Ozone Pharmaceuticals", category: "Pharma", specialty: "Pain & Skin Formulations", color: "#f97316", badge: "Depot Line" },
  { id: 23, name: "Panacea (Mankind)", category: "Pharma & Vaccine", specialty: "Vaccines & Derma Care", color: "#dc2626", badge: "Vaccine" },
  { id: 24, name: "Pfizer Ltd.", category: "Pharma & Vaccine", specialty: "Global Vaccines & Hospital Care", color: "#0052ff", badge: "Global Leader" },
  { id: 25, name: "Pharmed Ltd.", category: "Pharma", specialty: "Nutraceuticals & Joint Health", color: "#0891b2", badge: "Nutraceutical" },
  { id: 26, name: "Raptakos Brett & Co.", category: "Nutrition & Pharma", specialty: "Lactodex, Zerolac Pediatric", color: "#2563eb", badge: "Lactodex" },
  { id: 27, name: "Serum Institute India Ltd.", category: "Pharma & Vaccine", specialty: "World Leader in Vaccines", color: "#dc2626", badge: "Vaccine Leader" },
  { id: 28, name: "U.S.V. Ltd.", category: "Pharma", specialty: "Diabetes (Glycomet) & Cardio", color: "#0f766e", badge: "Depot Line" },
];

export const STORE_SUPPLIES: SupplyCategory[] = [
  {
    id: "vaccines",
    title: "Vaccines & Biologicals",
    tagline: "Unbroken 2°C – 8°C Cold Chain Protocol",
    description: "Certified cold-chain biological storage for Serum Institute, GSK, Biological E, and MSD vaccines with 24/7 temperature logging.",
    badge: "2°C – 8°C Monitored",
    items: [
      "Anti-Rabies Vaccines (Rabivax-S, Berab)",
      "Hepatitis A & B Immunizations",
      "Typhoid & Tetanus Toxoid (TT)",
      "Pediatric Combination Vaccines (DPT, MMR)",
      "Anti-Snake Venom Biologicals",
    ],
  },
  {
    id: "ethical-pharma",
    title: "Ethical Prescription Formulations",
    tagline: "Direct Authorized Stockist for 28 Pharma Leaders",
    description: "Comprehensive portfolio of physician-prescribed pharmaceuticals sourced directly from company depots with original batch records.",
    badge: "100% Depot Authentic",
    items: [
      "Antibiotics & Anti-Infectives (Alkem, Aristo, Macleods)",
      "Cardiology & Diabetology Formulations (USV, Micro, Ajanta)",
      "Gastroenterology Formulations (Cadila, Alkem)",
      "Dermatology & Skin Care (Glenmark, GSK)",
      "Respiratory Therapeutics (Boehringer, Indoco)",
    ],
  },
  {
    id: "critical-care",
    title: "Hospital & Critical Care Injectables",
    tagline: "Life-Saving ICU & Emergency Medications",
    description: "Priority supply of high-end ICU antibiotics, sterile intravenous fluids, and anaesthetic injectables for hospitals and nursing homes.",
    badge: "Hospital Supply",
    items: [
      "Broad-Spectrum ICU Injectables",
      "Human Albumin & Plasma Fractions",
      "Sterile Large-Volume IV Infusions",
      "Emergency Resuscitation Medications",
      "Specialty Oncology Formulations",
    ],
  },
  {
    id: "infant-nutrition",
    title: "Infant Nutrition & Pediatric Care",
    tagline: "Raptakos Brett & Nutricia Authorized Depot",
    description: "Specialized pediatric nutritional foods and formulas prescribed by leading pediatricians across East Bihar.",
    badge: "Pediatric Care",
    items: [
      "Lactodex 1 & Lactodex 2 Infant Milk Formula",
      "Zerolac Lactose-Free Special Care Formula",
      "Dexolac & Special Dietary Supplements",
      "Pediatric Multivitamin Drops",
    ],
  },
];

export const STORE_DOCUMENTS: CredentialDocument[] = [
  {
    id: "store-doc-20b",
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
    id: "store-doc-21b",
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
    id: "store-gstin",
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
// 2. SAURAV MEDICAL AGENCY (Santosh Kumar - Kotwali Chowk - 21 Brands)
// ============================================================================
export const AGENCY_DETAILS = {
  id: "agency",
  name: "Saurav Medical Agency",
  brandName: "Saurav Medical Agency",
  tagline: "Wholesaler of Generic, Surgical, Ayurvedic and OTC Medicines",
  supplyScope: "High-Margin Generic Formulations, Surgical Consumables, Ayurvedic & OTC Medicines",
  ownerName: "Santosh Kumar",
  ownerRole: "Proprietor & Wholesale Head",
  mobile: "7070605245",
  phoneDisplay: "+91 70706 05245",
  officePhone: "7070605245",
  email: "sauravmedicalagencybgp@gmail.com",
  address: "Kotwali Chowk, Next to ICICI Bank (1st Floor), Bhagalpur - 812002",
  city: "Bhagalpur, Bihar",
  dlPlaceholder: "DL Nos. 20B/BGP/GEN-XXXXX & 21B/BGP/GEN-XXXXX",
  gstinPlaceholder: "GSTIN: 10XXXXX0000X2ZY",
  hours: "Mon – Sat: 9:00 AM – 8:30 PM",
  whatsappUrl: "https://wa.me/917070605245?text=Hello%20Santosh%20ji%20(Saurav%20Medical%20Agency),%20I%20am%20a%20chemist%20and%20want%20to%20enquire%20about%20Generic%20medicines%20and%20schemes.",
  href: "/agency",
};

// 21 GENERIC COMPANIES FOR SAURAV MEDICAL AGENCY (From visiting card back)
export const AGENCY_BRANDS: BrandPartner[] = [
  { id: 1, name: "Alkem", category: "Generic Lines", specialty: "Antibiotics & Generics", color: "#15803d", badge: "High Margin" },
  { id: 2, name: "Aristo", category: "Generic Lines", specialty: "Gastro & Pain Formulations", color: "#b91c1c", badge: "Fast Mover" },
  { id: 3, name: "Cipla", category: "Generic Lines", specialty: "Respiratory & Daily Acute", color: "#ea580c", badge: "Trusted" },
  { id: 4, name: "Medley", category: "Generic Lines", specialty: "Hematinics & Analgesics", color: "#0284c7", badge: "Bulk Stock" },
  { id: 5, name: "Lupin", category: "Generic Lines", specialty: "Anti-TB & Cardiac Formulations", color: "#2563eb", badge: "Depot Line" },
  { id: 6, name: "Abbott", category: "Generic Lines", specialty: "Metabolic & Acute Generics", color: "#0284c7", badge: "High Demand" },
  { id: 7, name: "Intas", category: "Generic Lines", specialty: "Specialty Generics", color: "#0d9488", badge: "Chemist Choice" },
  { id: 8, name: "Smart Lab", category: "Generic Lines", specialty: "High Margin Fast Movers", color: "#7c3aed", badge: "10+1 Scheme" },
  { id: 9, name: "Silver Cross", category: "Generic Lines", specialty: "Pantoprazole & Gastro", color: "#475569", badge: "10+1 Scheme" },
  { id: 10, name: "Biochem", category: "Generic Lines", specialty: "Antibiotic Injections & Tabs", color: "#0891b2", badge: "Bulk Pack" },
  { id: 11, name: "Torque", category: "Generic Lines", specialty: "Cough Syrups & Tonics", color: "#e11d48", badge: "Syrup Line" },
  { id: 12, name: "Jacsonpal", category: "Generic Lines", specialty: "Anti-Allergy & Pain Care", color: "#b45309", badge: "Regular Stock" },
  { id: 13, name: "Windlass", category: "Generic Lines", specialty: "Bulk Tablet Formulations", color: "#047857", badge: "10+2 Scheme" },
  { id: 14, name: "Mankind", category: "Generic Lines", specialty: "High Demand Chemist Lines", color: "#dc2626", badge: "Fast Mover" },
  { id: 15, name: "Laborate", category: "Generic Lines", specialty: "Pain Gels & Ointments", color: "#4f46e5", badge: "Ointment Line" },
  { id: 16, name: "Lee Ford", category: "Generic Lines", specialty: "Syrups & Generic Drops", color: "#059669", badge: "Pediatric Line" },
  { id: 17, name: "Ramsans", category: "Generic Lines", specialty: "Multivitamin Tonics", color: "#d97706", badge: "Tonic Line" },
  { id: 18, name: "Safeone", category: "Generic Lines", specialty: "Surgical Disposables & Antiseptics", color: "#0284c7", badge: "Surgical" },
  { id: 19, name: "Touchone", category: "Generic Lines", specialty: "Calcium & Vitamin Formulations", color: "#16a34a", badge: "High Margin" },
  { id: 20, name: "Dr Reddy", category: "Generic Lines", specialty: "Prescription Generics", color: "#9333ea", badge: "Premium Line" },
  { id: 21, name: "Alembic etc.", category: "Generic Lines", specialty: "Antibiotics & Syrups", color: "#0f766e", badge: "Bulk Stock" },
];

export const AGENCY_SUPPLIES: SupplyCategory[] = [
  {
    id: "generic-tablets",
    title: "High-Margin Generic Formulations",
    tagline: "Direct Wholesale Schemes for Retail Pharmacies",
    description: "Fast-moving generic tablets, capsules, and dry syrups from Alkem, Aristo, Cipla, Smart Lab, and 17+ leading generic manufacturers.",
    badge: "Up to 70% Margin",
    items: [
      "Amoxyclav 625mg & Cefixime 200mg Tablets",
      "Pantoprazole 40mg & Pantoprazole DSR",
      "Paracetamol 650mg & Aceclofenac Combinations",
      "Montelukast + Levocetirizine Formulations",
      "Multivitamin, Calcium & Antioxidant Capsules",
    ],
  },
  {
    id: "surgical-disposables",
    title: "Surgical & Hospital Consumables",
    tagline: "Bulk Counter Supply at Direct Depot Rates",
    description: "Daily fast-moving surgical disposables, syringes, examination gloves, IV cannula, and clinical dressings for retail counters and clinics.",
    badge: "Wholesale Bulk",
    items: [
      "Sterile Hypodermic Syringes (2ml, 5ml, 10ml)",
      "Latex Examination & Surgical Gloves",
      "IV Infusion Sets & Scalp Vein Needles",
      "Absorbent Cotton Rolls, Bandages & Gauze",
      "Micropore & Adhesive Medical Tapes",
    ],
  },
  {
    id: "ayurvedic-otc",
    title: "Ayurvedic & OTC Medicines",
    tagline: "High Consumer Demand Counter Formulations",
    description: "Certified herbal cough syrups, liver tonics, joint pain liniments, digestive churns, and popular over-the-counter wellness formulations.",
    badge: "Fast Counter Pickup",
    items: [
      "Herbal Cough Syrups & Honey-Tulsi Tonics",
      "Ayurvedic Liver Care & Enzyme Suspensions",
      "Pain Relief Liniments & Herbal Roll-ons",
      "Acidity Relief Sachets & Digestive Syrups",
      "Immunity Boosters & Daily OTC Health Products",
    ],
  },
  {
    id: "bonus-schemes",
    title: "Chemist Trade Bonus Schemes",
    tagline: "10+1 & 10+2 Free Bonus Deals",
    description: "Attractive carton purchase schemes enabling retail medical shops to earn extra bonus boxes and increase counter profitability.",
    badge: "10+1 & 10+2 Schemes",
    items: [
      "10+1 & 10+2 Free Box Deals on Fast Movers",
      "Bulk Carton Quantity Special Price Cuts",
      "Same-Day Chemist Counter Packing & Dispatch",
      "Computerized GST Invoices with Clear Scheme Details",
    ],
  },
];

export const AGENCY_DOCUMENTS: CredentialDocument[] = [
  {
    id: "agency-doc-20b",
    title: "Wholesale Drug License - Form 20B",
    formType: "Form 20B (Generic & Surgical Wholesale)",
    docNumber: "DL No. 20B/BGP/GEN-XXXXX",
    issuingAuthority: "Drugs Control Administration, Government of Bihar",
    validity: "Active Wholesale Chemist License",
    category: "Drug License",
    description: "Statutory wholesale drug license to store and supply generic formulations, surgical items, and OTC medicines to retail counters.",
    highlights: [
      "Counter Address: Kotwali Chowk (1st Floor), Bhagalpur",
      "Compliance with Drugs & Cosmetics Act",
      "Registered chemist counter supervision",
    ],
  },
  {
    id: "agency-doc-21b",
    title: "Wholesale Drug License - Form 21B",
    formType: "Form 21B (Special Formulations Wholesale)",
    docNumber: "DL No. 21B/BGP/GEN-XXXXX",
    issuingAuthority: "Drugs Control Administration, Government of Bihar",
    validity: "Active Wholesale License",
    category: "Drug License",
    description: "Wholesale drug license allowing bulk distribution of scheduled generic oral formulations and pediatric dry syrups.",
    highlights: [
      "Batch tested generic manufacturers only",
      "Authorized wholesale desk next to ICICI Bank",
      "Timely statutory renewal protocol",
    ],
  },
  {
    id: "agency-gstin",
    title: "GSTIN Tax Registration Certificate",
    formType: "Form GST REG-06 (Regular Taxpayer)",
    docNumber: "GSTIN: 10XXXXX0000X2ZY",
    issuingAuthority: "Commercial Taxes Department, Government of Bihar",
    validity: "Active & In Good Standing",
    category: "GSTIN",
    description: "Computerized GST billing ensuring retail chemist shops receive full tax credit (ITC) with exact HSN codes.",
    highlights: [
      "HSN 3004 itemized tax invoices",
      "Clear PTR rates and bonus scheme notation",
      "Computer-generated delivery challans",
    ],
  },
];


// ============================================================================
// Compatibility mappings
// ============================================================================
export const COMPANY_DETAILS = {
  name: "Saurav Medical",
  subname: "Saurav Medical Store & Saurav Medical Agency",
  tagline: "Pharmaceuticals Stockist, Vaccines & Generic Distributors",
  primaryMobile: "8789028637",
  mobile: "8789028637",
  phoneDisplay: "+91 87890 28637",
  officePhone: "9431296074",
  email: "sauravmedical@gmail.com",
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

export const CARD_COMPANIES = STORE_BRANDS;
export const CREDENTIALS_DATA = STORE_DOCUMENTS;
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
