"use client";

import { CheckCircle, Users } from "lucide-react";
import { fontBody, fontHeading } from "@/components/brand/tokens";
import { useIntersection } from "@/components/primitives/useIntersection";

const METRICS = [
  { value: "70%", label: "Daily coordinator workflow automated" },
  { value: "$6,500", label: "Logistics coordinator cost replaced per month" },
  { value: "3×", label: "Delivery velocity vs. prior vendor" },
  { value: "6 weeks", label: "Kickoff to production go-live" },
] as const;

const BUILD_ITEMS = [
  "Document AI pipeline to extract structured data from BOL images (Azure Document Intelligence)",
  "Automated integration pushing verified data directly to their warehouse management system",
  "Exception handling workflow routing only edge cases to human review",
  "Real-time accuracy dashboard for operations manager visibility",
] as const;

export function CaseStudyDFW() {
  const { ref, visible } = useIntersection();
  return (
    <section
      id="case-study"
      ref={ref}
      aria-labelledby="case-study-heading"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-400/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-green-700 text-sm font-semibold">Client Case Study</span>
          </div>
          <h2
            id="case-study-heading"
            className="font-bold text-slate-900 mb-4"
            style={{ ...fontHeading, fontSize: "clamp(1.75rem, 4vw, 2.25rem)" }}
          >
            DFW Connect 3PL — Grand Prairie, TX
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto" style={fontBody}>
            A third-party logistics company drowning in manual data entry. We automated their
            inbound freight processing pipeline and went from kickoff to production go-live in 6
            weeks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Story */}
          <div>
            <div className="mb-8">
              <h3 className="font-bold text-slate-900 text-xl mb-3" style={fontHeading}>
                The Problem
              </h3>
              <p className="text-slate-600 leading-relaxed" style={fontBody}>
                DFW Connect was processing 400+ inbound shipments per week using a team of 3
                data-entry clerks. Every Bill of Lading was manually transcribed into their WMS.
                Errors were costing them carrier claims and lost inventory. Staff turnover was
                constant because the work was mind-numbing.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="font-bold text-slate-900 text-xl mb-3" style={fontHeading}>
                What We Built
              </h3>
              <ul className="space-y-3 text-slate-600" style={fontBody}>
                {BUILD_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle
                      className="w-5 h-5 text-green-600 mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  <Users className="w-5 h-5 text-slate-600" />
                </div>
                <div>
                  <p className="text-slate-700 italic text-sm leading-relaxed mb-2">
                    &ldquo;We had been burned twice before. The Stakful Systems team was different
                    &mdash; they showed us their process, their governance model, and their test
                    coverage before writing a single line of production code. Six weeks later we
                    were live.&rdquo;
                  </p>
                  <p className="text-slate-500 text-xs font-semibold">
                    Operations Director, DFW Connect 3PL
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-4">
            {METRICS.map(({ value, label }, i) => (
              <div
                key={value}
                className={`stat-reveal bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-5 text-white ${
                  visible ? "visible" : ""
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <p className="text-3xl font-bold text-white mb-1" style={fontHeading}>
                  {value}
                </p>
                <p className="text-sm text-slate-400">{label}</p>
              </div>
            ))}
            <div className="col-span-2 bg-orange-500 rounded-2xl p-5 text-white">
              <p className="font-bold text-lg mb-1" style={fontHeading}>
                The Outcome
              </p>
              <p className="text-orange-100 text-sm leading-relaxed">
                94% reduction in manual dispatch errors. Zero manual BOL entry. Billing lag revenue
                leakage eliminated (3–7% of gross revenue recovered). Fractional CTO retainer
                activated — Phase 2 roadmap already underway.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
