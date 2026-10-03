import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saurav Medical Agency | Ethical Medicines & Vaccines Depot Stockist Bhagalpur",
  description:
    "Saurav Medical Agency: 35+ years established ethical pharmaceutical distributor and unbroken 2°C–8°C cold chain vaccine stockist representing 28 leading pharma companies at M.P. Dwivedi Road, Bhagalpur.",
  keywords: [
    "Saurav Medical Agency",
    "Gaurav Sarawgi Bhagalpur",
    "ethical medicines distributor Bhagalpur",
    "pharmaceutical stockist Bihar",
    "vaccine stockist Bhagalpur",
    "cold chain vaccine supplier",
    "pharma depot Bhagalpur",
    "M.P. Dwivedi Road Bhagalpur",
    "hospital medicine supplies Bihar",
  ],
  alternates: {
    canonical: "https://sauravmedical.in/agency",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sauravmedical.in/agency",
    siteName: "Saurav Medical Agency",
    title: "Saurav Medical Agency | 35+ Yrs Pharma Depot Stockist, Bhagalpur",
    description:
      "Authorized depot stockist for 28 pharmaceutical leaders and unbroken 2°C–8°C cold chain vaccine distributor in Bhagalpur. Managed by Gaurav Sarawgi.",
    images: [
      {
        url: "/agency-owner-dp.jpg",
        width: 600,
        height: 750,
        alt: "Gaurav Sarawgi - Proprietor, Saurav Medical Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saurav Medical Agency | Ethical Medicines & Vaccines Stockist",
    description:
      "35+ years established pharmaceutical depot stockist & cold chain vaccine distributor at M.P. Dwivedi Road, Bhagalpur.",
    images: ["/agency-owner-dp.jpg"],
  },
};

const agencySchema = {
  "@context": "https://schema.org",
  "@type": ["WholesaleStore", "MedicalBusiness", "Pharmacy"],
  "@id": "https://sauravmedical.in/agency#business",
  "name": "Saurav Medical Agency",
  "legalName": "Saurav Medical Agency",
  "foundingDate": "1989",
  "description":
    "Authorized stockist for 28 pharmaceutical depots and cold chain vaccine distributor with 35+ years of healthcare service in Bhagalpur, Bihar.",
  "url": "https://sauravmedical.in/agency",
  "telephone": "+91-9431214343",
  "email": "gauravsarawgi1982@gmail.com",
  "hasMap": "https://maps.app.goo.gl/rXKY3c7rh8tH3BdK8?g_st=ac",
  "image": "https://sauravmedical.in/agency-owner-dp.jpg",
  "priceRange": "₹₹",
  "founder": {
    "@type": "Person",
    "name": "Gaurav Sarawgi",
    "jobTitle": "Proprietor",
    "image": "https://sauravmedical.in/agency-owner-dp.jpg",
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "M.P. Dwivedi Road",
    "addressLocality": "Bhagalpur",
    "addressRegion": "Bihar",
    "postalCode": "812002",
    "addressCountry": "IN",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "25.2444",
    "longitude": "86.9718",
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:00",
      "closes": "20:30",
    },
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "48",
    "bestRating": "5",
    "worstRating": "1",
  },
};

export default function AgencyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agencySchema) }}
      />
      {children}
    </>
  );
}
