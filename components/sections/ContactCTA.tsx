"use client";

import { Mail } from "lucide-react";
import { fontBody, fontHeading } from "@/components/brand/tokens";

export function ContactCTA() {
  return (
    <section id="contact" aria-labelledby="cta-heading" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-400/20 rounded-full px-4 py-1.5 mb-6">
          <span className="text-orange-600 text-sm font-semibold">Free — No obligation</span>
        </div>
        <h2
          id="cta-heading"
          className="font-bold text-slate-900 mb-4"
          style={{ ...fontHeading, fontSize: "clamp(1.75rem, 4vw, 2.25rem)" }}
        >
          Book a Free AI Strategy Session
        </h2>
        <p className="text-slate-600 text-lg leading-relaxed mb-10" style={fontBody}>
          In 30 minutes, we&apos;ll identify your highest-ROI AI opportunity, give you a realistic
          implementation estimate, and tell you exactly what to do next — whether you work with us
          or not.
        </p>

        {/* Lead capture form */}
        <form
          className="text-left bg-slate-50 border border-slate-200 rounded-2xl p-8 max-w-lg mx-auto"
          onSubmit={(e) => e.preventDefault()}
          aria-label="Book a Free AI Strategy Session"
        >
          <div className="mb-5">
            <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              autoComplete="name"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none min-h-[44px] bg-white"
              placeholder="First and last name"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">
              Work Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none min-h-[44px] bg-white"
              placeholder="you@company.com"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-1">
              Company & Industry
            </label>
            <input
              id="company"
              type="text"
              name="company"
              autoComplete="organization"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none min-h-[44px] bg-white"
              placeholder="Acme Corp — Logistics"
              required
            />
          </div>
          <div className="mb-7">
            <label htmlFor="challenge" className="block text-sm font-semibold text-slate-700 mb-1">
              Biggest operational challenge right now
            </label>
            <textarea
              id="challenge"
              name="challenge"
              rows={3}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none bg-white resize-none"
              placeholder="e.g. We process 500 invoices/week manually and it&apos;s killing us..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-orange-300 outline-none flex items-center justify-center gap-2 min-h-[44px]"
          >
            <Mail className="w-5 h-5" aria-hidden="true" />
            Book My Free Strategy Session
          </button>
          <p className="text-center text-slate-400 text-xs mt-4">
            No sales pitch. Just a real conversation about your operations and AI potential.
          </p>
        </form>

        <p className="mt-6 text-slate-500 text-sm">
          Prefer email?{" "}
          <a
            href="mailto:jterrance@stakful.com"
            className="text-blue-600 hover:text-blue-700 font-medium focus-visible:ring-2 focus-visible:ring-blue-300 rounded-sm outline-none"
          >
            jterrance@stakful.com
          </a>
        </p>
      </div>
    </section>
  );
}
