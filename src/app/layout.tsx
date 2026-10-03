import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientLayoutWidgets } from "@/components/layout/client-layout-widgets";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sauravmedical.in"),
  title: {
    default: "Saurav Medical | Healthcare Distribution Gateway, Bhagalpur",
    template: "%s | Saurav Medical Bhagalpur",
  },
  description:
    "Saurav Medical Gateway: Saurav Medical Agency (Ethical Medicines, 28 Pharma Depots & Vaccines Stockist, M.P. Dwivedi Road) and Saurav Medical Store (Generic & Surgical Wholesale, Kotwali Chowk, Bhagalpur).",
  keywords: [
    "Saurav Medical Agency",
    "Saurav Medical Store",
    "Gaurav Sarawgi Bhagalpur",
    "Santosh Kumar Bhagalpur",
    "wholesale medicine distributor Bhagalpur",
    "pharma stockist Bihar",
    "vaccines distributor Bhagalpur",
    "generic medicines wholesale Bhagalpur",
    "ethical medicines wholesale Bhagalpur",
    "medical store Kotwali Chowk",
  ],
  alternates: {
    canonical: "https://sauravmedical.in",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sauravmedical.in",
    siteName: "Saurav Medical Bhagalpur",
    title: "Saurav Medical | Healthcare Distribution Gateway, Bhagalpur",
    description:
      "Official Healthcare Distribution Gateway: Saurav Medical Agency (Ethical Medicines & Vaccines, M.P. Dwivedi Road) and Saurav Medical Store (Generic & Surgical Wholesale, Kotwali Chowk), Bhagalpur.",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Saurav Medical Brand Identity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saurav Medical | Healthcare Distribution Gateway, Bhagalpur",
    description:
      "Official Gateway for Saurav Medical Agency (Ethical Wholesale) and Saurav Medical Store (Generic & Surgical Wholesale), Bhagalpur.",
    images: ["/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#071529",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://sauravmedical.in/#organization",
      "name": "Saurav Medical",
      "url": "https://sauravmedical.in",
      "logo": "https://sauravmedical.in/favicon.png",
      "description":
        "Healthcare Distribution Gateway comprising Saurav Medical Agency (Ethical Wholesale) and Saurav Medical Store (Generic Wholesale) in Bhagalpur, Bihar.",
      "sameAs": [
        "https://maps.app.goo.gl/rXKY3c7rh8tH3BdK8?g_st=ac",
        "https://maps.app.goo.gl/wmPnEhdFsawuqxWZ8?g_st=ac"
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-9431214343",
          "contactType": "wholesale sales",
          "areaServed": "IN",
          "availableLanguage": ["Hindi", "English"]
        },
        {
          "@type": "ContactPoint",
          "telephone": "+91-9334471207",
          "contactType": "retailer support",
          "areaServed": "IN",
          "availableLanguage": ["Hindi", "English"]
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://sauravmedical.in/#website",
      "url": "https://sauravmedical.in",
      "name": "Saurav Medical",
      "publisher": {
        "@id": "https://sauravmedical.in/#organization"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} overflow-x-clip max-w-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-[#071529] text-white antialiased selection:bg-blue-600 selection:text-white overflow-x-clip w-full max-w-full">
        {children}
        <ClientLayoutWidgets />
      </body>
    </html>
  );
}
