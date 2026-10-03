import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saurav Medical Store | Generic & Surgical Medicine Wholesaler Bhagalpur",
  description:
    "Saurav Medical Store: Registered wholesale medicine store stocking 21+ leading generic companies, surgical goods, and high-margin 10+1 & 10+2 trade bonus deals at Kotwali Chowk, Bhagalpur.",
  keywords: [
    "Saurav Medical Store",
    "Santosh Kumar Bhagalpur",
    "generic medicine wholesale Bhagalpur",
    "surgical goods wholesaler Bihar",
    "OTC medicine bulk supplier",
    "chemist bonus schemes 10+1",
    "Kotwali Chowk medicine shop",
    "wholesale pharmacy Bhagalpur",
  ],
  alternates: {
    canonical: "https://sauravmedical.in/store",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sauravmedical.in/store",
    siteName: "Saurav Medical Store",
    title: "Saurav Medical Store | Generic & Surgical Medicine Wholesale, Bhagalpur",
    description:
      "Registered wholesale medicine store stocking 21+ leading generic companies with high-margin schemes at Kotwali Chowk, Bhagalpur. Managed by Santosh Kumar.",
    images: [
      {
        url: "/store-onwer-dp.jpg",
        width: 600,
        height: 750,
        alt: "Santosh Kumar - Founder, Saurav Medical Store",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saurav Medical Store | Generic & Surgical Medicine Wholesale",
    description:
      "Wholesale generic medicine and surgical disposables supplier at Kotwali Chowk (Next to ICICI Bank), Bhagalpur.",
    images: ["/store-onwer-dp.jpg"],
  },
};

const storeSchema = {
  "@context": "https://schema.org",
  "@type": ["WholesaleStore", "Pharmacy", "Store"],
  "@id": "https://sauravmedical.in/store#business",
  "name": "Saurav Medical Store",
  "legalName": "Saurav Medical Store",
  "foundingDate": "2021",
  "description":
    "Registered wholesale medicine store stocking 21+ leading generic companies, surgical supplies, and high-margin 10+1 schemes at Kotwali Chowk, Bhagalpur.",
  "url": "https://sauravmedical.in/store",
  "telephone": "+91-9334471207",
  "email": "santoshkumar71207@gmail.com",
  "hasMap": "https://maps.app.goo.gl/wmPnEhdFsawuqxWZ8?g_st=ac",
  "image": "https://sauravmedical.in/store-onwer-dp.jpg",
  "priceRange": "₹₹",
  "founder": {
    "@type": "Person",
    "name": "Santosh Kumar",
    "jobTitle": "Founder",
    "image": "https://sauravmedical.in/store-onwer-dp.jpg",
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kotwali Chowk, Next to ICICI Bank, 1st Floor",
    "addressLocality": "Bhagalpur",
    "addressRegion": "Bihar",
    "postalCode": "812002",
    "addressCountry": "IN",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "25.2425",
    "longitude": "86.9745",
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
    "reviewCount": "35",
    "bestRating": "5",
    "worstRating": "1",
  },
};

export default function StoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(storeSchema) }}
      />
      {children}
    </>
  );
}
