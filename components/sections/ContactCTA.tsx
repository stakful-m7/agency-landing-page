"use client";

import { useActionState } from "react";
import Script from "next/script";
import { Mail } from "lucide-react";
import { fontBody, fontHeading } from "@/components/brand/tokens";
import { submitLead, type LeadState } from "@/app/actions/lead";

const initialState: LeadState = { ok: false };
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

const inputClass =
  "w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none min-h-[44px] bg-white";

const inputErrorClass =
  "w-full border border-red-500 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none min-h-[44px] bg-white";

export function ContactCTA() {
  const [state, formAction, pending] = useActionState(submitLead, initialState);

  if (state.ok) {
    return (
      <section
        id="contact"
        aria-labelledby="cta-heading"
        className="scroll-mt-16 py-24 bg-white"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-400/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-green-700 text-sm font-semibold">Request received</span>
          </div>
          <h2
            id="cta-heading"
            className="font-bold text-slate-900 mb-4"
            style={{ ...fontHeading, fontSize: "clamp(1.75rem, 4vw, 2.25rem)" }}
          >
            Thanks — your strategy session request is in.
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6" style={fontBody}>
            {state.message}
          </p>
          <p className="text-slate-500 text-sm">
            Reach me directly at{" "}
            <a
              href="mailto:jterrance@stakful.com"
              className="text-blue-600 hover:text-blue-700 font-medium focus-visible:ring-2 focus-visible:ring-blue-300 rounded-sm outline-none"
            >
              jterrance@stakful.com
            </a>{" "}
            if you need a faster response.
          </p>
        </div>
      </section>
    );
  }

  const fieldErrors = state.fieldErrors ?? {};

  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="scroll-mt-16 py-24 bg-white"
    >
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

        <form
          action={formAction}
          className="text-left bg-slate-50 border border-slate-200 rounded-2xl p-8 max-w-lg mx-auto"
          aria-label="Book a Free AI Strategy Session"
          noValidate
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
              required
              minLength={2}
              aria-invalid={Boolean(fieldErrors.name)}
              aria-describedby={fieldErrors.name ? "name-error" : undefined}
              className={fieldErrors.name ? inputErrorClass : inputClass}
              placeholder="First and last name"
            />
            {fieldErrors.name && (
              <p id="name-error" className="text-red-600 text-xs mt-1">
                {fieldErrors.name}
              </p>
            )}
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
              required
              aria-invalid={Boolean(fieldErrors.email)}
              aria-describedby={fieldErrors.email ? "email-error" : undefined}
              className={fieldErrors.email ? inputErrorClass : inputClass}
              placeholder="you@company.com"
            />
            {fieldErrors.email && (
              <p id="email-error" className="text-red-600 text-xs mt-1">
                {fieldErrors.email}
              </p>
            )}
          </div>

          <div className="mb-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-1">
                Company
              </label>
              <input
                id="company"
                type="text"
                name="company"
                autoComplete="organization"
                required
                aria-invalid={Boolean(fieldErrors.company)}
                aria-describedby={fieldErrors.company ? "company-error" : undefined}
                className={fieldErrors.company ? inputErrorClass : inputClass}
                placeholder="Acme Corp"
              />
              {fieldErrors.company && (
                <p id="company-error" className="text-red-600 text-xs mt-1">
                  {fieldErrors.company}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="industry" className="block text-sm font-semibold text-slate-700 mb-1">
                Industry
              </label>
              <input
                id="industry"
                type="text"
                name="industry"
                autoComplete="organization-title"
                className={inputClass}
                placeholder="Logistics, Manufacturing, etc."
              />
            </div>
          </div>

          <div className="mb-5">
            <label htmlFor="challenge" className="block text-sm font-semibold text-slate-700 mb-1">
              Biggest operational challenge right now
            </label>
            <textarea
              id="challenge"
              name="challenge"
              rows={3}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none bg-white resize-none"
              placeholder="e.g. We process 500 invoices/week manually..."
            />
          </div>

          {TURNSTILE_SITE_KEY && (
            <div className="mb-5">
              <Script
                src="https://challenges.cloudflare.com/turnstile/v0/api.js"
                strategy="lazyOnload"
                async
                defer
              />
              <div
                className="cf-turnstile"
                data-sitekey={TURNSTILE_SITE_KEY}
                data-theme="light"
              />
              {fieldErrors.captcha && (
                <p className="text-red-600 text-xs mt-1">{fieldErrors.captcha}</p>
              )}
            </div>
          )}

          <button
            type="submit"
            disabled={pending}
            className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 disabled:cursor-not-allowed text-white font-semibold text-lg px-8 py-4 rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-orange-300 outline-none flex items-center justify-center gap-2 min-h-[44px]"
          >
            <Mail className="w-5 h-5" aria-hidden="true" />
            {pending ? "Sending..." : "Book My Free Strategy Session"}
          </button>

          {state.message && !state.ok && (
            <p
              role="alert"
              aria-live="polite"
              className="text-red-600 text-sm mt-3 text-center"
            >
              {state.message}
            </p>
          )}

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
