import type { Metadata } from "next";
import { Lexend, Source_Sans_3 } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-lexend",
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-source-sans-3",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://stakful.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Stakful Systems — Fractional CTO for DFW Businesses",
    template: "%s — Stakful Systems",
  },
  description:
    "Fractional CTO services for DFW businesses. Azure certified, Microsoft Partner, 10+ years enterprise experience. AI strategy, implementation, and oversight without a $300K+ executive hire.",
  keywords: [
    "fractional CTO",
    "fractional AI CTO",
    "AI consulting DFW",
    "AI implementation Dallas",
    "Microsoft Partner",
    "Azure certified",
    "DFW Metroplex",
  ],
  authors: [{ name: "Terrance Jones", url: "https://www.linkedin.com/in/terrance-jones-677268123/" }],
  creator: "Stakful Systems",
  publisher: "Stakful Systems",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Stakful Systems",
    title: "Stakful Systems — Fractional CTO for DFW Businesses",
    description:
      "AI strategy, implementation, and oversight for DFW businesses. Azure certified, Microsoft Partner.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stakful Systems — Fractional CTO for DFW Businesses",
    description:
      "AI strategy, implementation, and oversight for DFW businesses. Azure certified, Microsoft Partner.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "business",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${lexend.variable} ${sourceSans3.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
