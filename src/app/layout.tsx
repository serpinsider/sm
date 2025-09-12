import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

import ConditionalLayout from "@/components/ConditionalLayout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://santamonicamaids.com'),
  title: {
    default: "Santa Monica Maids | Professional House Cleaning Services - Santa Monica",
    template: "%s - Santa Monica Maids - Professional Cleaning"
  },
  description: "Professional house cleaning in Santa Monica. Licensed & insured maids, 100% satisfaction guarantee. Book your trusted cleaning service in Santa Monica, Venice, Brentwood & Pacific Palisades today!",
  keywords: [
    "house cleaning", 
    "maid service", 
    "residential cleaning", 
    "home cleaning", 
    "cleaning company",
    "Venice cleaning", 
    "Santa Monica cleaning", 
    "Brentwood cleaning", 
    "Pacific Palisades cleaning", 
    "California cleaning",
    "Santa Monica house cleaning", 
    "Venice maid service", 
    "Santa Monica maid service", 
    "California maid service", 
    "residential cleaning Santa Monica", 
    "home cleaning Santa Monica"
  ],
  authors: [{ name: "Santa Monica Maids" }],
  creator: "Santa Monica Maids",
  publisher: "Santa Monica Maids",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": 160,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://santamonicamaids.com",
    title: "Santa Monica Maids - Professional House Cleaning Service - Santa Monica",
    description: "Professional house cleaning service in Santa Monica, California. Reliable, insured, and trusted residential cleaning with free quotes.",
    siteName: "Santa Monica Maids",
    images: [
      {
        url: "/ogs-image.jpg",
        width: 1200,
        height: 630,
        alt: "Santa Monica Maids - Professional House Cleaning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Santa Monica Maids - Professional House Cleaning Service - Santa Monica",
    description: "Professional house cleaning service in Santa Monica, California. Reliable, insured, trusted residential cleaning. Get your free quote today!",
    creator: "@santamonicamaids",
    images: ["/ogs-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://santamonicamaids.com",
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        {/* Modern browsers - ICO */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        {/* Fallback - ICO */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        {/* iOS/macOS */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        {/* Android/Chrome */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        {/* Fathom - beautiful, simple website analytics */}
        <script src="https://cdn.usefathom.com/script.js" data-site="ELAPZTGP" defer></script>
        {/* / Fathom */}

      </head>
      <body
        className={`${inter.variable} ${merriweather.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <StructuredData type="local-business" />
        <StructuredData type="organization" />
        <StructuredData type="website" />
        <ConditionalLayout>
          {children}
        </ConditionalLayout>

      </body>
    </html>
  );
}