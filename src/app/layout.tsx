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
  title: {
    default: "Saurav Medical | Healthcare Distribution Gateway, Bhagalpur",
    template: "%s | Saurav Medical",
  },
  description:
    "Saurav Medical Gateway: Saurav Medical Agency (Generic, Surgical & OTC Wholesaler, Kotwali Chowk) and Saurav Medical Store (28 Pharma Depots & Vaccines Stockist, M.P. Dwivedi Road, Bhagalpur).",
  keywords: [
    "Saurav Medical Agency",
    "Saurav Medical Store",
    "Gaurav Sarawgi Bhagalpur",
    "Santosh Kumar Bhagalpur",
    "wholesale medicine distributor Bhagalpur",
    "pharma stockist Bihar",
    "vaccines distributor Bhagalpur",
    "generic medicines wholesale",
  ],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} overflow-x-clip max-w-full`}>
      <body className="min-h-screen flex flex-col font-sans bg-[#071529] text-white antialiased selection:bg-blue-600 selection:text-white overflow-x-clip w-full max-w-full">
        {children}
        <ClientLayoutWidgets />
      </body>
    </html>
  );
}
