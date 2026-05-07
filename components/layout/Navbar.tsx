"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { StakfulLogo } from "@/components/brand/StakfulLogo";
import { fontHeading } from "@/components/brand/tokens";

const NAV_ITEMS = [
  { href: "#ste", label: "Our Approach" },
  { href: "#services", label: "Services" },
  { href: "#case-study", label: "Case Study" },
  { href: "#about", label: "About" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 shadow-lg" : "bg-slate-900"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-sky-400 rounded-sm outline-none"
          >
            <div
              className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center"
              aria-hidden="true"
            >
              <StakfulLogo className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-lg" style={fontHeading}>
              Stakful Systems
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-slate-300 hover:text-white text-sm font-medium transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-sky-400 rounded-sm outline-none"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-orange-500 hover:bg-orange-400 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-orange-300 outline-none"
            >
              Book a Free AI Strategy Session
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-slate-300 hover:text-white focus-visible:ring-2 focus-visible:ring-sky-400 rounded-sm outline-none p-1"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-slate-800 py-4 flex flex-col gap-4">
            {NAV_ITEMS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-slate-300 hover:text-white font-medium transition-colors px-2 py-1"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="bg-orange-500 hover:bg-orange-400 text-white px-4 py-3 rounded-lg text-sm font-semibold transition-colors text-center"
            >
              Book a Free AI Strategy Session
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
