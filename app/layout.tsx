import type { Metadata } from "next";
import { Lexend, Source_Sans_3 } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Stakful M7 Ventures — Fractional AI CTO for DFW Businesses",
  description:
    "Your AI-Powered CTO for a Fraction of the Cost. Serving the DFW Metroplex. Azure certified, Microsoft Partner, 20+ years enterprise experience.",
  keywords: [
    "fractional AI CTO",
    "AI consulting DFW",
    "AI implementation Dallas",
    "Microsoft Partner",
    "Azure certified",
  ],
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
